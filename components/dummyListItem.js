export default function DummyListItem(numOfItems = 0) {
	const dummyArray = Array(numOfItems).fill();
	return dummyArray?.map((item, idx) => (
		<div key={idx} className="block animate-pulse space-y-2 py-3">
			<div className="my-1.5 flex flex-row justify-between">
				<div className="w-full space-y-3">
					<div className="grid grid-cols-8 gap-x-10 gap-y-2">
						<div className="col-span-2 h-3 rounded bg-gray-400"></div>
					</div>
					<div className="grid grid-cols-8 gap-x-10 gap-y-2">
						<div className="col-span-4 h-2 rounded bg-gray-400"></div>
					</div>
				</div>
			</div>
		</div>
	));
}
