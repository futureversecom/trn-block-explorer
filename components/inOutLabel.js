const InOutLabel = ({ type }) => {
	const incoming = "bg-green-300 text-green-800";
	const outgoing = "bg-orange-300 text-orange-800";
	const theType = type.toLowerCase();
	return (
		<div
			className={`w-8 p-1 text-center font-bold ${
				theType === "out" ? outgoing : incoming
			} capitalize`}
		>
			{type}
		</div>
	);
};

export default InOutLabel;
