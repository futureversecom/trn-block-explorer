const InOutLabel = ({ type }) => {
	const incoming = "text-green-700";
	const outgoing = "text-orange-400";
	const self = "text-white";
	const theType = type.toLowerCase();

	const classes = {
		out: outgoing,
		in: incoming,
		self: self,
	};
	return (
		<div className={`w-8 p-1 text-center ${classes[theType]} capitalize`}>
			{type}
		</div>
	);
};

export default InOutLabel;
