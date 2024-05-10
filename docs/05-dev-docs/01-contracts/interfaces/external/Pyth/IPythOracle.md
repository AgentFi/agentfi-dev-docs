<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Pyth/IPythOracle.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### getPrice
```solidity
  function getPrice(
    bytes32 id
  ) external returns (struct IPythOracle.Price price)
```
Returns the price and confidence interval.

Reverts if the price has not been updated within the last `getValidTimePeriod()` seconds.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `id` | bytes32 | The Pyth Price Feed ID of which to fetch the price and confidence interval. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `price` | struct IPythOracle.Price | - please read the documentation of PythStructs.Price to understand how to use this safely. |

