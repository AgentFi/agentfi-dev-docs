<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/abstract/execution/SandboxExecutor.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>


Allows the sandbox contract for an account to execute low-level operations

## Functions
### _requireFromSandbox
```solidity
  function _requireFromSandbox() internal
```

Ensures that a given caller is the sandbox for this account


### extcall
```solidity
  function extcall() external returns (bytes result)
```

Allows the sandbox contract to execute low-level calls from this account


### extcreate
```solidity
  function extcreate() external returns (address)
```

Allows the sandbox contract to create contracts on behalf of this account


### extcreate2
```solidity
  function extcreate2() external returns (address)
```

Allows the sandbox contract to create deterministic contracts on behalf of this account


### extsload
```solidity
  function extsload() external returns (bytes32 value)
```

Allows arbitrary storage reads on this account from external contracts



