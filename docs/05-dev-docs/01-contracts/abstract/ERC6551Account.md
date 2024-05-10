<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/abstract/ERC6551Account.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>


Implements the ERC-6551 Account interface

## Functions
### receive
```solidity
  function receive() external
```




### isValidSigner
```solidity
  function isValidSigner() external returns (bytes4 magicValue)
```

See: {IERC6551Account-isValidSigner}


### token
```solidity
  function token() public returns (uint256 chainId, address tokenContract, uint256 tokenId)
```

See: {IERC6551Account-token}


### state
```solidity
  function state() public returns (uint256)
```

See: {IERC6551Account-state}


### supportsInterface
```solidity
  function supportsInterface() public returns (bool)
```




### _isValidSigner
```solidity
  function _isValidSigner() internal returns (bool)
```

Returns true if a given signer is authorized to use this account



