import { ethers } from "hardhat";
import { NetworkBridge, Token } from "../typechain";

import bscTokenArtifact from "../deployments/bsc-testnet/Token";
import bscBridgeArtifact from "../deployments/bsc-testnet/NetworkBridge";
import rinkebyTokenArtifact from "../deployments/rinkeby/Token";
import rinkebyBridgeArtifact from "../deployments/rinkeby/NetworkBridge";

const bsctestnet_url = "https://data-seed-prebsc-1-s1.binance.org:8545/";
const bsctestnet_config = {
  chainId: 97,
  name: "bsc-testnet",
};

export const RINKEBY_PROVIDER = new ethers.providers.InfuraProvider(
  "rinkeby",
  process.env.INFURA_RINKEBY_PROJECT_ID
);

export const BSC_PROVIDER = new ethers.providers.JsonRpcProvider(
  bsctestnet_url,
  bsctestnet_config
);

interface INetwork {
  tokenContract: Token;
  bridgeContract: NetworkBridge;
}

export const BSC_NETWORK: INetwork = {
  tokenContract: <Token>(
    new ethers.Contract(
      bscTokenArtifact.address,
      bscTokenArtifact.abi,
      BSC_PROVIDER
    )
  ),
  bridgeContract: <NetworkBridge>(
    new ethers.Contract(
      bscBridgeArtifact.address,
      bscBridgeArtifact.abi,
      BSC_PROVIDER
    )
  ),
};

export const RINKEBY_NETWORK: INetwork = {
  tokenContract: <Token>(
    new ethers.Contract(
      rinkebyTokenArtifact.address,
      rinkebyTokenArtifact.abi,
      RINKEBY_PROVIDER
    )
  ),
  bridgeContract: <NetworkBridge>(
    new ethers.Contract(
      rinkebyBridgeArtifact.address,
      rinkebyBridgeArtifact.abi,
      RINKEBY_PROVIDER
    )
  ),
};