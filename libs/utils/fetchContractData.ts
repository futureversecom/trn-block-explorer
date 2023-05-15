import { pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/TaskEither";

import { ROOT_NETWORK } from "@/libs/constants";
import { isContract } from "@/libs/evm-api";

export async function fetchContractData(address: string) {
	return await pipe(
		TE.Do,
		TE.bind("contractData", () =>
			TE.tryCatch(
				() => isContract(address),
				() => console.warn(`Error fetching bytecode for address ${address}`)
			)
		),
		TE.bind("files", () =>
			TE.tryCatch(
				() =>
					fetch(
						`https://sourcify.dev/server/files/${ROOT_NETWORK.ChainId}/${address}`
					).then((res) => res.json()),
				() => console.warn(`Error fetching files for address ${address}`)
			)
		),
		TE.match(
			(_err) => null,
			({ files, contractData }) => {
				if (!contractData?.isContract) throw new Error("Not contract data");

				return {
					files,
					...contractData,
				};
			}
		)
	)();
}
