export default function Tooltip({ message, children }) {
	return (
		<div className="relative flex flex-col items-center group z-99">
			{children}
			<div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
				<span className="relative z-10 p-2 text-[0.625em] leading-none text-white whitespace-no-wrap bg-[#111] shadow-lg border border-white">{message}</span>
				<div className="w-3 h-3 -mt-2 rotate-45 bg-white"></div>
			</div>
		</div>
	);
};
