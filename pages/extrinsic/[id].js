import {
	PageHeader,
	LoadingBlock,
	ContainerLayout,
	DetailsLayout,
} from "@/components";
import { useGetExtrinsicQuery } from "@/libs/api/generated";
import { graphQLClient } from "@/libs/client";
import { CubeIcon } from "@heroicons/react/24/outline";
import { formatExtrinsicId } from "@/libs/utils";
import { BlockFinalizedIcon } from "@/components/icons";
import TimeAgo from "react-timeago";
import JSONPretty from "react-json-pretty";
import moment from "moment";
import "react-json-pretty/themes/adventure_time.css";
import { useState } from "react";
import clsx from "clsx";

export const getServerSideProps = (context) => ({
	props: { extrinsicId: context?.params?.id },
});

export default function Extrinsic({ extrinsicId }) {
	const query = useGetExtrinsicQuery(graphQLClient, { extrinsicId });
	const data = query?.data?.archive?.extrinsic_by_pk;

	return (
		<ContainerLayout>
			<PageHeader
				title={`Extrinsic # ${formatExtrinsicId(extrinsicId)}`}
				icon={<CubeIcon className="my-auto h-5 pr-3" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={`Extrinsic ${formatExtrinsicId(extrinsicId)}`} />
			) : (
				<>
					<div className="mt-5 overflow-hidden rounded-md border border-gray-100 bg-white shadow-md">
						<div className="px-4 py-5 sm:p-0">
							<dl className="sm:divide-y sm:divide-gray-200">
								<DetailsLayout.Wrapper>
									<DetailsLayout.Title title="Timestamp" />
									<DetailsLayout.Data>
										{moment(data.block.timestamp).format("LLL")}{" "}
										<span className="ml-3 text-xs">
											<TimeAgo date={data.block.timestamp} />
										</span>
									</DetailsLayout.Data>
								</DetailsLayout.Wrapper>

								<DetailsLayout.Wrapper>
									<DetailsLayout.Title title="Block" />
									<DetailsLayout.Data>{data.block.height}</DetailsLayout.Data>
								</DetailsLayout.Wrapper>

								<DetailsLayout.Wrapper>
									<DetailsLayout.Title title="Status" />
									<DetailsLayout.Data>
										<div className="flex flex-row space-x-3">
											<BlockFinalizedIcon status={true} />
										</div>
									</DetailsLayout.Data>
								</DetailsLayout.Wrapper>

								<DetailsLayout.Wrapper>
									<DetailsLayout.Title title="Hash" />
									<DetailsLayout.Data>{data.hash}</DetailsLayout.Data>
								</DetailsLayout.Wrapper>

								{[data.calls[0]].map((call) => {
									const tx = call.args.transaction.value;

									return (
										<>
											<DetailsLayout.Wrapper>
												<DetailsLayout.Title title="Method" />
												<DetailsLayout.Data>{call.name}</DetailsLayout.Data>
											</DetailsLayout.Wrapper>

											<DetailsLayout.Wrapper>
												<DetailsLayout.Title title="Nonce" />
												<DetailsLayout.Data>{tx.nonce[0]}</DetailsLayout.Data>
											</DetailsLayout.Wrapper>

											<DetailsLayout.Wrapper>
												<DetailsLayout.Title title="Gas Limit" />
												<DetailsLayout.Data>
													{tx.gasLimit[0]}
												</DetailsLayout.Data>
											</DetailsLayout.Wrapper>

											<DetailsLayout.Wrapper>
												<DetailsLayout.Title title="Input Data" />
												<DetailsLayout.Data dataClassName="break-all">
													{tx.input}
												</DetailsLayout.Data>
											</DetailsLayout.Wrapper>

											<DetailsLayout.Wrapper>
												<DetailsLayout.Title title="Value" />
												<DetailsLayout.Data>{tx.value[0]}</DetailsLayout.Data>
											</DetailsLayout.Wrapper>

											<DetailsLayout.Wrapper>
												<DetailsLayout.Title title="Args" />
												<DetailsLayout.Data dataClassName="max-w-fit">
													<div className="h-64 overflow-scroll rounded bg-black p-2">
														<JSONPretty id="json-pretty" data={tx} />
													</div>
												</DetailsLayout.Data>
											</DetailsLayout.Wrapper>
										</>
									);
								})}

								<DetailsLayout.Wrapper>
									<DetailsLayout.Title title="Signature" />
									<DetailsLayout.Data>{data.signature}</DetailsLayout.Data>
								</DetailsLayout.Wrapper>
							</dl>
						</div>
					</div>

					<Events events={data.events} />
				</>
			)}
		</ContainerLayout>
	);
}

const Events = ({ events }) => {
	const [viewArgs, toggleArgs] = useToggleArgs();

	return (
		<div className="mt-8 flex flex-col">
			<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-transfer min-w-full py-2 align-middle md:px-6 lg:px-8">
					<div className="overflow-hidden rounded-md border border-gray-100 shadow-md ">
						<table className="min-w-full divide-y divide-gray-300">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
									>
										Event ID
									</th>
									<th
										scope="col"
										className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
									>
										Action
									</th>
									<th
										scope="col"
										className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
									>
										Phase
									</th>
									<th
										scope="col"
										className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
									>
										Args
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white">
								{events.map((event, key) => (
									<>
										<tr key={key}>
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
												{formatExtrinsicId(event.id)}
											</td>

											<td className="space-y-4 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
												{event.name}

												{viewArgs.includes(key) && (
													<div className="max-h-32 max-w-xl overflow-scroll rounded bg-black p-2 text-xs">
														<JSONPretty data={event.args} />
													</div>
												)}
											</td>

											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
												{event.phase}
											</td>

											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
												<button
													onClick={() => toggleArgs(key)}
													className={clsx(
														"-ml-1 rounded border py-1 px-2 text-xs text-gray-600 shadow duration-300",
														viewArgs.includes(key) && "bg-gray-50"
													)}
												>
													{viewArgs.includes(key) ? "Hide" : "View"}
												</button>
											</td>
										</tr>
									</>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

const useToggleArgs = () => {
	const [viewArgs, setViewArgs] = useState([]);

	const toggleArgs = (key) => {
		setViewArgs((prev) => {
			const indexOfKey = prev.indexOf(key);

			if (indexOfKey !== -1) return prev.filter((item) => item !== key);

			return prev.concat(key);
		});
	};

	return [viewArgs, toggleArgs];
};
