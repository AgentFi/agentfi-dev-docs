<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Algebra/IAlgebraPool.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### token0
```solidity
  function token0() external returns (address)
```
The first of the two tokens of the pool, sorted by address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | address | token contract address |

### token1
```solidity
  function token1() external returns (address)
```
The second of the two tokens of the pool, sorted by address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | address | token contract address |

### fee
```solidity
  function fee() external returns (uint16 currentFee)
```
The current pool fee value

In case dynamic fee is enabled in the pool, this method will call the plugin to get the current fee.
If the plugin implements complex fee logic, this method may return an incorrect value or revert.
In this case, see the plugin implementation and related documentation.
**important security note: caller should check reentrancy lock to prevent read-only reentrancy**


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `currentFee` | uint16 | The current pool fee value in hundredths of a bip, i.e. 1e-6 |

### tickSpacing
```solidity
  function tickSpacing() external returns (int24)
```
The pool tick spacing

Ticks can only be used at multiples of this value, minimum of 1 and always positive
e.g.: a tickSpacing of 3 means ticks can be initialized every 3rd tick, i.e., ..., -6, -3, 0, 3, 6, ...
This value is an int24 to avoid casting even though it is always positive.


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | int24 | tick spacing |

### safelyGetStateOfAMM
```solidity
  function safelyGetStateOfAMM() external returns (uint160 sqrtPrice, int24 tick, uint16 lastFee, uint8 pluginConfig, uint128 activeLiquidity, int24 nextTick, int24 previousTick)
```
Safely get most important state values of Algebra Integral AMM

Several values exposed as a single method to save gas when accessed externally.
**Important security note: this method checks reentrancy lock and should be preferred in most cases**.


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

### globalState
```solidity
  function globalState() external returns (uint160 price, int24 tick, uint16 lastFee, uint8 pluginConfig, uint16 communityFee, bool unlocked)
```
The globalState structure in the pool stores many values but requires only one slot
and is exposed as a single method to save gas when accessed externally.

**important security note: caller should check `unlocked` flag to prevent read-only reentrancy**


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `price` | uint160 | The current price of the pool as a sqrt(dToken1/dToken0) Q64.96 value |
| `tick` | int24 | The current tick of the pool, i.e. according to the last tick transition that was run
This value may not always be equal to SqrtTickMath.getTickAtSqrtRatio(price) if the price is on a tick boundary |
| `lastFee` | uint16 | The current (last known) pool fee value in hundredths of a bip, i.e. 1e-6 (so '100' is '0.01%'). May be obsolete if using dynamic fee plugin |
| `pluginConfig` | uint8 | The current plugin config as bitmap. Each bit is responsible for enabling/disabling the hooks, the last bit turns on/off dynamic fees logic |
| `communityFee` | uint16 | The community fee represented as a percent of all collected fee in thousandths, i.e. 1e-3 (so 100 is 10%) |
| `unlocked` | bool | Reentrancy lock flag, true if the pool currently is unlocked, otherwise - false |

## Events
### Swap
```solidity
  event Swap(
    address sender,
    address recipient,
    int256 amount0,
    int256 amount1,
    uint160 price,
    uint128 liquidity,
    int24 tick
  )
```
Emitted by the pool for any swaps between token0 and token1


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
| `sender` | address | The address that initiated the swap call, and that received the callback |
| `recipient` | address | The address that received the output of the swap |
| `amount0` | int256 | The delta of the token0 balance of the pool |
| `amount1` | int256 | The delta of the token1 balance of the pool |
| `price` | uint160 | The sqrt(price) of the pool after the swap, as a Q64.96 |
| `liquidity` | uint128 | The liquidity of the pool after the swap |
| `tick` | int24 | The log base 1.0001 of price of the pool after the swap |
