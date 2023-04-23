import { Fragment, useMemo, useState } from "react";

import { formatBalance, getAssetMetadata } from "@/libs/utils";

export const FormattedBalance = ({ balance, assetId, displaySymbol }) => {
	const [viewFull, setViewFull] = useState(false);

	const { symbol, decimals } = useMemo(() => {
		const assetIdOrMetadata = getAssetMetadata(String(assetId));

		if (!assetIdOrMetadata?.symbol)
			return {
				symbol: `Asset #${assetId}`,
				decimals: 6,
			};

		return assetIdOrMetadata;
	}, [assetId]);

	const amount = useMemo(() => {
		let [beforeDec, afterDec] = formatBalance(balance, decimals).split(".");
		if (afterDec) {
			if (!viewFull) afterDec = afterDec.slice(0, 6);
			return `${beforeDec}.${afterDec}`;
		} else {
			return beforeDec;
		}
	}, [balance, decimals, viewFull]);

	return (
		<p
			className="whitespace-nowrap"
			onMouseOver={() => setViewFull(true)}
			onMouseOut={() => setViewFull(false)}
		>
			{amount}
			{decimals > 6 && !viewFull && amount.includes(".") && <span>...</span>}
			{displaySymbol && <Fragment> {symbol}</Fragment>}
		</p>
	);
};
