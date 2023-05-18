import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function CopyToClipBoard({ value, className }) {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied) {
			setTimeout(() => {
				setCopied(false);
			}, 700);
		}
	}, [copied]);

	const copyThis = async () => {
		if ("clipboard" in navigator) {
			await navigator.clipboard.writeText(value);
		} else {
			document.execCommand("copy", true, value);
		}
		if (!copied) {
			setCopied(true);
		}
	};

	const classes = "h-5 w-5 text-gray-600";

	return (
		<span
			onClick={() => {
				copyThis();
			}}
			className={clsx("block cursor-pointer", className)}
		>
			{copied ? (
				<CheckIcon className={classes} />
			) : (
				<ClipboardIcon className={classes} />
			)}
		</span>
	);
}
