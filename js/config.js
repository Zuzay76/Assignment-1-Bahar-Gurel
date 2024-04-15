// Use Remix to deploy smart contract to local Ganache blockchain.
// Make note of the address the contract was deployed to, and paste it below.

let contractAddress = '0x2fCf36E4BD4C14473b375b8aaA650B9EAf3C6119'
// Define the smart contract ABI (Application Binary Interface).
let contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "addBug",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_bugIndex",
				"type": "uint256"
			}
		],
		"name": "deleteBug",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_bugIndex",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "updateBugStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBugCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_bugIndex",
				"type": "uint256"
			}
		],
		"name": "getTask",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "bugID",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "enum BugTracker.criticalLevels",
						"name": "level",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "isDone",
						"type": "bool"
					}
				],
				"internalType": "struct BugTracker.Bug",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];