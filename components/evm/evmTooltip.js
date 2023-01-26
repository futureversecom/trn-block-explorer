import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect } from "react";
import ReactTooltip from "react-tooltip";

export default function EVMTooltip({ message, children }) {
	useEffect(() => {
		ReactTooltip.rebuild();
	}, [message]);

	return (
		<Fragment>
			<p data-tip={message}>
				{children ? (
					children
				) : (
					<InformationCircleIcon className="h-4 w-4 text-white text-opacity-20" />
				)}
			</p>
		</Fragment>
	);
}
