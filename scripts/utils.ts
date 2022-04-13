import { InfuraProvider, JsonRpcProvider } from "@ethersproject/providers";
import { BigNumber, ethers } from "ethers";

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
