<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/accounts/IBlastooorAgentAccountRingProtocolC.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An account type used by agents. Integrates with Ring Protocol.


## Functions
### executeRingProtocolStrategyC
```solidity
  function executeRingProtocolStrategyC(
    uint256 ethAmount
  ) external
```
Executes trades in Ring Protocol.
Will trade eth for usdc, usdt, dai, bolt, and rgb.
Can only be called by a valid executor or role owner for this TBA.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `ethAmount` | uint256 | The amount of eth to input. |


