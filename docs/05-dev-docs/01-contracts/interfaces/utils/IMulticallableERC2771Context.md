<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/utils/IMulticallableERC2771Context.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An extension to ERC2771Context that also allows for self `multicall()`.

Separately these two standards are safe. The combination of the two can cause an address spoofing vulnerability if not implemented properly.

If your contract has the two (extends both Multicall and ERC2771Context) then inherit this contract instead.


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

