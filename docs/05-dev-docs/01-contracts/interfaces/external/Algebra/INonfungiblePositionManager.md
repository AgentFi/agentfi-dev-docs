<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Algebra/INonfungiblePositionManager.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Wraps Algebra positions in a non-fungible token interface which allows for them to be transferred
and authorized.

Credit to Uniswap Labs under GPL-2.0-or-later license:
https://github.com/Uniswap/v3-periphery

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
  ) external returns (uint88 nonce, address operator, address token0, address token1, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)
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
| `nonce` | uint88 | The nonce for permits |
| `operator` | address | The address that is approved for spending |
| `token0` | address | The address of the token0 for a specific pool |
| `token1` | address | The address of the token1 for a specific pool |
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
If native token is used as input, this function should be accompanied by a `refundNativeToken` in multicall to avoid potential loss of native tokens

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct INonfungiblePositionManager.MintParams | The params necessary to mint a position, encoded as `MintParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `tokenId` | uint256 | The ID of the token that represents the minted position |
| `liquidity` | uint128 | The liquidity delta amount as a result of the increase |
| `amount0` | uint256 | The amount of token0 |
| `amount1` | uint256 | The amount of token1 |

### increaseLiquidity
```solidity
  function increaseLiquidity(
    struct INonfungiblePositionManager.IncreaseLiquidityParams params
  ) external returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```
Increases the amount of liquidity in a position, with tokens paid by the `msg.sender`

If native token is used as input, this function should be accompanied by a `refundNativeToken` in multicall to avoid potential loss of native tokens

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
| `liquidity` | uint128 | The liquidity delta amount as a result of the increase |
| `amount0` | uint256 | The amount of token0 to achieve resulting liquidity |
| `amount1` | uint256 | The amount of token1 to achieve resulting liquidity |

### decreaseLiquidity
```solidity
  function decreaseLiquidity(
    struct INonfungiblePositionManager.DecreaseLiquidityParams params
  ) external returns (uint256 amount0, uint256 amount1)
```
Decreases the amount of liquidity in a position and accounts it to the position


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct INonfungiblePositionManager.DecreaseLiquidityParams | tokenId The ID of the token for which liquidity is being decreased,
amount The amount by which liquidity will be decreased,
amount0Min The minimum amount of token0 that should be accounted for the burned liquidity,
amount1Min The minimum amount of token1 that should be accounted for the burned liquidity,
deadline The time by which the transaction must be included to effect the change |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount0` | uint256 | The amount of token0 accounted to the position's tokens owed |
| `amount1` | uint256 | The amount of token1 accounted to the position's tokens owed |

### collect
```solidity
  function collect(
    struct INonfungiblePositionManager.CollectParams params
  ) external returns (uint256 amount0, uint256 amount1)
```
Collects up to a maximum amount of fees owed to a specific position to the recipient


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct INonfungiblePositionManager.CollectParams | tokenId The ID of the NFT for which tokens are being collected,
recipient The account that should receive the tokens,
amount0Max The maximum amount of token0 to collect,
amount1Max The maximum amount of token1 to collect |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount0` | uint256 | The amount of fees collected in token0 |
| `amount1` | uint256 | The amount of fees collected in token1 |

### burn
```solidity
  function burn(
    uint256 tokenId
  ) external
```
Burns a token ID, which deletes it from the NFT contract. The token must have 0 liquidity and all tokens
must be collected first.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `tokenId` | uint256 | The ID of the token that is being burned |


## Events
### IncreaseLiquidity
```solidity
  event IncreaseLiquidity(
    uint256 tokenId,
    uint128 liquidityDesired,
    uint128 actualLiquidity,
    uint256 amount0,
    uint256 amount1
  )
```
Emitted when liquidity is increased for a position NFT

Also emitted when a token is minted

#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
| `tokenId` | uint256 | The ID of the token for which liquidity was increased |
| `liquidityDesired` | uint128 | The amount by which liquidity for the NFT position was increased |
| `actualLiquidity` | uint128 | the actual liquidity that was added into a pool. Could differ from
_liquidity_ when using FeeOnTransfer tokens |
| `amount0` | uint256 | The amount of token0 that was paid for the increase in liquidity |
| `amount1` | uint256 | The amount of token1 that was paid for the increase in liquidity |

### DecreaseLiquidity
```solidity
  event DecreaseLiquidity(
    uint256 tokenId,
    uint128 liquidity,
    uint256 amount0,
    uint256 amount1
  )
```
Emitted when liquidity is decreased for a position NFT


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
| `tokenId` | uint256 | The ID of the token for which liquidity was decreased |
| `liquidity` | uint128 | The amount by which liquidity for the NFT position was decreased |
| `amount0` | uint256 | The amount of token0 that was accounted for the decrease in liquidity |
| `amount1` | uint256 | The amount of token1 that was accounted for the decrease in liquidity |

### Collect
```solidity
  event Collect(
    uint256 tokenId,
    address recipient,
    uint256 amount0,
    uint256 amount1
  )
```
Emitted when tokens are collected for a position NFT

The amounts reported may not be exactly equivalent to the amounts transferred, due to rounding behavior

#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
| `tokenId` | uint256 | The ID of the token for which underlying tokens were collected |
| `recipient` | address | The address of the account that received the collected tokens |
| `amount0` | uint256 | The amount of token0 owed to the position that was collected |
| `amount1` | uint256 | The amount of token1 owed to the position that was collected |
