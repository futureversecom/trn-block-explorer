import { MONGO_API_KEY, ROOT_NETWORK } from "@/libs/constants";

export const fetchEvmData = async (
	slug: string,
	collection: string,
	options: object
) => {
	const resp = await fetch(`${ROOT_NETWORK.MongoApiEndpoint}/${slug}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"api-key": MONGO_API_KEY,
		},
		body: JSON.stringify({
			dataSource: ROOT_NETWORK.MongoDatabase,
			database: ROOT_NETWORK.MongoDatabase,
			collection,
			...options,
		}),
	});

	return await resp.json();
};
