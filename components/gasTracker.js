import clsx from "clsx";

export default function GasTracker() {
	return (
		<span
			className={clsx(
				"hidden h-5 whitespace-nowrap py-1 px-2 text-center align-baseline font-gilroy-extrabold text-xs leading-none md:inline-block"
			)}
		>
			⛽ <span>15000</span> gwei
		</span>
	);
}
