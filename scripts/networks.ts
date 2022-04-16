import { ethers } from 'hardhat';
import { NetworkBridge, Token } from '../typechain';

// import bscTokenArtifact from '../deployments/bsc-testnet/Token';
// import bscBridgeArtifact from '../deployments/bsc-testnet/NetworkBridge';
// import rinkebyTokenArtifact from '../deployments/rinkeby/Token';
// import rinkebyBridgeArtifact from '../deployments/rinkeby/NetworkBridge';
import { InfuraProvider, JsonRpcProvider } from '@ethersproject/providers';
import { Deployment } from 'hardhat-deploy/types';

const bscTokenArtifact: Deployment = require('../deployments/bsc-testnet/Token.json');
const bscBridgeArtifact: Deployment = require('../deployments/bsc-testnet/NetworkBridge.json');

const rinkebyTokenArtifact: Deployment = require('../deployments/rinkeby/Token.json');
const rinkebyBridgeArtifact: Deployment = require('../deployments/rinkeby/NetworkBridge.json');

const goerliTokenArtifact: Deployment = require('../deployments/goerli/Token.json');
const goerliBridgeArtifact: Deployment = require('../deployments/goerli/NetworkBridge.json');

const bsctestnet_url = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
const bsctestnet_config = {
  chainId: 97,
  name: 'bsc-testnet',
};

export const RINKEBY_PROVIDER = new ethers.providers.InfuraProvider('rinkeby', process.env.INFURA_RINKEBY_PROJECT_ID);

export const GOERLI_PROVIDER = new ethers.providers.InfuraProvider('goerli', process.env.INFURA_GOERLI_PROJECT_ID);
export const ROPSTEN_PROVIDER = new ethers.providers.InfuraProvider('ropsten', process.env.INFURA_ROPSTEN_PROJECT_ID);

export const BSC_PROVIDER = new ethers.providers.JsonRpcProvider(bsctestnet_url, bsctestnet_config);

interface INetwork {
  name: string
  tokenContract: Token;
  bridgeContract: NetworkBridge;
  provider: InfuraProvider | JsonRpcProvider;
}


export const networks: Record<number, INetwork> = {
  4: {
    name: 'Rinkeby',
    provider: RINKEBY_PROVIDER,
    bridgeContract: <NetworkBridge>(
      new ethers.Contract(rinkebyBridgeArtifact.address, rinkebyBridgeArtifact.abi, RINKEBY_PROVIDER)
    ),
    tokenContract: <Token>new ethers.Contract(rinkebyTokenArtifact.address, rinkebyTokenArtifact.abi, RINKEBY_PROVIDER),
  },
  5: {
    name: 'Goerli',
    provider: GOERLI_PROVIDER,
    bridgeContract: <NetworkBridge>(
      new ethers.Contract(goerliBridgeArtifact.address, goerliBridgeArtifact.abi, GOERLI_PROVIDER)
    ),
    tokenContract: <Token>new ethers.Contract(goerliTokenArtifact.address, goerliTokenArtifact.abi, GOERLI_PROVIDER),
  },
  97: {
    name: 'BNB Testnet',
    provider: BSC_PROVIDER,
    bridgeContract: <NetworkBridge>new ethers.Contract(bscBridgeArtifact.address, bscBridgeArtifact.abi, BSC_PROVIDER),
    tokenContract: <Token>new ethers.Contract(bscTokenArtifact.address, bscTokenArtifact.abi, BSC_PROVIDER),
  },
};
