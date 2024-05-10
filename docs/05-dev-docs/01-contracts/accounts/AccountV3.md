<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/accounts/AccountV3.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### constructor
```solidity
  function constructor(
    address entryPoint_,
    address multicallForwarder,
    address erc6551Registry,
    address _guardian
  ) public
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `entryPoint_` | address | The ERC-4337 EntryPoint address |
| `multicallForwarder` | address | The MulticallForwarder address |
| `erc6551Registry` | address | The ERC-6551 Registry address |
| `_guardian` | address | The AccountGuardian address |

### receive
```solidity
  function receive() external
```
Called whenever this account received Ether


Can be overriden via Overridable


### fallback
```solidity
  function fallback() external
```
Called whenever the calldata function selector does not match a defined function


Can be overriden via Overridable


### owner
```solidity
  function owner() public returns (address)
```
Returns the owner of the token this account is bound to (if available)


Returns zero address if token is on a foreign chain or token contract does not exist



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `address` | address | The address which owns the token this account is bound to |

### supportsInterface
```solidity
  function supportsInterface(
    bytes4 interfaceId
  ) public returns (bool)
```
Returns whether a given ERC165 interface ID is supported


Can be overriden via Overridable except for base interfaces.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `interfaceId` | bytes4 | The interface ID to query for |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `bool` | bool | True if the interface is supported, false otherwise |

### onERC721Received
```solidity
  function onERC721Received() public returns (bytes4)
```

called whenever an ERC-721 token is received. Can be overriden via Overridable. Reverts
if token being received is the token the account is bound to.


### onERC1155Received
```solidity
  function onERC1155Received() public returns (bytes4)
```

called whenever an ERC-1155 token is received. Can be overriden via Overridable.


### onERC1155BatchReceived
```solidity
  function onERC1155BatchReceived() public returns (bytes4)
```

called whenever a batch of ERC-1155 tokens are received. Can be overriden via Overridable.


### _isValidSigner
```solidity
  function _isValidSigner(
    address signer
  ) internal returns (bool)
```
Returns whether a given account is authorized to sign on behalf of this account



#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `signer` | address | The address to query authorization for |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `True` | bool | if the signer is valid, false otherwise |

### _isValidSignature
```solidity
  function _isValidSignature(
    bytes32 hash,
    bytes signature
  ) internal returns (bool)
```
Determines if a given hash and signature are valid for this account


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `hash` | bytes32 | Hash of signed data |
| `signature` | bytes | ECDSA signature or encoded contract signature (v=0) |

### _isValidExecutor
```solidity
  function _isValidExecutor(
    address executor
  ) internal returns (bool)
```
Returns whether a given account is authorized to execute transactions on behalf of
this account



#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `executor` | address | The address to query authorization for |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `True` | bool | if the executor is authorized, false otherwise |

### _updateState
```solidity
  function _updateState() internal
```

Updates account state based on previous state and msg.data


### _beforeExecute
```solidity
  function _beforeExecute() internal
```

Called before executing an operation. Reverts if account is locked. Ensures state is
updated prior to execution.


### _beforeLock
```solidity
  function _beforeLock() internal
```

Called before locking the account. Reverts if account is locked. Updates account state.


### _beforeSetOverrides
```solidity
  function _beforeSetOverrides() internal
```

Called before setting overrides on the account. Reverts if account is locked. Updates
account state.


### _beforeSetPermissions
```solidity
  function _beforeSetPermissions() internal
```

Called before setting permissions on the account. Reverts if account is locked. Updates
account state.


### _rootTokenOwner
```solidity
  function _rootTokenOwner() internal returns (address)
```

Returns the root owner of an account. If account is not owned by a TBA, returns the
owner of the NFT bound to this account. If account is owned by a TBA, iterates up token
ownership tree and returns root owner.

*Security Warning*: the return value of this function can only be trusted if it is also the
address of the sender (as the code of the NFT contract cannot be trusted). This function
should therefore only be used for authorization and never authentication.


### _rootTokenOwner
```solidity
  function _rootTokenOwner() internal returns (address)
```

Returns the root owner of an account given a known account owner address (saves an
additional external call).


### _tokenOwner
```solidity
  function _tokenOwner() internal returns (address)
```

Returns the owner of the token which this account is bound to. Returns the zero address
if token does not exist on the current chain or if the token contract does not exist



