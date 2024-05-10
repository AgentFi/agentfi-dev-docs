<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/utils/IContractFactory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Exposes CREATE2 (EIP-1014) to deploy bytecode on deterministic addresses based on initialization code and salt.

Inspired by ERC2470 but meant to be deployed with a known private key.

Code borrowed from https://etherscan.io/address/0xce0042B868300000d44A59004Da54A005ffdcf9f


## Functions
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




## Events
### ContractDeployed
```solidity
  event ContractDeployed()
```
Emitted when this contract deploys another contract.


