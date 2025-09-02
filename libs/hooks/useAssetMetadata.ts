import { useCallback, useEffect, useState } from "react";

import { useRootApi } from "@/libs/stores";

interface AssetMetadata {
	deposit: number;
	name: string;
	symbol: string;
	decimals: number;
	isFrozen: boolean;
}

export const useAssetMetadata = (assetId: number) => {
	const api = useRootApi();

	const [assetMetadata, setAssetMetadata] = useState<AssetMetadata>();

	const fetchData = useCallback(async () => {
		if (!api) return;

		const assetMetadataFromQuery = (
			await api.query.assets.metadata(assetId)
		).toJSON() as unknown as AssetMetadata;
		setAssetMetadata(assetMetadataFromQuery);
	}, [api, assetId]);

	useEffect(() => {
		fetchData().catch(console.error);
	}, [fetchData, assetId]); // listen to the change in best block value

	return assetMetadata;
};
