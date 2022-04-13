import { BSC_NETWORK, BSC_PROVIDER, RINKEBY_NETWORK, RINKEBY_PROVIDER } from "./networks";
import bscBridgeArtifact from "../deployments/bsc-testnet/NetworkBridge";
import rinkebyBridgeArtifact from "../deployments/rinkeby/NetworkBridge";
import { getWalletByPK } from "./utils";


const { TESTNET_DEPLOYER_PRIVATE_KEY } = process.env;

const assignBridgeAddress = async () => {
    
    const bscDeployerWallet = getWalletByPK(TESTNET_DEPLOYER_PRIVATE_KEY as string, BSC_PROVIDER);
    const bscMinterRole = await BSC_NETWORK.tokenContract.MINTER_ROLE();
    const bscBurnerRole = await BSC_NETWORK.tokenContract.BURNER_ROLE();
    const bscContractWithSigner = await BSC_NETWORK.tokenContract.connect(bscDeployerWallet);

    const bscGrantMinterTx = await bscContractWithSigner.grantRole(bscMinterRole, bscBridgeArtifact.address);
    await bscGrantMinterTx.wait();
    console.log("bscGrantMinterTx: ", bscGrantMinterTx);
    const bscGrantBurnerTx = await bscContractWithSigner.grantRole(bscBurnerRole, bscBridgeArtifact.address);
    await bscGrantBurnerTx.wait();
    console.log("bscGrantBurnerTx: ", bscGrantBurnerTx);


    const rinkebyDeployerWallet = getWalletByPK(TESTNET_DEPLOYER_PRIVATE_KEY as string, RINKEBY_PROVIDER);
    const rinkebyMinterRole = await RINKEBY_NETWORK.tokenContract.MINTER_ROLE();
    const rinkebyBurnerRole = await RINKEBY_NETWORK.tokenContract.BURNER_ROLE();
    const rinkebyContractWithSigner = await RINKEBY_NETWORK.tokenContract.connect(rinkebyDeployerWallet);

    const rinkebyGrantMinterTx = await rinkebyContractWithSigner.grantRole(rinkebyMinterRole, rinkebyBridgeArtifact.address);
    await rinkebyGrantMinterTx.wait();
    console.log("rinkebyGrantMinterTx: ", rinkebyGrantMinterTx);
    const rinkebyGrantBurnerTx = await rinkebyContractWithSigner.grantRole(rinkebyBurnerRole, rinkebyBridgeArtifact.address);
    await rinkebyGrantBurnerTx.wait();
    console.log("rinkebyGrantBurnerTx: ", rinkebyGrantBurnerTx);

}

const main = async () => {
    await assignBridgeAddress();
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
