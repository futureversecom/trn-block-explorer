import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
	client: GraphQLClient,
	query: string,
	variables?: TVariables,
	headers?: RequestInit["headers"]
) {
	return async (): Promise<TData> =>
		client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	_text: any;
	bpchar: any;
	jsonb: any;
	numeric: any;
	timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["Boolean"]>;
	_gt?: InputMaybe<Scalars["Boolean"]>;
	_gte?: InputMaybe<Scalars["Boolean"]>;
	_in?: InputMaybe<Array<Scalars["Boolean"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["Boolean"]>;
	_lte?: InputMaybe<Scalars["Boolean"]>;
	_neq?: InputMaybe<Scalars["Boolean"]>;
	_nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["Int"]>;
	_gt?: InputMaybe<Scalars["Int"]>;
	_gte?: InputMaybe<Scalars["Int"]>;
	_in?: InputMaybe<Array<Scalars["Int"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["Int"]>;
	_lte?: InputMaybe<Scalars["Int"]>;
	_neq?: InputMaybe<Scalars["Int"]>;
	_nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["String"]>;
	_gt?: InputMaybe<Scalars["String"]>;
	_gte?: InputMaybe<Scalars["String"]>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars["String"]>;
	_in?: InputMaybe<Array<Scalars["String"]>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars["String"]>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars["String"]>;
	_lt?: InputMaybe<Scalars["String"]>;
	_lte?: InputMaybe<Scalars["String"]>;
	_neq?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars["String"]>;
	_nin?: InputMaybe<Array<Scalars["String"]>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars["String"]>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars["String"]>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["_text"]>;
	_gt?: InputMaybe<Scalars["_text"]>;
	_gte?: InputMaybe<Scalars["_text"]>;
	_in?: InputMaybe<Array<Scalars["_text"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["_text"]>;
	_lte?: InputMaybe<Scalars["_text"]>;
	_neq?: InputMaybe<Scalars["_text"]>;
	_nin?: InputMaybe<Array<Scalars["_text"]>>;
};

export type Archive_Archive_Query = {
	__typename?: "archive_archive_query";
	/** fetch data from the table: "block" */
	block: Array<Archive_Block>;
	/** fetch aggregated fields from the table: "block" */
	block_aggregate: Archive_Block_Aggregate;
	/** fetch data from the table: "block" using primary key columns */
	block_by_pk?: Maybe<Archive_Block>;
	/** fetch data from the table: "call" */
	call: Array<Archive_Call>;
	/** fetch aggregated fields from the table: "call" */
	call_aggregate: Archive_Call_Aggregate;
	/** fetch data from the table: "call" using primary key columns */
	call_by_pk?: Maybe<Archive_Call>;
	/** fetch data from the table: "contracts_contract_emitted" */
	contracts_contract_emitted: Array<Archive_Contracts_Contract_Emitted>;
	/** fetch aggregated fields from the table: "contracts_contract_emitted" */
	contracts_contract_emitted_aggregate: Archive_Contracts_Contract_Emitted_Aggregate;
	/** fetch data from the table: "contracts_contract_emitted" using primary key columns */
	contracts_contract_emitted_by_pk?: Maybe<Archive_Contracts_Contract_Emitted>;
	/** fetch data from the table: "event" */
	event: Array<Archive_Event>;
	/** fetch aggregated fields from the table: "event" */
	event_aggregate: Archive_Event_Aggregate;
	/** fetch data from the table: "event" using primary key columns */
	event_by_pk?: Maybe<Archive_Event>;
	/** fetch data from the table: "extrinsic" */
	extrinsic: Array<Archive_Extrinsic>;
	/** fetch aggregated fields from the table: "extrinsic" */
	extrinsic_aggregate: Archive_Extrinsic_Aggregate;
	/** fetch data from the table: "extrinsic" using primary key columns */
	extrinsic_by_pk?: Maybe<Archive_Extrinsic>;
	/** fetch data from the table: "frontier_ethereum_transaction" */
	frontier_ethereum_transaction: Array<Archive_Frontier_Ethereum_Transaction>;
	/** fetch aggregated fields from the table: "frontier_ethereum_transaction" */
	frontier_ethereum_transaction_aggregate: Archive_Frontier_Ethereum_Transaction_Aggregate;
	/** fetch data from the table: "frontier_ethereum_transaction" using primary key columns */
	frontier_ethereum_transaction_by_pk?: Maybe<Archive_Frontier_Ethereum_Transaction>;
	/** fetch data from the table: "frontier_evm_log" */
	frontier_evm_log: Array<Archive_Frontier_Evm_Log>;
	/** fetch aggregated fields from the table: "frontier_evm_log" */
	frontier_evm_log_aggregate: Archive_Frontier_Evm_Log_Aggregate;
	/** fetch data from the table: "frontier_evm_log" using primary key columns */
	frontier_evm_log_by_pk?: Maybe<Archive_Frontier_Evm_Log>;
	/** fetch data from the table: "metadata" */
	metadata: Array<Archive_Metadata>;
	/** fetch aggregated fields from the table: "metadata" */
	metadata_aggregate: Archive_Metadata_Aggregate;
	/** fetch data from the table: "metadata" using primary key columns */
	metadata_by_pk?: Maybe<Archive_Metadata>;
};

export type Archive_Archive_QueryBlockArgs = {
	distinct_on?: InputMaybe<Array<Archive_Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Block_Order_By>>;
	where?: InputMaybe<Archive_Block_Bool_Exp>;
};

export type Archive_Archive_QueryBlock_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Block_Order_By>>;
	where?: InputMaybe<Archive_Block_Bool_Exp>;
};

export type Archive_Archive_QueryBlock_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Archive_Archive_QueryCallArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

export type Archive_Archive_QueryCall_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

export type Archive_Archive_QueryCall_By_PkArgs = {
	id: Scalars["String"];
};

export type Archive_Archive_QueryContracts_Contract_EmittedArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Contracts_Contract_Emitted_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Order_By>>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

export type Archive_Archive_QueryContracts_Contract_Emitted_AggregateArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Contracts_Contract_Emitted_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Order_By>>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

export type Archive_Archive_QueryContracts_Contract_Emitted_By_PkArgs = {
	event_id: Scalars["bpchar"];
};

export type Archive_Archive_QueryEventArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

export type Archive_Archive_QueryEvent_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

export type Archive_Archive_QueryEvent_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Archive_Archive_QueryExtrinsicArgs = {
	distinct_on?: InputMaybe<Array<Archive_Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Extrinsic_Order_By>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

export type Archive_Archive_QueryExtrinsic_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Extrinsic_Order_By>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

export type Archive_Archive_QueryExtrinsic_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Archive_Archive_QueryFrontier_Ethereum_TransactionArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Frontier_Ethereum_Transaction_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
};

export type Archive_Archive_QueryFrontier_Ethereum_Transaction_AggregateArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Frontier_Ethereum_Transaction_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
};

export type Archive_Archive_QueryFrontier_Ethereum_Transaction_By_PkArgs = {
	call_id: Scalars["String"];
};

export type Archive_Archive_QueryFrontier_Evm_LogArgs = {
	distinct_on?: InputMaybe<Array<Archive_Frontier_Evm_Log_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Evm_Log_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

export type Archive_Archive_QueryFrontier_Evm_Log_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Frontier_Evm_Log_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Evm_Log_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

export type Archive_Archive_QueryFrontier_Evm_Log_By_PkArgs = {
	event_id: Scalars["bpchar"];
};

export type Archive_Archive_QueryMetadataArgs = {
	distinct_on?: InputMaybe<Array<Archive_Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Metadata_Order_By>>;
	where?: InputMaybe<Archive_Metadata_Bool_Exp>;
};

export type Archive_Archive_QueryMetadata_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Metadata_Order_By>>;
	where?: InputMaybe<Archive_Metadata_Bool_Exp>;
};

export type Archive_Archive_QueryMetadata_By_PkArgs = {
	id: Scalars["String"];
};

export type Archive_Archive_Subscription = {
	__typename?: "archive_archive_subscription";
	/** fetch data from the table: "block" */
	block: Array<Archive_Block>;
	/** fetch aggregated fields from the table: "block" */
	block_aggregate: Archive_Block_Aggregate;
	/** fetch data from the table: "block" using primary key columns */
	block_by_pk?: Maybe<Archive_Block>;
	/** fetch data from the table in a streaming manner : "block" */
	block_stream: Array<Archive_Block>;
	/** fetch data from the table: "call" */
	call: Array<Archive_Call>;
	/** fetch aggregated fields from the table: "call" */
	call_aggregate: Archive_Call_Aggregate;
	/** fetch data from the table: "call" using primary key columns */
	call_by_pk?: Maybe<Archive_Call>;
	/** fetch data from the table in a streaming manner : "call" */
	call_stream: Array<Archive_Call>;
	/** fetch data from the table: "contracts_contract_emitted" */
	contracts_contract_emitted: Array<Archive_Contracts_Contract_Emitted>;
	/** fetch aggregated fields from the table: "contracts_contract_emitted" */
	contracts_contract_emitted_aggregate: Archive_Contracts_Contract_Emitted_Aggregate;
	/** fetch data from the table: "contracts_contract_emitted" using primary key columns */
	contracts_contract_emitted_by_pk?: Maybe<Archive_Contracts_Contract_Emitted>;
	/** fetch data from the table in a streaming manner : "contracts_contract_emitted" */
	contracts_contract_emitted_stream: Array<Archive_Contracts_Contract_Emitted>;
	/** fetch data from the table: "event" */
	event: Array<Archive_Event>;
	/** fetch aggregated fields from the table: "event" */
	event_aggregate: Archive_Event_Aggregate;
	/** fetch data from the table: "event" using primary key columns */
	event_by_pk?: Maybe<Archive_Event>;
	/** fetch data from the table in a streaming manner : "event" */
	event_stream: Array<Archive_Event>;
	/** fetch data from the table: "extrinsic" */
	extrinsic: Array<Archive_Extrinsic>;
	/** fetch aggregated fields from the table: "extrinsic" */
	extrinsic_aggregate: Archive_Extrinsic_Aggregate;
	/** fetch data from the table: "extrinsic" using primary key columns */
	extrinsic_by_pk?: Maybe<Archive_Extrinsic>;
	/** fetch data from the table in a streaming manner : "extrinsic" */
	extrinsic_stream: Array<Archive_Extrinsic>;
	/** fetch data from the table: "frontier_ethereum_transaction" */
	frontier_ethereum_transaction: Array<Archive_Frontier_Ethereum_Transaction>;
	/** fetch aggregated fields from the table: "frontier_ethereum_transaction" */
	frontier_ethereum_transaction_aggregate: Archive_Frontier_Ethereum_Transaction_Aggregate;
	/** fetch data from the table: "frontier_ethereum_transaction" using primary key columns */
	frontier_ethereum_transaction_by_pk?: Maybe<Archive_Frontier_Ethereum_Transaction>;
	/** fetch data from the table in a streaming manner : "frontier_ethereum_transaction" */
	frontier_ethereum_transaction_stream: Array<Archive_Frontier_Ethereum_Transaction>;
	/** fetch data from the table: "frontier_evm_log" */
	frontier_evm_log: Array<Archive_Frontier_Evm_Log>;
	/** fetch aggregated fields from the table: "frontier_evm_log" */
	frontier_evm_log_aggregate: Archive_Frontier_Evm_Log_Aggregate;
	/** fetch data from the table: "frontier_evm_log" using primary key columns */
	frontier_evm_log_by_pk?: Maybe<Archive_Frontier_Evm_Log>;
	/** fetch data from the table in a streaming manner : "frontier_evm_log" */
	frontier_evm_log_stream: Array<Archive_Frontier_Evm_Log>;
	/** fetch data from the table: "metadata" */
	metadata: Array<Archive_Metadata>;
	/** fetch aggregated fields from the table: "metadata" */
	metadata_aggregate: Archive_Metadata_Aggregate;
	/** fetch data from the table: "metadata" using primary key columns */
	metadata_by_pk?: Maybe<Archive_Metadata>;
	/** fetch data from the table in a streaming manner : "metadata" */
	metadata_stream: Array<Archive_Metadata>;
};

export type Archive_Archive_SubscriptionBlockArgs = {
	distinct_on?: InputMaybe<Array<Archive_Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Block_Order_By>>;
	where?: InputMaybe<Archive_Block_Bool_Exp>;
};

export type Archive_Archive_SubscriptionBlock_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Block_Order_By>>;
	where?: InputMaybe<Archive_Block_Bool_Exp>;
};

export type Archive_Archive_SubscriptionBlock_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Archive_Archive_SubscriptionBlock_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Block_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Block_Bool_Exp>;
};

export type Archive_Archive_SubscriptionCallArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

export type Archive_Archive_SubscriptionCall_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

export type Archive_Archive_SubscriptionCall_By_PkArgs = {
	id: Scalars["String"];
};

export type Archive_Archive_SubscriptionCall_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Call_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

export type Archive_Archive_SubscriptionContracts_Contract_EmittedArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Contracts_Contract_Emitted_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Order_By>>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

export type Archive_Archive_SubscriptionContracts_Contract_Emitted_AggregateArgs =
	{
		distinct_on?: InputMaybe<
			Array<Archive_Contracts_Contract_Emitted_Select_Column>
		>;
		limit?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		order_by?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Order_By>>;
		where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
	};

export type Archive_Archive_SubscriptionContracts_Contract_Emitted_By_PkArgs = {
	event_id: Scalars["bpchar"];
};

export type Archive_Archive_SubscriptionContracts_Contract_Emitted_StreamArgs =
	{
		batch_size: Scalars["Int"];
		cursor: Array<
			InputMaybe<Archive_Contracts_Contract_Emitted_Stream_Cursor_Input>
		>;
		where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
	};

export type Archive_Archive_SubscriptionEventArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

export type Archive_Archive_SubscriptionEvent_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

export type Archive_Archive_SubscriptionEvent_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Archive_Archive_SubscriptionEvent_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Event_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

export type Archive_Archive_SubscriptionExtrinsicArgs = {
	distinct_on?: InputMaybe<Array<Archive_Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Extrinsic_Order_By>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

export type Archive_Archive_SubscriptionExtrinsic_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Extrinsic_Order_By>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

export type Archive_Archive_SubscriptionExtrinsic_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Archive_Archive_SubscriptionExtrinsic_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Extrinsic_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

export type Archive_Archive_SubscriptionFrontier_Ethereum_TransactionArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Frontier_Ethereum_Transaction_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
};

export type Archive_Archive_SubscriptionFrontier_Ethereum_Transaction_AggregateArgs =
	{
		distinct_on?: InputMaybe<
			Array<Archive_Frontier_Ethereum_Transaction_Select_Column>
		>;
		limit?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		order_by?: InputMaybe<
			Array<Archive_Frontier_Ethereum_Transaction_Order_By>
		>;
		where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
	};

export type Archive_Archive_SubscriptionFrontier_Ethereum_Transaction_By_PkArgs =
	{
		call_id: Scalars["String"];
	};

export type Archive_Archive_SubscriptionFrontier_Ethereum_Transaction_StreamArgs =
	{
		batch_size: Scalars["Int"];
		cursor: Array<
			InputMaybe<Archive_Frontier_Ethereum_Transaction_Stream_Cursor_Input>
		>;
		where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
	};

export type Archive_Archive_SubscriptionFrontier_Evm_LogArgs = {
	distinct_on?: InputMaybe<Array<Archive_Frontier_Evm_Log_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Evm_Log_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

export type Archive_Archive_SubscriptionFrontier_Evm_Log_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Frontier_Evm_Log_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Evm_Log_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

export type Archive_Archive_SubscriptionFrontier_Evm_Log_By_PkArgs = {
	event_id: Scalars["bpchar"];
};

export type Archive_Archive_SubscriptionFrontier_Evm_Log_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Frontier_Evm_Log_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

export type Archive_Archive_SubscriptionMetadataArgs = {
	distinct_on?: InputMaybe<Array<Archive_Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Metadata_Order_By>>;
	where?: InputMaybe<Archive_Metadata_Bool_Exp>;
};

export type Archive_Archive_SubscriptionMetadata_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Metadata_Order_By>>;
	where?: InputMaybe<Archive_Metadata_Bool_Exp>;
};

export type Archive_Archive_SubscriptionMetadata_By_PkArgs = {
	id: Scalars["String"];
};

export type Archive_Archive_SubscriptionMetadata_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Metadata_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Metadata_Bool_Exp>;
};

