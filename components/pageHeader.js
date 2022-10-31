import Head from "next/head";
import { Fragment } from "react";

export default function PageHeader({ title, icon, children }) {
	return (
		<Fragment>
			<Head>
				<title>Root Explorer - {title}</title>
				<meta
					name="description"
					content="Root Network Explorer by Futureverse"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex items-center py-3">
				{icon}
				<h3 className="text-md truncate font-bold leading-6 text-white">
					{title}
				</h3>
				{children}
			</div>
		</Fragment>
	);
}
