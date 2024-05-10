<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/accounts/IBlastooorGenesisAgentAccount.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An account type used by agents.

These accounts build on top of Tokenbound's AccountV3 with two key additions.

The first is role based access control. Different functions within and across TBAs require different access control lists. Many of these functions are limited to just the TBA owner or its root owner. Some implementations allow a permissioned user to assume owner permissions. Role based access control allows the owner to grant and revoke access to a subset of protected functions as they see fit.

Also comes with some features that integrate the accounts with the Blast ecosystem. The factory configures the account to automatically collect Blast yield and gas rewards on deployment. The TBA owner can claim these gas rewards with [`claimAllGas()`](#claimallgas) or [`claimMaxGas()`](#claimmaxgas). The rewards can also be quoted offchain with [`quoteClaimAllGas()`](#quoteclaimallgas) or [`quoteClaimMaxGas()`](#quoteclaimmaxgas).


## Functions
### getGuardian
```solidity
  function getGuardian() external returns (address guardian_)
```
Returns the AccountGuardian address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `guardian_` | address | The AccountGuardian address. |

### getAgentAccountImplementation
```solidity
  function getAgentAccountImplementation() external returns (address impl)
```
Returns the address of the agent's implementation contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `impl` | address | The implementation address. |

### hasRole
```solidity
  function hasRole(
    bytes32 role,
    address account
  ) external returns (bool hasRole_)
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

### setRoles
```solidity
  function setRoles(
    struct IBlastooorGenesisAgentAccount.SetRolesParam[] params
  ) external
```
Grants or revokes a set of roles.
Can only be called by a valid executor for this TBA.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IBlastooorGenesisAgentAccount.SetRolesParam[] | The list of roles to set. |

### blastConfigure
```solidity
  function blastConfigure() external
```
Configures the Blast ETH native yield, gas rewards, and Blast Points for this contract.



### claimAllGas
```solidity
  function claimAllGas() external returns (uint256 amountClaimed)
```
Claims all gas from the blast gas reward contract.
Can only be called by a valid executor or role owner for this TBA.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountClaimed` | uint256 | The amount of gas claimed. |

### claimMaxGas
```solidity
  function claimMaxGas() external returns (uint256 amountClaimed)
```
Claims max gas from the blast gas reward contract.
Can only be called by a valid executor or role owner for this TBA.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountClaimed` | uint256 | The amount of gas claimed. |

### quoteClaimAllGas
```solidity
  function quoteClaimAllGas() external returns (uint256 quoteAmount)
```
Quotes the amount of gas expected when claiming all gas.
This _should_ be a view function, except that it relies on the state change then reverting it.
This _should_ be called with an offchain staticcall.
This _should not_ be called onchain.
Can be called by anyone.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `quoteAmount` | uint256 | The amount of gas that can be claimed. |

### quoteClaimAllGasWithRevert
```solidity
  function quoteClaimAllGasWithRevert() external
```
Quotes the amount of gas expected when claiming all gas.
This function will revert, including the amount in the error.
This _should_ only be called via [`quoteClaimAllGas()`](#quoteclaimallgas).



### quoteClaimMaxGas
```solidity
  function quoteClaimMaxGas() external returns (uint256 quoteAmount)
```
Quotes the amount of gas expected when claiming max gas.
This _should_ be a view function, except that it relies on the state change then reverting it.
This _should_ be called with an offchain staticcall.
This _should not_ be called onchain.
Can be called by anyone.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `quoteAmount` | uint256 | The amount of gas that can be claimed. |

### quoteClaimMaxGasWithRevert
```solidity
  function quoteClaimMaxGasWithRevert() external
```
Quotes the amount of gas expected when claiming max gas.
This function will revert, including the amount in the error.
This _should_ only be called via [`quoteClaimMaxGas()`](#quoteclaimmaxgas).




## Events
### RoleAccessChanged
```solidity
  event RoleAccessChanged()
```
Emitted when a role is granted or revoked.


