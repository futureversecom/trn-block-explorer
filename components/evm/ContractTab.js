import { useQuery } from "@tanstack/react-query";
import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/lib/function";
import { Fragment, useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	atomDark,
	lucario,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import EVMTooltip from "@/components/evm/evmTooltip";
import SolidityCompilerBugs from "@/components/evm/SolidityCompilerBugs";
import { CopyToClipboard } from "@/components/icons";
import { fetchContractData } from "@/libs/utils";

export default function ContractTab({ walletAddress }) {
	const contractQuery = useQuery(
		[walletAddress, "contractData"],
		async () => {
			return await fetchContractData(walletAddress);
		},
		{
			refetchInterval: 30000,
		}
	);

	const contractData = contractQuery?.data?.contractData;

	const { files, metadata } = useMemo(() => {
		if (!contractQuery?.data?.files?.length)
			return {
				files: undefined,
				metadata: undefined,
			};

		const { left: files, right: [metadata] } = pipe(
			contractQuery.data.files,
			A.partition(({ name }) => name.includes("metadata")),
		);

		return {
			files: A.reverse(files),
			metadata: JSON.parse(metadata.content),
		};
	}, [contractQuery?.data]);

	const contractName = useMemo(() => {
		if (!metadata) return undefined;

		return Object.values(metadata.settings.compilationTarget)[0];
	}, [metadata]);

	return (
		<div className="space-y-3 border border-gray-400 p-3 text-white">
			{/* Contract Information Section */}
			{metadata && (
				<Fragment>
					<div className="flex justify-between">
						<div className="my-auto">
							<HeaderText message="Contract Details" />
						</div>
						<div>
							<SolidityCompilerBugs
								version={metadata?.compiler?.version?.split("+")?.[0]}
							/>
						</div>
					</div>
					<div className="space-y-2">
						<div className="sm:grid sm:grid-cols-8 sm:gap-4">
							<dt className="text-sm font-medium text-gray-200">
								Contract Name
							</dt>
							<dd className="mt-1 text-sm text-white sm:mt-0">
								{contractName}
							</dd>
						</div>
						<div className="sm:grid sm:grid-cols-8 sm:gap-4">
							<dt className="text-sm font-medium text-gray-200">
								Compiler Version
							</dt>
							<dd className="mt-1 text-sm text-white sm:mt-0">
								v{metadata.compiler.version}
							</dd>
						</div>
						<div className="sm:grid sm:grid-cols-8 sm:gap-4">
							<dt className="text-sm font-medium text-gray-200">
								Optimizations
							</dt>
							<dd className="mt-1 whitespace-nowrap text-sm text-white sm:mt-0">
								<span className="font-semibold">
									{metadata.settings.optimizer.enabled ? "Enabled" : "Disabled"}
								</span>{" "}
								with{" "}
								<span className="font-semibold">
									{metadata.settings.optimizer.runs}
								</span>{" "}
								runs
							</dd>
						</div>
					</div>
				</Fragment>
			)}

			{/* Contract Source Code Section */}
			{!!files?.length && (
				<Fragment>
					<HeaderText message="Source File(s)" />

					{files.map(({ name, content }, key) => {
						return (
							<div key={key} className="space-y-2">
								<div className="flex justify-between">
									<div className="my-auto">
										<span className="text-sm text-gray-200">
											File {key + 1} of {files.length} - {name}
										</span>
									</div>
									<div className="my-auto">
										<EVMTooltip message="Copy source code to clipboard.">
											<CopyToClipboard message={content} />
										</EVMTooltip>
									</div>
								</div>
								<div className="max-h-80 w-full overflow-y-scroll rounded-lg bg-gray-900 bg-opacity-20">
									<SyntaxHighlighter
										style={lucario}
										language="solidity"
										customStyle={{
											fontSize: 12,
											backgroundColor: "transparent",
											fontFamily:
												"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
										}}
										showLineNumbers
									>
										{content}
									</SyntaxHighlighter>
								</div>
							</div>
						);
					})}
				</Fragment>
			)}

			{/* ABI Section */}
			{metadata?.output?.abi && (
				<Fragment>
					<Clipboard
						headerText="ABI"
						copyText={metadata.output.abi}
						tooltip={"Copy ABI to clipboard."}
					/>

					<div className="max-h-64 w-full overflow-y-scroll rounded-lg bg-gray-900 bg-opacity-20">
						<SyntaxHighlighter
							style={atomDark}
							language="json"
							customStyle={{
								fontSize: 12,
								backgroundColor: "transparent",
								fontFamily:
									"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
							}}
						>
							{JSON.stringify(metadata.output.abi).replaceAll("},", "},\n")}
						</SyntaxHighlighter>
					</div>
				</Fragment>
			)}

			{/* Bytecode Section */}
			{contractData?.bytecode && (
				<Fragment>
					<Clipboard
						copyText={"demo"}
						headerText="Deployed Bytecode"
						tooltip={"Copy deployed bytecode to clipboard."}
					/>
					<div>
						<p className="max-h-32 overflow-y-scroll break-all rounded bg-black bg-opacity-20 p-3 font-mono text-sm text-gray-200">
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
