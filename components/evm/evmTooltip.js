import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect } from "react";
import ReactTooltip from "react-tooltip";

export default function EVMTooltip({ message, children }) {
	useEffect(() => {
		ReactTooltip.rebuild();
	}, [message]);

	return (
		<Fragment>
			<p data-tip={message}>
				{children ? children : <QuestionMarkCircleIcon className="h-5 w-5" />}
			</p>
		</Fragment>
	);
}
