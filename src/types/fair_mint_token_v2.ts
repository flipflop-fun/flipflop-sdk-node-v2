/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/fair_mint_token_v2.json`.
 */
export type FairMintTokenV2 = {
  "address": "FLiPUFYBgPW5q73tiFX92GkmdX5kiQcAQB8dYQurPHR",
  "metadata": {
    "name": "fairMintTokenV2",
    "version": "0.1.0",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "burnMintTokenVault",
      "discriminator": [
        255,
        254,
        39,
        14,
        229,
        37,
        89,
        240
      ],
      "accounts": [
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "tokenName"
              },
              {
                "kind": "arg",
                "path": "tokenSymbol"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mintTokenVault",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeToken",
      "discriminator": [
        26,
        74,
        236,
        151,
        104,
        64,
        183,
        249
      ],
      "accounts": [
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "tokenName"
              },
              {
                "kind": "arg",
                "path": "tokenSymbol"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenVault",
          "writable": true
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "mintTokenVault",
          "writable": true
        },
        {
          "name": "configAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "delegateValueManager",
      "discriminator": [
        65,
        71,
        81,
        199,
        83,
        64,
        181,
        167
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "tokenName"
              },
              {
                "kind": "arg",
                "path": "tokenSymbol"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "name": "newValueManager",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initializeLaunchRule",
      "docs": [
        "Initialize launch rule"
      ],
      "discriminator": [
        61,
        250,
        188,
        110,
        91,
        75,
        249,
        62
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "launchRuleData",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  97,
                  117,
                  110,
                  99,
                  104,
                  95,
                  114,
                  117,
                  108,
                  101
                ]
              },
              {
                "kind": "const",
                "value": [
                  182,
                  170,
                  55,
                  20,
                  102,
                  217,
                  47,
                  143,
                  149,
                  33,
                  37,
                  172,
                  229,
                  131,
                  149,
                  124,
                  52,
                  126,
                  53,
                  73,
                  199,
                  69,
                  248,
                  211,
                  168,
                  196,
                  34,
                  161,
                  132,
                  131,
                  85,
                  210
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "startSlot",
          "type": "u64"
        },
        {
          "name": "slotsPerPeriod",
          "type": "u64"
        },
        {
          "name": "baseLaunchLimit",
          "type": "u64"
        },
        {
          "name": "increasementLaunchLimit",
          "type": "u64"
        },
        {
          "name": "maxPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeSystem",
      "discriminator": [
        50,
        173,
        248,
        140,
        202,
        35,
        141,
        150
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemConfigAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  118,
                  50,
                  46,
                  48
                ]
              },
              {
                "kind": "const",
                "value": [
                  182,
                  170,
                  55,
                  20,
                  102,
                  217,
                  47,
                  143,
                  149,
                  33,
                  37,
                  172,
                  229,
                  131,
                  149,
                  124,
                  52,
                  126,
                  53,
                  73,
                  199,
                  69,
                  248,
                  211,
                  168,
                  196,
                  34,
                  161,
                  132,
                  131,
                  85,
                  210
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeToken",
      "discriminator": [
        38,
        209,
        150,
        50,
        190,
        117,
        16,
        54
      ],
      "accounts": [
        {
          "name": "metadata",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "tokenMetadataProgram"
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "account",
              "path": "tokenMetadataProgram"
            }
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "metadata_params.name"
              },
              {
                "kind": "arg",
                "path": "metadata_params.symbol"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "referrerThrottle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  114,
                  99,
                  95,
                  116,
                  104,
                  114,
                  111,
                  116,
                  116,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "launchRuleAccount"
        },
        {
          "name": "mintTokenVault",
          "writable": true
        },
        {
          "name": "tokenVault",
          "writable": true
        },
        {
          "name": "baseMint"
        },
        {
          "name": "payerBaseAta",
          "docs": [
            "Payer's USDC ATA (base token ATA)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "payer"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "systemConfigAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  118,
                  50,
                  46,
                  48
                ]
              },
              {
                "kind": "const",
                "value": [
                  182,
                  170,
                  55,
                  20,
                  102,
                  217,
                  47,
                  143,
                  149,
                  33,
                  37,
                  172,
                  229,
                  131,
                  149,
                  124,
                  52,
                  126,
                  53,
                  73,
                  199,
                  69,
                  248,
                  211,
                  168,
                  196,
                  34,
                  161,
                  132,
                  131,
                  85,
                  210
                ]
              }
            ]
          }
        },
        {
          "name": "protocolFeeAccount",
          "docs": [
            "protocol fee account, usdc ata"
          ],
          "writable": true
        },
        {
          "name": "protocolBaseVault",
          "writable": true
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": [
        {
          "name": "metadata",
          "type": {
            "defined": {
              "name": "tokenMetadata"
            }
          }
        },
        {
          "name": "initConfigData",
          "type": {
            "defined": {
              "name": "initializeTokenConfigData"
            }
          }
        }
      ]
    },
    {
      "name": "mintTokens",
      "discriminator": [
        59,
        132,
        24,
        246,
        122,
        39,
        8,
        243
      ],
      "accounts": [
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "tokenName"
              },
              {
                "kind": "arg",
                "path": "tokenSymbol"
              }
            ]
          }
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "destinationBaseAta",
          "writable": true
        },
        {
          "name": "refundAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "configAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "systemConfigAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  118,
                  50,
                  46,
                  48
                ]
              },
              {
                "kind": "const",
                "value": [
                  182,
                  170,
                  55,
                  20,
                  102,
                  217,
                  47,
                  143,
                  149,
                  33,
                  37,
                  172,
                  229,
                  131,
                  149,
                  124,
                  52,
                  126,
                  53,
                  73,
                  199,
                  69,
                  248,
                  211,
                  168,
                  196,
                  34,
                  161,
                  132,
                  131,
                  85,
                  210
                ]
              }
            ]
          }
        },
        {
          "name": "mintTokenVault",
          "writable": true
        },
        {
          "name": "tokenVault",
          "writable": true
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "baseMint"
        },
        {
          "name": "solFeePayer",
          "docs": [
            "CHECKED"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  111,
                  108,
                  95,
                  102,
                  101,
                  101,
                  95,
                  112,
                  97,
                  121,
                  101,
                  114,
                  95,
                  49
                ]
              }
            ]
          }
        },
        {
          "name": "referrerAta"
        },
        {
          "name": "referrerBaseAta",
          "writable": true
        },
        {
          "name": "referrerMain",
          "writable": true
        },
        {
          "name": "referralAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              },
              {
                "kind": "account",
                "path": "referrerMain"
              }
            ]
          }
        },
        {
          "name": "protocolFeeAccount"
        },
        {
          "name": "protocolBaseVault",
          "writable": true
        },
        {
          "name": "poolState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "ammConfig"
              },
              {
                "kind": "account",
                "path": "token0Mint"
              },
              {
                "kind": "account",
                "path": "token1Mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                169,
                42,
                90,
                139,
                79,
                41,
                89,
                82,
                132,
                37,
                80,
                170,
                147,
                253,
                91,
                149,
                181,
                172,
                230,
                168,
                235,
                146,
                12,
                147,
                148,
                46,
                67,
                105,
                12,
                32,
                236,
                115
              ]
            }
          }
        },
        {
          "name": "ammConfig",
          "address": "D4FPEruKEHrG5TenZ2mpDGEfu1iUvTiqBxvpU8HLBvC2"
        },
        {
          "name": "cpSwapProgram",
          "address": "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"
        },
        {
          "name": "token0Mint"
        },
        {
          "name": "token1Mint"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "name": "codeHash",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "proxyBurnLpTokens",
      "discriminator": [
        215,
        41,
        48,
        70,
        81,
        221,
        246,
        105
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "docs": [
            "token mint"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "tokenName"
              },
              {
                "kind": "arg",
                "path": "tokenSymbol"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "ownerLpToken",
          "docs": [
            "Owner lp token account - config account"
          ],
          "writable": true
        },
        {
          "name": "lpMint",
          "docs": [
            "pool lp mint, init by cp-swap"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxyDepositPool",
      "discriminator": [
        115,
        170,
        213,
        136,
        72,
        135,
        25,
        200
      ],
      "accounts": [
        {
          "name": "cpSwapProgram",
          "address": "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"
        },
        {
          "name": "owner",
          "docs": [
            "Pays to mint the position"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "docs": [
            "Token mint"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "tokenName"
              },
              {
                "kind": "arg",
                "path": "tokenSymbol"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "docs": [
            "Config account"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  97,
                  110,
                  100,
                  95,
                  108,
                  112,
                  95,
                  109,
                  105,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                169,
                42,
                90,
                139,
                79,
                41,
                89,
                82,
                132,
                37,
                80,
                170,
                147,
                253,
                91,
                149,
                181,
                172,
                230,
                168,
                235,
                146,
                12,
                147,
                148,
                46,
                67,
                105,
                12,
                32,
                236,
                115
              ]
            }
          }
        },
        {
          "name": "poolState",
          "docs": [
            "pool state"
          ],
          "writable": true
        },
        {
          "name": "ownerLpToken",
          "docs": [
            "Owner lp token account"
          ],
          "writable": true
        },
        {
          "name": "token0Account",
          "docs": [
            "The payer's token account for token_0"
          ],
          "writable": true
        },
        {
          "name": "token1Account",
          "docs": [
            "The payer's token account for token_1"
          ],
          "writable": true
        },
        {
          "name": "token0Vault",
          "docs": [
            "The address that holds pool tokens for token_0"
          ],
          "writable": true
        },
        {
          "name": "token1Vault",
          "docs": [
            "The address that holds pool tokens for token_1"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "token Program"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgram2022",
          "docs": [
            "Token program 2022"
          ],
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "vault0Mint",
          "docs": [
            "The mint of token_0 vault"
          ]
        },
        {
          "name": "vault1Mint",
          "docs": [
            "The mint of token_1 vault"
          ]
        },
        {
          "name": "lpMint",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "name": "lpTokenAmount",
          "type": "u64"
        },
        {
          "name": "maximumToken0Amount",
          "type": "u64"
        },
        {
          "name": "maximumToken1Amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxySwapBaseInPool",
      "discriminator": [
        60,
        150,
        179,
        207,
        159,
        92,
        223,
        167
      ],
      "accounts": [
        {
          "name": "cpSwapProgram",
          "address": "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"
        },
        {
          "name": "payer",
          "docs": [
            "The user performing the swap"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "docs": [
            "Token mint"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "tokenName"
              },
              {
                "kind": "arg",
                "path": "tokenSymbol"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "docs": [
            "Config account"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  97,
                  110,
                  100,
                  95,
                  108,
                  112,
                  95,
                  109,
                  105,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                169,
                42,
                90,
                139,
                79,
                41,
                89,
                82,
                132,
                37,
                80,
                170,
                147,
                253,
                91,
                149,
                181,
                172,
                230,
                168,
                235,
                146,
                12,
                147,
                148,
                46,
                67,
                105,
                12,
                32,
                236,
                115
              ]
            }
          }
        },
        {
          "name": "ammConfig",
          "docs": [
            "The factory state to read protocol fees"
          ]
        },
        {
          "name": "poolState",
          "docs": [
            "pool state"
          ],
          "writable": true
        },
        {
          "name": "inputTokenAccount",
          "docs": [
            "The user token account for input token"
          ],
          "writable": true
        },
        {
          "name": "outputTokenAccount",
          "docs": [
            "The user token account for output token"
          ],
          "writable": true
        },
        {
          "name": "inputVault",
          "docs": [
            "The vault token account for input token"
          ],
          "writable": true
        },
        {
          "name": "outputVault",
          "docs": [
            "The vault token account for output token"
          ],
          "writable": true
        },
        {
          "name": "inputTokenProgram",
          "docs": [
            "SPL program for input token transfers"
          ]
        },
        {
          "name": "outputTokenProgram",
          "docs": [
            "SPL program for output token transfers"
          ]
        },
        {
          "name": "inputTokenMint",
          "docs": [
            "The mint of input token"
          ]
        },
        {
          "name": "outputTokenMint",
          "docs": [
            "The mint of output token"
          ]
        },
        {
          "name": "observationState",
          "docs": [
            "The program account for the most recent oracle observation"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minimumAmountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxySwapBaseOutPool",
      "discriminator": [
        63,
        189,
        253,
        38,
        226,
        46,
        174,
        8
      ],
      "accounts": [
        {
          "name": "cpSwapProgram",
          "address": "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"
        },
        {
          "name": "payer",
          "docs": [
            "The user performing the swap"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "docs": [
            "Token mint"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "tokenName"
              },
              {
                "kind": "arg",
                "path": "tokenSymbol"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "docs": [
            "Config account"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  97,
                  110,
                  100,
                  95,
                  108,
                  112,
                  95,
                  109,
                  105,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                169,
                42,
                90,
                139,
                79,
                41,
                89,
                82,
                132,
                37,
                80,
                170,
                147,
                253,
                91,
                149,
                181,
                172,
                230,
                168,
                235,
                146,
                12,
                147,
                148,
                46,
                67,
                105,
                12,
                32,
                236,
                115
              ]
            }
          }
        },
        {
          "name": "ammConfig",
          "docs": [
            "The factory state to read protocol fees"
          ]
        },
        {
          "name": "poolState",
          "docs": [
            "pool state"
          ],
          "writable": true
        },
        {
          "name": "inputTokenAccount",
          "docs": [
            "The user token account for input token"
          ],
          "writable": true
        },
        {
          "name": "outputTokenAccount",
          "docs": [
            "The user token account for output token"
          ],
          "writable": true
        },
        {
          "name": "inputVault",
          "docs": [
            "The vault token account for input token"
          ],
          "writable": true
        },
        {
          "name": "outputVault",
          "docs": [
            "The vault token account for output token"
          ],
          "writable": true
        },
        {
          "name": "inputTokenProgram",
          "docs": [
            "SPL program for input token transfers"
          ]
        },
        {
          "name": "outputTokenProgram",
          "docs": [
            "SPL program for output token transfers"
          ]
        },
        {
          "name": "inputTokenMint",
          "docs": [
            "The mint of input token"
          ]
        },
        {
          "name": "outputTokenMint",
          "docs": [
            "The mint of output token"
          ]
        },
        {
          "name": "observationState",
          "docs": [
            "The program account for the most recent oracle observation"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "name": "maximumAmountIn",
          "type": "u64"
        },
        {
          "name": "amountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proxyWithdrawPool",
      "discriminator": [
        66,
        190,
        55,
        26,
        73,
        69,
        6,
        183
      ],
      "accounts": [
        {
          "name": "cpSwapProgram",
          "address": "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"
        },
        {
          "name": "owner",
          "docs": [
            "Pays to mint the position"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "docs": [
            "Token mint"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "tokenName"
              },
              {
                "kind": "arg",
                "path": "tokenSymbol"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "docs": [
            "Config account"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  97,
                  110,
                  100,
                  95,
                  108,
                  112,
                  95,
                  109,
                  105,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                169,
                42,
                90,
                139,
                79,
                41,
                89,
                82,
                132,
                37,
                80,
                170,
                147,
                253,
                91,
                149,
                181,
                172,
                230,
                168,
                235,
                146,
                12,
                147,
                148,
                46,
                67,
                105,
                12,
                32,
                236,
                115
              ]
            }
          }
        },
        {
          "name": "poolState",
          "docs": [
            "pool state"
          ],
          "writable": true
        },
        {
          "name": "ownerLpToken",
          "docs": [
            "Owner lp token account"
          ],
          "writable": true
        },
        {
          "name": "token0Account",
          "docs": [
            "The owner's token account for receive token_0"
          ],
          "writable": true
        },
        {
          "name": "token1Account",
          "docs": [
            "The owner's token account for receive token_1"
          ],
          "writable": true
        },
        {
          "name": "token0Vault",
          "docs": [
            "The address that holds pool tokens for token_0"
          ],
          "writable": true
        },
        {
          "name": "token1Vault",
          "docs": [
            "The address that holds pool tokens for token_1"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "token Program"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgram2022",
          "docs": [
            "Token program 2022"
          ],
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "vault0Mint",
          "docs": [
            "The mint of token_0 vault"
          ]
        },
        {
          "name": "vault1Mint",
          "docs": [
            "The mint of token_1 vault"
          ]
        },
        {
          "name": "lpMint",
          "writable": true
        },
        {
          "name": "memoProgram",
          "docs": [
            "memo program"
          ],
          "address": "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
        }
      ],
      "args": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "name": "lpTokenAmount",
          "type": "u64"
        },
        {
          "name": "minimumToken0Amount",
          "type": "u64"
        },
        {
          "name": "minimumToken1Amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "refund",
      "discriminator": [
        2,
        96,
        183,
        251,
        63,
        208,
        46,
        46
      ],
      "accounts": [
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "tokenName"
              },
              {
                "kind": "arg",
                "path": "tokenSymbol"
              }
            ]
          }
        },
        {
          "name": "refundAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "tokenAta",
          "writable": true
        },
        {
          "name": "tokenVault",
          "writable": true
        },
        {
          "name": "protocolFeeAccount",
          "docs": [
            "CHECK the protocol fee account"
          ],
          "writable": true
        },
        {
          "name": "systemConfigAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  118,
                  50,
                  46,
                  48
                ]
              },
              {
                "kind": "const",
                "value": [
                  182,
                  170,
                  55,
                  20,
                  102,
                  217,
                  47,
                  143,
                  149,
                  33,
                  37,
                  172,
                  229,
                  131,
                  149,
                  124,
                  52,
                  126,
                  53,
                  73,
                  199,
                  69,
                  248,
                  211,
                  168,
                  196,
                  34,
                  161,
                  132,
                  131,
                  85,
                  210
                ]
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "payerBaseVault",
          "writable": true
        },
        {
          "name": "protocolBaseVault",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        }
      ]
    },
    {
      "name": "revokeUpdateMetadataAuthority",
      "docs": [
        "Revoke update token2022 metadata authority"
      ],
      "discriminator": [
        16,
        230,
        0,
        225,
        47,
        138,
        113,
        90
      ],
      "accounts": [
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "metadata_params.name"
              },
              {
                "kind": "arg",
                "path": "metadata_params.symbol"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "metadata",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "tokenMetadataProgram"
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "account",
              "path": "tokenMetadataProgram"
            }
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "metadata",
          "type": {
            "defined": {
              "name": "tokenMetadata"
            }
          }
        }
      ]
    },
    {
      "name": "setReferrerCode",
      "discriminator": [
        129,
        47,
        113,
        211,
        151,
        134,
        156,
        250
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "tokenName"
              },
              {
                "kind": "arg",
                "path": "tokenSymbol"
              }
            ]
          }
        },
        {
          "name": "referrerAta",
          "writable": true
        },
        {
          "name": "referralAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "systemConfigAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  118,
                  50,
                  46,
                  48
                ]
              },
              {
                "kind": "const",
                "value": [
                  182,
                  170,
                  55,
                  20,
                  102,
                  217,
                  47,
                  143,
                  149,
                  33,
                  37,
                  172,
                  229,
                  131,
                  149,
                  124,
                  52,
                  126,
                  53,
                  73,
                  199,
                  69,
                  248,
                  211,
                  168,
                  196,
                  34,
                  161,
                  132,
                  131,
                  85,
                  210
                ]
              }
            ]
          }
        },
        {
          "name": "codeAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  100,
                  101,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "codeHash"
              }
            ]
          }
        },
        {
          "name": "referrerThrottle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  114,
                  99,
                  95,
                  116,
                  104,
                  114,
                  111,
                  116,
                  116,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "name": "codeHash",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "updateSystem",
      "discriminator": [
        63,
        147,
        183,
        92,
        22,
        242,
        219,
        4
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemConfigAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  118,
                  50,
                  46,
                  48
                ]
              },
              {
                "kind": "const",
                "value": [
                  182,
                  170,
                  55,
                  20,
                  102,
                  217,
                  47,
                  143,
                  149,
                  33,
                  37,
                  172,
                  229,
                  131,
                  149,
                  124,
                  52,
                  126,
                  53,
                  73,
                  199,
                  69,
                  248,
                  211,
                  168,
                  196,
                  34,
                  161,
                  132,
                  131,
                  85,
                  210
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "admin",
          "type": "pubkey"
        },
        {
          "name": "referralUsageMaxCount",
          "type": "u32"
        },
        {
          "name": "protocolFeeAccount",
          "type": "pubkey"
        },
        {
          "name": "refundFeeRate",
          "type": "u64"
        },
        {
          "name": "referrerResetIntervalSeconds",
          "type": "u64"
        },
        {
          "name": "updateMetadataFee",
          "type": "u64"
        },
        {
          "name": "customizedDeployFee",
          "type": "u64"
        },
        {
          "name": "initPoolBaseAmount",
          "type": "u64"
        },
        {
          "name": "graduateFeeRate",
          "type": "u64"
        },
        {
          "name": "raydiumCpmmCreateFee",
          "type": "u64"
        },
        {
          "name": "isPause",
          "type": "bool"
        }
      ]
    },
    {
      "name": "updateTokenMetadata",
      "discriminator": [
        243,
        6,
        8,
        23,
        126,
        181,
        251,
        158
      ],
      "accounts": [
        {
          "name": "mint",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "metadata_params.name"
              },
              {
                "kind": "arg",
                "path": "metadata_params.symbol"
              }
            ]
          }
        },
        {
          "name": "configAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "metadata",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "tokenMetadataProgram"
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "account",
              "path": "tokenMetadataProgram"
            }
          }
        },
        {
          "name": "systemConfigAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  95,
                  118,
                  50,
                  46,
                  48
                ]
              },
              {
                "kind": "const",
                "value": [
                  182,
                  170,
                  55,
                  20,
                  102,
                  217,
                  47,
                  143,
                  149,
                  33,
                  37,
                  172,
                  229,
                  131,
                  149,
                  124,
                  52,
                  126,
                  53,
                  73,
                  199,
                  69,
                  248,
                  211,
                  168,
                  196,
                  34,
                  161,
                  132,
                  131,
                  85,
                  210
                ]
              }
            ]
          }
        },
        {
          "name": "protocolFeeAccount",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        }
      ],
      "args": [
        {
          "name": "metadata",
          "type": {
            "defined": {
              "name": "tokenMetadata"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "ammConfig",
      "discriminator": [
        218,
        244,
        33,
        104,
        203,
        203,
        43,
        111
      ]
    },
    {
      "name": "codeAccountData",
      "discriminator": [
        223,
        104,
        233,
        118,
        230,
        133,
        135,
        33
      ]
    },
    {
      "name": "launchRuleData",
      "discriminator": [
        219,
        140,
        239,
        85,
        135,
        107,
        8,
        102
      ]
    },
    {
      "name": "observationState",
      "discriminator": [
        122,
        174,
        197,
        53,
        129,
        9,
        165,
        132
      ]
    },
    {
      "name": "poolState",
      "discriminator": [
        247,
        237,
        227,
        245,
        215,
        195,
        222,
        70
      ]
    },
    {
      "name": "referrerThrottleData",
      "discriminator": [
        156,
        48,
        238,
        20,
        112,
        82,
        26,
        5
      ]
    },
    {
      "name": "systemConfigData",
      "discriminator": [
        192,
        35,
        167,
        45,
        153,
        226,
        213,
        45
      ]
    },
    {
      "name": "tokenConfigData",
      "discriminator": [
        38,
        179,
        204,
        76,
        50,
        176,
        214,
        81
      ]
    },
    {
      "name": "tokenReferralData",
      "discriminator": [
        136,
        185,
        38,
        182,
        42,
        126,
        118,
        45
      ]
    },
    {
      "name": "tokenRefundData",
      "discriminator": [
        16,
        160,
        38,
        231,
        81,
        131,
        138,
        105
      ]
    }
  ],
  "events": [
    {
      "name": "closeTokenEvent",
      "discriminator": [
        203,
        9,
        156,
        247,
        207,
        50,
        200,
        219
      ]
    },
    {
      "name": "initializeTokenEvent",
      "discriminator": [
        108,
        41,
        10,
        194,
        65,
        120,
        212,
        118
      ]
    },
    {
      "name": "mintEvent",
      "discriminator": [
        197,
        144,
        146,
        149,
        66,
        164,
        95,
        16
      ]
    },
    {
      "name": "refundEvent",
      "discriminator": [
        176,
        159,
        218,
        59,
        94,
        213,
        129,
        218
      ]
    },
    {
      "name": "setRefererCodeEvent",
      "discriminator": [
        156,
        230,
        12,
        212,
        118,
        228,
        15,
        218
      ]
    },
    {
      "name": "updateTokenMetadataEvent",
      "discriminator": [
        203,
        161,
        251,
        30,
        78,
        127,
        196,
        227
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "unknowError",
      "msg": "Unknow error"
    },
    {
      "code": 6001,
      "name": "onlyAdminAllowed",
      "msg": "Only admin allowed"
    },
    {
      "code": 6002,
      "name": "exceedMaxSupply",
      "msg": "Exceed max supply"
    },
    {
      "code": 6003,
      "name": "notEnoughSolToPayFee",
      "msg": "Not enough SOL to pay fee"
    },
    {
      "code": 6004,
      "name": "wrongReferrerAta",
      "msg": "Wrong referrer ATA address"
    },
    {
      "code": 6005,
      "name": "wrongReferrerOwner",
      "msg": "Wrong referrer owner"
    },
    {
      "code": 6006,
      "name": "referrerCodeResetFrozen",
      "msg": "Referrer code reset frozen"
    },
    {
      "code": 6007,
      "name": "referrerCodeExceedMaxUsage",
      "msg": "Referrer code exceed max usage"
    },
    {
      "code": 6008,
      "name": "wrongReferrerAtaOwner",
      "msg": "Wrong referrer ATA owner"
    },
    {
      "code": 6009,
      "name": "wrongReferrerMainAddress",
      "msg": "Wrong referrer main address"
    },
    {
      "code": 6010,
      "name": "referrerAtaNotReady",
      "msg": "Referrer ATA is not ready"
    },
    {
      "code": 6011,
      "name": "referrerAtaBalanceNotEnough",
      "msg": "Referrer ATA's balance is not enough"
    },
    {
      "code": 6012,
      "name": "wrongTokenProgram",
      "msg": "Wrong token program"
    },
    {
      "code": 6013,
      "name": "targetErasNotReached",
      "msg": "Target eras not reached"
    },
    {
      "code": 6014,
      "name": "wrongProtocolFeeAccount",
      "msg": "Wrong protocol fee account"
    },
    {
      "code": 6015,
      "name": "onlyUserAccountAllowed",
      "msg": "Only user account allowed"
    },
    {
      "code": 6016,
      "name": "notEnoughTokensToRefund",
      "msg": "Not enough tokens to refund"
    },
    {
      "code": 6017,
      "name": "refundTokensIsZero",
      "msg": "Refund tokens is zero"
    },
    {
      "code": 6018,
      "name": "invalidLiquidityTokensRatio",
      "msg": "Invalid liquidity tokens ratio, should be > 0 and <= 50"
    },
    {
      "code": 6019,
      "name": "invalidReduceRatio",
      "msg": "Invalid reduce ratio, should be >= 50 and < 100"
    },
    {
      "code": 6020,
      "name": "invalidEpochesPerEra",
      "msg": "Invalid epoches per era, should be > 0"
    },
    {
      "code": 6021,
      "name": "invalidTargetSecondsPerEpoch",
      "msg": "Invalid target seconds per epoch, should be > 0"
    },
    {
      "code": 6022,
      "name": "invalidTargetEras",
      "msg": "Invalid target eras, should be > 0"
    },
    {
      "code": 6023,
      "name": "invalidInitialMintSize",
      "msg": "Invalid initial mint size, should be > 0"
    },
    {
      "code": 6024,
      "name": "invalidInitialTargetMintSizePerEpoch",
      "msg": "Invalid initial target mint size per epoch, should be > 0"
    },
    {
      "code": 6025,
      "name": "initialMintSizeOfEpochTooSmall",
      "msg": "Initial mint size of epoch too small, should be 10 * mint size per minting"
    },
    {
      "code": 6026,
      "name": "userBalanceNotEnoughForRefund",
      "msg": "User token balance not enough for refund"
    },
    {
      "code": 6027,
      "name": "vaultBalanceNotEnoughForRefund",
      "msg": "Vault token balance not enough for refund"
    },
    {
      "code": 6028,
      "name": "onlySystemAdminAllowed",
      "msg": "Only system admin allowed"
    },
    {
      "code": 6029,
      "name": "systemAlreadyInitialized",
      "msg": "System already initialized"
    },
    {
      "code": 6030,
      "name": "wrongSystemConfigAccount",
      "msg": "Wrong system config account"
    },
    {
      "code": 6031,
      "name": "invalidFeeAccount",
      "msg": "Invalid fee account"
    },
    {
      "code": 6032,
      "name": "invalidTokenVault",
      "msg": "Invalid token vault"
    },
    {
      "code": 6033,
      "name": "invalidTokenVaultOwner",
      "msg": "Invalid token vault owner"
    },
    {
      "code": 6034,
      "name": "mintNotStarted",
      "msg": "Mint has not started"
    },
    {
      "code": 6035,
      "name": "wrongReferrerCode",
      "msg": "Wrong referrer account"
    },
    {
      "code": 6036,
      "name": "wrongMintAddress",
      "msg": "Wrong mint address"
    },
    {
      "code": 6037,
      "name": "mintHasStarted",
      "msg": "Mint has started"
    },
    {
      "code": 6038,
      "name": "invalidTokenMint",
      "msg": "Invalid token mint"
    },
    {
      "code": 6039,
      "name": "invalidTokenOwner",
      "msg": "Invalid token owner"
    },
    {
      "code": 6040,
      "name": "numericOverflow",
      "msg": "Numeric overflow"
    },
    {
      "code": 6041,
      "name": "insufficientFunds",
      "msg": "Insufficient funds"
    },
    {
      "code": 6042,
      "name": "burnOperationFailed",
      "msg": "Burn operation failed"
    },
    {
      "code": 6043,
      "name": "refundInProgress",
      "msg": "Refund in progress"
    },
    {
      "code": 6044,
      "name": "divideByZero",
      "msg": "Division by zero"
    },
    {
      "code": 6045,
      "name": "transferFailed",
      "msg": "Transfer failed"
    },
    {
      "code": 6046,
      "name": "referrerMainAccountEmpty",
      "msg": "Referrer main account empty"
    },
    {
      "code": 6047,
      "name": "invalidPayerAccount",
      "msg": "Invalid payer account"
    },
    {
      "code": 6048,
      "name": "invalidCodeHash",
      "msg": "Invalid code hash"
    },
    {
      "code": 6049,
      "name": "invalidResetInterval",
      "msg": "Invalid reset interval"
    },
    {
      "code": 6050,
      "name": "tokenAlreadyInitialized",
      "msg": "Token already initialized"
    },
    {
      "code": 6051,
      "name": "invalidTokenName",
      "msg": "Invalid token name"
    },
    {
      "code": 6052,
      "name": "invalidTokenSymbol",
      "msg": "Invalid token symbol"
    },
    {
      "code": 6053,
      "name": "invalidTokenUri",
      "msg": "Invalid token uri"
    },
    {
      "code": 6054,
      "name": "metadataAlreadyInitialized",
      "msg": "Metadata already initialized"
    },
    {
      "code": 6055,
      "name": "invalidProtocolFeeRate",
      "msg": "Invalid protocol fee rate, max 50000 which is 50%"
    },
    {
      "code": 6056,
      "name": "invalidRefundFeeRate",
      "msg": "Invalid refund fee rate, max 50000 which is 50%"
    },
    {
      "code": 6057,
      "name": "invalidGraduateFeeRate",
      "msg": "Invalid graduate fee rate, max 50 which is 50%"
    },
    {
      "code": 6058,
      "name": "mintInProgress",
      "msg": "Mint in progress"
    },
    {
      "code": 6059,
      "name": "setReferrerCodeProcess",
      "msg": "Set referrer code processing"
    },
    {
      "code": 6060,
      "name": "payerAmountTooLow",
      "msg": "Payer amount too low"
    },
    {
      "code": 6061,
      "name": "configSupplyNotMatchMintSupply",
      "msg": "Config supply not match mint supply"
    },
    {
      "code": 6062,
      "name": "insufficientBalanceForDeployment",
      "msg": "Insufficient balance for deployment"
    },
    {
      "code": 6063,
      "name": "sendInitializingFeeFailed",
      "msg": "Send initializing fee failed"
    },
    {
      "code": 6064,
      "name": "invalidMintAccount",
      "msg": "Invalid mint account"
    },
    {
      "code": 6065,
      "name": "invalidTokenProgram",
      "msg": "Invalid token program"
    },
    {
      "code": 6066,
      "name": "refundOnlyAllowedInTargetEras",
      "msg": "Refund only allowed in target eras"
    },
    {
      "code": 6067,
      "name": "graduateFrozenPeriodNotOver",
      "msg": "Graduate frozen period not over, need to wait 2 epochs after target era arrived!"
    },
    {
      "code": 6068,
      "name": "onlyValueManagerAllowed",
      "msg": "Only value manager allowed"
    },
    {
      "code": 6069,
      "name": "invalidValueManager",
      "msg": "Invalid value manager"
    },
    {
      "code": 6070,
      "name": "invalidProtocolFeeAccount",
      "msg": "Invalid protocol fee account"
    },
    {
      "code": 6071,
      "name": "invalidRemainingAccounts",
      "msg": "Invalid remaining accounts"
    },
    {
      "code": 6072,
      "name": "creatorTokenNotEnoughForInitializePool",
      "msg": "Creator token not enough for initialize pool"
    },
    {
      "code": 6073,
      "name": "graduateFeeIsNotEnough",
      "msg": "Graduate fee is not enough"
    },
    {
      "code": 6074,
      "name": "invalidDestinationAta",
      "msg": "Invalid destination ata"
    },
    {
      "code": 6075,
      "name": "invalidMillisecondsPerSlot",
      "msg": "Invalid milliseconds per slot"
    },
    {
      "code": 6076,
      "name": "selfReferrerNotAllowed",
      "msg": "Self referrer not allowed"
    },
    {
      "code": 6077,
      "name": "wrongPoolToken",
      "msg": "Wrong pool token"
    },
    {
      "code": 6078,
      "name": "wrongTokenMintOrder",
      "msg": "Wrong token mint order"
    },
    {
      "code": 6079,
      "name": "invalidMintTokenVaultOwner",
      "msg": "Invalid mint token vault owner"
    },
    {
      "code": 6080,
      "name": "userBalanceNotEnoughToRefund",
      "msg": "User balance not enough to refund"
    },
    {
      "code": 6081,
      "name": "vaultBalanceNotEnoughToRefund",
      "msg": "Vault balance not enough to refund"
    },
    {
      "code": 6082,
      "name": "insufficientMintTokenVaultBalance",
      "msg": "Insufficient mint token vault balance"
    },
    {
      "code": 6083,
      "name": "poolAlreadyCreated",
      "msg": "Pool already created"
    },
    {
      "code": 6084,
      "name": "invalidVaultBalance",
      "msg": "Vault balance not equal to refund"
    },
    {
      "code": 6085,
      "name": "invalidMintTokenVault",
      "msg": "Invalid mint token vault"
    },
    {
      "code": 6086,
      "name": "launchTokenPaused",
      "msg": "Launch token paused"
    },
    {
      "code": 6087,
      "name": "launchRuleAlreadyInitialized",
      "msg": "Launch rule already initialized"
    },
    {
      "code": 6088,
      "name": "launchRuleLimited",
      "msg": "Launch rule limited"
    },
    {
      "code": 6089,
      "name": "tokenToPoolNotEnough",
      "msg": "Token to pool not enough"
    },
    {
      "code": 6090,
      "name": "launchRuleAdminNotMatch",
      "msg": "Launch rule admin not match"
    },
    {
      "code": 6091,
      "name": "invalidSystemConfigAccount",
      "msg": "Invalid system config account"
    },
    {
      "code": 6092,
      "name": "invalidMetadataProgram",
      "msg": "Invalid metadata program"
    },
    {
      "code": 6093,
      "name": "swapInProgress",
      "msg": "Swap operation in progress, please try again later"
    },
    {
      "code": 6094,
      "name": "depositInProgress",
      "msg": "Deposit operation in progress, please try again later"
    },
    {
      "code": 6095,
      "name": "withdrawInProgress",
      "msg": "Withdraw operation in progress, please try again later"
    },
    {
      "code": 6096,
      "name": "burnLpInProgress",
      "msg": "Burn LP tokens operation in progress, please try again later"
    },
    {
      "code": 6097,
      "name": "createPoolInProgress",
      "msg": "Create pool operation in progress, please try again later"
    },
    {
      "code": 6098,
      "name": "invalidProgramId",
      "msg": "Invalid program id"
    },
    {
      "code": 6099,
      "name": "invalidRemainingCpSwapProgram",
      "msg": "Invalid remaining cp swap program"
    },
    {
      "code": 6100,
      "name": "invalidRemainingTokenProgram",
      "msg": "Invalid remaining token program"
    },
    {
      "code": 6101,
      "name": "invalidRemainingAssociatedTokenProgram",
      "msg": "Invalid remaining associated token program"
    },
    {
      "code": 6102,
      "name": "invalidRemainingSystemProgram",
      "msg": "Invalid remaining system program"
    },
    {
      "code": 6103,
      "name": "invalidRemainingRentProgram",
      "msg": "Invalid remaining rent program"
    },
    {
      "code": 6104,
      "name": "invalidRemainingAuthority",
      "msg": "Invalid remaining authority program"
    },
    {
      "code": 6105,
      "name": "invalidRemainingWrongTokenMintOrder",
      "msg": "Invalid remaining wrong token mint order"
    },
    {
      "code": 6106,
      "name": "invalidRemainingWrongTokenMint",
      "msg": "Invalid remaining wrong token mint program"
    },
    {
      "code": 6107,
      "name": "invalidRemainingCreatorMustBeSigner",
      "msg": "Invalid remaining creator must be signer"
    },
    {
      "code": 6108,
      "name": "invalidRemainingPoolState",
      "msg": "Invalid remaining pool state program"
    },
    {
      "code": 6109,
      "name": "invalidRemainingToken0Vault",
      "msg": "Invalid remaining token 0 vault program"
    },
    {
      "code": 6110,
      "name": "invalidRemainingToken1Vault",
      "msg": "Invalid remaining token 1 vault program"
    },
    {
      "code": 6111,
      "name": "invalidRemainingCreatePoolFee",
      "msg": "Invalid remaining create pool fee program"
    },
    {
      "code": 6112,
      "name": "invalidRemainingObservationState",
      "msg": "Invalid remaining observation state program"
    },
    {
      "code": 6113,
      "name": "invalidRemainingCreatorToken0",
      "msg": "Invalid remaining creator token 0 program"
    },
    {
      "code": 6114,
      "name": "invalidRemainingCreatorToken1",
      "msg": "Invalid remaining creator token 1 program"
    },
    {
      "code": 6115,
      "name": "invalidRemainingLpMint",
      "msg": "Invalid remaining lp mint program"
    },
    {
      "code": 6116,
      "name": "invalidRemainingCreatorLpToken",
      "msg": "Invalid remaining creator lp token program"
    },
    {
      "code": 6117,
      "name": "invalidRemainingAmmConfig",
      "msg": "Invalid remaining amm config"
    },
    {
      "code": 6118,
      "name": "invalidRemainingToken0ProgramId",
      "msg": "Invalid remaining token 0 program id"
    },
    {
      "code": 6119,
      "name": "invalidRemainingToken1ProgramId",
      "msg": "Invalid remaining token 1 program id"
    },
    {
      "code": 6120,
      "name": "urcActivationLimitExceeded",
      "msg": "URC activation exceeds limit in current window"
    },
    {
      "code": 6121,
      "name": "invalidAdminAccount",
      "msg": "Invalid admin account"
    },
    {
      "code": 6122,
      "name": "invalidBaseVault",
      "msg": "Invalid Base Vault"
    },
    {
      "code": 6123,
      "name": "invalidBaseMint",
      "msg": "Invalid Base Mint"
    },
    {
      "code": 6124,
      "name": "notEnoughBaseToPayFee",
      "msg": "Not Enough Base to mint"
    },
    {
      "code": 6125,
      "name": "wrongReferrerBaseAta",
      "msg": "Wrong referrer Base ata account"
    },
    {
      "code": 6126,
      "name": "invalidBaseAta",
      "msg": "Invalid Base ata"
    },
    {
      "code": 6127,
      "name": "invalidProtocolBaseVault",
      "msg": "Invalid protocol Base vault"
    },
    {
      "code": 6128,
      "name": "protocolBaseVaultIsIsEmpty",
      "msg": "Protocol Base vault is empty"
    },
    {
      "code": 6129,
      "name": "invalidBaseVaultOwner",
      "msg": "Invalid Base Vault Owner"
    },
    {
      "code": 6130,
      "name": "solFeePayerIsNotEnough",
      "msg": "Sol fee payer's balance is not enough"
    },
    {
      "code": 6131,
      "name": "solFeePayerToBeSystemAccount",
      "msg": "Sol fee payer should be system account"
    }
  ],
  "types": [
    {
      "name": "ammConfig",
      "docs": [
        "Holds the current owner of the factory"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump to identify PDA"
            ],
            "type": "u8"
          },
          {
            "name": "disableCreatePool",
            "docs": [
              "Status to control if new pool can be create"
            ],
            "type": "bool"
          },
          {
            "name": "index",
            "docs": [
              "Config index"
            ],
            "type": "u16"
          },
          {
            "name": "tradeFeeRate",
            "docs": [
              "The trade fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u64"
          },
          {
            "name": "protocolFeeRate",
            "docs": [
              "The protocol fee"
            ],
            "type": "u64"
          },
          {
            "name": "fundFeeRate",
            "docs": [
              "The fund fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u64"
          },
          {
            "name": "createPoolFee",
            "docs": [
              "Fee for create a new pool"
            ],
            "type": "u64"
          },
          {
            "name": "protocolOwner",
            "docs": [
              "Address of the protocol fee owner"
            ],
            "type": "pubkey"
          },
          {
            "name": "fundOwner",
            "docs": [
              "Address of the fund fee owner"
            ],
            "type": "pubkey"
          },
          {
            "name": "creatorFeeRate",
            "docs": [
              "The pool creator fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u64"
          },
          {
            "name": "padding",
            "docs": [
              "padding"
            ],
            "type": {
              "array": [
                "u64",
                15
              ]
            }
          }
        ]
      }
    },
    {
      "name": "closeTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "configAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "codeAccountData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referralAccount",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "initializeTokenConfigData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "targetEras",
            "type": "u32"
          },
          {
            "name": "epochesPerEra",
            "type": "u64"
          },
          {
            "name": "targetSecondsPerEpoch",
            "type": "u64"
          },
          {
            "name": "reduceRatio",
            "type": "f64"
          },
          {
            "name": "initialMintSize",
            "type": "u64"
          },
          {
            "name": "initialTargetMintSizePerEpoch",
            "type": "u64"
          },
          {
            "name": "feeRate",
            "type": "u64"
          },
          {
            "name": "liquidityTokensRatio",
            "type": "f64"
          },
          {
            "name": "startTimestamp",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "initializeTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "metadata",
            "type": {
              "defined": {
                "name": "tokenMetadata"
              }
            }
          },
          {
            "name": "initConfigData",
            "type": {
              "defined": {
                "name": "initializeTokenConfigData"
              }
            }
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "tokenId",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "configAccount",
            "type": "pubkey"
          },
          {
            "name": "metadataAccount",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "u64"
          },
          {
            "name": "tokenVault",
            "type": "pubkey"
          },
          {
            "name": "mintStateData",
            "type": {
              "defined": {
                "name": "tokenMintState"
              }
            }
          },
          {
            "name": "valueManager",
            "type": "pubkey"
          },
          {
            "name": "baseVault",
            "type": "pubkey"
          },
          {
            "name": "baseDecimals",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "launchRuleData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "startSlot",
            "type": "u64"
          },
          {
            "name": "slotsPerPeriod",
            "type": "u64"
          },
          {
            "name": "baseLaunchLimit",
            "type": "u64"
          },
          {
            "name": "increasementLaunchLimit",
            "type": "u64"
          },
          {
            "name": "maxPeriod",
            "type": "u64"
          },
          {
            "name": "lastPeriod",
            "type": "u64"
          },
          {
            "name": "currentLaunchesInPeriod",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "mintEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sender",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "configAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenVault",
            "type": "pubkey"
          },
          {
            "name": "referralAccount",
            "type": "pubkey"
          },
          {
            "name": "referrerMain",
            "type": "pubkey"
          },
          {
            "name": "referrerAta",
            "type": "pubkey"
          },
          {
            "name": "refundAccount",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "u64"
          },
          {
            "name": "mintStateData",
            "type": {
              "defined": {
                "name": "tokenMintState"
              }
            }
          },
          {
            "name": "mintFee",
            "type": "u64"
          },
          {
            "name": "referrerFee",
            "type": "u64"
          },
          {
            "name": "baseVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "observation",
      "docs": [
        "The element of observations in ObservationState"
      ],
      "serialization": "bytemuckunsafe",
      "repr": {
        "kind": "c",
        "packed": true
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "blockTimestamp",
            "docs": [
              "The block timestamp of the observation"
            ],
            "type": "u64"
          },
          {
            "name": "cumulativeToken0PriceX32",
            "docs": [
              "the cumulative of token0 price during the duration time, Q32.32, the remaining 64 bit for overflow"
            ],
            "type": "u128"
          },
          {
            "name": "cumulativeToken1PriceX32",
            "docs": [
              "the cumulative of token1 price during the duration time, Q32.32, the remaining 64 bit for overflow"
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "observationState",
      "serialization": "bytemuckunsafe",
      "repr": {
        "kind": "c",
        "packed": true
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialized",
            "docs": [
              "Whether the ObservationState is initialized"
            ],
            "type": "bool"
          },
          {
            "name": "observationIndex",
            "docs": [
              "the most-recently updated index of the observations array"
            ],
            "type": "u16"
          },
          {
            "name": "poolId",
            "type": "pubkey"
          },
          {
            "name": "observations",
            "docs": [
              "observation array"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "observation"
                  }
                },
                100
              ]
            }
          },
          {
            "name": "padding",
            "docs": [
              "padding for feature update"
            ],
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "poolState",
      "serialization": "bytemuckunsafe",
      "repr": {
        "kind": "c",
        "packed": true
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ammConfig",
            "docs": [
              "Which config the pool belongs"
            ],
            "type": "pubkey"
          },
          {
            "name": "poolCreator",
            "docs": [
              "pool creator"
            ],
            "type": "pubkey"
          },
          {
            "name": "token0Vault",
            "docs": [
              "Token A"
            ],
            "type": "pubkey"
          },
          {
            "name": "token1Vault",
            "docs": [
              "Token B"
            ],
            "type": "pubkey"
          },
          {
            "name": "lpMint",
            "docs": [
              "Pool tokens are issued when A or B tokens are deposited.",
              "Pool tokens can be withdrawn back to the original A or B token."
            ],
            "type": "pubkey"
          },
          {
            "name": "token0Mint",
            "docs": [
              "Mint information for token A"
            ],
            "type": "pubkey"
          },
          {
            "name": "token1Mint",
            "docs": [
              "Mint information for token B"
            ],
            "type": "pubkey"
          },
          {
            "name": "token0Program",
            "docs": [
              "token_0 program"
            ],
            "type": "pubkey"
          },
          {
            "name": "token1Program",
            "docs": [
              "token_1 program"
            ],
            "type": "pubkey"
          },
          {
            "name": "observationKey",
            "docs": [
              "observation account to store oracle data"
            ],
            "type": "pubkey"
          },
          {
            "name": "authBump",
            "type": "u8"
          },
          {
            "name": "status",
            "docs": [
              "Bitwise representation of the state of the pool",
              "bit0, 1: disable deposit(value is 1), 0: normal",
              "bit1, 1: disable withdraw(value is 2), 0: normal",
              "bit2, 1: disable swap(value is 4), 0: normal"
            ],
            "type": "u8"
          },
          {
            "name": "lpMintDecimals",
            "type": "u8"
          },
          {
            "name": "mint0Decimals",
            "docs": [
              "mint0 and mint1 decimals"
            ],
            "type": "u8"
          },
          {
            "name": "mint1Decimals",
            "type": "u8"
          },
          {
            "name": "lpSupply",
            "docs": [
              "True circulating supply without burns and lock ups"
            ],
            "type": "u64"
          },
          {
            "name": "protocolFeesToken0",
            "docs": [
              "The amounts of token_0 and token_1 that are owed to the liquidity provider."
            ],
            "type": "u64"
          },
          {
            "name": "protocolFeesToken1",
            "type": "u64"
          },
          {
            "name": "fundFeesToken0",
            "type": "u64"
          },
          {
            "name": "fundFeesToken1",
            "type": "u64"
          },
          {
            "name": "openTime",
            "docs": [
              "The timestamp allowed for swap in the pool."
            ],
            "type": "u64"
          },
          {
            "name": "recentEpoch",
            "docs": [
              "recent epoch"
            ],
            "type": "u64"
          },
          {
            "name": "creatorFeeOn",
            "docs": [
              "Creator fee collect mode",
              "0: both token_0 and token_1 can be used as trade fees. It depends on what the input token is when swapping",
              "1: only token_0 as trade fee",
              "2: only token_1 as trade fee"
            ],
            "type": "u8"
          },
          {
            "name": "enableCreatorFee",
            "type": "bool"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "creatorFeesToken0",
            "type": "u64"
          },
          {
            "name": "creatorFeesToken1",
            "type": "u64"
          },
          {
            "name": "padding",
            "docs": [
              "padding for future updates"
            ],
            "type": {
              "array": [
                "u64",
                28
              ]
            }
          }
        ]
      }
    },
    {
      "name": "referrerThrottleData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "windowStart",
            "type": "u64"
          },
          {
            "name": "activationCount",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "refundEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sender",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "refundAccount",
            "type": "pubkey"
          },
          {
            "name": "configAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenVault",
            "type": "pubkey"
          },
          {
            "name": "tokenAta",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "u64"
          },
          {
            "name": "supply",
            "type": "u64"
          },
          {
            "name": "totalTokens",
            "type": "u64"
          },
          {
            "name": "totalMintFee",
            "type": "u64"
          },
          {
            "name": "refundFee",
            "type": "u64"
          },
          {
            "name": "refundAmountIncludingFee",
            "type": "u64"
          },
          {
            "name": "burnAmountFromVault",
            "type": "u64"
          },
          {
            "name": "burnAmountFromUser",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setRefererCodeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "referralAccount",
            "type": "pubkey"
          },
          {
            "name": "referrerAta",
            "type": "pubkey"
          },
          {
            "name": "payer",
            "type": "pubkey"
          },
          {
            "name": "codeHash",
            "type": "pubkey"
          },
          {
            "name": "activeTimestamp",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "systemConfigData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "referralUsageMaxCount",
            "type": "u32"
          },
          {
            "name": "protocolFeeAccount",
            "type": "pubkey"
          },
          {
            "name": "refundFeeRate",
            "type": "f64"
          },
          {
            "name": "referrerResetIntervalSeconds",
            "type": "u64"
          },
          {
            "name": "updateMetadataFee",
            "type": "u64"
          },
          {
            "name": "customizedDeployFee",
            "type": "u64"
          },
          {
            "name": "initPoolBaseAmount",
            "type": "u64"
          },
          {
            "name": "graduateFeeRate",
            "type": "u64"
          },
          {
            "name": "raydiumCpmmCreateFee",
            "type": "u64"
          },
          {
            "name": "isPause",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "tokenConfigData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "targetEras",
            "type": "u32"
          },
          {
            "name": "mintStateData",
            "type": {
              "defined": {
                "name": "tokenMintState"
              }
            }
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "tokenId",
            "type": "u64"
          },
          {
            "name": "feeRate",
            "type": "u64"
          },
          {
            "name": "maxSupply",
            "type": "u64"
          },
          {
            "name": "epochesPerEra",
            "type": "u64"
          },
          {
            "name": "targetSecondsPerEpoch",
            "type": "u64"
          },
          {
            "name": "reduceRatio",
            "type": "f64"
          },
          {
            "name": "initialMintSize",
            "type": "u64"
          },
          {
            "name": "initialTargetMintSizePerEpoch",
            "type": "u64"
          },
          {
            "name": "liquidityTokensRatio",
            "type": "f64"
          },
          {
            "name": "tokenVault",
            "type": "pubkey"
          },
          {
            "name": "baseVault",
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "type": "pubkey"
          },
          {
            "name": "baseDecimals",
            "type": "u8"
          },
          {
            "name": "mintTokenVault",
            "type": "pubkey"
          },
          {
            "name": "startTimestamp",
            "type": "u64"
          },
          {
            "name": "isProcessing",
            "type": "bool"
          },
          {
            "name": "valueManager",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "tokenMetadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "tokenMintState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "supply",
            "type": "u64"
          },
          {
            "name": "currentEra",
            "type": "u32"
          },
          {
            "name": "currentEpoch",
            "type": "u64"
          },
          {
            "name": "elapsedSecondsEpoch",
            "type": "u64"
          },
          {
            "name": "startTimestampEpoch",
            "type": "u64"
          },
          {
            "name": "lastDifficultyCoefficientEpoch",
            "type": "f64"
          },
          {
            "name": "difficultyCoefficientEpoch",
            "type": "f64"
          },
          {
            "name": "mintSizeEpoch",
            "type": "u64"
          },
          {
            "name": "quantityMintedEpoch",
            "type": "u64"
          },
          {
            "name": "targetMintSizeEpoch",
            "type": "u64"
          },
          {
            "name": "totalMintFee",
            "type": "u64"
          },
          {
            "name": "totalReferrerFee",
            "type": "u64"
          },
          {
            "name": "totalTokens",
            "type": "u64"
          },
          {
            "name": "graduateEpoch",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "tokenReferralData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrerMain",
            "type": "pubkey"
          },
          {
            "name": "referrerAta",
            "type": "pubkey"
          },
          {
            "name": "usageCount",
            "type": "u32"
          },
          {
            "name": "codeHash",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "activeTimestamp",
            "type": "u64"
          },
          {
            "name": "isProcessing",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "tokenRefundData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "totalTokens",
            "type": "u64"
          },
          {
            "name": "totalMintFee",
            "type": "u64"
          },
          {
            "name": "totalReferrerFee",
            "type": "u64"
          },
          {
            "name": "isProcessing",
            "type": "bool"
          },
          {
            "name": "vaultTokens",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "updateTokenMetadataEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "metadata",
            "type": {
              "defined": {
                "name": "tokenMetadata"
              }
            }
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "configAccount",
            "type": "pubkey"
          },
          {
            "name": "metadataAccount",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
