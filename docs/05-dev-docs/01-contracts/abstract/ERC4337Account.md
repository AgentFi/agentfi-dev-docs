<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/abstract/ERC4337Account.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>


Implements ERC-4337 account support

## Functions
### constructor
```solidity
  function constructor() internal
```




### entryPoint
```solidity
  function entryPoint() public returns (contract IEntryPoint)
```

See {BaseERC4337Account-entryPoint}


### _validateSignature
```solidity
  function _validateSignature() internal returns (uint256)
```

See {BaseERC4337Account-_validateSignature}


### _getUserOpSignatureHash
```solidity
  function _getUserOpSignatureHash() internal returns (bytes32)
```

Returns the user operation hash that should be signed by the account owner


### _isValidSignature
```solidity
  function _isValidSignature() internal returns (bool)
```





