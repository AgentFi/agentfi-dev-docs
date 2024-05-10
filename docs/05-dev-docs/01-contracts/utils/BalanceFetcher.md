<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/utils/BalanceFetcher.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

The BalanceFetcher is a purely utility contract that helps offchain components efficiently fetch an account's balance of tokens.


## Functions
### constructor
```solidity
  function constructor(
    address owner_,
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_
  ) public
```
Constructs the BalanceFetcher contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `owner_` | address | The owner of the contract. |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

### fetchBalances
```solidity
  function fetchBalances(
    address account,
    address[] tokens
  ) public returns (uint256[] balances)
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
  ) public returns (struct IBalanceFetcher.Agent[] agents)
```
Given an account and a list of nft contracts and tokens, returns all agents under that account


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
  ) public returns (uint256 total, address address0, address address1, uint112 reserve0, uint112 reserve1)
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

### _fetchAgent
```solidity
  function _fetchAgent(
    address collection,
    address agentID,
    uint256 tokens
  ) internal returns (struct IBalanceFetcher.Agent agent)
```
Fetch information about a particular agent


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `collection` | address | Nft contract address |
| `agentID` | address | Id of the token on the token address |
| `tokens` | uint256 | List of tokens to get fetch balances for |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agent` | struct IBalanceFetcher.Agent | Agent information, including balances |

### _tryQuoteClaimAllGas
```solidity
  function _tryQuoteClaimAllGas() internal returns (uint256 quoteAmount)
```
Quotes the amount of gas expected when claiming all gas.
Can be called by anyone.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `quoteAmount` | uint256 | The amount of gas that can be claimed. |

### _tryQuoteClaimMaxGas
```solidity
  function _tryQuoteClaimMaxGas() internal returns (uint256 quoteAmount)
```
Quotes the amount of gas expected when claiming max gas.
Can be called by anyone.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `quoteAmount` | uint256 | The amount of gas that can be claimed. |

