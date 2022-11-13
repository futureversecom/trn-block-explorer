import ReactLoading from "react-loading";

export default function LoadingLayout({ query, children }) {
	const { isLoading, error } = query;

	if (query?.data) return children;

	return (
		<div className="grid h-96 place-items-center border border-gray-300 py-10 text-white">
			<div>
				{isLoading && (
					<div>
						<Text text="Retrieving data, please wait..." />
						<div className="mx-auto">
							<ReactLoading type={"balls"} color="#fff" className="mx-auto" />
						</div>
					</div>
				)}
				{error && (
					<div className="flex flex-col space-y-3">
						<Text text="An error occured" />
						<span>{error?.message}</span>
					</div>
				)}
			</div>
		</div>
	);
}

const Text = ({ text }) => {
	return <span className="text-xl">{text}</span>;
};
