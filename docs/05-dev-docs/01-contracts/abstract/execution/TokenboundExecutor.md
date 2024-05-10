<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/abstract/execution/TokenboundExecutor.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>


Enables basic ERC-6551 execution as well as batch, nested, and mult-account execution

## Functions
### constructor
```solidity
  function constructor() internal
```




### _msgSender
```solidity
  function _msgSender() internal returns (address sender)
```




### _msgData
```solidity
  function _msgData() internal returns (bytes)
```




### _contextSuffixLength
```solidity
  function _contextSuffixLength() internal returns (uint256)
```

ERC-2771 specifies the context as being a single address (20 bytes).



