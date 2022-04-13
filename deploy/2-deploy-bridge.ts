import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { bridgeAdmin } = await getNamedAccounts();
  
  const tokenAddress = "0x2b621c8485039254588Ecd7B4c6db010741a45c8";

  await deploy('NetworkBridge', {
    from: bridgeAdmin,
    args: [tokenAddress],
    log: true,
  });  

};

func.tags = ['deploy-bridge'];
export default func;
// 1. hh --network bsc-testnet deploy --tags deploy-bridge
// 2. hh run ./scripts/BO/manageRoles.ts && hh run ./scripts/BO/createListing.ts
// 3. hh run ./scripts/BO/listingManagement.ts && hh run ./scripts/tokenActions.ts