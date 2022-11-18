import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import CodeEditor from "@uiw/react-textarea-code-editor";
import "@uiw/react-textarea-code-editor/dist.css";
import { Fragment } from "react";

import EVMTooltip from "@/components/evm/EVMTooltip";
import { CopyToClipboard } from "@/components/icons";

const abi = `[
	{
	  "constant": true,
	  "inputs": [],
	  "name": "name",
	  "outputs": [
		{
		  "name": "",
		  "type": "string"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "name": "_spender",
		  "type": "address"
		},
		{
		  "name": "_value",
		  "type": "uint256"
		}
	  ],
	  "name": "approve",
	  "outputs": [
		{
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "totalSupply",
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "name": "_from",
		  "type": "address"
		},
		{
		  "name": "_to",
		  "type": "address"
		},
		{
		  "name": "_value",
		  "type": "uint256"
		}
	  ],
	  "name": "transferFrom",
	  "outputs": [
		{
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "decimals",
	  "outputs": [
		{
		  "name": "",
		  "type": "uint8"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
		{
		  "name": "_owner",
		  "type": "address"
		}
	  ],
	  "name": "balanceOf",
	  "outputs": [
		{
		  "name": "balance",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "symbol",
	  "outputs": [
		{
		  "name": "",
		  "type": "string"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "name": "_to",
		  "type": "address"
		},
		{
		  "name": "_value",
		  "type": "uint256"
		}
	  ],
	  "name": "transfer",
	  "outputs": [
		{
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
		{
		  "name": "_owner",
		  "type": "address"
		},
		{
		  "name": "_spender",
		  "type": "address"
		}
	  ],
	  "name": "allowance",
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "payable": true,
	  "stateMutability": "payable",
	  "type": "fallback"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "name": "owner",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "name": "spender",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "Approval",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "name": "from",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "name": "to",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "Transfer",
	  "type": "event"
	}
  ]`;

