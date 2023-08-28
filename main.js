const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

let whitelistAddresses = [
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0x78D6CF3DEF45AF458442E787FE6E64A03750AB94",
  "0xA7B0E4CF55AF900F6E80D619AE1E00965044BC4E",
  "0x38C4278F42A26A588176017F5E4F6ED831835EA2",
  "0x9F9A0AA0507FE79CA1FF8F26A8D84BD8BB0EC9DF",
  "0xDABF258F5619942D19AD87C3472FABE893B26D7D",
  "0xD30ED9C457C7D32F3F7B949964191E4084C53F66",
];

// Creates a new array 'leaf Nodes' by hashing all indexes of the 'whitelistAddresses' // using keccak256. Then creates a new Merkle Tree object using keccak256 as the // desired hashing algorithm.
const leafNodes = whitelistAddresses.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

//rootHash
const rootHash = merkleTree.getRoot().toString("hex");

const proof = merkleTree.getHexProof(
  keccak256("0xD30ED9C457C7D32F3F7B949964191E4084C53F66")
);

console.log("Root Hash :", rootHash);

console.log("MerkleTree \n", merkleTree.toString());

console.log(proof);
