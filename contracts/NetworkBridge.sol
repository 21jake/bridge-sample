// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Token.sol";

contract NetworkBridge {
    address public admin;
    address public immutable tokenContract;

    event Burn (address sender, uint256 amount);
    event Mint (address sender, uint256 amount);

    constructor(address token) {
        admin = msg.sender;
        tokenContract = token;
    }

    function burn (address sender, uint256 amount) external onlyAdmin {
        bool success = Token(tokenContract).burn(amount);
        require(success, "Unsucessful burn attempt");
        emit Burn(sender, amount);
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
