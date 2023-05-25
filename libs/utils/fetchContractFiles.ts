import { pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/TaskEither";

import { ROOT_NETWORK } from "@/libs/constants";

export async function fetchContractFiles(address: string) {
	const warnError = () =>
		console.warn(`Error fetching files for contract ${address}`);

	return await pipe(
		TE.tryCatch(
			() =>
				fetch(
					`https://sourcify.dev/server/files/${ROOT_NETWORK.ChainId}/${address}`
				).then((res) => res.json()),
			warnError
		),
		TE.match(
			() => null,
			(res) => {
				if (!res?.error) return res;

				warnError();
				return null;
			}
		)
	)();
}
