export default function LoadingBlock({ title, height, width = "w-full" }) {
	return (
		<div
			className={`grid ${height} ${width} items-center rounded-md border border-gray-100 bg-white px-4 py-3 text-center sm:px-6`}
		>
			<span className="font-mono font-thin uppercase text-gray-500">
				Retrieving {title}
			</span>
		</div>
	);
}
