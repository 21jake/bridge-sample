import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';
import { tokenAmountBN } from '../scripts/utils';
import { NetworkBridge, NetworkBridge__factory, Token, Token__factory } from '../typechain';

describe('BRIDGE', function () {
  let tokenDeployer: SignerWithAddress,
    bridgeAdmin: SignerWithAddress,
    minter: SignerWithAddress,
    user: SignerWithAddress,
    burner: SignerWithAddress;
  let TokenFactory: Token__factory;
  let TokenInstance: Token;
  let BridgeFactory: NetworkBridge__factory;
  let BridgeInstance: NetworkBridge;

  beforeEach(async () => {
    [tokenDeployer, bridgeAdmin, minter, burner, user] = await ethers.getSigners();

    TokenFactory = await ethers.getContractFactory('Token');
    TokenInstance = await TokenFactory.deploy();

    BridgeFactory = await ethers.getContractFactory('NetworkBridge');
    BridgeInstance = await BridgeFactory.connect(bridgeAdmin).deploy(TokenInstance.address);
  });

  describe('Token contract', () => {
    it('Token total supply is 1_000_000', async () => {
      const decimals = await TokenInstance.decimals();
      expect(await TokenInstance.totalSupply()).to.equal(
        BigNumber.from(1_000_000).mul(BigNumber.from(10).pow(decimals))
      );
    });

    it('Deployer has the role of DEFAULT_ADMIN_ROLE', async () => {
      const DEFAULT_ADMIN_ROLE = await TokenInstance.DEFAULT_ADMIN_ROLE();
      expect(await TokenInstance.hasRole(DEFAULT_ADMIN_ROLE, tokenDeployer.address)).to.be.true;
      expect(await TokenInstance.hasRole(DEFAULT_ADMIN_ROLE, bridgeAdmin.address)).to.be.false;
    });

    it('Only DEFAULT_ADMIN_ROLE can grant MINTER_ROLE and BURNER_ROLE', async () => {
      const MINTER_ROLE = await TokenInstance.MINTER_ROLE();
      const BURNER_ROLE = await TokenInstance.BURNER_ROLE();

      expect(await TokenInstance.hasRole(MINTER_ROLE, minter.address)).to.be.false;
      expect(await TokenInstance.hasRole(BURNER_ROLE, burner.address)).to.be.false;

      await expect(TokenInstance.connect(bridgeAdmin).grantRole(MINTER_ROLE, minter.address)).to.be.reverted;
      await expect(TokenInstance.connect(bridgeAdmin).grantRole(BURNER_ROLE, burner.address)).to.be.reverted;

      await expect(TokenInstance.connect(tokenDeployer).grantRole(MINTER_ROLE, minter.address)).to.be.not.reverted;
      await expect(TokenInstance.connect(tokenDeployer).grantRole(BURNER_ROLE, burner.address)).to.be.not.reverted;

      expect(await TokenInstance.hasRole(MINTER_ROLE, minter.address)).to.be.true;
      expect(await TokenInstance.hasRole(BURNER_ROLE, burner.address)).to.be.true;
    });

    it('Minter and burner can burn and mint more tokens', async () => {
      const totalSupply_1 = await TokenInstance.totalSupply();

      // Minting
      const MINTER_ROLE = await TokenInstance.MINTER_ROLE();

      await TokenInstance.connect(tokenDeployer).grantRole(MINTER_ROLE, minter.address);

      const mintAmount = tokenAmountBN(1000);
      const minterBalance_1 = await TokenInstance.balanceOf(minter.address);

      await TokenInstance.connect(minter).mint(minter.address, mintAmount);

      const totalSupply_2 = await TokenInstance.totalSupply();
      const minterBalance_2 = await TokenInstance.balanceOf(minter.address);

      expect(totalSupply_1).to.equal(totalSupply_2.sub(mintAmount));
      expect(minterBalance_1).to.equal(minterBalance_2.sub(mintAmount));

      // Burning
      const BURNER_ROLE = await TokenInstance.BURNER_ROLE();
      await TokenInstance.connect(tokenDeployer).grantRole(BURNER_ROLE, burner.address);
      const burnAmount = tokenAmountBN(2000);
      await TokenInstance.connect(tokenDeployer).transfer(burner.address, burnAmount);

      const burnerBalance_1 = await TokenInstance.balanceOf(burner.address);
      const totalSupply_3 = await TokenInstance.totalSupply();

      await TokenInstance.connect(burner).burn(burnAmount);

      const burnerBalance_2 = await TokenInstance.balanceOf(burner.address);
      const totalSupply_4 = await TokenInstance.totalSupply();

      expect(totalSupply_3).to.equal(totalSupply_4.add(burnAmount));
      expect(burnerBalance_1).to.equal(burnerBalance_2.add(burnAmount));
    });
  });

  describe('Bridge contract', () => {
    beforeEach(async () => {
      // Grant minter/burner role for bridge contract
      const MINTER_ROLE = await TokenInstance.MINTER_ROLE();
      const BURNER_ROLE = await TokenInstance.BURNER_ROLE();
      await TokenInstance.connect(tokenDeployer).grantRole(MINTER_ROLE, BridgeInstance.address);
      await TokenInstance.connect(tokenDeployer).grantRole(BURNER_ROLE, BridgeInstance.address);
    });

    const initUserBalance = tokenAmountBN(10_000);
    const lockedAmount = tokenAmountBN(5_000);


    beforeEach(async () => {
      await TokenInstance.connect(tokenDeployer).transfer(user.address, initUserBalance);
      
      // Assume everytime an user transfer to bridge, bridge admin call lock function
      await TokenInstance.connect(user).transfer(BridgeInstance.address, lockedAmount);
      await BridgeInstance.connect(bridgeAdmin).lock(user.address, lockedAmount);
    })

    it("Only brige admin can call `mint` and `lock` function", async () => {
      await expect(BridgeInstance.connect(tokenDeployer).lock(user.address, lockedAmount)).to.be.reverted;
      await expect(BridgeInstance.connect(tokenDeployer).mint(user.address, lockedAmount)).to.be.reverted;
      await expect(BridgeInstance.connect(bridgeAdmin).lock(user.address, lockedAmount)).to.be.not.reverted;
      await expect(BridgeInstance.connect(bridgeAdmin).mint(user.address, lockedAmount)).to.be.not.reverted;
    })

    it("Admin bridge can mint token to chosen address", async () => {
      const userBalance_1 = await TokenInstance.balanceOf(user.address);
      const totalSupply_1 = await TokenInstance.totalSupply();

      const mintAmount = tokenAmountBN(1_000);
      await BridgeInstance.connect(bridgeAdmin).mint(user.address, mintAmount);

      const userBalance_2 = await TokenInstance.balanceOf(user.address);
      const totalSupply_2 = await TokenInstance.totalSupply();

      expect(totalSupply_1).to.equal(totalSupply_2.sub(mintAmount));
      expect(userBalance_1).to.equal(userBalance_2.sub(mintAmount));

    })

    it("Locked value is increased when user transfer to bridge", async () => {
      const lockedValue_1 = await BridgeInstance.locked(user.address);

      const extralockedValue = tokenAmountBN(1_000);
    
      await expect(BridgeInstance.connect(bridgeAdmin).lock(user.address, extralockedValue))
      .to.emit(BridgeInstance, 'Lock')
      .withArgs(user.address, extralockedValue);
      
      const lockedValue_2 = await BridgeInstance.locked(user.address);
  
      expect(lockedValue_1).to.equal(lockedValue_2.sub(extralockedValue));
    })

    it("User can withdraw from locked value", async () => {
      const lockedValue_1 = await BridgeInstance.locked(user.address);
      const userBalance_1 = await TokenInstance.balanceOf(user.address);
      const bridgeBalance_1 = await TokenInstance.balanceOf(BridgeInstance.address);
      
      const withdrawAmount = lockedValue_1.div(2);

      await expect(BridgeInstance.connect(user).withdraw(lockedValue_1.add(1))).to.be.revertedWith("Bridge: Insufficient locked amount");
      await expect(BridgeInstance.connect(user).withdraw(withdrawAmount)).to.be.not.reverted;

      const lockedValue_2 = await BridgeInstance.locked(user.address);
      const userBalance_2 = await TokenInstance.balanceOf(user.address);
      const bridgeBalance_2 = await TokenInstance.balanceOf(BridgeInstance.address);


      expect(lockedValue_1).to.equal(lockedValue_2.add(withdrawAmount));
      expect(userBalance_1).to.equal(userBalance_2.sub(withdrawAmount));
      expect(bridgeBalance_1).to.equal(bridgeBalance_2.add(withdrawAmount));

    })

    it("User with locked tokens can burn their tokens",async () => {
      const lockedValue_1 = await BridgeInstance.locked(user.address);
      const bridgeBalance_1 = await TokenInstance.balanceOf(BridgeInstance.address);
      const totalSupply_1 = await TokenInstance.totalSupply();

      const burnAmount = lockedValue_1.div(2);
      const chainId = 4;

      await expect(BridgeInstance.connect(user).burn(lockedValue_1.add(1), chainId )).to.be.revertedWith("Bridge: Insufficient locked amount");
      await expect(BridgeInstance.connect(user).burn(burnAmount, chainId )).to.be.not.reverted;

      const lockedValue_2 = await BridgeInstance.locked(user.address);
      const bridgeBalance_2 = await TokenInstance.balanceOf(BridgeInstance.address);
      const totalSupply_2 = await TokenInstance.totalSupply();

      expect(lockedValue_1).to.equal(lockedValue_2.add(burnAmount));
      expect(bridgeBalance_1).to.equal(bridgeBalance_2.add(burnAmount));
      expect(totalSupply_1).to.equal(totalSupply_2.add(burnAmount));

    })

  });
});
/**
 * 1. Everytime user transfer to bridge contract, bridge admin calling lock function => Lock event emitted
 * 2. User can withdraw from locked amount => Token transfered
 * 3. User can burn locked token, a Burn event is emitted with chainId
 * 4. Bridge can mint token to a specific address
 */
