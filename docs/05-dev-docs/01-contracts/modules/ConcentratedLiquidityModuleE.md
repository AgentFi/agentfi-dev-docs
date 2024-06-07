<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/modules/ConcentratedLiquidityModuleE.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A module used in the Concentrated liquidity strategy. This version integrates with Alebgra



## Functions
### concentratedLiquidityModuleEStorage
```solidity
  function concentratedLiquidityModuleEStorage() internal returns (struct ConcentratedLiquidityModuleE.ConcentratedLiquidityModuleEStorage s)
```




### constructor
```solidity
  function constructor(
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_,
    address weth_
  ) public
```
Constructs the ConcentratedLiquidityModuleE contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |
| `weth_` | address | The address of wrapped ether. |

### moduleName
```solidity
  function moduleName() external returns (string name_)
```




### strategyType
```solidity
  function strategyType() external returns (string type_)
```




### manager
```solidity
  function manager() public returns (address manager_)
```
Address for the NonfungiblePositionManager



### pool
```solidity
  function pool() public returns (address pool_)
```




### safelyGetStateOfAMM
```solidity
  function safelyGetStateOfAMM() external returns (uint160 sqrtPrice, int24 tick, uint16 lastFee, uint8 pluginConfig, uint128 activeLiquidity, int24 nextTick, int24 previousTick)
```
Safely get most important state values of Algebra Integral AMM



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `sqrtPrice` | uint160 | The current price of the pool as a sqrt(dToken1/dToken0) Q64.96 value |
| `tick` | int24 | The current global tick of the pool. May not always be equal to SqrtTickMath.getTickAtSqrtRatio(price) if the price is on a tick boundary |
| `lastFee` | uint16 | The current (last known) pool fee value in hundredths of a bip, i.e. 1e-6 (so '100' is '0.01%'). May be obsolete if using dynamic fee plugin |
| `pluginConfig` | uint8 | The current plugin config as bitmap. Each bit is responsible for enabling/disabling the hooks, the last bit turns on/off dynamic fees logic |
| `activeLiquidity` | uint128 |  The currently in-range liquidity available to the pool |
| `nextTick` | int24 | The next initialized tick after current global tick |
| `previousTick` | int24 | The previous initialized tick before (or at) current global tick |

### tokenId
```solidity
  function tokenId() public returns (uint256 tokenId_)
```
TokenId of NFT position (if exists)



### tickSpacing
```solidity
  function tickSpacing() external returns (int24 spacing)
```
The pool tick spacing



### position
```solidity
  function position() public returns (uint96 nonce, address operator, address token0, address token1, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)
```
Get the underlying pool position

reverts if no position exists


### moduleE_wrap
```solidity
  function moduleE_wrap() public
```




### moduleE_unwrap
```solidity
  function moduleE_unwrap() public
```




### moduleE_mint
```solidity
  function moduleE_mint(
    struct IConcentratedLiquidityModuleE.MintParams params
  ) public returns (uint256 tokenId_, uint128 liquidity, uint256 amount0, uint256 amount1)
```
Creates a new position wrapped in a NFT

Call this when the pool does exist and is initialized. Note that if the pool is created but not initialized
a method does not exist, i.e. the pool is assumed to be initialized.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IConcentratedLiquidityModuleE.MintParams | The params necessary to mint a position, encoded as `MintParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `tokenId_` | uint256 | The ID of the token that represents the minted position |
| `liquidity` | uint128 | The amount of liquidity for this position |
| `amount0` | uint256 | The amount of token0 |
| `amount1` | uint256 | The amount of token1 |

### moduleE_increaseLiquidity
```solidity
  function moduleE_increaseLiquidity() public returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```
Increases the amount of liquidity in a position, with tokens paid by the `msg.sender`
amount0Desired The desired amount of token0 to be spent,
amount1Desired The desired amount of token1 to be spent,
amount0Min The minimum amount of token0 to spend, which serves as a slippage check,
amount1Min The minimum amount of token1 to spend, which serves as a slippage check,
deadline The time by which the transaction must be included to effect the change



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `liquidity` | uint128 | The new liquidity amount as a result of the increase |
| `amount0` | uint256 | The amount of token0 to acheive resulting liquidity |
| `amount1` | uint256 | The amount of token1 to acheive resulting liquidity |

### moduleE_decreaseLiquidity
```solidity
  function moduleE_decreaseLiquidity() public returns (uint256 amount0, uint256 amount1)
