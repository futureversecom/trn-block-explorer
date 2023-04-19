type Docs = Record<string, unknown>;

interface Metadata {
	totalDocs: number;
}

interface AggregateResult {
	documents: Array<Docs>;
}

interface MetadataResult {
	documents: Array<{
		metadata: Array<Metadata>;
	}>;
}

export const formatMongoData = (
	agg: AggregateResult,
	meta: MetadataResult,
	page?: number,
	limit?: number
) => {
	const { documents: docs } = agg;
	const { totalDocs } = meta.documents[0].metadata?.[0] ?? { totalDocs: 0 };

	return {
		docs,
		page,
		limit,
		totalDocs,
		...(limit && { totalPages: Math.ceil(totalDocs / limit) }),
	};
};
