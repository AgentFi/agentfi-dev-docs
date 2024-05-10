<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/utils/IMulticall.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Provides a function to batch together multiple calls in a single external call.


## Functions
### multicall
```solidity
  function multicall(
    bytes[] data
  ) external returns (bytes[] results)
```
Receives and executes a batch of function calls on this contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `data` | bytes[] | A list of function calls to execute. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `results` | bytes[] | The results of each function call. |

