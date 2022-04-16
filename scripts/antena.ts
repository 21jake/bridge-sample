import { BigNumber } from "ethers";
import { networks } from "./networks";
import { convertBnToDecimal, getWalletByPK } from "./utils";

const { TESTNET_BRIDGE_ADMIN_PRIVATE_KEY: BRIDGE_ADMIN_PK } = process.env;

const chainIds = Object.keys(networks);

chainIds.forEach(chainId => {
    const network = networks[Number(chainId)];
    const bridgeAdmin = getWalletByPK(BRIDGE_ADMIN_PK as string, network.provider);


    network.tokenContract.on('Transfer',async (_from: string, _to: string, _value: BigNumber) => {
        if (_to !== network.bridgeContract.address) return;
        console.log("----BEGIN LOGGING LOCKING----");
        const tx = await network.bridgeContract.connect(bridgeAdmin).lock(_from, _value);
        const receipt = await tx.wait();
        console.log(`${_from} locked ${convertBnToDecimal(_value)} tokens on ${network.name} network`)
        console.log(`Tokens locking tx: ${receipt.transactionHash}`);
        console.log("----END LOGGING LOCKING----");
    })

    network.bridgeContract.on('Burn',async (_from: string, _value: BigNumber, chainId: BigNumber) => {
        console.log("----BEGIN LOGGING BURNING----");
        const chosenNetwork = networks[chainId.toNumber()];
        const chosenNetworkBridgeAdmin = getWalletByPK(BRIDGE_ADMIN_PK as string, chosenNetwork.provider);
        const tx = await chosenNetwork.bridgeContract.connect(chosenNetworkBridgeAdmin).mint(_from, _value);
        const receipt = await tx.wait();
        console.log(`${_from} transfered ${convertBnToDecimal(_value)} from ${network.name} to ${chosenNetwork.name}`)
        console.log(`Token minting tx ${receipt.transactionHash}`);
        console.log("----END LOGGING BURNING----");
    })
});

/**
 * 1. Everytime user transfer to bridge contract, bridge admin calling lock function => Lock event emitted
 * 2. User can withdraw from locked amount => Token transfered
 * 3. User can burn locked token, a Burn event is emitted with chainId
 * 4. Bridge can mint token to a specific address
 */
