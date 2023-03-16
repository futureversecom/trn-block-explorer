import {
	BlocksWidget,
	ChaindataWidget,
	EvmTransactionsWidget,
	ExtrinsicsWidget,
} from "@/components";

export default function Home() {
	return (
		<div className="mx-auto flex h-full max-w-7xl  flex-col px-4 sm:px-6 lg:px-8">
			<div className="grid h-full grid-rows-[24rem_minmax(24rem,_1fr)] gap-5 sm:grid-cols-1 md:grid-cols-2">
				<ChaindataWidget />
				<BlocksWidget />
				<ExtrinsicsWidget />
				<EvmTransactionsWidget />
			</div>
		</div>
	);
}
