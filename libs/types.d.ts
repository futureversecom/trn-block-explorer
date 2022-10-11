export interface Extrinsic {
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

export interface EvmTransaction {
	__typename?: "archive_frontier_ethereum_transaction";
	contract: any;
	sighash?: string | null;
	call: {
		__typename?: "archive_call";
		id: string;
		name: string;
		origin?: any | null;
		success: boolean;
		args?: any | null;
		block: { __typename?: "archive_block"; height: number; timestamp: any };
		events: Array<{
			__typename?: "archive_event";
			id: any;
			name: string;
			args?: any | null;
		}>;
	};
}

export type EvmTransactions = Array<EvmTransaction>;