export default function ContractTab() {
	const files = [1, 2, 3];

	const contract = `pragma solidity >=0.5.0;
pragma experimental ABIEncoderV2;

/// @title Multicall2 - Aggregate results from multiple read-only function calls
/// @author Michael Elliot <mike@makerdao.com>
/// @author Joshua Levine <joshua@makerdao.com>
/// @author Nick Johnson <arachnid@notdot.net>

contract Multicall2 {
    struct Call {
        address target;
        bytes callData;
    }
    struct Result {
        bool success;
        bytes returnData;
    }

    function aggregate(Call[] memory calls) public returns (uint256 blockNumber, bytes[] memory returnData) {
        blockNumber = block.number;
        returnData = new bytes[](calls.length);
        for(uint256 i = 0; i < calls.length; i++) {
            (bool success, bytes memory ret) = calls[i].target.call(calls[i].callData);
            require(success, "Multicall aggregate: call failed");
            returnData[i] = ret;
        }
    }
    function blockAndAggregate(Call[] memory calls) public returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData) {
        (blockNumber, blockHash, returnData) = tryBlockAndAggregate(true, calls);
    }
    function getBlockHash(uint256 blockNumber) public view returns (bytes32 blockHash) {
        blockHash = blockhash(blockNumber);
    }
    function getBlockNumber() public view returns (uint256 blockNumber) {
        blockNumber = block.number;
    }
    function getCurrentBlockCoinbase() public view returns (address coinbase) {
        coinbase = block.coinbase;
    }
    function getCurrentBlockDifficulty() public view returns (uint256 difficulty) {
        difficulty = block.difficulty;
    }
    function getCurrentBlockGasLimit() public view returns (uint256 gaslimit) {
        gaslimit = block.gaslimit;
    }
    function getCurrentBlockTimestamp() public view returns (uint256 timestamp) {
        timestamp = block.timestamp;
    }
    function getEthBalance(address addr) public view returns (uint256 balance) {
        balance = addr.balance;
    }
    function getLastBlockHash() public view returns (bytes32 blockHash) {
        blockHash = blockhash(block.number - 1);
    }
    function tryAggregate(bool requireSuccess, Call[] memory calls) public returns (Result[] memory returnData) {
        returnData = new Result[](calls.length);
        for(uint256 i = 0; i < calls.length; i++) {
            (bool success, bytes memory ret) = calls[i].target.call(calls[i].callData);

            if (requireSuccess) {
                require(success, "Multicall2 aggregate: call failed");
            }

            returnData[i] = Result(success, ret);
        }
    }
    function tryBlockAndAggregate(bool requireSuccess, Call[] memory calls) public returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData) {
        blockNumber = block.number;
        blockHash = blockhash(block.number);
        returnData = tryAggregate(requireSuccess, calls);
    }
}`;

	return (
		<div className="text-white p-3 border border-gray-400 space-y-3">
			<div className="flex justify-between">
				<div className="my-auto">
					<HeaderText message="Contract Details" />
				</div>
				<div>
					<ExclamationTriangleIcon className="h-8 w-8 text-red-600 my-auto" />
				</div>
			</div>
			{/* Contract Information Section */}
			<div className="space-y-2">
				<div className="sm:grid sm:grid-cols-8 sm:gap-4">
					<dt className="text-sm font-medium text-gray-200">Contract Name</dt>
					<dd className="mt-1 text-sm text-white sm:mt-0">Multicall2</dd>
				</div>
				<div className="sm:grid sm:grid-cols-8 sm:gap-4">
					<dt className="text-sm font-medium text-gray-200">
						Compiler Version
					</dt>
					<dd className="mt-1 text-sm text-white sm:mt-0">
						v0.8.0+commit.c7dfd78e
					</dd>
				</div>
				<div className="sm:grid sm:grid-cols-8 sm:gap-4">
					<dt className="text-sm font-medium text-gray-200">Optimizations</dt>
					<dd className="mt-1 text-sm text-white sm:mt-0">200</dd>
				</div>
			</div>
			<HeaderText message="Source File(s)" />
			{/* Contract Source Code Section */}
			{files?.length ? (
				files.map((file, key) => (
					<div key={key} className="space-y-2">
						<div className="flex justify-between">
							<div className="my-auto">
								<span className="text-sm text-gray-200">
									File {key + 1} of {files?.length}
								</span>
							</div>
							<div className="my-auto">
								<EVMTooltip message="Copy source code to clipboard.">
									<CopyToClipboard message={file} />
								</EVMTooltip>
							</div>
						</div>
						<div className="w-full max-h-64 overflow-y-scroll bg-black bg-opacity-20 rounded-lg">
							<CodeEditor
								value={contract}
								language="sol"
								padding={10}
								style={{
									fontSize: 12,
									fontFamily:
										"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
								}}
								disabled
							/>
						</div>
					</div>
				))
			) : (
				<Fragment />
			)}

			<Clipboard
				copyText={"demo"}
				headerText="ABI"
				tooltip={"Copy ABI to clipboard."}
			/>

			<div className="w-full max-h-64 overflow-y-scroll bg-black bg-opacity-20 rounded-lg">
				<CodeEditor
					value={abi}
					language="json"
					padding={10}
					style={{
						fontSize: 12,
						fontFamily:
							"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
					}}
					disabled
				/>
			</div>
			{/* Bytecode Section */}
			<Clipboard
				copyText={"demo"}
				headerText="Deployed Bytecode"
				tooltip={"Copy deployed bytecode to clipboard."}
			/>
			<div>
				<p className="overflow-y-scroll max-h-32 break-all font-mono bg-black bg-opacity-20 p-3 rounded text-sm">
					60806040523480156200001157600080fd5b506040518060600160405280602581526020016200309460259139620000378162000099565b506200004c62000046620000b2565b620000b6565b60408051808201909152601d8082527f464c554620576f726c643a205363656e657320616e6420536f756e64730000006020909201918252620000929160099162000108565b50620001eb565b8051620000ae90600290602084019062000108565b5050565b3390565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200011690620001ae565b90600052602060002090601f0160209004810192826200013a576000855562000185565b82601f106200015557805160ff191683800117855562000185565b8280016001018555821562000185579182015b828111156200018557825182559160200191906001019062000168565b506200019392915062000197565b5090565b5b8082111562000193576000815560010162000198565b600281046001821680620001c357607f821691505b60208210811415620001e557634e487b7160e01b600052602260045260246000fd5b50919050565b612e9980620001fb6000396000f3fe608060405234801561001057600080fd5b50600436106101c65760003560e01c80639c345aef116101005780639c345aef146103445780639d9892cd14610357578063a17fa4641461036a578
				</p>
			</div>
		</div>
	);
}

const HeaderText = ({ message }) => {
	return (
		<div>
			<span className="text-lg font-semibold">{message}</span>
		</div>
	);
};

const Clipboard = ({ tooltip, copyText, headerText }) => {
	return (
		<div className="flex justify-between py-2 border-b border-gray-600">
			<div>
				<HeaderText message={headerText} />
			</div>
			<div className="my-auto">
				<EVMTooltip message={tooltip}>
					<CopyToClipboard message={copyText} />
				</EVMTooltip>
			</div>
		</div>
	);
};
