import { BlocksWidget, ChaindataWidget, ExtrinsicsWidget } from "@/components";

export default function Home() {
	return (
		<div>
			<div className="overflow-hidden lg:pb-32 xl:pb-36 ">
				<div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8">
					<div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2">
						<ChaindataWidget />
						<BlocksWidget />
					</div>
				</div>
				<div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8">
					<div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2">
						<ExtrinsicsWidget />
					</div>
				</div>
			</div>
		</div>
	);
}
