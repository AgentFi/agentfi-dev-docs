<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/modules/ConcentratedLiquidityModuleC.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A module used in the Concentrated liquidity strategy.

Designed for use on Blast Mainnet only. Be careful of signature collisions


## Functions
### concentratedLiquidityModuleCStorage
```solidity
  function concentratedLiquidityModuleCStorage() internal returns (struct ConcentratedLiquidityModuleC.ConcentratedLiquidityModuleCStorage s)
```




### constructor
```solidity
  function constructor(
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_
  ) public
```
Constructs the ConcentratedLiquidityModuleC contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

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




### slot0
```solidity
  function slot0() public returns (uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked)
```




### tokenId
```solidity
  function tokenId() public returns (uint256 tokenId_)
```
TokenId of NFT position (if exists)



### position
```solidity
  function position() public returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)
```
Get the underlying pool position

reverts if no position exists


### moduleC_mint
```solidity
  function moduleC_mint(
    struct ConcentratedLiquidityModuleC.MintParams params
  ) public returns (uint256 tokenId_, uint128 liquidity, uint256 amount0, uint256 amount1)
```
Creates a new position wrapped in a NFT

Call this when the pool does exist and is initialized. Note that if the pool is created but not initialized
a method does not exist, i.e. the pool is assumed to be initialized.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct ConcentratedLiquidityModuleC.MintParams | The params necessary to mint a position, encoded as `MintParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `tokenId_` | uint256 | The ID of the token that represents the minted position |
| `liquidity` | uint128 | The amount of liquidity for this position |
| `amount0` | uint256 | The amount of token0 |
| `amount1` | uint256 | The amount of token1 |

### moduleC_increaseLiquidity
```solidity
  function moduleC_increaseLiquidity() public returns (uint128 liquidity, uint256 amount0, uint256 amount1)
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

### moduleC_decreaseLiquidity
```solidity
  function moduleC_decreaseLiquidity() public returns (uint256 amount0, uint256 amount1)
```




### moduleC_collect
```solidity
  function moduleC_collect() public returns (uint256 amount0, uint256 amount1)
```




### moduleC_burn
```solidity
  function moduleC_burn() public
```




### moduleC_exactInputSingle
```solidity
  function moduleC_exactInputSingle(
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

### moduleC_sendBalanceTo
```solidity
  function moduleC_sendBalanceTo() public
```
Sends token balance to a specified receiver.



### moduleC_mintWithBalance
```solidity
  function moduleC_mintWithBalance() public returns (uint256, uint128, uint256, uint256)
```
Mints new position with all assets in this contract



### moduleC_mintWithBalanceAndRefundTo
```solidity
  function moduleC_mintWithBalanceAndRefundTo() external returns (uint256 tokenId_, uint128 liquidity, uint256 amount0, uint256 amount1)
```
Mints new position with all assets in this contract



### moduleC_increaseLiquidityWithBalance
```solidity
  function moduleC_increaseLiquidityWithBalance() public returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```
Deposit all assets in contract to existing position (does not change range)



### moduleC_increaseLiquidityWithBalanceAndRefundTo
```solidity
  function moduleC_increaseLiquidityWithBalanceAndRefundTo() external returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```




### moduleC_collectToSelf
```solidity
  function moduleC_collectToSelf() public returns (uint256, uint256)
```
Collect tokens owned in position, keeping funds in the this contract



### moduleC_decreaseLiquidityWithSlippage
```solidity
  function moduleC_decreaseLiquidityWithSlippage() public returns (uint256, uint256)
```
Perform partial withdrawal, keeping funds in the this contract



### moduleC_partialWithdrawalToSelf
```solidity
  function moduleC_partialWithdrawalToSelf() public returns (uint256, uint256)
```




### moduleC_fullWithdrawToSelf
```solidity
  function moduleC_fullWithdrawToSelf() public returns (uint256 amount0, uint256 amount1)
```
Withdrawals principal and fee, and burns position, returning the funds to this contract



### moduleC_collectTo
```solidity
  function moduleC_collectTo() external
```
Collect tokens owned in position, sending funds to the receiver



### moduleC_partialWithdrawTo
```solidity
  function moduleC_partialWithdrawTo() external
```
Perform partial withdrawal, sending funds to the receiver



### moduleC_fullWithdrawTo
```solidity
  function moduleC_fullWithdrawTo() external
```
Sends funds to receiver after withdrawaling position



### moduleC_rebalance
```solidity
  function moduleC_rebalance() external
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



### _setApproval
```solidity
  function _setApproval() internal
```





