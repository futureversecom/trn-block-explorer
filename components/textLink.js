import clsx from "clsx";
import Link from "next/link";

export const TextLink = ({ text, link, linkClassName }) => {
	return (
		<span
			className={clsx(
				linkClassName,
				"cursor-pointer text-indigo-500 hover:text-white"
			)}
		>
			<Link href={link}>{text}</Link>
		</span>
	);
};
