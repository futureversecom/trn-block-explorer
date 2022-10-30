const InOutLabel = ({ type }) => {
	const incoming = "bg-green-300 text-green-800";
	const outgoing = "bg-orange-300 text-orange-800";
	const self = "bg-blue-300 text-blue-800";
	const theType = type.toLowerCase();

	const classes = {
		out: outgoing,
		in: incoming,
		self: self,
	};
	return (
		<div
			className={`w-8 p-1 text-center font-bold ${classes[theType]} capitalize`}
		>
			{type}
		</div>
	);
};

export default InOutLabel;
