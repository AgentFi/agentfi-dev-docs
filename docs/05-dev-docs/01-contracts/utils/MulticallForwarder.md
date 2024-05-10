<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/utils/MulticallForwarder.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A variant of Multicall3 that enforces ERC2771 and allows collecting the gas rewards.


## Functions
### constructor
```solidity
  function constructor(
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_
  ) public
```
Constructs the MulticallForwarder contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

### aggregate
```solidity
  function aggregate(
    struct MulticallForwarder.Call[] calls
  ) public returns (uint256 blockNumber, bytes[] returnData)
```
Backwards-compatible call aggregation with Multicall


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | struct MulticallForwarder.Call[] | An array of Call structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `blockNumber` | uint256 | The block number where the calls were executed |
| `returnData` | bytes[] | An array of bytes containing the responses |

### tryAggregate
```solidity
  function tryAggregate(
    bool requireSuccess,
    struct MulticallForwarder.Call[] calls
  ) public returns (struct MulticallForwarder.Result[] returnData)
```
Backwards-compatible with Multicall2
Aggregate calls without requiring success


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `requireSuccess` | bool | If true, require all calls to succeed |
| `calls` | struct MulticallForwarder.Call[] | An array of Call structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `returnData` | struct MulticallForwarder.Result[] | An array of Result structs |

### tryBlockAndAggregate
```solidity
  function tryBlockAndAggregate(
    bool calls
  ) public returns (uint256 blockNumber, bytes32 blockHash, struct MulticallForwarder.Result[] returnData)
```
Backwards-compatible with Multicall2
Aggregate calls and allow failures using tryAggregate


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | bool | An array of Call structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `blockNumber` | uint256 | The block number where the calls were executed |
| `blockHash` | bytes32 | The hash of the block where the calls were executed |
| `returnData` | struct MulticallForwarder.Result[] | An array of Result structs |

### blockAndAggregate
```solidity
  function blockAndAggregate(
    struct MulticallForwarder.Call[] calls
  ) public returns (uint256 blockNumber, bytes32 blockHash, struct MulticallForwarder.Result[] returnData)
```
Backwards-compatible with Multicall2
Aggregate calls and allow failures using tryAggregate


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | struct MulticallForwarder.Call[] | An array of Call structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `blockNumber` | uint256 | The block number where the calls were executed |
| `blockHash` | bytes32 | The hash of the block where the calls were executed |
| `returnData` | struct MulticallForwarder.Result[] | An array of Result structs |

### aggregate3
```solidity
  function aggregate3(
    struct MulticallForwarder.Call3[] calls
  ) public returns (struct MulticallForwarder.Result[] returnData)
```
Aggregate calls, ensuring each returns success if required


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | struct MulticallForwarder.Call3[] | An array of Call3 structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `returnData` | struct MulticallForwarder.Result[] | An array of Result structs |

### aggregate3Value
```solidity
  function aggregate3Value(
    struct MulticallForwarder.Call3Value[] calls
  ) public returns (struct MulticallForwarder.Result[] returnData)
```
Aggregate calls with a msg value
Reverts if msg.value is less than the sum of the call values


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | struct MulticallForwarder.Call3Value[] | An array of Call3Value structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `returnData` | struct MulticallForwarder.Result[] | An array of Result structs |

### getBlockHash
```solidity
  function getBlockHash(
    uint256 blockNumber
  ) public returns (bytes32 blockHash)
```
Returns the block hash for the given block number


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `blockNumber` | uint256 | The block number |

### getBlockNumber
```solidity
  function getBlockNumber() public returns (uint256 blockNumber)
```
Returns the block number



### getCurrentBlockCoinbase
```solidity
  function getCurrentBlockCoinbase() public returns (address coinbase)
```
Returns the block coinbase



### getCurrentBlockDifficulty
```solidity
  function getCurrentBlockDifficulty() public returns (uint256 difficulty)
```
Returns the block difficulty



### getCurrentBlockGasLimit
```solidity
  function getCurrentBlockGasLimit() public returns (uint256 gaslimit)
```
Returns the block gas limit



### getCurrentBlockTimestamp
```solidity
  function getCurrentBlockTimestamp() public returns (uint256 timestamp)
```
Returns the block timestamp



### getEthBalance
```solidity
  function getEthBalance() public returns (uint256 balance)
```
Returns the (ETH) balance of a given address



### getLastBlockHash
```solidity
  function getLastBlockHash() public returns (bytes32 blockHash)
```
Returns the block hash of the last block



### getBasefee
```solidity
  function getBasefee() public returns (uint256 basefee)
```
Gets the base fee of the given block
Can revert if the BASEFEE opcode is not implemented by the given chain



### getChainId
```solidity
  function getChainId() public returns (uint256 chainid)
```
Returns the chain id




