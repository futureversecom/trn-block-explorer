import Head from "next/head";
import { Fragment } from "react";

export default function PageHeader({ title, icon, children }) {
	return (
		<Fragment>
			<PageHead title={title} />
			<div className="flex items-center py-3">
				{icon}
				<h3 className="text-md truncate font-bold leading-6 text-white">
					{title}
				</h3>
				{children}
			</div>
			<div className="relative">
				<div className="w-full border-t border-gray-300 py-3" />
			</div>
		</Fragment>
	);
}

export function PageHead({ title }) {
	return (
		<Head>
			<title>The Root Network Explorer - {title}</title>
			<meta name="description" content="Root Network Explorer by Futureverse" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
