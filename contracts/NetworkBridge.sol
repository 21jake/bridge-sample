// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Token.sol";

contract NetworkBridge {
    address public admin;
    address public immutable tokenContract;

    mapping (address => uint256) public locked;

    event Burn (address sender, uint256 amount, uint256 chainId);
    event Mint (address sender, uint256 amount);
    event Lock (address sender, uint256 amount);

    constructor(address token) {
        admin = msg.sender;
        tokenContract = token;
    }

    function lock (address sender, uint256 amount) external onlyAdmin {
        locked[sender] += amount;
        emit Lock(sender, amount);
    }

    function burn (uint256 amount, uint chainId) external {
        require(locked[msg.sender] >= amount, "Bridge: Insufficient locked amount");
        locked[msg.sender] -= amount;
        bool success = Token(tokenContract).burn(amount);
        require(success, "Unsucessful burn attempt");
        emit Burn(msg.sender, amount, chainId);
    }

    function withdraw (uint256 amount) external {
        require(locked[msg.sender] >= amount, "Bridge: Insufficient locked amount");
        locked[msg.sender] -= amount;
        bool success = Token(tokenContract).transfer(msg.sender, amount);
        require(success, "Unsucessful withdraw attempt");
    }

    function mint (address burner, uint256 amount) external onlyAdmin {
        bool success = Token(tokenContract).mint(burner, amount);
        require(success, "Unsucessful mint attempt");
        emit Mint(burner, amount);
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Unauthorized");
        _;
    }
}
