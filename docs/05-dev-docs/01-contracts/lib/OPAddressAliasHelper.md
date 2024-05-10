<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/lib/OPAddressAliasHelper.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### applyL1ToL2Alias
```solidity
  function applyL1ToL2Alias(
    address l1Address
  ) internal returns (address l2Address)
```
Utility function that converts the address in the L1 that submitted a tx to
the inbox to the msg.sender viewed in the L2


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `l1Address` | address | the address in the L1 that triggered the tx to L2 |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `l2Address` | address | L2 address as viewed in msg.sender |

### undoL1ToL2Alias
```solidity
  function undoL1ToL2Alias(
    address l2Address
  ) internal returns (address l1Address)
```
Utility function that converts the msg.sender viewed in the L2 to the
address in the L1 that submitted a tx to the inbox


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `l2Address` | address | L2 address as viewed in msg.sender |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `l1Address` | address | the address in the L1 that triggered the tx to L2 |

