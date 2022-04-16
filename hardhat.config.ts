import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import '@nomiclabs/hardhat-ethers';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-deploy';

dotenv.config();


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    currency: 'USD',
    coinmarketcap: process.env.COINMCAP_API_KEY as string, 
    gasPrice: 6,
    // @ts-ignore
    ethPrice: 450,
  },
  networks: {
    localhost: {
      saveDeployments: false,
    },
    'bsc-testnet': {
      url: process.env.BSC_TESTNET_URL,
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY as string,
        process.env.TESTNET_BRIDGE_ADMIN_PRIVATE_KEY as string,
      ],
      chainId: 97,
    },
    'rinkeby': {
      url: process.env.RINKEBY_URL,
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY as string,
        process.env.TESTNET_BRIDGE_ADMIN_PRIVATE_KEY as string,
      ],
      chainId: 4,
    },
    'goerli': {
      url: process.env.GOERLI_URL,
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY as string,
        process.env.TESTNET_BRIDGE_ADMIN_PRIVATE_KEY as string,
      ],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: process.env.ETH_SCAN_KEY,
  },
  namedAccounts: {
    deployer: 0,
    bridgeAdmin: 1,
  },
};

export default config;

