<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/RingProtocol/IUniversalRouter.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Uniswap's UniversalRouter rewritten for use in Ring Protocol.


## Functions
### execute
```solidity
  function execute(
    bytes commands,
    bytes[] inputs
  ) external
```
Executes encoded commands along with provided inputs.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `commands` | bytes | A set of concatenated commands, each 1 byte in length |
| `inputs` | bytes[] | An array of byte strings containing abi encoded inputs for each command |


