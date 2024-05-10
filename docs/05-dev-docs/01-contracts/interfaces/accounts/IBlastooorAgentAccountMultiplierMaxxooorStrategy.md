<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/accounts/IBlastooorAgentAccountMultiplierMaxxooorStrategy.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An account type used by Multiplier Maxxooor strategy agents.


## Functions
### executeByDispatcher
```solidity
  function executeByDispatcher() external returns (bytes result)
```
Executes an external call from this account.
Can only be called by an authorized executor or dispatcher.



### executePayableByDispatcher
```solidity
  function executePayableByDispatcher() external returns (bytes result)
```
Executes an external call from this account.
Can only be called by an authorized executor or dispatcher.



### executeBatchByDispatcher
```solidity
  function executeBatchByDispatcher() external returns (bytes[] results)
```
Executes a batch of external calls from this account.
Can only be called by an authorized executor or dispatcher.



### executePayableBatchByDispatcher
```solidity
  function executePayableBatchByDispatcher() external returns (bytes[] results)
```
Executes a batch of external calls from this account.
Can only be called by an authorized executor or dispatcher.




