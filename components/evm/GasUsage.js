import { ethers } from "ethers";
import BigNumber from 'bignumber.js';
export default function GasUsage({ tx }) {
	const type = tx?.type;
	// 2 = EIP1559
	// 1 = ?
	// 0 = Legacy;

	let fee;

	if (type == 0) {
		const gasLimit = new BigNumber(tx.gasLimit);
		let gasPrice = new BigNumber(
			ethers.utils.formatUnits(String(tx.gasPrice), "gwei")
		);
		const totalFee = gasLimit.multipliedBy(gasPrice);
        const divisor = new BigNumber(10).pow(9);
		fee = totalFee.dividedBy(divisor).toString()
	}


    //  Gas Fees = Units of Gas Used * (BaseFee + PriorityFee)
    if (type == 2) {
		const gasLimit = new BigNumber(tx.gasLimit);
		let gasPrice = String(
			ethers.utils.formatUnits(String(tx.effectiveGasPrice), "gwei")
		);
        gasPrice = new BigNumber(gasPrice);
        let maxPriorityFeePerGas = String(
			ethers.utils.formatUnits(String(tx.maxPriorityFeePerGas), "gwei")
		);
        maxPriorityFeePerGas = new BigNumber(maxPriorityFeePerGas)
        gasPrice = gasPrice.plus(maxPriorityFeePerGas)
		const totalFee = gasLimit.multipliedBy(gasPrice); // Number(gasLimit) * Number(gasPrice);
        console.log(totalFee.toString())
        const divisor = new BigNumber(10).pow(9);
		fee = totalFee.dividedBy(divisor).toString()
	}

	const currency = "XRP";

	return (
		<span>
			{String(fee)} {currency}
		</span>
	);
}
