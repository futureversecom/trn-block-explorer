import { useRouter } from "next/router";
import { CubeIcon } from "@heroicons/react/24/outline";
import {
	PageHeader,
	LoadingBlock,
	ContainerLayout,
	DetailsLayout,
} from "@/components";
import moment from "moment";
import Link from "next/link";
import { BlockFinalizedIcon } from "@/components/icons";
import TimeAgo from "react-timeago";
import { useGetBlockQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/adventure_time.css";

export default function Block() {
	const router = useRouter();
	const { blocknumber } = router.query;
	let query = usePolling({}, useGetBlockQuery, {
		height: parseInt(blocknumber),
	});

	query.data = query?.data?.archive?.block[0];

	const getPrevBlock = () => {
		if (parseInt(blocknumber) == 0) {
			return 0;
		} else {
			return parseInt(blocknumber) - 1;
		}
	};

	if (
		(!query.isLoading && !query.data) ||
		Number(blocknumber) >= Number.MAX_SAFE_INTEGER
	) {
		return "No data found";
	}

	return (
		<ContainerLayout>
			<PageHeader
				title={`Block # ${blocknumber}`}
				icon={<CubeIcon className="my-auto h-5 pr-3" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={`Block ${blocknumber}`} />
			) : (
				<DetailsLayout.Container>
					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Height" />
						<DetailsLayout.Data>{blocknumber}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Timestamp" />
						<DetailsLayout.Data>
							{moment(query.data.timestamp).format("LLL")}{" "}
							<span className="ml-3 text-xs">
								<TimeAgo date={query.data.timestamp} />
							</span>
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
						<DetailsLayout.Data>{query.data.hash}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Parent Hash" />
						<DetailsLayout.Data>
							<Link href={`/block/${getPrevBlock()}`}>
								<span className="cursor-pointer text-indigo-500">
									{query.data.parent_hash}
								</span>
							</Link>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="State Root" />
						<DetailsLayout.Data>{query.data.state_root}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Extrinsics Root" />
						<DetailsLayout.Data>
							{query.data.extrinsics_root}
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Events" />
						<DetailsLayout.Data>
							<div className="h-64 overflow-scroll rounded bg-black p-2">
								<JSONPretty id="json-pretty" data={query.data.events} />
							</div>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Extrinsics" />
						<DetailsLayout.Data>
							<div className="h-64 overflow-scroll rounded bg-black p-2">
								<JSONPretty id="json-pretty" data={query.data.extrinsics} />
							</div>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Spec Version" />
						<DetailsLayout.Data>{query.data.spec_id}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>
				</DetailsLayout.Container>
			)}
		</ContainerLayout>
	);
}
