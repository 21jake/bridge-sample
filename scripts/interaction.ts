import { BigNumber } from 'ethers';
import { networks } from './networks';
import { convertBnToDecimal, convertDecimalToBn, getWalletByPK, sleep } from './utils';

const { TESTNET_DEPLOYER_PRIVATE_KEY: USER_PK_EXAMPLE } = process.env;

const lock = async (sourceChainId: number, amount: BigNumber) => {
  const sourceNetwork = networks[sourceChainId];

  const userWallet = getWalletByPK(USER_PK_EXAMPLE as string, sourceNetwork.provider);

  const lockingTx = await sourceNetwork.tokenContract
    .connect(userWallet)
    .transfer(sourceNetwork.bridgeContract.address, amount);

  const lockingReceipt = await lockingTx.wait();
  console.log(
    `Address ${userWallet.address} locked ${convertBnToDecimal(amount)} tokens on ${sourceNetwork.name}. TxHash: ${
      lockingReceipt.transactionHash
    }`
  );
};

const bridge = async (sourceChainId: number, targetChainId: number, amount: BigNumber) => {
    const sourceNetwork = networks[sourceChainId];
    const targetNetwork = networks[targetChainId];

  const userWallet = getWalletByPK(USER_PK_EXAMPLE as string, sourceNetwork.provider);

  const burningTx = await sourceNetwork.bridgeContract.connect(userWallet).burn(amount,targetChainId);
  const burningReceipt = await burningTx.wait();
  console.log(
    `Address ${userWallet.address} burns and transfers ${convertBnToDecimal(amount)} tokens from ${sourceNetwork.name} to ${targetNetwork.name}. TxHash: ${
        burningReceipt.transactionHash
    }`
  );

};

// more chainIds are in `./scripts/networks.ts`
const main = async () => {
  const sourceChainId = 97; 
  const targetChainId = 5;

  const lockedAmount = convertDecimalToBn('1000');
  const bridgeAmount = lockedAmount;

  await lock(sourceChainId, lockedAmount);
  sleep(10000);
  await bridge(sourceChainId, targetChainId, bridgeAmount);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
