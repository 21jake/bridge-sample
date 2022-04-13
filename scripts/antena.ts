import { BigNumber, ethers } from "ethers";
import { BSC_NETWORK, BSC_PROVIDER, RINKEBY_NETWORK, RINKEBY_PROVIDER } from "./networks";
import { convertBnToDecimal, getWalletByPK } from "./utils";

const { TESTNET_STAKING_ADDR_PRIVATE_KEY: ADMIN_BRIDGE_PK } = process.env;

const rinkebyBridgeAdmin = getWalletByPK(ADMIN_BRIDGE_PK as string, RINKEBY_PROVIDER);
const bscBridgeAdmin = getWalletByPK(ADMIN_BRIDGE_PK as string, BSC_PROVIDER);

RINKEBY_NETWORK.tokenContract.on(
    'Transfer',
    async (_from: string, _to: string, _value: BigNumber, _event: ethers.Event ) => {
        if (_to !== RINKEBY_NETWORK.bridgeContract.address) return;
        // On rinkeby network, Bridge admin calling the bridge contract to burn token
        // A Burn event from Rinkeby network is emitted
        // Upon Burn event in network rinkeby, a listener trigger
        // On BSC network, bridge admin calling mint to mint burned amount to the burner
        console.log(`Rinkeby bridge contract received ${convertBnToDecimal(_value)} tokens from ${_from}, attempting to burn`);
        const bridgeWithSigner = await RINKEBY_NETWORK.bridgeContract.connect(rinkebyBridgeAdmin);
        const burnTx = await bridgeWithSigner.burn(_from, _value);
        const receipt = await burnTx.wait();
        console.log(`Burn tx hash: ${receipt.transactionHash}`)
      }
);
  
RINKEBY_NETWORK.bridgeContract.on("Burn",async (_sender: string, _amount: BigNumber) => {
    console.log(`Successful burn attempt on Rinkeby. ${convertBnToDecimal(_amount)} tokens are burnt from bridge's account`);
    console.log(`Burn event emitted on Rinkeby network, attempting to mint to ${_sender} on BSC network`);
    const bridgeWithSigner = await BSC_NETWORK.bridgeContract.connect(bscBridgeAdmin);
    const mintTx = await bridgeWithSigner.mint(_sender, _amount);
    const receipt = await mintTx.wait();
    console.log(`Mint tx hash: ${receipt.transactionHash}`)
})

BSC_NETWORK.bridgeContract.on("Mint",async (_sender: string, _amount: BigNumber) => {
    console.log(`Successful mint attempt on BSC. ${convertBnToDecimal(_amount)} tokens are minted to ${_sender}`);
})


//   const burnToken = (sender: string) => {

//   }

/**
 * 1. User transfer to bridge
 * 2. Listener listens to bridge got transfered, with amount
 * 3. Bridge's admin call bridge to burn the transfered amount from bridge's account
 * 4. Burn successful, a `Bridge` event is emitted
 * 5. Listener => bridge's admin (other chain) calls mint function from the bridge contract to the sender
 * 
 */