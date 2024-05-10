<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/libraries/Calls.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A library for safely making low level calls.


## Functions
### sendValue
```solidity
  function sendValue(
    address target
  ) internal returns (bytes result)
```
Safely transfers the gas token using a low level `call`.

If `target` reverts with a revert reason, it is bubbled up by this function.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | The address of the contract to `call`. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `result` | bytes | The result of the function call. |

### functionCall
```solidity
  function functionCall(
    address target,
    bytes data
  ) internal returns (bytes result)
```
Safely performs a Solidity function call using a low level `call`.

If `target` reverts with a revert reason, it is bubbled up by this function.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | The address of the contract to `delegatecall`. |
| `data` | bytes | The data to pass to the target. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `result` | bytes | The result of the function call. |

### functionCallWithValue
```solidity
  function functionCallWithValue(
    address target,
    bytes data
  ) internal returns (bytes result)
```
Safely performs a Solidity function call using a low level `call`.

If `target` reverts with a revert reason, it is bubbled up by this function.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | The address of the contract to `delegatecall`. |
| `data` | bytes | The data to pass to the target. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `result` | bytes | The result of the function call. |

### functionDelegateCall
```solidity
  function functionDelegateCall(
    address target,
    bytes data
  ) internal returns (bytes result)
```
Safely performs a Solidity function call using a low level `delegatecall`.

If `target` reverts with a revert reason, it is bubbled up by this function.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | The address of the contract to `delegatecall`. |
| `data` | bytes | The data to pass to the target. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `result` | bytes | The result of the function call. |

### verifyHasCode
```solidity
  function verifyHasCode(
    address target
  ) internal
```
Verify that an address has contract code, otherwise reverts.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | The address to verify. |


