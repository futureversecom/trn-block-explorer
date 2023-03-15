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
		<div className="space-y-3 border border-gray-400 p-3 text-white">
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
						<span className="mr-2 font-semibold">
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
							<div className="max-h-64 w-full overflow-y-scroll rounded-lg bg-black bg-opacity-20">
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

			<div className="max-h-64 w-full overflow-y-scroll rounded-lg bg-black bg-opacity-20">
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
			{contractData?.bytecode && (
				<Fragment>
					<Clipboard
						copyText={"demo"}
						headerText="Deployed Bytecode"
						tooltip={"Copy deployed bytecode to clipboard."}
					/>
					<div>
						<p className="max-h-32 overflow-y-scroll break-all rounded bg-black bg-opacity-20 p-3 font-mono text-sm">
							{contractData.bytecode}
						</p>
					</div>
				</Fragment>
			)}
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
		<div className="flex justify-between border-b border-gray-600 py-2">
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
