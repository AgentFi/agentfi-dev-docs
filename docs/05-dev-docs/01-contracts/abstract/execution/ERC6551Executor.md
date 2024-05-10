<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/abstract/execution/ERC6551Executor.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>


Basic executor which implements the IERC6551Executable execution interface

## Functions
### execute
```solidity
  function execute(
    address to,
    uint256 value,
    bytes data,
    uint8 operation
  ) external returns (bytes)
```
Executes a low-level operation from this account if the caller is a valid executor



#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `to` | address | Account to operate on |
| `value` | uint256 | Value to send with operation |
| `data` | bytes | Encoded calldata of operation |
| `operation` | uint8 | Operation type (0=CALL, 1=DELEGATECALL, 2=CREATE, 3=CREATE2) |

### supportsInterface
```solidity
  function supportsInterface() public returns (bool)
```




### _verifySenderIsValidExecutor
```solidity
  function _verifySenderIsValidExecutor() internal
```





