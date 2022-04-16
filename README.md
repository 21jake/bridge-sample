# Multi-chain bridge

## Overview
A simple & secured bridge for EVM-compatible blockchain networks. The bridge consists of two components:
1. Smart contracts for the token and the bridge API, deployed on the blockchain networks you wish to link together
2. A centralized NodeJS server to subscribe to deployed contracts' events, and trigger actions.

## Features
1. Simple to implement
2. Test cases coverage
3. Available scripts to deploy, test, and interact with the deployed contracts
4. Currently operates on 3 testnets: Goerli, Rinkeby, and BNB Testnet.

## Installation
1. Clone this repo
2. Run `npm install`
3. Create an `.env` base on `.env.example`. Network urls could and project ID should be taken from an [Infura](https://infura.io/) project (Infura is provide the layer to communicate with the blockchain. Create an account if you don't have one). Provide private keys for DEPLOYER and BRIDGE_ADMIN and remember to fund these accounts with native token.

## How it works
### The token contract
The token contract should be very simple and standard. Two essential features to make bridging possible (OpenZeppelin is recommended): 
1. The ability to mint/burn tokens and 
2. Access Control to grant Minter/Burner Role

### The bridge contract
1. The bridge contract should be able authorized by the token contract to mint/burn tokens.
2. Bridge has an admin to run some centralized actions on the NodeJS server
3. Bridge emits events for the server to subscribe to and run the logic

### The centralized server

1. A NodeJS server with chain configs and bridge admin's private key
2. Has scripts to subscribe and trigger actions

### The dynamics:
1. Users wish to "bridge" some tokens from chain A to chain B must transfer tokens to the bridge address (These tokens is withdrawable if the user doesn't want to bridge anymore)
2. Everytime an user transfer token to the bridge's address, bridge's admin calls `lock` function to record the transfered amount.
3. Users call the `burn` function in the bridge's contract with the `amount` and `chainId` as parameters. `amount` of tokens will be burnt from the source chain and a `Burn` event is emitted.
4. Every time `Burn` event is emitted, admin bridge calls the `mint` function to the target chain (according to the `chainId`) to mint the burnt amount to the sender.

## How to try out
1. Remove the deployments folder to clear the deployed contract data
2. Open terminal, run `npx hardhat --network bsc-testnet deploy --tags deploy-token && npx hardhat --network rinkeby deploy --tags deploy-token && npx hardhat --network goerli deploy --tags deploy-token` to deploy tokens on testnets
3. After deploying tokens, run `npx hardhat --network bsc-testnet deploy --tags deploy-bridge && npx hardhat --network rinkeby deploy --tags deploy-bridge && npx hardhat --network goerli deploy --tags deploy-bridge` to deploy bridges on testnets
4. Run `npx hardhat run ./scripts/manage.ts` to authorized bridges' addresses as minter and burner
5. Run `npx hardhat run ./scripts/antena.ts` to set up the subscribers & action triggers. Leave the terminal running and don't close it.
6. Open another terminal window, run `npx hardhat run ./scripts/interaction.ts` to run some sample transactions to "transfer tokens to bridge contract" and "bridge token to another chain"
7. (Optional) run `npx hardhat test` or `npx hardhat coverage` to see test coverage results.

