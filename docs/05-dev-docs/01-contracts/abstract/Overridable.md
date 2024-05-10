<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/abstract/Overridable.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>


Allows the root owner of a token bound account to override the implementation of a given
function selector on the account. Overrides are keyed by the root owner address, so will be
disabled upon transfer of the token which owns this account tree.

## Functions
### setOverrides
```solidity
  function setOverrides(
    bytes4[] selectors,
    address[] implementations
  ) external
```

Sets the implementation address for a given array of function selectors. Can only be
called by the root owner of the account


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `selectors` | bytes4[] | Array of selectors to override |
| `implementations` | address[] | Array of implementation address corresponding to selectors |

### _handleOverride
```solidity
  function _handleOverride() internal
```

Calls into the implementation address using sandbox if override is set for the current
function selector. If an implementation is defined, this function will either revert or
return with the return value of the implementation


### _handleOverrideStatic
```solidity
  function _handleOverrideStatic() internal
```

Static calls into the implementation addressif override is set for the current function
selector. If an implementation is defined, this function will either revert or return with
the return value of the implementation


### _beforeSetOverrides
```solidity
  function _beforeSetOverrides() internal
```




### _rootTokenOwner
```solidity
  function _rootTokenOwner() internal returns (address)
```





## Events
### OverrideUpdated
```solidity
  event OverrideUpdated()
```



