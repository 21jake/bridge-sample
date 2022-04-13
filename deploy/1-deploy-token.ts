import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  
  await deploy('Token', {
    from: deployer,
    args: [],
    log: true,
  });  

};

func.tags = ['deploy-token'];
export default func;
// 1. hh --network bsc-testnet deploy --tags deploy-token
// 2. hh run ./scripts/BO/manageRoles.ts && hh run ./scripts/BO/createListing.ts
// 3. hh run ./scripts/BO/listingManagement.ts && hh run ./scripts/tokenActions.ts