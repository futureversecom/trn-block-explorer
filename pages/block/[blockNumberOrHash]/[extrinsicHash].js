import { isHex } from "@polkadot/util";

import { GetExtrinsicIdFromHashAndBlockHashDocument } from "@/libs/api/generated.ts";
import { graphQLClient } from "@/libs/client";

export const getServerSideProps = async (context) => {
	const numberOrHash = context?.params?.blockNumberOrHash;
	const extrinsicHash = context?.params?.extrinsicHash;

	const returnNotFound = () => ({ notFound: true });

	const returnRedirect = async () => {
		const byHashResponse = await graphQLClient.request(
			GetExtrinsicIdFromHashAndBlockHashDocument,
			{
				extrinsicHash,
				blockHash: numberOrHash,
			}
		);

		return byHashResponse?.archive?.extrinsic.length &&
			byHashResponse?.archive?.extrinsic[0].id
			? {
					// redirect to /extrinsic/{extrinsic-id}
					redirect: {
						destination: `/extrinsic/${byHashResponse?.archive?.extrinsic[0].id}`,
						permanent: false,
					},
			  }
			: returnNotFound();
	};

	// if numberOrHash and extrinsicHash values are hash values
	return isHex(numberOrHash, 256) && isHex(extrinsicHash, 256)
		? returnRedirect()
		: returnNotFound();
};

// just a dummy component to handle /block/{blochHash}/{extrinsicHash} route
// and redirect it to /extrinsic/{extrinsicId}
export default function BlockByHashAndExtrinsicHash() {
	return;
}
