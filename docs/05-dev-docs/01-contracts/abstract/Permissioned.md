<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/abstract/Permissioned.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>


Allows the root owner of a token bound account to allow another account to execute
operations from this account. Permissions are keyed by the root owner address, so will be
disabled upon transfer of the token which owns this account tree.

## Functions
### setPermissions
```solidity
  function setPermissions(
    address[] callers,
    bool[] _permissions
  ) external
```

Grants or revokes execution permissions for a given array of callers on this account.
Can only be called by the root owner of the account


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `callers` | address[] | Array of callers to grant permissions to |
| `_permissions` | bool[] | Array of booleans, true if execution permissions should be granted,
false if permissions should be revoked |

### hasPermission
```solidity
  function hasPermission(
    address caller,
    address owner
  ) internal returns (bool)
```

Returns true if caller has permissions to act on behalf of owner


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `caller` | address | Address to query permissions for |
| `owner` | address | Root owner address for which to query permissions |

### _beforeSetPermissions
```solidity
  function _beforeSetPermissions() internal
```




### _rootTokenOwner
```solidity
  function _rootTokenOwner() internal returns (address)
```





## Events
### PermissionUpdated
```solidity
  event PermissionUpdated()
```



