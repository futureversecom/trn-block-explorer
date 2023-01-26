import { useQuery } from "@tanstack/react-query";
import CodeEditor from "@uiw/react-textarea-code-editor";
import "@uiw/react-textarea-code-editor/dist.css";
import { Fragment } from "react";

import EVMTooltip from "@/components/evm/evmTooltip";
import SolidityCompilerBugs from "@/components/evm/SolidityCompilerBugs";
import { CopyToClipboard } from "@/components/icons";
import { isContract } from "@/libs/evm-api";

export default function ContractTab({ walletAddress }) {
	const contractQuery = useQuery(
		[walletAddress, "isContract"],
		() => {
			return isContract(walletAddress).then((data) => {
				return data;
			});
		},
		{
			refetchInterval: 0,
		}
	);

	const contractData = contractQuery?.data?.contractData;

	const fileKeys = contractData?.files ? Object.keys(contractData?.files) : [];

	return (
		<div className="text-white p-3 border border-gray-400 space-y-3">
			<div className="flex justify-between">
				<div className="my-auto">
					<HeaderText message="Contract Details" />
				</div>
				<div>
					<SolidityCompilerBugs
						version={contractData?.compilerVersion
							?.split("+")?.[0]
							?.replace("v", "")}
					/>
				</div>
			</div>
			{/* Contract Information Section */}
			<div className="space-y-2">
				<div className="sm:grid sm:grid-cols-8 sm:gap-4">
					<dt className="text-sm font-medium text-gray-200">Contract Name</dt>
					<dd className="mt-1 text-sm text-white sm:mt-0">
						{fileKeys?.[0]?.replace(".sol", "")}
					</dd>
				</div>
				<div className="sm:grid sm:grid-cols-8 sm:gap-4">
					<dt className="text-sm font-medium text-gray-200">
						Compiler Version
					</dt>
					<dd className="mt-1 text-sm text-white sm:mt-0">
						{contractData?.compilerVersion}
					</dd>
				</div>
				<div className="sm:grid sm:grid-cols-8 sm:gap-4">
					<dt className="text-sm font-medium text-gray-200">Optimizations</dt>
					<dd className="mt-1 text-sm text-white sm:mt-0">
						<span className="font-semibold mr-2">
							{contractData?.optimizationEnabled ? "Enabled" : "Disabled"}
						</span>
						{contractData?.optimizationRuns}
					</dd>
				</div>
			</div>
			<HeaderText message="Source File(s)" />
			{/* Contract Source Code Section */}
			{fileKeys?.length ? (
				fileKeys.map((fileName, key) => {
					const content = contractData?.files?.[fileName]?.content;
					return (
						<div key={key} className="space-y-2">
							<div className="flex justify-between">
								<div className="my-auto">
									<span className="text-sm text-gray-200">
										File {key + 1} of {fileKeys?.length} - {fileName}
									</span>
								</div>
								<div className="my-auto">
									<EVMTooltip message="Copy source code to clipboard.">
										<CopyToClipboard message={content} />
									</EVMTooltip>
								</div>
							</div>
							<div className="w-full max-h-64 overflow-y-scroll bg-black bg-opacity-20 rounded-lg">
								<CodeEditor
									value={content}
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
					);
				})
			) : (
				<Fragment />
			)}

			<Clipboard
				copyText={contractData?.abi}
				headerText="ABI"
				tooltip={"Copy ABI to clipboard."}
			/>

			<div className="w-full max-h-64 overflow-y-scroll bg-black bg-opacity-20 rounded-lg">
				<CodeEditor
					value={JSON.stringify(contractData?.abi)}
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
