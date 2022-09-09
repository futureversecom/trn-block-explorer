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
													<div className="h-64 overflow-scroll">
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
				</>
			)}
		</ContainerLayout>
	);
}
