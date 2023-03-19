import { ROOT_NETWORK } from "@/libs/constants";

export const executeGraphQuery = async (
	query: string,
	variables: Record<string, unknown>,
	accessToken: string
) => {
	if (!accessToken) return [];

	const fetchResponse = await fetch(ROOT_NETWORK.EvmGraphQlEndpoint, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	const data = await fetchResponse.json();

	return data;
};