```




### moduleE_collect
```solidity
  function moduleE_collect() public returns (uint256 amount0, uint256 amount1)
```




### moduleE_burn
```solidity
  function moduleE_burn() public
```




### moduleE_exactInputSingle
```solidity
  function moduleE_exactInputSingle(
    address params
  ) public returns (uint256 amountOut)
```
Swaps `amountIn` of one token for as much as possible of another token


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | address | The parameters necessary for the swap, encoded as `ExactInputSingleParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountOut` | uint256 | The amount of the received token |

### moduleE_sendBalanceTo
```solidity
  function moduleE_sendBalanceTo() public
```
Sends token balance to a specified receiver.



### moduleE_mintWithBalance
```solidity
  function moduleE_mintWithBalance() public returns (uint256, uint128, uint256, uint256)
```
Mints new position with all assets in this contract



### moduleE_mintWithBalanceAndRefundTo
```solidity
  function moduleE_mintWithBalanceAndRefundTo() external returns (uint256 tokenId_, uint128 liquidity, uint256 amount0, uint256 amount1)
```
Mints new position with all assets in this contract



### moduleE_increaseLiquidityWithBalance
```solidity
  function moduleE_increaseLiquidityWithBalance() public returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```
Deposit all assets in contract to existing position (does not change range)



### moduleE_increaseLiquidityWithBalanceAndRefundTo
```solidity
  function moduleE_increaseLiquidityWithBalanceAndRefundTo() external returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```




### moduleE_collectToSelf
```solidity
  function moduleE_collectToSelf() public returns (uint256, uint256)
```
Collect tokens owned in position, keeping funds in the this contract



### moduleE_decreaseLiquidityWithSlippage
```solidity
  function moduleE_decreaseLiquidityWithSlippage() public returns (uint256, uint256)
```
Perform partial withdrawal, keeping funds in the this contract



### moduleE_partialWithdrawalToSelf
```solidity
  function moduleE_partialWithdrawalToSelf() public returns (uint256, uint256)
```




### moduleE_fullWithdrawToSelf
```solidity
  function moduleE_fullWithdrawToSelf() public returns (uint256 amount0, uint256 amount1)
```
Withdrawals principal and fee, and burns position, returning the funds to this contract



### moduleE_collectTo
```solidity
  function moduleE_collectTo() external
```
Collect tokens owned in position, sending funds to the receiver



### moduleE_partialWithdrawTo
```solidity
  function moduleE_partialWithdrawTo() external
```
Perform partial withdrawal, sending funds to the receiver



### moduleE_fullWithdrawTo
```solidity
  function moduleE_fullWithdrawTo() external
```
Sends funds to receiver after withdrawaling position



### moduleE_rebalance
```solidity
  function moduleE_rebalance() external
```
Withdrawals, swaps and creates a new position at the new range



### _getSwapForNewRange
```solidity
  function _getSwapForNewRange() internal returns (address, address, uint256)
```
Rebalances tokens in contract to optimal ratio for depositing into position

Not exact as it does not consider price impact of the swap


### _performSwap
```solidity
  function _performSwap() internal
```




### _getMinAmountsForIncrease
```solidity
  function _getMinAmountsForIncrease() internal returns (uint256 amount0Min, uint256 amount1Min)
```




### _balance
```solidity
  function _balance() internal returns (uint256 amount0, uint256 amount1)
```
Get the balane in the two underlying tokens



### _checkApproval
```solidity
  function _checkApproval(
    address token,
    address recipient,
    uint256 minAmount
  ) internal
```
Checks the approval of an ERC20 token from this contract to another address.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token` | address | The token to check allowance. |
| `recipient` | address | The address to give allowance to. |
| `minAmount` | uint256 | The minimum amount of the allowance. |


