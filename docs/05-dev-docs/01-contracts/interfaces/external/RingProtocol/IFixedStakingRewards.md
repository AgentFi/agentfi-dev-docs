<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/RingProtocol/IFixedStakingRewards.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### WETH
```solidity
  function WETH() external returns (address)
```




### fewFactory
```solidity
  function fewFactory() external returns (address)
```




### rewardsToken
```solidity
  function rewardsToken() external returns (address)
```




### rewardSetter
```solidity
  function rewardSetter() external returns (address)
```




### stakingInfoCount
```solidity
  function stakingInfoCount() external returns (uint256)
```




### rewardPerTokenPerSecond
```solidity
  function rewardPerTokenPerSecond() external returns (uint256)
```




### totalSupply
```solidity
  function totalSupply() external returns (uint256)
```




### periodFinish
```solidity
  function periodFinish() external returns (uint256)
```




### lastTimeRewardApplicable
```solidity
  function lastTimeRewardApplicable() external returns (uint256)
```




### lastUpdateTimeOf
```solidity
  function lastUpdateTimeOf() external returns (uint256)
```




### balanceOf
```solidity
  function balanceOf() external returns (uint256)
```




### rewardOf
```solidity
  function rewardOf() external returns (uint256)
```




### earned
```solidity
  function earned() external returns (uint256)
```




### stakeWithPermit
```solidity
  function stakeWithPermit() external
```




### stake
```solidity
  function stake() external
```




### stakeETH
```solidity
  function stakeETH() external
```




### withdraw
```solidity
  function withdraw() external
```




### withdrawETH
```solidity
  function withdrawETH() external
```




### getReward
```solidity
  function getReward() external
```




### exit
```solidity
  function exit() external
```




### updateRewardFor
```solidity
  function updateRewardFor() external
```




### deploy
```solidity
  function deploy() external returns (uint256)
```




### setRewardPerTokenPerSecond
```solidity
  function setRewardPerTokenPerSecond() external
```




### setPeriodFinish
```solidity
  function setPeriodFinish() external
```




### setRewardSetter
```solidity
  function setRewardSetter() external
```





## Events
### StakingCreated
```solidity
  event StakingCreated()
```



### Staked
```solidity
  event Staked()
```



### Withdrawn
```solidity
  event Withdrawn()
```



### RewardPaid
```solidity
  event RewardPaid()
```



### SetRewardPerTokenPerSecond
```solidity
  event SetRewardPerTokenPerSecond()
```



### SetPeriodFinish
```solidity
  event SetPeriodFinish()
```



### SetRewardSetter
```solidity
  event SetRewardSetter()
```



