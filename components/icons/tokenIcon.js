import Image from "next/future/image";

import ASTOIcon from "@/components/icons/currencies/asto.png";
import EthIcon from "@/components/icons/currencies/eth.png";
import SyloIcon from "@/components/icons/currencies/sylo.png";
import USDCIcon from "@/components/icons/currencies/usdc.png";
import XRPIcon from "@/components/icons/currencies/xrp.png";

const Icons = {
	ASTO: ASTOIcon,
	SYLO: SyloIcon,
	ETH: EthIcon,
	XRP: XRPIcon,
	USDC: USDCIcon,
};

export default function TokenIcon({ symbol, height, width, iconClassName }) {
	if (!Icons?.[symbol]) return null;

	return (
		<Image
			alt={symbol}
			src={Icons[symbol]}
			width={width ?? height}
			height={height ?? width}
			className={iconClassName}
		/>
	);
}
