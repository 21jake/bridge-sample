export default {
  "address": "0xfAb4DF3Cd3325457BBc0B5795Bac625372772dc9",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "BURNER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MINTER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "transactionHash": "0x542dbb92dba15b4f4c8ab0f692ed727ee2742b2f9a9c8b7bfc1ad1f326b30c18",
  "receipt": {
    "to": null,
    "from": "0x0F488C370708b4250A253df57193df2ff731ca3D",
    "contractAddress": "0xfAb4DF3Cd3325457BBc0B5795Bac625372772dc9",
    "transactionIndex": 10,
    "gasUsed": "1205910",
    "logsBloom": "0x00000004400000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000040000000000000000000000000000008000000800000000000000000000000000000000000000000020000000000000000000800000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000001000000000000000000002000000000000000000000000000000000000000100000000001020000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0xadfa6171a5203de361435ed28049c97398d78fd4a52df7289ae27547dad65f95",
    "transactionHash": "0x542dbb92dba15b4f4c8ab0f692ed727ee2742b2f9a9c8b7bfc1ad1f326b30c18",
    "logs": [
      {
        "transactionIndex": 10,
        "blockNumber": 18493986,
        "transactionHash": "0x542dbb92dba15b4f4c8ab0f692ed727ee2742b2f9a9c8b7bfc1ad1f326b30c18",
        "address": "0xfAb4DF3Cd3325457BBc0B5795Bac625372772dc9",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x0000000000000000000000000f488c370708b4250a253df57193df2ff731ca3d"
        ],
        "data": "0x00000000000000000000000000000000000000000000d3c21bcecceda1000000",
        "logIndex": 21,
        "blockHash": "0xadfa6171a5203de361435ed28049c97398d78fd4a52df7289ae27547dad65f95"
      },
      {
        "transactionIndex": 10,
        "blockNumber": 18493986,
        "transactionHash": "0x542dbb92dba15b4f4c8ab0f692ed727ee2742b2f9a9c8b7bfc1ad1f326b30c18",
        "address": "0xfAb4DF3Cd3325457BBc0B5795Bac625372772dc9",
        "topics": [
          "0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x0000000000000000000000000f488c370708b4250a253df57193df2ff731ca3d",
          "0x0000000000000000000000000f488c370708b4250a253df57193df2ff731ca3d"
        ],
        "data": "0x",
        "logIndex": 22,
        "blockHash": "0xadfa6171a5203de361435ed28049c97398d78fd4a52df7289ae27547dad65f95"
      }
    ],
    "blockNumber": 18493986,
    "cumulativeGasUsed": "2101338",
    "status": 1,
    "byzantium": true
  },
  "args": [],
  "numDeployments": 1,
  "solcInputHash": "a276b9af4176131151330784ae7055ea",
  "metadata": "{\"compiler\":{\"version\":\"0.8.11+commit.d7f03943\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"BURNER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/Token.sol\":\"Token\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/AccessControl.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0) (access/AccessControl.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IAccessControl.sol\\\";\\nimport \\\"../utils/Context.sol\\\";\\nimport \\\"../utils/Strings.sol\\\";\\nimport \\\"../utils/introspection/ERC165.sol\\\";\\n\\n/**\\n * @dev Contract module that allows children to implement role-based access\\n * control mechanisms. This is a lightweight version that doesn't allow enumerating role\\n * members except through off-chain means by accessing the contract event logs. Some\\n * applications may benefit from on-chain enumerability, for those cases see\\n * {AccessControlEnumerable}.\\n *\\n * Roles are referred to by their `bytes32` identifier. These should be exposed\\n * in the external API and be unique. The best way to achieve this is by\\n * using `public constant` hash digests:\\n *\\n * ```\\n * bytes32 public constant MY_ROLE = keccak256(\\\"MY_ROLE\\\");\\n * ```\\n *\\n * Roles can be used to represent a set of permissions. To restrict access to a\\n * function call, use {hasRole}:\\n *\\n * ```\\n * function foo() public {\\n *     require(hasRole(MY_ROLE, msg.sender));\\n *     ...\\n * }\\n * ```\\n *\\n * Roles can be granted and revoked dynamically via the {grantRole} and\\n * {revokeRole} functions. Each role has an associated admin role, and only\\n * accounts that have a role's admin role can call {grantRole} and {revokeRole}.\\n *\\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\\n * that only accounts with this role will be able to grant or revoke other\\n * roles. More complex role relationships can be created by using\\n * {_setRoleAdmin}.\\n *\\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\\n * grant and revoke this role. Extra precautions should be taken to secure\\n * accounts that have been granted it.\\n */\\nabstract contract AccessControl is Context, IAccessControl, ERC165 {\\n    struct RoleData {\\n        mapping(address => bool) members;\\n        bytes32 adminRole;\\n    }\\n\\n    mapping(bytes32 => RoleData) private _roles;\\n\\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\\n\\n    /**\\n     * @dev Modifier that checks that an account has a specific role. Reverts\\n     * with a standardized message including the required role.\\n     *\\n     * The format of the revert reason is given by the following regular expression:\\n     *\\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\\n     *\\n     * _Available since v4.1._\\n     */\\n    modifier onlyRole(bytes32 role) {\\n        _checkRole(role, _msgSender());\\n        _;\\n    }\\n\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IAccessControl).interfaceId || super.supportsInterface(interfaceId);\\n    }\\n\\n    /**\\n     * @dev Returns `true` if `account` has been granted `role`.\\n     */\\n    function hasRole(bytes32 role, address account) public view virtual override returns (bool) {\\n        return _roles[role].members[account];\\n    }\\n\\n    /**\\n     * @dev Revert with a standard message if `account` is missing `role`.\\n     *\\n     * The format of the revert reason is given by the following regular expression:\\n     *\\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\\n     */\\n    function _checkRole(bytes32 role, address account) internal view virtual {\\n        if (!hasRole(role, account)) {\\n            revert(\\n                string(\\n                    abi.encodePacked(\\n                        \\\"AccessControl: account \\\",\\n                        Strings.toHexString(uint160(account), 20),\\n                        \\\" is missing role \\\",\\n                        Strings.toHexString(uint256(role), 32)\\n                    )\\n                )\\n            );\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\\n     * {revokeRole}.\\n     *\\n     * To change a role's admin, use {_setRoleAdmin}.\\n     */\\n    function getRoleAdmin(bytes32 role) public view virtual override returns (bytes32) {\\n        return _roles[role].adminRole;\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\\n        _grantRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\\n        _revokeRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from the calling account.\\n     *\\n     * Roles are often managed via {grantRole} and {revokeRole}: this function's\\n     * purpose is to provide a mechanism for accounts to lose their privileges\\n     * if they are compromised (such as when a trusted device is misplaced).\\n     *\\n     * If the calling account had been revoked `role`, emits a {RoleRevoked}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must be `account`.\\n     */\\n    function renounceRole(bytes32 role, address account) public virtual override {\\n        require(account == _msgSender(), \\\"AccessControl: can only renounce roles for self\\\");\\n\\n        _revokeRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event. Note that unlike {grantRole}, this function doesn't perform any\\n     * checks on the calling account.\\n     *\\n     * [WARNING]\\n     * ====\\n     * This function should only be called from the constructor when setting\\n     * up the initial roles for the system.\\n     *\\n     * Using this function in any other way is effectively circumventing the admin\\n     * system imposed by {AccessControl}.\\n     * ====\\n     *\\n     * NOTE: This function is deprecated in favor of {_grantRole}.\\n     */\\n    function _setupRole(bytes32 role, address account) internal virtual {\\n        _grantRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Sets `adminRole` as ``role``'s admin role.\\n     *\\n     * Emits a {RoleAdminChanged} event.\\n     */\\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\\n        bytes32 previousAdminRole = getRoleAdmin(role);\\n        _roles[role].adminRole = adminRole;\\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * Internal function without access restriction.\\n     */\\n    function _grantRole(bytes32 role, address account) internal virtual {\\n        if (!hasRole(role, account)) {\\n            _roles[role].members[account] = true;\\n            emit RoleGranted(role, account, _msgSender());\\n        }\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * Internal function without access restriction.\\n     */\\n    function _revokeRole(bytes32 role, address account) internal virtual {\\n        if (hasRole(role, account)) {\\n            _roles[role].members[account] = false;\\n            emit RoleRevoked(role, account, _msgSender());\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x4a1a0ba12bf1a33f10d9fe226278cf59675c0b929d29e4da99658a079b27fb84\",\"license\":\"MIT\"},\"@openzeppelin/contracts/access/IAccessControl.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (access/IAccessControl.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev External interface of AccessControl declared to support ERC165 detection.\\n */\\ninterface IAccessControl {\\n    /**\\n     * @dev Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole`\\n     *\\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\\n     * {RoleAdminChanged} not being emitted signaling this.\\n     *\\n     * _Available since v3.1._\\n     */\\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\\n\\n    /**\\n     * @dev Emitted when `account` is granted `role`.\\n     *\\n     * `sender` is the account that originated the contract call, an admin role\\n     * bearer except when using {AccessControl-_setupRole}.\\n     */\\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\\n\\n    /**\\n     * @dev Emitted when `account` is revoked `role`.\\n     *\\n     * `sender` is the account that originated the contract call:\\n     *   - if using `revokeRole`, it is the admin role bearer\\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\\n     */\\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\\n\\n    /**\\n     * @dev Returns `true` if `account` has been granted `role`.\\n     */\\n    function hasRole(bytes32 role, address account) external view returns (bool);\\n\\n    /**\\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\\n     * {revokeRole}.\\n     *\\n     * To change a role's admin, use {AccessControl-_setRoleAdmin}.\\n     */\\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function grantRole(bytes32 role, address account) external;\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function revokeRole(bytes32 role, address account) external;\\n\\n    /**\\n     * @dev Revokes `role` from the calling account.\\n     *\\n     * Roles are often managed via {grantRole} and {revokeRole}: this function's\\n     * purpose is to provide a mechanism for accounts to lose their privileges\\n     * if they are compromised (such as when a trusted device is misplaced).\\n     *\\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must be `account`.\\n     */\\n    function renounceRole(bytes32 role, address account) external;\\n}\\n\",\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/ERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC20.sol\\\";\\nimport \\\"./extensions/IERC20Metadata.sol\\\";\\nimport \\\"../../utils/Context.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC20} interface.\\n *\\n * This implementation is agnostic to the way tokens are created. This means\\n * that a supply mechanism has to be added in a derived contract using {_mint}.\\n * For a generic mechanism see {ERC20PresetMinterPauser}.\\n *\\n * TIP: For a detailed writeup see our guide\\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\\n * to implement supply mechanisms].\\n *\\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\\n * instead returning `false` on failure. This behavior is nonetheless\\n * conventional and does not conflict with the expectations of ERC20\\n * applications.\\n *\\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\n * This allows applications to reconstruct the allowance for all accounts just\\n * by listening to said events. Other implementations of the EIP may not emit\\n * these events, as it isn't required by the specification.\\n *\\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\n * functions have been added to mitigate the well-known issues around setting\\n * allowances. See {IERC20-approve}.\\n */\\ncontract ERC20 is Context, IERC20, IERC20Metadata {\\n    mapping(address => uint256) private _balances;\\n\\n    mapping(address => mapping(address => uint256)) private _allowances;\\n\\n    uint256 private _totalSupply;\\n\\n    string private _name;\\n    string private _symbol;\\n\\n    /**\\n     * @dev Sets the values for {name} and {symbol}.\\n     *\\n     * The default value of {decimals} is 18. To select a different value for\\n     * {decimals} you should overload it.\\n     *\\n     * All two of these values are immutable: they can only be set once during\\n     * construction.\\n     */\\n    constructor(string memory name_, string memory symbol_) {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() public view virtual override returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() public view virtual override returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei. This is the value {ERC20} uses, unless this function is\\n     * overridden;\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\n     */\\n    function decimals() public view virtual override returns (uint8) {\\n        return 18;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-totalSupply}.\\n     */\\n    function totalSupply() public view virtual override returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-balanceOf}.\\n     */\\n    function balanceOf(address account) public view virtual override returns (uint256) {\\n        return _balances[account];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transfer}.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - the caller must have a balance of at least `amount`.\\n     */\\n    function transfer(address to, uint256 amount) public virtual override returns (bool) {\\n        address owner = _msgSender();\\n        _transfer(owner, to, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-allowance}.\\n     */\\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\\n        return _allowances[owner][spender];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-approve}.\\n     *\\n     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on\\n     * `transferFrom`. This is semantically equivalent to an infinite approval.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\\n        address owner = _msgSender();\\n        _approve(owner, spender, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transferFrom}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance. This is not\\n     * required by the EIP. See the note at the beginning of {ERC20}.\\n     *\\n     * NOTE: Does not update the allowance if the current allowance\\n     * is the maximum `uint256`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` and `to` cannot be the zero address.\\n     * - `from` must have a balance of at least `amount`.\\n     * - the caller must have allowance for ``from``'s tokens of at least\\n     * `amount`.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) public virtual override returns (bool) {\\n        address spender = _msgSender();\\n        _spendAllowance(from, spender, amount);\\n        _transfer(from, to, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\\n        address owner = _msgSender();\\n        _approve(owner, spender, _allowances[owner][spender] + addedValue);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     * - `spender` must have allowance for the caller of at least\\n     * `subtractedValue`.\\n     */\\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\\n        address owner = _msgSender();\\n        uint256 currentAllowance = _allowances[owner][spender];\\n        require(currentAllowance >= subtractedValue, \\\"ERC20: decreased allowance below zero\\\");\\n        unchecked {\\n            _approve(owner, spender, currentAllowance - subtractedValue);\\n        }\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Moves `amount` of tokens from `sender` to `recipient`.\\n     *\\n     * This internal function is equivalent to {transfer}, and can be used to\\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\\n     *\\n     * Emits a {Transfer} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `from` must have a balance of at least `amount`.\\n     */\\n    function _transfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {\\n        require(from != address(0), \\\"ERC20: transfer from the zero address\\\");\\n        require(to != address(0), \\\"ERC20: transfer to the zero address\\\");\\n\\n        _beforeTokenTransfer(from, to, amount);\\n\\n        uint256 fromBalance = _balances[from];\\n        require(fromBalance >= amount, \\\"ERC20: transfer amount exceeds balance\\\");\\n        unchecked {\\n            _balances[from] = fromBalance - amount;\\n        }\\n        _balances[to] += amount;\\n\\n        emit Transfer(from, to, amount);\\n\\n        _afterTokenTransfer(from, to, amount);\\n    }\\n\\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\\n     * the total supply.\\n     *\\n     * Emits a {Transfer} event with `from` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function _mint(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: mint to the zero address\\\");\\n\\n        _beforeTokenTransfer(address(0), account, amount);\\n\\n        _totalSupply += amount;\\n        _balances[account] += amount;\\n        emit Transfer(address(0), account, amount);\\n\\n        _afterTokenTransfer(address(0), account, amount);\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens from `account`, reducing the\\n     * total supply.\\n     *\\n     * Emits a {Transfer} event with `to` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     * - `account` must have at least `amount` tokens.\\n     */\\n    function _burn(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: burn from the zero address\\\");\\n\\n        _beforeTokenTransfer(account, address(0), amount);\\n\\n        uint256 accountBalance = _balances[account];\\n        require(accountBalance >= amount, \\\"ERC20: burn amount exceeds balance\\\");\\n        unchecked {\\n            _balances[account] = accountBalance - amount;\\n        }\\n        _totalSupply -= amount;\\n\\n        emit Transfer(account, address(0), amount);\\n\\n        _afterTokenTransfer(account, address(0), amount);\\n    }\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\n     *\\n     * This internal function is equivalent to `approve`, and can be used to\\n     * e.g. set automatic allowances for certain subsystems, etc.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `owner` cannot be the zero address.\\n     * - `spender` cannot be the zero address.\\n     */\\n    function _approve(\\n        address owner,\\n        address spender,\\n        uint256 amount\\n    ) internal virtual {\\n        require(owner != address(0), \\\"ERC20: approve from the zero address\\\");\\n        require(spender != address(0), \\\"ERC20: approve to the zero address\\\");\\n\\n        _allowances[owner][spender] = amount;\\n        emit Approval(owner, spender, amount);\\n    }\\n\\n    /**\\n     * @dev Spend `amount` form the allowance of `owner` toward `spender`.\\n     *\\n     * Does not update the allowance amount in case of infinite allowance.\\n     * Revert if not enough allowance is available.\\n     *\\n     * Might emit an {Approval} event.\\n     */\\n    function _spendAllowance(\\n        address owner,\\n        address spender,\\n        uint256 amount\\n    ) internal virtual {\\n        uint256 currentAllowance = allowance(owner, spender);\\n        if (currentAllowance != type(uint256).max) {\\n            require(currentAllowance >= amount, \\\"ERC20: insufficient allowance\\\");\\n            unchecked {\\n                _approve(owner, spender, currentAllowance - amount);\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * will be transferred to `to`.\\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n\\n    /**\\n     * @dev Hook that is called after any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * has been transferred to `to`.\\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _afterTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n}\\n\",\"keccak256\":\"0xdadd41acb749920eccf40aeaa8d291adf9751399a7343561bad13e7a8d99be0b\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/IERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address to, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) external returns (bool);\\n\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n}\\n\",\"keccak256\":\"0xbbc8ac883ac3c0078ce5ad3e288fbb3ffcc8a30c3a98c0fda0114d64fc44fca2\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC20.sol\\\";\\n\\n/**\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\n *\\n * _Available since v4.1._\\n */\\ninterface IERC20Metadata is IERC20 {\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the symbol of the token.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the decimals places of the token.\\n     */\\n    function decimals() external view returns (uint8);\\n}\\n\",\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n\",\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Strings.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary Strings {\\n    bytes16 private constant _HEX_SYMBOLS = \\\"0123456789abcdef\\\";\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        // Inspired by OraclizeAPI's implementation - MIT licence\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\n\\n        if (value == 0) {\\n            return \\\"0\\\";\\n        }\\n        uint256 temp = value;\\n        uint256 digits;\\n        while (temp != 0) {\\n            digits++;\\n            temp /= 10;\\n        }\\n        bytes memory buffer = new bytes(digits);\\n        while (value != 0) {\\n            digits -= 1;\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\n            value /= 10;\\n        }\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        if (value == 0) {\\n            return \\\"0x00\\\";\\n        }\\n        uint256 temp = value;\\n        uint256 length = 0;\\n        while (temp != 0) {\\n            length++;\\n            temp >>= 8;\\n        }\\n        return toHexString(value, length);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\\"0\\\";\\n        buffer[1] = \\\"x\\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\n            value >>= 4;\\n        }\\n        require(value == 0, \\\"Strings: hex length insufficient\\\");\\n        return string(buffer);\\n    }\\n}\\n\",\"keccak256\":\"0x32c202bd28995dd20c4347b7c6467a6d3241c74c8ad3edcbb610cd9205916c45\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC165.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n\",\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"},\"contracts/Token.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.4;\\n\\nimport \\\"@openzeppelin/contracts/token/ERC20/ERC20.sol\\\";\\nimport \\\"@openzeppelin/contracts/access/AccessControl.sol\\\";\\n\\ncontract Token is ERC20, AccessControl {\\n    bytes32 public constant MINTER_ROLE = keccak256(\\\"MINTER_ROLE\\\");\\n    bytes32 public constant BURNER_ROLE = keccak256(\\\"BURNER_ROLE\\\");\\n\\n    constructor() ERC20(\\\"Token\\\", \\\"Token\\\") {\\n        _mint(msg.sender, 1000000 * 10 ** decimals());\\n        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);\\n    }\\n\\n    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) returns (bool) {\\n        _mint(to, amount);\\n        return true;\\n    }\\n\\n    function burn(uint256 amount) external onlyRole(BURNER_ROLE) returns (bool) {\\n        _burn(_msgSender(), amount);\\n        return true;\\n    }\\n}\",\"keccak256\":\"0xe2101e641f83f8fee6e4fcbf7ca1fac1a8d51c48be71e1da5c47f69729aba831\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b506040805180820182526005808252642a37b5b2b760d91b60208084018281528551808701909652928552840152815191929162000052916003916200025a565b508051620000689060049060208401906200025a565b505050620000a23362000080620000b560201b60201c565b6200008d90600a62000413565b6200009c90620f42406200042b565b620000ba565b620000af600033620001a3565b620004a5565b601290565b6001600160a01b038216620001155760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200012991906200044d565b90915550506001600160a01b03821660009081526020819052604081208054839290620001589084906200044d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35b5050565b620001af82826200022d565b6200019f5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001e93390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff165b92915050565b828054620002689062000468565b90600052602060002090601f0160209004810192826200028c5760008555620002d7565b82601f10620002a757805160ff1916838001178555620002d7565b82800160010185558215620002d7579182015b82811115620002d7578251825591602001919060010190620002ba565b50620002e5929150620002e9565b5090565b5b80821115620002e55760008155600101620002ea565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620003575781600019048211156200033b576200033b62000300565b808516156200034957918102915b93841c93908002906200031b565b509250929050565b600082620003705750600162000254565b816200037f5750600062000254565b8160018114620003985760028114620003a357620003c3565b600191505062000254565b60ff841115620003b757620003b762000300565b50506001821b62000254565b5060208310610133831016604e8410600b8410161715620003e8575081810a62000254565b620003f4838362000316565b80600019048211156200040b576200040b62000300565b029392505050565b60006200042460ff8416836200035f565b9392505050565b600081600019048311821515161562000448576200044862000300565b500290565b6000821982111562000463576200046362000300565b500190565b600181811c908216806200047d57607f821691505b602082108114156200049f57634e487b7160e01b600052602260045260246000fd5b50919050565b61128780620004b56000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806340c10f19116100b8578063a217fddf1161007c578063a217fddf146102ba578063a457c2d7146102c2578063a9059cbb146102d5578063d5391393146102e8578063d547741f1461030f578063dd62ed3e1461032257600080fd5b806340c10f191461025057806342966c681461026357806370a082311461027657806391d148541461029f57806395d89b41146102b257600080fd5b8063248a9ca31161010a578063248a9ca3146101bc578063282c51f3146101df5780632f2ff15d14610206578063313ce5671461021b57806336568abe1461022a578063395093511461023d57600080fd5b806301ffc9a71461014757806306fdde031461016f578063095ea7b31461018457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015a610155366004610f6b565b61035b565b60405190151581526020015b60405180910390f35b610177610392565b6040516101669190610fc1565b61015a610192366004611010565b610424565b6002545b604051908152602001610166565b61015a6101b736600461103a565b61043c565b61019b6101ca366004611076565b60009081526005602052604090206001015490565b61019b7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84881565b61021961021436600461108f565b610460565b005b60405160128152602001610166565b61021961023836600461108f565b61048b565b61015a61024b366004611010565b61050e565b61015a61025e366004611010565b61054d565b61015a610271366004611076565b610584565b61019b6102843660046110bb565b6001600160a01b031660009081526020819052604090205490565b61015a6102ad36600461108f565b6105c6565b6101776105f1565b61019b600081565b61015a6102d0366004611010565b610600565b61015a6102e3366004611010565b610692565b61019b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61021961031d36600461108f565b6106a0565b61019b6103303660046110d6565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60006001600160e01b03198216637965db0b60e01b148061038c57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546103a190611100565b80601f01602080910402602001604051908101604052809291908181526020018280546103cd90611100565b801561041a5780601f106103ef5761010080835404028352916020019161041a565b820191906000526020600020905b8154815290600101906020018083116103fd57829003601f168201915b5050505050905090565b6000336104328185856106c6565b5060019392505050565b60003361044a8582856107ea565b61045585858561087c565b506001949350505050565b60008281526005602052604090206001015461047c8133610a4a565b6104868383610aae565b505050565b6001600160a01b03811633146105005760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61050a8282610b34565b5050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190610432908290869061054890879061114b565b6106c6565b60007f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661057a8133610a4a565b6104328484610b9b565b60007f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a8486105b18133610a4a565b6105bb3384610c7a565b600191505b50919050565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103a190611100565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156106855760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104f7565b61045582868684036106c6565b60003361043281858561087c565b6000828152600560205260409020600101546106bc8133610a4a565b6104868383610b34565b6001600160a01b0383166107285760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104f7565b6001600160a01b0382166107895760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104f7565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461087657818110156108695760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104f7565b61087684848484036106c6565b50505050565b6001600160a01b0383166108e05760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104f7565b6001600160a01b0382166109425760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104f7565b6001600160a01b038316600090815260208190526040902054818110156109ba5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104f7565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906109f190849061114b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a3d91815260200190565b60405180910390a3610876565b610a5482826105c6565b61050a57610a6c816001600160a01b03166014610dc8565b610a77836020610dc8565b604051602001610a88929190611163565b60408051601f198184030181529082905262461bcd60e51b82526104f791600401610fc1565b610ab882826105c6565b61050a5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610af03390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610b3e82826105c6565b1561050a5760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038216610bf15760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104f7565b8060026000828254610c03919061114b565b90915550506001600160a01b03821660009081526020819052604081208054839290610c3090849061114b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610cda5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104f7565b6001600160a01b03821660009081526020819052604090205481811015610d4e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104f7565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610d7d9084906111d8565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60606000610dd78360026111ef565b610de290600261114b565b67ffffffffffffffff811115610dfa57610dfa61120e565b6040519080825280601f01601f191660200182016040528015610e24576020820181803683370190505b509050600360fc1b81600081518110610e3f57610e3f611224565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610e6e57610e6e611224565b60200101906001600160f81b031916908160001a9053506000610e928460026111ef565b610e9d90600161114b565b90505b6001811115610f15576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610ed157610ed1611224565b1a60f81b828281518110610ee757610ee7611224565b60200101906001600160f81b031916908160001a90535060049490941c93610f0e8161123a565b9050610ea0565b508315610f645760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104f7565b9392505050565b600060208284031215610f7d57600080fd5b81356001600160e01b031981168114610f6457600080fd5b60005b83811015610fb0578181015183820152602001610f98565b838111156108765750506000910152565b6020815260008251806020840152610fe0816040850160208701610f95565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461100b57600080fd5b919050565b6000806040838503121561102357600080fd5b61102c83610ff4565b946020939093013593505050565b60008060006060848603121561104f57600080fd5b61105884610ff4565b925061106660208501610ff4565b9150604084013590509250925092565b60006020828403121561108857600080fd5b5035919050565b600080604083850312156110a257600080fd5b823591506110b260208401610ff4565b90509250929050565b6000602082840312156110cd57600080fd5b610f6482610ff4565b600080604083850312156110e957600080fd5b6110f283610ff4565b91506110b260208401610ff4565b600181811c9082168061111457607f821691505b602082108114156105c057634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561115e5761115e611135565b500190565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161119b816017850160208801610f95565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516111cc816028840160208801610f95565b01602801949350505050565b6000828210156111ea576111ea611135565b500390565b600081600019048311821515161561120957611209611135565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161124957611249611135565b50600019019056fea2646970667358221220949c77354175ec96795ec6490f24ac0e94b9916ed1e2828d897d8a362ffb20d464736f6c634300080b0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101425760003560e01c806340c10f19116100b8578063a217fddf1161007c578063a217fddf146102ba578063a457c2d7146102c2578063a9059cbb146102d5578063d5391393146102e8578063d547741f1461030f578063dd62ed3e1461032257600080fd5b806340c10f191461025057806342966c681461026357806370a082311461027657806391d148541461029f57806395d89b41146102b257600080fd5b8063248a9ca31161010a578063248a9ca3146101bc578063282c51f3146101df5780632f2ff15d14610206578063313ce5671461021b57806336568abe1461022a578063395093511461023d57600080fd5b806301ffc9a71461014757806306fdde031461016f578063095ea7b31461018457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015a610155366004610f6b565b61035b565b60405190151581526020015b60405180910390f35b610177610392565b6040516101669190610fc1565b61015a610192366004611010565b610424565b6002545b604051908152602001610166565b61015a6101b736600461103a565b61043c565b61019b6101ca366004611076565b60009081526005602052604090206001015490565b61019b7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84881565b61021961021436600461108f565b610460565b005b60405160128152602001610166565b61021961023836600461108f565b61048b565b61015a61024b366004611010565b61050e565b61015a61025e366004611010565b61054d565b61015a610271366004611076565b610584565b61019b6102843660046110bb565b6001600160a01b031660009081526020819052604090205490565b61015a6102ad36600461108f565b6105c6565b6101776105f1565b61019b600081565b61015a6102d0366004611010565b610600565b61015a6102e3366004611010565b610692565b61019b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61021961031d36600461108f565b6106a0565b61019b6103303660046110d6565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60006001600160e01b03198216637965db0b60e01b148061038c57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546103a190611100565b80601f01602080910402602001604051908101604052809291908181526020018280546103cd90611100565b801561041a5780601f106103ef5761010080835404028352916020019161041a565b820191906000526020600020905b8154815290600101906020018083116103fd57829003601f168201915b5050505050905090565b6000336104328185856106c6565b5060019392505050565b60003361044a8582856107ea565b61045585858561087c565b506001949350505050565b60008281526005602052604090206001015461047c8133610a4a565b6104868383610aae565b505050565b6001600160a01b03811633146105005760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61050a8282610b34565b5050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190610432908290869061054890879061114b565b6106c6565b60007f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661057a8133610a4a565b6104328484610b9b565b60007f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a8486105b18133610a4a565b6105bb3384610c7a565b600191505b50919050565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103a190611100565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156106855760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104f7565b61045582868684036106c6565b60003361043281858561087c565b6000828152600560205260409020600101546106bc8133610a4a565b6104868383610b34565b6001600160a01b0383166107285760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104f7565b6001600160a01b0382166107895760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104f7565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461087657818110156108695760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104f7565b61087684848484036106c6565b50505050565b6001600160a01b0383166108e05760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104f7565b6001600160a01b0382166109425760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104f7565b6001600160a01b038316600090815260208190526040902054818110156109ba5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104f7565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906109f190849061114b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a3d91815260200190565b60405180910390a3610876565b610a5482826105c6565b61050a57610a6c816001600160a01b03166014610dc8565b610a77836020610dc8565b604051602001610a88929190611163565b60408051601f198184030181529082905262461bcd60e51b82526104f791600401610fc1565b610ab882826105c6565b61050a5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610af03390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610b3e82826105c6565b1561050a5760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038216610bf15760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104f7565b8060026000828254610c03919061114b565b90915550506001600160a01b03821660009081526020819052604081208054839290610c3090849061114b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610cda5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104f7565b6001600160a01b03821660009081526020819052604090205481811015610d4e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104f7565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610d7d9084906111d8565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60606000610dd78360026111ef565b610de290600261114b565b67ffffffffffffffff811115610dfa57610dfa61120e565b6040519080825280601f01601f191660200182016040528015610e24576020820181803683370190505b509050600360fc1b81600081518110610e3f57610e3f611224565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610e6e57610e6e611224565b60200101906001600160f81b031916908160001a9053506000610e928460026111ef565b610e9d90600161114b565b90505b6001811115610f15576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610ed157610ed1611224565b1a60f81b828281518110610ee757610ee7611224565b60200101906001600160f81b031916908160001a90535060049490941c93610f0e8161123a565b9050610ea0565b508315610f645760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104f7565b9392505050565b600060208284031215610f7d57600080fd5b81356001600160e01b031981168114610f6457600080fd5b60005b83811015610fb0578181015183820152602001610f98565b838111156108765750506000910152565b6020815260008251806020840152610fe0816040850160208701610f95565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461100b57600080fd5b919050565b6000806040838503121561102357600080fd5b61102c83610ff4565b946020939093013593505050565b60008060006060848603121561104f57600080fd5b61105884610ff4565b925061106660208501610ff4565b9150604084013590509250925092565b60006020828403121561108857600080fd5b5035919050565b600080604083850312156110a257600080fd5b823591506110b260208401610ff4565b90509250929050565b6000602082840312156110cd57600080fd5b610f6482610ff4565b600080604083850312156110e957600080fd5b6110f283610ff4565b91506110b260208401610ff4565b600181811c9082168061111457607f821691505b602082108114156105c057634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561115e5761115e611135565b500190565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161119b816017850160208801610f95565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516111cc816028840160208801610f95565b01602801949350505050565b6000828210156111ea576111ea611135565b500390565b600081600019048311821515161561120957611209611135565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161124957611249611135565b50600019019056fea2646970667358221220949c77354175ec96795ec6490f24ac0e94b9916ed1e2828d897d8a362ffb20d464736f6c634300080b0033",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "getRoleAdmin(bytes32)": {
        "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
      },
      "grantRole(bytes32,address)": {
        "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role."
      },
      "hasRole(bytes32,address)": {
        "details": "Returns `true` if `account` has been granted `role`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "renounceRole(bytes32,address)": {
        "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`."
      },
      "revokeRole(bytes32,address)": {
        "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 397,
        "contract": "contracts/Token.sol:Token",
        "label": "_balances",
        "offset": 0,
        "slot": "0",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 403,
        "contract": "contracts/Token.sol:Token",
        "label": "_allowances",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_address,t_mapping(t_address,t_uint256))"
      },
      {
        "astId": 405,
        "contract": "contracts/Token.sol:Token",
        "label": "_totalSupply",
        "offset": 0,
        "slot": "2",
        "type": "t_uint256"
      },
      {
        "astId": 407,
        "contract": "contracts/Token.sol:Token",
        "label": "_name",
        "offset": 0,
        "slot": "3",
        "type": "t_string_storage"
      },
      {
        "astId": 409,
        "contract": "contracts/Token.sol:Token",
        "label": "_symbol",
        "offset": 0,
        "slot": "4",
        "type": "t_string_storage"
      },
      {
        "astId": 24,
        "contract": "contracts/Token.sol:Token",
        "label": "_roles",
        "offset": 0,
        "slot": "5",
        "type": "t_mapping(t_bytes32,t_struct(RoleData)19_storage)"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_bytes32": {
        "encoding": "inplace",
        "label": "bytes32",
        "numberOfBytes": "32"
      },
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_address,t_mapping(t_address,t_uint256))": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => mapping(address => uint256))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_uint256)"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_mapping(t_bytes32,t_struct(RoleData)19_storage)": {
        "encoding": "mapping",
        "key": "t_bytes32",
        "label": "mapping(bytes32 => struct AccessControl.RoleData)",
        "numberOfBytes": "32",
        "value": "t_struct(RoleData)19_storage"
      },
      "t_string_storage": {
        "encoding": "bytes",
        "label": "string",
        "numberOfBytes": "32"
      },
      "t_struct(RoleData)19_storage": {
        "encoding": "inplace",
        "label": "struct AccessControl.RoleData",
        "members": [
          {
            "astId": 16,
            "contract": "contracts/Token.sol:Token",
            "label": "members",
            "offset": 0,
            "slot": "0",
            "type": "t_mapping(t_address,t_bool)"
          },
          {
            "astId": 18,
            "contract": "contracts/Token.sol:Token",
            "label": "adminRole",
            "offset": 0,
            "slot": "1",
            "type": "t_bytes32"
          }
        ],
        "numberOfBytes": "64"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}