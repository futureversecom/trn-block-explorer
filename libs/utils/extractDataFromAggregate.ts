type Docs = Record<string, unknown>;

interface Metadata {
	totalDocs: number;
}

interface AggregateResult {
	documents: Array<{
		data: Array<Docs>;
		metadata: Array<Metadata>;
	}>;
}

/*
 * Formats the response from a MongoDB aggregate query with the following `$facet`
 *	{
 *		$facet: {
 *			metadata: [{ $count: "totalDocs" }],
 *				data: [{ $skip: page * limit }, { $limit: limit }],
 *			},
 *		},
 *	}
 */
export const extractDataFromAggregate = (
	agg: AggregateResult,
	page?: number,
	limit?: number
) => {
	const { data: docs, metadata } = agg.documents[0];
	const { totalDocs } = metadata[0];

	return {
		docs,
		page,
		limit,
		totalDocs,
		...(limit && { totalPages: Math.floor(totalDocs / limit) }),
	};
};
