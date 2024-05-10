<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/abstract/Lockable.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>


Allows the root owner of a token bound account to lock access to an account until a
certain timestamp

## Functions
### lock
```solidity
  function lock(
    uint256 _lockedUntil
  ) external
```

Locks the account until a certain timestamp


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_lockedUntil` | uint256 | The time at which this account will no longer be locked |

### isLocked
```solidity
  function isLocked() public returns (bool)
```

Returns the current lock status of the account as a boolean


### _verifyIsUnlocked
```solidity
  function _verifyIsUnlocked() internal
```




### _rootTokenOwner
```solidity
  function _rootTokenOwner() internal returns (address)
```




### _beforeLock
```solidity
  function _beforeLock() internal
```





## Events
### LockUpdated
```solidity
  event LockUpdated()
```



