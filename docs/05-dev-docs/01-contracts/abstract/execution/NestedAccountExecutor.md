<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/abstract/execution/NestedAccountExecutor.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>


Allows the root owner of a nested token bound account to execute transactions directly
against the nested account, even if intermediate accounts have not been created.

## Functions
### constructor
```solidity
  function constructor() internal
```




### executeNested
```solidity
  function executeNested(
    address to,
    uint256 value,
    bytes data,
    uint8 operation,
    struct NestedAccountExecutor.ERC6551AccountInfo[] proof
  ) external returns (bytes)
```
Executes a low-level operation from this account if the caller is a valid signer on the
parent TBA specified in the proof



#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `to` | address | Account to operate on |
| `value` | uint256 | Value to send with operation |
| `data` | bytes | Encoded calldata of operation |
| `operation` | uint8 | Operation type (0=CALL, 1=DELEGATECALL, 2=CREATE, 3=CREATE2) |
| `proof` | struct NestedAccountExecutor.ERC6551AccountInfo[] | An array of ERC-6551 account information specifying the ownership path from this account to its parent. |


