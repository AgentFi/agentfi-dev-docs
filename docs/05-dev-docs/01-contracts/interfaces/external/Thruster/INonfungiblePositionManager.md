<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Thruster/INonfungiblePositionManager.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Wraps Thruster CLMM positions in a non-fungible token interface which allows for them to be transferred
and authorized.


## Functions
### totalSupply
```solidity
  function totalSupply() external returns (uint256)
```

Returns the total amount of tokens stored by the contract.


### tokenOfOwnerByIndex
```solidity
  function tokenOfOwnerByIndex() external returns (uint256 tokenId)
```

Returns a token ID owned by `owner` at a given `index` of its token list.
Use along with {balanceOf} to enumerate all of ``owner``'s tokens.


### tokenByIndex
```solidity
  function tokenByIndex() external returns (uint256)
```

Returns a token ID at a given `index` of all the tokens stored by the contract.
Use along with {totalSupply} to enumerate all tokens.


### balanceOf
```solidity
  function balanceOf() external returns (uint256 balance)
```

Returns the number of tokens in ``owner``'s account.


### ownerOf
```solidity
  function ownerOf() external returns (address owner)
```

Returns the owner of the `tokenId` token.

Requirements:

- `tokenId` must exist.


### positions
```solidity
  function positions(
    uint256 tokenId
  ) external returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)
```
Returns the position information associated with a given token ID.

Throws if the token ID is not valid.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `tokenId` | uint256 | The ID of the token that represents the position |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `nonce` | uint96 | The nonce for permits |
| `operator` | address | The address that is approved for spending |
| `token0` | address | The address of the token0 for a specific pool |
| `token1` | address | The address of the token1 for a specific pool |
| `fee` | uint24 | The fee associated with the pool |
| `tickLower` | int24 | The lower end of the tick range for the position |
| `tickUpper` | int24 | The higher end of the tick range for the position |
| `liquidity` | uint128 | The liquidity of the position |
| `feeGrowthInside0LastX128` | uint256 | The fee growth of token0 as of the last action on the individual position |
| `feeGrowthInside1LastX128` | uint256 | The fee growth of token1 as of the last action on the individual position |
| `tokensOwed0` | uint128 | The uncollected amount of token0 owed to the position as of the last computation |
| `tokensOwed1` | uint128 | The uncollected amount of token1 owed to the position as of the last computation |

### mint
```solidity
  function mint(
    struct INonfungiblePositionManager.MintParams params
  ) external returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)
```
Creates a new position wrapped in a NFT

Call this when the pool does exist and is initialized. Note that if the pool is created but not initialized
a method does not exist, i.e. the pool is assumed to be initialized.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct INonfungiblePositionManager.MintParams | The params necessary to mint a position, encoded as `MintParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `tokenId` | uint256 | The ID of the token that represents the minted position |
| `liquidity` | uint128 | The amount of liquidity for this position |
| `amount0` | uint256 | The amount of token0 |
| `amount1` | uint256 | The amount of token1 |

### increaseLiquidity
```solidity
  function increaseLiquidity(
    struct INonfungiblePositionManager.IncreaseLiquidityParams params
  ) external returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```
Increases the amount of liquidity in a position, with tokens paid by the `msg.sender`


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct INonfungiblePositionManager.IncreaseLiquidityParams | tokenId The ID of the token for which liquidity is being increased,
amount0Desired The desired amount of token0 to be spent,
amount1Desired The desired amount of token1 to be spent,
amount0Min The minimum amount of token0 to spend, which serves as a slippage check,
amount1Min The minimum amount of token1 to spend, which serves as a slippage check,
deadline The time by which the transaction must be included to effect the change |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `liquidity` | uint128 | The new liquidity amount as a result of the increase |
| `amount0` | uint256 | The amount of token0 to acheive resulting liquidity |
| `amount1` | uint256 | The amount of token1 to acheive resulting liquidity |

### decreaseLiquidity
```solidity
  function decreaseLiquidity() external returns (uint256 amount0, uint256 amount1)
```




### collect
```solidity
  function collect() external returns (uint256 amount0, uint256 amount1)
```




### burn
```solidity
  function burn() external
```




### factory
```solidity
  function factory() external returns (address)
```
The contract that deployed the pool, which must adhere to the IThrusterPoolFactory interface



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | address | contract address |

