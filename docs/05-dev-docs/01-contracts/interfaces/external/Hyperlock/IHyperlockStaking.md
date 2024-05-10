<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Hyperlock/IHyperlockStaking.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### forceExpireLocks
```solidity
  function forceExpireLocks() external returns (bool forceExpire)
```

To force all locks to expire and enable withdrawals


### locks
```solidity
  function locks() external returns (uint256 locktime)
```

user => key => lock time


### isProtectedToken
```solidity
  function isProtectedToken() external returns (bool isProtected)
```

lpToken => isProtected


### staked
```solidity
  function staked() external returns (uint256 amount)
```

user => lptoken => amount


### stake
```solidity
  function stake() external
```




### unstake
```solidity
  function unstake() external
```





## Events
### SetForceExpireLocks
```solidity
  event SetForceExpireLocks()
```



### LockedERC20
```solidity
  event LockedERC20()
```



### Stake
```solidity
  event Stake()
```



### Unstake
```solidity
  event Unstake()
```



