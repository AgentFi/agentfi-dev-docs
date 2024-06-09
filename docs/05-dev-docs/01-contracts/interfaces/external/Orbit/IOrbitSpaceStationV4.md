<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Orbit/IOrbitSpaceStationV4.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### checkMembership
```solidity
  function checkMembership(
    address account,
    address oToken
  ) external returns (bool)
```
Returns whether the given account is entered in the given asset


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | The address of the account to check |
| `oToken` | address | The oToken to check |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `True` | bool | if the account is in the asset, otherwise false. |

### enterMarkets
```solidity
  function enterMarkets(
    address[] oTokens
  ) external returns (uint256[])
```
Add assets to be included in account liquidity calculation


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `oTokens` | address[] | The list of addresses of the oToken markets to be enabled |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `Success` | uint256[] | indicator for whether each corresponding market was entered |

### getAccountLiquidity
```solidity
  function getAccountLiquidity() external returns (uint256, uint256, uint256)
```
Determine the current account liquidity wrt collateral requirements



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `possible` | uint256 | error code (semi-opaque),<br/>        account liquidity in excess of collateral requirements,<br/> account shortfall below collateral requirements) |

### oracle
```solidity
  function oracle() external returns (address)
```




### markets
```solidity
  function markets() external returns (bool, uint256, bool)
```




### claimOrb
```solidity
  function claimOrb(
    address holder
  ) external
```
Claim all the incentive tokens accrued by holder in all markets


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `holder` | address | The address to claim tokens for |


