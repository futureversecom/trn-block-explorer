import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import EVMTooltip from "@/components/evm/evmTooltip";
import { formatUSD } from "@/libs/utils";

export default function GasUsage({ tx }) {
	const type = tx?.type;
	// 2 = EIP1559
	// 1 = ?
	// 0 = Legacy;

	let fee;
	let txUsdPrice;

	if (type == 0) {
		const gasLimit = new BigNumber(tx.gasLimit);
		let gasPrice = new BigNumber(
			ethers.utils.formatUnits(String(tx.gasPrice), "gwei")
		);
		const totalFee = gasLimit.multipliedBy(gasPrice);
		const divisor = new BigNumber(10).pow(9);
		fee = totalFee.dividedBy(divisor).toString();
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
		maxPriorityFeePerGas = new BigNumber(maxPriorityFeePerGas);
		gasPrice = gasPrice.plus(maxPriorityFeePerGas);
		const totalFee = gasLimit.multipliedBy(gasPrice); // Number(gasLimit) * Number(gasPrice);
		const divisor = new BigNumber(10).pow(9);
		fee = totalFee.dividedBy(divisor).toString();
	}

	const currency = "XRP";

	if (tx?.xrpPrice?.price) {
		txUsdPrice = formatUSD(
			parseFloat(
				new BigNumber(String(fee)).multipliedBy(
					new BigNumber(tx?.xrpPrice?.price)
				)
			)
		);
	}
	return (
		<div className="flex space-x-2">
			<span>
				{String(fee)} {currency}
			</span>
			{txUsdPrice ? (
				<div className="flex space-x-2">
					<span className="my-auto rounded bg-black bg-opacity-20 p-1 text-xs">
						<EVMTooltip message={`1 XRP @ ${formatUSD(tx?.xrpPrice?.price)}`}>
							{txUsdPrice}
						</EVMTooltip>
					</span>
				</div>
			) : (
				<Fragment />
			)}
		</div>
	);
}
