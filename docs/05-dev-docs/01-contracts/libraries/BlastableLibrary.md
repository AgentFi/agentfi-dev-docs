<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/libraries/BlastableLibrary.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A library that helps contracts interact with Blast.


## Functions
### parseRevertReasonForAmount
```solidity
  function parseRevertReasonForAmount(
    bytes reason
  ) internal returns (uint256 amount)
```
Parses a revert reason that should contain the numeric quote.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `reason` | bytes | The error to parse. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The returned amount. |

