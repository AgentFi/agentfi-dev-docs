<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/abstract/execution/BatchExecutor.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>


Allows multiple operations to be executed from this account in a single transaction

## Functions
### executeBatch
```solidity
  function executeBatch(
    struct BatchExecutor.Operation[] operations
  ) external returns (bytes[])
```
Executes a batch of operations if the caller is authorized


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `operations` | struct BatchExecutor.Operation[] | Operations to execute |


