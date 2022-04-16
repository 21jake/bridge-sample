import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, get } = deployments;
  const { bridgeAdmin } = await getNamedAccounts();
  const {address: tokenAddress} = await get("Token");
  
  await deploy('NetworkBridge', {
    from: bridgeAdmin,
    args: [tokenAddress],
    log: true,
  });  

};

func.tags = ['deploy-bridge'];
export default func;
// npx hardhat --network bsc-testnet deploy --tags deploy-bridge && npx hardhat --network rinkeby deploy --tags deploy-bridge && npx hardhat --network goerli deploy --tags deploy-bridge 

