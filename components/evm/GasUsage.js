import { ethers } from "ethers";

export default function GasUsage({ tx }) {
	const type = tx?.type;
	// 2 = EIP1559
	// 1 = ?
	// 0 = Legacy;

	let fee;

	if (type == 0) {
		const gasLimit = ethers.BigNumber.from(tx.gasLimit);
		let gasPrice = String(
			ethers.utils.formatUnits(String(tx.gasPrice), "gwei")
		);
		if (gasPrice.includes(".")) {
			gasPrice = gasPrice.split(".")[0];
		}
		const totalFee = gasLimit.mul(gasPrice); // Number(gasLimit) * Number(gasPrice);
		fee = ethers.utils.formatUnits(String(totalFee), "gwei");
	}

	const currency = "XRP";

	return (
		<span>
			{String(fee)} {currency}
		</span>
	);
}
