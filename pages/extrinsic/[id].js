import { CubeIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import TimeAgo from "react-timeago";

import {
	ContainerLayout,
	DetailsLayout,
	LoadingBlock,
	PageHeader,
	TableLayout,
} from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import { useGetExtrinsicQuery } from "@/libs/api/generated";
import { graphQLClient } from "@/libs/client";
import { formatExtrinsicId } from "@/libs/utils";

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
					<DetailsLayout.Container>
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

							<DetailsLayout.Data dataClassName="!text-indigo-500">
								<Link href={`/block/${data.block.height}`}>
									{data.block.height}
								</Link>
							</DetailsLayout.Data>
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

						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Method" />
							<DetailsLayout.Data>{data.calls[0].name}</DetailsLayout.Data>
						</DetailsLayout.Wrapper>

						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Signature" />
							<DetailsLayout.Data dataClassName="break-all">
								{" "}
								{data?.signature?.signature ?? "?"}
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>
					</DetailsLayout.Container>

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
						<TableLayout.Table>
							<thead className="bg-gray-50">
								<tr>
									<TableLayout.HeadItem text="Event ID" />
									<TableLayout.HeadItem text="Action" />
									<TableLayout.HeadItem text="Phase" />
									<TableLayout.HeadItem text="Args" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white">
								{events.map((event, key) => (
									<>
										<tr key={key}>
											<TableLayout.Data>
												{formatExtrinsicId(event.id)}
											</TableLayout.Data>

											<TableLayout.Data dataClassName="space-y-4">
												{event.name}

												{viewArgs.includes(key) && (
													<div className="max-h-32 max-w-xl overflow-scroll rounded bg-gray-100 p-2 text-xs">
														<JSONPretty data={event.args} />
													</div>
												)}
											</TableLayout.Data>

											<TableLayout.Data>{event.phase}</TableLayout.Data>

											<TableLayout.Data>
												<button
													onClick={() => toggleArgs(key)}
													className={clsx(
														"-ml-1 rounded border py-1 px-2 text-xs text-gray-600 shadow duration-300",
														viewArgs.includes(key) && "bg-gray-50"
													)}
												>
													{viewArgs.includes(key) ? "Hide" : "View"}
												</button>
											</TableLayout.Data>
										</tr>
									</>
								))}
							</tbody>
						</TableLayout.Table>
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
