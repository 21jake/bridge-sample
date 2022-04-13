import { BigNumber, ethers } from "ethers";
import { NetworkBridge } from "../typechain";
import { BSC_NETWORK, BSC_PROVIDER, RINKEBY_NETWORK, RINKEBY_PROVIDER } from "./networks";
import { burnTokenFromBridgeAcc, convertBnToDecimal, getWalletByPK, mintTokenToSender } from "./utils";

const { TESTNET_STAKING_ADDR_PRIVATE_KEY: ADMIN_BRIDGE_PK } = process.env;

const rinkebyBridgeAdmin = getWalletByPK(ADMIN_BRIDGE_PK as string, RINKEBY_PROVIDER);
const bscBridgeAdmin = getWalletByPK(ADMIN_BRIDGE_PK as string, BSC_PROVIDER);


// On network A, user transfer token to the bridge
// A listener signals the bridge's admin calling the bridge contract to burn the transfered token
// A Burn event from network A is emitted
// A listener signals the bridge's admin of network B to mint the burnt amount to the user
// A mint event is emitted

// BEGIN HANDLING ON RINKEBY

RINKEBY_NETWORK.tokenContract.on(
    'Transfer',
    async (_from: string, _to: string, _value: BigNumber) => {
        if (_to !== RINKEBY_NETWORK.bridgeContract.address) return;
        console.log(`Rinkeby bridge contract received ${convertBnToDecimal(_value)} tokens from ${_from}, attempting to burn`);
        await burnTokenFromBridgeAcc(RINKEBY_NETWORK.bridgeContract, rinkebyBridgeAdmin, {_from, _value})
      }
);
  
RINKEBY_NETWORK.bridgeContract.on("Burn",async (_sender: string, _value: BigNumber) => {
    console.log(`Successful burn attempt on Rinkeby. ${convertBnToDecimal(_value)} tokens are burnt from bridge's account`);
    console.log(`Burn event emitted on Rinkeby network, attempting to mint to ${_sender} on BSC network`);

    await mintTokenToSender(BSC_NETWORK.bridgeContract, bscBridgeAdmin, {_sender, _value});
})

BSC_NETWORK.bridgeContract.on("Mint",async (_sender: string, _amount: BigNumber) => {
    console.log(`Successful mint attempt on BSC. ${convertBnToDecimal(_amount)} tokens are minted to ${_sender}`);
    console.log('------------------------------');
    
})

// END HANDLING ON RINKEBY

// BEGIN HANDLING ON BSC

BSC_NETWORK.tokenContract.on(
    'Transfer',
    async (_from: string, _to: string, _value: BigNumber, _event: ethers.Event ) => {
        if (_to !== BSC_NETWORK.bridgeContract.address) return;
        console.log(`BSC bridge contract received ${convertBnToDecimal(_value)} tokens from ${_from}, attempting to burn`);
        await burnTokenFromBridgeAcc(BSC_NETWORK.bridgeContract, bscBridgeAdmin, {_from, _value})
      }
);

BSC_NETWORK.bridgeContract.on("Burn",async (_sender: string, _value: BigNumber) => {
    console.log(`Successful burn attempt on BSC. ${convertBnToDecimal(_value)} tokens are burnt from bridge's account`);
    console.log(`Burn event emitted on BSC network, attempting to mint to ${_sender} on Rinkeby network`);

    await mintTokenToSender(RINKEBY_NETWORK.bridgeContract, rinkebyBridgeAdmin, {_sender, _value});
})

RINKEBY_NETWORK.bridgeContract.on("Mint",async (_sender: string, _amount: BigNumber) => {
    console.log(`Successful mint attempt on Rinkeby. ${convertBnToDecimal(_amount)} tokens are minted to ${_sender}`);
    console.log('------------------------------');
})

// END HANDLING ON BSC