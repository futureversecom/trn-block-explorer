import { useEvmQuery } from "./";

const GetPrice = `query GetXrpPrice ($name: String!) {
  prices(query: { name: $name }) {
    price
  }
}`;

export const usePriceQuery = (asset: string) => {
	const query = useEvmQuery({
		query: GetPrice,
		variables: { name: asset },
		refetchInterval: 15000,
	});

	return {
		...query,
		data: query?.data?.prices?.[0]?.price,
	};
};
