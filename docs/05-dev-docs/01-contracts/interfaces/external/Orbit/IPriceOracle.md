<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Orbit/IPriceOracle.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### getUnderlyingPrice
```solidity
  function getUnderlyingPrice(
    address oToken
  ) external returns (uint256)
```
Get the underlying price of a cToken asset


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `oToken` | address | The cToken to get the underlying price of |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | uint256 | underlying asset price mantissa (scaled by 1e18).
 Zero means the price is unavailable. |

