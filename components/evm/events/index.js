// // ERC165 + ERC721

// event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
// event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
// event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

// // ERC165 + ERC1155

// event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
// event TransferBatch(
//   address indexed operator,
//   address indexed from,
//   address indexed to,
//   uint256[] ids,
//   uint256[] values
// );
// event ApprovalForAll(address indexed account, address indexed operator, bool approved);

// // ERC20
// event Transfer(address indexed from, address indexed to, uint256 value);
// event Approval(address indexed owner, address indexed spender, uint256 value);


// ERC721
const Transfer = ({from, to, tokenId}) => {
    return (
        <span>Transferrr</span>
    )
}