import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

export default function EVMTooltip({ message, children }) {
	return (
		<Fragment>
			<p data-tip={message}>
				{children ? children : <QuestionMarkCircleIcon className="h-5 w-5" />}
			</p>
		</Fragment>
	);
}
