export default function LoadingBlock({ title, height, width = "w-full" }) {
	return (
		<div
			className={`grid ${height} ${width} items-center border border-gray-400 bg-transparent px-4 py-3 text-center sm:px-6`}
		>
			<span className="font-mono font-thin uppercase text-white">
				Retrieving {title}
			</span>
		</div>
	);
}
