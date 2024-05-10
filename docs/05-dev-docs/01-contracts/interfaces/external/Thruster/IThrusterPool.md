<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Thruster/IThrusterPool.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A Thruster CLMM pool facilitates swapping and automated market making between any two assets that strictly conform
to the ERC20 specification

The pool interface is broken up into many smaller pieces

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
  function fee() external returns (uint24)
```
The pool's fee in hundredths of a bip, i.e. 1e-6



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | uint24 | fee |

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

### slot0
```solidity
  function slot0() external returns (uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked)
```
The 0th storage slot in the pool stores many values, and is exposed as a single method to save gas
when accessed externally.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `sqrtPriceX96` | uint160 | The current price of the pool as a sqrt(token1/token0) Q64.96 value
tick The current tick of the pool, i.e. according to the last tick transition that was run.
This value may not always be equal to SqrtTickMath.getTickAtSqrtRatio(sqrtPriceX96) if the price is on a tick
boundary.
observationIndex The index of the last oracle observation that was written,
observationCardinality The current maximum number of observations stored in the pool,
observationCardinalityNext The next maximum number of observations, to be updated when the observation.
feeProtocol The protocol fee for both tokens of the pool.
Encoded as two 4 bit values, where the protocol fee of token1 is shifted 4 bits and the protocol fee of token0
is the lower 4 bits. Used as the denominator of a fraction of the swap fee, e.g. 4 means 1/4th of the swap fee.
unlocked Whether the pool is currently locked to reentrancy |

