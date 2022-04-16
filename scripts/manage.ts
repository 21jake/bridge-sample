import { networks } from './networks';
import { getWalletByPK } from "./utils";

const { TESTNET_DEPLOYER_PRIVATE_KEY } = process.env;

const authorizeBridgeContracts = async () => {

  const chainIds = Object.keys(networks);

  for (let index = 0; index < chainIds.length; index++) {
    const chainId = Number(chainIds[index])

    const network = networks[chainId];
    
    const deployerWallet = getWalletByPK(TESTNET_DEPLOYER_PRIVATE_KEY as string, network.provider);

    const burnerRole = await network.tokenContract.BURNER_ROLE();
    const minterRole = await network.tokenContract.MINTER_ROLE();
    const contractWithSigner = await network.tokenContract.connect(deployerWallet);

    const grantMinterTx = await contractWithSigner.grantRole(minterRole, network.bridgeContract.address);
    const grantMinterHash = await grantMinterTx.wait();
    console.log(`Successfully assigned minter role to bridge contract on ${network.name}. TxHash: ${grantMinterHash.transactionHash}`);

    const grantBurnerTx = await contractWithSigner.grantRole(burnerRole, network.bridgeContract.address);
    const grantBurnerHash = await grantBurnerTx.wait();
    console.log(`Successfully assigned burner role to bridge contract on ${network.name}. TxHash: ${grantBurnerHash.transactionHash}`);
    
  }

}

const main = async () => {
    await authorizeBridgeContracts();
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
