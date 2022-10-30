export default function Tooltip({ message, children }) {
	return (
		<div className="z-99 group relative flex flex-col items-center">
			{children}
			<div className="absolute bottom-0 mb-6 flex hidden flex-col items-center group-hover:flex">
				<span className="whitespace-no-wrap relative z-10 border border-white bg-[#111] p-2 text-[0.825em] leading-none text-white shadow-lg">
					{message}
				</span>
				<div className="-mt-2 h-3 w-3 rotate-45 bg-white"></div>
			</div>
		</div>
	);
}
