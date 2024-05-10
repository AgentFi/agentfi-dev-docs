<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/utils/IDispatcher.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Dispatches function calls to multiple other contracts.

Like an access controlled variant of Multicall3. Also allows for storing calldata for lower L1 data fee.


## Functions
### aggregate
```solidity
  function aggregate(
    struct IDispatcher.Call[] calls
  ) external returns (uint256 blockNumber, bytes[] returnData)
```
Backwards-compatible call aggregation with Multicall


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | struct IDispatcher.Call[] | An array of Call structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `blockNumber` | uint256 | The block number where the calls were executed |
| `returnData` | bytes[] | An array of bytes containing the responses |

### tryAggregate
```solidity
  function tryAggregate(
    bool requireSuccess,
    struct IDispatcher.Call[] calls
  ) external returns (struct IDispatcher.Result[] returnData)
```
Backwards-compatible with Multicall2
Aggregate calls without requiring success


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `requireSuccess` | bool | If true, require all calls to succeed |
| `calls` | struct IDispatcher.Call[] | An array of Call structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `returnData` | struct IDispatcher.Result[] | An array of Result structs |

### tryBlockAndAggregate
```solidity
  function tryBlockAndAggregate(
    bool calls
  ) external returns (uint256 blockNumber, bytes32 blockHash, struct IDispatcher.Result[] returnData)
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
| `returnData` | struct IDispatcher.Result[] | An array of Result structs |

### blockAndAggregate
```solidity
  function blockAndAggregate(
    struct IDispatcher.Call[] calls
  ) external returns (uint256 blockNumber, bytes32 blockHash, struct IDispatcher.Result[] returnData)
```
Backwards-compatible with Multicall2
Aggregate calls and allow failures using tryAggregate


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | struct IDispatcher.Call[] | An array of Call structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `blockNumber` | uint256 | The block number where the calls were executed |
| `blockHash` | bytes32 | The hash of the block where the calls were executed |
| `returnData` | struct IDispatcher.Result[] | An array of Result structs |

### aggregate3
```solidity
  function aggregate3(
    struct IDispatcher.Call3[] calls
  ) external returns (struct IDispatcher.Result[] returnData)
```
Aggregate calls, ensuring each returns success if required


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | struct IDispatcher.Call3[] | An array of Call3 structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `returnData` | struct IDispatcher.Result[] | An array of Result structs |

### aggregate3Value
```solidity
  function aggregate3Value(
    struct IDispatcher.Call3Value[] calls
  ) external returns (struct IDispatcher.Result[] returnData)
```
Aggregate calls with a msg value
Reverts if msg.value is less than the sum of the call values


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | struct IDispatcher.Call3Value[] | An array of Call3Value structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `returnData` | struct IDispatcher.Result[] | An array of Result structs |

### aggregateAndStore
```solidity
  function aggregateAndStore(
    struct IDispatcher.Call[] calls
  ) external returns (uint256 blockNumber, bytes[] returnData, uint256[] calldataIDs)
```
Backwards-compatible call aggregation with Multicall


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | struct IDispatcher.Call[] | An array of Call structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `blockNumber` | uint256 | The block number where the calls were executed |
| `returnData` | bytes[] | An array of bytes containing the responses |

### aggregate3AndStore
```solidity
  function aggregate3AndStore(
    struct IDispatcher.Call3[] calls
  ) external returns (struct IDispatcher.Result[] returnData, uint256[] calldataIDs)
```
Aggregate calls, ensuring each returns success if required


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | struct IDispatcher.Call3[] | An array of Call3 structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `returnData` | struct IDispatcher.Result[] | An array of Result structs |

### aggregate3ValueAndStore
```solidity
  function aggregate3ValueAndStore(
    struct IDispatcher.Call3Value[] calls
  ) external returns (struct IDispatcher.Result[] returnData, uint256[] calldataIDs)
```
Aggregate calls with a msg value
Reverts if msg.value is less than the sum of the call values


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calls` | struct IDispatcher.Call3Value[] | An array of Call3Value structs |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `returnData` | struct IDispatcher.Result[] | An array of Result structs |

### aggregateFromStorage1
```solidity
  function aggregateFromStorage1(
    address target,
    uint256 calldataID,
     returnData
  ) external returns (bytes returnData)
```
Calls a target using previously stored calldata.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | The target to call. |
| `calldataID` | uint256 | The ID of the calldata to send. |
| `returnData` |  | The results. |

### aggregateFromStorage2
```solidity
  function aggregateFromStorage2(
    address target,
    uint256[] calldataIDs,
     returnData
  ) external returns (bytes[] returnData)
```
Calls a target using previously stored calldata.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | The target to call. |
| `calldataIDs` | uint256[] | The list of IDs of the calldatas to send. |
| `returnData` |  | An array of results. |

### aggregateFromStorage3
```solidity
  function aggregateFromStorage3(
    address target,
    struct IDispatcher.Call4[] calls,
     returnData
  ) external returns (struct IDispatcher.Result[] returnData)
```
Calls a target using previously stored calldata.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | The target to call. |
| `calls` | struct IDispatcher.Call4[] | The list of calls to send. |
| `returnData` |  | An array of results. |

### aggregateFromStorage4
```solidity
  function aggregateFromStorage4(
    address[] targets,
    uint256 calldataID,
     returnData
  ) external returns (bytes[] returnData)
```
Calls multiple targets using previously stored calldata.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `targets` | address[] | The targets to call. |
| `calldataID` | uint256 | The ID of the calldata to send. |
| `returnData` |  | An array of results. |

### aggregateFromStorage5
```solidity
  function aggregateFromStorage5(
    address[] targets,
    uint256[] calldataIDs,
     returnData
  ) external returns (bytes[] returnData)
```
Calls multiple targets using previously stored calldata.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `targets` | address[] | The targets to call. |
| `calldataIDs` | uint256[] | The list of IDs of the calldatas to send. |
| `returnData` |  | An array of results. |

### isOperator
```solidity
  function isOperator(
    address account
  ) external returns (bool isAuthorized)
```
Returns true if the account is an operator.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | The account to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `isAuthorized` | bool | True if is an operator, false otherwise. |

### storedCalldatasLength
```solidity
  function storedCalldatasLength() external returns (uint256 len)
```
Returns the number of calldatas that were stored.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `len` | uint256 | The count. |

### storedCalldatas
```solidity
  function storedCalldatas(
    uint256 calldataID
  ) external returns (bytes data)
```
Returns a stored calldata.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calldataID` | uint256 | The ID of the calldata. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `data` | bytes | The calldata stored at that index. |

### setOperators
```solidity
  function setOperators(
    struct IDispatcher.SetOperatorParam[] params
  ) external
```
Sets the status of a list of operators.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IDispatcher.SetOperatorParam[] | The list to set. |


## Events
### OperatorSet
```solidity
  event OperatorSet()
```
Emitted when an operator is added or removed.


### CalldataStored
```solidity
  event CalldataStored()
```
Emitted when calldata is stored.