/** columns and relationships of "block" */
export type Archive_Block = {
	__typename?: "archive_block";
	/** An array relationship */
	calls: Array<Archive_Call>;
	/** An aggregate relationship */
	calls_aggregate: Archive_Call_Aggregate;
	/** An array relationship */
	events: Array<Archive_Event>;
	/** An aggregate relationship */
	events_aggregate: Archive_Event_Aggregate;
	/** An array relationship */
	extrinsics: Array<Archive_Extrinsic>;
	/** An aggregate relationship */
	extrinsics_aggregate: Archive_Extrinsic_Aggregate;
	extrinsics_root: Scalars["bpchar"];
	hash: Scalars["bpchar"];
	height: Scalars["Int"];
	id: Scalars["bpchar"];
	parent_hash: Scalars["bpchar"];
	spec_id: Scalars["String"];
	state_root: Scalars["bpchar"];
	timestamp: Scalars["timestamptz"];
	validator?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "block" */
export type Archive_BlockCallsArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

/** columns and relationships of "block" */
export type Archive_BlockCalls_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

/** columns and relationships of "block" */
export type Archive_BlockEventsArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

/** columns and relationships of "block" */
export type Archive_BlockEvents_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

/** columns and relationships of "block" */
export type Archive_BlockExtrinsicsArgs = {
	distinct_on?: InputMaybe<Array<Archive_Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Extrinsic_Order_By>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

/** columns and relationships of "block" */
export type Archive_BlockExtrinsics_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Extrinsic_Order_By>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

/** aggregated selection of "block" */
export type Archive_Block_Aggregate = {
	__typename?: "archive_block_aggregate";
	aggregate?: Maybe<Archive_Block_Aggregate_Fields>;
	nodes: Array<Archive_Block>;
};

/** aggregate fields of "block" */
export type Archive_Block_Aggregate_Fields = {
	__typename?: "archive_block_aggregate_fields";
	avg?: Maybe<Archive_Block_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Archive_Block_Max_Fields>;
	min?: Maybe<Archive_Block_Min_Fields>;
	stddev?: Maybe<Archive_Block_Stddev_Fields>;
	stddev_pop?: Maybe<Archive_Block_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Archive_Block_Stddev_Samp_Fields>;
	sum?: Maybe<Archive_Block_Sum_Fields>;
	var_pop?: Maybe<Archive_Block_Var_Pop_Fields>;
	var_samp?: Maybe<Archive_Block_Var_Samp_Fields>;
	variance?: Maybe<Archive_Block_Variance_Fields>;
};

/** aggregate fields of "block" */
export type Archive_Block_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Archive_Block_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Archive_Block_Avg_Fields = {
	__typename?: "archive_block_avg_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Archive_Block_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Block_Bool_Exp>>;
	_not?: InputMaybe<Archive_Block_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Block_Bool_Exp>>;
	calls?: InputMaybe<Archive_Call_Bool_Exp>;
	events?: InputMaybe<Archive_Event_Bool_Exp>;
	extrinsics?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
	extrinsics_root?: InputMaybe<Bpchar_Comparison_Exp>;
	hash?: InputMaybe<Bpchar_Comparison_Exp>;
	height?: InputMaybe<Int_Comparison_Exp>;
	id?: InputMaybe<Bpchar_Comparison_Exp>;
	parent_hash?: InputMaybe<Bpchar_Comparison_Exp>;
	spec_id?: InputMaybe<String_Comparison_Exp>;
	state_root?: InputMaybe<Bpchar_Comparison_Exp>;
	timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
	validator?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Archive_Block_Max_Fields = {
	__typename?: "archive_block_max_fields";
	extrinsics_root?: Maybe<Scalars["bpchar"]>;
	hash?: Maybe<Scalars["bpchar"]>;
	height?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["bpchar"]>;
	parent_hash?: Maybe<Scalars["bpchar"]>;
	spec_id?: Maybe<Scalars["String"]>;
	state_root?: Maybe<Scalars["bpchar"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	validator?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Archive_Block_Min_Fields = {
	__typename?: "archive_block_min_fields";
	extrinsics_root?: Maybe<Scalars["bpchar"]>;
	hash?: Maybe<Scalars["bpchar"]>;
	height?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["bpchar"]>;
	parent_hash?: Maybe<Scalars["bpchar"]>;
	spec_id?: Maybe<Scalars["String"]>;
	state_root?: Maybe<Scalars["bpchar"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	validator?: Maybe<Scalars["String"]>;
};

/** Ordering options when selecting data from "block". */
export type Archive_Block_Order_By = {
	calls_aggregate?: InputMaybe<Archive_Call_Aggregate_Order_By>;
	events_aggregate?: InputMaybe<Archive_Event_Aggregate_Order_By>;
	extrinsics_aggregate?: InputMaybe<Archive_Extrinsic_Aggregate_Order_By>;
	extrinsics_root?: InputMaybe<Order_By>;
	hash?: InputMaybe<Order_By>;
	height?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	parent_hash?: InputMaybe<Order_By>;
	spec_id?: InputMaybe<Order_By>;
	state_root?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	validator?: InputMaybe<Order_By>;
};

/** select columns of table "block" */
export enum Archive_Block_Select_Column {
	/** column name */
	ExtrinsicsRoot = "extrinsics_root",
	/** column name */
	Hash = "hash",
	/** column name */
	Height = "height",
	/** column name */
	Id = "id",
	/** column name */
	ParentHash = "parent_hash",
	/** column name */
	SpecId = "spec_id",
	/** column name */
	StateRoot = "state_root",
	/** column name */
	Timestamp = "timestamp",
	/** column name */
	Validator = "validator",
}

/** aggregate stddev on columns */
export type Archive_Block_Stddev_Fields = {
	__typename?: "archive_block_stddev_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Archive_Block_Stddev_Pop_Fields = {
	__typename?: "archive_block_stddev_pop_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Archive_Block_Stddev_Samp_Fields = {
	__typename?: "archive_block_stddev_samp_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "block" */
export type Archive_Block_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Block_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Block_Stream_Cursor_Value_Input = {
	extrinsics_root?: InputMaybe<Scalars["bpchar"]>;
	hash?: InputMaybe<Scalars["bpchar"]>;
	height?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["bpchar"]>;
	parent_hash?: InputMaybe<Scalars["bpchar"]>;
	spec_id?: InputMaybe<Scalars["String"]>;
	state_root?: InputMaybe<Scalars["bpchar"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	validator?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Archive_Block_Sum_Fields = {
	__typename?: "archive_block_sum_fields";
	height?: Maybe<Scalars["Int"]>;
};

/** aggregate var_pop on columns */
export type Archive_Block_Var_Pop_Fields = {
	__typename?: "archive_block_var_pop_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Archive_Block_Var_Samp_Fields = {
	__typename?: "archive_block_var_samp_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Archive_Block_Variance_Fields = {
	__typename?: "archive_block_variance_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "call" */
export type Archive_Call = {
	__typename?: "archive_call";
	args?: Maybe<Scalars["jsonb"]>;
	/** An object relationship */
	block: Archive_Block;
	block_id: Scalars["bpchar"];
	/** An object relationship */
	call?: Maybe<Archive_Call>;
	/** An array relationship */
	calls: Array<Archive_Call>;
	/** An aggregate relationship */
	calls_aggregate: Archive_Call_Aggregate;
	error?: Maybe<Scalars["jsonb"]>;
	/** An array relationship */
	events: Array<Archive_Event>;
	/** An aggregate relationship */
	events_aggregate: Archive_Event_Aggregate;
	/** An object relationship */
	extrinsic: Archive_Extrinsic;
	extrinsic_id: Scalars["bpchar"];
	/** An array relationship */
	frontier_ethereum_transactions: Array<Archive_Frontier_Ethereum_Transaction>;
	/** An aggregate relationship */
	frontier_ethereum_transactions_aggregate: Archive_Frontier_Ethereum_Transaction_Aggregate;
	id: Scalars["String"];
	name: Scalars["String"];
	origin?: Maybe<Scalars["jsonb"]>;
	parent_id?: Maybe<Scalars["String"]>;
	pos: Scalars["Int"];
	success: Scalars["Boolean"];
};

/** columns and relationships of "call" */
export type Archive_CallArgsArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "call" */
export type Archive_CallCallsArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

/** columns and relationships of "call" */
export type Archive_CallCalls_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

/** columns and relationships of "call" */
export type Archive_CallErrorArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "call" */
export type Archive_CallEventsArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

/** columns and relationships of "call" */
export type Archive_CallEvents_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

/** columns and relationships of "call" */
export type Archive_CallFrontier_Ethereum_TransactionsArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Frontier_Ethereum_Transaction_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
};

/** columns and relationships of "call" */
export type Archive_CallFrontier_Ethereum_Transactions_AggregateArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Frontier_Ethereum_Transaction_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
};

/** columns and relationships of "call" */
export type Archive_CallOriginArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "call" */
export type Archive_Call_Aggregate = {
	__typename?: "archive_call_aggregate";
	aggregate?: Maybe<Archive_Call_Aggregate_Fields>;
	nodes: Array<Archive_Call>;
};

/** aggregate fields of "call" */
export type Archive_Call_Aggregate_Fields = {
	__typename?: "archive_call_aggregate_fields";
	avg?: Maybe<Archive_Call_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Archive_Call_Max_Fields>;
	min?: Maybe<Archive_Call_Min_Fields>;
	stddev?: Maybe<Archive_Call_Stddev_Fields>;
	stddev_pop?: Maybe<Archive_Call_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Archive_Call_Stddev_Samp_Fields>;
	sum?: Maybe<Archive_Call_Sum_Fields>;
	var_pop?: Maybe<Archive_Call_Var_Pop_Fields>;
	var_samp?: Maybe<Archive_Call_Var_Samp_Fields>;
	variance?: Maybe<Archive_Call_Variance_Fields>;
};

/** aggregate fields of "call" */
export type Archive_Call_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Archive_Call_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "call" */
export type Archive_Call_Aggregate_Order_By = {
	avg?: InputMaybe<Archive_Call_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Archive_Call_Max_Order_By>;
	min?: InputMaybe<Archive_Call_Min_Order_By>;
	stddev?: InputMaybe<Archive_Call_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Archive_Call_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Archive_Call_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Archive_Call_Sum_Order_By>;
	var_pop?: InputMaybe<Archive_Call_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Archive_Call_Var_Samp_Order_By>;
	variance?: InputMaybe<Archive_Call_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Archive_Call_Avg_Fields = {
	__typename?: "archive_call_avg_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "call" */
export type Archive_Call_Avg_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "call". All fields are combined with a logical 'AND'. */
export type Archive_Call_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Call_Bool_Exp>>;
	_not?: InputMaybe<Archive_Call_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Call_Bool_Exp>>;
	args?: InputMaybe<Jsonb_Comparison_Exp>;
	block?: InputMaybe<Archive_Block_Bool_Exp>;
	block_id?: InputMaybe<Bpchar_Comparison_Exp>;
	call?: InputMaybe<Archive_Call_Bool_Exp>;
	calls?: InputMaybe<Archive_Call_Bool_Exp>;
	error?: InputMaybe<Jsonb_Comparison_Exp>;
	events?: InputMaybe<Archive_Event_Bool_Exp>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
	extrinsic_id?: InputMaybe<Bpchar_Comparison_Exp>;
	frontier_ethereum_transactions?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	origin?: InputMaybe<Jsonb_Comparison_Exp>;
	parent_id?: InputMaybe<String_Comparison_Exp>;
	pos?: InputMaybe<Int_Comparison_Exp>;
	success?: InputMaybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Archive_Call_Max_Fields = {
	__typename?: "archive_call_max_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	extrinsic_id?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	parent_id?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "call" */
export type Archive_Call_Max_Order_By = {
	block_id?: InputMaybe<Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	parent_id?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Archive_Call_Min_Fields = {
	__typename?: "archive_call_min_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	extrinsic_id?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	parent_id?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "call" */
export type Archive_Call_Min_Order_By = {
	block_id?: InputMaybe<Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	parent_id?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "call". */
export type Archive_Call_Order_By = {
	args?: InputMaybe<Order_By>;
	block?: InputMaybe<Archive_Block_Order_By>;
	block_id?: InputMaybe<Order_By>;
	call?: InputMaybe<Archive_Call_Order_By>;
	calls_aggregate?: InputMaybe<Archive_Call_Aggregate_Order_By>;
	error?: InputMaybe<Order_By>;
	events_aggregate?: InputMaybe<Archive_Event_Aggregate_Order_By>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	frontier_ethereum_transactions_aggregate?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Aggregate_Order_By>;
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	origin?: InputMaybe<Order_By>;
	parent_id?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	success?: InputMaybe<Order_By>;
};

/** select columns of table "call" */
export enum Archive_Call_Select_Column {
	/** column name */
	Args = "args",
	/** column name */
	BlockId = "block_id",
	/** column name */
	Error = "error",
	/** column name */
	ExtrinsicId = "extrinsic_id",
	/** column name */
	Id = "id",
	/** column name */
	Name = "name",
	/** column name */
	Origin = "origin",
	/** column name */
	ParentId = "parent_id",
	/** column name */
	Pos = "pos",
	/** column name */
	Success = "success",
}

/** aggregate stddev on columns */
export type Archive_Call_Stddev_Fields = {
	__typename?: "archive_call_stddev_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "call" */
export type Archive_Call_Stddev_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Archive_Call_Stddev_Pop_Fields = {
	__typename?: "archive_call_stddev_pop_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "call" */
export type Archive_Call_Stddev_Pop_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Archive_Call_Stddev_Samp_Fields = {
	__typename?: "archive_call_stddev_samp_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "call" */
export type Archive_Call_Stddev_Samp_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "call" */
export type Archive_Call_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Call_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Call_Stream_Cursor_Value_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
	block_id?: InputMaybe<Scalars["bpchar"]>;
	error?: InputMaybe<Scalars["jsonb"]>;
	extrinsic_id?: InputMaybe<Scalars["bpchar"]>;
	id?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	origin?: InputMaybe<Scalars["jsonb"]>;
	parent_id?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate sum on columns */
export type Archive_Call_Sum_Fields = {
	__typename?: "archive_call_sum_fields";
	pos?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "call" */
export type Archive_Call_Sum_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Archive_Call_Var_Pop_Fields = {
	__typename?: "archive_call_var_pop_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "call" */
export type Archive_Call_Var_Pop_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Archive_Call_Var_Samp_Fields = {
	__typename?: "archive_call_var_samp_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "call" */
export type Archive_Call_Var_Samp_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Archive_Call_Variance_Fields = {
	__typename?: "archive_call_variance_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "call" */
export type Archive_Call_Variance_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** columns and relationships of "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted = {
	__typename?: "archive_contracts_contract_emitted";
	contract: Scalars["String"];
	/** An object relationship */
	event: Archive_Event;
	event_id: Scalars["bpchar"];
};

/** aggregated selection of "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Aggregate = {
	__typename?: "archive_contracts_contract_emitted_aggregate";
	aggregate?: Maybe<Archive_Contracts_Contract_Emitted_Aggregate_Fields>;
	nodes: Array<Archive_Contracts_Contract_Emitted>;
};

/** aggregate fields of "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Aggregate_Fields = {
	__typename?: "archive_contracts_contract_emitted_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Archive_Contracts_Contract_Emitted_Max_Fields>;
	min?: Maybe<Archive_Contracts_Contract_Emitted_Min_Fields>;
};

/** aggregate fields of "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Archive_Contracts_Contract_Emitted_Max_Order_By>;
	min?: InputMaybe<Archive_Contracts_Contract_Emitted_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "contracts_contract_emitted". All fields are combined with a logical 'AND'. */
export type Archive_Contracts_Contract_Emitted_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Bool_Exp>>;
	_not?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Bool_Exp>>;
	contract?: InputMaybe<String_Comparison_Exp>;
	event?: InputMaybe<Archive_Event_Bool_Exp>;
	event_id?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** aggregate max on columns */
export type Archive_Contracts_Contract_Emitted_Max_Fields = {
	__typename?: "archive_contracts_contract_emitted_max_fields";
	contract?: Maybe<Scalars["String"]>;
	event_id?: Maybe<Scalars["bpchar"]>;
};

/** order by max() on columns of table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Max_Order_By = {
	contract?: InputMaybe<Order_By>;
	event_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Archive_Contracts_Contract_Emitted_Min_Fields = {
	__typename?: "archive_contracts_contract_emitted_min_fields";
	contract?: Maybe<Scalars["String"]>;
	event_id?: Maybe<Scalars["bpchar"]>;
};

/** order by min() on columns of table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Min_Order_By = {
	contract?: InputMaybe<Order_By>;
	event_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "contracts_contract_emitted". */
export type Archive_Contracts_Contract_Emitted_Order_By = {
	contract?: InputMaybe<Order_By>;
	event?: InputMaybe<Archive_Event_Order_By>;
	event_id?: InputMaybe<Order_By>;
};

/** select columns of table "contracts_contract_emitted" */
export enum Archive_Contracts_Contract_Emitted_Select_Column {
	/** column name */
	Contract = "contract",
	/** column name */
	EventId = "event_id",
}

/** Streaming cursor of the table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Contracts_Contract_Emitted_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Contracts_Contract_Emitted_Stream_Cursor_Value_Input = {
	contract?: InputMaybe<Scalars["String"]>;
	event_id?: InputMaybe<Scalars["bpchar"]>;
};

/** ordering argument of a cursor */
export enum Archive_Cursor_Ordering {
	/** ascending ordering of the cursor */
	Asc = "ASC",
	/** descending ordering of the cursor */
	Desc = "DESC",
}

/** columns and relationships of "event" */
export type Archive_Event = {
	__typename?: "archive_event";
	args?: Maybe<Scalars["jsonb"]>;
	/** An object relationship */
	block: Archive_Block;
	block_id: Scalars["bpchar"];
	/** An object relationship */
	call?: Maybe<Archive_Call>;
	call_id?: Maybe<Scalars["String"]>;
	/** An array relationship */
	contracts_contract_emitteds: Array<Archive_Contracts_Contract_Emitted>;
	/** An aggregate relationship */
	contracts_contract_emitteds_aggregate: Archive_Contracts_Contract_Emitted_Aggregate;
	/** An object relationship */
	extrinsic?: Maybe<Archive_Extrinsic>;
	extrinsic_id?: Maybe<Scalars["bpchar"]>;
	/** An array relationship */
	frontier_evm_logs: Array<Archive_Frontier_Evm_Log>;
	/** An aggregate relationship */
	frontier_evm_logs_aggregate: Archive_Frontier_Evm_Log_Aggregate;
	id: Scalars["bpchar"];
	index_in_block: Scalars["Int"];
	name: Scalars["String"];
	phase: Scalars["String"];
	pos: Scalars["Int"];
};

/** columns and relationships of "event" */
export type Archive_EventArgsArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "event" */
export type Archive_EventContracts_Contract_EmittedsArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Contracts_Contract_Emitted_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Order_By>>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

/** columns and relationships of "event" */
export type Archive_EventContracts_Contract_Emitteds_AggregateArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Contracts_Contract_Emitted_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Order_By>>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

/** columns and relationships of "event" */
export type Archive_EventFrontier_Evm_LogsArgs = {
	distinct_on?: InputMaybe<Array<Archive_Frontier_Evm_Log_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Evm_Log_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

/** columns and relationships of "event" */
export type Archive_EventFrontier_Evm_Logs_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Frontier_Evm_Log_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Evm_Log_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

/** aggregated selection of "event" */
export type Archive_Event_Aggregate = {
	__typename?: "archive_event_aggregate";
	aggregate?: Maybe<Archive_Event_Aggregate_Fields>;
	nodes: Array<Archive_Event>;
};

/** aggregate fields of "event" */
export type Archive_Event_Aggregate_Fields = {
	__typename?: "archive_event_aggregate_fields";
	avg?: Maybe<Archive_Event_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Archive_Event_Max_Fields>;
	min?: Maybe<Archive_Event_Min_Fields>;
	stddev?: Maybe<Archive_Event_Stddev_Fields>;
	stddev_pop?: Maybe<Archive_Event_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Archive_Event_Stddev_Samp_Fields>;
	sum?: Maybe<Archive_Event_Sum_Fields>;
	var_pop?: Maybe<Archive_Event_Var_Pop_Fields>;
	var_samp?: Maybe<Archive_Event_Var_Samp_Fields>;
	variance?: Maybe<Archive_Event_Variance_Fields>;
};

/** aggregate fields of "event" */
export type Archive_Event_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Archive_Event_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "event" */
export type Archive_Event_Aggregate_Order_By = {
	avg?: InputMaybe<Archive_Event_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Archive_Event_Max_Order_By>;
	min?: InputMaybe<Archive_Event_Min_Order_By>;
	stddev?: InputMaybe<Archive_Event_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Archive_Event_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Archive_Event_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Archive_Event_Sum_Order_By>;
	var_pop?: InputMaybe<Archive_Event_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Archive_Event_Var_Samp_Order_By>;
	variance?: InputMaybe<Archive_Event_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Archive_Event_Avg_Fields = {
	__typename?: "archive_event_avg_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "event" */
export type Archive_Event_Avg_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Archive_Event_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Event_Bool_Exp>>;
	_not?: InputMaybe<Archive_Event_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Event_Bool_Exp>>;
	args?: InputMaybe<Jsonb_Comparison_Exp>;
	block?: InputMaybe<Archive_Block_Bool_Exp>;
	block_id?: InputMaybe<Bpchar_Comparison_Exp>;
	call?: InputMaybe<Archive_Call_Bool_Exp>;
	call_id?: InputMaybe<String_Comparison_Exp>;
	contracts_contract_emitteds?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
	extrinsic_id?: InputMaybe<Bpchar_Comparison_Exp>;
	frontier_evm_logs?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
	id?: InputMaybe<Bpchar_Comparison_Exp>;
	index_in_block?: InputMaybe<Int_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	phase?: InputMaybe<String_Comparison_Exp>;
	pos?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Archive_Event_Max_Fields = {
	__typename?: "archive_event_max_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	extrinsic_id?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	name?: Maybe<Scalars["String"]>;
	phase?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "event" */
export type Archive_Event_Max_Order_By = {
	block_id?: InputMaybe<Order_By>;
	call_id?: InputMaybe<Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	phase?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Archive_Event_Min_Fields = {
	__typename?: "archive_event_min_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	extrinsic_id?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	name?: Maybe<Scalars["String"]>;
	phase?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "event" */
export type Archive_Event_Min_Order_By = {
	block_id?: InputMaybe<Order_By>;
	call_id?: InputMaybe<Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	phase?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "event". */
export type Archive_Event_Order_By = {
	args?: InputMaybe<Order_By>;
	block?: InputMaybe<Archive_Block_Order_By>;
	block_id?: InputMaybe<Order_By>;
	call?: InputMaybe<Archive_Call_Order_By>;
	call_id?: InputMaybe<Order_By>;
	contracts_contract_emitteds_aggregate?: InputMaybe<Archive_Contracts_Contract_Emitted_Aggregate_Order_By>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	frontier_evm_logs_aggregate?: InputMaybe<Archive_Frontier_Evm_Log_Aggregate_Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	phase?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** select columns of table "event" */
export enum Archive_Event_Select_Column {
	/** column name */
	Args = "args",
	/** column name */
	BlockId = "block_id",
	/** column name */
	CallId = "call_id",
	/** column name */
	ExtrinsicId = "extrinsic_id",
	/** column name */
	Id = "id",
	/** column name */
	IndexInBlock = "index_in_block",
	/** column name */
	Name = "name",
	/** column name */
	Phase = "phase",
	/** column name */
	Pos = "pos",
}

/** aggregate stddev on columns */
export type Archive_Event_Stddev_Fields = {
	__typename?: "archive_event_stddev_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "event" */
export type Archive_Event_Stddev_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Archive_Event_Stddev_Pop_Fields = {
	__typename?: "archive_event_stddev_pop_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "event" */
export type Archive_Event_Stddev_Pop_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Archive_Event_Stddev_Samp_Fields = {
	__typename?: "archive_event_stddev_samp_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "event" */
export type Archive_Event_Stddev_Samp_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "event" */
export type Archive_Event_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Event_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Event_Stream_Cursor_Value_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
	block_id?: InputMaybe<Scalars["bpchar"]>;
	call_id?: InputMaybe<Scalars["String"]>;
	extrinsic_id?: InputMaybe<Scalars["bpchar"]>;
	id?: InputMaybe<Scalars["bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	name?: InputMaybe<Scalars["String"]>;
	phase?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Archive_Event_Sum_Fields = {
	__typename?: "archive_event_sum_fields";
	index_in_block?: Maybe<Scalars["Int"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "event" */
export type Archive_Event_Sum_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Archive_Event_Var_Pop_Fields = {
	__typename?: "archive_event_var_pop_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "event" */
export type Archive_Event_Var_Pop_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Archive_Event_Var_Samp_Fields = {
	__typename?: "archive_event_var_samp_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "event" */
export type Archive_Event_Var_Samp_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Archive_Event_Variance_Fields = {
	__typename?: "archive_event_variance_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "event" */
export type Archive_Event_Variance_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** columns and relationships of "extrinsic" */
export type Archive_Extrinsic = {
	__typename?: "archive_extrinsic";
	/** An object relationship */
	block: Archive_Block;
	block_id: Scalars["bpchar"];
	call_id: Scalars["String"];
	/** An array relationship */
	calls: Array<Archive_Call>;
	/** An aggregate relationship */
	calls_aggregate: Archive_Call_Aggregate;
	error?: Maybe<Scalars["jsonb"]>;
	/** An array relationship */
	events: Array<Archive_Event>;
	/** An aggregate relationship */
	events_aggregate: Archive_Event_Aggregate;
	fee?: Maybe<Scalars["numeric"]>;
	hash: Scalars["bpchar"];
	id: Scalars["bpchar"];
	index_in_block: Scalars["Int"];
	pos: Scalars["Int"];
	signature?: Maybe<Scalars["jsonb"]>;
	success: Scalars["Boolean"];
	tip?: Maybe<Scalars["numeric"]>;
	version: Scalars["Int"];
};

/** columns and relationships of "extrinsic" */
export type Archive_ExtrinsicCallsArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

/** columns and relationships of "extrinsic" */
export type Archive_ExtrinsicCalls_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

/** columns and relationships of "extrinsic" */
export type Archive_ExtrinsicErrorArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "extrinsic" */
export type Archive_ExtrinsicEventsArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

/** columns and relationships of "extrinsic" */
export type Archive_ExtrinsicEvents_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

/** columns and relationships of "extrinsic" */
export type Archive_ExtrinsicSignatureArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "extrinsic" */
export type Archive_Extrinsic_Aggregate = {
	__typename?: "archive_extrinsic_aggregate";
	aggregate?: Maybe<Archive_Extrinsic_Aggregate_Fields>;
	nodes: Array<Archive_Extrinsic>;
};

/** aggregate fields of "extrinsic" */
export type Archive_Extrinsic_Aggregate_Fields = {
	__typename?: "archive_extrinsic_aggregate_fields";
	avg?: Maybe<Archive_Extrinsic_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Archive_Extrinsic_Max_Fields>;
	min?: Maybe<Archive_Extrinsic_Min_Fields>;
	stddev?: Maybe<Archive_Extrinsic_Stddev_Fields>;
	stddev_pop?: Maybe<Archive_Extrinsic_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Archive_Extrinsic_Stddev_Samp_Fields>;
	sum?: Maybe<Archive_Extrinsic_Sum_Fields>;
	var_pop?: Maybe<Archive_Extrinsic_Var_Pop_Fields>;
	var_samp?: Maybe<Archive_Extrinsic_Var_Samp_Fields>;
	variance?: Maybe<Archive_Extrinsic_Variance_Fields>;
};

/** aggregate fields of "extrinsic" */
export type Archive_Extrinsic_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Archive_Extrinsic_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "extrinsic" */
export type Archive_Extrinsic_Aggregate_Order_By = {
	avg?: InputMaybe<Archive_Extrinsic_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Archive_Extrinsic_Max_Order_By>;
	min?: InputMaybe<Archive_Extrinsic_Min_Order_By>;
	stddev?: InputMaybe<Archive_Extrinsic_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Archive_Extrinsic_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Archive_Extrinsic_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Archive_Extrinsic_Sum_Order_By>;
	var_pop?: InputMaybe<Archive_Extrinsic_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Archive_Extrinsic_Var_Samp_Order_By>;
	variance?: InputMaybe<Archive_Extrinsic_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Archive_Extrinsic_Avg_Fields = {
	__typename?: "archive_extrinsic_avg_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "extrinsic" */
export type Archive_Extrinsic_Avg_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "extrinsic". All fields are combined with a logical 'AND'. */
export type Archive_Extrinsic_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Extrinsic_Bool_Exp>>;
	_not?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Extrinsic_Bool_Exp>>;
	block?: InputMaybe<Archive_Block_Bool_Exp>;
	block_id?: InputMaybe<Bpchar_Comparison_Exp>;
	call_id?: InputMaybe<String_Comparison_Exp>;
	calls?: InputMaybe<Archive_Call_Bool_Exp>;
	error?: InputMaybe<Jsonb_Comparison_Exp>;
	events?: InputMaybe<Archive_Event_Bool_Exp>;
	fee?: InputMaybe<Numeric_Comparison_Exp>;
	hash?: InputMaybe<Bpchar_Comparison_Exp>;
	id?: InputMaybe<Bpchar_Comparison_Exp>;
	index_in_block?: InputMaybe<Int_Comparison_Exp>;
	pos?: InputMaybe<Int_Comparison_Exp>;
	signature?: InputMaybe<Jsonb_Comparison_Exp>;
	success?: InputMaybe<Boolean_Comparison_Exp>;
	tip?: InputMaybe<Numeric_Comparison_Exp>;
	version?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Archive_Extrinsic_Max_Fields = {
	__typename?: "archive_extrinsic_max_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	fee?: Maybe<Scalars["numeric"]>;
	hash?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	pos?: Maybe<Scalars["Int"]>;
	tip?: Maybe<Scalars["numeric"]>;
	version?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "extrinsic" */
export type Archive_Extrinsic_Max_Order_By = {
	block_id?: InputMaybe<Order_By>;
	call_id?: InputMaybe<Order_By>;
	fee?: InputMaybe<Order_By>;
	hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Archive_Extrinsic_Min_Fields = {
	__typename?: "archive_extrinsic_min_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	fee?: Maybe<Scalars["numeric"]>;
	hash?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	pos?: Maybe<Scalars["Int"]>;
	tip?: Maybe<Scalars["numeric"]>;
	version?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "extrinsic" */
export type Archive_Extrinsic_Min_Order_By = {
	block_id?: InputMaybe<Order_By>;
	call_id?: InputMaybe<Order_By>;
	fee?: InputMaybe<Order_By>;
	hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "extrinsic". */
export type Archive_Extrinsic_Order_By = {
	block?: InputMaybe<Archive_Block_Order_By>;
	block_id?: InputMaybe<Order_By>;
	call_id?: InputMaybe<Order_By>;
	calls_aggregate?: InputMaybe<Archive_Call_Aggregate_Order_By>;
	error?: InputMaybe<Order_By>;
	events_aggregate?: InputMaybe<Archive_Event_Aggregate_Order_By>;
	fee?: InputMaybe<Order_By>;
	hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	signature?: InputMaybe<Order_By>;
	success?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** select columns of table "extrinsic" */
export enum Archive_Extrinsic_Select_Column {
	/** column name */
	BlockId = "block_id",
	/** column name */
	CallId = "call_id",
	/** column name */
	Error = "error",
	/** column name */
	Fee = "fee",
	/** column name */
	Hash = "hash",
	/** column name */
	Id = "id",
	/** column name */
	IndexInBlock = "index_in_block",
	/** column name */
	Pos = "pos",
	/** column name */
	Signature = "signature",
	/** column name */
	Success = "success",
	/** column name */
	Tip = "tip",
	/** column name */
	Version = "version",
}

/** aggregate stddev on columns */
export type Archive_Extrinsic_Stddev_Fields = {
	__typename?: "archive_extrinsic_stddev_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "extrinsic" */
export type Archive_Extrinsic_Stddev_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Archive_Extrinsic_Stddev_Pop_Fields = {
	__typename?: "archive_extrinsic_stddev_pop_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "extrinsic" */
export type Archive_Extrinsic_Stddev_Pop_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Archive_Extrinsic_Stddev_Samp_Fields = {
	__typename?: "archive_extrinsic_stddev_samp_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "extrinsic" */
export type Archive_Extrinsic_Stddev_Samp_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "extrinsic" */
export type Archive_Extrinsic_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Extrinsic_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Extrinsic_Stream_Cursor_Value_Input = {
	block_id?: InputMaybe<Scalars["bpchar"]>;
	call_id?: InputMaybe<Scalars["String"]>;
	error?: InputMaybe<Scalars["jsonb"]>;
	fee?: InputMaybe<Scalars["numeric"]>;
	hash?: InputMaybe<Scalars["bpchar"]>;
	id?: InputMaybe<Scalars["bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	signature?: InputMaybe<Scalars["jsonb"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
	tip?: InputMaybe<Scalars["numeric"]>;
	version?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Archive_Extrinsic_Sum_Fields = {
	__typename?: "archive_extrinsic_sum_fields";
	fee?: Maybe<Scalars["numeric"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	pos?: Maybe<Scalars["Int"]>;
	tip?: Maybe<Scalars["numeric"]>;
	version?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "extrinsic" */
export type Archive_Extrinsic_Sum_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Archive_Extrinsic_Var_Pop_Fields = {
	__typename?: "archive_extrinsic_var_pop_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "extrinsic" */
export type Archive_Extrinsic_Var_Pop_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Archive_Extrinsic_Var_Samp_Fields = {
	__typename?: "archive_extrinsic_var_samp_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "extrinsic" */
export type Archive_Extrinsic_Var_Samp_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Archive_Extrinsic_Variance_Fields = {
	__typename?: "archive_extrinsic_variance_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "extrinsic" */
export type Archive_Extrinsic_Variance_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** columns and relationships of "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction = {
	__typename?: "archive_frontier_ethereum_transaction";
	/** An object relationship */
	call: Archive_Call;
	call_id: Scalars["String"];
	contract: Scalars["bpchar"];
	sighash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Aggregate = {
	__typename?: "archive_frontier_ethereum_transaction_aggregate";
	aggregate?: Maybe<Archive_Frontier_Ethereum_Transaction_Aggregate_Fields>;
	nodes: Array<Archive_Frontier_Ethereum_Transaction>;
};

/** aggregate fields of "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Aggregate_Fields = {
	__typename?: "archive_frontier_ethereum_transaction_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Archive_Frontier_Ethereum_Transaction_Max_Fields>;
	min?: Maybe<Archive_Frontier_Ethereum_Transaction_Min_Fields>;
};

/** aggregate fields of "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<
		Array<Archive_Frontier_Ethereum_Transaction_Select_Column>
	>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Max_Order_By>;
	min?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "frontier_ethereum_transaction". All fields are combined with a logical 'AND'. */
export type Archive_Frontier_Ethereum_Transaction_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Bool_Exp>>;
	_not?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Bool_Exp>>;
	call?: InputMaybe<Archive_Call_Bool_Exp>;
	call_id?: InputMaybe<String_Comparison_Exp>;
	contract?: InputMaybe<Bpchar_Comparison_Exp>;
	sighash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Archive_Frontier_Ethereum_Transaction_Max_Fields = {
	__typename?: "archive_frontier_ethereum_transaction_max_fields";
	call_id?: Maybe<Scalars["String"]>;
	contract?: Maybe<Scalars["bpchar"]>;
	sighash?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Max_Order_By = {
	call_id?: InputMaybe<Order_By>;
	contract?: InputMaybe<Order_By>;
	sighash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Archive_Frontier_Ethereum_Transaction_Min_Fields = {
	__typename?: "archive_frontier_ethereum_transaction_min_fields";
	call_id?: Maybe<Scalars["String"]>;
	contract?: Maybe<Scalars["bpchar"]>;
	sighash?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Min_Order_By = {
	call_id?: InputMaybe<Order_By>;
	contract?: InputMaybe<Order_By>;
	sighash?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "frontier_ethereum_transaction". */
export type Archive_Frontier_Ethereum_Transaction_Order_By = {
	call?: InputMaybe<Archive_Call_Order_By>;
	call_id?: InputMaybe<Order_By>;
	contract?: InputMaybe<Order_By>;
	sighash?: InputMaybe<Order_By>;
};

/** select columns of table "frontier_ethereum_transaction" */
export enum Archive_Frontier_Ethereum_Transaction_Select_Column {
	/** column name */
	CallId = "call_id",
	/** column name */
	Contract = "contract",
	/** column name */
	Sighash = "sighash",
}

/** Streaming cursor of the table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Frontier_Ethereum_Transaction_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Frontier_Ethereum_Transaction_Stream_Cursor_Value_Input = {
	call_id?: InputMaybe<Scalars["String"]>;
	contract?: InputMaybe<Scalars["bpchar"]>;
	sighash?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "frontier_evm_log" */
export type Archive_Frontier_Evm_Log = {
	__typename?: "archive_frontier_evm_log";
	contract: Scalars["bpchar"];
	/** An object relationship */
	event: Archive_Event;
	event_id: Scalars["bpchar"];
	topic0?: Maybe<Scalars["bpchar"]>;
	topic1?: Maybe<Scalars["bpchar"]>;
	topic2?: Maybe<Scalars["bpchar"]>;
	topic3?: Maybe<Scalars["bpchar"]>;
};

/** aggregated selection of "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Aggregate = {
	__typename?: "archive_frontier_evm_log_aggregate";
	aggregate?: Maybe<Archive_Frontier_Evm_Log_Aggregate_Fields>;
	nodes: Array<Archive_Frontier_Evm_Log>;
};

/** aggregate fields of "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Aggregate_Fields = {
	__typename?: "archive_frontier_evm_log_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Archive_Frontier_Evm_Log_Max_Fields>;
	min?: Maybe<Archive_Frontier_Evm_Log_Min_Fields>;
};

/** aggregate fields of "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Archive_Frontier_Evm_Log_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Archive_Frontier_Evm_Log_Max_Order_By>;
	min?: InputMaybe<Archive_Frontier_Evm_Log_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "frontier_evm_log". All fields are combined with a logical 'AND'. */
export type Archive_Frontier_Evm_Log_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Frontier_Evm_Log_Bool_Exp>>;
	_not?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Frontier_Evm_Log_Bool_Exp>>;
	contract?: InputMaybe<Bpchar_Comparison_Exp>;
	event?: InputMaybe<Archive_Event_Bool_Exp>;
	event_id?: InputMaybe<Bpchar_Comparison_Exp>;
	topic0?: InputMaybe<Bpchar_Comparison_Exp>;
	topic1?: InputMaybe<Bpchar_Comparison_Exp>;
	topic2?: InputMaybe<Bpchar_Comparison_Exp>;
	topic3?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** aggregate max on columns */
export type Archive_Frontier_Evm_Log_Max_Fields = {
	__typename?: "archive_frontier_evm_log_max_fields";
	contract?: Maybe<Scalars["bpchar"]>;
	event_id?: Maybe<Scalars["bpchar"]>;
	topic0?: Maybe<Scalars["bpchar"]>;
	topic1?: Maybe<Scalars["bpchar"]>;
	topic2?: Maybe<Scalars["bpchar"]>;
	topic3?: Maybe<Scalars["bpchar"]>;
};

/** order by max() on columns of table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Max_Order_By = {
	contract?: InputMaybe<Order_By>;
	event_id?: InputMaybe<Order_By>;
	topic0?: InputMaybe<Order_By>;
	topic1?: InputMaybe<Order_By>;
	topic2?: InputMaybe<Order_By>;
	topic3?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Archive_Frontier_Evm_Log_Min_Fields = {
	__typename?: "archive_frontier_evm_log_min_fields";
	contract?: Maybe<Scalars["bpchar"]>;
	event_id?: Maybe<Scalars["bpchar"]>;
	topic0?: Maybe<Scalars["bpchar"]>;
	topic1?: Maybe<Scalars["bpchar"]>;
	topic2?: Maybe<Scalars["bpchar"]>;
	topic3?: Maybe<Scalars["bpchar"]>;
};

/** order by min() on columns of table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Min_Order_By = {
	contract?: InputMaybe<Order_By>;
	event_id?: InputMaybe<Order_By>;
	topic0?: InputMaybe<Order_By>;
	topic1?: InputMaybe<Order_By>;
	topic2?: InputMaybe<Order_By>;
	topic3?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "frontier_evm_log". */
export type Archive_Frontier_Evm_Log_Order_By = {
	contract?: InputMaybe<Order_By>;
	event?: InputMaybe<Archive_Event_Order_By>;
	event_id?: InputMaybe<Order_By>;
	topic0?: InputMaybe<Order_By>;
	topic1?: InputMaybe<Order_By>;
	topic2?: InputMaybe<Order_By>;
	topic3?: InputMaybe<Order_By>;
};

/** select columns of table "frontier_evm_log" */
export enum Archive_Frontier_Evm_Log_Select_Column {
	/** column name */
	Contract = "contract",
	/** column name */
	EventId = "event_id",
	/** column name */
	Topic0 = "topic0",
	/** column name */
	Topic1 = "topic1",
	/** column name */
	Topic2 = "topic2",
	/** column name */
	Topic3 = "topic3",
}

/** Streaming cursor of the table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Frontier_Evm_Log_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Frontier_Evm_Log_Stream_Cursor_Value_Input = {
	contract?: InputMaybe<Scalars["bpchar"]>;
	event_id?: InputMaybe<Scalars["bpchar"]>;
	topic0?: InputMaybe<Scalars["bpchar"]>;
	topic1?: InputMaybe<Scalars["bpchar"]>;
	topic2?: InputMaybe<Scalars["bpchar"]>;
	topic3?: InputMaybe<Scalars["bpchar"]>;
};

/** columns and relationships of "metadata" */
export type Archive_Metadata = {
	__typename?: "archive_metadata";
	block_hash: Scalars["bpchar"];
	block_height: Scalars["Int"];
	hex: Scalars["String"];
	id: Scalars["String"];
	spec_name: Scalars["String"];
	spec_version?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "metadata" */
export type Archive_Metadata_Aggregate = {
	__typename?: "archive_metadata_aggregate";
	aggregate?: Maybe<Archive_Metadata_Aggregate_Fields>;
	nodes: Array<Archive_Metadata>;
};

/** aggregate fields of "metadata" */
export type Archive_Metadata_Aggregate_Fields = {
	__typename?: "archive_metadata_aggregate_fields";
	avg?: Maybe<Archive_Metadata_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Archive_Metadata_Max_Fields>;
	min?: Maybe<Archive_Metadata_Min_Fields>;
	stddev?: Maybe<Archive_Metadata_Stddev_Fields>;
	stddev_pop?: Maybe<Archive_Metadata_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Archive_Metadata_Stddev_Samp_Fields>;
	sum?: Maybe<Archive_Metadata_Sum_Fields>;
	var_pop?: Maybe<Archive_Metadata_Var_Pop_Fields>;
	var_samp?: Maybe<Archive_Metadata_Var_Samp_Fields>;
	variance?: Maybe<Archive_Metadata_Variance_Fields>;
};

/** aggregate fields of "metadata" */
export type Archive_Metadata_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Archive_Metadata_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Archive_Metadata_Avg_Fields = {
	__typename?: "archive_metadata_avg_fields";
	block_height?: Maybe<Scalars["Float"]>;
	spec_version?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "metadata". All fields are combined with a logical 'AND'. */
export type Archive_Metadata_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Metadata_Bool_Exp>>;
	_not?: InputMaybe<Archive_Metadata_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Metadata_Bool_Exp>>;
	block_hash?: InputMaybe<Bpchar_Comparison_Exp>;
	block_height?: InputMaybe<Int_Comparison_Exp>;
	hex?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	spec_name?: InputMaybe<String_Comparison_Exp>;
	spec_version?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Archive_Metadata_Max_Fields = {
	__typename?: "archive_metadata_max_fields";
	block_hash?: Maybe<Scalars["bpchar"]>;
	block_height?: Maybe<Scalars["Int"]>;
	hex?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	spec_name?: Maybe<Scalars["String"]>;
	spec_version?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type Archive_Metadata_Min_Fields = {
	__typename?: "archive_metadata_min_fields";
	block_hash?: Maybe<Scalars["bpchar"]>;
	block_height?: Maybe<Scalars["Int"]>;
	hex?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	spec_name?: Maybe<Scalars["String"]>;
	spec_version?: Maybe<Scalars["Int"]>;
};

/** Ordering options when selecting data from "metadata". */
export type Archive_Metadata_Order_By = {
	block_hash?: InputMaybe<Order_By>;
	block_height?: InputMaybe<Order_By>;
	hex?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	spec_name?: InputMaybe<Order_By>;
	spec_version?: InputMaybe<Order_By>;
};

/** select columns of table "metadata" */
export enum Archive_Metadata_Select_Column {
	/** column name */
	BlockHash = "block_hash",
	/** column name */
	BlockHeight = "block_height",
	/** column name */
	Hex = "hex",
	/** column name */
	Id = "id",
	/** column name */
	SpecName = "spec_name",
	/** column name */
	SpecVersion = "spec_version",
}

/** aggregate stddev on columns */
export type Archive_Metadata_Stddev_Fields = {
	__typename?: "archive_metadata_stddev_fields";
	block_height?: Maybe<Scalars["Float"]>;
	spec_version?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Archive_Metadata_Stddev_Pop_Fields = {
	__typename?: "archive_metadata_stddev_pop_fields";
	block_height?: Maybe<Scalars["Float"]>;
	spec_version?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Archive_Metadata_Stddev_Samp_Fields = {
	__typename?: "archive_metadata_stddev_samp_fields";
	block_height?: Maybe<Scalars["Float"]>;
	spec_version?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "metadata" */
export type Archive_Metadata_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Metadata_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Metadata_Stream_Cursor_Value_Input = {
	block_hash?: InputMaybe<Scalars["bpchar"]>;
	block_height?: InputMaybe<Scalars["Int"]>;
	hex?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	spec_name?: InputMaybe<Scalars["String"]>;
	spec_version?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Archive_Metadata_Sum_Fields = {
	__typename?: "archive_metadata_sum_fields";
	block_height?: Maybe<Scalars["Int"]>;
	spec_version?: Maybe<Scalars["Int"]>;
};

/** aggregate var_pop on columns */
export type Archive_Metadata_Var_Pop_Fields = {
	__typename?: "archive_metadata_var_pop_fields";
	block_height?: Maybe<Scalars["Float"]>;
	spec_version?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Archive_Metadata_Var_Samp_Fields = {
	__typename?: "archive_metadata_var_samp_fields";
	block_height?: Maybe<Scalars["Float"]>;
	spec_version?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Archive_Metadata_Variance_Fields = {
	__typename?: "archive_metadata_variance_fields";
	block_height?: Maybe<Scalars["Float"]>;
	spec_version?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "squid_processor.account" */
export type Balances_Account = {
	__typename?: "balances_account";
	assets?: Maybe<Scalars["jsonb"]>;
	free: Scalars["numeric"];
	id: Scalars["String"];
	reserved: Scalars["numeric"];
	total: Scalars["numeric"];
	/** An array relationship */
	transfers: Array<Balances_Transfer>;
	/** An array relationship */
	transfersByFromId: Array<Balances_Transfer>;
	/** An aggregate relationship */
	transfersByFromId_aggregate: Balances_Transfer_Aggregate;
	/** An aggregate relationship */
	transfers_aggregate: Balances_Transfer_Aggregate;
	updated_at?: Maybe<Scalars["Int"]>;
};

/** columns and relationships of "squid_processor.account" */
export type Balances_AccountAssetsArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "squid_processor.account" */
export type Balances_AccountTransfersArgs = {
	distinct_on?: InputMaybe<Array<Balances_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Transfer_Order_By>>;
	where?: InputMaybe<Balances_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_processor.account" */
export type Balances_AccountTransfersByFromIdArgs = {
	distinct_on?: InputMaybe<Array<Balances_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Transfer_Order_By>>;
	where?: InputMaybe<Balances_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_processor.account" */
export type Balances_AccountTransfersByFromId_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Balances_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Transfer_Order_By>>;
	where?: InputMaybe<Balances_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_processor.account" */
export type Balances_AccountTransfers_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Balances_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Transfer_Order_By>>;
	where?: InputMaybe<Balances_Transfer_Bool_Exp>;
};

/** aggregated selection of "squid_processor.account" */
export type Balances_Account_Aggregate = {
	__typename?: "balances_account_aggregate";
	aggregate?: Maybe<Balances_Account_Aggregate_Fields>;
	nodes: Array<Balances_Account>;
};

/** aggregate fields of "squid_processor.account" */
export type Balances_Account_Aggregate_Fields = {
	__typename?: "balances_account_aggregate_fields";
	avg?: Maybe<Balances_Account_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Balances_Account_Max_Fields>;
	min?: Maybe<Balances_Account_Min_Fields>;
	stddev?: Maybe<Balances_Account_Stddev_Fields>;
	stddev_pop?: Maybe<Balances_Account_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Balances_Account_Stddev_Samp_Fields>;
	sum?: Maybe<Balances_Account_Sum_Fields>;
	var_pop?: Maybe<Balances_Account_Var_Pop_Fields>;
	var_samp?: Maybe<Balances_Account_Var_Samp_Fields>;
	variance?: Maybe<Balances_Account_Variance_Fields>;
};

/** aggregate fields of "squid_processor.account" */
export type Balances_Account_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Balances_Account_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Balances_Account_Avg_Fields = {
	__typename?: "balances_account_avg_fields";
	free?: Maybe<Scalars["Float"]>;
	reserved?: Maybe<Scalars["Float"]>;
	total?: Maybe<Scalars["Float"]>;
	updated_at?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "squid_processor.account". All fields are combined with a logical 'AND'. */
export type Balances_Account_Bool_Exp = {
	_and?: InputMaybe<Array<Balances_Account_Bool_Exp>>;
	_not?: InputMaybe<Balances_Account_Bool_Exp>;
	_or?: InputMaybe<Array<Balances_Account_Bool_Exp>>;
	assets?: InputMaybe<Jsonb_Comparison_Exp>;
	free?: InputMaybe<Numeric_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	reserved?: InputMaybe<Numeric_Comparison_Exp>;
	total?: InputMaybe<Numeric_Comparison_Exp>;
	transfers?: InputMaybe<Balances_Transfer_Bool_Exp>;
	transfersByFromId?: InputMaybe<Balances_Transfer_Bool_Exp>;
	updated_at?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Balances_Account_Max_Fields = {
	__typename?: "balances_account_max_fields";
	free?: Maybe<Scalars["numeric"]>;
	id?: Maybe<Scalars["String"]>;
	reserved?: Maybe<Scalars["numeric"]>;
	total?: Maybe<Scalars["numeric"]>;
	updated_at?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type Balances_Account_Min_Fields = {
	__typename?: "balances_account_min_fields";
	free?: Maybe<Scalars["numeric"]>;
	id?: Maybe<Scalars["String"]>;
	reserved?: Maybe<Scalars["numeric"]>;
	total?: Maybe<Scalars["numeric"]>;
	updated_at?: Maybe<Scalars["Int"]>;
};

/** Ordering options when selecting data from "squid_processor.account". */
export type Balances_Account_Order_By = {
	assets?: InputMaybe<Order_By>;
	free?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	reserved?: InputMaybe<Order_By>;
	total?: InputMaybe<Order_By>;
	transfersByFromId_aggregate?: InputMaybe<Balances_Transfer_Aggregate_Order_By>;
	transfers_aggregate?: InputMaybe<Balances_Transfer_Aggregate_Order_By>;
	updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "squid_processor.account" */
export enum Balances_Account_Select_Column {
	/** column name */
	Assets = "assets",
	/** column name */
	Free = "free",
	/** column name */
	Id = "id",
	/** column name */
	Reserved = "reserved",
	/** column name */
	Total = "total",
	/** column name */
	UpdatedAt = "updated_at",
}

/** aggregate stddev on columns */
export type Balances_Account_Stddev_Fields = {
	__typename?: "balances_account_stddev_fields";
	free?: Maybe<Scalars["Float"]>;
	reserved?: Maybe<Scalars["Float"]>;
	total?: Maybe<Scalars["Float"]>;
	updated_at?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Balances_Account_Stddev_Pop_Fields = {
	__typename?: "balances_account_stddev_pop_fields";
	free?: Maybe<Scalars["Float"]>;
	reserved?: Maybe<Scalars["Float"]>;
	total?: Maybe<Scalars["Float"]>;
	updated_at?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Balances_Account_Stddev_Samp_Fields = {
	__typename?: "balances_account_stddev_samp_fields";
	free?: Maybe<Scalars["Float"]>;
	reserved?: Maybe<Scalars["Float"]>;
	total?: Maybe<Scalars["Float"]>;
	updated_at?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "account" */
export type Balances_Account_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Balances_Account_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Balances_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Balances_Account_Stream_Cursor_Value_Input = {
	assets?: InputMaybe<Scalars["jsonb"]>;
	free?: InputMaybe<Scalars["numeric"]>;
	id?: InputMaybe<Scalars["String"]>;
	reserved?: InputMaybe<Scalars["numeric"]>;
	total?: InputMaybe<Scalars["numeric"]>;
	updated_at?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Balances_Account_Sum_Fields = {
	__typename?: "balances_account_sum_fields";
	free?: Maybe<Scalars["numeric"]>;
	reserved?: Maybe<Scalars["numeric"]>;
	total?: Maybe<Scalars["numeric"]>;
	updated_at?: Maybe<Scalars["Int"]>;
};

/** aggregate var_pop on columns */
export type Balances_Account_Var_Pop_Fields = {
	__typename?: "balances_account_var_pop_fields";
	free?: Maybe<Scalars["Float"]>;
	reserved?: Maybe<Scalars["Float"]>;
	total?: Maybe<Scalars["Float"]>;
	updated_at?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Balances_Account_Var_Samp_Fields = {
	__typename?: "balances_account_var_samp_fields";
	free?: Maybe<Scalars["Float"]>;
	reserved?: Maybe<Scalars["Float"]>;
	total?: Maybe<Scalars["Float"]>;
	updated_at?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Balances_Account_Variance_Fields = {
	__typename?: "balances_account_variance_fields";
	free?: Maybe<Scalars["Float"]>;
	reserved?: Maybe<Scalars["Float"]>;
	total?: Maybe<Scalars["Float"]>;
	updated_at?: Maybe<Scalars["Float"]>;
};

export type Balances_Balances_Query = {
	__typename?: "balances_balances_query";
	/** fetch data from the table: "squid_processor.account" */
	account: Array<Balances_Account>;
	/** fetch aggregated fields from the table: "squid_processor.account" */
	account_aggregate: Balances_Account_Aggregate;
	/** fetch data from the table: "squid_processor.account" using primary key columns */
	account_by_pk?: Maybe<Balances_Account>;
	/** fetch data from the table: "squid_processor.chain_state" */
	chain_state: Array<Balances_Chain_State>;
	/** fetch aggregated fields from the table: "squid_processor.chain_state" */
	chain_state_aggregate: Balances_Chain_State_Aggregate;
	/** fetch data from the table: "squid_processor.chain_state" using primary key columns */
	chain_state_by_pk?: Maybe<Balances_Chain_State>;
	/** fetch data from the table: "squid_processor.transfer" */
	transfer: Array<Balances_Transfer>;
	/** fetch aggregated fields from the table: "squid_processor.transfer" */
	transfer_aggregate: Balances_Transfer_Aggregate;
	/** fetch data from the table: "squid_processor.transfer" using primary key columns */
	transfer_by_pk?: Maybe<Balances_Transfer>;
};

export type Balances_Balances_QueryAccountArgs = {
	distinct_on?: InputMaybe<Array<Balances_Account_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Account_Order_By>>;
	where?: InputMaybe<Balances_Account_Bool_Exp>;
};

export type Balances_Balances_QueryAccount_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Balances_Account_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Account_Order_By>>;
	where?: InputMaybe<Balances_Account_Bool_Exp>;
};

export type Balances_Balances_QueryAccount_By_PkArgs = {
	id: Scalars["String"];
};

export type Balances_Balances_QueryChain_StateArgs = {
	distinct_on?: InputMaybe<Array<Balances_Chain_State_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Chain_State_Order_By>>;
	where?: InputMaybe<Balances_Chain_State_Bool_Exp>;
};

export type Balances_Balances_QueryChain_State_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Balances_Chain_State_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Chain_State_Order_By>>;
	where?: InputMaybe<Balances_Chain_State_Bool_Exp>;
};

export type Balances_Balances_QueryChain_State_By_PkArgs = {
	id: Scalars["String"];
};

export type Balances_Balances_QueryTransferArgs = {
	distinct_on?: InputMaybe<Array<Balances_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Transfer_Order_By>>;
	where?: InputMaybe<Balances_Transfer_Bool_Exp>;
};

export type Balances_Balances_QueryTransfer_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Balances_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Transfer_Order_By>>;
	where?: InputMaybe<Balances_Transfer_Bool_Exp>;
};

export type Balances_Balances_QueryTransfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Balances_Balances_Subscription = {
	__typename?: "balances_balances_subscription";
	/** fetch data from the table: "squid_processor.account" */
	account: Array<Balances_Account>;
	/** fetch aggregated fields from the table: "squid_processor.account" */
	account_aggregate: Balances_Account_Aggregate;
	/** fetch data from the table: "squid_processor.account" using primary key columns */
	account_by_pk?: Maybe<Balances_Account>;
	/** fetch data from the table in a streaming manner : "squid_processor.account" */
	account_stream: Array<Balances_Account>;
	/** fetch data from the table: "squid_processor.chain_state" */
	chain_state: Array<Balances_Chain_State>;
	/** fetch aggregated fields from the table: "squid_processor.chain_state" */
	chain_state_aggregate: Balances_Chain_State_Aggregate;
	/** fetch data from the table: "squid_processor.chain_state" using primary key columns */
	chain_state_by_pk?: Maybe<Balances_Chain_State>;
	/** fetch data from the table in a streaming manner : "squid_processor.chain_state" */
	chain_state_stream: Array<Balances_Chain_State>;
	/** fetch data from the table: "squid_processor.transfer" */
	transfer: Array<Balances_Transfer>;
	/** fetch aggregated fields from the table: "squid_processor.transfer" */
	transfer_aggregate: Balances_Transfer_Aggregate;
	/** fetch data from the table: "squid_processor.transfer" using primary key columns */
	transfer_by_pk?: Maybe<Balances_Transfer>;
	/** fetch data from the table in a streaming manner : "squid_processor.transfer" */
	transfer_stream: Array<Balances_Transfer>;
};

export type Balances_Balances_SubscriptionAccountArgs = {
	distinct_on?: InputMaybe<Array<Balances_Account_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Account_Order_By>>;
	where?: InputMaybe<Balances_Account_Bool_Exp>;
};

export type Balances_Balances_SubscriptionAccount_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Balances_Account_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Account_Order_By>>;
	where?: InputMaybe<Balances_Account_Bool_Exp>;
};

export type Balances_Balances_SubscriptionAccount_By_PkArgs = {
	id: Scalars["String"];
};

export type Balances_Balances_SubscriptionAccount_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Balances_Account_Stream_Cursor_Input>>;
	where?: InputMaybe<Balances_Account_Bool_Exp>;
};

export type Balances_Balances_SubscriptionChain_StateArgs = {
	distinct_on?: InputMaybe<Array<Balances_Chain_State_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Chain_State_Order_By>>;
	where?: InputMaybe<Balances_Chain_State_Bool_Exp>;
};

export type Balances_Balances_SubscriptionChain_State_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Balances_Chain_State_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Chain_State_Order_By>>;
	where?: InputMaybe<Balances_Chain_State_Bool_Exp>;
};

export type Balances_Balances_SubscriptionChain_State_By_PkArgs = {
	id: Scalars["String"];
};

export type Balances_Balances_SubscriptionChain_State_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Balances_Chain_State_Stream_Cursor_Input>>;
	where?: InputMaybe<Balances_Chain_State_Bool_Exp>;
};

export type Balances_Balances_SubscriptionTransferArgs = {
	distinct_on?: InputMaybe<Array<Balances_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Transfer_Order_By>>;
	where?: InputMaybe<Balances_Transfer_Bool_Exp>;
};

export type Balances_Balances_SubscriptionTransfer_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Balances_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Balances_Transfer_Order_By>>;
	where?: InputMaybe<Balances_Transfer_Bool_Exp>;
};

export type Balances_Balances_SubscriptionTransfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Balances_Balances_SubscriptionTransfer_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Balances_Transfer_Stream_Cursor_Input>>;
	where?: InputMaybe<Balances_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_processor.chain_state" */
export type Balances_Chain_State = {
	__typename?: "balances_chain_state";
	block_number: Scalars["Int"];
	id: Scalars["String"];
	timestamp: Scalars["timestamptz"];
	token_balance: Scalars["numeric"];
	token_holders: Scalars["Int"];
};

/** aggregated selection of "squid_processor.chain_state" */
export type Balances_Chain_State_Aggregate = {
	__typename?: "balances_chain_state_aggregate";
	aggregate?: Maybe<Balances_Chain_State_Aggregate_Fields>;
	nodes: Array<Balances_Chain_State>;
};

/** aggregate fields of "squid_processor.chain_state" */
export type Balances_Chain_State_Aggregate_Fields = {
	__typename?: "balances_chain_state_aggregate_fields";
	avg?: Maybe<Balances_Chain_State_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Balances_Chain_State_Max_Fields>;
	min?: Maybe<Balances_Chain_State_Min_Fields>;
	stddev?: Maybe<Balances_Chain_State_Stddev_Fields>;
	stddev_pop?: Maybe<Balances_Chain_State_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Balances_Chain_State_Stddev_Samp_Fields>;
	sum?: Maybe<Balances_Chain_State_Sum_Fields>;
	var_pop?: Maybe<Balances_Chain_State_Var_Pop_Fields>;
	var_samp?: Maybe<Balances_Chain_State_Var_Samp_Fields>;
	variance?: Maybe<Balances_Chain_State_Variance_Fields>;
};

/** aggregate fields of "squid_processor.chain_state" */
export type Balances_Chain_State_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Balances_Chain_State_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Balances_Chain_State_Avg_Fields = {
	__typename?: "balances_chain_state_avg_fields";
	block_number?: Maybe<Scalars["Float"]>;
	token_balance?: Maybe<Scalars["Float"]>;
	token_holders?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "squid_processor.chain_state". All fields are combined with a logical 'AND'. */
export type Balances_Chain_State_Bool_Exp = {
	_and?: InputMaybe<Array<Balances_Chain_State_Bool_Exp>>;
	_not?: InputMaybe<Balances_Chain_State_Bool_Exp>;
	_or?: InputMaybe<Array<Balances_Chain_State_Bool_Exp>>;
	block_number?: InputMaybe<Int_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
	token_balance?: InputMaybe<Numeric_Comparison_Exp>;
	token_holders?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Balances_Chain_State_Max_Fields = {
	__typename?: "balances_chain_state_max_fields";
	block_number?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	token_balance?: Maybe<Scalars["numeric"]>;
	token_holders?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type Balances_Chain_State_Min_Fields = {
	__typename?: "balances_chain_state_min_fields";
	block_number?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	token_balance?: Maybe<Scalars["numeric"]>;
	token_holders?: Maybe<Scalars["Int"]>;
};

/** Ordering options when selecting data from "squid_processor.chain_state". */
export type Balances_Chain_State_Order_By = {
	block_number?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	token_balance?: InputMaybe<Order_By>;
	token_holders?: InputMaybe<Order_By>;
};

/** select columns of table "squid_processor.chain_state" */
export enum Balances_Chain_State_Select_Column {
	/** column name */
	BlockNumber = "block_number",
	/** column name */
	Id = "id",
	/** column name */
	Timestamp = "timestamp",
	/** column name */
	TokenBalance = "token_balance",
	/** column name */
	TokenHolders = "token_holders",
}

/** aggregate stddev on columns */
export type Balances_Chain_State_Stddev_Fields = {
	__typename?: "balances_chain_state_stddev_fields";
	block_number?: Maybe<Scalars["Float"]>;
	token_balance?: Maybe<Scalars["Float"]>;
	token_holders?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Balances_Chain_State_Stddev_Pop_Fields = {
	__typename?: "balances_chain_state_stddev_pop_fields";
	block_number?: Maybe<Scalars["Float"]>;
	token_balance?: Maybe<Scalars["Float"]>;
	token_holders?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Balances_Chain_State_Stddev_Samp_Fields = {
	__typename?: "balances_chain_state_stddev_samp_fields";
	block_number?: Maybe<Scalars["Float"]>;
	token_balance?: Maybe<Scalars["Float"]>;
	token_holders?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "chain_state" */
export type Balances_Chain_State_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Balances_Chain_State_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Balances_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Balances_Chain_State_Stream_Cursor_Value_Input = {
	block_number?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	token_balance?: InputMaybe<Scalars["numeric"]>;
	token_holders?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Balances_Chain_State_Sum_Fields = {
	__typename?: "balances_chain_state_sum_fields";
	block_number?: Maybe<Scalars["Int"]>;
	token_balance?: Maybe<Scalars["numeric"]>;
	token_holders?: Maybe<Scalars["Int"]>;
};

/** aggregate var_pop on columns */
export type Balances_Chain_State_Var_Pop_Fields = {
	__typename?: "balances_chain_state_var_pop_fields";
	block_number?: Maybe<Scalars["Float"]>;
	token_balance?: Maybe<Scalars["Float"]>;
	token_holders?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Balances_Chain_State_Var_Samp_Fields = {
	__typename?: "balances_chain_state_var_samp_fields";
	block_number?: Maybe<Scalars["Float"]>;
	token_balance?: Maybe<Scalars["Float"]>;
	token_holders?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Balances_Chain_State_Variance_Fields = {
	__typename?: "balances_chain_state_variance_fields";
	block_number?: Maybe<Scalars["Float"]>;
	token_balance?: Maybe<Scalars["Float"]>;
	token_holders?: Maybe<Scalars["Float"]>;
};

/** ordering argument of a cursor */
export enum Balances_Cursor_Ordering {
	/** ascending ordering of the cursor */
	Asc = "ASC",
	/** descending ordering of the cursor */
	Desc = "DESC",
}

/** columns and relationships of "squid_processor.transfer" */
export type Balances_Transfer = {
	__typename?: "balances_transfer";
	/** An object relationship */
	account?: Maybe<Balances_Account>;
	/** An object relationship */
	accountByFromId?: Maybe<Balances_Account>;
	amount: Scalars["numeric"];
	asset_id: Scalars["String"];
	block_number: Scalars["Int"];
	extrinsic_hash?: Maybe<Scalars["String"]>;
	from_id?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	status: Scalars["String"];
	timestamp: Scalars["timestamptz"];
	to_id?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "squid_processor.transfer" */
export type Balances_Transfer_Aggregate = {
	__typename?: "balances_transfer_aggregate";
	aggregate?: Maybe<Balances_Transfer_Aggregate_Fields>;
	nodes: Array<Balances_Transfer>;
};

/** aggregate fields of "squid_processor.transfer" */
export type Balances_Transfer_Aggregate_Fields = {
	__typename?: "balances_transfer_aggregate_fields";
	avg?: Maybe<Balances_Transfer_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Balances_Transfer_Max_Fields>;
	min?: Maybe<Balances_Transfer_Min_Fields>;
	stddev?: Maybe<Balances_Transfer_Stddev_Fields>;
	stddev_pop?: Maybe<Balances_Transfer_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Balances_Transfer_Stddev_Samp_Fields>;
	sum?: Maybe<Balances_Transfer_Sum_Fields>;
	var_pop?: Maybe<Balances_Transfer_Var_Pop_Fields>;
	var_samp?: Maybe<Balances_Transfer_Var_Samp_Fields>;
	variance?: Maybe<Balances_Transfer_Variance_Fields>;
};

/** aggregate fields of "squid_processor.transfer" */
export type Balances_Transfer_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Balances_Transfer_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "squid_processor.transfer" */
export type Balances_Transfer_Aggregate_Order_By = {
	avg?: InputMaybe<Balances_Transfer_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Balances_Transfer_Max_Order_By>;
	min?: InputMaybe<Balances_Transfer_Min_Order_By>;
	stddev?: InputMaybe<Balances_Transfer_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Balances_Transfer_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Balances_Transfer_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Balances_Transfer_Sum_Order_By>;
	var_pop?: InputMaybe<Balances_Transfer_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Balances_Transfer_Var_Samp_Order_By>;
	variance?: InputMaybe<Balances_Transfer_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Balances_Transfer_Avg_Fields = {
	__typename?: "balances_transfer_avg_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "squid_processor.transfer" */
export type Balances_Transfer_Avg_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "squid_processor.transfer". All fields are combined with a logical 'AND'. */
export type Balances_Transfer_Bool_Exp = {
	_and?: InputMaybe<Array<Balances_Transfer_Bool_Exp>>;
	_not?: InputMaybe<Balances_Transfer_Bool_Exp>;
	_or?: InputMaybe<Array<Balances_Transfer_Bool_Exp>>;
	account?: InputMaybe<Balances_Account_Bool_Exp>;
	accountByFromId?: InputMaybe<Balances_Account_Bool_Exp>;
	amount?: InputMaybe<Numeric_Comparison_Exp>;
	asset_id?: InputMaybe<String_Comparison_Exp>;
	block_number?: InputMaybe<Int_Comparison_Exp>;
	extrinsic_hash?: InputMaybe<String_Comparison_Exp>;
	from_id?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	status?: InputMaybe<String_Comparison_Exp>;
	timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
	to_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Balances_Transfer_Max_Fields = {
	__typename?: "balances_transfer_max_fields";
	amount?: Maybe<Scalars["numeric"]>;
	asset_id?: Maybe<Scalars["String"]>;
	block_number?: Maybe<Scalars["Int"]>;
	extrinsic_hash?: Maybe<Scalars["String"]>;
	from_id?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	to_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "squid_processor.transfer" */
export type Balances_Transfer_Max_Order_By = {
	amount?: InputMaybe<Order_By>;
	asset_id?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	extrinsic_hash?: InputMaybe<Order_By>;
	from_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	status?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	to_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Balances_Transfer_Min_Fields = {
	__typename?: "balances_transfer_min_fields";
	amount?: Maybe<Scalars["numeric"]>;
	asset_id?: Maybe<Scalars["String"]>;
	block_number?: Maybe<Scalars["Int"]>;
	extrinsic_hash?: Maybe<Scalars["String"]>;
	from_id?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	to_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "squid_processor.transfer" */
export type Balances_Transfer_Min_Order_By = {
	amount?: InputMaybe<Order_By>;
	asset_id?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	extrinsic_hash?: InputMaybe<Order_By>;
	from_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	status?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	to_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "squid_processor.transfer". */
export type Balances_Transfer_Order_By = {
	account?: InputMaybe<Balances_Account_Order_By>;
	accountByFromId?: InputMaybe<Balances_Account_Order_By>;
	amount?: InputMaybe<Order_By>;
	asset_id?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	extrinsic_hash?: InputMaybe<Order_By>;
	from_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	status?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	to_id?: InputMaybe<Order_By>;
};

/** select columns of table "squid_processor.transfer" */
export enum Balances_Transfer_Select_Column {
	/** column name */
	Amount = "amount",
	/** column name */
	AssetId = "asset_id",
	/** column name */
	BlockNumber = "block_number",
	/** column name */
	ExtrinsicHash = "extrinsic_hash",
	/** column name */
	FromId = "from_id",
	/** column name */
	Id = "id",
	/** column name */
	Status = "status",
	/** column name */
	Timestamp = "timestamp",
	/** column name */
	ToId = "to_id",
}

/** aggregate stddev on columns */
export type Balances_Transfer_Stddev_Fields = {
	__typename?: "balances_transfer_stddev_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "squid_processor.transfer" */
export type Balances_Transfer_Stddev_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Balances_Transfer_Stddev_Pop_Fields = {
	__typename?: "balances_transfer_stddev_pop_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "squid_processor.transfer" */
export type Balances_Transfer_Stddev_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Balances_Transfer_Stddev_Samp_Fields = {
	__typename?: "balances_transfer_stddev_samp_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "squid_processor.transfer" */
export type Balances_Transfer_Stddev_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transfer" */
export type Balances_Transfer_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Balances_Transfer_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Balances_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Balances_Transfer_Stream_Cursor_Value_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
	asset_id?: InputMaybe<Scalars["String"]>;
	block_number?: InputMaybe<Scalars["Int"]>;
	extrinsic_hash?: InputMaybe<Scalars["String"]>;
	from_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	status?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	to_id?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Balances_Transfer_Sum_Fields = {
	__typename?: "balances_transfer_sum_fields";
	amount?: Maybe<Scalars["numeric"]>;
	block_number?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "squid_processor.transfer" */
export type Balances_Transfer_Sum_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Balances_Transfer_Var_Pop_Fields = {
	__typename?: "balances_transfer_var_pop_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "squid_processor.transfer" */
export type Balances_Transfer_Var_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Balances_Transfer_Var_Samp_Fields = {
	__typename?: "balances_transfer_var_samp_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "squid_processor.transfer" */
export type Balances_Transfer_Var_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Balances_Transfer_Variance_Fields = {
	__typename?: "balances_transfer_variance_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "squid_processor.transfer" */
export type Balances_Transfer_Variance_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["bpchar"]>;
	_gt?: InputMaybe<Scalars["bpchar"]>;
	_gte?: InputMaybe<Scalars["bpchar"]>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars["bpchar"]>;
	_in?: InputMaybe<Array<Scalars["bpchar"]>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars["bpchar"]>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars["bpchar"]>;
	_lt?: InputMaybe<Scalars["bpchar"]>;
	_lte?: InputMaybe<Scalars["bpchar"]>;
	_neq?: InputMaybe<Scalars["bpchar"]>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars["bpchar"]>;
	_nin?: InputMaybe<Array<Scalars["bpchar"]>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars["bpchar"]>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars["bpchar"]>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars["bpchar"]>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars["bpchar"]>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars["bpchar"]>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars["bpchar"]>;
};

/** ordering argument of a cursor */
export enum Ebd_Inbox_Cursor_Ordering {
	/** ascending ordering of the cursor */
	Asc = "ASC",
	/** descending ordering of the cursor */
	Desc = "DESC",
}

export type Ebd_Inbox_Ebd_Inbox_Query = {
	__typename?: "ebd_inbox_ebd_inbox_query";
	/** fetch data from the table: "inbox.eth_event" */
	eth_event: Array<Ebd_Inbox_Eth_Event>;
	/** fetch aggregated fields from the table: "inbox.eth_event" */
	eth_event_aggregate: Ebd_Inbox_Eth_Event_Aggregate;
	/** fetch data from the table: "inbox.eth_event" using primary key columns */
	eth_event_by_pk?: Maybe<Ebd_Inbox_Eth_Event>;
	/** fetch data from the table: "inbox.event_proof" */
	event_proof: Array<Ebd_Inbox_Event_Proof>;
	/** fetch aggregated fields from the table: "inbox.event_proof" */
	event_proof_aggregate: Ebd_Inbox_Event_Proof_Aggregate;
	/** fetch data from the table: "inbox.event_proof" using primary key columns */
	event_proof_by_pk?: Maybe<Ebd_Inbox_Event_Proof>;
	/** fetch data from the table: "inbox.root_event" */
	root_event: Array<Ebd_Inbox_Root_Event>;
	/** fetch aggregated fields from the table: "inbox.root_event" */
	root_event_aggregate: Ebd_Inbox_Root_Event_Aggregate;
	/** fetch data from the table: "inbox.root_event" using primary key columns */
	root_event_by_pk?: Maybe<Ebd_Inbox_Root_Event>;
	/** fetch data from the table: "inbox.validator_set" */
	validator_set: Array<Ebd_Inbox_Validator_Set>;
	/** fetch aggregated fields from the table: "inbox.validator_set" */
	validator_set_aggregate: Ebd_Inbox_Validator_Set_Aggregate;
	/** fetch data from the table: "inbox.validator_set" using primary key columns */
	validator_set_by_pk?: Maybe<Ebd_Inbox_Validator_Set>;
};

export type Ebd_Inbox_Ebd_Inbox_QueryEth_EventArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Eth_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Eth_Event_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Eth_Event_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_QueryEth_Event_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Eth_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Eth_Event_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Eth_Event_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_QueryEth_Event_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Inbox_Ebd_Inbox_QueryEvent_ProofArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Event_Proof_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_QueryEvent_Proof_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Event_Proof_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_QueryEvent_Proof_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Inbox_Ebd_Inbox_QueryRoot_EventArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Root_Event_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_QueryRoot_Event_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Root_Event_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_QueryRoot_Event_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Inbox_Ebd_Inbox_QueryValidator_SetArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Validator_Set_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Validator_Set_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Validator_Set_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_QueryValidator_Set_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Validator_Set_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Validator_Set_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Validator_Set_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_QueryValidator_Set_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Inbox_Ebd_Inbox_Subscription = {
	__typename?: "ebd_inbox_ebd_inbox_subscription";
	/** fetch data from the table: "inbox.eth_event" */
	eth_event: Array<Ebd_Inbox_Eth_Event>;
	/** fetch aggregated fields from the table: "inbox.eth_event" */
	eth_event_aggregate: Ebd_Inbox_Eth_Event_Aggregate;
	/** fetch data from the table: "inbox.eth_event" using primary key columns */
	eth_event_by_pk?: Maybe<Ebd_Inbox_Eth_Event>;
	/** fetch data from the table in a streaming manner : "inbox.eth_event" */
	eth_event_stream: Array<Ebd_Inbox_Eth_Event>;
	/** fetch data from the table: "inbox.event_proof" */
	event_proof: Array<Ebd_Inbox_Event_Proof>;
	/** fetch aggregated fields from the table: "inbox.event_proof" */
	event_proof_aggregate: Ebd_Inbox_Event_Proof_Aggregate;
	/** fetch data from the table: "inbox.event_proof" using primary key columns */
	event_proof_by_pk?: Maybe<Ebd_Inbox_Event_Proof>;
	/** fetch data from the table in a streaming manner : "inbox.event_proof" */
	event_proof_stream: Array<Ebd_Inbox_Event_Proof>;
	/** fetch data from the table: "inbox.root_event" */
	root_event: Array<Ebd_Inbox_Root_Event>;
	/** fetch aggregated fields from the table: "inbox.root_event" */
	root_event_aggregate: Ebd_Inbox_Root_Event_Aggregate;
	/** fetch data from the table: "inbox.root_event" using primary key columns */
	root_event_by_pk?: Maybe<Ebd_Inbox_Root_Event>;
	/** fetch data from the table in a streaming manner : "inbox.root_event" */
	root_event_stream: Array<Ebd_Inbox_Root_Event>;
	/** fetch data from the table: "inbox.validator_set" */
	validator_set: Array<Ebd_Inbox_Validator_Set>;
	/** fetch aggregated fields from the table: "inbox.validator_set" */
	validator_set_aggregate: Ebd_Inbox_Validator_Set_Aggregate;
	/** fetch data from the table: "inbox.validator_set" using primary key columns */
	validator_set_by_pk?: Maybe<Ebd_Inbox_Validator_Set>;
	/** fetch data from the table in a streaming manner : "inbox.validator_set" */
	validator_set_stream: Array<Ebd_Inbox_Validator_Set>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionEth_EventArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Eth_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Eth_Event_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Eth_Event_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionEth_Event_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Eth_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Eth_Event_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Eth_Event_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionEth_Event_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionEth_Event_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Ebd_Inbox_Eth_Event_Stream_Cursor_Input>>;
	where?: InputMaybe<Ebd_Inbox_Eth_Event_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionEvent_ProofArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Event_Proof_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionEvent_Proof_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Event_Proof_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionEvent_Proof_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionEvent_Proof_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Ebd_Inbox_Event_Proof_Stream_Cursor_Input>>;
	where?: InputMaybe<Ebd_Inbox_Event_Proof_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionRoot_EventArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Root_Event_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionRoot_Event_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Root_Event_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionRoot_Event_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionRoot_Event_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Ebd_Inbox_Root_Event_Stream_Cursor_Input>>;
	where?: InputMaybe<Ebd_Inbox_Root_Event_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionValidator_SetArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Validator_Set_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Validator_Set_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Validator_Set_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionValidator_Set_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Validator_Set_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Validator_Set_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Validator_Set_Bool_Exp>;
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionValidator_Set_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Inbox_Ebd_Inbox_SubscriptionValidator_Set_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Ebd_Inbox_Validator_Set_Stream_Cursor_Input>>;
	where?: InputMaybe<Ebd_Inbox_Validator_Set_Bool_Exp>;
};

/** columns and relationships of "inbox.eth_event" */
export type Ebd_Inbox_Eth_Event = {
	__typename?: "ebd_inbox_eth_event";
	destination?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	message?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
	tx_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "inbox.eth_event" */
export type Ebd_Inbox_Eth_Event_Aggregate = {
	__typename?: "ebd_inbox_eth_event_aggregate";
	aggregate?: Maybe<Ebd_Inbox_Eth_Event_Aggregate_Fields>;
	nodes: Array<Ebd_Inbox_Eth_Event>;
};

/** aggregate fields of "inbox.eth_event" */
export type Ebd_Inbox_Eth_Event_Aggregate_Fields = {
	__typename?: "ebd_inbox_eth_event_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Ebd_Inbox_Eth_Event_Max_Fields>;
	min?: Maybe<Ebd_Inbox_Eth_Event_Min_Fields>;
};

/** aggregate fields of "inbox.eth_event" */
export type Ebd_Inbox_Eth_Event_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Ebd_Inbox_Eth_Event_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "inbox.eth_event". All fields are combined with a logical 'AND'. */
export type Ebd_Inbox_Eth_Event_Bool_Exp = {
	_and?: InputMaybe<Array<Ebd_Inbox_Eth_Event_Bool_Exp>>;
	_not?: InputMaybe<Ebd_Inbox_Eth_Event_Bool_Exp>;
	_or?: InputMaybe<Array<Ebd_Inbox_Eth_Event_Bool_Exp>>;
	destination?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	message?: InputMaybe<String_Comparison_Exp>;
	source?: InputMaybe<String_Comparison_Exp>;
	status?: InputMaybe<String_Comparison_Exp>;
	tx_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ebd_Inbox_Eth_Event_Max_Fields = {
	__typename?: "ebd_inbox_eth_event_max_fields";
	destination?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	message?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
	tx_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Ebd_Inbox_Eth_Event_Min_Fields = {
	__typename?: "ebd_inbox_eth_event_min_fields";
	destination?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	message?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
	tx_hash?: Maybe<Scalars["String"]>;
};

/** Ordering options when selecting data from "inbox.eth_event". */
export type Ebd_Inbox_Eth_Event_Order_By = {
	destination?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	message?: InputMaybe<Order_By>;
	source?: InputMaybe<Order_By>;
	status?: InputMaybe<Order_By>;
	tx_hash?: InputMaybe<Order_By>;
};

/** select columns of table "inbox.eth_event" */
export enum Ebd_Inbox_Eth_Event_Select_Column {
	/** column name */
	Destination = "destination",
	/** column name */
	Id = "id",
	/** column name */
	Message = "message",
	/** column name */
	Source = "source",
	/** column name */
	Status = "status",
	/** column name */
	TxHash = "tx_hash",
}

/** Streaming cursor of the table "eth_event" */
export type Ebd_Inbox_Eth_Event_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Ebd_Inbox_Eth_Event_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Ebd_Inbox_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ebd_Inbox_Eth_Event_Stream_Cursor_Value_Input = {
	destination?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	message?: InputMaybe<Scalars["String"]>;
	source?: InputMaybe<Scalars["String"]>;
	status?: InputMaybe<Scalars["String"]>;
	tx_hash?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "inbox.event_proof" */
export type Ebd_Inbox_Event_Proof = {
	__typename?: "ebd_inbox_event_proof";
	block_hash?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** An array relationship */
	root_events: Array<Ebd_Inbox_Root_Event>;
	/** An aggregate relationship */
	root_events_aggregate: Ebd_Inbox_Root_Event_Aggregate;
	signature?: Maybe<Scalars["jsonb"]>;
	tag?: Maybe<Scalars["String"]>;
	/** An object relationship */
	validator_set?: Maybe<Ebd_Inbox_Validator_Set>;
	validator_set_id?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "inbox.event_proof" */
export type Ebd_Inbox_Event_ProofRoot_EventsArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Root_Event_Bool_Exp>;
};

/** columns and relationships of "inbox.event_proof" */
export type Ebd_Inbox_Event_ProofRoot_Events_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Root_Event_Bool_Exp>;
};

/** columns and relationships of "inbox.event_proof" */
export type Ebd_Inbox_Event_ProofSignatureArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "inbox.event_proof" */
export type Ebd_Inbox_Event_Proof_Aggregate = {
	__typename?: "ebd_inbox_event_proof_aggregate";
	aggregate?: Maybe<Ebd_Inbox_Event_Proof_Aggregate_Fields>;
	nodes: Array<Ebd_Inbox_Event_Proof>;
};

/** aggregate fields of "inbox.event_proof" */
export type Ebd_Inbox_Event_Proof_Aggregate_Fields = {
	__typename?: "ebd_inbox_event_proof_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Ebd_Inbox_Event_Proof_Max_Fields>;
	min?: Maybe<Ebd_Inbox_Event_Proof_Min_Fields>;
};

/** aggregate fields of "inbox.event_proof" */
export type Ebd_Inbox_Event_Proof_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "inbox.event_proof" */
export type Ebd_Inbox_Event_Proof_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Ebd_Inbox_Event_Proof_Max_Order_By>;
	min?: InputMaybe<Ebd_Inbox_Event_Proof_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "inbox.event_proof". All fields are combined with a logical 'AND'. */
export type Ebd_Inbox_Event_Proof_Bool_Exp = {
	_and?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Bool_Exp>>;
	_not?: InputMaybe<Ebd_Inbox_Event_Proof_Bool_Exp>;
	_or?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Bool_Exp>>;
	block_hash?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	root_events?: InputMaybe<Ebd_Inbox_Root_Event_Bool_Exp>;
	signature?: InputMaybe<Jsonb_Comparison_Exp>;
	tag?: InputMaybe<String_Comparison_Exp>;
	validator_set?: InputMaybe<Ebd_Inbox_Validator_Set_Bool_Exp>;
	validator_set_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ebd_Inbox_Event_Proof_Max_Fields = {
	__typename?: "ebd_inbox_event_proof_max_fields";
	block_hash?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	tag?: Maybe<Scalars["String"]>;
	validator_set_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "inbox.event_proof" */
export type Ebd_Inbox_Event_Proof_Max_Order_By = {
	block_hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	tag?: InputMaybe<Order_By>;
	validator_set_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ebd_Inbox_Event_Proof_Min_Fields = {
	__typename?: "ebd_inbox_event_proof_min_fields";
	block_hash?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	tag?: Maybe<Scalars["String"]>;
	validator_set_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "inbox.event_proof" */
export type Ebd_Inbox_Event_Proof_Min_Order_By = {
	block_hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	tag?: InputMaybe<Order_By>;
	validator_set_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "inbox.event_proof". */
export type Ebd_Inbox_Event_Proof_Order_By = {
	block_hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	root_events_aggregate?: InputMaybe<Ebd_Inbox_Root_Event_Aggregate_Order_By>;
	signature?: InputMaybe<Order_By>;
	tag?: InputMaybe<Order_By>;
	validator_set?: InputMaybe<Ebd_Inbox_Validator_Set_Order_By>;
	validator_set_id?: InputMaybe<Order_By>;
};

/** select columns of table "inbox.event_proof" */
export enum Ebd_Inbox_Event_Proof_Select_Column {
	/** column name */
	BlockHash = "block_hash",
	/** column name */
	Id = "id",
	/** column name */
	Signature = "signature",
	/** column name */
	Tag = "tag",
	/** column name */
	ValidatorSetId = "validator_set_id",
}

/** Streaming cursor of the table "event_proof" */
export type Ebd_Inbox_Event_Proof_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Ebd_Inbox_Event_Proof_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Ebd_Inbox_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ebd_Inbox_Event_Proof_Stream_Cursor_Value_Input = {
	block_hash?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	signature?: InputMaybe<Scalars["jsonb"]>;
	tag?: InputMaybe<Scalars["String"]>;
	validator_set_id?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "inbox.root_event" */
export type Ebd_Inbox_Root_Event = {
	__typename?: "ebd_inbox_root_event";
	destination?: Maybe<Scalars["String"]>;
	/** An object relationship */
	event_proof?: Maybe<Ebd_Inbox_Event_Proof>;
	id: Scalars["String"];
	message?: Maybe<Scalars["String"]>;
	proof_id?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "inbox.root_event" */
export type Ebd_Inbox_Root_Event_Aggregate = {
	__typename?: "ebd_inbox_root_event_aggregate";
	aggregate?: Maybe<Ebd_Inbox_Root_Event_Aggregate_Fields>;
	nodes: Array<Ebd_Inbox_Root_Event>;
};

/** aggregate fields of "inbox.root_event" */
export type Ebd_Inbox_Root_Event_Aggregate_Fields = {
	__typename?: "ebd_inbox_root_event_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Ebd_Inbox_Root_Event_Max_Fields>;
	min?: Maybe<Ebd_Inbox_Root_Event_Min_Fields>;
};

/** aggregate fields of "inbox.root_event" */
export type Ebd_Inbox_Root_Event_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Ebd_Inbox_Root_Event_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "inbox.root_event" */
export type Ebd_Inbox_Root_Event_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Ebd_Inbox_Root_Event_Max_Order_By>;
	min?: InputMaybe<Ebd_Inbox_Root_Event_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "inbox.root_event". All fields are combined with a logical 'AND'. */
export type Ebd_Inbox_Root_Event_Bool_Exp = {
	_and?: InputMaybe<Array<Ebd_Inbox_Root_Event_Bool_Exp>>;
	_not?: InputMaybe<Ebd_Inbox_Root_Event_Bool_Exp>;
	_or?: InputMaybe<Array<Ebd_Inbox_Root_Event_Bool_Exp>>;
	destination?: InputMaybe<String_Comparison_Exp>;
	event_proof?: InputMaybe<Ebd_Inbox_Event_Proof_Bool_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	message?: InputMaybe<String_Comparison_Exp>;
	proof_id?: InputMaybe<String_Comparison_Exp>;
	source?: InputMaybe<String_Comparison_Exp>;
	status?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ebd_Inbox_Root_Event_Max_Fields = {
	__typename?: "ebd_inbox_root_event_max_fields";
	destination?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	message?: Maybe<Scalars["String"]>;
	proof_id?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "inbox.root_event" */
export type Ebd_Inbox_Root_Event_Max_Order_By = {
	destination?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	message?: InputMaybe<Order_By>;
	proof_id?: InputMaybe<Order_By>;
	source?: InputMaybe<Order_By>;
	status?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ebd_Inbox_Root_Event_Min_Fields = {
	__typename?: "ebd_inbox_root_event_min_fields";
	destination?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	message?: Maybe<Scalars["String"]>;
	proof_id?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "inbox.root_event" */
export type Ebd_Inbox_Root_Event_Min_Order_By = {
	destination?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	message?: InputMaybe<Order_By>;
	proof_id?: InputMaybe<Order_By>;
	source?: InputMaybe<Order_By>;
	status?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "inbox.root_event". */
export type Ebd_Inbox_Root_Event_Order_By = {
	destination?: InputMaybe<Order_By>;
	event_proof?: InputMaybe<Ebd_Inbox_Event_Proof_Order_By>;
	id?: InputMaybe<Order_By>;
	message?: InputMaybe<Order_By>;
	proof_id?: InputMaybe<Order_By>;
	source?: InputMaybe<Order_By>;
	status?: InputMaybe<Order_By>;
};

/** select columns of table "inbox.root_event" */
export enum Ebd_Inbox_Root_Event_Select_Column {
	/** column name */
	Destination = "destination",
	/** column name */
	Id = "id",
	/** column name */
	Message = "message",
	/** column name */
	ProofId = "proof_id",
	/** column name */
	Source = "source",
	/** column name */
	Status = "status",
}

/** Streaming cursor of the table "root_event" */
export type Ebd_Inbox_Root_Event_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Ebd_Inbox_Root_Event_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Ebd_Inbox_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ebd_Inbox_Root_Event_Stream_Cursor_Value_Input = {
	destination?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	message?: InputMaybe<Scalars["String"]>;
	proof_id?: InputMaybe<Scalars["String"]>;
	source?: InputMaybe<Scalars["String"]>;
	status?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "inbox.validator_set" */
export type Ebd_Inbox_Validator_Set = {
	__typename?: "ebd_inbox_validator_set";
	/** An array relationship */
	event_proofs: Array<Ebd_Inbox_Event_Proof>;
	/** An aggregate relationship */
	event_proofs_aggregate: Ebd_Inbox_Event_Proof_Aggregate;
	id: Scalars["String"];
	validators?: Maybe<Scalars["_text"]>;
};

/** columns and relationships of "inbox.validator_set" */
export type Ebd_Inbox_Validator_SetEvent_ProofsArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Event_Proof_Bool_Exp>;
};

/** columns and relationships of "inbox.validator_set" */
export type Ebd_Inbox_Validator_SetEvent_Proofs_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Inbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Inbox_Event_Proof_Bool_Exp>;
};

/** aggregated selection of "inbox.validator_set" */
export type Ebd_Inbox_Validator_Set_Aggregate = {
	__typename?: "ebd_inbox_validator_set_aggregate";
	aggregate?: Maybe<Ebd_Inbox_Validator_Set_Aggregate_Fields>;
	nodes: Array<Ebd_Inbox_Validator_Set>;
};

/** aggregate fields of "inbox.validator_set" */
export type Ebd_Inbox_Validator_Set_Aggregate_Fields = {
	__typename?: "ebd_inbox_validator_set_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Ebd_Inbox_Validator_Set_Max_Fields>;
	min?: Maybe<Ebd_Inbox_Validator_Set_Min_Fields>;
};

/** aggregate fields of "inbox.validator_set" */
export type Ebd_Inbox_Validator_Set_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Ebd_Inbox_Validator_Set_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "inbox.validator_set". All fields are combined with a logical 'AND'. */
export type Ebd_Inbox_Validator_Set_Bool_Exp = {
	_and?: InputMaybe<Array<Ebd_Inbox_Validator_Set_Bool_Exp>>;
	_not?: InputMaybe<Ebd_Inbox_Validator_Set_Bool_Exp>;
	_or?: InputMaybe<Array<Ebd_Inbox_Validator_Set_Bool_Exp>>;
	event_proofs?: InputMaybe<Ebd_Inbox_Event_Proof_Bool_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	validators?: InputMaybe<_Text_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ebd_Inbox_Validator_Set_Max_Fields = {
	__typename?: "ebd_inbox_validator_set_max_fields";
	id?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Ebd_Inbox_Validator_Set_Min_Fields = {
	__typename?: "ebd_inbox_validator_set_min_fields";
	id?: Maybe<Scalars["String"]>;
};

/** Ordering options when selecting data from "inbox.validator_set". */
export type Ebd_Inbox_Validator_Set_Order_By = {
	event_proofs_aggregate?: InputMaybe<Ebd_Inbox_Event_Proof_Aggregate_Order_By>;
	id?: InputMaybe<Order_By>;
	validators?: InputMaybe<Order_By>;
};

/** select columns of table "inbox.validator_set" */
export enum Ebd_Inbox_Validator_Set_Select_Column {
	/** column name */
	Id = "id",
	/** column name */
	Validators = "validators",
}

/** Streaming cursor of the table "validator_set" */
export type Ebd_Inbox_Validator_Set_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Ebd_Inbox_Validator_Set_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Ebd_Inbox_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ebd_Inbox_Validator_Set_Stream_Cursor_Value_Input = {
	id?: InputMaybe<Scalars["String"]>;
	validators?: InputMaybe<Scalars["_text"]>;
};

/** ordering argument of a cursor */
export enum Ebd_Outbox_Cursor_Ordering {
	/** ascending ordering of the cursor */
	Asc = "ASC",
	/** descending ordering of the cursor */
	Desc = "DESC",
}

export type Ebd_Outbox_Ebd_Outbox_Query = {
	__typename?: "ebd_outbox_ebd_outbox_query";
	/** fetch data from the table: "outbox.eth_event" */
	eth_event: Array<Ebd_Outbox_Eth_Event>;
	/** fetch aggregated fields from the table: "outbox.eth_event" */
	eth_event_aggregate: Ebd_Outbox_Eth_Event_Aggregate;
	/** fetch data from the table: "outbox.eth_event" using primary key columns */
	eth_event_by_pk?: Maybe<Ebd_Outbox_Eth_Event>;
	/** fetch data from the table: "outbox.event_proof" */
	event_proof: Array<Ebd_Outbox_Event_Proof>;
	/** fetch aggregated fields from the table: "outbox.event_proof" */
	event_proof_aggregate: Ebd_Outbox_Event_Proof_Aggregate;
	/** fetch data from the table: "outbox.event_proof" using primary key columns */
	event_proof_by_pk?: Maybe<Ebd_Outbox_Event_Proof>;
	/** fetch data from the table: "outbox.root_event" */
	root_event: Array<Ebd_Outbox_Root_Event>;
	/** fetch aggregated fields from the table: "outbox.root_event" */
	root_event_aggregate: Ebd_Outbox_Root_Event_Aggregate;
	/** fetch data from the table: "outbox.root_event" using primary key columns */
	root_event_by_pk?: Maybe<Ebd_Outbox_Root_Event>;
	/** fetch data from the table: "outbox.validator_set" */
	validator_set: Array<Ebd_Outbox_Validator_Set>;
	/** fetch aggregated fields from the table: "outbox.validator_set" */
	validator_set_aggregate: Ebd_Outbox_Validator_Set_Aggregate;
	/** fetch data from the table: "outbox.validator_set" using primary key columns */
	validator_set_by_pk?: Maybe<Ebd_Outbox_Validator_Set>;
};

export type Ebd_Outbox_Ebd_Outbox_QueryEth_EventArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Eth_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Eth_Event_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Eth_Event_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_QueryEth_Event_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Eth_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Eth_Event_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Eth_Event_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_QueryEth_Event_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Outbox_Ebd_Outbox_QueryEvent_ProofArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Event_Proof_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_QueryEvent_Proof_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Event_Proof_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_QueryEvent_Proof_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Outbox_Ebd_Outbox_QueryRoot_EventArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Root_Event_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_QueryRoot_Event_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Root_Event_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_QueryRoot_Event_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Outbox_Ebd_Outbox_QueryValidator_SetArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Validator_Set_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Validator_Set_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Validator_Set_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_QueryValidator_Set_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Validator_Set_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Validator_Set_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Validator_Set_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_QueryValidator_Set_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Outbox_Ebd_Outbox_Subscription = {
	__typename?: "ebd_outbox_ebd_outbox_subscription";
	/** fetch data from the table: "outbox.eth_event" */
	eth_event: Array<Ebd_Outbox_Eth_Event>;
	/** fetch aggregated fields from the table: "outbox.eth_event" */
	eth_event_aggregate: Ebd_Outbox_Eth_Event_Aggregate;
	/** fetch data from the table: "outbox.eth_event" using primary key columns */
	eth_event_by_pk?: Maybe<Ebd_Outbox_Eth_Event>;
	/** fetch data from the table in a streaming manner : "outbox.eth_event" */
	eth_event_stream: Array<Ebd_Outbox_Eth_Event>;
	/** fetch data from the table: "outbox.event_proof" */
	event_proof: Array<Ebd_Outbox_Event_Proof>;
	/** fetch aggregated fields from the table: "outbox.event_proof" */
	event_proof_aggregate: Ebd_Outbox_Event_Proof_Aggregate;
	/** fetch data from the table: "outbox.event_proof" using primary key columns */
	event_proof_by_pk?: Maybe<Ebd_Outbox_Event_Proof>;
	/** fetch data from the table in a streaming manner : "outbox.event_proof" */
	event_proof_stream: Array<Ebd_Outbox_Event_Proof>;
	/** fetch data from the table: "outbox.root_event" */
	root_event: Array<Ebd_Outbox_Root_Event>;
	/** fetch aggregated fields from the table: "outbox.root_event" */
	root_event_aggregate: Ebd_Outbox_Root_Event_Aggregate;
	/** fetch data from the table: "outbox.root_event" using primary key columns */
	root_event_by_pk?: Maybe<Ebd_Outbox_Root_Event>;
	/** fetch data from the table in a streaming manner : "outbox.root_event" */
	root_event_stream: Array<Ebd_Outbox_Root_Event>;
	/** fetch data from the table: "outbox.validator_set" */
	validator_set: Array<Ebd_Outbox_Validator_Set>;
	/** fetch aggregated fields from the table: "outbox.validator_set" */
	validator_set_aggregate: Ebd_Outbox_Validator_Set_Aggregate;
	/** fetch data from the table: "outbox.validator_set" using primary key columns */
	validator_set_by_pk?: Maybe<Ebd_Outbox_Validator_Set>;
	/** fetch data from the table in a streaming manner : "outbox.validator_set" */
	validator_set_stream: Array<Ebd_Outbox_Validator_Set>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionEth_EventArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Eth_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Eth_Event_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Eth_Event_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionEth_Event_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Eth_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Eth_Event_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Eth_Event_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionEth_Event_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionEth_Event_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Ebd_Outbox_Eth_Event_Stream_Cursor_Input>>;
	where?: InputMaybe<Ebd_Outbox_Eth_Event_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionEvent_ProofArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Event_Proof_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionEvent_Proof_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Event_Proof_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionEvent_Proof_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionEvent_Proof_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Ebd_Outbox_Event_Proof_Stream_Cursor_Input>>;
	where?: InputMaybe<Ebd_Outbox_Event_Proof_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionRoot_EventArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Root_Event_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionRoot_Event_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Root_Event_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionRoot_Event_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionRoot_Event_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Ebd_Outbox_Root_Event_Stream_Cursor_Input>>;
	where?: InputMaybe<Ebd_Outbox_Root_Event_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionValidator_SetArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Validator_Set_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Validator_Set_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Validator_Set_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionValidator_Set_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Validator_Set_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Validator_Set_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Validator_Set_Bool_Exp>;
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionValidator_Set_By_PkArgs = {
	id: Scalars["String"];
};

export type Ebd_Outbox_Ebd_Outbox_SubscriptionValidator_Set_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Ebd_Outbox_Validator_Set_Stream_Cursor_Input>>;
	where?: InputMaybe<Ebd_Outbox_Validator_Set_Bool_Exp>;
};

/** columns and relationships of "outbox.eth_event" */
export type Ebd_Outbox_Eth_Event = {
	__typename?: "ebd_outbox_eth_event";
	destination?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	message?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
	tx_hash?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "outbox.eth_event" */
export type Ebd_Outbox_Eth_Event_Aggregate = {
	__typename?: "ebd_outbox_eth_event_aggregate";
	aggregate?: Maybe<Ebd_Outbox_Eth_Event_Aggregate_Fields>;
	nodes: Array<Ebd_Outbox_Eth_Event>;
};

/** aggregate fields of "outbox.eth_event" */
export type Ebd_Outbox_Eth_Event_Aggregate_Fields = {
	__typename?: "ebd_outbox_eth_event_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Ebd_Outbox_Eth_Event_Max_Fields>;
	min?: Maybe<Ebd_Outbox_Eth_Event_Min_Fields>;
};

/** aggregate fields of "outbox.eth_event" */
export type Ebd_Outbox_Eth_Event_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Ebd_Outbox_Eth_Event_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "outbox.eth_event". All fields are combined with a logical 'AND'. */
export type Ebd_Outbox_Eth_Event_Bool_Exp = {
	_and?: InputMaybe<Array<Ebd_Outbox_Eth_Event_Bool_Exp>>;
	_not?: InputMaybe<Ebd_Outbox_Eth_Event_Bool_Exp>;
	_or?: InputMaybe<Array<Ebd_Outbox_Eth_Event_Bool_Exp>>;
	destination?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	message?: InputMaybe<String_Comparison_Exp>;
	source?: InputMaybe<String_Comparison_Exp>;
	status?: InputMaybe<String_Comparison_Exp>;
	tx_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ebd_Outbox_Eth_Event_Max_Fields = {
	__typename?: "ebd_outbox_eth_event_max_fields";
	destination?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	message?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
	tx_hash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Ebd_Outbox_Eth_Event_Min_Fields = {
	__typename?: "ebd_outbox_eth_event_min_fields";
	destination?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	message?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
	tx_hash?: Maybe<Scalars["String"]>;
};

/** Ordering options when selecting data from "outbox.eth_event". */
export type Ebd_Outbox_Eth_Event_Order_By = {
	destination?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	message?: InputMaybe<Order_By>;
	source?: InputMaybe<Order_By>;
	status?: InputMaybe<Order_By>;
	tx_hash?: InputMaybe<Order_By>;
};

/** select columns of table "outbox.eth_event" */
export enum Ebd_Outbox_Eth_Event_Select_Column {
	/** column name */
	Destination = "destination",
	/** column name */
	Id = "id",
	/** column name */
	Message = "message",
	/** column name */
	Source = "source",
	/** column name */
	Status = "status",
	/** column name */
	TxHash = "tx_hash",
}

/** Streaming cursor of the table "eth_event" */
export type Ebd_Outbox_Eth_Event_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Ebd_Outbox_Eth_Event_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Ebd_Outbox_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ebd_Outbox_Eth_Event_Stream_Cursor_Value_Input = {
	destination?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	message?: InputMaybe<Scalars["String"]>;
	source?: InputMaybe<Scalars["String"]>;
	status?: InputMaybe<Scalars["String"]>;
	tx_hash?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "outbox.event_proof" */
export type Ebd_Outbox_Event_Proof = {
	__typename?: "ebd_outbox_event_proof";
	block_hash?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** An array relationship */
	root_events: Array<Ebd_Outbox_Root_Event>;
	/** An aggregate relationship */
	root_events_aggregate: Ebd_Outbox_Root_Event_Aggregate;
	signature?: Maybe<Scalars["jsonb"]>;
	tag?: Maybe<Scalars["String"]>;
	/** An object relationship */
	validator_set?: Maybe<Ebd_Outbox_Validator_Set>;
	validator_set_id?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "outbox.event_proof" */
export type Ebd_Outbox_Event_ProofRoot_EventsArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Root_Event_Bool_Exp>;
};

/** columns and relationships of "outbox.event_proof" */
export type Ebd_Outbox_Event_ProofRoot_Events_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Root_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Root_Event_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Root_Event_Bool_Exp>;
};

/** columns and relationships of "outbox.event_proof" */
export type Ebd_Outbox_Event_ProofSignatureArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "outbox.event_proof" */
export type Ebd_Outbox_Event_Proof_Aggregate = {
	__typename?: "ebd_outbox_event_proof_aggregate";
	aggregate?: Maybe<Ebd_Outbox_Event_Proof_Aggregate_Fields>;
	nodes: Array<Ebd_Outbox_Event_Proof>;
};

/** aggregate fields of "outbox.event_proof" */
export type Ebd_Outbox_Event_Proof_Aggregate_Fields = {
	__typename?: "ebd_outbox_event_proof_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Ebd_Outbox_Event_Proof_Max_Fields>;
	min?: Maybe<Ebd_Outbox_Event_Proof_Min_Fields>;
};

/** aggregate fields of "outbox.event_proof" */
export type Ebd_Outbox_Event_Proof_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "outbox.event_proof" */
export type Ebd_Outbox_Event_Proof_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Ebd_Outbox_Event_Proof_Max_Order_By>;
	min?: InputMaybe<Ebd_Outbox_Event_Proof_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "outbox.event_proof". All fields are combined with a logical 'AND'. */
export type Ebd_Outbox_Event_Proof_Bool_Exp = {
	_and?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Bool_Exp>>;
	_not?: InputMaybe<Ebd_Outbox_Event_Proof_Bool_Exp>;
	_or?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Bool_Exp>>;
	block_hash?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	root_events?: InputMaybe<Ebd_Outbox_Root_Event_Bool_Exp>;
	signature?: InputMaybe<Jsonb_Comparison_Exp>;
	tag?: InputMaybe<String_Comparison_Exp>;
	validator_set?: InputMaybe<Ebd_Outbox_Validator_Set_Bool_Exp>;
	validator_set_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ebd_Outbox_Event_Proof_Max_Fields = {
	__typename?: "ebd_outbox_event_proof_max_fields";
	block_hash?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	tag?: Maybe<Scalars["String"]>;
	validator_set_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "outbox.event_proof" */
export type Ebd_Outbox_Event_Proof_Max_Order_By = {
	block_hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	tag?: InputMaybe<Order_By>;
	validator_set_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ebd_Outbox_Event_Proof_Min_Fields = {
	__typename?: "ebd_outbox_event_proof_min_fields";
	block_hash?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	tag?: Maybe<Scalars["String"]>;
	validator_set_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "outbox.event_proof" */
export type Ebd_Outbox_Event_Proof_Min_Order_By = {
	block_hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	tag?: InputMaybe<Order_By>;
	validator_set_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "outbox.event_proof". */
export type Ebd_Outbox_Event_Proof_Order_By = {
	block_hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	root_events_aggregate?: InputMaybe<Ebd_Outbox_Root_Event_Aggregate_Order_By>;
	signature?: InputMaybe<Order_By>;
	tag?: InputMaybe<Order_By>;
	validator_set?: InputMaybe<Ebd_Outbox_Validator_Set_Order_By>;
	validator_set_id?: InputMaybe<Order_By>;
};

/** select columns of table "outbox.event_proof" */
export enum Ebd_Outbox_Event_Proof_Select_Column {
	/** column name */
	BlockHash = "block_hash",
	/** column name */
	Id = "id",
	/** column name */
	Signature = "signature",
	/** column name */
	Tag = "tag",
	/** column name */
	ValidatorSetId = "validator_set_id",
}

/** Streaming cursor of the table "event_proof" */
export type Ebd_Outbox_Event_Proof_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Ebd_Outbox_Event_Proof_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Ebd_Outbox_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ebd_Outbox_Event_Proof_Stream_Cursor_Value_Input = {
	block_hash?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	signature?: InputMaybe<Scalars["jsonb"]>;
	tag?: InputMaybe<Scalars["String"]>;
	validator_set_id?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "outbox.root_event" */
export type Ebd_Outbox_Root_Event = {
	__typename?: "ebd_outbox_root_event";
	destination?: Maybe<Scalars["String"]>;
	/** An object relationship */
	event_proof?: Maybe<Ebd_Outbox_Event_Proof>;
	id: Scalars["String"];
	message?: Maybe<Scalars["String"]>;
	proof_id?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "outbox.root_event" */
export type Ebd_Outbox_Root_Event_Aggregate = {
	__typename?: "ebd_outbox_root_event_aggregate";
	aggregate?: Maybe<Ebd_Outbox_Root_Event_Aggregate_Fields>;
	nodes: Array<Ebd_Outbox_Root_Event>;
};

/** aggregate fields of "outbox.root_event" */
export type Ebd_Outbox_Root_Event_Aggregate_Fields = {
	__typename?: "ebd_outbox_root_event_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Ebd_Outbox_Root_Event_Max_Fields>;
	min?: Maybe<Ebd_Outbox_Root_Event_Min_Fields>;
};

/** aggregate fields of "outbox.root_event" */
export type Ebd_Outbox_Root_Event_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Ebd_Outbox_Root_Event_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "outbox.root_event" */
export type Ebd_Outbox_Root_Event_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Ebd_Outbox_Root_Event_Max_Order_By>;
	min?: InputMaybe<Ebd_Outbox_Root_Event_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "outbox.root_event". All fields are combined with a logical 'AND'. */
export type Ebd_Outbox_Root_Event_Bool_Exp = {
	_and?: InputMaybe<Array<Ebd_Outbox_Root_Event_Bool_Exp>>;
	_not?: InputMaybe<Ebd_Outbox_Root_Event_Bool_Exp>;
	_or?: InputMaybe<Array<Ebd_Outbox_Root_Event_Bool_Exp>>;
	destination?: InputMaybe<String_Comparison_Exp>;
	event_proof?: InputMaybe<Ebd_Outbox_Event_Proof_Bool_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	message?: InputMaybe<String_Comparison_Exp>;
	proof_id?: InputMaybe<String_Comparison_Exp>;
	source?: InputMaybe<String_Comparison_Exp>;
	status?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ebd_Outbox_Root_Event_Max_Fields = {
	__typename?: "ebd_outbox_root_event_max_fields";
	destination?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	message?: Maybe<Scalars["String"]>;
	proof_id?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "outbox.root_event" */
export type Ebd_Outbox_Root_Event_Max_Order_By = {
	destination?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	message?: InputMaybe<Order_By>;
	proof_id?: InputMaybe<Order_By>;
	source?: InputMaybe<Order_By>;
	status?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ebd_Outbox_Root_Event_Min_Fields = {
	__typename?: "ebd_outbox_root_event_min_fields";
	destination?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	message?: Maybe<Scalars["String"]>;
	proof_id?: Maybe<Scalars["String"]>;
	source?: Maybe<Scalars["String"]>;
	status?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "outbox.root_event" */
export type Ebd_Outbox_Root_Event_Min_Order_By = {
	destination?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	message?: InputMaybe<Order_By>;
	proof_id?: InputMaybe<Order_By>;
	source?: InputMaybe<Order_By>;
	status?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "outbox.root_event". */
export type Ebd_Outbox_Root_Event_Order_By = {
	destination?: InputMaybe<Order_By>;
	event_proof?: InputMaybe<Ebd_Outbox_Event_Proof_Order_By>;
	id?: InputMaybe<Order_By>;
	message?: InputMaybe<Order_By>;
	proof_id?: InputMaybe<Order_By>;
	source?: InputMaybe<Order_By>;
	status?: InputMaybe<Order_By>;
};

/** select columns of table "outbox.root_event" */
export enum Ebd_Outbox_Root_Event_Select_Column {
	/** column name */
	Destination = "destination",
	/** column name */
	Id = "id",
	/** column name */
	Message = "message",
	/** column name */
	ProofId = "proof_id",
	/** column name */
	Source = "source",
	/** column name */
	Status = "status",
}

/** Streaming cursor of the table "root_event" */
export type Ebd_Outbox_Root_Event_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Ebd_Outbox_Root_Event_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Ebd_Outbox_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ebd_Outbox_Root_Event_Stream_Cursor_Value_Input = {
	destination?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	message?: InputMaybe<Scalars["String"]>;
	proof_id?: InputMaybe<Scalars["String"]>;
	source?: InputMaybe<Scalars["String"]>;
	status?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "outbox.validator_set" */
export type Ebd_Outbox_Validator_Set = {
	__typename?: "ebd_outbox_validator_set";
	/** An array relationship */
	event_proofs: Array<Ebd_Outbox_Event_Proof>;
	/** An aggregate relationship */
	event_proofs_aggregate: Ebd_Outbox_Event_Proof_Aggregate;
	id: Scalars["String"];
	validators?: Maybe<Scalars["_text"]>;
};

/** columns and relationships of "outbox.validator_set" */
export type Ebd_Outbox_Validator_SetEvent_ProofsArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Event_Proof_Bool_Exp>;
};

/** columns and relationships of "outbox.validator_set" */
export type Ebd_Outbox_Validator_SetEvent_Proofs_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Ebd_Outbox_Event_Proof_Order_By>>;
	where?: InputMaybe<Ebd_Outbox_Event_Proof_Bool_Exp>;
};

/** aggregated selection of "outbox.validator_set" */
export type Ebd_Outbox_Validator_Set_Aggregate = {
	__typename?: "ebd_outbox_validator_set_aggregate";
	aggregate?: Maybe<Ebd_Outbox_Validator_Set_Aggregate_Fields>;
	nodes: Array<Ebd_Outbox_Validator_Set>;
};

/** aggregate fields of "outbox.validator_set" */
export type Ebd_Outbox_Validator_Set_Aggregate_Fields = {
	__typename?: "ebd_outbox_validator_set_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Ebd_Outbox_Validator_Set_Max_Fields>;
	min?: Maybe<Ebd_Outbox_Validator_Set_Min_Fields>;
};

/** aggregate fields of "outbox.validator_set" */
export type Ebd_Outbox_Validator_Set_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Ebd_Outbox_Validator_Set_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "outbox.validator_set". All fields are combined with a logical 'AND'. */
export type Ebd_Outbox_Validator_Set_Bool_Exp = {
	_and?: InputMaybe<Array<Ebd_Outbox_Validator_Set_Bool_Exp>>;
	_not?: InputMaybe<Ebd_Outbox_Validator_Set_Bool_Exp>;
	_or?: InputMaybe<Array<Ebd_Outbox_Validator_Set_Bool_Exp>>;
	event_proofs?: InputMaybe<Ebd_Outbox_Event_Proof_Bool_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	validators?: InputMaybe<_Text_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ebd_Outbox_Validator_Set_Max_Fields = {
	__typename?: "ebd_outbox_validator_set_max_fields";
	id?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Ebd_Outbox_Validator_Set_Min_Fields = {
	__typename?: "ebd_outbox_validator_set_min_fields";
	id?: Maybe<Scalars["String"]>;
};

/** Ordering options when selecting data from "outbox.validator_set". */
export type Ebd_Outbox_Validator_Set_Order_By = {
	event_proofs_aggregate?: InputMaybe<Ebd_Outbox_Event_Proof_Aggregate_Order_By>;
	id?: InputMaybe<Order_By>;
	validators?: InputMaybe<Order_By>;
};

/** select columns of table "outbox.validator_set" */
export enum Ebd_Outbox_Validator_Set_Select_Column {
	/** column name */
	Id = "id",
	/** column name */
	Validators = "validators",
}

/** Streaming cursor of the table "validator_set" */
export type Ebd_Outbox_Validator_Set_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Ebd_Outbox_Validator_Set_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Ebd_Outbox_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ebd_Outbox_Validator_Set_Stream_Cursor_Value_Input = {
	id?: InputMaybe<Scalars["String"]>;
	validators?: InputMaybe<Scalars["_text"]>;
};

export type Jsonb_Cast_Exp = {
	String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
	_cast?: InputMaybe<Jsonb_Cast_Exp>;
	/** is the column contained in the given json value */
	_contained_in?: InputMaybe<Scalars["jsonb"]>;
	/** does the column contain the given json value at the top level */
	_contains?: InputMaybe<Scalars["jsonb"]>;
	_eq?: InputMaybe<Scalars["jsonb"]>;
	_gt?: InputMaybe<Scalars["jsonb"]>;
	_gte?: InputMaybe<Scalars["jsonb"]>;
	/** does the string exist as a top-level key in the column */
	_has_key?: InputMaybe<Scalars["String"]>;
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?: InputMaybe<Array<Scalars["String"]>>;
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?: InputMaybe<Array<Scalars["String"]>>;
	_in?: InputMaybe<Array<Scalars["jsonb"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["jsonb"]>;
	_lte?: InputMaybe<Scalars["jsonb"]>;
	_neq?: InputMaybe<Scalars["jsonb"]>;
	_nin?: InputMaybe<Array<Scalars["jsonb"]>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["numeric"]>;
	_gt?: InputMaybe<Scalars["numeric"]>;
	_gte?: InputMaybe<Scalars["numeric"]>;
	_in?: InputMaybe<Array<Scalars["numeric"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["numeric"]>;
	_lte?: InputMaybe<Scalars["numeric"]>;
	_neq?: InputMaybe<Scalars["numeric"]>;
	_nin?: InputMaybe<Array<Scalars["numeric"]>>;
};

/** column ordering options */
export enum Order_By {
	/** in ascending order, nulls last */
	Asc = "asc",
	/** in ascending order, nulls first */
	AscNullsFirst = "asc_nulls_first",
	/** in ascending order, nulls last */
	AscNullsLast = "asc_nulls_last",
	/** in descending order, nulls first */
	Desc = "desc",
	/** in descending order, nulls first */
	DescNullsFirst = "desc_nulls_first",
	/** in descending order, nulls last */
	DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
	__typename?: "query_root";
	archive?: Maybe<Archive_Archive_Query>;
	balances?: Maybe<Balances_Balances_Query>;
	ebd_inbox?: Maybe<Ebd_Inbox_Ebd_Inbox_Query>;
	ebd_outbox?: Maybe<Ebd_Outbox_Ebd_Outbox_Query>;
};

export type Subscription_Root = {
	__typename?: "subscription_root";
	archive?: Maybe<Archive_Archive_Subscription>;
	balances?: Maybe<Balances_Balances_Subscription>;
	ebd_inbox?: Maybe<Ebd_Inbox_Ebd_Inbox_Subscription>;
	ebd_outbox?: Maybe<Ebd_Outbox_Ebd_Outbox_Subscription>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["timestamptz"]>;
	_gt?: InputMaybe<Scalars["timestamptz"]>;
	_gte?: InputMaybe<Scalars["timestamptz"]>;
	_in?: InputMaybe<Array<Scalars["timestamptz"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["timestamptz"]>;
	_lte?: InputMaybe<Scalars["timestamptz"]>;
	_neq?: InputMaybe<Scalars["timestamptz"]>;
	_nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

export type GetAccountsQueryVariables = Exact<{
	limit: Scalars["Int"];
	offset?: InputMaybe<Scalars["Int"]>;
}>;

export type GetAccountsQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balances_balances_query";
		account: Array<{
			__typename?: "balances_account";
			id: string;
			free: any;
			total: any;
			updated_at?: number | null;
		}>;
		account_aggregate: {
			__typename?: "balances_account_aggregate";
			aggregate?: {
				__typename?: "balances_account_aggregate_fields";
				count: number;
			} | null;
		};
	} | null;
};

export type GetBalanceQueryVariables = Exact<{
	address: Scalars["String"];
}>;

export type GetBalanceQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balances_balances_query";
		account: Array<{
			__typename?: "balances_account";
			id: string;
			free: any;
			total: any;
			assets?: any | null;
			updated_at?: number | null;
		}>;
	} | null;
};

export type GetBlockQueryVariables = Exact<{
	height: Scalars["Int"];
}>;

export type GetBlockQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archive_archive_query";
		block: Array<{
			__typename?: "archive_block";
			validator?: string | null;
			timestamp: any;
			state_root: any;
			spec_id: string;
			parent_hash: any;
			id: any;
			height: number;
			hash: any;
			extrinsics_root: any;
			extrinsics: Array<{
				__typename?: "archive_extrinsic";
				version: number;
				tip?: any | null;
				success: boolean;
				signature?: any | null;
				pos: number;
				index_in_block: number;
				id: any;
				hash: any;
				fee?: any | null;
				call_id: string;
				block_id: any;
			}>;
			events: Array<{
				__typename?: "archive_event";
				pos: number;
				phase: string;
				name: string;
				index_in_block: number;
				id: any;
				block_id: any;
				args?: any | null;
				extrinsic_id?: any | null;
			}>;
		}>;
	} | null;
};

export type GetBlockHeightFromHashQueryVariables = Exact<{
	blockHash?: InputMaybe<Scalars["bpchar"]>;
}>;

export type GetBlockHeightFromHashQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archive_archive_query";
		block: Array<{ __typename?: "archive_block"; height: number }>;
	} | null;
};

export type GetBlocksQueryVariables = Exact<{
	limit: Scalars["Int"];
	offset?: InputMaybe<Scalars["Int"]>;
}>;

export type GetBlocksQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archive_archive_query";
		block: Array<{
			__typename?: "archive_block";
			hash: any;
			height: number;
			id: any;
			timestamp: any;
			validator?: string | null;
			state_root: any;
			spec_id: string;
			parent_hash: any;
			extrinsics_root: any;
			events_aggregate: {
				__typename?: "archive_event_aggregate";
				aggregate?: {
					__typename?: "archive_event_aggregate_fields";
					count: number;
				} | null;
			};
			extrinsics_aggregate: {
				__typename?: "archive_extrinsic_aggregate";
				aggregate?: {
					__typename?: "archive_extrinsic_aggregate_fields";
					count: number;
				} | null;
			};
		}>;
		block_aggregate: {
			__typename?: "archive_block_aggregate";
			aggregate?: {
				__typename?: "archive_block_aggregate_fields";
				count: number;
			} | null;
		};
	} | null;
};

export type GetChainDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetChainDataQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balances_balances_query";
		chain_state: Array<{
			__typename?: "balances_chain_state";
			block_number: number;
			token_holders: number;
		}>;
		transfer_aggregate: {
			__typename?: "balances_transfer_aggregate";
			aggregate?: {
				__typename?: "balances_transfer_aggregate_fields";
				count: number;
			} | null;
		};
	} | null;
};

export type GetEvmTransactionsFromAddressQueryVariables = Exact<{
	address: Scalars["String"];
}>;

export type GetEvmTransactionsFromAddressQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archive_archive_query";
		frontier_ethereum_transaction: Array<{
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
		}>;
	} | null;
};

export type GetEvmTransactionsToAddressQueryVariables = Exact<{
	address: Scalars["String"];
}>;

export type GetEvmTransactionsToAddressQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archive_archive_query";
		frontier_ethereum_transaction: Array<{
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
		}>;
	} | null;
};

export type GetExtrinsicQueryVariables = Exact<{
	extrinsicId: Scalars["bpchar"];
}>;

export type GetExtrinsicQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archive_archive_query";
		extrinsic_by_pk?: {
			__typename?: "archive_extrinsic";
			id: any;
			hash: any;
			fee?: any | null;
			error?: any | null;
			index_in_block: number;
			pos: number;
			signature?: any | null;
			success: boolean;
			tip?: any | null;
			version: number;
			block: { __typename?: "archive_block"; height: number; timestamp: any };
			calls: Array<{
				__typename?: "archive_call";
				error?: any | null;
				id: string;
				name: string;
				origin?: any | null;
				parent_id?: string | null;
				pos: number;
				success: boolean;
				args?: any | null;
			}>;
			events: Array<{
				__typename?: "archive_event";
				id: any;
				name: string;
				phase: string;
				pos: number;
				index_in_block: number;
				args?: any | null;
			}>;
		} | null;
	} | null;
};

export type GetExtrinsicByRegexQueryVariables = Exact<{
	regex: Scalars["bpchar"];
}>;

export type GetExtrinsicByRegexQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archive_archive_query";
		extrinsic: Array<{ __typename?: "archive_extrinsic"; id: any }>;
	} | null;
};

export type GetExtrinsicIdFromHashQueryVariables = Exact<{
	extrinsicHash: Scalars["bpchar"];
}>;

export type GetExtrinsicIdFromHashQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archive_archive_query";
		extrinsic: Array<{ __typename?: "archive_extrinsic"; id: any }>;
	} | null;
};

export type GetExtrinsicIdFromHashAndBlockHashQueryVariables = Exact<{
	extrinsicHash: Scalars["bpchar"];
	blockHash: Scalars["bpchar"];
}>;

export type GetExtrinsicIdFromHashAndBlockHashQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archive_archive_query";
		extrinsic: Array<{ __typename?: "archive_extrinsic"; id: any }>;
	} | null;
};

export type GetExtrinsicsQueryVariables = Exact<{
	limit: Scalars["Int"];
	offset?: InputMaybe<Scalars["Int"]>;
}>;

export type GetExtrinsicsQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archive_archive_query";
		extrinsic: Array<{
			__typename?: "archive_extrinsic";
			id: any;
			success: boolean;
			hash: any;
			index_in_block: number;
			calls: Array<{ __typename?: "archive_call"; name: string }>;
			block: { __typename?: "archive_block"; height: number; timestamp: any };
			events: Array<{
				__typename?: "archive_event";
				name: string;
				args?: any | null;
			}>;
			events_aggregate: {
				__typename?: "archive_event_aggregate";
				aggregate?: {
					__typename?: "archive_event_aggregate_fields";
					count: number;
				} | null;
			};
		}>;
		extrinsic_aggregate: {
			__typename?: "archive_extrinsic_aggregate";
			aggregate?: {
				__typename?: "archive_extrinsic_aggregate_fields";
				count: number;
			} | null;
		};
	} | null;
};

export type GetTransferByHashQueryVariables = Exact<{
	hash: Scalars["String"];
}>;

export type GetTransferByHashQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balances_balances_query";
		transfer: Array<{
			__typename?: "balances_transfer";
			id: string;
			amount: any;
			asset_id: string;
			block_number: number;
			extrinsic_hash?: string | null;
			status: string;
			timestamp: any;
			to_id?: string | null;
			from_id?: string | null;
		}>;
	} | null;
};

export type GetTransfersQueryVariables = Exact<{
	limit: Scalars["Int"];
}>;

export type GetTransfersQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balances_balances_query";
		transfer: Array<{
			__typename?: "balances_transfer";
			timestamp: any;
			status: string;
			id: string;
			extrinsic_hash?: string | null;
			block_number: number;
			asset_id: string;
			amount: any;
			from_id?: string | null;
			to_id?: string | null;
		}>;
	} | null;
};

export type GetTransfersFromAddressQueryVariables = Exact<{
	offset?: InputMaybe<Scalars["Int"]>;
	limit?: InputMaybe<Scalars["Int"]>;
	address: Scalars["String"];
}>;

export type GetTransfersFromAddressQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balances_balances_query";
		transfer: Array<{
			__typename?: "balances_transfer";
			timestamp: any;
			status: string;
			id: string;
			extrinsic_hash?: string | null;
			block_number: number;
			asset_id: string;
			amount: any;
			from_id?: string | null;
			to_id?: string | null;
		}>;
		transfer_aggregate: {
			__typename?: "balances_transfer_aggregate";
			aggregate?: {
				__typename?: "balances_transfer_aggregate_fields";
				count: number;
			} | null;
		};
	} | null;
};

export type GetTransfersToAddressQueryVariables = Exact<{
	offset?: InputMaybe<Scalars["Int"]>;
	limit?: InputMaybe<Scalars["Int"]>;
	address: Scalars["String"];
}>;

export type GetTransfersToAddressQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balances_balances_query";
		transfer: Array<{
			__typename?: "balances_transfer";
			timestamp: any;
			status: string;
			id: string;
			extrinsic_hash?: string | null;
			block_number: number;
			asset_id: string;
			amount: any;
			from_id?: string | null;
			to_id?: string | null;
		}>;
		transfer_aggregate: {
			__typename?: "balances_transfer_aggregate";
			aggregate?: {
				__typename?: "balances_transfer_aggregate_fields";
				count: number;
			} | null;
		};
	} | null;
};

export const GetAccountsDocument = `
    query GetAccounts($limit: Int!, $offset: Int) {
  balances {
    account(limit: $limit, offset: $offset, order_by: {total: desc}) {
      id
      free
      total
      updated_at
    }
    account_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetAccountsQuery = <TData = GetAccountsQuery, TError = unknown>(
	client: GraphQLClient,
	variables: GetAccountsQueryVariables,
	options?: UseQueryOptions<GetAccountsQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetAccountsQuery, TError, TData>(
		["GetAccounts", variables],
		fetcher<GetAccountsQuery, GetAccountsQueryVariables>(
			client,
			GetAccountsDocument,
			variables,
			headers
		),
		options
	);
export const GetBalanceDocument = `
    query GetBalance($address: String!) {
  balances {
    account(where: {id: {_ilike: $address}}) {
      id
      free
      total
      assets
      updated_at
    }
  }
}
    `;
export const useGetBalanceQuery = <TData = GetBalanceQuery, TError = unknown>(
	client: GraphQLClient,
	variables: GetBalanceQueryVariables,
	options?: UseQueryOptions<GetBalanceQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetBalanceQuery, TError, TData>(
		["GetBalance", variables],
		fetcher<GetBalanceQuery, GetBalanceQueryVariables>(
			client,
			GetBalanceDocument,
			variables,
			headers
		),
		options
	);
export const GetBlockDocument = `
    query GetBlock($height: Int!) {
  archive {
    block(limit: 1, where: {height: {_eq: $height}}) {
      validator
      timestamp
      state_root
      spec_id
      parent_hash
      id
      height
      hash
      extrinsics_root
      extrinsics {
        version
        tip
        success
        signature
        pos
        index_in_block
        id
        hash
        fee
        call_id
        block_id
      }
      events {
        pos
        phase
        name
        index_in_block
        id
        block_id
        args
        extrinsic_id
      }
    }
  }
}
    `;
export const useGetBlockQuery = <TData = GetBlockQuery, TError = unknown>(
	client: GraphQLClient,
	variables: GetBlockQueryVariables,
	options?: UseQueryOptions<GetBlockQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetBlockQuery, TError, TData>(
		["GetBlock", variables],
		fetcher<GetBlockQuery, GetBlockQueryVariables>(
			client,
			GetBlockDocument,
			variables,
			headers
		),
		options
	);
export const GetBlockHeightFromHashDocument = `
    query GetBlockHeightFromHash($blockHash: bpchar) {
  archive {
    block(where: {hash: {_eq: $blockHash}}, limit: 1) {
      height
    }
  }
}
    `;
export const useGetBlockHeightFromHashQuery = <
	TData = GetBlockHeightFromHashQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables?: GetBlockHeightFromHashQueryVariables,
	options?: UseQueryOptions<GetBlockHeightFromHashQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetBlockHeightFromHashQuery, TError, TData>(
		variables === undefined
			? ["GetBlockHeightFromHash"]
			: ["GetBlockHeightFromHash", variables],
		fetcher<GetBlockHeightFromHashQuery, GetBlockHeightFromHashQueryVariables>(
			client,
			GetBlockHeightFromHashDocument,
			variables,
			headers
		),
		options
	);
export const GetBlocksDocument = `
    query GetBlocks($limit: Int!, $offset: Int) {
  archive {
    block(limit: $limit, offset: $offset, order_by: {height: desc}) {
      hash
      height
      id
      timestamp
      validator
      state_root
      spec_id
      parent_hash
      extrinsics_root
      events_aggregate {
        aggregate {
          count
        }
      }
      extrinsics_aggregate {
        aggregate {
          count
        }
      }
    }
    block_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetBlocksQuery = <TData = GetBlocksQuery, TError = unknown>(
	client: GraphQLClient,
	variables: GetBlocksQueryVariables,
	options?: UseQueryOptions<GetBlocksQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetBlocksQuery, TError, TData>(
		["GetBlocks", variables],
		fetcher<GetBlocksQuery, GetBlocksQueryVariables>(
			client,
			GetBlocksDocument,
			variables,
			headers
		),
		options
	);
export const GetChainDataDocument = `
    query GetChainData {
  balances {
    chain_state(order_by: {block_number: desc}, limit: 1) {
      block_number
      token_holders
    }
    transfer_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetChainDataQuery = <
	TData = GetChainDataQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables?: GetChainDataQueryVariables,
	options?: UseQueryOptions<GetChainDataQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetChainDataQuery, TError, TData>(
		variables === undefined ? ["GetChainData"] : ["GetChainData", variables],
		fetcher<GetChainDataQuery, GetChainDataQueryVariables>(
			client,
			GetChainDataDocument,
			variables,
			headers
		),
		options
	);
export const GetEvmTransactionsFromAddressDocument = `
    query GetEvmTransactionsFromAddress($address: String!) {
  archive {
    frontier_ethereum_transaction(
      order_by: {call: {block: {height: desc}}}
      where: {call: {events: {args: {_contains: {from: $address}}}}}
    ) {
      contract
      sighash
      call {
        id
        name
        origin
        success
        args
        block {
          height
          timestamp
        }
        events {
          id
          name
          args
        }
      }
    }
  }
}
    `;
export const useGetEvmTransactionsFromAddressQuery = <
	TData = GetEvmTransactionsFromAddressQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetEvmTransactionsFromAddressQueryVariables,
	options?: UseQueryOptions<GetEvmTransactionsFromAddressQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetEvmTransactionsFromAddressQuery, TError, TData>(
		["GetEvmTransactionsFromAddress", variables],
		fetcher<
			GetEvmTransactionsFromAddressQuery,
			GetEvmTransactionsFromAddressQueryVariables
		>(client, GetEvmTransactionsFromAddressDocument, variables, headers),
		options
	);
export const GetEvmTransactionsToAddressDocument = `
    query GetEvmTransactionsToAddress($address: String!) {
  archive {
    frontier_ethereum_transaction(
      order_by: {call: {block: {height: desc}}}
      where: {call: {events: {args: {_contains: {to: $address}}}}}
    ) {
      contract
      sighash
      call {
        id
        name
        origin
        success
        args
        block {
          height
          timestamp
        }
        events {
          id
          name
          args
        }
      }
    }
  }
}
    `;
export const useGetEvmTransactionsToAddressQuery = <
	TData = GetEvmTransactionsToAddressQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetEvmTransactionsToAddressQueryVariables,
	options?: UseQueryOptions<GetEvmTransactionsToAddressQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetEvmTransactionsToAddressQuery, TError, TData>(
		["GetEvmTransactionsToAddress", variables],
		fetcher<
			GetEvmTransactionsToAddressQuery,
			GetEvmTransactionsToAddressQueryVariables
		>(client, GetEvmTransactionsToAddressDocument, variables, headers),
		options
	);
export const GetExtrinsicDocument = `
    query GetExtrinsic($extrinsicId: bpchar!) {
  archive {
    extrinsic_by_pk(id: $extrinsicId) {
      id
      hash
      fee
      error
      index_in_block
      pos
      signature
      success
      tip
      version
      block {
        height
        timestamp
      }
      calls {
        error
        id
        name
        origin
        parent_id
        pos
        success
        args
      }
      events(order_by: {index_in_block: asc}) {
        id
        name
        phase
        pos
        index_in_block
        args
      }
    }
  }
}
    `;
export const useGetExtrinsicQuery = <
	TData = GetExtrinsicQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetExtrinsicQueryVariables,
	options?: UseQueryOptions<GetExtrinsicQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetExtrinsicQuery, TError, TData>(
		["GetExtrinsic", variables],
		fetcher<GetExtrinsicQuery, GetExtrinsicQueryVariables>(
			client,
			GetExtrinsicDocument,
			variables,
			headers
		),
		options
	);
export const GetExtrinsicByRegexDocument = `
    query GetExtrinsicByRegex($regex: bpchar!) {
  archive {
    extrinsic(where: {id: {_regex: $regex}}) {
      id
    }
  }
}
    `;
export const useGetExtrinsicByRegexQuery = <
	TData = GetExtrinsicByRegexQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetExtrinsicByRegexQueryVariables,
	options?: UseQueryOptions<GetExtrinsicByRegexQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetExtrinsicByRegexQuery, TError, TData>(
		["GetExtrinsicByRegex", variables],
		fetcher<GetExtrinsicByRegexQuery, GetExtrinsicByRegexQueryVariables>(
			client,
			GetExtrinsicByRegexDocument,
			variables,
			headers
		),
		options
	);
export const GetExtrinsicIdFromHashDocument = `
    query GetExtrinsicIdFromHash($extrinsicHash: bpchar!) {
  archive {
    extrinsic(where: {hash: {_eq: $extrinsicHash}}) {
      id
    }
  }
}
    `;
export const useGetExtrinsicIdFromHashQuery = <
	TData = GetExtrinsicIdFromHashQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetExtrinsicIdFromHashQueryVariables,
	options?: UseQueryOptions<GetExtrinsicIdFromHashQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetExtrinsicIdFromHashQuery, TError, TData>(
		["GetExtrinsicIdFromHash", variables],
		fetcher<GetExtrinsicIdFromHashQuery, GetExtrinsicIdFromHashQueryVariables>(
			client,
			GetExtrinsicIdFromHashDocument,
			variables,
			headers
		),
		options
	);
export const GetExtrinsicIdFromHashAndBlockHashDocument = `
    query GetExtrinsicIdFromHashAndBlockHash($extrinsicHash: bpchar!, $blockHash: bpchar!) {
  archive {
    extrinsic(
      where: {hash: {_eq: $extrinsicHash}, block: {hash: {_eq: $blockHash}}}
    ) {
      id
    }
  }
}
    `;
export const useGetExtrinsicIdFromHashAndBlockHashQuery = <
	TData = GetExtrinsicIdFromHashAndBlockHashQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetExtrinsicIdFromHashAndBlockHashQueryVariables,
	options?: UseQueryOptions<
		GetExtrinsicIdFromHashAndBlockHashQuery,
		TError,
		TData
	>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetExtrinsicIdFromHashAndBlockHashQuery, TError, TData>(
		["GetExtrinsicIdFromHashAndBlockHash", variables],
		fetcher<
			GetExtrinsicIdFromHashAndBlockHashQuery,
			GetExtrinsicIdFromHashAndBlockHashQueryVariables
		>(client, GetExtrinsicIdFromHashAndBlockHashDocument, variables, headers),
		options
	);
export const GetExtrinsicsDocument = `
    query GetExtrinsics($limit: Int!, $offset: Int) {
  archive {
    extrinsic(
      limit: $limit
      offset: $offset
      order_by: {block: {height: desc}}
      where: {calls: {name: {_neq: "Timestamp.set"}}}
    ) {
      id
      success
      calls {
        name
      }
      hash
      index_in_block
      block {
        height
        timestamp
      }
      events {
        name
        args
      }
      events_aggregate {
        aggregate {
          count
        }
      }
    }
    extrinsic_aggregate(where: {calls: {name: {_neq: "Timestamp.set"}}}) {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetExtrinsicsQuery = <
	TData = GetExtrinsicsQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetExtrinsicsQueryVariables,
	options?: UseQueryOptions<GetExtrinsicsQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetExtrinsicsQuery, TError, TData>(
		["GetExtrinsics", variables],
		fetcher<GetExtrinsicsQuery, GetExtrinsicsQueryVariables>(
			client,
			GetExtrinsicsDocument,
			variables,
			headers
		),
		options
	);
export const GetTransferByHashDocument = `
    query GetTransferByHash($hash: String!) {
  balances {
    transfer(where: {extrinsic_hash: {_eq: $hash}}) {
      id
      amount
      asset_id
      block_number
      extrinsic_hash
      status
      timestamp
      to_id
      from_id
    }
  }
}
    `;
export const useGetTransferByHashQuery = <
	TData = GetTransferByHashQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetTransferByHashQueryVariables,
	options?: UseQueryOptions<GetTransferByHashQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetTransferByHashQuery, TError, TData>(
		["GetTransferByHash", variables],
		fetcher<GetTransferByHashQuery, GetTransferByHashQueryVariables>(
			client,
			GetTransferByHashDocument,
			variables,
			headers
		),
		options
	);
export const GetTransfersDocument = `
    query GetTransfers($limit: Int!) {
  balances {
    transfer(limit: $limit, order_by: {block_number: desc}) {
      timestamp
      status
      id
      extrinsic_hash
      block_number
      asset_id
      amount
      from_id
      to_id
    }
  }
}
    `;
export const useGetTransfersQuery = <
	TData = GetTransfersQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetTransfersQueryVariables,
	options?: UseQueryOptions<GetTransfersQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetTransfersQuery, TError, TData>(
		["GetTransfers", variables],
		fetcher<GetTransfersQuery, GetTransfersQueryVariables>(
			client,
			GetTransfersDocument,
			variables,
			headers
		),
		options
	);
export const GetTransfersFromAddressDocument = `
    query GetTransfersFromAddress($offset: Int, $limit: Int, $address: String!) {
  balances {
    transfer(
      limit: $limit
      offset: $offset
      order_by: {block_number: desc}
      where: {from_id: {_ilike: $address}}
    ) {
      timestamp
      status
      id
      extrinsic_hash
      block_number
      asset_id
      amount
      from_id
      to_id
    }
    transfer_aggregate(where: {from_id: {_ilike: $address}}) {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetTransfersFromAddressQuery = <
	TData = GetTransfersFromAddressQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetTransfersFromAddressQueryVariables,
	options?: UseQueryOptions<GetTransfersFromAddressQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetTransfersFromAddressQuery, TError, TData>(
		["GetTransfersFromAddress", variables],
		fetcher<
			GetTransfersFromAddressQuery,
			GetTransfersFromAddressQueryVariables
		>(client, GetTransfersFromAddressDocument, variables, headers),
		options
	);
export const GetTransfersToAddressDocument = `
    query GetTransfersToAddress($offset: Int, $limit: Int, $address: String!) {
  balances {
    transfer(
      limit: $limit
      offset: $offset
      order_by: {block_number: desc}
      where: {to_id: {_ilike: $address}}
    ) {
      timestamp
      status
      id
      extrinsic_hash
      block_number
      asset_id
      amount
      from_id
      to_id
    }
    transfer_aggregate(where: {to_id: {_ilike: $address}}) {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetTransfersToAddressQuery = <
	TData = GetTransfersToAddressQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetTransfersToAddressQueryVariables,
	options?: UseQueryOptions<GetTransfersToAddressQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetTransfersToAddressQuery, TError, TData>(
		["GetTransfersToAddress", variables],
		fetcher<GetTransfersToAddressQuery, GetTransfersToAddressQueryVariables>(
			client,
			GetTransfersToAddressDocument,
			variables,
			headers
		),
		options
	);
