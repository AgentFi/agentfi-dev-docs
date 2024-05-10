<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/erc6551/IERC6551Registry.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

The registry is a singleton contract that serves as the entry point for all token bound account address queries.


## Functions
### createAccount
```solidity
  function createAccount(
    address implementation,
    bytes32 salt,
    uint256 chainId,
    address tokenContract,
    uint256 tokenId
  ) external returns (address account_)
```
Creates a token bound account for a non-fungible token.

If account has already been created, returns the account address without calling create2.

Emits ERC6551AccountCreated event.



#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `implementation` | address | The address of the implementation contract. |
| `salt` | bytes32 | Arbitrary value to modify resulting address. |
| `chainId` | uint256 | The id of the chain that the tokenContract is deployed on. |
| `tokenContract` | address | The address of the nft contract. |
| `tokenId` | uint256 | The id of the nft. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `account_` | address | The address of the token bound account. |

### account
```solidity
  function account(
    address implementation,
    bytes32 salt,
    uint256 chainId,
    address tokenContract,
    uint256 tokenId
  ) external returns (address account_)
```
Returns the computed token bound account address for a non-fungible token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `implementation` | address | The address of the implementation contract. |
| `salt` | bytes32 | Arbitrary value to modify resulting address. |
| `chainId` | uint256 | The id of the chain that the tokenContract is deployed on. |
| `tokenContract` | address | The address of the nft contract. |
| `tokenId` | uint256 | The id of the nft. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `account_` | address | The address of the token bound account. |

## Events
### ERC6551AccountCreated
```solidity
  event ERC6551AccountCreated()
```
The registry MUST emit the ERC6551AccountCreated event upon successful account creation.


