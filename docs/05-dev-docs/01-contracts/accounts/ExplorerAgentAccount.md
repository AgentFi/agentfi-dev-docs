<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/accounts/ExplorerAgentAccount.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An account type used by agents. Built on top of Tokenbound AccountV3.

Different functions within and across TBAs require different access control lists. Many of these functions are limited to just the TBA owner or its root owner. Some implementations allow a permissioned user to assume owner permissions. Role based access control allows the owner to grant and revoke access to a subset of protected functions as they see fit.

Also comes with some features that integrate the accounts with the Blast ecosystem. The factory configures the account to automatically collect Blast yield and gas rewards on deployment. The TBA owner can claim these gas rewards with [`claimAllGas()`](#claimallgas) or [`claimMaxGas()`](#claimmaxgas). The rewards can also be quoted offchain with [`quoteClaimAllGas()`](#quoteclaimallgas) or [`quoteClaimMaxGas()`](#quoteclaimmaxgas).


## Functions
### constructor
```solidity
  function constructor(
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_,
    address entryPoint_,
    address multicallForwarder,
    address erc6551Registry,
    address _guardian
  ) public
```
Constructs the ExplorerAgentAccount contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |
| `entryPoint_` | address | The ERC-4337 EntryPoint address. |
| `multicallForwarder` | address | The MulticallForwarder address. |
| `erc6551Registry` | address | The ERC-6551 Registry address. |
| `_guardian` | address | The AccountGuardian address. |

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
    struct IExplorerAgentAccount.SetRolesParam[] params
  ) external
```
Grants or revokes a set of roles.
Can only be called by a valid executor for this TBA.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IExplorerAgentAccount.SetRolesParam[] | The list of roles to set. |

### _verifySenderIsValidExecutorOrHasRole
```solidity
  function _verifySenderIsValidExecutorOrHasRole(
    bytes32 role
  ) internal
```
Reverts if `_msgSender()` is not a valid executor and does not have have `role`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `role` | bytes32 | The role that the sender should have. |

### executeByStrategyManager
```solidity
  function executeByStrategyManager() external returns (bytes result)
```
Executes an external call from this account.
Can only be called by an authorized executor or strategy manager.



### executePayableByStrategyManager
```solidity
  function executePayableByStrategyManager() external returns (bytes result)
```
Executes an external call from this account.
Can only be called by an authorized executor or strategy manager.



### executeBatchByStrategyManager
```solidity
  function executeBatchByStrategyManager() external returns (bytes[] results)
```
Executes a batch of external calls from this account.
Can only be called by an authorized executor or strategy manager.



### executePayableBatchByStrategyManager
```solidity
  function executePayableBatchByStrategyManager() external returns (bytes[] results)
```
Executes a batch of external calls from this account.
Can only be called by an authorized executor or strategy manager.



### setOverrides
```solidity
  function setOverrides(
    struct IExplorerAgentAccount.SetOverridesParam[] params
  ) external
```
Sets the implementation address for a given array of function selectors.
Can only be called by an authorized executor or strategy manager.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IExplorerAgentAccount.SetOverridesParam[] | The overrides to add. |

### _strategyManagerPrecheck
```solidity
  function _strategyManagerPrecheck() internal
```
Precheck for all execute by strategy manager calls.



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



### _handleOverride
```solidity
  function _handleOverride() internal
```
Delegatecalls into the implementation address using sandbox if override is set for the current
function selector. If an implementation is defined, this function will either revert or
return with the return value of the implementation.



### _handleOverrideStatic
```solidity
  function _handleOverrideStatic() internal
```
Static calls into the implementation address if override is set for the current function
selector. If an implementation is defined, this function will either revert or return with
the return value of the implementation.



### receive
```solidity
  function receive() external
```
Allows this contract to receive the gas token.



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

## Events
### OverrideUpdated
```solidity
  event OverrideUpdated()
```



