module.exports = {
    ERC20: [
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
            "inputs": [],
            "name": "didLaunch",
            "outputs": [
                {
                    "internalType": "uint8",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
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
            "name": "unstake",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
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
    ],

    WETH:[
        {
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "payable",
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
                    "name": "value",
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
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],

    UniswapV2Pair: [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
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
                    "name": "owner",
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
            "inputs": [],
            "name": "factory",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getReserves",
            "outputs": [
                {
                    "internalType": "uint112",
                    "name": "reserve0",
                    "type": "uint112"
                },
                {
                    "internalType": "uint112",
                    "name": "reserve1",
                    "type": "uint112"
                },
                {
                    "internalType": "uint32",
                    "name": "blockTimestampLast",
                    "type": "uint32"
                }
            ],
            "stateMutability": "view",
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
            "stateMutability": "pure",
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
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "token0",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "token1",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
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
    ],

    UniswapV2Factory: [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                }
            ],
            "name": "getPair",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
    ],

    UniswapV2Router02: [
        {
            "inputs": [],
            "name": "WETH",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "token",
                    "type": "address"
                },
                {
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "name": "amountTokenMin",
                    "type": "uint256"
                },
                {
                    "name": "amountETHMin",
                    "type": "uint256"
                },
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
            "outputs": [
                {
                    "name": "amountETH",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "name": "tokenB",
                    "type": "address"
                },
                {
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "name": "amountAMin",
                    "type": "uint256"
                },
                {
                    "name": "amountBMin",
                    "type": "uint256"
                },
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "removeLiquidity",
            "outputs": [
                {
                    "name": "amountA",
                    "type": "uint256"
                },
                {
                    "name": "amountB",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
    ],

    FrogeX: [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "routerAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint72",
                    "name": "initLqtyAmt",
                    "type": "uint72"
                }
            ],
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
                    "internalType": "uint256",
                    "name": "weiOut",
                    "type": "uint256"
                }
            ],
            "name": "ChtyEvt",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "ExcludeFromFees",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "ExcludeFromRewards",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "fxOut",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "weiIn",
                    "type": "uint256"
                }
            ],
            "name": "HopEvt",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "fxTokenAmount",
                    "type": "uint256"
                }
            ],
            "name": "LockerExternalAddLiquidityETH",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "lpTokenAmount",
                    "type": "uint256"
                }
            ],
            "name": "LockerExternalRemoveLiquidityETH",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "fxOut",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "weiOut",
                    "type": "uint256"
                }
            ],
            "name": "LqtyEvt",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "weiOut",
                    "type": "uint256"
                }
            ],
            "name": "MktgEvt",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "toggle",
                    "type": "bool"
                }
            ],
            "name": "SetBlacklist",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint16",
                    "name": "_ttlFeePctBuys",
                    "type": "uint16"
                },
                {
                    "indexed": true,
                    "internalType": "uint16",
                    "name": "_ttlFeePctSells",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "_ethPtnChty",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "_ethPtnMktg",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "_tknPtnLqty",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "_ethPtnLqty",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "_ethPtnRwds",
                    "type": "uint8"
                }
            ],
            "name": "SetFees",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint32",
                    "name": "oldUnlockDate",
                    "type": "uint32"
                },
                {
                    "indexed": true,
                    "internalType": "uint32",
                    "name": "newUnlockDate",
                    "type": "uint32"
                }
            ],
            "name": "SetLockerUnlockDate",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "newMinClaimableDivs",
                    "type": "uint64"
                }
            ],
            "name": "SetMinClaimableDivs",
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
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "XClaim",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "activate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender_",
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
            "name": "burnOwnerTokens",
            "outputs": [],
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
            "stateMutability": "pure",
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
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "excludeFromFees",
            "outputs": [],
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
            "name": "excludeFromRewards",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "accts",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "addAmts",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256",
                    "name": "tsIncrease",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "xtsIncrease",
                    "type": "uint256"
                }
            ],
            "name": "fxAddAirdrop",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "accts",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "subAmts",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256",
                    "name": "tsDecrease",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "xtsDecrease",
                    "type": "uint256"
                }
            ],
            "name": "fxSubAirdrop",
            "outputs": [],
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
            "name": "getAccount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_xDivsAvailable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_xDivsEarnedToDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_xDivsWithdrawnToDate",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_isAMMPair",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "_isBlackListedBot",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "_isExcludedFromRwds",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "_isExcludedFromFees",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getConfig",
            "outputs": [
                {
                    "internalType": "uint64",
                    "name": "_hopThreshold",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "_lqtyThreshold",
                    "type": "uint64"
                },
                {
                    "internalType": "uint32",
                    "name": "_lockerUnlockDate",
                    "type": "uint32"
                },
                {
                    "internalType": "uint16",
                    "name": "_xGasForClaim",
                    "type": "uint16"
                },
                {
                    "internalType": "uint64",
                    "name": "_xMinClaimableDivs",
                    "type": "uint64"
                },
                {
                    "internalType": "bool",
                    "name": "_tradingEnabled",
                    "type": "bool"
                },
                {
                    "internalType": "uint16",
                    "name": "_ttlFeePctBuys",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "_ttlFeePctSells",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "_ethPtnChty",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "_ethPtnMktg",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "_tknPtnLqty",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "_ethPtnLqty",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "_ethPtnRwds",
                    "type": "uint16"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getFXSwap",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getUniV2Pair",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getUniV2Router",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
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
                    "internalType": "uint32",
                    "name": "nSeconds",
                    "type": "uint32"
                }
            ],
            "name": "lockerAdvanceLock",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "fxTokenAmount",
                    "type": "uint256"
                }
            ],
            "name": "lockerExternalAddLiquidityETH",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "lpTokenAmount",
                    "type": "uint256"
                }
            ],
            "name": "lockerExternalRemoveLiquidityETH",
            "outputs": [],
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
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "pairAddr",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "toggle",
                    "type": "bool"
                }
            ],
            "name": "setAutomatedMarketMakerPair",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "toggle",
                    "type": "bool"
                }
            ],
            "name": "setBlackList",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_ttlFeePctBuys",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "_ttlFeePctSells",
                    "type": "uint16"
                },
                {
                    "internalType": "uint8",
                    "name": "_ethPtnChty",
                    "type": "uint8"
                },
                {
                    "internalType": "uint8",
                    "name": "_ethPtnMktg",
                    "type": "uint8"
                },
                {
                    "internalType": "uint8",
                    "name": "_tknPtnLqty",
                    "type": "uint8"
                },
                {
                    "internalType": "uint8",
                    "name": "_ethPtnLqty",
                    "type": "uint8"
                },
                {
                    "internalType": "uint8",
                    "name": "_ethPtnRwds",
                    "type": "uint8"
                }
            ],
            "name": "setFees",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "newGasForClaim",
                    "type": "uint16"
                }
            ],
            "name": "setGasForClaim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "tokenAmt",
                    "type": "uint64"
                }
            ],
            "name": "setHopThreshold",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "weiAmt",
                    "type": "uint64"
                }
            ],
            "name": "setLqtyThreshold",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "newMinClaimableDivs",
                    "type": "uint64"
                }
            ],
            "name": "setMinClaimableDivs",
            "outputs": [],
            "stateMutability": "nonpayable",
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
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint72",
                    "name": "",
                    "type": "uint72"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "recipient",
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
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
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
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "charityBeneficiary",
                    "type": "address"
                }
            ],
            "name": "withdrawCharityFunds",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "marketingBeneficiary",
                    "type": "address"
                }
            ],
            "name": "withdrawMarketingFunds",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "xClaim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "acct",
                    "type": "address"
                }
            ],
            "name": "xGetDivsAvailable",
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
                    "name": "acct",
                    "type": "address"
                }
            ],
            "name": "xGetDivsEarnedToDate",
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
            "inputs": [],
            "name": "xGetDivsGlobalTotalDist",
            "outputs": [
                {
                    "internalType": "uint88",
                    "name": "",
                    "type": "uint88"
                }
            ],
            "stateMutability": "view",
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
            "name": "xGetDivsWithdrawnToDate",
            "outputs": [
                {
                    "internalType": "uint88",
                    "name": "",
                    "type": "uint88"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "xTotalSupply",
            "outputs": [
                {
                    "internalType": "uint72",
                    "name": "",
                    "type": "uint72"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],


};
