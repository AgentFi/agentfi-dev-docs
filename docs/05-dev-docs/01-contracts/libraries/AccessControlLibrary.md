<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/libraries/AccessControlLibrary.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A library that helps enforce access control.


## Functions
### accessControlLibraryStorage
```solidity
  function accessControlLibraryStorage() internal returns (struct AccessControlLibrary.AccessControlLibraryStorage acls)
```
Returns the `AccessControlLibraryStorage` struct.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `acls` | struct AccessControlLibrary.AccessControlLibraryStorage | The `AccessControlLibraryStorage` struct. |

### hasRole
```solidity
  function hasRole(
    bytes32 role,
    address account
  ) internal returns (bool hasRole_)
```
Returns true if `account` has `role`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `role` | bytes32 | The role hash. |
| `account` | address | The account to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `hasRole_` | bool | True if account has the role, false otherwise. |

### validateHasRole
```solidity
  function validateHasRole(
    bytes32 role,
    address account
  ) internal
```
Reverts if `account` does not have `role`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `role` | bytes32 | The role hash. |
| `account` | address | The account to query. |


