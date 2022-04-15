import { InfuraProvider, JsonRpcProvider } from "@ethersproject/providers";
import { BigNumber, ethers } from "ethers";
import { NetworkBridge } from "../typechain";

export const getWalletByPK = (
  PK: string,
  provider: InfuraProvider | JsonRpcProvider
) => {
  return new ethers.Wallet(PK, provider);
};

export const convertBnToDecimal = (input: BigNumber) => {
  return ethers.utils.formatEther(input.toString());
};
export const convertDecimalToBn = (input: string) => {
  const sanitizedInput = input.replace(/[^\d.-]/g, ""); //https://stackoverflow.com/questions/1862130/strip-all-non-numeric-characters-from-string-in-javascript
  return ethers.utils.parseUnits(sanitizedInput);
};

export const tokenAmountBN = (input: number) => {
  return BigNumber.from(input).mul(BigNumber.from(10).pow(18));
};

interface IBurnData {
  _from: string,
  _value: BigNumber
}
export const burnTokenFromBridgeAcc = async (bridgeContract: NetworkBridge, bridgeAdmin: ethers.Wallet, {_from, _value}: IBurnData) => {
  const bridgeWithSigner = await bridgeContract.connect(bridgeAdmin);
  const burnTx = await bridgeWithSigner.burn(_from, _value);
  const receipt = await burnTx.wait();
  console.log(`Burn tx hash: ${receipt.transactionHash}`)
};

interface IMintData {
  _sender: string,
  _value: BigNumber
}

export const mintTokenToSender = async (bridgeContract: NetworkBridge, bridgeAdmin: ethers.Wallet, {_sender, _value}: IMintData) => {
  const bridgeWithSigner = await bridgeContract.connect(bridgeAdmin);
  const mintTx = await bridgeWithSigner.mint(_sender, _value);
  const receipt = await mintTx.wait();
  console.log(`Mint tx hash: ${receipt.transactionHash}`)
}