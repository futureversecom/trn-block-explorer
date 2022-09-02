export type Extrinsic = {
	__typename?: "extrinsic";
	id: any;
	hash: any;
	calls: Array<{
		__typename?: "call";
		id: string;
		name: string;
		args?: any | null;
	}>;
	events_aggregate: {
		__typename?: "event_aggregate";
		aggregate?: {
			__typename?: "event_aggregate_fields";
			count: number;
		} | null;
	};
};

export type Extrinsics = Array<Extrinsic>;
