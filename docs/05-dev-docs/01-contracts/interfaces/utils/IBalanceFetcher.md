<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/utils/IBalanceFetcher.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

The BalanceFetcher is a purely utility contract that helps offchain components efficiently fetch an account's balance of tokens.


## Functions
### fetchBalances
```solidity
  function fetchBalances(
    address account,
    address[] tokens
  ) external returns (uint256[] balances)
```
Given an account and a list of tokens, returns that account's balance of each token.
Supports ERC20s and the gas token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | The account to query. |
| `tokens` | address[] | The list of tokens to query. |

### fetchAgents
```solidity
  function fetchAgents(
    address account,
    address[] collections,
    address[] tokens
  ) external returns (struct IBalanceFetcher.Agent[] agents)
```
Given an account and a list of nft contracts and tokens, returns all agents under that account.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | The account to query. |
| `collections` | address[] | The list of nfts tokens to query. |
| `tokens` | address[] | The list of erc20 tokens to query. |

### fetchBlastableGasQuotes
```solidity
  function fetchBlastableGasQuotes(
    address[] accounts
  ) external returns (struct IBalanceFetcher.GasQuote[] quotes)
```
Given a list of `Blastable` contracts, returns the gas quote for all.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `accounts` | address[] | The list of accounts to quote. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `quotes` | struct IBalanceFetcher.GasQuote[] | The list of quotes. |

### fetchPoolInfoV2
```solidity
  function fetchPoolInfoV2(
    address poolAddress
  ) external returns (uint256 total, address address0, address address1, uint112 reserve0, uint112 reserve1)
```
Fetch key information for a uniswap v2 style pool


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `poolAddress` | address | The address of the pool |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `total` | uint256 | Total supply of the pool |
| `address0` | address | Token 0 address |
| `address1` | address | Token 1 address |
| `reserve0` | uint112 | Token 0 reserve |
| `reserve1` | uint112 | Token 1 reserve |

