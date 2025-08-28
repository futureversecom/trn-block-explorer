import { MONGO_API_KEY, ROOT_NETWORK } from "@/libs/constants";

export const fetchMongoData = async (
	slug: string,
	method: string,
	options: object
) => {
	const resp = await fetch(`${ROOT_NETWORK.MongoApiEndpoint}/${slug}`, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...options,
		}),
	});

	return await resp.json();
};
