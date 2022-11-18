const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

let whitelistAddresses = [
  "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
];

// Creates a new array 'leaf Nodes' by hashing all indexes of the 'whitelistAddresses' // using keccak256. Then creates a new Merkle Tree object using keccak256 as the // desired hashing algorithm.
const leafNodes = whitelistAddresses.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

console.log("MerkleTree \n", merkleTree.toString());

//rootHash
// const rootHash = merkleTree.getRoot().toString("hex");
const rootHash = merkleTree.getHexRoot();
console.log("Root Hash :", rootHash);

const proof = merkleTree.getHexProof(
  keccak256("0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2")
);
console.log(proof);
