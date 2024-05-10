<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/utils/ContractFactory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Exposes CREATE2 (EIP-1014) to deploy bytecode on deterministic addresses based on initialization code and salt.

Inspired by ERC2470 but meant to be deployed with a known private key.

Code borrowed from https://etherscan.io/address/0xce0042B868300000d44A59004Da54A005ffdcf9f


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
Constructs the factory contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `owner_` | address | The owner of the contract. |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

### deploy
```solidity
  function deploy(
    bytes initCode,
    bytes32 salt
  ) external returns (address payable createdContract)
```
Deploys `initCode` using `salt` for defining the deterministic address.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `initCode` | bytes | Initialization code. |
| `salt` | bytes32 | Arbitrary value to modify resulting address. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `createdContract` | address payable | Created contract address. |

### deployAndCall
```solidity
  function deployAndCall(
    bytes initCode,
    bytes32 salt,
    bytes data
  ) external returns (address payable createdContract, bytes returndata)
```
Deploys `initCode` using `salt` for defining the deterministic address then calls the contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `initCode` | bytes | Initialization code. |
| `salt` | bytes32 | Arbitrary value to modify resulting address. |
| `data` | bytes | The data to pass to the contract. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `createdContract` | address payable | Created contract address. |
| `returndata` | bytes | The data returned from the contract. |

### fallback
```solidity
  function fallback() external
```
Deploys `initCode=msg.data` using `salt=0` for defining the deterministic address.




