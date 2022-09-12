import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
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
	archive_bpchar: any;
	archive_jsonb: any;
	archive_numeric: any;
	archive_timestamp: any;
	archive_timestamptz: any;
	/** Big number integer */
	balances_BigInt: any;
	/** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
	balances_DateTime: any;
	/** Big number integer */
	evm_BigInt: any;
	/** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
	evm_DateTime: any;
	/** A scalar that can represent any JSON value */
	evm_JSON: any;
	/** Big number integer */
	tokens_BigInt: any;
	/** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
	tokens_DateTime: any;
	/** Big number integer */
	transfers_BigInt: any;
	/** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
	transfers_DateTime: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Archive_Boolean_Comparison_Exp = {
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
export type Archive_Int_Comparison_Exp = {
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
export type Archive_String_Comparison_Exp = {
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
	extrinsics_root: Scalars["archive_bpchar"];
	hash: Scalars["archive_bpchar"];
	height: Scalars["Int"];
	id: Scalars["archive_bpchar"];
	parent_hash: Scalars["archive_bpchar"];
	spec_id: Scalars["String"];
	state_root: Scalars["archive_bpchar"];
	timestamp: Scalars["archive_timestamptz"];
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
	extrinsics_root?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	hash?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	height?: InputMaybe<Archive_Int_Comparison_Exp>;
	id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	parent_hash?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	spec_id?: InputMaybe<Archive_String_Comparison_Exp>;
	state_root?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	timestamp?: InputMaybe<Archive_Timestamptz_Comparison_Exp>;
	validator?: InputMaybe<Archive_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "block" */
export enum Archive_Block_Constraint {
	/** unique or primary key constraint on columns "id" */
	BlockPkey = "block_pkey",
}

/** input type for incrementing numeric columns in table "block" */
export type Archive_Block_Inc_Input = {
	height?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "block" */
export type Archive_Block_Insert_Input = {
	calls?: InputMaybe<Archive_Call_Arr_Rel_Insert_Input>;
	events?: InputMaybe<Archive_Event_Arr_Rel_Insert_Input>;
	extrinsics?: InputMaybe<Archive_Extrinsic_Arr_Rel_Insert_Input>;
	extrinsics_root?: InputMaybe<Scalars["archive_bpchar"]>;
	hash?: InputMaybe<Scalars["archive_bpchar"]>;
	height?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["archive_bpchar"]>;
	parent_hash?: InputMaybe<Scalars["archive_bpchar"]>;
	spec_id?: InputMaybe<Scalars["String"]>;
	state_root?: InputMaybe<Scalars["archive_bpchar"]>;
	timestamp?: InputMaybe<Scalars["archive_timestamptz"]>;
	validator?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Archive_Block_Max_Fields = {
	__typename?: "archive_block_max_fields";
	extrinsics_root?: Maybe<Scalars["archive_bpchar"]>;
	hash?: Maybe<Scalars["archive_bpchar"]>;
	height?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["archive_bpchar"]>;
	parent_hash?: Maybe<Scalars["archive_bpchar"]>;
	spec_id?: Maybe<Scalars["String"]>;
	state_root?: Maybe<Scalars["archive_bpchar"]>;
	timestamp?: Maybe<Scalars["archive_timestamptz"]>;
	validator?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Archive_Block_Min_Fields = {
	__typename?: "archive_block_min_fields";
	extrinsics_root?: Maybe<Scalars["archive_bpchar"]>;
	hash?: Maybe<Scalars["archive_bpchar"]>;
	height?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["archive_bpchar"]>;
	parent_hash?: Maybe<Scalars["archive_bpchar"]>;
	spec_id?: Maybe<Scalars["String"]>;
	state_root?: Maybe<Scalars["archive_bpchar"]>;
	timestamp?: Maybe<Scalars["archive_timestamptz"]>;
	validator?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "block" */
export type Archive_Block_Mutation_Response = {
	__typename?: "archive_block_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Block>;
};

/** input type for inserting object relation for remote table "block" */
export type Archive_Block_Obj_Rel_Insert_Input = {
	data: Archive_Block_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Block_On_Conflict>;
};

/** on_conflict condition type for table "block" */
export type Archive_Block_On_Conflict = {
	constraint: Archive_Block_Constraint;
	update_columns?: Array<Archive_Block_Update_Column>;
	where?: InputMaybe<Archive_Block_Bool_Exp>;
};

/** Ordering options when selecting data from "block". */
export type Archive_Block_Order_By = {
	calls_aggregate?: InputMaybe<Archive_Call_Aggregate_Order_By>;
	events_aggregate?: InputMaybe<Archive_Event_Aggregate_Order_By>;
	extrinsics_aggregate?: InputMaybe<Archive_Extrinsic_Aggregate_Order_By>;
	extrinsics_root?: InputMaybe<Archive_Order_By>;
	hash?: InputMaybe<Archive_Order_By>;
	height?: InputMaybe<Archive_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	parent_hash?: InputMaybe<Archive_Order_By>;
	spec_id?: InputMaybe<Archive_Order_By>;
	state_root?: InputMaybe<Archive_Order_By>;
	timestamp?: InputMaybe<Archive_Order_By>;
	validator?: InputMaybe<Archive_Order_By>;
};

/** primary key columns input for table: block */
export type Archive_Block_Pk_Columns_Input = {
	id: Scalars["archive_bpchar"];
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

/** input type for updating data in table "block" */
export type Archive_Block_Set_Input = {
	extrinsics_root?: InputMaybe<Scalars["archive_bpchar"]>;
	hash?: InputMaybe<Scalars["archive_bpchar"]>;
	height?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["archive_bpchar"]>;
	parent_hash?: InputMaybe<Scalars["archive_bpchar"]>;
	spec_id?: InputMaybe<Scalars["String"]>;
	state_root?: InputMaybe<Scalars["archive_bpchar"]>;
	timestamp?: InputMaybe<Scalars["archive_timestamptz"]>;
	validator?: InputMaybe<Scalars["String"]>;
};

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
	extrinsics_root?: InputMaybe<Scalars["archive_bpchar"]>;
	hash?: InputMaybe<Scalars["archive_bpchar"]>;
	height?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["archive_bpchar"]>;
	parent_hash?: InputMaybe<Scalars["archive_bpchar"]>;
	spec_id?: InputMaybe<Scalars["String"]>;
	state_root?: InputMaybe<Scalars["archive_bpchar"]>;
	timestamp?: InputMaybe<Scalars["archive_timestamptz"]>;
	validator?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Archive_Block_Sum_Fields = {
	__typename?: "archive_block_sum_fields";
	height?: Maybe<Scalars["Int"]>;
};

/** update columns of table "block" */
export enum Archive_Block_Update_Column {
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

export type Archive_Block_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Archive_Block_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Block_Set_Input>;
	where: Archive_Block_Bool_Exp;
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

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Archive_Bpchar_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["archive_bpchar"]>;
	_gt?: InputMaybe<Scalars["archive_bpchar"]>;
	_gte?: InputMaybe<Scalars["archive_bpchar"]>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars["archive_bpchar"]>;
	_in?: InputMaybe<Array<Scalars["archive_bpchar"]>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars["archive_bpchar"]>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars["archive_bpchar"]>;
	_lt?: InputMaybe<Scalars["archive_bpchar"]>;
	_lte?: InputMaybe<Scalars["archive_bpchar"]>;
	_neq?: InputMaybe<Scalars["archive_bpchar"]>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars["archive_bpchar"]>;
	_nin?: InputMaybe<Array<Scalars["archive_bpchar"]>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars["archive_bpchar"]>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars["archive_bpchar"]>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars["archive_bpchar"]>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars["archive_bpchar"]>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars["archive_bpchar"]>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars["archive_bpchar"]>;
};

/** columns and relationships of "call" */
export type Archive_Call = {
	__typename?: "archive_call";
	args?: Maybe<Scalars["archive_jsonb"]>;
	/** An object relationship */
	block: Archive_Block;
	block_id: Scalars["archive_bpchar"];
	/** An object relationship */
	call?: Maybe<Archive_Call>;
	/** An array relationship */
	calls: Array<Archive_Call>;
	/** An aggregate relationship */
	calls_aggregate: Archive_Call_Aggregate;
	error?: Maybe<Scalars["archive_jsonb"]>;
	/** An array relationship */
	events: Array<Archive_Event>;
	/** An aggregate relationship */
	events_aggregate: Archive_Event_Aggregate;
	/** An object relationship */
	extrinsic: Archive_Extrinsic;
	extrinsic_id: Scalars["archive_bpchar"];
	/** An object relationship */
	frontier_ethereum_transaction?: Maybe<Archive_Frontier_Ethereum_Transaction>;
	id: Scalars["String"];
	name: Scalars["String"];
	origin?: Maybe<Scalars["archive_jsonb"]>;
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
	count?: InputMaybe<Archive_Order_By>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Archive_Call_Append_Input = {
	args?: InputMaybe<Scalars["archive_jsonb"]>;
	error?: InputMaybe<Scalars["archive_jsonb"]>;
	origin?: InputMaybe<Scalars["archive_jsonb"]>;
};

/** input type for inserting array relation for remote table "call" */
export type Archive_Call_Arr_Rel_Insert_Input = {
	data: Array<Archive_Call_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Call_On_Conflict>;
};

/** aggregate avg on columns */
export type Archive_Call_Avg_Fields = {
	__typename?: "archive_call_avg_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "call" */
export type Archive_Call_Avg_Order_By = {
	pos?: InputMaybe<Archive_Order_By>;
};

/** Boolean expression to filter rows from the table "call". All fields are combined with a logical 'AND'. */
export type Archive_Call_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Call_Bool_Exp>>;
	_not?: InputMaybe<Archive_Call_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Call_Bool_Exp>>;
	args?: InputMaybe<Archive_Jsonb_Comparison_Exp>;
	block?: InputMaybe<Archive_Block_Bool_Exp>;
	block_id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	call?: InputMaybe<Archive_Call_Bool_Exp>;
	calls?: InputMaybe<Archive_Call_Bool_Exp>;
	error?: InputMaybe<Archive_Jsonb_Comparison_Exp>;
	events?: InputMaybe<Archive_Event_Bool_Exp>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
	extrinsic_id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	frontier_ethereum_transaction?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
	id?: InputMaybe<Archive_String_Comparison_Exp>;
	name?: InputMaybe<Archive_String_Comparison_Exp>;
	origin?: InputMaybe<Archive_Jsonb_Comparison_Exp>;
	parent_id?: InputMaybe<Archive_String_Comparison_Exp>;
	pos?: InputMaybe<Archive_Int_Comparison_Exp>;
	success?: InputMaybe<Archive_Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "call" */
export enum Archive_Call_Constraint {
	/** unique or primary key constraint on columns "id" */
	CallPkey = "call_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Archive_Call_Delete_At_Path_Input = {
	args?: InputMaybe<Array<Scalars["String"]>>;
	error?: InputMaybe<Array<Scalars["String"]>>;
	origin?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Archive_Call_Delete_Elem_Input = {
	args?: InputMaybe<Scalars["Int"]>;
	error?: InputMaybe<Scalars["Int"]>;
	origin?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Archive_Call_Delete_Key_Input = {
	args?: InputMaybe<Scalars["String"]>;
	error?: InputMaybe<Scalars["String"]>;
	origin?: InputMaybe<Scalars["String"]>;
};

/** input type for incrementing numeric columns in table "call" */
export type Archive_Call_Inc_Input = {
	pos?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "call" */
export type Archive_Call_Insert_Input = {
	args?: InputMaybe<Scalars["archive_jsonb"]>;
	block?: InputMaybe<Archive_Block_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	call?: InputMaybe<Archive_Call_Obj_Rel_Insert_Input>;
	calls?: InputMaybe<Archive_Call_Arr_Rel_Insert_Input>;
	error?: InputMaybe<Scalars["archive_jsonb"]>;
	events?: InputMaybe<Archive_Event_Arr_Rel_Insert_Input>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Obj_Rel_Insert_Input>;
	extrinsic_id?: InputMaybe<Scalars["archive_bpchar"]>;
	frontier_ethereum_transaction?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Obj_Rel_Insert_Input>;
	id?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	origin?: InputMaybe<Scalars["archive_jsonb"]>;
	parent_id?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate max on columns */
export type Archive_Call_Max_Fields = {
	__typename?: "archive_call_max_fields";
	block_id?: Maybe<Scalars["archive_bpchar"]>;
	extrinsic_id?: Maybe<Scalars["archive_bpchar"]>;
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	parent_id?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "call" */
export type Archive_Call_Max_Order_By = {
	block_id?: InputMaybe<Archive_Order_By>;
	extrinsic_id?: InputMaybe<Archive_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	name?: InputMaybe<Archive_Order_By>;
	parent_id?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** aggregate min on columns */
export type Archive_Call_Min_Fields = {
	__typename?: "archive_call_min_fields";
	block_id?: Maybe<Scalars["archive_bpchar"]>;
	extrinsic_id?: Maybe<Scalars["archive_bpchar"]>;
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	parent_id?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "call" */
export type Archive_Call_Min_Order_By = {
	block_id?: InputMaybe<Archive_Order_By>;
	extrinsic_id?: InputMaybe<Archive_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	name?: InputMaybe<Archive_Order_By>;
	parent_id?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** response of any mutation on the table "call" */
export type Archive_Call_Mutation_Response = {
	__typename?: "archive_call_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Call>;
};

/** input type for inserting object relation for remote table "call" */
export type Archive_Call_Obj_Rel_Insert_Input = {
	data: Archive_Call_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Call_On_Conflict>;
};

/** on_conflict condition type for table "call" */
export type Archive_Call_On_Conflict = {
	constraint: Archive_Call_Constraint;
	update_columns?: Array<Archive_Call_Update_Column>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

/** Ordering options when selecting data from "call". */
export type Archive_Call_Order_By = {
	args?: InputMaybe<Archive_Order_By>;
	block?: InputMaybe<Archive_Block_Order_By>;
	block_id?: InputMaybe<Archive_Order_By>;
	call?: InputMaybe<Archive_Call_Order_By>;
	calls_aggregate?: InputMaybe<Archive_Call_Aggregate_Order_By>;
	error?: InputMaybe<Archive_Order_By>;
	events_aggregate?: InputMaybe<Archive_Event_Aggregate_Order_By>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Order_By>;
	extrinsic_id?: InputMaybe<Archive_Order_By>;
	frontier_ethereum_transaction?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	name?: InputMaybe<Archive_Order_By>;
	origin?: InputMaybe<Archive_Order_By>;
	parent_id?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	success?: InputMaybe<Archive_Order_By>;
};

/** primary key columns input for table: call */
export type Archive_Call_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Archive_Call_Prepend_Input = {
	args?: InputMaybe<Scalars["archive_jsonb"]>;
	error?: InputMaybe<Scalars["archive_jsonb"]>;
	origin?: InputMaybe<Scalars["archive_jsonb"]>;
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

/** input type for updating data in table "call" */
export type Archive_Call_Set_Input = {
	args?: InputMaybe<Scalars["archive_jsonb"]>;
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	error?: InputMaybe<Scalars["archive_jsonb"]>;
	extrinsic_id?: InputMaybe<Scalars["archive_bpchar"]>;
	id?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	origin?: InputMaybe<Scalars["archive_jsonb"]>;
	parent_id?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate stddev on columns */
export type Archive_Call_Stddev_Fields = {
	__typename?: "archive_call_stddev_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "call" */
export type Archive_Call_Stddev_Order_By = {
	pos?: InputMaybe<Archive_Order_By>;
};

/** aggregate stddev_pop on columns */
export type Archive_Call_Stddev_Pop_Fields = {
	__typename?: "archive_call_stddev_pop_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "call" */
export type Archive_Call_Stddev_Pop_Order_By = {
	pos?: InputMaybe<Archive_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Archive_Call_Stddev_Samp_Fields = {
	__typename?: "archive_call_stddev_samp_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "call" */
export type Archive_Call_Stddev_Samp_Order_By = {
	pos?: InputMaybe<Archive_Order_By>;
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
	args?: InputMaybe<Scalars["archive_jsonb"]>;
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	error?: InputMaybe<Scalars["archive_jsonb"]>;
	extrinsic_id?: InputMaybe<Scalars["archive_bpchar"]>;
	id?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	origin?: InputMaybe<Scalars["archive_jsonb"]>;
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
	pos?: InputMaybe<Archive_Order_By>;
};

/** update columns of table "call" */
export enum Archive_Call_Update_Column {
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

export type Archive_Call_Updates = {
	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: InputMaybe<Archive_Call_Append_Input>;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: InputMaybe<Archive_Call_Delete_At_Path_Input>;
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?: InputMaybe<Archive_Call_Delete_Elem_Input>;
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: InputMaybe<Archive_Call_Delete_Key_Input>;
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Archive_Call_Inc_Input>;
	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: InputMaybe<Archive_Call_Prepend_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Call_Set_Input>;
	where: Archive_Call_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Archive_Call_Var_Pop_Fields = {
	__typename?: "archive_call_var_pop_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "call" */
export type Archive_Call_Var_Pop_Order_By = {
	pos?: InputMaybe<Archive_Order_By>;
};

/** aggregate var_samp on columns */
export type Archive_Call_Var_Samp_Fields = {
	__typename?: "archive_call_var_samp_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "call" */
export type Archive_Call_Var_Samp_Order_By = {
	pos?: InputMaybe<Archive_Order_By>;
};

/** aggregate variance on columns */
export type Archive_Call_Variance_Fields = {
	__typename?: "archive_call_variance_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "call" */
export type Archive_Call_Variance_Order_By = {
	pos?: InputMaybe<Archive_Order_By>;
};

/** columns and relationships of "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted = {
	__typename?: "archive_contracts_contract_emitted";
	contract: Scalars["String"];
	/** An object relationship */
	event: Archive_Event;
	event_id: Scalars["archive_bpchar"];
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

/** Boolean expression to filter rows from the table "contracts_contract_emitted". All fields are combined with a logical 'AND'. */
export type Archive_Contracts_Contract_Emitted_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Bool_Exp>>;
	_not?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Bool_Exp>>;
	contract?: InputMaybe<Archive_String_Comparison_Exp>;
	event?: InputMaybe<Archive_Event_Bool_Exp>;
	event_id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "contracts_contract_emitted" */
export enum Archive_Contracts_Contract_Emitted_Constraint {
	/** unique or primary key constraint on columns "event_id" */
	ContractsContractEmittedPkey = "contracts_contract_emitted_pkey",
}

/** input type for inserting data into table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Insert_Input = {
	contract?: InputMaybe<Scalars["String"]>;
	event?: InputMaybe<Archive_Event_Obj_Rel_Insert_Input>;
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
};

/** aggregate max on columns */
export type Archive_Contracts_Contract_Emitted_Max_Fields = {
	__typename?: "archive_contracts_contract_emitted_max_fields";
	contract?: Maybe<Scalars["String"]>;
	event_id?: Maybe<Scalars["archive_bpchar"]>;
};

/** aggregate min on columns */
export type Archive_Contracts_Contract_Emitted_Min_Fields = {
	__typename?: "archive_contracts_contract_emitted_min_fields";
	contract?: Maybe<Scalars["String"]>;
	event_id?: Maybe<Scalars["archive_bpchar"]>;
};

/** response of any mutation on the table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Mutation_Response = {
	__typename?: "archive_contracts_contract_emitted_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Contracts_Contract_Emitted>;
};

/** input type for inserting object relation for remote table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Obj_Rel_Insert_Input = {
	data: Archive_Contracts_Contract_Emitted_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Contracts_Contract_Emitted_On_Conflict>;
};

/** on_conflict condition type for table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_On_Conflict = {
	constraint: Archive_Contracts_Contract_Emitted_Constraint;
	update_columns?: Array<Archive_Contracts_Contract_Emitted_Update_Column>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

/** Ordering options when selecting data from "contracts_contract_emitted". */
export type Archive_Contracts_Contract_Emitted_Order_By = {
	contract?: InputMaybe<Archive_Order_By>;
	event?: InputMaybe<Archive_Event_Order_By>;
	event_id?: InputMaybe<Archive_Order_By>;
};

/** primary key columns input for table: contracts_contract_emitted */
export type Archive_Contracts_Contract_Emitted_Pk_Columns_Input = {
	event_id: Scalars["archive_bpchar"];
};

/** select columns of table "contracts_contract_emitted" */
export enum Archive_Contracts_Contract_Emitted_Select_Column {
	/** column name */
	Contract = "contract",
	/** column name */
	EventId = "event_id",
}

/** input type for updating data in table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Set_Input = {
	contract?: InputMaybe<Scalars["String"]>;
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
};

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
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
};

/** update columns of table "contracts_contract_emitted" */
export enum Archive_Contracts_Contract_Emitted_Update_Column {
	/** column name */
	Contract = "contract",
	/** column name */
	EventId = "event_id",
}

export type Archive_Contracts_Contract_Emitted_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Contracts_Contract_Emitted_Set_Input>;
	where: Archive_Contracts_Contract_Emitted_Bool_Exp;
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
	args?: Maybe<Scalars["archive_jsonb"]>;
	/** An object relationship */
	block: Archive_Block;
	block_id: Scalars["archive_bpchar"];
	/** An object relationship */
	call?: Maybe<Archive_Call>;
	call_id?: Maybe<Scalars["String"]>;
	/** An object relationship */
	contracts_contract_emitted?: Maybe<Archive_Contracts_Contract_Emitted>;
	/** An object relationship */
	extrinsic?: Maybe<Archive_Extrinsic>;
	extrinsic_id?: Maybe<Scalars["archive_bpchar"]>;
	/** An object relationship */
	frontier_evm_log?: Maybe<Archive_Frontier_Evm_Log>;
	/** An object relationship */
	gear_message_enqueued?: Maybe<Archive_Gear_Message_Enqueued>;
	/** An object relationship */
	gear_user_message_sent?: Maybe<Archive_Gear_User_Message_Sent>;
	id: Scalars["archive_bpchar"];
	index_in_block: Scalars["Int"];
	name: Scalars["String"];
	phase: Scalars["String"];
	pos: Scalars["Int"];
};

/** columns and relationships of "event" */
export type Archive_EventArgsArgs = {
	path?: InputMaybe<Scalars["String"]>;
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
	count?: InputMaybe<Archive_Order_By>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Archive_Event_Append_Input = {
	args?: InputMaybe<Scalars["archive_jsonb"]>;
};

/** input type for inserting array relation for remote table "event" */
export type Archive_Event_Arr_Rel_Insert_Input = {
	data: Array<Archive_Event_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Event_On_Conflict>;
};

/** aggregate avg on columns */
export type Archive_Event_Avg_Fields = {
	__typename?: "archive_event_avg_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "event" */
export type Archive_Event_Avg_Order_By = {
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Archive_Event_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Event_Bool_Exp>>;
	_not?: InputMaybe<Archive_Event_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Event_Bool_Exp>>;
	args?: InputMaybe<Archive_Jsonb_Comparison_Exp>;
	block?: InputMaybe<Archive_Block_Bool_Exp>;
	block_id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	call?: InputMaybe<Archive_Call_Bool_Exp>;
	call_id?: InputMaybe<Archive_String_Comparison_Exp>;
	contracts_contract_emitted?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
	extrinsic_id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	frontier_evm_log?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
	gear_message_enqueued?: InputMaybe<Archive_Gear_Message_Enqueued_Bool_Exp>;
	gear_user_message_sent?: InputMaybe<Archive_Gear_User_Message_Sent_Bool_Exp>;
	id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	index_in_block?: InputMaybe<Archive_Int_Comparison_Exp>;
	name?: InputMaybe<Archive_String_Comparison_Exp>;
	phase?: InputMaybe<Archive_String_Comparison_Exp>;
	pos?: InputMaybe<Archive_Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "event" */
export enum Archive_Event_Constraint {
	/** unique or primary key constraint on columns "id" */
	EventPkey = "event_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Archive_Event_Delete_At_Path_Input = {
	args?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Archive_Event_Delete_Elem_Input = {
	args?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Archive_Event_Delete_Key_Input = {
	args?: InputMaybe<Scalars["String"]>;
};

/** input type for incrementing numeric columns in table "event" */
export type Archive_Event_Inc_Input = {
	index_in_block?: InputMaybe<Scalars["Int"]>;
	pos?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "event" */
export type Archive_Event_Insert_Input = {
	args?: InputMaybe<Scalars["archive_jsonb"]>;
	block?: InputMaybe<Archive_Block_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	call?: InputMaybe<Archive_Call_Obj_Rel_Insert_Input>;
	call_id?: InputMaybe<Scalars["String"]>;
	contracts_contract_emitted?: InputMaybe<Archive_Contracts_Contract_Emitted_Obj_Rel_Insert_Input>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Obj_Rel_Insert_Input>;
	extrinsic_id?: InputMaybe<Scalars["archive_bpchar"]>;
	frontier_evm_log?: InputMaybe<Archive_Frontier_Evm_Log_Obj_Rel_Insert_Input>;
	gear_message_enqueued?: InputMaybe<Archive_Gear_Message_Enqueued_Obj_Rel_Insert_Input>;
	gear_user_message_sent?: InputMaybe<Archive_Gear_User_Message_Sent_Obj_Rel_Insert_Input>;
	id?: InputMaybe<Scalars["archive_bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	name?: InputMaybe<Scalars["String"]>;
	phase?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Archive_Event_Max_Fields = {
	__typename?: "archive_event_max_fields";
	block_id?: Maybe<Scalars["archive_bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	extrinsic_id?: Maybe<Scalars["archive_bpchar"]>;
	id?: Maybe<Scalars["archive_bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	name?: Maybe<Scalars["String"]>;
	phase?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "event" */
export type Archive_Event_Max_Order_By = {
	block_id?: InputMaybe<Archive_Order_By>;
	call_id?: InputMaybe<Archive_Order_By>;
	extrinsic_id?: InputMaybe<Archive_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	name?: InputMaybe<Archive_Order_By>;
	phase?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** aggregate min on columns */
export type Archive_Event_Min_Fields = {
	__typename?: "archive_event_min_fields";
	block_id?: Maybe<Scalars["archive_bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	extrinsic_id?: Maybe<Scalars["archive_bpchar"]>;
	id?: Maybe<Scalars["archive_bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	name?: Maybe<Scalars["String"]>;
	phase?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "event" */
export type Archive_Event_Min_Order_By = {
	block_id?: InputMaybe<Archive_Order_By>;
	call_id?: InputMaybe<Archive_Order_By>;
	extrinsic_id?: InputMaybe<Archive_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	name?: InputMaybe<Archive_Order_By>;
	phase?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** response of any mutation on the table "event" */
export type Archive_Event_Mutation_Response = {
	__typename?: "archive_event_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Event>;
};

/** input type for inserting object relation for remote table "event" */
export type Archive_Event_Obj_Rel_Insert_Input = {
	data: Archive_Event_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Event_On_Conflict>;
};

/** on_conflict condition type for table "event" */
export type Archive_Event_On_Conflict = {
	constraint: Archive_Event_Constraint;
	update_columns?: Array<Archive_Event_Update_Column>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

/** Ordering options when selecting data from "event". */
export type Archive_Event_Order_By = {
	args?: InputMaybe<Archive_Order_By>;
	block?: InputMaybe<Archive_Block_Order_By>;
	block_id?: InputMaybe<Archive_Order_By>;
	call?: InputMaybe<Archive_Call_Order_By>;
	call_id?: InputMaybe<Archive_Order_By>;
	contracts_contract_emitted?: InputMaybe<Archive_Contracts_Contract_Emitted_Order_By>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Order_By>;
	extrinsic_id?: InputMaybe<Archive_Order_By>;
	frontier_evm_log?: InputMaybe<Archive_Frontier_Evm_Log_Order_By>;
	gear_message_enqueued?: InputMaybe<Archive_Gear_Message_Enqueued_Order_By>;
	gear_user_message_sent?: InputMaybe<Archive_Gear_User_Message_Sent_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	name?: InputMaybe<Archive_Order_By>;
	phase?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** primary key columns input for table: event */
export type Archive_Event_Pk_Columns_Input = {
	id: Scalars["archive_bpchar"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Archive_Event_Prepend_Input = {
	args?: InputMaybe<Scalars["archive_jsonb"]>;
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

/** input type for updating data in table "event" */
export type Archive_Event_Set_Input = {
	args?: InputMaybe<Scalars["archive_jsonb"]>;
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	call_id?: InputMaybe<Scalars["String"]>;
	extrinsic_id?: InputMaybe<Scalars["archive_bpchar"]>;
	id?: InputMaybe<Scalars["archive_bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	name?: InputMaybe<Scalars["String"]>;
	phase?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Archive_Event_Stddev_Fields = {
	__typename?: "archive_event_stddev_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "event" */
export type Archive_Event_Stddev_Order_By = {
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** aggregate stddev_pop on columns */
export type Archive_Event_Stddev_Pop_Fields = {
	__typename?: "archive_event_stddev_pop_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "event" */
export type Archive_Event_Stddev_Pop_Order_By = {
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** aggregate stddev_samp on columns */
export type Archive_Event_Stddev_Samp_Fields = {
	__typename?: "archive_event_stddev_samp_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "event" */
export type Archive_Event_Stddev_Samp_Order_By = {
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
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
	args?: InputMaybe<Scalars["archive_jsonb"]>;
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	call_id?: InputMaybe<Scalars["String"]>;
	extrinsic_id?: InputMaybe<Scalars["archive_bpchar"]>;
	id?: InputMaybe<Scalars["archive_bpchar"]>;
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
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** update columns of table "event" */
export enum Archive_Event_Update_Column {
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

export type Archive_Event_Updates = {
	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: InputMaybe<Archive_Event_Append_Input>;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: InputMaybe<Archive_Event_Delete_At_Path_Input>;
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?: InputMaybe<Archive_Event_Delete_Elem_Input>;
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: InputMaybe<Archive_Event_Delete_Key_Input>;
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Archive_Event_Inc_Input>;
	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: InputMaybe<Archive_Event_Prepend_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Event_Set_Input>;
	where: Archive_Event_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Archive_Event_Var_Pop_Fields = {
	__typename?: "archive_event_var_pop_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "event" */
export type Archive_Event_Var_Pop_Order_By = {
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** aggregate var_samp on columns */
export type Archive_Event_Var_Samp_Fields = {
	__typename?: "archive_event_var_samp_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "event" */
export type Archive_Event_Var_Samp_Order_By = {
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** aggregate variance on columns */
export type Archive_Event_Variance_Fields = {
	__typename?: "archive_event_variance_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "event" */
export type Archive_Event_Variance_Order_By = {
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
};

/** columns and relationships of "extrinsic" */
export type Archive_Extrinsic = {
	__typename?: "archive_extrinsic";
	/** An object relationship */
	block: Archive_Block;
	block_id: Scalars["archive_bpchar"];
	call_id: Scalars["String"];
	/** An array relationship */
	calls: Array<Archive_Call>;
	/** An aggregate relationship */
	calls_aggregate: Archive_Call_Aggregate;
	error?: Maybe<Scalars["archive_jsonb"]>;
	/** An array relationship */
	events: Array<Archive_Event>;
	/** An aggregate relationship */
	events_aggregate: Archive_Event_Aggregate;
	fee?: Maybe<Scalars["archive_numeric"]>;
	hash: Scalars["archive_bpchar"];
	id: Scalars["archive_bpchar"];
	index_in_block: Scalars["Int"];
	pos: Scalars["Int"];
	signature?: Maybe<Scalars["archive_jsonb"]>;
	success: Scalars["Boolean"];
	tip?: Maybe<Scalars["archive_numeric"]>;
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
	count?: InputMaybe<Archive_Order_By>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Archive_Extrinsic_Append_Input = {
	error?: InputMaybe<Scalars["archive_jsonb"]>;
	signature?: InputMaybe<Scalars["archive_jsonb"]>;
};

/** input type for inserting array relation for remote table "extrinsic" */
export type Archive_Extrinsic_Arr_Rel_Insert_Input = {
	data: Array<Archive_Extrinsic_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Extrinsic_On_Conflict>;
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
	fee?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	tip?: InputMaybe<Archive_Order_By>;
	version?: InputMaybe<Archive_Order_By>;
};

/** Boolean expression to filter rows from the table "extrinsic". All fields are combined with a logical 'AND'. */
export type Archive_Extrinsic_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Extrinsic_Bool_Exp>>;
	_not?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Extrinsic_Bool_Exp>>;
	block?: InputMaybe<Archive_Block_Bool_Exp>;
	block_id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	call_id?: InputMaybe<Archive_String_Comparison_Exp>;
	calls?: InputMaybe<Archive_Call_Bool_Exp>;
	error?: InputMaybe<Archive_Jsonb_Comparison_Exp>;
	events?: InputMaybe<Archive_Event_Bool_Exp>;
	fee?: InputMaybe<Archive_Numeric_Comparison_Exp>;
	hash?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	index_in_block?: InputMaybe<Archive_Int_Comparison_Exp>;
	pos?: InputMaybe<Archive_Int_Comparison_Exp>;
	signature?: InputMaybe<Archive_Jsonb_Comparison_Exp>;
	success?: InputMaybe<Archive_Boolean_Comparison_Exp>;
	tip?: InputMaybe<Archive_Numeric_Comparison_Exp>;
	version?: InputMaybe<Archive_Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "extrinsic" */
export enum Archive_Extrinsic_Constraint {
	/** unique or primary key constraint on columns "id" */
	ExtrinsicPkey = "extrinsic_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Archive_Extrinsic_Delete_At_Path_Input = {
	error?: InputMaybe<Array<Scalars["String"]>>;
	signature?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Archive_Extrinsic_Delete_Elem_Input = {
	error?: InputMaybe<Scalars["Int"]>;
	signature?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Archive_Extrinsic_Delete_Key_Input = {
	error?: InputMaybe<Scalars["String"]>;
	signature?: InputMaybe<Scalars["String"]>;
};

/** input type for incrementing numeric columns in table "extrinsic" */
export type Archive_Extrinsic_Inc_Input = {
	fee?: InputMaybe<Scalars["archive_numeric"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	tip?: InputMaybe<Scalars["archive_numeric"]>;
	version?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "extrinsic" */
export type Archive_Extrinsic_Insert_Input = {
	block?: InputMaybe<Archive_Block_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	call_id?: InputMaybe<Scalars["String"]>;
	calls?: InputMaybe<Archive_Call_Arr_Rel_Insert_Input>;
	error?: InputMaybe<Scalars["archive_jsonb"]>;
	events?: InputMaybe<Archive_Event_Arr_Rel_Insert_Input>;
	fee?: InputMaybe<Scalars["archive_numeric"]>;
	hash?: InputMaybe<Scalars["archive_bpchar"]>;
	id?: InputMaybe<Scalars["archive_bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	signature?: InputMaybe<Scalars["archive_jsonb"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
	tip?: InputMaybe<Scalars["archive_numeric"]>;
	version?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Archive_Extrinsic_Max_Fields = {
	__typename?: "archive_extrinsic_max_fields";
	block_id?: Maybe<Scalars["archive_bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	fee?: Maybe<Scalars["archive_numeric"]>;
	hash?: Maybe<Scalars["archive_bpchar"]>;
	id?: Maybe<Scalars["archive_bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	pos?: Maybe<Scalars["Int"]>;
	tip?: Maybe<Scalars["archive_numeric"]>;
	version?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "extrinsic" */
export type Archive_Extrinsic_Max_Order_By = {
	block_id?: InputMaybe<Archive_Order_By>;
	call_id?: InputMaybe<Archive_Order_By>;
	fee?: InputMaybe<Archive_Order_By>;
	hash?: InputMaybe<Archive_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	tip?: InputMaybe<Archive_Order_By>;
	version?: InputMaybe<Archive_Order_By>;
};

/** aggregate min on columns */
export type Archive_Extrinsic_Min_Fields = {
	__typename?: "archive_extrinsic_min_fields";
	block_id?: Maybe<Scalars["archive_bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	fee?: Maybe<Scalars["archive_numeric"]>;
	hash?: Maybe<Scalars["archive_bpchar"]>;
	id?: Maybe<Scalars["archive_bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	pos?: Maybe<Scalars["Int"]>;
	tip?: Maybe<Scalars["archive_numeric"]>;
	version?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "extrinsic" */
export type Archive_Extrinsic_Min_Order_By = {
	block_id?: InputMaybe<Archive_Order_By>;
	call_id?: InputMaybe<Archive_Order_By>;
	fee?: InputMaybe<Archive_Order_By>;
	hash?: InputMaybe<Archive_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	tip?: InputMaybe<Archive_Order_By>;
	version?: InputMaybe<Archive_Order_By>;
};

/** response of any mutation on the table "extrinsic" */
export type Archive_Extrinsic_Mutation_Response = {
	__typename?: "archive_extrinsic_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Extrinsic>;
};

/** input type for inserting object relation for remote table "extrinsic" */
export type Archive_Extrinsic_Obj_Rel_Insert_Input = {
	data: Archive_Extrinsic_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Extrinsic_On_Conflict>;
};

/** on_conflict condition type for table "extrinsic" */
export type Archive_Extrinsic_On_Conflict = {
	constraint: Archive_Extrinsic_Constraint;
	update_columns?: Array<Archive_Extrinsic_Update_Column>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

/** Ordering options when selecting data from "extrinsic". */
export type Archive_Extrinsic_Order_By = {
	block?: InputMaybe<Archive_Block_Order_By>;
	block_id?: InputMaybe<Archive_Order_By>;
	call_id?: InputMaybe<Archive_Order_By>;
	calls_aggregate?: InputMaybe<Archive_Call_Aggregate_Order_By>;
	error?: InputMaybe<Archive_Order_By>;
	events_aggregate?: InputMaybe<Archive_Event_Aggregate_Order_By>;
	fee?: InputMaybe<Archive_Order_By>;
	hash?: InputMaybe<Archive_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	signature?: InputMaybe<Archive_Order_By>;
	success?: InputMaybe<Archive_Order_By>;
	tip?: InputMaybe<Archive_Order_By>;
	version?: InputMaybe<Archive_Order_By>;
};

/** primary key columns input for table: extrinsic */
export type Archive_Extrinsic_Pk_Columns_Input = {
	id: Scalars["archive_bpchar"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Archive_Extrinsic_Prepend_Input = {
	error?: InputMaybe<Scalars["archive_jsonb"]>;
	signature?: InputMaybe<Scalars["archive_jsonb"]>;
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

/** input type for updating data in table "extrinsic" */
export type Archive_Extrinsic_Set_Input = {
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	call_id?: InputMaybe<Scalars["String"]>;
	error?: InputMaybe<Scalars["archive_jsonb"]>;
	fee?: InputMaybe<Scalars["archive_numeric"]>;
	hash?: InputMaybe<Scalars["archive_bpchar"]>;
	id?: InputMaybe<Scalars["archive_bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	signature?: InputMaybe<Scalars["archive_jsonb"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
	tip?: InputMaybe<Scalars["archive_numeric"]>;
	version?: InputMaybe<Scalars["Int"]>;
};

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
	fee?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	tip?: InputMaybe<Archive_Order_By>;
	version?: InputMaybe<Archive_Order_By>;
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
	fee?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	tip?: InputMaybe<Archive_Order_By>;
	version?: InputMaybe<Archive_Order_By>;
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
	fee?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	tip?: InputMaybe<Archive_Order_By>;
	version?: InputMaybe<Archive_Order_By>;
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
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	call_id?: InputMaybe<Scalars["String"]>;
	error?: InputMaybe<Scalars["archive_jsonb"]>;
	fee?: InputMaybe<Scalars["archive_numeric"]>;
	hash?: InputMaybe<Scalars["archive_bpchar"]>;
	id?: InputMaybe<Scalars["archive_bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	signature?: InputMaybe<Scalars["archive_jsonb"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
	tip?: InputMaybe<Scalars["archive_numeric"]>;
	version?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Archive_Extrinsic_Sum_Fields = {
	__typename?: "archive_extrinsic_sum_fields";
	fee?: Maybe<Scalars["archive_numeric"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	pos?: Maybe<Scalars["Int"]>;
	tip?: Maybe<Scalars["archive_numeric"]>;
	version?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "extrinsic" */
export type Archive_Extrinsic_Sum_Order_By = {
	fee?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	tip?: InputMaybe<Archive_Order_By>;
	version?: InputMaybe<Archive_Order_By>;
};

/** update columns of table "extrinsic" */
export enum Archive_Extrinsic_Update_Column {
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

export type Archive_Extrinsic_Updates = {
	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: InputMaybe<Archive_Extrinsic_Append_Input>;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: InputMaybe<Archive_Extrinsic_Delete_At_Path_Input>;
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?: InputMaybe<Archive_Extrinsic_Delete_Elem_Input>;
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: InputMaybe<Archive_Extrinsic_Delete_Key_Input>;
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Archive_Extrinsic_Inc_Input>;
	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: InputMaybe<Archive_Extrinsic_Prepend_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Extrinsic_Set_Input>;
	where: Archive_Extrinsic_Bool_Exp;
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
	fee?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	tip?: InputMaybe<Archive_Order_By>;
	version?: InputMaybe<Archive_Order_By>;
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
	fee?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	tip?: InputMaybe<Archive_Order_By>;
	version?: InputMaybe<Archive_Order_By>;
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
	fee?: InputMaybe<Archive_Order_By>;
	index_in_block?: InputMaybe<Archive_Order_By>;
	pos?: InputMaybe<Archive_Order_By>;
	tip?: InputMaybe<Archive_Order_By>;
	version?: InputMaybe<Archive_Order_By>;
};

/** columns and relationships of "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction = {
	__typename?: "archive_frontier_ethereum_transaction";
	/** An object relationship */
	call: Archive_Call;
	call_id: Scalars["String"];
	contract: Scalars["archive_bpchar"];
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

/** Boolean expression to filter rows from the table "frontier_ethereum_transaction". All fields are combined with a logical 'AND'. */
export type Archive_Frontier_Ethereum_Transaction_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Bool_Exp>>;
	_not?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Bool_Exp>>;
	call?: InputMaybe<Archive_Call_Bool_Exp>;
	call_id?: InputMaybe<Archive_String_Comparison_Exp>;
	contract?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	sighash?: InputMaybe<Archive_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "frontier_ethereum_transaction" */
export enum Archive_Frontier_Ethereum_Transaction_Constraint {
	/** unique or primary key constraint on columns "call_id" */
	FrontierEthereumTransactionPkey = "frontier_ethereum_transaction_pkey",
}

/** input type for inserting data into table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Insert_Input = {
	call?: InputMaybe<Archive_Call_Obj_Rel_Insert_Input>;
	call_id?: InputMaybe<Scalars["String"]>;
	contract?: InputMaybe<Scalars["archive_bpchar"]>;
	sighash?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Archive_Frontier_Ethereum_Transaction_Max_Fields = {
	__typename?: "archive_frontier_ethereum_transaction_max_fields";
	call_id?: Maybe<Scalars["String"]>;
	contract?: Maybe<Scalars["archive_bpchar"]>;
	sighash?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Archive_Frontier_Ethereum_Transaction_Min_Fields = {
	__typename?: "archive_frontier_ethereum_transaction_min_fields";
	call_id?: Maybe<Scalars["String"]>;
	contract?: Maybe<Scalars["archive_bpchar"]>;
	sighash?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Mutation_Response = {
	__typename?: "archive_frontier_ethereum_transaction_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Frontier_Ethereum_Transaction>;
};

/** input type for inserting object relation for remote table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Obj_Rel_Insert_Input = {
	data: Archive_Frontier_Ethereum_Transaction_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Frontier_Ethereum_Transaction_On_Conflict>;
};

/** on_conflict condition type for table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_On_Conflict = {
	constraint: Archive_Frontier_Ethereum_Transaction_Constraint;
	update_columns?: Array<Archive_Frontier_Ethereum_Transaction_Update_Column>;
	where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "frontier_ethereum_transaction". */
export type Archive_Frontier_Ethereum_Transaction_Order_By = {
	call?: InputMaybe<Archive_Call_Order_By>;
	call_id?: InputMaybe<Archive_Order_By>;
	contract?: InputMaybe<Archive_Order_By>;
	sighash?: InputMaybe<Archive_Order_By>;
};

/** primary key columns input for table: frontier_ethereum_transaction */
export type Archive_Frontier_Ethereum_Transaction_Pk_Columns_Input = {
	call_id: Scalars["String"];
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

/** input type for updating data in table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Set_Input = {
	call_id?: InputMaybe<Scalars["String"]>;
	contract?: InputMaybe<Scalars["archive_bpchar"]>;
	sighash?: InputMaybe<Scalars["String"]>;
};

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
	contract?: InputMaybe<Scalars["archive_bpchar"]>;
	sighash?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "frontier_ethereum_transaction" */
export enum Archive_Frontier_Ethereum_Transaction_Update_Column {
	/** column name */
	CallId = "call_id",
	/** column name */
	Contract = "contract",
	/** column name */
	Sighash = "sighash",
}

export type Archive_Frontier_Ethereum_Transaction_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Set_Input>;
	where: Archive_Frontier_Ethereum_Transaction_Bool_Exp;
};

/** columns and relationships of "frontier_evm_log" */
export type Archive_Frontier_Evm_Log = {
	__typename?: "archive_frontier_evm_log";
	contract: Scalars["archive_bpchar"];
	/** An object relationship */
	event: Archive_Event;
	event_id: Scalars["archive_bpchar"];
	topic0?: Maybe<Scalars["archive_bpchar"]>;
	topic1?: Maybe<Scalars["archive_bpchar"]>;
	topic2?: Maybe<Scalars["archive_bpchar"]>;
	topic3?: Maybe<Scalars["archive_bpchar"]>;
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

/** Boolean expression to filter rows from the table "frontier_evm_log". All fields are combined with a logical 'AND'. */
export type Archive_Frontier_Evm_Log_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Frontier_Evm_Log_Bool_Exp>>;
	_not?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Frontier_Evm_Log_Bool_Exp>>;
	contract?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	event?: InputMaybe<Archive_Event_Bool_Exp>;
	event_id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	topic0?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	topic1?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	topic2?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	topic3?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "frontier_evm_log" */
export enum Archive_Frontier_Evm_Log_Constraint {
	/** unique or primary key constraint on columns "event_id" */
	FrontierEvmLogPkey = "frontier_evm_log_pkey",
}

/** input type for inserting data into table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Insert_Input = {
	contract?: InputMaybe<Scalars["archive_bpchar"]>;
	event?: InputMaybe<Archive_Event_Obj_Rel_Insert_Input>;
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
	topic0?: InputMaybe<Scalars["archive_bpchar"]>;
	topic1?: InputMaybe<Scalars["archive_bpchar"]>;
	topic2?: InputMaybe<Scalars["archive_bpchar"]>;
	topic3?: InputMaybe<Scalars["archive_bpchar"]>;
};

/** aggregate max on columns */
export type Archive_Frontier_Evm_Log_Max_Fields = {
	__typename?: "archive_frontier_evm_log_max_fields";
	contract?: Maybe<Scalars["archive_bpchar"]>;
	event_id?: Maybe<Scalars["archive_bpchar"]>;
	topic0?: Maybe<Scalars["archive_bpchar"]>;
	topic1?: Maybe<Scalars["archive_bpchar"]>;
	topic2?: Maybe<Scalars["archive_bpchar"]>;
	topic3?: Maybe<Scalars["archive_bpchar"]>;
};

/** aggregate min on columns */
export type Archive_Frontier_Evm_Log_Min_Fields = {
	__typename?: "archive_frontier_evm_log_min_fields";
	contract?: Maybe<Scalars["archive_bpchar"]>;
	event_id?: Maybe<Scalars["archive_bpchar"]>;
	topic0?: Maybe<Scalars["archive_bpchar"]>;
	topic1?: Maybe<Scalars["archive_bpchar"]>;
	topic2?: Maybe<Scalars["archive_bpchar"]>;
	topic3?: Maybe<Scalars["archive_bpchar"]>;
};

/** response of any mutation on the table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Mutation_Response = {
	__typename?: "archive_frontier_evm_log_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Frontier_Evm_Log>;
};

/** input type for inserting object relation for remote table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Obj_Rel_Insert_Input = {
	data: Archive_Frontier_Evm_Log_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Frontier_Evm_Log_On_Conflict>;
};

/** on_conflict condition type for table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_On_Conflict = {
	constraint: Archive_Frontier_Evm_Log_Constraint;
	update_columns?: Array<Archive_Frontier_Evm_Log_Update_Column>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

/** Ordering options when selecting data from "frontier_evm_log". */
export type Archive_Frontier_Evm_Log_Order_By = {
	contract?: InputMaybe<Archive_Order_By>;
	event?: InputMaybe<Archive_Event_Order_By>;
	event_id?: InputMaybe<Archive_Order_By>;
	topic0?: InputMaybe<Archive_Order_By>;
	topic1?: InputMaybe<Archive_Order_By>;
	topic2?: InputMaybe<Archive_Order_By>;
	topic3?: InputMaybe<Archive_Order_By>;
};

/** primary key columns input for table: frontier_evm_log */
export type Archive_Frontier_Evm_Log_Pk_Columns_Input = {
	event_id: Scalars["archive_bpchar"];
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

/** input type for updating data in table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Set_Input = {
	contract?: InputMaybe<Scalars["archive_bpchar"]>;
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
	topic0?: InputMaybe<Scalars["archive_bpchar"]>;
	topic1?: InputMaybe<Scalars["archive_bpchar"]>;
	topic2?: InputMaybe<Scalars["archive_bpchar"]>;
	topic3?: InputMaybe<Scalars["archive_bpchar"]>;
};

/** Streaming cursor of the table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Frontier_Evm_Log_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Frontier_Evm_Log_Stream_Cursor_Value_Input = {
	contract?: InputMaybe<Scalars["archive_bpchar"]>;
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
	topic0?: InputMaybe<Scalars["archive_bpchar"]>;
	topic1?: InputMaybe<Scalars["archive_bpchar"]>;
	topic2?: InputMaybe<Scalars["archive_bpchar"]>;
	topic3?: InputMaybe<Scalars["archive_bpchar"]>;
};

/** update columns of table "frontier_evm_log" */
export enum Archive_Frontier_Evm_Log_Update_Column {
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

export type Archive_Frontier_Evm_Log_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Frontier_Evm_Log_Set_Input>;
	where: Archive_Frontier_Evm_Log_Bool_Exp;
};

/** columns and relationships of "gear_message_enqueued" */
export type Archive_Gear_Message_Enqueued = {
	__typename?: "archive_gear_message_enqueued";
	/** An object relationship */
	event: Archive_Event;
	event_id: Scalars["archive_bpchar"];
	program: Scalars["String"];
};

/** aggregated selection of "gear_message_enqueued" */
export type Archive_Gear_Message_Enqueued_Aggregate = {
	__typename?: "archive_gear_message_enqueued_aggregate";
	aggregate?: Maybe<Archive_Gear_Message_Enqueued_Aggregate_Fields>;
	nodes: Array<Archive_Gear_Message_Enqueued>;
};

/** aggregate fields of "gear_message_enqueued" */
export type Archive_Gear_Message_Enqueued_Aggregate_Fields = {
	__typename?: "archive_gear_message_enqueued_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Archive_Gear_Message_Enqueued_Max_Fields>;
	min?: Maybe<Archive_Gear_Message_Enqueued_Min_Fields>;
};

/** aggregate fields of "gear_message_enqueued" */
export type Archive_Gear_Message_Enqueued_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Archive_Gear_Message_Enqueued_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "gear_message_enqueued". All fields are combined with a logical 'AND'. */
export type Archive_Gear_Message_Enqueued_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Gear_Message_Enqueued_Bool_Exp>>;
	_not?: InputMaybe<Archive_Gear_Message_Enqueued_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Gear_Message_Enqueued_Bool_Exp>>;
	event?: InputMaybe<Archive_Event_Bool_Exp>;
	event_id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	program?: InputMaybe<Archive_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "gear_message_enqueued" */
export enum Archive_Gear_Message_Enqueued_Constraint {
	/** unique or primary key constraint on columns "event_id" */
	GearMessageEnqueuedPkey = "gear_message_enqueued_pkey",
}

/** input type for inserting data into table "gear_message_enqueued" */
export type Archive_Gear_Message_Enqueued_Insert_Input = {
	event?: InputMaybe<Archive_Event_Obj_Rel_Insert_Input>;
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
	program?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Archive_Gear_Message_Enqueued_Max_Fields = {
	__typename?: "archive_gear_message_enqueued_max_fields";
	event_id?: Maybe<Scalars["archive_bpchar"]>;
	program?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Archive_Gear_Message_Enqueued_Min_Fields = {
	__typename?: "archive_gear_message_enqueued_min_fields";
	event_id?: Maybe<Scalars["archive_bpchar"]>;
	program?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "gear_message_enqueued" */
export type Archive_Gear_Message_Enqueued_Mutation_Response = {
	__typename?: "archive_gear_message_enqueued_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Gear_Message_Enqueued>;
};

/** input type for inserting object relation for remote table "gear_message_enqueued" */
export type Archive_Gear_Message_Enqueued_Obj_Rel_Insert_Input = {
	data: Archive_Gear_Message_Enqueued_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Gear_Message_Enqueued_On_Conflict>;
};

/** on_conflict condition type for table "gear_message_enqueued" */
export type Archive_Gear_Message_Enqueued_On_Conflict = {
	constraint: Archive_Gear_Message_Enqueued_Constraint;
	update_columns?: Array<Archive_Gear_Message_Enqueued_Update_Column>;
	where?: InputMaybe<Archive_Gear_Message_Enqueued_Bool_Exp>;
};

/** Ordering options when selecting data from "gear_message_enqueued". */
export type Archive_Gear_Message_Enqueued_Order_By = {
	event?: InputMaybe<Archive_Event_Order_By>;
	event_id?: InputMaybe<Archive_Order_By>;
	program?: InputMaybe<Archive_Order_By>;
};

/** primary key columns input for table: gear_message_enqueued */
export type Archive_Gear_Message_Enqueued_Pk_Columns_Input = {
	event_id: Scalars["archive_bpchar"];
};

/** select columns of table "gear_message_enqueued" */
export enum Archive_Gear_Message_Enqueued_Select_Column {
	/** column name */
	EventId = "event_id",
	/** column name */
	Program = "program",
}

/** input type for updating data in table "gear_message_enqueued" */
export type Archive_Gear_Message_Enqueued_Set_Input = {
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
	program?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "gear_message_enqueued" */
export type Archive_Gear_Message_Enqueued_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Gear_Message_Enqueued_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Gear_Message_Enqueued_Stream_Cursor_Value_Input = {
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
	program?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "gear_message_enqueued" */
export enum Archive_Gear_Message_Enqueued_Update_Column {
	/** column name */
	EventId = "event_id",
	/** column name */
	Program = "program",
}

export type Archive_Gear_Message_Enqueued_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Gear_Message_Enqueued_Set_Input>;
	where: Archive_Gear_Message_Enqueued_Bool_Exp;
};

/** columns and relationships of "gear_user_message_sent" */
export type Archive_Gear_User_Message_Sent = {
	__typename?: "archive_gear_user_message_sent";
	/** An object relationship */
	event: Archive_Event;
	event_id: Scalars["archive_bpchar"];
	program: Scalars["String"];
};

/** aggregated selection of "gear_user_message_sent" */
export type Archive_Gear_User_Message_Sent_Aggregate = {
	__typename?: "archive_gear_user_message_sent_aggregate";
	aggregate?: Maybe<Archive_Gear_User_Message_Sent_Aggregate_Fields>;
	nodes: Array<Archive_Gear_User_Message_Sent>;
};

/** aggregate fields of "gear_user_message_sent" */
export type Archive_Gear_User_Message_Sent_Aggregate_Fields = {
	__typename?: "archive_gear_user_message_sent_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Archive_Gear_User_Message_Sent_Max_Fields>;
	min?: Maybe<Archive_Gear_User_Message_Sent_Min_Fields>;
};

/** aggregate fields of "gear_user_message_sent" */
export type Archive_Gear_User_Message_Sent_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Archive_Gear_User_Message_Sent_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "gear_user_message_sent". All fields are combined with a logical 'AND'. */
export type Archive_Gear_User_Message_Sent_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Gear_User_Message_Sent_Bool_Exp>>;
	_not?: InputMaybe<Archive_Gear_User_Message_Sent_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Gear_User_Message_Sent_Bool_Exp>>;
	event?: InputMaybe<Archive_Event_Bool_Exp>;
	event_id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	program?: InputMaybe<Archive_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "gear_user_message_sent" */
export enum Archive_Gear_User_Message_Sent_Constraint {
	/** unique or primary key constraint on columns "event_id" */
	GearUserMessageSentPkey = "gear_user_message_sent_pkey",
}

/** input type for inserting data into table "gear_user_message_sent" */
export type Archive_Gear_User_Message_Sent_Insert_Input = {
	event?: InputMaybe<Archive_Event_Obj_Rel_Insert_Input>;
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
	program?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Archive_Gear_User_Message_Sent_Max_Fields = {
	__typename?: "archive_gear_user_message_sent_max_fields";
	event_id?: Maybe<Scalars["archive_bpchar"]>;
	program?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Archive_Gear_User_Message_Sent_Min_Fields = {
	__typename?: "archive_gear_user_message_sent_min_fields";
	event_id?: Maybe<Scalars["archive_bpchar"]>;
	program?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "gear_user_message_sent" */
export type Archive_Gear_User_Message_Sent_Mutation_Response = {
	__typename?: "archive_gear_user_message_sent_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Gear_User_Message_Sent>;
};

/** input type for inserting object relation for remote table "gear_user_message_sent" */
export type Archive_Gear_User_Message_Sent_Obj_Rel_Insert_Input = {
	data: Archive_Gear_User_Message_Sent_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Gear_User_Message_Sent_On_Conflict>;
};

/** on_conflict condition type for table "gear_user_message_sent" */
export type Archive_Gear_User_Message_Sent_On_Conflict = {
	constraint: Archive_Gear_User_Message_Sent_Constraint;
	update_columns?: Array<Archive_Gear_User_Message_Sent_Update_Column>;
	where?: InputMaybe<Archive_Gear_User_Message_Sent_Bool_Exp>;
};

/** Ordering options when selecting data from "gear_user_message_sent". */
export type Archive_Gear_User_Message_Sent_Order_By = {
	event?: InputMaybe<Archive_Event_Order_By>;
	event_id?: InputMaybe<Archive_Order_By>;
	program?: InputMaybe<Archive_Order_By>;
};

/** primary key columns input for table: gear_user_message_sent */
export type Archive_Gear_User_Message_Sent_Pk_Columns_Input = {
	event_id: Scalars["archive_bpchar"];
};

/** select columns of table "gear_user_message_sent" */
export enum Archive_Gear_User_Message_Sent_Select_Column {
	/** column name */
	EventId = "event_id",
	/** column name */
	Program = "program",
}

/** input type for updating data in table "gear_user_message_sent" */
export type Archive_Gear_User_Message_Sent_Set_Input = {
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
	program?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "gear_user_message_sent" */
export type Archive_Gear_User_Message_Sent_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Gear_User_Message_Sent_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Gear_User_Message_Sent_Stream_Cursor_Value_Input = {
	event_id?: InputMaybe<Scalars["archive_bpchar"]>;
	program?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "gear_user_message_sent" */
export enum Archive_Gear_User_Message_Sent_Update_Column {
	/** column name */
	EventId = "event_id",
	/** column name */
	Program = "program",
}

export type Archive_Gear_User_Message_Sent_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Gear_User_Message_Sent_Set_Input>;
	where: Archive_Gear_User_Message_Sent_Bool_Exp;
};

export type Archive_Jsonb_Cast_Exp = {
	String?: InputMaybe<Archive_String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Archive_Jsonb_Comparison_Exp = {
	_cast?: InputMaybe<Archive_Jsonb_Cast_Exp>;
	/** is the column contained in the given json value */
	_contained_in?: InputMaybe<Scalars["archive_jsonb"]>;
	/** does the column contain the given json value at the top level */
	_contains?: InputMaybe<Scalars["archive_jsonb"]>;
	_eq?: InputMaybe<Scalars["archive_jsonb"]>;
	_gt?: InputMaybe<Scalars["archive_jsonb"]>;
	_gte?: InputMaybe<Scalars["archive_jsonb"]>;
	/** does the string exist as a top-level key in the column */
	_has_key?: InputMaybe<Scalars["String"]>;
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?: InputMaybe<Array<Scalars["String"]>>;
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?: InputMaybe<Array<Scalars["String"]>>;
	_in?: InputMaybe<Array<Scalars["archive_jsonb"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["archive_jsonb"]>;
	_lte?: InputMaybe<Scalars["archive_jsonb"]>;
	_neq?: InputMaybe<Scalars["archive_jsonb"]>;
	_nin?: InputMaybe<Array<Scalars["archive_jsonb"]>>;
};

/** columns and relationships of "metadata" */
export type Archive_Metadata = {
	__typename?: "archive_metadata";
	block_hash: Scalars["archive_bpchar"];
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
	block_hash?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	block_height?: InputMaybe<Archive_Int_Comparison_Exp>;
	hex?: InputMaybe<Archive_String_Comparison_Exp>;
	id?: InputMaybe<Archive_String_Comparison_Exp>;
	spec_name?: InputMaybe<Archive_String_Comparison_Exp>;
	spec_version?: InputMaybe<Archive_Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "metadata" */
export enum Archive_Metadata_Constraint {
	/** unique or primary key constraint on columns "id" */
	MetadataPkey = "metadata_pkey",
}

/** input type for incrementing numeric columns in table "metadata" */
export type Archive_Metadata_Inc_Input = {
	block_height?: InputMaybe<Scalars["Int"]>;
	spec_version?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "metadata" */
export type Archive_Metadata_Insert_Input = {
	block_hash?: InputMaybe<Scalars["archive_bpchar"]>;
	block_height?: InputMaybe<Scalars["Int"]>;
	hex?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	spec_name?: InputMaybe<Scalars["String"]>;
	spec_version?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Archive_Metadata_Max_Fields = {
	__typename?: "archive_metadata_max_fields";
	block_hash?: Maybe<Scalars["archive_bpchar"]>;
	block_height?: Maybe<Scalars["Int"]>;
	hex?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	spec_name?: Maybe<Scalars["String"]>;
	spec_version?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type Archive_Metadata_Min_Fields = {
	__typename?: "archive_metadata_min_fields";
	block_hash?: Maybe<Scalars["archive_bpchar"]>;
	block_height?: Maybe<Scalars["Int"]>;
	hex?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	spec_name?: Maybe<Scalars["String"]>;
	spec_version?: Maybe<Scalars["Int"]>;
};

/** response of any mutation on the table "metadata" */
export type Archive_Metadata_Mutation_Response = {
	__typename?: "archive_metadata_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Metadata>;
};

/** on_conflict condition type for table "metadata" */
export type Archive_Metadata_On_Conflict = {
	constraint: Archive_Metadata_Constraint;
	update_columns?: Array<Archive_Metadata_Update_Column>;
	where?: InputMaybe<Archive_Metadata_Bool_Exp>;
};

/** Ordering options when selecting data from "metadata". */
export type Archive_Metadata_Order_By = {
	block_hash?: InputMaybe<Archive_Order_By>;
	block_height?: InputMaybe<Archive_Order_By>;
	hex?: InputMaybe<Archive_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	spec_name?: InputMaybe<Archive_Order_By>;
	spec_version?: InputMaybe<Archive_Order_By>;
};

/** primary key columns input for table: metadata */
export type Archive_Metadata_Pk_Columns_Input = {
	id: Scalars["String"];
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

/** input type for updating data in table "metadata" */
export type Archive_Metadata_Set_Input = {
	block_hash?: InputMaybe<Scalars["archive_bpchar"]>;
	block_height?: InputMaybe<Scalars["Int"]>;
	hex?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	spec_name?: InputMaybe<Scalars["String"]>;
	spec_version?: InputMaybe<Scalars["Int"]>;
};

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
	block_hash?: InputMaybe<Scalars["archive_bpchar"]>;
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

/** update columns of table "metadata" */
export enum Archive_Metadata_Update_Column {
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

export type Archive_Metadata_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Archive_Metadata_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Metadata_Set_Input>;
	where: Archive_Metadata_Bool_Exp;
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

/** columns and relationships of "migrations" */
export type Archive_Migrations = {
	__typename?: "archive_migrations";
	executed_at?: Maybe<Scalars["archive_timestamp"]>;
	hash: Scalars["String"];
	id: Scalars["Int"];
	name: Scalars["String"];
};

/** aggregated selection of "migrations" */
export type Archive_Migrations_Aggregate = {
	__typename?: "archive_migrations_aggregate";
	aggregate?: Maybe<Archive_Migrations_Aggregate_Fields>;
	nodes: Array<Archive_Migrations>;
};

/** aggregate fields of "migrations" */
export type Archive_Migrations_Aggregate_Fields = {
	__typename?: "archive_migrations_aggregate_fields";
	avg?: Maybe<Archive_Migrations_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Archive_Migrations_Max_Fields>;
	min?: Maybe<Archive_Migrations_Min_Fields>;
	stddev?: Maybe<Archive_Migrations_Stddev_Fields>;
	stddev_pop?: Maybe<Archive_Migrations_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Archive_Migrations_Stddev_Samp_Fields>;
	sum?: Maybe<Archive_Migrations_Sum_Fields>;
	var_pop?: Maybe<Archive_Migrations_Var_Pop_Fields>;
	var_samp?: Maybe<Archive_Migrations_Var_Samp_Fields>;
	variance?: Maybe<Archive_Migrations_Variance_Fields>;
};

/** aggregate fields of "migrations" */
export type Archive_Migrations_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Archive_Migrations_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Archive_Migrations_Avg_Fields = {
	__typename?: "archive_migrations_avg_fields";
	id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "migrations". All fields are combined with a logical 'AND'. */
export type Archive_Migrations_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Migrations_Bool_Exp>>;
	_not?: InputMaybe<Archive_Migrations_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Migrations_Bool_Exp>>;
	executed_at?: InputMaybe<Archive_Timestamp_Comparison_Exp>;
	hash?: InputMaybe<Archive_String_Comparison_Exp>;
	id?: InputMaybe<Archive_Int_Comparison_Exp>;
	name?: InputMaybe<Archive_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "migrations" */
export enum Archive_Migrations_Constraint {
	/** unique or primary key constraint on columns "name" */
	MigrationsNameKey = "migrations_name_key",
	/** unique or primary key constraint on columns "id" */
	MigrationsPkey = "migrations_pkey",
}

/** input type for incrementing numeric columns in table "migrations" */
export type Archive_Migrations_Inc_Input = {
	id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "migrations" */
export type Archive_Migrations_Insert_Input = {
	executed_at?: InputMaybe<Scalars["archive_timestamp"]>;
	hash?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["Int"]>;
	name?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Archive_Migrations_Max_Fields = {
	__typename?: "archive_migrations_max_fields";
	executed_at?: Maybe<Scalars["archive_timestamp"]>;
	hash?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["Int"]>;
	name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Archive_Migrations_Min_Fields = {
	__typename?: "archive_migrations_min_fields";
	executed_at?: Maybe<Scalars["archive_timestamp"]>;
	hash?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["Int"]>;
	name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "migrations" */
export type Archive_Migrations_Mutation_Response = {
	__typename?: "archive_migrations_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Migrations>;
};

/** on_conflict condition type for table "migrations" */
export type Archive_Migrations_On_Conflict = {
	constraint: Archive_Migrations_Constraint;
	update_columns?: Array<Archive_Migrations_Update_Column>;
	where?: InputMaybe<Archive_Migrations_Bool_Exp>;
};

/** Ordering options when selecting data from "migrations". */
export type Archive_Migrations_Order_By = {
	executed_at?: InputMaybe<Archive_Order_By>;
	hash?: InputMaybe<Archive_Order_By>;
	id?: InputMaybe<Archive_Order_By>;
	name?: InputMaybe<Archive_Order_By>;
};

/** primary key columns input for table: migrations */
export type Archive_Migrations_Pk_Columns_Input = {
	id: Scalars["Int"];
};

/** select columns of table "migrations" */
export enum Archive_Migrations_Select_Column {
	/** column name */
	ExecutedAt = "executed_at",
	/** column name */
	Hash = "hash",
	/** column name */
	Id = "id",
	/** column name */
	Name = "name",
}

/** input type for updating data in table "migrations" */
export type Archive_Migrations_Set_Input = {
	executed_at?: InputMaybe<Scalars["archive_timestamp"]>;
	hash?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["Int"]>;
	name?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Archive_Migrations_Stddev_Fields = {
	__typename?: "archive_migrations_stddev_fields";
	id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Archive_Migrations_Stddev_Pop_Fields = {
	__typename?: "archive_migrations_stddev_pop_fields";
	id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Archive_Migrations_Stddev_Samp_Fields = {
	__typename?: "archive_migrations_stddev_samp_fields";
	id?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "migrations" */
export type Archive_Migrations_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Migrations_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Migrations_Stream_Cursor_Value_Input = {
	executed_at?: InputMaybe<Scalars["archive_timestamp"]>;
	hash?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["Int"]>;
	name?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Archive_Migrations_Sum_Fields = {
	__typename?: "archive_migrations_sum_fields";
	id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "migrations" */
export enum Archive_Migrations_Update_Column {
	/** column name */
	ExecutedAt = "executed_at",
	/** column name */
	Hash = "hash",
	/** column name */
	Id = "id",
	/** column name */
	Name = "name",
}

export type Archive_Migrations_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Archive_Migrations_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Migrations_Set_Input>;
	where: Archive_Migrations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Archive_Migrations_Var_Pop_Fields = {
	__typename?: "archive_migrations_var_pop_fields";
	id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Archive_Migrations_Var_Samp_Fields = {
	__typename?: "archive_migrations_var_samp_fields";
	id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Archive_Migrations_Variance_Fields = {
	__typename?: "archive_migrations_variance_fields";
	id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Archive_Numeric_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["archive_numeric"]>;
	_gt?: InputMaybe<Scalars["archive_numeric"]>;
	_gte?: InputMaybe<Scalars["archive_numeric"]>;
	_in?: InputMaybe<Array<Scalars["archive_numeric"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["archive_numeric"]>;
	_lte?: InputMaybe<Scalars["archive_numeric"]>;
	_neq?: InputMaybe<Scalars["archive_numeric"]>;
	_nin?: InputMaybe<Array<Scalars["archive_numeric"]>>;
};

/** column ordering options */
export enum Archive_Order_By {
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

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Archive_Timestamp_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["archive_timestamp"]>;
	_gt?: InputMaybe<Scalars["archive_timestamp"]>;
	_gte?: InputMaybe<Scalars["archive_timestamp"]>;
	_in?: InputMaybe<Array<Scalars["archive_timestamp"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["archive_timestamp"]>;
	_lte?: InputMaybe<Scalars["archive_timestamp"]>;
	_neq?: InputMaybe<Scalars["archive_timestamp"]>;
	_nin?: InputMaybe<Array<Scalars["archive_timestamp"]>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Archive_Timestamptz_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["archive_timestamptz"]>;
	_gt?: InputMaybe<Scalars["archive_timestamptz"]>;
	_gte?: InputMaybe<Scalars["archive_timestamptz"]>;
	_in?: InputMaybe<Array<Scalars["archive_timestamptz"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["archive_timestamptz"]>;
	_lte?: InputMaybe<Scalars["archive_timestamptz"]>;
	_neq?: InputMaybe<Scalars["archive_timestamptz"]>;
	_nin?: InputMaybe<Array<Scalars["archive_timestamptz"]>>;
};

/** columns and relationships of "warning" */
export type Archive_Warning = {
	__typename?: "archive_warning";
	block_id?: Maybe<Scalars["archive_bpchar"]>;
	message?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "warning" */
export type Archive_Warning_Aggregate = {
	__typename?: "archive_warning_aggregate";
	aggregate?: Maybe<Archive_Warning_Aggregate_Fields>;
	nodes: Array<Archive_Warning>;
};

/** aggregate fields of "warning" */
export type Archive_Warning_Aggregate_Fields = {
	__typename?: "archive_warning_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Archive_Warning_Max_Fields>;
	min?: Maybe<Archive_Warning_Min_Fields>;
};

/** aggregate fields of "warning" */
export type Archive_Warning_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Archive_Warning_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "warning". All fields are combined with a logical 'AND'. */
export type Archive_Warning_Bool_Exp = {
	_and?: InputMaybe<Array<Archive_Warning_Bool_Exp>>;
	_not?: InputMaybe<Archive_Warning_Bool_Exp>;
	_or?: InputMaybe<Array<Archive_Warning_Bool_Exp>>;
	block_id?: InputMaybe<Archive_Bpchar_Comparison_Exp>;
	message?: InputMaybe<Archive_String_Comparison_Exp>;
};

/** input type for inserting data into table "warning" */
export type Archive_Warning_Insert_Input = {
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	message?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Archive_Warning_Max_Fields = {
	__typename?: "archive_warning_max_fields";
	block_id?: Maybe<Scalars["archive_bpchar"]>;
	message?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Archive_Warning_Min_Fields = {
	__typename?: "archive_warning_min_fields";
	block_id?: Maybe<Scalars["archive_bpchar"]>;
	message?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "warning" */
export type Archive_Warning_Mutation_Response = {
	__typename?: "archive_warning_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Warning>;
};

/** Ordering options when selecting data from "warning". */
export type Archive_Warning_Order_By = {
	block_id?: InputMaybe<Archive_Order_By>;
	message?: InputMaybe<Archive_Order_By>;
};

/** select columns of table "warning" */
export enum Archive_Warning_Select_Column {
	/** column name */
	BlockId = "block_id",
	/** column name */
	Message = "message",
}

/** input type for updating data in table "warning" */
export type Archive_Warning_Set_Input = {
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	message?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "warning" */
export type Archive_Warning_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Archive_Warning_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Archive_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Archive_Warning_Stream_Cursor_Value_Input = {
	block_id?: InputMaybe<Scalars["archive_bpchar"]>;
	message?: InputMaybe<Scalars["String"]>;
};

export type Archive_Warning_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Archive_Warning_Set_Input>;
	where: Archive_Warning_Bool_Exp;
};

export type Archivemutation_Root = {
	__typename?: "archivemutation_root";
	/** delete data from the table: "block" */
	delete_block?: Maybe<Archive_Block_Mutation_Response>;
	/** delete single row from the table: "block" */
	delete_block_by_pk?: Maybe<Archive_Block>;
	/** delete data from the table: "call" */
	delete_call?: Maybe<Archive_Call_Mutation_Response>;
	/** delete single row from the table: "call" */
	delete_call_by_pk?: Maybe<Archive_Call>;
	/** delete data from the table: "contracts_contract_emitted" */
	delete_contracts_contract_emitted?: Maybe<Archive_Contracts_Contract_Emitted_Mutation_Response>;
	/** delete single row from the table: "contracts_contract_emitted" */
	delete_contracts_contract_emitted_by_pk?: Maybe<Archive_Contracts_Contract_Emitted>;
	/** delete data from the table: "event" */
	delete_event?: Maybe<Archive_Event_Mutation_Response>;
	/** delete single row from the table: "event" */
	delete_event_by_pk?: Maybe<Archive_Event>;
	/** delete data from the table: "extrinsic" */
	delete_extrinsic?: Maybe<Archive_Extrinsic_Mutation_Response>;
	/** delete single row from the table: "extrinsic" */
	delete_extrinsic_by_pk?: Maybe<Archive_Extrinsic>;
	/** delete data from the table: "frontier_ethereum_transaction" */
	delete_frontier_ethereum_transaction?: Maybe<Archive_Frontier_Ethereum_Transaction_Mutation_Response>;
	/** delete single row from the table: "frontier_ethereum_transaction" */
	delete_frontier_ethereum_transaction_by_pk?: Maybe<Archive_Frontier_Ethereum_Transaction>;
	/** delete data from the table: "frontier_evm_log" */
	delete_frontier_evm_log?: Maybe<Archive_Frontier_Evm_Log_Mutation_Response>;
	/** delete single row from the table: "frontier_evm_log" */
	delete_frontier_evm_log_by_pk?: Maybe<Archive_Frontier_Evm_Log>;
	/** delete data from the table: "gear_message_enqueued" */
	delete_gear_message_enqueued?: Maybe<Archive_Gear_Message_Enqueued_Mutation_Response>;
	/** delete single row from the table: "gear_message_enqueued" */
	delete_gear_message_enqueued_by_pk?: Maybe<Archive_Gear_Message_Enqueued>;
	/** delete data from the table: "gear_user_message_sent" */
	delete_gear_user_message_sent?: Maybe<Archive_Gear_User_Message_Sent_Mutation_Response>;
	/** delete single row from the table: "gear_user_message_sent" */
	delete_gear_user_message_sent_by_pk?: Maybe<Archive_Gear_User_Message_Sent>;
	/** delete data from the table: "metadata" */
	delete_metadata?: Maybe<Archive_Metadata_Mutation_Response>;
	/** delete single row from the table: "metadata" */
	delete_metadata_by_pk?: Maybe<Archive_Metadata>;
	/** delete data from the table: "migrations" */
	delete_migrations?: Maybe<Archive_Migrations_Mutation_Response>;
	/** delete single row from the table: "migrations" */
	delete_migrations_by_pk?: Maybe<Archive_Migrations>;
	/** delete data from the table: "warning" */
	delete_warning?: Maybe<Archive_Warning_Mutation_Response>;
	/** insert data into the table: "block" */
	insert_block?: Maybe<Archive_Block_Mutation_Response>;
	/** insert a single row into the table: "block" */
	insert_block_one?: Maybe<Archive_Block>;
	/** insert data into the table: "call" */
	insert_call?: Maybe<Archive_Call_Mutation_Response>;
	/** insert a single row into the table: "call" */
	insert_call_one?: Maybe<Archive_Call>;
	/** insert data into the table: "contracts_contract_emitted" */
	insert_contracts_contract_emitted?: Maybe<Archive_Contracts_Contract_Emitted_Mutation_Response>;
	/** insert a single row into the table: "contracts_contract_emitted" */
	insert_contracts_contract_emitted_one?: Maybe<Archive_Contracts_Contract_Emitted>;
	/** insert data into the table: "event" */
	insert_event?: Maybe<Archive_Event_Mutation_Response>;
	/** insert a single row into the table: "event" */
	insert_event_one?: Maybe<Archive_Event>;
	/** insert data into the table: "extrinsic" */
	insert_extrinsic?: Maybe<Archive_Extrinsic_Mutation_Response>;
	/** insert a single row into the table: "extrinsic" */
	insert_extrinsic_one?: Maybe<Archive_Extrinsic>;
	/** insert data into the table: "frontier_ethereum_transaction" */
	insert_frontier_ethereum_transaction?: Maybe<Archive_Frontier_Ethereum_Transaction_Mutation_Response>;
	/** insert a single row into the table: "frontier_ethereum_transaction" */
	insert_frontier_ethereum_transaction_one?: Maybe<Archive_Frontier_Ethereum_Transaction>;
	/** insert data into the table: "frontier_evm_log" */
	insert_frontier_evm_log?: Maybe<Archive_Frontier_Evm_Log_Mutation_Response>;
	/** insert a single row into the table: "frontier_evm_log" */
	insert_frontier_evm_log_one?: Maybe<Archive_Frontier_Evm_Log>;
	/** insert data into the table: "gear_message_enqueued" */
	insert_gear_message_enqueued?: Maybe<Archive_Gear_Message_Enqueued_Mutation_Response>;
	/** insert a single row into the table: "gear_message_enqueued" */
	insert_gear_message_enqueued_one?: Maybe<Archive_Gear_Message_Enqueued>;
	/** insert data into the table: "gear_user_message_sent" */
	insert_gear_user_message_sent?: Maybe<Archive_Gear_User_Message_Sent_Mutation_Response>;
	/** insert a single row into the table: "gear_user_message_sent" */
	insert_gear_user_message_sent_one?: Maybe<Archive_Gear_User_Message_Sent>;
	/** insert data into the table: "metadata" */
	insert_metadata?: Maybe<Archive_Metadata_Mutation_Response>;
	/** insert a single row into the table: "metadata" */
	insert_metadata_one?: Maybe<Archive_Metadata>;
	/** insert data into the table: "migrations" */
	insert_migrations?: Maybe<Archive_Migrations_Mutation_Response>;
	/** insert a single row into the table: "migrations" */
	insert_migrations_one?: Maybe<Archive_Migrations>;
	/** insert data into the table: "warning" */
	insert_warning?: Maybe<Archive_Warning_Mutation_Response>;
	/** insert a single row into the table: "warning" */
	insert_warning_one?: Maybe<Archive_Warning>;
	/** update data of the table: "block" */
	update_block?: Maybe<Archive_Block_Mutation_Response>;
	/** update single row of the table: "block" */
	update_block_by_pk?: Maybe<Archive_Block>;
	/** update multiples rows of table: "block" */
	update_block_many?: Maybe<Array<Maybe<Archive_Block_Mutation_Response>>>;
	/** update data of the table: "call" */
	update_call?: Maybe<Archive_Call_Mutation_Response>;
	/** update single row of the table: "call" */
	update_call_by_pk?: Maybe<Archive_Call>;
	/** update multiples rows of table: "call" */
	update_call_many?: Maybe<Array<Maybe<Archive_Call_Mutation_Response>>>;
	/** update data of the table: "contracts_contract_emitted" */
	update_contracts_contract_emitted?: Maybe<Archive_Contracts_Contract_Emitted_Mutation_Response>;
	/** update single row of the table: "contracts_contract_emitted" */
	update_contracts_contract_emitted_by_pk?: Maybe<Archive_Contracts_Contract_Emitted>;
	/** update multiples rows of table: "contracts_contract_emitted" */
	update_contracts_contract_emitted_many?: Maybe<
		Array<Maybe<Archive_Contracts_Contract_Emitted_Mutation_Response>>
	>;
	/** update data of the table: "event" */
	update_event?: Maybe<Archive_Event_Mutation_Response>;
	/** update single row of the table: "event" */
	update_event_by_pk?: Maybe<Archive_Event>;
	/** update multiples rows of table: "event" */
	update_event_many?: Maybe<Array<Maybe<Archive_Event_Mutation_Response>>>;
	/** update data of the table: "extrinsic" */
	update_extrinsic?: Maybe<Archive_Extrinsic_Mutation_Response>;
	/** update single row of the table: "extrinsic" */
	update_extrinsic_by_pk?: Maybe<Archive_Extrinsic>;
	/** update multiples rows of table: "extrinsic" */
	update_extrinsic_many?: Maybe<
		Array<Maybe<Archive_Extrinsic_Mutation_Response>>
	>;
	/** update data of the table: "frontier_ethereum_transaction" */
	update_frontier_ethereum_transaction?: Maybe<Archive_Frontier_Ethereum_Transaction_Mutation_Response>;
	/** update single row of the table: "frontier_ethereum_transaction" */
	update_frontier_ethereum_transaction_by_pk?: Maybe<Archive_Frontier_Ethereum_Transaction>;
	/** update multiples rows of table: "frontier_ethereum_transaction" */
	update_frontier_ethereum_transaction_many?: Maybe<
		Array<Maybe<Archive_Frontier_Ethereum_Transaction_Mutation_Response>>
	>;
	/** update data of the table: "frontier_evm_log" */
	update_frontier_evm_log?: Maybe<Archive_Frontier_Evm_Log_Mutation_Response>;
	/** update single row of the table: "frontier_evm_log" */
	update_frontier_evm_log_by_pk?: Maybe<Archive_Frontier_Evm_Log>;
	/** update multiples rows of table: "frontier_evm_log" */
	update_frontier_evm_log_many?: Maybe<
		Array<Maybe<Archive_Frontier_Evm_Log_Mutation_Response>>
	>;
	/** update data of the table: "gear_message_enqueued" */
	update_gear_message_enqueued?: Maybe<Archive_Gear_Message_Enqueued_Mutation_Response>;
	/** update single row of the table: "gear_message_enqueued" */
	update_gear_message_enqueued_by_pk?: Maybe<Archive_Gear_Message_Enqueued>;
	/** update multiples rows of table: "gear_message_enqueued" */
	update_gear_message_enqueued_many?: Maybe<
		Array<Maybe<Archive_Gear_Message_Enqueued_Mutation_Response>>
	>;
	/** update data of the table: "gear_user_message_sent" */
	update_gear_user_message_sent?: Maybe<Archive_Gear_User_Message_Sent_Mutation_Response>;
	/** update single row of the table: "gear_user_message_sent" */
	update_gear_user_message_sent_by_pk?: Maybe<Archive_Gear_User_Message_Sent>;
	/** update multiples rows of table: "gear_user_message_sent" */
	update_gear_user_message_sent_many?: Maybe<
		Array<Maybe<Archive_Gear_User_Message_Sent_Mutation_Response>>
	>;
	/** update data of the table: "metadata" */
	update_metadata?: Maybe<Archive_Metadata_Mutation_Response>;
	/** update single row of the table: "metadata" */
	update_metadata_by_pk?: Maybe<Archive_Metadata>;
	/** update multiples rows of table: "metadata" */
	update_metadata_many?: Maybe<
		Array<Maybe<Archive_Metadata_Mutation_Response>>
	>;
	/** update data of the table: "migrations" */
	update_migrations?: Maybe<Archive_Migrations_Mutation_Response>;
	/** update single row of the table: "migrations" */
	update_migrations_by_pk?: Maybe<Archive_Migrations>;
	/** update multiples rows of table: "migrations" */
	update_migrations_many?: Maybe<
		Array<Maybe<Archive_Migrations_Mutation_Response>>
	>;
	/** update data of the table: "warning" */
	update_warning?: Maybe<Archive_Warning_Mutation_Response>;
	/** update multiples rows of table: "warning" */
	update_warning_many?: Maybe<Array<Maybe<Archive_Warning_Mutation_Response>>>;
};

export type Archivemutation_RootDelete_BlockArgs = {
	where: Archive_Block_Bool_Exp;
};

export type Archivemutation_RootDelete_Block_By_PkArgs = {
	id: Scalars["archive_bpchar"];
};

export type Archivemutation_RootDelete_CallArgs = {
	where: Archive_Call_Bool_Exp;
};

export type Archivemutation_RootDelete_Call_By_PkArgs = {
	id: Scalars["String"];
};

export type Archivemutation_RootDelete_Contracts_Contract_EmittedArgs = {
	where: Archive_Contracts_Contract_Emitted_Bool_Exp;
};

export type Archivemutation_RootDelete_Contracts_Contract_Emitted_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivemutation_RootDelete_EventArgs = {
	where: Archive_Event_Bool_Exp;
};

export type Archivemutation_RootDelete_Event_By_PkArgs = {
	id: Scalars["archive_bpchar"];
};

export type Archivemutation_RootDelete_ExtrinsicArgs = {
	where: Archive_Extrinsic_Bool_Exp;
};

export type Archivemutation_RootDelete_Extrinsic_By_PkArgs = {
	id: Scalars["archive_bpchar"];
};

export type Archivemutation_RootDelete_Frontier_Ethereum_TransactionArgs = {
	where: Archive_Frontier_Ethereum_Transaction_Bool_Exp;
};

export type Archivemutation_RootDelete_Frontier_Ethereum_Transaction_By_PkArgs =
	{
		call_id: Scalars["String"];
	};

export type Archivemutation_RootDelete_Frontier_Evm_LogArgs = {
	where: Archive_Frontier_Evm_Log_Bool_Exp;
};

export type Archivemutation_RootDelete_Frontier_Evm_Log_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivemutation_RootDelete_Gear_Message_EnqueuedArgs = {
	where: Archive_Gear_Message_Enqueued_Bool_Exp;
};

export type Archivemutation_RootDelete_Gear_Message_Enqueued_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivemutation_RootDelete_Gear_User_Message_SentArgs = {
	where: Archive_Gear_User_Message_Sent_Bool_Exp;
};

export type Archivemutation_RootDelete_Gear_User_Message_Sent_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivemutation_RootDelete_MetadataArgs = {
	where: Archive_Metadata_Bool_Exp;
};

export type Archivemutation_RootDelete_Metadata_By_PkArgs = {
	id: Scalars["String"];
};

export type Archivemutation_RootDelete_MigrationsArgs = {
	where: Archive_Migrations_Bool_Exp;
};

export type Archivemutation_RootDelete_Migrations_By_PkArgs = {
	id: Scalars["Int"];
};

export type Archivemutation_RootDelete_WarningArgs = {
	where: Archive_Warning_Bool_Exp;
};

export type Archivemutation_RootInsert_BlockArgs = {
	objects: Array<Archive_Block_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Block_On_Conflict>;
};

export type Archivemutation_RootInsert_Block_OneArgs = {
	object: Archive_Block_Insert_Input;
	on_conflict?: InputMaybe<Archive_Block_On_Conflict>;
};

export type Archivemutation_RootInsert_CallArgs = {
	objects: Array<Archive_Call_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Call_On_Conflict>;
};

export type Archivemutation_RootInsert_Call_OneArgs = {
	object: Archive_Call_Insert_Input;
	on_conflict?: InputMaybe<Archive_Call_On_Conflict>;
};

export type Archivemutation_RootInsert_Contracts_Contract_EmittedArgs = {
	objects: Array<Archive_Contracts_Contract_Emitted_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Contracts_Contract_Emitted_On_Conflict>;
};

export type Archivemutation_RootInsert_Contracts_Contract_Emitted_OneArgs = {
	object: Archive_Contracts_Contract_Emitted_Insert_Input;
	on_conflict?: InputMaybe<Archive_Contracts_Contract_Emitted_On_Conflict>;
};

export type Archivemutation_RootInsert_EventArgs = {
	objects: Array<Archive_Event_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Event_On_Conflict>;
};

export type Archivemutation_RootInsert_Event_OneArgs = {
	object: Archive_Event_Insert_Input;
	on_conflict?: InputMaybe<Archive_Event_On_Conflict>;
};

export type Archivemutation_RootInsert_ExtrinsicArgs = {
	objects: Array<Archive_Extrinsic_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Extrinsic_On_Conflict>;
};

export type Archivemutation_RootInsert_Extrinsic_OneArgs = {
	object: Archive_Extrinsic_Insert_Input;
	on_conflict?: InputMaybe<Archive_Extrinsic_On_Conflict>;
};

export type Archivemutation_RootInsert_Frontier_Ethereum_TransactionArgs = {
	objects: Array<Archive_Frontier_Ethereum_Transaction_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Frontier_Ethereum_Transaction_On_Conflict>;
};

export type Archivemutation_RootInsert_Frontier_Ethereum_Transaction_OneArgs = {
	object: Archive_Frontier_Ethereum_Transaction_Insert_Input;
	on_conflict?: InputMaybe<Archive_Frontier_Ethereum_Transaction_On_Conflict>;
};

export type Archivemutation_RootInsert_Frontier_Evm_LogArgs = {
	objects: Array<Archive_Frontier_Evm_Log_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Frontier_Evm_Log_On_Conflict>;
};

export type Archivemutation_RootInsert_Frontier_Evm_Log_OneArgs = {
	object: Archive_Frontier_Evm_Log_Insert_Input;
	on_conflict?: InputMaybe<Archive_Frontier_Evm_Log_On_Conflict>;
};

export type Archivemutation_RootInsert_Gear_Message_EnqueuedArgs = {
	objects: Array<Archive_Gear_Message_Enqueued_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Gear_Message_Enqueued_On_Conflict>;
};

export type Archivemutation_RootInsert_Gear_Message_Enqueued_OneArgs = {
	object: Archive_Gear_Message_Enqueued_Insert_Input;
	on_conflict?: InputMaybe<Archive_Gear_Message_Enqueued_On_Conflict>;
};

export type Archivemutation_RootInsert_Gear_User_Message_SentArgs = {
	objects: Array<Archive_Gear_User_Message_Sent_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Gear_User_Message_Sent_On_Conflict>;
};

export type Archivemutation_RootInsert_Gear_User_Message_Sent_OneArgs = {
	object: Archive_Gear_User_Message_Sent_Insert_Input;
	on_conflict?: InputMaybe<Archive_Gear_User_Message_Sent_On_Conflict>;
};

export type Archivemutation_RootInsert_MetadataArgs = {
	objects: Array<Archive_Metadata_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Metadata_On_Conflict>;
};

export type Archivemutation_RootInsert_Metadata_OneArgs = {
	object: Archive_Metadata_Insert_Input;
	on_conflict?: InputMaybe<Archive_Metadata_On_Conflict>;
};

export type Archivemutation_RootInsert_MigrationsArgs = {
	objects: Array<Archive_Migrations_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Migrations_On_Conflict>;
};

export type Archivemutation_RootInsert_Migrations_OneArgs = {
	object: Archive_Migrations_Insert_Input;
	on_conflict?: InputMaybe<Archive_Migrations_On_Conflict>;
};

export type Archivemutation_RootInsert_WarningArgs = {
	objects: Array<Archive_Warning_Insert_Input>;
};

export type Archivemutation_RootInsert_Warning_OneArgs = {
	object: Archive_Warning_Insert_Input;
};

export type Archivemutation_RootUpdate_BlockArgs = {
	_inc?: InputMaybe<Archive_Block_Inc_Input>;
	_set?: InputMaybe<Archive_Block_Set_Input>;
	where: Archive_Block_Bool_Exp;
};

export type Archivemutation_RootUpdate_Block_By_PkArgs = {
	_inc?: InputMaybe<Archive_Block_Inc_Input>;
	_set?: InputMaybe<Archive_Block_Set_Input>;
	pk_columns: Archive_Block_Pk_Columns_Input;
};

export type Archivemutation_RootUpdate_Block_ManyArgs = {
	updates: Array<Archive_Block_Updates>;
};

export type Archivemutation_RootUpdate_CallArgs = {
	_append?: InputMaybe<Archive_Call_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Call_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Call_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Call_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Call_Inc_Input>;
	_prepend?: InputMaybe<Archive_Call_Prepend_Input>;
	_set?: InputMaybe<Archive_Call_Set_Input>;
	where: Archive_Call_Bool_Exp;
};

export type Archivemutation_RootUpdate_Call_By_PkArgs = {
	_append?: InputMaybe<Archive_Call_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Call_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Call_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Call_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Call_Inc_Input>;
	_prepend?: InputMaybe<Archive_Call_Prepend_Input>;
	_set?: InputMaybe<Archive_Call_Set_Input>;
	pk_columns: Archive_Call_Pk_Columns_Input;
};

export type Archivemutation_RootUpdate_Call_ManyArgs = {
	updates: Array<Archive_Call_Updates>;
};

export type Archivemutation_RootUpdate_Contracts_Contract_EmittedArgs = {
	_set?: InputMaybe<Archive_Contracts_Contract_Emitted_Set_Input>;
	where: Archive_Contracts_Contract_Emitted_Bool_Exp;
};

export type Archivemutation_RootUpdate_Contracts_Contract_Emitted_By_PkArgs = {
	_set?: InputMaybe<Archive_Contracts_Contract_Emitted_Set_Input>;
	pk_columns: Archive_Contracts_Contract_Emitted_Pk_Columns_Input;
};

export type Archivemutation_RootUpdate_Contracts_Contract_Emitted_ManyArgs = {
	updates: Array<Archive_Contracts_Contract_Emitted_Updates>;
};

export type Archivemutation_RootUpdate_EventArgs = {
	_append?: InputMaybe<Archive_Event_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Event_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Event_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Event_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Event_Inc_Input>;
	_prepend?: InputMaybe<Archive_Event_Prepend_Input>;
	_set?: InputMaybe<Archive_Event_Set_Input>;
	where: Archive_Event_Bool_Exp;
};

export type Archivemutation_RootUpdate_Event_By_PkArgs = {
	_append?: InputMaybe<Archive_Event_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Event_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Event_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Event_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Event_Inc_Input>;
	_prepend?: InputMaybe<Archive_Event_Prepend_Input>;
	_set?: InputMaybe<Archive_Event_Set_Input>;
	pk_columns: Archive_Event_Pk_Columns_Input;
};

export type Archivemutation_RootUpdate_Event_ManyArgs = {
	updates: Array<Archive_Event_Updates>;
};

export type Archivemutation_RootUpdate_ExtrinsicArgs = {
	_append?: InputMaybe<Archive_Extrinsic_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Extrinsic_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Extrinsic_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Extrinsic_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Extrinsic_Inc_Input>;
	_prepend?: InputMaybe<Archive_Extrinsic_Prepend_Input>;
	_set?: InputMaybe<Archive_Extrinsic_Set_Input>;
	where: Archive_Extrinsic_Bool_Exp;
};

export type Archivemutation_RootUpdate_Extrinsic_By_PkArgs = {
	_append?: InputMaybe<Archive_Extrinsic_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Extrinsic_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Extrinsic_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Extrinsic_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Extrinsic_Inc_Input>;
	_prepend?: InputMaybe<Archive_Extrinsic_Prepend_Input>;
	_set?: InputMaybe<Archive_Extrinsic_Set_Input>;
	pk_columns: Archive_Extrinsic_Pk_Columns_Input;
};

export type Archivemutation_RootUpdate_Extrinsic_ManyArgs = {
	updates: Array<Archive_Extrinsic_Updates>;
};

export type Archivemutation_RootUpdate_Frontier_Ethereum_TransactionArgs = {
	_set?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Set_Input>;
	where: Archive_Frontier_Ethereum_Transaction_Bool_Exp;
};

export type Archivemutation_RootUpdate_Frontier_Ethereum_Transaction_By_PkArgs =
	{
		_set?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Set_Input>;
		pk_columns: Archive_Frontier_Ethereum_Transaction_Pk_Columns_Input;
	};

export type Archivemutation_RootUpdate_Frontier_Ethereum_Transaction_ManyArgs =
	{
		updates: Array<Archive_Frontier_Ethereum_Transaction_Updates>;
	};

export type Archivemutation_RootUpdate_Frontier_Evm_LogArgs = {
	_set?: InputMaybe<Archive_Frontier_Evm_Log_Set_Input>;
	where: Archive_Frontier_Evm_Log_Bool_Exp;
};

export type Archivemutation_RootUpdate_Frontier_Evm_Log_By_PkArgs = {
	_set?: InputMaybe<Archive_Frontier_Evm_Log_Set_Input>;
	pk_columns: Archive_Frontier_Evm_Log_Pk_Columns_Input;
};

export type Archivemutation_RootUpdate_Frontier_Evm_Log_ManyArgs = {
	updates: Array<Archive_Frontier_Evm_Log_Updates>;
};

export type Archivemutation_RootUpdate_Gear_Message_EnqueuedArgs = {
	_set?: InputMaybe<Archive_Gear_Message_Enqueued_Set_Input>;
	where: Archive_Gear_Message_Enqueued_Bool_Exp;
};

export type Archivemutation_RootUpdate_Gear_Message_Enqueued_By_PkArgs = {
	_set?: InputMaybe<Archive_Gear_Message_Enqueued_Set_Input>;
	pk_columns: Archive_Gear_Message_Enqueued_Pk_Columns_Input;
};

export type Archivemutation_RootUpdate_Gear_Message_Enqueued_ManyArgs = {
	updates: Array<Archive_Gear_Message_Enqueued_Updates>;
};

export type Archivemutation_RootUpdate_Gear_User_Message_SentArgs = {
	_set?: InputMaybe<Archive_Gear_User_Message_Sent_Set_Input>;
	where: Archive_Gear_User_Message_Sent_Bool_Exp;
};

export type Archivemutation_RootUpdate_Gear_User_Message_Sent_By_PkArgs = {
	_set?: InputMaybe<Archive_Gear_User_Message_Sent_Set_Input>;
	pk_columns: Archive_Gear_User_Message_Sent_Pk_Columns_Input;
};

export type Archivemutation_RootUpdate_Gear_User_Message_Sent_ManyArgs = {
	updates: Array<Archive_Gear_User_Message_Sent_Updates>;
};

export type Archivemutation_RootUpdate_MetadataArgs = {
	_inc?: InputMaybe<Archive_Metadata_Inc_Input>;
	_set?: InputMaybe<Archive_Metadata_Set_Input>;
	where: Archive_Metadata_Bool_Exp;
};

export type Archivemutation_RootUpdate_Metadata_By_PkArgs = {
	_inc?: InputMaybe<Archive_Metadata_Inc_Input>;
	_set?: InputMaybe<Archive_Metadata_Set_Input>;
	pk_columns: Archive_Metadata_Pk_Columns_Input;
};

export type Archivemutation_RootUpdate_Metadata_ManyArgs = {
	updates: Array<Archive_Metadata_Updates>;
};

export type Archivemutation_RootUpdate_MigrationsArgs = {
	_inc?: InputMaybe<Archive_Migrations_Inc_Input>;
	_set?: InputMaybe<Archive_Migrations_Set_Input>;
	where: Archive_Migrations_Bool_Exp;
};

export type Archivemutation_RootUpdate_Migrations_By_PkArgs = {
	_inc?: InputMaybe<Archive_Migrations_Inc_Input>;
	_set?: InputMaybe<Archive_Migrations_Set_Input>;
	pk_columns: Archive_Migrations_Pk_Columns_Input;
};

export type Archivemutation_RootUpdate_Migrations_ManyArgs = {
	updates: Array<Archive_Migrations_Updates>;
};

export type Archivemutation_RootUpdate_WarningArgs = {
	_set?: InputMaybe<Archive_Warning_Set_Input>;
	where: Archive_Warning_Bool_Exp;
};

export type Archivemutation_RootUpdate_Warning_ManyArgs = {
	updates: Array<Archive_Warning_Updates>;
};

export type Archivequery_Root = {
	__typename?: "archivequery_root";
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
	/** fetch data from the table: "gear_message_enqueued" */
	gear_message_enqueued: Array<Archive_Gear_Message_Enqueued>;
	/** fetch aggregated fields from the table: "gear_message_enqueued" */
	gear_message_enqueued_aggregate: Archive_Gear_Message_Enqueued_Aggregate;
	/** fetch data from the table: "gear_message_enqueued" using primary key columns */
	gear_message_enqueued_by_pk?: Maybe<Archive_Gear_Message_Enqueued>;
	/** fetch data from the table: "gear_user_message_sent" */
	gear_user_message_sent: Array<Archive_Gear_User_Message_Sent>;
	/** fetch aggregated fields from the table: "gear_user_message_sent" */
	gear_user_message_sent_aggregate: Archive_Gear_User_Message_Sent_Aggregate;
	/** fetch data from the table: "gear_user_message_sent" using primary key columns */
	gear_user_message_sent_by_pk?: Maybe<Archive_Gear_User_Message_Sent>;
	/** fetch data from the table: "metadata" */
	metadata: Array<Archive_Metadata>;
	/** fetch aggregated fields from the table: "metadata" */
	metadata_aggregate: Archive_Metadata_Aggregate;
	/** fetch data from the table: "metadata" using primary key columns */
	metadata_by_pk?: Maybe<Archive_Metadata>;
	/** fetch data from the table: "migrations" */
	migrations: Array<Archive_Migrations>;
	/** fetch aggregated fields from the table: "migrations" */
	migrations_aggregate: Archive_Migrations_Aggregate;
	/** fetch data from the table: "migrations" using primary key columns */
	migrations_by_pk?: Maybe<Archive_Migrations>;
	/** fetch data from the table: "warning" */
	warning: Array<Archive_Warning>;
	/** fetch aggregated fields from the table: "warning" */
	warning_aggregate: Archive_Warning_Aggregate;
};

export type Archivequery_RootBlockArgs = {
	distinct_on?: InputMaybe<Array<Archive_Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Block_Order_By>>;
	where?: InputMaybe<Archive_Block_Bool_Exp>;
};

export type Archivequery_RootBlock_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Block_Order_By>>;
	where?: InputMaybe<Archive_Block_Bool_Exp>;
};

export type Archivequery_RootBlock_By_PkArgs = {
	id: Scalars["archive_bpchar"];
};

export type Archivequery_RootCallArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

export type Archivequery_RootCall_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

export type Archivequery_RootCall_By_PkArgs = {
	id: Scalars["String"];
};

export type Archivequery_RootContracts_Contract_EmittedArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Contracts_Contract_Emitted_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Order_By>>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

export type Archivequery_RootContracts_Contract_Emitted_AggregateArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Contracts_Contract_Emitted_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Order_By>>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

export type Archivequery_RootContracts_Contract_Emitted_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivequery_RootEventArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

export type Archivequery_RootEvent_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

export type Archivequery_RootEvent_By_PkArgs = {
	id: Scalars["archive_bpchar"];
};

export type Archivequery_RootExtrinsicArgs = {
	distinct_on?: InputMaybe<Array<Archive_Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Extrinsic_Order_By>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

export type Archivequery_RootExtrinsic_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Extrinsic_Order_By>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

export type Archivequery_RootExtrinsic_By_PkArgs = {
	id: Scalars["archive_bpchar"];
};

export type Archivequery_RootFrontier_Ethereum_TransactionArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Frontier_Ethereum_Transaction_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
};

export type Archivequery_RootFrontier_Ethereum_Transaction_AggregateArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Frontier_Ethereum_Transaction_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
};

export type Archivequery_RootFrontier_Ethereum_Transaction_By_PkArgs = {
	call_id: Scalars["String"];
};

export type Archivequery_RootFrontier_Evm_LogArgs = {
	distinct_on?: InputMaybe<Array<Archive_Frontier_Evm_Log_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Evm_Log_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

export type Archivequery_RootFrontier_Evm_Log_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Frontier_Evm_Log_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Evm_Log_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

export type Archivequery_RootFrontier_Evm_Log_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivequery_RootGear_Message_EnqueuedArgs = {
	distinct_on?: InputMaybe<Array<Archive_Gear_Message_Enqueued_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Gear_Message_Enqueued_Order_By>>;
	where?: InputMaybe<Archive_Gear_Message_Enqueued_Bool_Exp>;
};

export type Archivequery_RootGear_Message_Enqueued_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Gear_Message_Enqueued_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Gear_Message_Enqueued_Order_By>>;
	where?: InputMaybe<Archive_Gear_Message_Enqueued_Bool_Exp>;
};

export type Archivequery_RootGear_Message_Enqueued_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivequery_RootGear_User_Message_SentArgs = {
	distinct_on?: InputMaybe<Array<Archive_Gear_User_Message_Sent_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Gear_User_Message_Sent_Order_By>>;
	where?: InputMaybe<Archive_Gear_User_Message_Sent_Bool_Exp>;
};

export type Archivequery_RootGear_User_Message_Sent_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Gear_User_Message_Sent_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Gear_User_Message_Sent_Order_By>>;
	where?: InputMaybe<Archive_Gear_User_Message_Sent_Bool_Exp>;
};

export type Archivequery_RootGear_User_Message_Sent_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivequery_RootMetadataArgs = {
	distinct_on?: InputMaybe<Array<Archive_Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Metadata_Order_By>>;
	where?: InputMaybe<Archive_Metadata_Bool_Exp>;
};

export type Archivequery_RootMetadata_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Metadata_Order_By>>;
	where?: InputMaybe<Archive_Metadata_Bool_Exp>;
};

export type Archivequery_RootMetadata_By_PkArgs = {
	id: Scalars["String"];
};

export type Archivequery_RootMigrationsArgs = {
	distinct_on?: InputMaybe<Array<Archive_Migrations_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Migrations_Order_By>>;
	where?: InputMaybe<Archive_Migrations_Bool_Exp>;
};

export type Archivequery_RootMigrations_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Migrations_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Migrations_Order_By>>;
	where?: InputMaybe<Archive_Migrations_Bool_Exp>;
};

export type Archivequery_RootMigrations_By_PkArgs = {
	id: Scalars["Int"];
};

export type Archivequery_RootWarningArgs = {
	distinct_on?: InputMaybe<Array<Archive_Warning_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Warning_Order_By>>;
	where?: InputMaybe<Archive_Warning_Bool_Exp>;
};

export type Archivequery_RootWarning_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Warning_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Warning_Order_By>>;
	where?: InputMaybe<Archive_Warning_Bool_Exp>;
};

export type Archivesubscription_Root = {
	__typename?: "archivesubscription_root";
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
	/** fetch data from the table: "gear_message_enqueued" */
	gear_message_enqueued: Array<Archive_Gear_Message_Enqueued>;
	/** fetch aggregated fields from the table: "gear_message_enqueued" */
	gear_message_enqueued_aggregate: Archive_Gear_Message_Enqueued_Aggregate;
	/** fetch data from the table: "gear_message_enqueued" using primary key columns */
	gear_message_enqueued_by_pk?: Maybe<Archive_Gear_Message_Enqueued>;
	/** fetch data from the table in a streaming manner : "gear_message_enqueued" */
	gear_message_enqueued_stream: Array<Archive_Gear_Message_Enqueued>;
	/** fetch data from the table: "gear_user_message_sent" */
	gear_user_message_sent: Array<Archive_Gear_User_Message_Sent>;
	/** fetch aggregated fields from the table: "gear_user_message_sent" */
	gear_user_message_sent_aggregate: Archive_Gear_User_Message_Sent_Aggregate;
	/** fetch data from the table: "gear_user_message_sent" using primary key columns */
	gear_user_message_sent_by_pk?: Maybe<Archive_Gear_User_Message_Sent>;
	/** fetch data from the table in a streaming manner : "gear_user_message_sent" */
	gear_user_message_sent_stream: Array<Archive_Gear_User_Message_Sent>;
	/** fetch data from the table: "metadata" */
	metadata: Array<Archive_Metadata>;
	/** fetch aggregated fields from the table: "metadata" */
	metadata_aggregate: Archive_Metadata_Aggregate;
	/** fetch data from the table: "metadata" using primary key columns */
	metadata_by_pk?: Maybe<Archive_Metadata>;
	/** fetch data from the table in a streaming manner : "metadata" */
	metadata_stream: Array<Archive_Metadata>;
	/** fetch data from the table: "migrations" */
	migrations: Array<Archive_Migrations>;
	/** fetch aggregated fields from the table: "migrations" */
	migrations_aggregate: Archive_Migrations_Aggregate;
	/** fetch data from the table: "migrations" using primary key columns */
	migrations_by_pk?: Maybe<Archive_Migrations>;
	/** fetch data from the table in a streaming manner : "migrations" */
	migrations_stream: Array<Archive_Migrations>;
	/** fetch data from the table: "warning" */
	warning: Array<Archive_Warning>;
	/** fetch aggregated fields from the table: "warning" */
	warning_aggregate: Archive_Warning_Aggregate;
	/** fetch data from the table in a streaming manner : "warning" */
	warning_stream: Array<Archive_Warning>;
};

export type Archivesubscription_RootBlockArgs = {
	distinct_on?: InputMaybe<Array<Archive_Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Block_Order_By>>;
	where?: InputMaybe<Archive_Block_Bool_Exp>;
};

export type Archivesubscription_RootBlock_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Block_Order_By>>;
	where?: InputMaybe<Archive_Block_Bool_Exp>;
};

export type Archivesubscription_RootBlock_By_PkArgs = {
	id: Scalars["archive_bpchar"];
};

export type Archivesubscription_RootBlock_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Block_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Block_Bool_Exp>;
};

export type Archivesubscription_RootCallArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

export type Archivesubscription_RootCall_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Call_Order_By>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

export type Archivesubscription_RootCall_By_PkArgs = {
	id: Scalars["String"];
};

export type Archivesubscription_RootCall_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Call_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Call_Bool_Exp>;
};

export type Archivesubscription_RootContracts_Contract_EmittedArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Contracts_Contract_Emitted_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Order_By>>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

export type Archivesubscription_RootContracts_Contract_Emitted_AggregateArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Contracts_Contract_Emitted_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Contracts_Contract_Emitted_Order_By>>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

export type Archivesubscription_RootContracts_Contract_Emitted_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivesubscription_RootContracts_Contract_Emitted_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<
		InputMaybe<Archive_Contracts_Contract_Emitted_Stream_Cursor_Input>
	>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

export type Archivesubscription_RootEventArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

export type Archivesubscription_RootEvent_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Event_Order_By>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

export type Archivesubscription_RootEvent_By_PkArgs = {
	id: Scalars["archive_bpchar"];
};

export type Archivesubscription_RootEvent_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Event_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Event_Bool_Exp>;
};

export type Archivesubscription_RootExtrinsicArgs = {
	distinct_on?: InputMaybe<Array<Archive_Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Extrinsic_Order_By>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

export type Archivesubscription_RootExtrinsic_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Extrinsic_Order_By>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

export type Archivesubscription_RootExtrinsic_By_PkArgs = {
	id: Scalars["archive_bpchar"];
};

export type Archivesubscription_RootExtrinsic_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Extrinsic_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Extrinsic_Bool_Exp>;
};

export type Archivesubscription_RootFrontier_Ethereum_TransactionArgs = {
	distinct_on?: InputMaybe<
		Array<Archive_Frontier_Ethereum_Transaction_Select_Column>
	>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Ethereum_Transaction_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
};

export type Archivesubscription_RootFrontier_Ethereum_Transaction_AggregateArgs =
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

export type Archivesubscription_RootFrontier_Ethereum_Transaction_By_PkArgs = {
	call_id: Scalars["String"];
};

export type Archivesubscription_RootFrontier_Ethereum_Transaction_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<
		InputMaybe<Archive_Frontier_Ethereum_Transaction_Stream_Cursor_Input>
	>;
	where?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Bool_Exp>;
};

export type Archivesubscription_RootFrontier_Evm_LogArgs = {
	distinct_on?: InputMaybe<Array<Archive_Frontier_Evm_Log_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Evm_Log_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

export type Archivesubscription_RootFrontier_Evm_Log_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Frontier_Evm_Log_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Frontier_Evm_Log_Order_By>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

export type Archivesubscription_RootFrontier_Evm_Log_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivesubscription_RootFrontier_Evm_Log_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Frontier_Evm_Log_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
};

export type Archivesubscription_RootGear_Message_EnqueuedArgs = {
	distinct_on?: InputMaybe<Array<Archive_Gear_Message_Enqueued_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Gear_Message_Enqueued_Order_By>>;
	where?: InputMaybe<Archive_Gear_Message_Enqueued_Bool_Exp>;
};

export type Archivesubscription_RootGear_Message_Enqueued_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Gear_Message_Enqueued_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Gear_Message_Enqueued_Order_By>>;
	where?: InputMaybe<Archive_Gear_Message_Enqueued_Bool_Exp>;
};

export type Archivesubscription_RootGear_Message_Enqueued_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivesubscription_RootGear_Message_Enqueued_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Gear_Message_Enqueued_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Gear_Message_Enqueued_Bool_Exp>;
};

export type Archivesubscription_RootGear_User_Message_SentArgs = {
	distinct_on?: InputMaybe<Array<Archive_Gear_User_Message_Sent_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Gear_User_Message_Sent_Order_By>>;
	where?: InputMaybe<Archive_Gear_User_Message_Sent_Bool_Exp>;
};

export type Archivesubscription_RootGear_User_Message_Sent_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Gear_User_Message_Sent_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Gear_User_Message_Sent_Order_By>>;
	where?: InputMaybe<Archive_Gear_User_Message_Sent_Bool_Exp>;
};

export type Archivesubscription_RootGear_User_Message_Sent_By_PkArgs = {
	event_id: Scalars["archive_bpchar"];
};

export type Archivesubscription_RootGear_User_Message_Sent_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Gear_User_Message_Sent_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Gear_User_Message_Sent_Bool_Exp>;
};

export type Archivesubscription_RootMetadataArgs = {
	distinct_on?: InputMaybe<Array<Archive_Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Metadata_Order_By>>;
	where?: InputMaybe<Archive_Metadata_Bool_Exp>;
};

export type Archivesubscription_RootMetadata_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Metadata_Order_By>>;
	where?: InputMaybe<Archive_Metadata_Bool_Exp>;
};

export type Archivesubscription_RootMetadata_By_PkArgs = {
	id: Scalars["String"];
};

export type Archivesubscription_RootMetadata_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Metadata_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Metadata_Bool_Exp>;
};

export type Archivesubscription_RootMigrationsArgs = {
	distinct_on?: InputMaybe<Array<Archive_Migrations_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Migrations_Order_By>>;
	where?: InputMaybe<Archive_Migrations_Bool_Exp>;
};

export type Archivesubscription_RootMigrations_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Migrations_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Migrations_Order_By>>;
	where?: InputMaybe<Archive_Migrations_Bool_Exp>;
};

export type Archivesubscription_RootMigrations_By_PkArgs = {
	id: Scalars["Int"];
};

export type Archivesubscription_RootMigrations_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Migrations_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Migrations_Bool_Exp>;
};

export type Archivesubscription_RootWarningArgs = {
	distinct_on?: InputMaybe<Array<Archive_Warning_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Warning_Order_By>>;
	where?: InputMaybe<Archive_Warning_Bool_Exp>;
};

export type Archivesubscription_RootWarning_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Archive_Warning_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Archive_Warning_Order_By>>;
	where?: InputMaybe<Archive_Warning_Bool_Exp>;
};

export type Archivesubscription_RootWarning_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Archive_Warning_Stream_Cursor_Input>>;
	where?: InputMaybe<Archive_Warning_Bool_Exp>;
};

export type BalancesQuery = {
	__typename?: "balancesQuery";
	accountById?: Maybe<Balances_Account>;
	accountByUniqueInput?: Maybe<Balances_Account>;
	accounts: Array<Balances_Account>;
	accountsConnection: Tokens_AccountsConnection;
	chainInfo: Balances_ChainInfo;
	chainStateById?: Maybe<Balances_ChainState>;
	chainStateByUniqueInput?: Maybe<Balances_ChainState>;
	chainStates: Array<Balances_ChainState>;
	chainStatesConnection: Balances_ChainStatesConnection;
	currentChainState: Balances_ChainStateObject;
	squidStatus?: Maybe<Balances_SquidStatus>;
};

export type BalancesQueryAccountByIdArgs = {
	id: Scalars["String"];
};

export type BalancesQueryAccountByUniqueInputArgs = {
	where: Balances_WhereIdInput;
};

export type BalancesQueryAccountsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Balances_AccountOrderByInput>>;
	where?: InputMaybe<Balances_AccountWhereInput>;
};

export type BalancesQueryAccountsConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Balances_AccountOrderByInput>;
	where?: InputMaybe<Balances_AccountWhereInput>;
};

export type BalancesQueryChainStateByIdArgs = {
	id: Scalars["String"];
};

export type BalancesQueryChainStateByUniqueInputArgs = {
	where: Balances_WhereIdInput;
};

export type BalancesQueryChainStatesArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Balances_ChainStateOrderByInput>>;
	where?: InputMaybe<Balances_ChainStateWhereInput>;
};

export type BalancesQueryChainStatesConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Balances_ChainStateOrderByInput>;
	where?: InputMaybe<Balances_ChainStateWhereInput>;
};

export type BalancesSubscription = {
	__typename?: "balancesSubscription";
	accountById?: Maybe<Balances_Account>;
	accounts: Array<Balances_Account>;
	chainStateById?: Maybe<Balances_ChainState>;
	chainStates: Array<Balances_ChainState>;
};

export type BalancesSubscriptionAccountByIdArgs = {
	id: Scalars["String"];
};

export type BalancesSubscriptionAccountsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Balances_AccountOrderByInput>>;
	where?: InputMaybe<Balances_AccountWhereInput>;
};

export type BalancesSubscriptionChainStateByIdArgs = {
	id: Scalars["String"];
};

export type BalancesSubscriptionChainStatesArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Balances_ChainStateOrderByInput>>;
	where?: InputMaybe<Balances_ChainStateWhereInput>;
};

export type Balances_Account = {
	__typename?: "balances_Account";
	free: Scalars["balances_BigInt"];
	id: Scalars["String"];
	reserved: Scalars["balances_BigInt"];
	total: Scalars["balances_BigInt"];
	updatedAt?: Maybe<Scalars["Int"]>;
};

export enum Balances_AccountOrderByInput {
	FreeAsc = "free_ASC",
	FreeDesc = "free_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	ReservedAsc = "reserved_ASC",
	ReservedDesc = "reserved_DESC",
	TotalAsc = "total_ASC",
	TotalDesc = "total_DESC",
	UpdatedAtAsc = "updatedAt_ASC",
	UpdatedAtDesc = "updatedAt_DESC",
}

export type Balances_AccountWhereInput = {
	AND?: InputMaybe<Array<Balances_AccountWhereInput>>;
	OR?: InputMaybe<Array<Balances_AccountWhereInput>>;
	free_eq?: InputMaybe<Scalars["balances_BigInt"]>;
	free_gt?: InputMaybe<Scalars["balances_BigInt"]>;
	free_gte?: InputMaybe<Scalars["balances_BigInt"]>;
	free_in?: InputMaybe<Array<Scalars["balances_BigInt"]>>;
	free_isNull?: InputMaybe<Scalars["Boolean"]>;
	free_lt?: InputMaybe<Scalars["balances_BigInt"]>;
	free_lte?: InputMaybe<Scalars["balances_BigInt"]>;
	free_not_eq?: InputMaybe<Scalars["balances_BigInt"]>;
	free_not_in?: InputMaybe<Array<Scalars["balances_BigInt"]>>;
	id_contains?: InputMaybe<Scalars["String"]>;
	id_containsInsensitive?: InputMaybe<Scalars["String"]>;
	id_endsWith?: InputMaybe<Scalars["String"]>;
	id_eq?: InputMaybe<Scalars["String"]>;
	id_gt?: InputMaybe<Scalars["String"]>;
	id_gte?: InputMaybe<Scalars["String"]>;
	id_in?: InputMaybe<Array<Scalars["String"]>>;
	id_isNull?: InputMaybe<Scalars["Boolean"]>;
	id_lt?: InputMaybe<Scalars["String"]>;
	id_lte?: InputMaybe<Scalars["String"]>;
	id_not_contains?: InputMaybe<Scalars["String"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	id_not_endsWith?: InputMaybe<Scalars["String"]>;
	id_not_eq?: InputMaybe<Scalars["String"]>;
	id_not_in?: InputMaybe<Array<Scalars["String"]>>;
	id_not_startsWith?: InputMaybe<Scalars["String"]>;
	id_startsWith?: InputMaybe<Scalars["String"]>;
	reserved_eq?: InputMaybe<Scalars["balances_BigInt"]>;
	reserved_gt?: InputMaybe<Scalars["balances_BigInt"]>;
	reserved_gte?: InputMaybe<Scalars["balances_BigInt"]>;
	reserved_in?: InputMaybe<Array<Scalars["balances_BigInt"]>>;
	reserved_isNull?: InputMaybe<Scalars["Boolean"]>;
	reserved_lt?: InputMaybe<Scalars["balances_BigInt"]>;
	reserved_lte?: InputMaybe<Scalars["balances_BigInt"]>;
	reserved_not_eq?: InputMaybe<Scalars["balances_BigInt"]>;
	reserved_not_in?: InputMaybe<Array<Scalars["balances_BigInt"]>>;
	total_eq?: InputMaybe<Scalars["balances_BigInt"]>;
	total_gt?: InputMaybe<Scalars["balances_BigInt"]>;
	total_gte?: InputMaybe<Scalars["balances_BigInt"]>;
	total_in?: InputMaybe<Array<Scalars["balances_BigInt"]>>;
	total_isNull?: InputMaybe<Scalars["Boolean"]>;
	total_lt?: InputMaybe<Scalars["balances_BigInt"]>;
	total_lte?: InputMaybe<Scalars["balances_BigInt"]>;
	total_not_eq?: InputMaybe<Scalars["balances_BigInt"]>;
	total_not_in?: InputMaybe<Array<Scalars["balances_BigInt"]>>;
	updatedAt_eq?: InputMaybe<Scalars["Int"]>;
	updatedAt_gt?: InputMaybe<Scalars["Int"]>;
	updatedAt_gte?: InputMaybe<Scalars["Int"]>;
	updatedAt_in?: InputMaybe<Array<Scalars["Int"]>>;
	updatedAt_isNull?: InputMaybe<Scalars["Boolean"]>;
	updatedAt_lt?: InputMaybe<Scalars["Int"]>;
	updatedAt_lte?: InputMaybe<Scalars["Int"]>;
	updatedAt_not_eq?: InputMaybe<Scalars["Int"]>;
	updatedAt_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export type Balances_ChainInfo = {
	__typename?: "balances_ChainInfo";
	displayName: Scalars["String"];
	name: Scalars["String"];
	paraId?: Maybe<Scalars["Float"]>;
	prefix?: Maybe<Scalars["Float"]>;
	relayChain?: Maybe<Scalars["String"]>;
	tokens: Array<Balances_Token>;
};

export type Balances_ChainState = {
	__typename?: "balances_ChainState";
	blockNumber: Scalars["Int"];
	councilMembers: Scalars["Int"];
	councilProposals: Scalars["Int"];
	democracyProposals: Scalars["Int"];
	id: Scalars["String"];
	timestamp: Scalars["balances_DateTime"];
	tokenBalance: Scalars["balances_BigInt"];
	tokenHolders: Scalars["Int"];
};

export type Balances_ChainStateEdge = {
	__typename?: "balances_ChainStateEdge";
	cursor: Scalars["String"];
	node: Balances_ChainState;
};

export type Balances_ChainStateObject = {
	__typename?: "balances_ChainStateObject";
	blockNumber: Scalars["Float"];
	councilMembers: Scalars["Float"];
	councilProposals: Scalars["Float"];
	democracyProposals: Scalars["Float"];
	timestamp: Scalars["balances_DateTime"];
	tokenBalance: Scalars["balances_BigInt"];
	tokenHolders: Scalars["Float"];
};

export enum Balances_ChainStateOrderByInput {
	BlockNumberAsc = "blockNumber_ASC",
	BlockNumberDesc = "blockNumber_DESC",
	CouncilMembersAsc = "councilMembers_ASC",
	CouncilMembersDesc = "councilMembers_DESC",
	CouncilProposalsAsc = "councilProposals_ASC",
	CouncilProposalsDesc = "councilProposals_DESC",
	DemocracyProposalsAsc = "democracyProposals_ASC",
	DemocracyProposalsDesc = "democracyProposals_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	TimestampAsc = "timestamp_ASC",
	TimestampDesc = "timestamp_DESC",
	TokenBalanceAsc = "tokenBalance_ASC",
	TokenBalanceDesc = "tokenBalance_DESC",
	TokenHoldersAsc = "tokenHolders_ASC",
	TokenHoldersDesc = "tokenHolders_DESC",
}

export type Balances_ChainStateWhereInput = {
	AND?: InputMaybe<Array<Balances_ChainStateWhereInput>>;
	OR?: InputMaybe<Array<Balances_ChainStateWhereInput>>;
	blockNumber_eq?: InputMaybe<Scalars["Int"]>;
	blockNumber_gt?: InputMaybe<Scalars["Int"]>;
	blockNumber_gte?: InputMaybe<Scalars["Int"]>;
	blockNumber_in?: InputMaybe<Array<Scalars["Int"]>>;
	blockNumber_isNull?: InputMaybe<Scalars["Boolean"]>;
	blockNumber_lt?: InputMaybe<Scalars["Int"]>;
	blockNumber_lte?: InputMaybe<Scalars["Int"]>;
	blockNumber_not_eq?: InputMaybe<Scalars["Int"]>;
	blockNumber_not_in?: InputMaybe<Array<Scalars["Int"]>>;
	councilMembers_eq?: InputMaybe<Scalars["Int"]>;
	councilMembers_gt?: InputMaybe<Scalars["Int"]>;
	councilMembers_gte?: InputMaybe<Scalars["Int"]>;
	councilMembers_in?: InputMaybe<Array<Scalars["Int"]>>;
	councilMembers_isNull?: InputMaybe<Scalars["Boolean"]>;
	councilMembers_lt?: InputMaybe<Scalars["Int"]>;
	councilMembers_lte?: InputMaybe<Scalars["Int"]>;
	councilMembers_not_eq?: InputMaybe<Scalars["Int"]>;
	councilMembers_not_in?: InputMaybe<Array<Scalars["Int"]>>;
	councilProposals_eq?: InputMaybe<Scalars["Int"]>;
	councilProposals_gt?: InputMaybe<Scalars["Int"]>;
	councilProposals_gte?: InputMaybe<Scalars["Int"]>;
	councilProposals_in?: InputMaybe<Array<Scalars["Int"]>>;
	councilProposals_isNull?: InputMaybe<Scalars["Boolean"]>;
	councilProposals_lt?: InputMaybe<Scalars["Int"]>;
	councilProposals_lte?: InputMaybe<Scalars["Int"]>;
	councilProposals_not_eq?: InputMaybe<Scalars["Int"]>;
	councilProposals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
	democracyProposals_eq?: InputMaybe<Scalars["Int"]>;
	democracyProposals_gt?: InputMaybe<Scalars["Int"]>;
	democracyProposals_gte?: InputMaybe<Scalars["Int"]>;
	democracyProposals_in?: InputMaybe<Array<Scalars["Int"]>>;
	democracyProposals_isNull?: InputMaybe<Scalars["Boolean"]>;
	democracyProposals_lt?: InputMaybe<Scalars["Int"]>;
	democracyProposals_lte?: InputMaybe<Scalars["Int"]>;
	democracyProposals_not_eq?: InputMaybe<Scalars["Int"]>;
	democracyProposals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
	id_contains?: InputMaybe<Scalars["String"]>;
	id_containsInsensitive?: InputMaybe<Scalars["String"]>;
	id_endsWith?: InputMaybe<Scalars["String"]>;
	id_eq?: InputMaybe<Scalars["String"]>;
	id_gt?: InputMaybe<Scalars["String"]>;
	id_gte?: InputMaybe<Scalars["String"]>;
	id_in?: InputMaybe<Array<Scalars["String"]>>;
	id_isNull?: InputMaybe<Scalars["Boolean"]>;
	id_lt?: InputMaybe<Scalars["String"]>;
	id_lte?: InputMaybe<Scalars["String"]>;
	id_not_contains?: InputMaybe<Scalars["String"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	id_not_endsWith?: InputMaybe<Scalars["String"]>;
	id_not_eq?: InputMaybe<Scalars["String"]>;
	id_not_in?: InputMaybe<Array<Scalars["String"]>>;
	id_not_startsWith?: InputMaybe<Scalars["String"]>;
	id_startsWith?: InputMaybe<Scalars["String"]>;
	timestamp_eq?: InputMaybe<Scalars["balances_DateTime"]>;
	timestamp_gt?: InputMaybe<Scalars["balances_DateTime"]>;
	timestamp_gte?: InputMaybe<Scalars["balances_DateTime"]>;
	timestamp_in?: InputMaybe<Array<Scalars["balances_DateTime"]>>;
	timestamp_isNull?: InputMaybe<Scalars["Boolean"]>;
	timestamp_lt?: InputMaybe<Scalars["balances_DateTime"]>;
	timestamp_lte?: InputMaybe<Scalars["balances_DateTime"]>;
	timestamp_not_eq?: InputMaybe<Scalars["balances_DateTime"]>;
	timestamp_not_in?: InputMaybe<Array<Scalars["balances_DateTime"]>>;
	tokenBalance_eq?: InputMaybe<Scalars["balances_BigInt"]>;
	tokenBalance_gt?: InputMaybe<Scalars["balances_BigInt"]>;
	tokenBalance_gte?: InputMaybe<Scalars["balances_BigInt"]>;
	tokenBalance_in?: InputMaybe<Array<Scalars["balances_BigInt"]>>;
	tokenBalance_isNull?: InputMaybe<Scalars["Boolean"]>;
	tokenBalance_lt?: InputMaybe<Scalars["balances_BigInt"]>;
	tokenBalance_lte?: InputMaybe<Scalars["balances_BigInt"]>;
	tokenBalance_not_eq?: InputMaybe<Scalars["balances_BigInt"]>;
	tokenBalance_not_in?: InputMaybe<Array<Scalars["balances_BigInt"]>>;
	tokenHolders_eq?: InputMaybe<Scalars["Int"]>;
	tokenHolders_gt?: InputMaybe<Scalars["Int"]>;
	tokenHolders_gte?: InputMaybe<Scalars["Int"]>;
	tokenHolders_in?: InputMaybe<Array<Scalars["Int"]>>;
	tokenHolders_isNull?: InputMaybe<Scalars["Boolean"]>;
	tokenHolders_lt?: InputMaybe<Scalars["Int"]>;
	tokenHolders_lte?: InputMaybe<Scalars["Int"]>;
	tokenHolders_not_eq?: InputMaybe<Scalars["Int"]>;
	tokenHolders_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export type Balances_ChainStatesConnection = {
	__typename?: "balances_ChainStatesConnection";
	edges: Array<Balances_ChainStateEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export type Balances_SquidStatus = {
	__typename?: "balances_SquidStatus";
	/** The height of the processed part of the chain */
	height?: Maybe<Scalars["Int"]>;
};

export type Balances_Token = {
	__typename?: "balances_Token";
	decimals?: Maybe<Scalars["String"]>;
	symbol: Scalars["String"];
};

export type Balances_WhereIdInput = {
	id: Scalars["String"];
};

export type EvmQuery = {
	__typename?: "evmQuery";
	squidStatus?: Maybe<Balances_SquidStatus>;
	transactionById?: Maybe<Evm_Transaction>;
	transactionByUniqueInput?: Maybe<Evm_Transaction>;
	transactions: Array<Evm_Transaction>;
	transactionsConnection: Evm_TransactionsConnection;
};

export type EvmQueryTransactionByIdArgs = {
	id: Scalars["String"];
};

export type EvmQueryTransactionByUniqueInputArgs = {
	where: Balances_WhereIdInput;
};

export type EvmQueryTransactionsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Evm_TransactionOrderByInput>>;
	where?: InputMaybe<Evm_TransactionWhereInput>;
};

export type EvmQueryTransactionsConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Evm_TransactionOrderByInput>;
	where?: InputMaybe<Evm_TransactionWhereInput>;
};

export type EvmSubscription = {
	__typename?: "evmSubscription";
	transactionById?: Maybe<Evm_Transaction>;
	transactions: Array<Evm_Transaction>;
};

export type EvmSubscriptionTransactionByIdArgs = {
	id: Scalars["String"];
};

export type EvmSubscriptionTransactionsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Evm_TransactionOrderByInput>>;
	where?: InputMaybe<Evm_TransactionWhereInput>;
};

export type Evm_Eip1559 = {
	__typename?: "evm_EIP1559";
	gasLimit: Scalars["evm_BigInt"];
	maxFeePerGas: Scalars["evm_BigInt"];
	maxPriorityFeePerGas: Scalars["evm_BigInt"];
	value: Scalars["evm_BigInt"];
};

export type Evm_Eip2930 = {
	__typename?: "evm_EIP2930";
	gasLimit: Scalars["evm_BigInt"];
	gasPrice: Scalars["evm_BigInt"];
	value: Scalars["evm_BigInt"];
};

export type Evm_Legacy = {
	__typename?: "evm_Legacy";
	gasLimit: Scalars["evm_BigInt"];
	gasPrice: Scalars["evm_BigInt"];
	value: Scalars["evm_BigInt"];
};

export type Evm_Transaction = {
	__typename?: "evm_Transaction";
	block: Scalars["Int"];
	data?: Maybe<Evm_TransactionData>;
	from: Scalars["String"];
	id: Scalars["String"];
	input: Scalars["evm_JSON"];
	method: Scalars["String"];
	timestamp: Scalars["evm_DateTime"];
	to: Scalars["String"];
	txHash: Scalars["String"];
	type: Scalars["Int"];
};

export type Evm_TransactionData = Evm_Eip1559 | Evm_Eip2930 | Evm_Legacy;

export type Evm_TransactionDataWhereInput = {
	gasLimit_eq?: InputMaybe<Scalars["evm_BigInt"]>;
	gasLimit_gt?: InputMaybe<Scalars["evm_BigInt"]>;
	gasLimit_gte?: InputMaybe<Scalars["evm_BigInt"]>;
	gasLimit_in?: InputMaybe<Array<Scalars["evm_BigInt"]>>;
	gasLimit_isNull?: InputMaybe<Scalars["Boolean"]>;
	gasLimit_lt?: InputMaybe<Scalars["evm_BigInt"]>;
	gasLimit_lte?: InputMaybe<Scalars["evm_BigInt"]>;
	gasLimit_not_eq?: InputMaybe<Scalars["evm_BigInt"]>;
	gasLimit_not_in?: InputMaybe<Array<Scalars["evm_BigInt"]>>;
	gasPrice_eq?: InputMaybe<Scalars["evm_BigInt"]>;
	gasPrice_gt?: InputMaybe<Scalars["evm_BigInt"]>;
	gasPrice_gte?: InputMaybe<Scalars["evm_BigInt"]>;
	gasPrice_in?: InputMaybe<Array<Scalars["evm_BigInt"]>>;
	gasPrice_isNull?: InputMaybe<Scalars["Boolean"]>;
	gasPrice_lt?: InputMaybe<Scalars["evm_BigInt"]>;
	gasPrice_lte?: InputMaybe<Scalars["evm_BigInt"]>;
	gasPrice_not_eq?: InputMaybe<Scalars["evm_BigInt"]>;
	gasPrice_not_in?: InputMaybe<Array<Scalars["evm_BigInt"]>>;
	isTypeOf_contains?: InputMaybe<Scalars["String"]>;
	isTypeOf_containsInsensitive?: InputMaybe<Scalars["String"]>;
	isTypeOf_endsWith?: InputMaybe<Scalars["String"]>;
	isTypeOf_eq?: InputMaybe<Scalars["String"]>;
	isTypeOf_gt?: InputMaybe<Scalars["String"]>;
	isTypeOf_gte?: InputMaybe<Scalars["String"]>;
	isTypeOf_in?: InputMaybe<Array<Scalars["String"]>>;
	isTypeOf_isNull?: InputMaybe<Scalars["Boolean"]>;
	isTypeOf_lt?: InputMaybe<Scalars["String"]>;
	isTypeOf_lte?: InputMaybe<Scalars["String"]>;
	isTypeOf_not_contains?: InputMaybe<Scalars["String"]>;
	isTypeOf_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	isTypeOf_not_endsWith?: InputMaybe<Scalars["String"]>;
	isTypeOf_not_eq?: InputMaybe<Scalars["String"]>;
	isTypeOf_not_in?: InputMaybe<Array<Scalars["String"]>>;
	isTypeOf_not_startsWith?: InputMaybe<Scalars["String"]>;
	isTypeOf_startsWith?: InputMaybe<Scalars["String"]>;
	maxFeePerGas_eq?: InputMaybe<Scalars["evm_BigInt"]>;
	maxFeePerGas_gt?: InputMaybe<Scalars["evm_BigInt"]>;
	maxFeePerGas_gte?: InputMaybe<Scalars["evm_BigInt"]>;
	maxFeePerGas_in?: InputMaybe<Array<Scalars["evm_BigInt"]>>;
	maxFeePerGas_isNull?: InputMaybe<Scalars["Boolean"]>;
	maxFeePerGas_lt?: InputMaybe<Scalars["evm_BigInt"]>;
	maxFeePerGas_lte?: InputMaybe<Scalars["evm_BigInt"]>;
	maxFeePerGas_not_eq?: InputMaybe<Scalars["evm_BigInt"]>;
	maxFeePerGas_not_in?: InputMaybe<Array<Scalars["evm_BigInt"]>>;
	maxPriorityFeePerGas_eq?: InputMaybe<Scalars["evm_BigInt"]>;
	maxPriorityFeePerGas_gt?: InputMaybe<Scalars["evm_BigInt"]>;
	maxPriorityFeePerGas_gte?: InputMaybe<Scalars["evm_BigInt"]>;
	maxPriorityFeePerGas_in?: InputMaybe<Array<Scalars["evm_BigInt"]>>;
	maxPriorityFeePerGas_isNull?: InputMaybe<Scalars["Boolean"]>;
	maxPriorityFeePerGas_lt?: InputMaybe<Scalars["evm_BigInt"]>;
	maxPriorityFeePerGas_lte?: InputMaybe<Scalars["evm_BigInt"]>;
	maxPriorityFeePerGas_not_eq?: InputMaybe<Scalars["evm_BigInt"]>;
	maxPriorityFeePerGas_not_in?: InputMaybe<Array<Scalars["evm_BigInt"]>>;
	value_eq?: InputMaybe<Scalars["evm_BigInt"]>;
	value_gt?: InputMaybe<Scalars["evm_BigInt"]>;
	value_gte?: InputMaybe<Scalars["evm_BigInt"]>;
	value_in?: InputMaybe<Array<Scalars["evm_BigInt"]>>;
	value_isNull?: InputMaybe<Scalars["Boolean"]>;
	value_lt?: InputMaybe<Scalars["evm_BigInt"]>;
	value_lte?: InputMaybe<Scalars["evm_BigInt"]>;
	value_not_eq?: InputMaybe<Scalars["evm_BigInt"]>;
	value_not_in?: InputMaybe<Array<Scalars["evm_BigInt"]>>;
};

export type Evm_TransactionEdge = {
	__typename?: "evm_TransactionEdge";
	cursor: Scalars["String"];
	node: Evm_Transaction;
};

export enum Evm_TransactionOrderByInput {
	BlockAsc = "block_ASC",
	BlockDesc = "block_DESC",
	DataGasLimitAsc = "data_gasLimit_ASC",
	DataGasLimitDesc = "data_gasLimit_DESC",
	DataGasPriceAsc = "data_gasPrice_ASC",
	DataGasPriceDesc = "data_gasPrice_DESC",
	DataIsTypeOfAsc = "data_isTypeOf_ASC",
	DataIsTypeOfDesc = "data_isTypeOf_DESC",
	DataMaxFeePerGasAsc = "data_maxFeePerGas_ASC",
	DataMaxFeePerGasDesc = "data_maxFeePerGas_DESC",
	DataMaxPriorityFeePerGasAsc = "data_maxPriorityFeePerGas_ASC",
	DataMaxPriorityFeePerGasDesc = "data_maxPriorityFeePerGas_DESC",
	DataValueAsc = "data_value_ASC",
	DataValueDesc = "data_value_DESC",
	FromAsc = "from_ASC",
	FromDesc = "from_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	MethodAsc = "method_ASC",
	MethodDesc = "method_DESC",
	TimestampAsc = "timestamp_ASC",
	TimestampDesc = "timestamp_DESC",
	ToAsc = "to_ASC",
	ToDesc = "to_DESC",
	TxHashAsc = "txHash_ASC",
	TxHashDesc = "txHash_DESC",
	TypeAsc = "type_ASC",
	TypeDesc = "type_DESC",
}

export type Evm_TransactionWhereInput = {
	AND?: InputMaybe<Array<Evm_TransactionWhereInput>>;
	OR?: InputMaybe<Array<Evm_TransactionWhereInput>>;
	block_eq?: InputMaybe<Scalars["Int"]>;
	block_gt?: InputMaybe<Scalars["Int"]>;
	block_gte?: InputMaybe<Scalars["Int"]>;
	block_in?: InputMaybe<Array<Scalars["Int"]>>;
	block_isNull?: InputMaybe<Scalars["Boolean"]>;
	block_lt?: InputMaybe<Scalars["Int"]>;
	block_lte?: InputMaybe<Scalars["Int"]>;
	block_not_eq?: InputMaybe<Scalars["Int"]>;
	block_not_in?: InputMaybe<Array<Scalars["Int"]>>;
	data?: InputMaybe<Evm_TransactionDataWhereInput>;
	data_isNull?: InputMaybe<Scalars["Boolean"]>;
	from_contains?: InputMaybe<Scalars["String"]>;
	from_containsInsensitive?: InputMaybe<Scalars["String"]>;
	from_endsWith?: InputMaybe<Scalars["String"]>;
	from_eq?: InputMaybe<Scalars["String"]>;
	from_gt?: InputMaybe<Scalars["String"]>;
	from_gte?: InputMaybe<Scalars["String"]>;
	from_in?: InputMaybe<Array<Scalars["String"]>>;
	from_isNull?: InputMaybe<Scalars["Boolean"]>;
	from_lt?: InputMaybe<Scalars["String"]>;
	from_lte?: InputMaybe<Scalars["String"]>;
	from_not_contains?: InputMaybe<Scalars["String"]>;
	from_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	from_not_endsWith?: InputMaybe<Scalars["String"]>;
	from_not_eq?: InputMaybe<Scalars["String"]>;
	from_not_in?: InputMaybe<Array<Scalars["String"]>>;
	from_not_startsWith?: InputMaybe<Scalars["String"]>;
	from_startsWith?: InputMaybe<Scalars["String"]>;
	id_contains?: InputMaybe<Scalars["String"]>;
	id_containsInsensitive?: InputMaybe<Scalars["String"]>;
	id_endsWith?: InputMaybe<Scalars["String"]>;
	id_eq?: InputMaybe<Scalars["String"]>;
	id_gt?: InputMaybe<Scalars["String"]>;
	id_gte?: InputMaybe<Scalars["String"]>;
	id_in?: InputMaybe<Array<Scalars["String"]>>;
	id_isNull?: InputMaybe<Scalars["Boolean"]>;
	id_lt?: InputMaybe<Scalars["String"]>;
	id_lte?: InputMaybe<Scalars["String"]>;
	id_not_contains?: InputMaybe<Scalars["String"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	id_not_endsWith?: InputMaybe<Scalars["String"]>;
	id_not_eq?: InputMaybe<Scalars["String"]>;
	id_not_in?: InputMaybe<Array<Scalars["String"]>>;
	id_not_startsWith?: InputMaybe<Scalars["String"]>;
	id_startsWith?: InputMaybe<Scalars["String"]>;
	input_eq?: InputMaybe<Scalars["evm_JSON"]>;
	input_isNull?: InputMaybe<Scalars["Boolean"]>;
	input_jsonContains?: InputMaybe<Scalars["evm_JSON"]>;
	input_jsonHasKey?: InputMaybe<Scalars["evm_JSON"]>;
	input_not_eq?: InputMaybe<Scalars["evm_JSON"]>;
	method_contains?: InputMaybe<Scalars["String"]>;
	method_containsInsensitive?: InputMaybe<Scalars["String"]>;
	method_endsWith?: InputMaybe<Scalars["String"]>;
	method_eq?: InputMaybe<Scalars["String"]>;
	method_gt?: InputMaybe<Scalars["String"]>;
	method_gte?: InputMaybe<Scalars["String"]>;
	method_in?: InputMaybe<Array<Scalars["String"]>>;
	method_isNull?: InputMaybe<Scalars["Boolean"]>;
	method_lt?: InputMaybe<Scalars["String"]>;
	method_lte?: InputMaybe<Scalars["String"]>;
	method_not_contains?: InputMaybe<Scalars["String"]>;
	method_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	method_not_endsWith?: InputMaybe<Scalars["String"]>;
	method_not_eq?: InputMaybe<Scalars["String"]>;
	method_not_in?: InputMaybe<Array<Scalars["String"]>>;
	method_not_startsWith?: InputMaybe<Scalars["String"]>;
	method_startsWith?: InputMaybe<Scalars["String"]>;
	timestamp_eq?: InputMaybe<Scalars["evm_DateTime"]>;
	timestamp_gt?: InputMaybe<Scalars["evm_DateTime"]>;
	timestamp_gte?: InputMaybe<Scalars["evm_DateTime"]>;
	timestamp_in?: InputMaybe<Array<Scalars["evm_DateTime"]>>;
	timestamp_isNull?: InputMaybe<Scalars["Boolean"]>;
	timestamp_lt?: InputMaybe<Scalars["evm_DateTime"]>;
	timestamp_lte?: InputMaybe<Scalars["evm_DateTime"]>;
	timestamp_not_eq?: InputMaybe<Scalars["evm_DateTime"]>;
	timestamp_not_in?: InputMaybe<Array<Scalars["evm_DateTime"]>>;
	to_contains?: InputMaybe<Scalars["String"]>;
	to_containsInsensitive?: InputMaybe<Scalars["String"]>;
	to_endsWith?: InputMaybe<Scalars["String"]>;
	to_eq?: InputMaybe<Scalars["String"]>;
	to_gt?: InputMaybe<Scalars["String"]>;
	to_gte?: InputMaybe<Scalars["String"]>;
	to_in?: InputMaybe<Array<Scalars["String"]>>;
	to_isNull?: InputMaybe<Scalars["Boolean"]>;
	to_lt?: InputMaybe<Scalars["String"]>;
	to_lte?: InputMaybe<Scalars["String"]>;
	to_not_contains?: InputMaybe<Scalars["String"]>;
	to_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	to_not_endsWith?: InputMaybe<Scalars["String"]>;
	to_not_eq?: InputMaybe<Scalars["String"]>;
	to_not_in?: InputMaybe<Array<Scalars["String"]>>;
	to_not_startsWith?: InputMaybe<Scalars["String"]>;
	to_startsWith?: InputMaybe<Scalars["String"]>;
	txHash_contains?: InputMaybe<Scalars["String"]>;
	txHash_containsInsensitive?: InputMaybe<Scalars["String"]>;
	txHash_endsWith?: InputMaybe<Scalars["String"]>;
	txHash_eq?: InputMaybe<Scalars["String"]>;
	txHash_gt?: InputMaybe<Scalars["String"]>;
	txHash_gte?: InputMaybe<Scalars["String"]>;
	txHash_in?: InputMaybe<Array<Scalars["String"]>>;
	txHash_isNull?: InputMaybe<Scalars["Boolean"]>;
	txHash_lt?: InputMaybe<Scalars["String"]>;
	txHash_lte?: InputMaybe<Scalars["String"]>;
	txHash_not_contains?: InputMaybe<Scalars["String"]>;
	txHash_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	txHash_not_endsWith?: InputMaybe<Scalars["String"]>;
	txHash_not_eq?: InputMaybe<Scalars["String"]>;
	txHash_not_in?: InputMaybe<Array<Scalars["String"]>>;
	txHash_not_startsWith?: InputMaybe<Scalars["String"]>;
	txHash_startsWith?: InputMaybe<Scalars["String"]>;
	type_eq?: InputMaybe<Scalars["Int"]>;
	type_gt?: InputMaybe<Scalars["Int"]>;
	type_gte?: InputMaybe<Scalars["Int"]>;
	type_in?: InputMaybe<Array<Scalars["Int"]>>;
	type_isNull?: InputMaybe<Scalars["Boolean"]>;
	type_lt?: InputMaybe<Scalars["Int"]>;
	type_lte?: InputMaybe<Scalars["Int"]>;
	type_not_eq?: InputMaybe<Scalars["Int"]>;
	type_not_in?: InputMaybe<Array<Scalars["Int"]>>;
};

export type Evm_TransactionsConnection = {
	__typename?: "evm_TransactionsConnection";
	edges: Array<Evm_TransactionEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

/** mutation root */
export type Mutation_Root = {
	__typename?: "mutation_root";
	archive?: Maybe<Archivemutation_Root>;
};

export type Query_Root = {
	__typename?: "query_root";
	archive?: Maybe<Archivequery_Root>;
	balances?: Maybe<BalancesQuery>;
	evm?: Maybe<EvmQuery>;
	tokens?: Maybe<TokensQuery>;
	transfers?: Maybe<TransfersQuery>;
};

export type Subscription_Root = {
	__typename?: "subscription_root";
	archive?: Maybe<Archivesubscription_Root>;
	balances?: Maybe<BalancesSubscription>;
	evm?: Maybe<EvmSubscription>;
	transfers?: Maybe<TransfersSubscription>;
};

export type TokensQuery = {
	__typename?: "tokensQuery";
	accountById?: Maybe<Tokens_Account>;
	accountByUniqueInput?: Maybe<Tokens_Account>;
	accountFTokenBalanceById?: Maybe<Tokens_AccountFTokenBalance>;
	accountFTokenBalanceByUniqueInput?: Maybe<Tokens_AccountFTokenBalance>;
	accountFTokenBalances: Array<Tokens_AccountFTokenBalance>;
	accountFTokenBalancesConnection: Tokens_AccountFTokenBalancesConnection;
	accountFtTransferById?: Maybe<Tokens_AccountFtTransfer>;
	accountFtTransferByUniqueInput?: Maybe<Tokens_AccountFtTransfer>;
	accountFtTransfers: Array<Tokens_AccountFtTransfer>;
	accountFtTransfersConnection: Tokens_AccountFtTransfersConnection;
	accountNftTransferById?: Maybe<Tokens_AccountNftTransfer>;
	accountNftTransferByUniqueInput?: Maybe<Tokens_AccountNftTransfer>;
	accountNftTransfers: Array<Tokens_AccountNftTransfer>;
	accountNftTransfersConnection: Tokens_AccountNftTransfersConnection;
	accounts: Array<Tokens_Account>;
	accountsConnection: Tokens_AccountsConnection;
	collectionById?: Maybe<Tokens_Collection>;
	collectionByUniqueInput?: Maybe<Tokens_Collection>;
	collections: Array<Tokens_Collection>;
	collectionsConnection: Tokens_CollectionsConnection;
	fTokenById?: Maybe<Tokens_FToken>;
	fTokenByUniqueInput?: Maybe<Tokens_FToken>;
	fTokens: Array<Tokens_FToken>;
	fTokensConnection: Tokens_FTokensConnection;
	ftTransferById?: Maybe<Tokens_FtTransfer>;
	ftTransferByUniqueInput?: Maybe<Tokens_FtTransfer>;
	ftTransfers: Array<Tokens_FtTransfer>;
	ftTransfersConnection: Tokens_FtTransfersConnection;
	nfTokenById?: Maybe<Tokens_NfToken>;
	nfTokenByUniqueInput?: Maybe<Tokens_NfToken>;
	nfTokens: Array<Tokens_NfToken>;
	nfTokensConnection: Tokens_NfTokensConnection;
	nftTransferById?: Maybe<Tokens_NftTransfer>;
	nftTransferByUniqueInput?: Maybe<Tokens_NftTransfer>;
	nftTransfers: Array<Tokens_NftTransfer>;
	nftTransfersConnection: Tokens_NftTransfersConnection;
	uriUpdateActionById?: Maybe<Tokens_UriUpdateAction>;
	uriUpdateActionByUniqueInput?: Maybe<Tokens_UriUpdateAction>;
	uriUpdateActions: Array<Tokens_UriUpdateAction>;
	uriUpdateActionsConnection: Tokens_UriUpdateActionsConnection;
};

export type TokensQueryAccountByIdArgs = {
	id: Scalars["ID"];
};

export type TokensQueryAccountByUniqueInputArgs = {
	where: Tokens_AccountWhereUniqueInput;
};

export type TokensQueryAccountFTokenBalanceByIdArgs = {
	id: Scalars["ID"];
};

export type TokensQueryAccountFTokenBalanceByUniqueInputArgs = {
	where: Tokens_AccountFTokenBalanceWhereUniqueInput;
};

export type TokensQueryAccountFTokenBalancesArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<
		Array<InputMaybe<Tokens_AccountFTokenBalanceOrderByInput>>
	>;
	where?: InputMaybe<Tokens_AccountFTokenBalanceWhereInput>;
};

export type TokensQueryAccountFTokenBalancesConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Tokens_AccountFTokenBalanceOrderByInput>;
	where?: InputMaybe<Tokens_AccountFTokenBalanceWhereInput>;
};

export type TokensQueryAccountFtTransferByIdArgs = {
	id: Scalars["ID"];
};

export type TokensQueryAccountFtTransferByUniqueInputArgs = {
	where: Tokens_AccountFtTransferWhereUniqueInput;
};

export type TokensQueryAccountFtTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_AccountFtTransferOrderByInput>>>;
	where?: InputMaybe<Tokens_AccountFtTransferWhereInput>;
};

export type TokensQueryAccountFtTransfersConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Tokens_AccountFtTransferOrderByInput>;
	where?: InputMaybe<Tokens_AccountFtTransferWhereInput>;
};

export type TokensQueryAccountNftTransferByIdArgs = {
	id: Scalars["ID"];
};

export type TokensQueryAccountNftTransferByUniqueInputArgs = {
	where: Tokens_AccountNftTransferWhereUniqueInput;
};

export type TokensQueryAccountNftTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<
		Array<InputMaybe<Tokens_AccountNftTransferOrderByInput>>
	>;
	where?: InputMaybe<Tokens_AccountNftTransferWhereInput>;
};

export type TokensQueryAccountNftTransfersConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Tokens_AccountNftTransferOrderByInput>;
	where?: InputMaybe<Tokens_AccountNftTransferWhereInput>;
};

export type TokensQueryAccountsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_AccountOrderByInput>>>;
	where?: InputMaybe<Tokens_AccountWhereInput>;
};

export type TokensQueryAccountsConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Tokens_AccountOrderByInput>;
	where?: InputMaybe<Tokens_AccountWhereInput>;
};

export type TokensQueryCollectionByIdArgs = {
	id: Scalars["ID"];
};

export type TokensQueryCollectionByUniqueInputArgs = {
	where: Tokens_CollectionWhereUniqueInput;
};

export type TokensQueryCollectionsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_CollectionOrderByInput>>>;
	where?: InputMaybe<Tokens_CollectionWhereInput>;
};

export type TokensQueryCollectionsConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Tokens_CollectionOrderByInput>;
	where?: InputMaybe<Tokens_CollectionWhereInput>;
};

export type TokensQueryFTokenByIdArgs = {
	id: Scalars["ID"];
};

export type TokensQueryFTokenByUniqueInputArgs = {
	where: Tokens_FTokenWhereUniqueInput;
};

export type TokensQueryFTokensArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_FTokenOrderByInput>>>;
	where?: InputMaybe<Tokens_FTokenWhereInput>;
};

export type TokensQueryFTokensConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Tokens_FTokenOrderByInput>;
	where?: InputMaybe<Tokens_FTokenWhereInput>;
};

export type TokensQueryFtTransferByIdArgs = {
	id: Scalars["ID"];
};

export type TokensQueryFtTransferByUniqueInputArgs = {
	where: Tokens_FtTransferWhereUniqueInput;
};

export type TokensQueryFtTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_FtTransferOrderByInput>>>;
	where?: InputMaybe<Tokens_FtTransferWhereInput>;
};

export type TokensQueryFtTransfersConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Tokens_FtTransferOrderByInput>;
	where?: InputMaybe<Tokens_FtTransferWhereInput>;
};

export type TokensQueryNfTokenByIdArgs = {
	id: Scalars["ID"];
};

export type TokensQueryNfTokenByUniqueInputArgs = {
	where: Tokens_NfTokenWhereUniqueInput;
};

export type TokensQueryNfTokensArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_NfTokenOrderByInput>>>;
	where?: InputMaybe<Tokens_NfTokenWhereInput>;
};

export type TokensQueryNfTokensConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Tokens_NfTokenOrderByInput>;
	where?: InputMaybe<Tokens_NfTokenWhereInput>;
};

export type TokensQueryNftTransferByIdArgs = {
	id: Scalars["ID"];
};

export type TokensQueryNftTransferByUniqueInputArgs = {
	where: Tokens_NftTransferWhereUniqueInput;
};

export type TokensQueryNftTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_NftTransferOrderByInput>>>;
	where?: InputMaybe<Tokens_NftTransferWhereInput>;
};

export type TokensQueryNftTransfersConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Tokens_NftTransferOrderByInput>;
	where?: InputMaybe<Tokens_NftTransferWhereInput>;
};

export type TokensQueryUriUpdateActionByIdArgs = {
	id: Scalars["ID"];
};

export type TokensQueryUriUpdateActionByUniqueInputArgs = {
	where: Tokens_UriUpdateActionWhereUniqueInput;
};

export type TokensQueryUriUpdateActionsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_UriUpdateActionOrderByInput>>>;
	where?: InputMaybe<Tokens_UriUpdateActionWhereInput>;
};

export type TokensQueryUriUpdateActionsConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Tokens_UriUpdateActionOrderByInput>;
	where?: InputMaybe<Tokens_UriUpdateActionWhereInput>;
};

export type Tokens_Account = {
	__typename?: "tokens_Account";
	balancesFToken: Array<Tokens_AccountFTokenBalance>;
	ftTransfers: Array<Tokens_AccountFtTransfer>;
	id: Scalars["ID"];
	nftTransfers: Array<Tokens_AccountNftTransfer>;
	ownedTokens: Array<Tokens_NfToken>;
};

export type Tokens_AccountBalancesFTokenArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<
		Array<InputMaybe<Tokens_AccountFTokenBalanceOrderByInput>>
	>;
	where?: InputMaybe<Tokens_AccountFTokenBalanceWhereInput>;
};

export type Tokens_AccountFtTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_AccountFtTransferOrderByInput>>>;
	where?: InputMaybe<Tokens_AccountFtTransferWhereInput>;
};

export type Tokens_AccountNftTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<
		Array<InputMaybe<Tokens_AccountNftTransferOrderByInput>>
	>;
	where?: InputMaybe<Tokens_AccountNftTransferWhereInput>;
};

export type Tokens_AccountOwnedTokensArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_NfTokenOrderByInput>>>;
	where?: InputMaybe<Tokens_NfTokenWhereInput>;
};

export type Tokens_AccountEdge = {
	__typename?: "tokens_AccountEdge";
	cursor: Scalars["String"];
	node: Tokens_Account;
};

export type Tokens_AccountFTokenBalance = {
	__typename?: "tokens_AccountFTokenBalance";
	account: Tokens_Account;
	amount: Scalars["tokens_BigInt"];
	id: Scalars["ID"];
	token: Tokens_FToken;
	updatedAt: Scalars["tokens_DateTime"];
	updatedAtBlock: Scalars["tokens_BigInt"];
};

export type Tokens_AccountFTokenBalanceEdge = {
	__typename?: "tokens_AccountFTokenBalanceEdge";
	cursor: Scalars["String"];
	node: Tokens_AccountFTokenBalance;
};

export enum Tokens_AccountFTokenBalanceOrderByInput {
	AccountIdAsc = "account_id_ASC",
	AccountIdDesc = "account_id_DESC",
	AmountAsc = "amount_ASC",
	AmountDesc = "amount_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	TokenDecimalsAsc = "token_decimals_ASC",
	TokenDecimalsDesc = "token_decimals_DESC",
	TokenIdAsc = "token_id_ASC",
	TokenIdDesc = "token_id_DESC",
	TokenNameAsc = "token_name_ASC",
	TokenNameDesc = "token_name_DESC",
	TokenSymbolAsc = "token_symbol_ASC",
	TokenSymbolDesc = "token_symbol_DESC",
	UpdatedAtBlockAsc = "updatedAtBlock_ASC",
	UpdatedAtBlockDesc = "updatedAtBlock_DESC",
	UpdatedAtAsc = "updatedAt_ASC",
	UpdatedAtDesc = "updatedAt_DESC",
}

export type Tokens_AccountFTokenBalanceWhereInput = {
	AND?: InputMaybe<Array<Tokens_AccountFTokenBalanceWhereInput>>;
	OR?: InputMaybe<Array<Tokens_AccountFTokenBalanceWhereInput>>;
	account?: InputMaybe<Tokens_AccountWhereInput>;
	amount_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_gt?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_gte?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	amount_lt?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_lte?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_not_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_not_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	id_contains?: InputMaybe<Scalars["ID"]>;
	id_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_endsWith?: InputMaybe<Scalars["ID"]>;
	id_eq?: InputMaybe<Scalars["ID"]>;
	id_gt?: InputMaybe<Scalars["ID"]>;
	id_gte?: InputMaybe<Scalars["ID"]>;
	id_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_lt?: InputMaybe<Scalars["ID"]>;
	id_lte?: InputMaybe<Scalars["ID"]>;
	id_not_contains?: InputMaybe<Scalars["ID"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_not_endsWith?: InputMaybe<Scalars["ID"]>;
	id_not_eq?: InputMaybe<Scalars["ID"]>;
	id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_not_startsWith?: InputMaybe<Scalars["ID"]>;
	id_startsWith?: InputMaybe<Scalars["ID"]>;
	token?: InputMaybe<Tokens_FTokenWhereInput>;
	updatedAtBlock_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	updatedAtBlock_gt?: InputMaybe<Scalars["tokens_BigInt"]>;
	updatedAtBlock_gte?: InputMaybe<Scalars["tokens_BigInt"]>;
	updatedAtBlock_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	updatedAtBlock_lt?: InputMaybe<Scalars["tokens_BigInt"]>;
	updatedAtBlock_lte?: InputMaybe<Scalars["tokens_BigInt"]>;
	updatedAtBlock_not_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	updatedAtBlock_not_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	updatedAt_eq?: InputMaybe<Scalars["tokens_DateTime"]>;
	updatedAt_gt?: InputMaybe<Scalars["tokens_DateTime"]>;
	updatedAt_gte?: InputMaybe<Scalars["tokens_DateTime"]>;
	updatedAt_in?: InputMaybe<Array<Scalars["tokens_DateTime"]>>;
	updatedAt_lt?: InputMaybe<Scalars["tokens_DateTime"]>;
	updatedAt_lte?: InputMaybe<Scalars["tokens_DateTime"]>;
	updatedAt_not_eq?: InputMaybe<Scalars["tokens_DateTime"]>;
	updatedAt_not_in?: InputMaybe<Array<Scalars["tokens_DateTime"]>>;
};

export type Tokens_AccountFTokenBalanceWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Tokens_AccountFTokenBalancesConnection = {
	__typename?: "tokens_AccountFTokenBalancesConnection";
	edges: Array<Tokens_AccountFTokenBalanceEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export type Tokens_AccountFtTransfer = {
	__typename?: "tokens_AccountFtTransfer";
	account: Tokens_Account;
	direction?: Maybe<Tokens_TransferDirection>;
	id: Scalars["ID"];
	transfer?: Maybe<Tokens_FtTransfer>;
};

export type Tokens_AccountFtTransferEdge = {
	__typename?: "tokens_AccountFtTransferEdge";
	cursor: Scalars["String"];
	node: Tokens_AccountFtTransfer;
};

export enum Tokens_AccountFtTransferOrderByInput {
	AccountIdAsc = "account_id_ASC",
	AccountIdDesc = "account_id_DESC",
	DirectionAsc = "direction_ASC",
	DirectionDesc = "direction_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	TransferAmountAsc = "transfer_amount_ASC",
	TransferAmountDesc = "transfer_amount_DESC",
	TransferBlockNumberAsc = "transfer_blockNumber_ASC",
	TransferBlockNumberDesc = "transfer_blockNumber_DESC",
	TransferEventIndexAsc = "transfer_eventIndex_ASC",
	TransferEventIndexDesc = "transfer_eventIndex_DESC",
	TransferIdAsc = "transfer_id_ASC",
	TransferIdDesc = "transfer_id_DESC",
	TransferTimestampAsc = "transfer_timestamp_ASC",
	TransferTimestampDesc = "transfer_timestamp_DESC",
	TransferTransferTypeAsc = "transfer_transferType_ASC",
	TransferTransferTypeDesc = "transfer_transferType_DESC",
	TransferTxnHashAsc = "transfer_txnHash_ASC",
	TransferTxnHashDesc = "transfer_txnHash_DESC",
}

export type Tokens_AccountFtTransferWhereInput = {
	AND?: InputMaybe<Array<Tokens_AccountFtTransferWhereInput>>;
	OR?: InputMaybe<Array<Tokens_AccountFtTransferWhereInput>>;
	account?: InputMaybe<Tokens_AccountWhereInput>;
	direction_eq?: InputMaybe<Tokens_TransferDirection>;
	direction_in?: InputMaybe<Array<Tokens_TransferDirection>>;
	direction_isNull?: InputMaybe<Scalars["Boolean"]>;
	direction_not_eq?: InputMaybe<Tokens_TransferDirection>;
	direction_not_in?: InputMaybe<Array<Tokens_TransferDirection>>;
	id_contains?: InputMaybe<Scalars["ID"]>;
	id_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_endsWith?: InputMaybe<Scalars["ID"]>;
	id_eq?: InputMaybe<Scalars["ID"]>;
	id_gt?: InputMaybe<Scalars["ID"]>;
	id_gte?: InputMaybe<Scalars["ID"]>;
	id_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_lt?: InputMaybe<Scalars["ID"]>;
	id_lte?: InputMaybe<Scalars["ID"]>;
	id_not_contains?: InputMaybe<Scalars["ID"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_not_endsWith?: InputMaybe<Scalars["ID"]>;
	id_not_eq?: InputMaybe<Scalars["ID"]>;
	id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_not_startsWith?: InputMaybe<Scalars["ID"]>;
	id_startsWith?: InputMaybe<Scalars["ID"]>;
	transfer?: InputMaybe<Tokens_FtTransferWhereInput>;
	transfer_isNull?: InputMaybe<Scalars["Boolean"]>;
};

export type Tokens_AccountFtTransferWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Tokens_AccountFtTransfersConnection = {
	__typename?: "tokens_AccountFtTransfersConnection";
	edges: Array<Tokens_AccountFtTransferEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export type Tokens_AccountNftTransfer = {
	__typename?: "tokens_AccountNftTransfer";
	account: Tokens_Account;
	direction?: Maybe<Tokens_TransferDirection>;
	id: Scalars["ID"];
	transfer?: Maybe<Tokens_NftTransfer>;
};

export type Tokens_AccountNftTransferEdge = {
	__typename?: "tokens_AccountNftTransferEdge";
	cursor: Scalars["String"];
	node: Tokens_AccountNftTransfer;
};

export enum Tokens_AccountNftTransferOrderByInput {
	AccountIdAsc = "account_id_ASC",
	AccountIdDesc = "account_id_DESC",
	DirectionAsc = "direction_ASC",
	DirectionDesc = "direction_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	TransferAmountAsc = "transfer_amount_ASC",
	TransferAmountDesc = "transfer_amount_DESC",
	TransferBlockNumberAsc = "transfer_blockNumber_ASC",
	TransferBlockNumberDesc = "transfer_blockNumber_DESC",
	TransferEventIndexAsc = "transfer_eventIndex_ASC",
	TransferEventIndexDesc = "transfer_eventIndex_DESC",
	TransferIdAsc = "transfer_id_ASC",
	TransferIdDesc = "transfer_id_DESC",
	TransferIsBatchAsc = "transfer_isBatch_ASC",
	TransferIsBatchDesc = "transfer_isBatch_DESC",
	TransferTimestampAsc = "transfer_timestamp_ASC",
	TransferTimestampDesc = "transfer_timestamp_DESC",
	TransferTransferTypeAsc = "transfer_transferType_ASC",
	TransferTransferTypeDesc = "transfer_transferType_DESC",
	TransferTxnHashAsc = "transfer_txnHash_ASC",
	TransferTxnHashDesc = "transfer_txnHash_DESC",
}

export type Tokens_AccountNftTransferWhereInput = {
	AND?: InputMaybe<Array<Tokens_AccountNftTransferWhereInput>>;
	OR?: InputMaybe<Array<Tokens_AccountNftTransferWhereInput>>;
	account?: InputMaybe<Tokens_AccountWhereInput>;
	direction_eq?: InputMaybe<Tokens_TransferDirection>;
	direction_in?: InputMaybe<Array<Tokens_TransferDirection>>;
	direction_isNull?: InputMaybe<Scalars["Boolean"]>;
	direction_not_eq?: InputMaybe<Tokens_TransferDirection>;
	direction_not_in?: InputMaybe<Array<Tokens_TransferDirection>>;
	id_contains?: InputMaybe<Scalars["ID"]>;
	id_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_endsWith?: InputMaybe<Scalars["ID"]>;
	id_eq?: InputMaybe<Scalars["ID"]>;
	id_gt?: InputMaybe<Scalars["ID"]>;
	id_gte?: InputMaybe<Scalars["ID"]>;
	id_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_lt?: InputMaybe<Scalars["ID"]>;
	id_lte?: InputMaybe<Scalars["ID"]>;
	id_not_contains?: InputMaybe<Scalars["ID"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_not_endsWith?: InputMaybe<Scalars["ID"]>;
	id_not_eq?: InputMaybe<Scalars["ID"]>;
	id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_not_startsWith?: InputMaybe<Scalars["ID"]>;
	id_startsWith?: InputMaybe<Scalars["ID"]>;
	transfer?: InputMaybe<Tokens_NftTransferWhereInput>;
	transfer_isNull?: InputMaybe<Scalars["Boolean"]>;
};

export type Tokens_AccountNftTransferWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Tokens_AccountNftTransfersConnection = {
	__typename?: "tokens_AccountNftTransfersConnection";
	edges: Array<Tokens_AccountNftTransferEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export enum Tokens_AccountOrderByInput {
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
}

export type Tokens_AccountWhereInput = {
	AND?: InputMaybe<Array<Tokens_AccountWhereInput>>;
	OR?: InputMaybe<Array<Tokens_AccountWhereInput>>;
	balancesFToken_every?: InputMaybe<Tokens_AccountFTokenBalanceWhereInput>;
	balancesFToken_none?: InputMaybe<Tokens_AccountFTokenBalanceWhereInput>;
	balancesFToken_some?: InputMaybe<Tokens_AccountFTokenBalanceWhereInput>;
	ftTransfers_every?: InputMaybe<Tokens_AccountFtTransferWhereInput>;
	ftTransfers_none?: InputMaybe<Tokens_AccountFtTransferWhereInput>;
	ftTransfers_some?: InputMaybe<Tokens_AccountFtTransferWhereInput>;
	id_contains?: InputMaybe<Scalars["ID"]>;
	id_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_endsWith?: InputMaybe<Scalars["ID"]>;
	id_eq?: InputMaybe<Scalars["ID"]>;
	id_gt?: InputMaybe<Scalars["ID"]>;
	id_gte?: InputMaybe<Scalars["ID"]>;
	id_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_lt?: InputMaybe<Scalars["ID"]>;
	id_lte?: InputMaybe<Scalars["ID"]>;
	id_not_contains?: InputMaybe<Scalars["ID"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_not_endsWith?: InputMaybe<Scalars["ID"]>;
	id_not_eq?: InputMaybe<Scalars["ID"]>;
	id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_not_startsWith?: InputMaybe<Scalars["ID"]>;
	id_startsWith?: InputMaybe<Scalars["ID"]>;
	nftTransfers_every?: InputMaybe<Tokens_AccountNftTransferWhereInput>;
	nftTransfers_none?: InputMaybe<Tokens_AccountNftTransferWhereInput>;
	nftTransfers_some?: InputMaybe<Tokens_AccountNftTransferWhereInput>;
	ownedTokens_every?: InputMaybe<Tokens_NfTokenWhereInput>;
	ownedTokens_none?: InputMaybe<Tokens_NfTokenWhereInput>;
	ownedTokens_some?: InputMaybe<Tokens_NfTokenWhereInput>;
};

export type Tokens_AccountWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Tokens_AccountsConnection = {
	__typename?: "tokens_AccountsConnection";
	edges: Array<Tokens_AccountEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export type Tokens_Collection = {
	__typename?: "tokens_Collection";
	collectionType: Tokens_ContractStandard;
	createdAt: Scalars["tokens_DateTime"];
	createdAtBlock: Scalars["tokens_BigInt"];
	id: Scalars["ID"];
	nfts: Array<Tokens_NfToken>;
};

export type Tokens_CollectionNftsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_NfTokenOrderByInput>>>;
	where?: InputMaybe<Tokens_NfTokenWhereInput>;
};

export type Tokens_CollectionEdge = {
	__typename?: "tokens_CollectionEdge";
	cursor: Scalars["String"];
	node: Tokens_Collection;
};

export enum Tokens_CollectionOrderByInput {
	CollectionTypeAsc = "collectionType_ASC",
	CollectionTypeDesc = "collectionType_DESC",
	CreatedAtBlockAsc = "createdAtBlock_ASC",
	CreatedAtBlockDesc = "createdAtBlock_DESC",
	CreatedAtAsc = "createdAt_ASC",
	CreatedAtDesc = "createdAt_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
}

export type Tokens_CollectionWhereInput = {
	AND?: InputMaybe<Array<Tokens_CollectionWhereInput>>;
	OR?: InputMaybe<Array<Tokens_CollectionWhereInput>>;
	collectionType_eq?: InputMaybe<Tokens_ContractStandard>;
	collectionType_in?: InputMaybe<Array<Tokens_ContractStandard>>;
	collectionType_not_eq?: InputMaybe<Tokens_ContractStandard>;
	collectionType_not_in?: InputMaybe<Array<Tokens_ContractStandard>>;
	createdAtBlock_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	createdAtBlock_gt?: InputMaybe<Scalars["tokens_BigInt"]>;
	createdAtBlock_gte?: InputMaybe<Scalars["tokens_BigInt"]>;
	createdAtBlock_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	createdAtBlock_lt?: InputMaybe<Scalars["tokens_BigInt"]>;
	createdAtBlock_lte?: InputMaybe<Scalars["tokens_BigInt"]>;
	createdAtBlock_not_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	createdAtBlock_not_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	createdAt_eq?: InputMaybe<Scalars["tokens_DateTime"]>;
	createdAt_gt?: InputMaybe<Scalars["tokens_DateTime"]>;
	createdAt_gte?: InputMaybe<Scalars["tokens_DateTime"]>;
	createdAt_in?: InputMaybe<Array<Scalars["tokens_DateTime"]>>;
	createdAt_lt?: InputMaybe<Scalars["tokens_DateTime"]>;
	createdAt_lte?: InputMaybe<Scalars["tokens_DateTime"]>;
	createdAt_not_eq?: InputMaybe<Scalars["tokens_DateTime"]>;
	createdAt_not_in?: InputMaybe<Array<Scalars["tokens_DateTime"]>>;
	id_contains?: InputMaybe<Scalars["ID"]>;
	id_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_endsWith?: InputMaybe<Scalars["ID"]>;
	id_eq?: InputMaybe<Scalars["ID"]>;
	id_gt?: InputMaybe<Scalars["ID"]>;
	id_gte?: InputMaybe<Scalars["ID"]>;
	id_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_lt?: InputMaybe<Scalars["ID"]>;
	id_lte?: InputMaybe<Scalars["ID"]>;
	id_not_contains?: InputMaybe<Scalars["ID"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_not_endsWith?: InputMaybe<Scalars["ID"]>;
	id_not_eq?: InputMaybe<Scalars["ID"]>;
	id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_not_startsWith?: InputMaybe<Scalars["ID"]>;
	id_startsWith?: InputMaybe<Scalars["ID"]>;
	nfts_every?: InputMaybe<Tokens_NfTokenWhereInput>;
	nfts_none?: InputMaybe<Tokens_NfTokenWhereInput>;
	nfts_some?: InputMaybe<Tokens_NfTokenWhereInput>;
};

export type Tokens_CollectionWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Tokens_CollectionsConnection = {
	__typename?: "tokens_CollectionsConnection";
	edges: Array<Tokens_CollectionEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export enum Tokens_ContractStandard {
	Erc20 = "ERC20",
	Erc721 = "ERC721",
	Erc1155 = "ERC1155",
}

export type Tokens_FToken = Tokens_Token & {
	__typename?: "tokens_FToken";
	decimals?: Maybe<Scalars["Int"]>;
	id: Scalars["ID"];
	name?: Maybe<Scalars["String"]>;
	symbol?: Maybe<Scalars["String"]>;
};

export type Tokens_FTokenEdge = {
	__typename?: "tokens_FTokenEdge";
	cursor: Scalars["String"];
	node: Tokens_FToken;
};

export enum Tokens_FTokenOrderByInput {
	DecimalsAsc = "decimals_ASC",
	DecimalsDesc = "decimals_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	NameAsc = "name_ASC",
	NameDesc = "name_DESC",
	SymbolAsc = "symbol_ASC",
	SymbolDesc = "symbol_DESC",
}

export type Tokens_FTokenWhereInput = {
	AND?: InputMaybe<Array<Tokens_FTokenWhereInput>>;
	OR?: InputMaybe<Array<Tokens_FTokenWhereInput>>;
	decimals_eq?: InputMaybe<Scalars["Int"]>;
	decimals_gt?: InputMaybe<Scalars["Int"]>;
	decimals_gte?: InputMaybe<Scalars["Int"]>;
	decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
	decimals_isNull?: InputMaybe<Scalars["Boolean"]>;
	decimals_lt?: InputMaybe<Scalars["Int"]>;
	decimals_lte?: InputMaybe<Scalars["Int"]>;
	decimals_not_eq?: InputMaybe<Scalars["Int"]>;
	decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
	id_contains?: InputMaybe<Scalars["ID"]>;
	id_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_endsWith?: InputMaybe<Scalars["ID"]>;
	id_eq?: InputMaybe<Scalars["ID"]>;
	id_gt?: InputMaybe<Scalars["ID"]>;
	id_gte?: InputMaybe<Scalars["ID"]>;
	id_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_lt?: InputMaybe<Scalars["ID"]>;
	id_lte?: InputMaybe<Scalars["ID"]>;
	id_not_contains?: InputMaybe<Scalars["ID"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_not_endsWith?: InputMaybe<Scalars["ID"]>;
	id_not_eq?: InputMaybe<Scalars["ID"]>;
	id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_not_startsWith?: InputMaybe<Scalars["ID"]>;
	id_startsWith?: InputMaybe<Scalars["ID"]>;
	name_contains?: InputMaybe<Scalars["String"]>;
	name_containsInsensitive?: InputMaybe<Scalars["String"]>;
	name_endsWith?: InputMaybe<Scalars["String"]>;
	name_eq?: InputMaybe<Scalars["String"]>;
	name_gt?: InputMaybe<Scalars["String"]>;
	name_gte?: InputMaybe<Scalars["String"]>;
	name_in?: InputMaybe<Array<Scalars["String"]>>;
	name_isNull?: InputMaybe<Scalars["Boolean"]>;
	name_lt?: InputMaybe<Scalars["String"]>;
	name_lte?: InputMaybe<Scalars["String"]>;
	name_not_contains?: InputMaybe<Scalars["String"]>;
	name_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	name_not_endsWith?: InputMaybe<Scalars["String"]>;
	name_not_eq?: InputMaybe<Scalars["String"]>;
	name_not_in?: InputMaybe<Array<Scalars["String"]>>;
	name_not_startsWith?: InputMaybe<Scalars["String"]>;
	name_startsWith?: InputMaybe<Scalars["String"]>;
	symbol_contains?: InputMaybe<Scalars["String"]>;
	symbol_containsInsensitive?: InputMaybe<Scalars["String"]>;
	symbol_endsWith?: InputMaybe<Scalars["String"]>;
	symbol_eq?: InputMaybe<Scalars["String"]>;
	symbol_gt?: InputMaybe<Scalars["String"]>;
	symbol_gte?: InputMaybe<Scalars["String"]>;
	symbol_in?: InputMaybe<Array<Scalars["String"]>>;
	symbol_isNull?: InputMaybe<Scalars["Boolean"]>;
	symbol_lt?: InputMaybe<Scalars["String"]>;
	symbol_lte?: InputMaybe<Scalars["String"]>;
	symbol_not_contains?: InputMaybe<Scalars["String"]>;
	symbol_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	symbol_not_endsWith?: InputMaybe<Scalars["String"]>;
	symbol_not_eq?: InputMaybe<Scalars["String"]>;
	symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
	symbol_not_startsWith?: InputMaybe<Scalars["String"]>;
	symbol_startsWith?: InputMaybe<Scalars["String"]>;
};

export type Tokens_FTokenWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Tokens_FTokensConnection = {
	__typename?: "tokens_FTokensConnection";
	edges: Array<Tokens_FTokenEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export type Tokens_FtTransfer = Tokens_Transfer & {
	__typename?: "tokens_FtTransfer";
	amount?: Maybe<Scalars["tokens_BigInt"]>;
	blockNumber: Scalars["tokens_BigInt"];
	eventIndex: Scalars["Int"];
	from: Tokens_Account;
	id: Scalars["ID"];
	timestamp: Scalars["tokens_DateTime"];
	to: Tokens_Account;
	token: Tokens_FToken;
	transferType?: Maybe<Tokens_TransferType>;
	txnHash: Scalars["String"];
};

export type Tokens_FtTransferEdge = {
	__typename?: "tokens_FtTransferEdge";
	cursor: Scalars["String"];
	node: Tokens_FtTransfer;
};

export enum Tokens_FtTransferOrderByInput {
	AmountAsc = "amount_ASC",
	AmountDesc = "amount_DESC",
	BlockNumberAsc = "blockNumber_ASC",
	BlockNumberDesc = "blockNumber_DESC",
	EventIndexAsc = "eventIndex_ASC",
	EventIndexDesc = "eventIndex_DESC",
	FromIdAsc = "from_id_ASC",
	FromIdDesc = "from_id_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	TimestampAsc = "timestamp_ASC",
	TimestampDesc = "timestamp_DESC",
	ToIdAsc = "to_id_ASC",
	ToIdDesc = "to_id_DESC",
	TokenDecimalsAsc = "token_decimals_ASC",
	TokenDecimalsDesc = "token_decimals_DESC",
	TokenIdAsc = "token_id_ASC",
	TokenIdDesc = "token_id_DESC",
	TokenNameAsc = "token_name_ASC",
	TokenNameDesc = "token_name_DESC",
	TokenSymbolAsc = "token_symbol_ASC",
	TokenSymbolDesc = "token_symbol_DESC",
	TransferTypeAsc = "transferType_ASC",
	TransferTypeDesc = "transferType_DESC",
	TxnHashAsc = "txnHash_ASC",
	TxnHashDesc = "txnHash_DESC",
}

export type Tokens_FtTransferWhereInput = {
	AND?: InputMaybe<Array<Tokens_FtTransferWhereInput>>;
	OR?: InputMaybe<Array<Tokens_FtTransferWhereInput>>;
	amount_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_gt?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_gte?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	amount_isNull?: InputMaybe<Scalars["Boolean"]>;
	amount_lt?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_lte?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_not_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_not_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	blockNumber_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_gt?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_gte?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	blockNumber_lt?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_lte?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_not_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_not_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	eventIndex_eq?: InputMaybe<Scalars["Int"]>;
	eventIndex_gt?: InputMaybe<Scalars["Int"]>;
	eventIndex_gte?: InputMaybe<Scalars["Int"]>;
	eventIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
	eventIndex_lt?: InputMaybe<Scalars["Int"]>;
	eventIndex_lte?: InputMaybe<Scalars["Int"]>;
	eventIndex_not_eq?: InputMaybe<Scalars["Int"]>;
	eventIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
	from?: InputMaybe<Tokens_AccountWhereInput>;
	id_contains?: InputMaybe<Scalars["ID"]>;
	id_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_endsWith?: InputMaybe<Scalars["ID"]>;
	id_eq?: InputMaybe<Scalars["ID"]>;
	id_gt?: InputMaybe<Scalars["ID"]>;
	id_gte?: InputMaybe<Scalars["ID"]>;
	id_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_lt?: InputMaybe<Scalars["ID"]>;
	id_lte?: InputMaybe<Scalars["ID"]>;
	id_not_contains?: InputMaybe<Scalars["ID"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_not_endsWith?: InputMaybe<Scalars["ID"]>;
	id_not_eq?: InputMaybe<Scalars["ID"]>;
	id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_not_startsWith?: InputMaybe<Scalars["ID"]>;
	id_startsWith?: InputMaybe<Scalars["ID"]>;
	timestamp_eq?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_gt?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_gte?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_in?: InputMaybe<Array<Scalars["tokens_DateTime"]>>;
	timestamp_lt?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_lte?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_not_eq?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_not_in?: InputMaybe<Array<Scalars["tokens_DateTime"]>>;
	to?: InputMaybe<Tokens_AccountWhereInput>;
	token?: InputMaybe<Tokens_FTokenWhereInput>;
	transferType_eq?: InputMaybe<Tokens_TransferType>;
	transferType_in?: InputMaybe<Array<Tokens_TransferType>>;
	transferType_isNull?: InputMaybe<Scalars["Boolean"]>;
	transferType_not_eq?: InputMaybe<Tokens_TransferType>;
	transferType_not_in?: InputMaybe<Array<Tokens_TransferType>>;
	txnHash_contains?: InputMaybe<Scalars["String"]>;
	txnHash_containsInsensitive?: InputMaybe<Scalars["String"]>;
	txnHash_endsWith?: InputMaybe<Scalars["String"]>;
	txnHash_eq?: InputMaybe<Scalars["String"]>;
	txnHash_gt?: InputMaybe<Scalars["String"]>;
	txnHash_gte?: InputMaybe<Scalars["String"]>;
	txnHash_in?: InputMaybe<Array<Scalars["String"]>>;
	txnHash_lt?: InputMaybe<Scalars["String"]>;
	txnHash_lte?: InputMaybe<Scalars["String"]>;
	txnHash_not_contains?: InputMaybe<Scalars["String"]>;
	txnHash_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	txnHash_not_endsWith?: InputMaybe<Scalars["String"]>;
	txnHash_not_eq?: InputMaybe<Scalars["String"]>;
	txnHash_not_in?: InputMaybe<Array<Scalars["String"]>>;
	txnHash_not_startsWith?: InputMaybe<Scalars["String"]>;
	txnHash_startsWith?: InputMaybe<Scalars["String"]>;
};

export type Tokens_FtTransferWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Tokens_FtTransfersConnection = {
	__typename?: "tokens_FtTransfersConnection";
	edges: Array<Tokens_FtTransferEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export type Tokens_NfToken = Tokens_Token & {
	__typename?: "tokens_NfToken";
	amount: Scalars["tokens_BigInt"];
	collection: Tokens_Collection;
	currentOwner: Tokens_Account;
	id: Scalars["ID"];
	isBurned: Scalars["Boolean"];
	name?: Maybe<Scalars["String"]>;
	nativeId: Scalars["String"];
	symbol?: Maybe<Scalars["String"]>;
	uri?: Maybe<Scalars["String"]>;
	uriUpdateActions: Array<Tokens_UriUpdateAction>;
};

export type Tokens_NfTokenUriUpdateActionsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Tokens_UriUpdateActionOrderByInput>>>;
	where?: InputMaybe<Tokens_UriUpdateActionWhereInput>;
};

export type Tokens_NfTokenEdge = {
	__typename?: "tokens_NfTokenEdge";
	cursor: Scalars["String"];
	node: Tokens_NfToken;
};

export enum Tokens_NfTokenOrderByInput {
	AmountAsc = "amount_ASC",
	AmountDesc = "amount_DESC",
	CollectionCollectionTypeAsc = "collection_collectionType_ASC",
	CollectionCollectionTypeDesc = "collection_collectionType_DESC",
	CollectionCreatedAtBlockAsc = "collection_createdAtBlock_ASC",
	CollectionCreatedAtBlockDesc = "collection_createdAtBlock_DESC",
	CollectionCreatedAtAsc = "collection_createdAt_ASC",
	CollectionCreatedAtDesc = "collection_createdAt_DESC",
	CollectionIdAsc = "collection_id_ASC",
	CollectionIdDesc = "collection_id_DESC",
	CurrentOwnerIdAsc = "currentOwner_id_ASC",
	CurrentOwnerIdDesc = "currentOwner_id_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	IsBurnedAsc = "isBurned_ASC",
	IsBurnedDesc = "isBurned_DESC",
	NameAsc = "name_ASC",
	NameDesc = "name_DESC",
	NativeIdAsc = "nativeId_ASC",
	NativeIdDesc = "nativeId_DESC",
	SymbolAsc = "symbol_ASC",
	SymbolDesc = "symbol_DESC",
	UriAsc = "uri_ASC",
	UriDesc = "uri_DESC",
}

export type Tokens_NfTokenWhereInput = {
	AND?: InputMaybe<Array<Tokens_NfTokenWhereInput>>;
	OR?: InputMaybe<Array<Tokens_NfTokenWhereInput>>;
	amount_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_gt?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_gte?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	amount_lt?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_lte?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_not_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_not_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	collection?: InputMaybe<Tokens_CollectionWhereInput>;
	currentOwner?: InputMaybe<Tokens_AccountWhereInput>;
	id_contains?: InputMaybe<Scalars["ID"]>;
	id_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_endsWith?: InputMaybe<Scalars["ID"]>;
	id_eq?: InputMaybe<Scalars["ID"]>;
	id_gt?: InputMaybe<Scalars["ID"]>;
	id_gte?: InputMaybe<Scalars["ID"]>;
	id_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_lt?: InputMaybe<Scalars["ID"]>;
	id_lte?: InputMaybe<Scalars["ID"]>;
	id_not_contains?: InputMaybe<Scalars["ID"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_not_endsWith?: InputMaybe<Scalars["ID"]>;
	id_not_eq?: InputMaybe<Scalars["ID"]>;
	id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_not_startsWith?: InputMaybe<Scalars["ID"]>;
	id_startsWith?: InputMaybe<Scalars["ID"]>;
	isBurned_eq?: InputMaybe<Scalars["Boolean"]>;
	isBurned_not_eq?: InputMaybe<Scalars["Boolean"]>;
	name_contains?: InputMaybe<Scalars["String"]>;
	name_containsInsensitive?: InputMaybe<Scalars["String"]>;
	name_endsWith?: InputMaybe<Scalars["String"]>;
	name_eq?: InputMaybe<Scalars["String"]>;
	name_gt?: InputMaybe<Scalars["String"]>;
	name_gte?: InputMaybe<Scalars["String"]>;
	name_in?: InputMaybe<Array<Scalars["String"]>>;
	name_isNull?: InputMaybe<Scalars["Boolean"]>;
	name_lt?: InputMaybe<Scalars["String"]>;
	name_lte?: InputMaybe<Scalars["String"]>;
	name_not_contains?: InputMaybe<Scalars["String"]>;
	name_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	name_not_endsWith?: InputMaybe<Scalars["String"]>;
	name_not_eq?: InputMaybe<Scalars["String"]>;
	name_not_in?: InputMaybe<Array<Scalars["String"]>>;
	name_not_startsWith?: InputMaybe<Scalars["String"]>;
	name_startsWith?: InputMaybe<Scalars["String"]>;
	nativeId_contains?: InputMaybe<Scalars["String"]>;
	nativeId_containsInsensitive?: InputMaybe<Scalars["String"]>;
	nativeId_endsWith?: InputMaybe<Scalars["String"]>;
	nativeId_eq?: InputMaybe<Scalars["String"]>;
	nativeId_gt?: InputMaybe<Scalars["String"]>;
	nativeId_gte?: InputMaybe<Scalars["String"]>;
	nativeId_in?: InputMaybe<Array<Scalars["String"]>>;
	nativeId_lt?: InputMaybe<Scalars["String"]>;
	nativeId_lte?: InputMaybe<Scalars["String"]>;
	nativeId_not_contains?: InputMaybe<Scalars["String"]>;
	nativeId_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	nativeId_not_endsWith?: InputMaybe<Scalars["String"]>;
	nativeId_not_eq?: InputMaybe<Scalars["String"]>;
	nativeId_not_in?: InputMaybe<Array<Scalars["String"]>>;
	nativeId_not_startsWith?: InputMaybe<Scalars["String"]>;
	nativeId_startsWith?: InputMaybe<Scalars["String"]>;
	symbol_contains?: InputMaybe<Scalars["String"]>;
	symbol_containsInsensitive?: InputMaybe<Scalars["String"]>;
	symbol_endsWith?: InputMaybe<Scalars["String"]>;
	symbol_eq?: InputMaybe<Scalars["String"]>;
	symbol_gt?: InputMaybe<Scalars["String"]>;
	symbol_gte?: InputMaybe<Scalars["String"]>;
	symbol_in?: InputMaybe<Array<Scalars["String"]>>;
	symbol_isNull?: InputMaybe<Scalars["Boolean"]>;
	symbol_lt?: InputMaybe<Scalars["String"]>;
	symbol_lte?: InputMaybe<Scalars["String"]>;
	symbol_not_contains?: InputMaybe<Scalars["String"]>;
	symbol_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	symbol_not_endsWith?: InputMaybe<Scalars["String"]>;
	symbol_not_eq?: InputMaybe<Scalars["String"]>;
	symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
	symbol_not_startsWith?: InputMaybe<Scalars["String"]>;
	symbol_startsWith?: InputMaybe<Scalars["String"]>;
	uriUpdateActions_every?: InputMaybe<Tokens_UriUpdateActionWhereInput>;
	uriUpdateActions_none?: InputMaybe<Tokens_UriUpdateActionWhereInput>;
	uriUpdateActions_some?: InputMaybe<Tokens_UriUpdateActionWhereInput>;
	uri_contains?: InputMaybe<Scalars["String"]>;
	uri_containsInsensitive?: InputMaybe<Scalars["String"]>;
	uri_endsWith?: InputMaybe<Scalars["String"]>;
	uri_eq?: InputMaybe<Scalars["String"]>;
	uri_gt?: InputMaybe<Scalars["String"]>;
	uri_gte?: InputMaybe<Scalars["String"]>;
	uri_in?: InputMaybe<Array<Scalars["String"]>>;
	uri_isNull?: InputMaybe<Scalars["Boolean"]>;
	uri_lt?: InputMaybe<Scalars["String"]>;
	uri_lte?: InputMaybe<Scalars["String"]>;
	uri_not_contains?: InputMaybe<Scalars["String"]>;
	uri_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	uri_not_endsWith?: InputMaybe<Scalars["String"]>;
	uri_not_eq?: InputMaybe<Scalars["String"]>;
	uri_not_in?: InputMaybe<Array<Scalars["String"]>>;
	uri_not_startsWith?: InputMaybe<Scalars["String"]>;
	uri_startsWith?: InputMaybe<Scalars["String"]>;
};

export type Tokens_NfTokenWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Tokens_NfTokensConnection = {
	__typename?: "tokens_NfTokensConnection";
	edges: Array<Tokens_NfTokenEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export type Tokens_NftTransfer = Tokens_Transfer & {
	__typename?: "tokens_NftTransfer";
	amount: Scalars["tokens_BigInt"];
	blockNumber: Scalars["tokens_BigInt"];
	eventIndex: Scalars["Int"];
	from: Tokens_Account;
	id: Scalars["ID"];
	isBatch: Scalars["Boolean"];
	operator?: Maybe<Tokens_Account>;
	timestamp: Scalars["tokens_DateTime"];
	to: Tokens_Account;
	token: Tokens_NfToken;
	transferType?: Maybe<Tokens_TransferType>;
	txnHash: Scalars["String"];
};

export type Tokens_NftTransferEdge = {
	__typename?: "tokens_NftTransferEdge";
	cursor: Scalars["String"];
	node: Tokens_NftTransfer;
};

export enum Tokens_NftTransferOrderByInput {
	AmountAsc = "amount_ASC",
	AmountDesc = "amount_DESC",
	BlockNumberAsc = "blockNumber_ASC",
	BlockNumberDesc = "blockNumber_DESC",
	EventIndexAsc = "eventIndex_ASC",
	EventIndexDesc = "eventIndex_DESC",
	FromIdAsc = "from_id_ASC",
	FromIdDesc = "from_id_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	IsBatchAsc = "isBatch_ASC",
	IsBatchDesc = "isBatch_DESC",
	OperatorIdAsc = "operator_id_ASC",
	OperatorIdDesc = "operator_id_DESC",
	TimestampAsc = "timestamp_ASC",
	TimestampDesc = "timestamp_DESC",
	ToIdAsc = "to_id_ASC",
	ToIdDesc = "to_id_DESC",
	TokenAmountAsc = "token_amount_ASC",
	TokenAmountDesc = "token_amount_DESC",
	TokenIdAsc = "token_id_ASC",
	TokenIdDesc = "token_id_DESC",
	TokenIsBurnedAsc = "token_isBurned_ASC",
	TokenIsBurnedDesc = "token_isBurned_DESC",
	TokenNameAsc = "token_name_ASC",
	TokenNameDesc = "token_name_DESC",
	TokenNativeIdAsc = "token_nativeId_ASC",
	TokenNativeIdDesc = "token_nativeId_DESC",
	TokenSymbolAsc = "token_symbol_ASC",
	TokenSymbolDesc = "token_symbol_DESC",
	TokenUriAsc = "token_uri_ASC",
	TokenUriDesc = "token_uri_DESC",
	TransferTypeAsc = "transferType_ASC",
	TransferTypeDesc = "transferType_DESC",
	TxnHashAsc = "txnHash_ASC",
	TxnHashDesc = "txnHash_DESC",
}

export type Tokens_NftTransferWhereInput = {
	AND?: InputMaybe<Array<Tokens_NftTransferWhereInput>>;
	OR?: InputMaybe<Array<Tokens_NftTransferWhereInput>>;
	amount_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_gt?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_gte?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	amount_lt?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_lte?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_not_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	amount_not_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	blockNumber_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_gt?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_gte?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	blockNumber_lt?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_lte?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_not_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_not_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	eventIndex_eq?: InputMaybe<Scalars["Int"]>;
	eventIndex_gt?: InputMaybe<Scalars["Int"]>;
	eventIndex_gte?: InputMaybe<Scalars["Int"]>;
	eventIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
	eventIndex_lt?: InputMaybe<Scalars["Int"]>;
	eventIndex_lte?: InputMaybe<Scalars["Int"]>;
	eventIndex_not_eq?: InputMaybe<Scalars["Int"]>;
	eventIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
	from?: InputMaybe<Tokens_AccountWhereInput>;
	id_contains?: InputMaybe<Scalars["ID"]>;
	id_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_endsWith?: InputMaybe<Scalars["ID"]>;
	id_eq?: InputMaybe<Scalars["ID"]>;
	id_gt?: InputMaybe<Scalars["ID"]>;
	id_gte?: InputMaybe<Scalars["ID"]>;
	id_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_lt?: InputMaybe<Scalars["ID"]>;
	id_lte?: InputMaybe<Scalars["ID"]>;
	id_not_contains?: InputMaybe<Scalars["ID"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_not_endsWith?: InputMaybe<Scalars["ID"]>;
	id_not_eq?: InputMaybe<Scalars["ID"]>;
	id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_not_startsWith?: InputMaybe<Scalars["ID"]>;
	id_startsWith?: InputMaybe<Scalars["ID"]>;
	isBatch_eq?: InputMaybe<Scalars["Boolean"]>;
	isBatch_not_eq?: InputMaybe<Scalars["Boolean"]>;
	operator?: InputMaybe<Tokens_AccountWhereInput>;
	operator_isNull?: InputMaybe<Scalars["Boolean"]>;
	timestamp_eq?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_gt?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_gte?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_in?: InputMaybe<Array<Scalars["tokens_DateTime"]>>;
	timestamp_lt?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_lte?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_not_eq?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_not_in?: InputMaybe<Array<Scalars["tokens_DateTime"]>>;
	to?: InputMaybe<Tokens_AccountWhereInput>;
	token?: InputMaybe<Tokens_NfTokenWhereInput>;
	transferType_eq?: InputMaybe<Tokens_TransferType>;
	transferType_in?: InputMaybe<Array<Tokens_TransferType>>;
	transferType_isNull?: InputMaybe<Scalars["Boolean"]>;
	transferType_not_eq?: InputMaybe<Tokens_TransferType>;
	transferType_not_in?: InputMaybe<Array<Tokens_TransferType>>;
	txnHash_contains?: InputMaybe<Scalars["String"]>;
	txnHash_containsInsensitive?: InputMaybe<Scalars["String"]>;
	txnHash_endsWith?: InputMaybe<Scalars["String"]>;
	txnHash_eq?: InputMaybe<Scalars["String"]>;
	txnHash_gt?: InputMaybe<Scalars["String"]>;
	txnHash_gte?: InputMaybe<Scalars["String"]>;
	txnHash_in?: InputMaybe<Array<Scalars["String"]>>;
	txnHash_lt?: InputMaybe<Scalars["String"]>;
	txnHash_lte?: InputMaybe<Scalars["String"]>;
	txnHash_not_contains?: InputMaybe<Scalars["String"]>;
	txnHash_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	txnHash_not_endsWith?: InputMaybe<Scalars["String"]>;
	txnHash_not_eq?: InputMaybe<Scalars["String"]>;
	txnHash_not_in?: InputMaybe<Array<Scalars["String"]>>;
	txnHash_not_startsWith?: InputMaybe<Scalars["String"]>;
	txnHash_startsWith?: InputMaybe<Scalars["String"]>;
};

export type Tokens_NftTransferWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Tokens_NftTransfersConnection = {
	__typename?: "tokens_NftTransfersConnection";
	edges: Array<Tokens_NftTransferEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export type Tokens_PageInfo = {
	__typename?: "tokens_PageInfo";
	endCursor: Scalars["String"];
	hasNextPage: Scalars["Boolean"];
	hasPreviousPage: Scalars["Boolean"];
	startCursor: Scalars["String"];
};

export type Tokens_Token = {
	id: Scalars["ID"];
	name?: Maybe<Scalars["String"]>;
	symbol?: Maybe<Scalars["String"]>;
};

export type Tokens_Transfer = {
	amount?: Maybe<Scalars["tokens_BigInt"]>;
	blockNumber: Scalars["tokens_BigInt"];
	eventIndex: Scalars["Int"];
	from: Tokens_Account;
	id: Scalars["ID"];
	timestamp: Scalars["tokens_DateTime"];
	to: Tokens_Account;
	transferType?: Maybe<Tokens_TransferType>;
	txnHash: Scalars["String"];
};

export enum Tokens_TransferDirection {
	From = "From",
	To = "To",
}

export enum Tokens_TransferType {
	Burn = "BURN",
	Mint = "MINT",
	Transfer = "TRANSFER",
}

export type Tokens_UriUpdateAction = {
	__typename?: "tokens_UriUpdateAction";
	blockNumber: Scalars["tokens_BigInt"];
	id: Scalars["ID"];
	newValue?: Maybe<Scalars["String"]>;
	oldValue?: Maybe<Scalars["String"]>;
	timestamp: Scalars["tokens_DateTime"];
	token: Tokens_NfToken;
	txnHash: Scalars["String"];
};

export type Tokens_UriUpdateActionEdge = {
	__typename?: "tokens_UriUpdateActionEdge";
	cursor: Scalars["String"];
	node: Tokens_UriUpdateAction;
};

export enum Tokens_UriUpdateActionOrderByInput {
	BlockNumberAsc = "blockNumber_ASC",
	BlockNumberDesc = "blockNumber_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	NewValueAsc = "newValue_ASC",
	NewValueDesc = "newValue_DESC",
	OldValueAsc = "oldValue_ASC",
	OldValueDesc = "oldValue_DESC",
	TimestampAsc = "timestamp_ASC",
	TimestampDesc = "timestamp_DESC",
	TokenAmountAsc = "token_amount_ASC",
	TokenAmountDesc = "token_amount_DESC",
	TokenIdAsc = "token_id_ASC",
	TokenIdDesc = "token_id_DESC",
	TokenIsBurnedAsc = "token_isBurned_ASC",
	TokenIsBurnedDesc = "token_isBurned_DESC",
	TokenNameAsc = "token_name_ASC",
	TokenNameDesc = "token_name_DESC",
	TokenNativeIdAsc = "token_nativeId_ASC",
	TokenNativeIdDesc = "token_nativeId_DESC",
	TokenSymbolAsc = "token_symbol_ASC",
	TokenSymbolDesc = "token_symbol_DESC",
	TokenUriAsc = "token_uri_ASC",
	TokenUriDesc = "token_uri_DESC",
	TxnHashAsc = "txnHash_ASC",
	TxnHashDesc = "txnHash_DESC",
}

export type Tokens_UriUpdateActionWhereInput = {
	AND?: InputMaybe<Array<Tokens_UriUpdateActionWhereInput>>;
	OR?: InputMaybe<Array<Tokens_UriUpdateActionWhereInput>>;
	blockNumber_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_gt?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_gte?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	blockNumber_lt?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_lte?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_not_eq?: InputMaybe<Scalars["tokens_BigInt"]>;
	blockNumber_not_in?: InputMaybe<Array<Scalars["tokens_BigInt"]>>;
	id_contains?: InputMaybe<Scalars["ID"]>;
	id_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_endsWith?: InputMaybe<Scalars["ID"]>;
	id_eq?: InputMaybe<Scalars["ID"]>;
	id_gt?: InputMaybe<Scalars["ID"]>;
	id_gte?: InputMaybe<Scalars["ID"]>;
	id_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_lt?: InputMaybe<Scalars["ID"]>;
	id_lte?: InputMaybe<Scalars["ID"]>;
	id_not_contains?: InputMaybe<Scalars["ID"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["ID"]>;
	id_not_endsWith?: InputMaybe<Scalars["ID"]>;
	id_not_eq?: InputMaybe<Scalars["ID"]>;
	id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
	id_not_startsWith?: InputMaybe<Scalars["ID"]>;
	id_startsWith?: InputMaybe<Scalars["ID"]>;
	newValue_contains?: InputMaybe<Scalars["String"]>;
	newValue_containsInsensitive?: InputMaybe<Scalars["String"]>;
	newValue_endsWith?: InputMaybe<Scalars["String"]>;
	newValue_eq?: InputMaybe<Scalars["String"]>;
	newValue_gt?: InputMaybe<Scalars["String"]>;
	newValue_gte?: InputMaybe<Scalars["String"]>;
	newValue_in?: InputMaybe<Array<Scalars["String"]>>;
	newValue_isNull?: InputMaybe<Scalars["Boolean"]>;
	newValue_lt?: InputMaybe<Scalars["String"]>;
	newValue_lte?: InputMaybe<Scalars["String"]>;
	newValue_not_contains?: InputMaybe<Scalars["String"]>;
	newValue_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	newValue_not_endsWith?: InputMaybe<Scalars["String"]>;
	newValue_not_eq?: InputMaybe<Scalars["String"]>;
	newValue_not_in?: InputMaybe<Array<Scalars["String"]>>;
	newValue_not_startsWith?: InputMaybe<Scalars["String"]>;
	newValue_startsWith?: InputMaybe<Scalars["String"]>;
	oldValue_contains?: InputMaybe<Scalars["String"]>;
	oldValue_containsInsensitive?: InputMaybe<Scalars["String"]>;
	oldValue_endsWith?: InputMaybe<Scalars["String"]>;
	oldValue_eq?: InputMaybe<Scalars["String"]>;
	oldValue_gt?: InputMaybe<Scalars["String"]>;
	oldValue_gte?: InputMaybe<Scalars["String"]>;
	oldValue_in?: InputMaybe<Array<Scalars["String"]>>;
	oldValue_isNull?: InputMaybe<Scalars["Boolean"]>;
	oldValue_lt?: InputMaybe<Scalars["String"]>;
	oldValue_lte?: InputMaybe<Scalars["String"]>;
	oldValue_not_contains?: InputMaybe<Scalars["String"]>;
	oldValue_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	oldValue_not_endsWith?: InputMaybe<Scalars["String"]>;
	oldValue_not_eq?: InputMaybe<Scalars["String"]>;
	oldValue_not_in?: InputMaybe<Array<Scalars["String"]>>;
	oldValue_not_startsWith?: InputMaybe<Scalars["String"]>;
	oldValue_startsWith?: InputMaybe<Scalars["String"]>;
	timestamp_eq?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_gt?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_gte?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_in?: InputMaybe<Array<Scalars["tokens_DateTime"]>>;
	timestamp_lt?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_lte?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_not_eq?: InputMaybe<Scalars["tokens_DateTime"]>;
	timestamp_not_in?: InputMaybe<Array<Scalars["tokens_DateTime"]>>;
	token?: InputMaybe<Tokens_NfTokenWhereInput>;
	txnHash_contains?: InputMaybe<Scalars["String"]>;
	txnHash_containsInsensitive?: InputMaybe<Scalars["String"]>;
	txnHash_endsWith?: InputMaybe<Scalars["String"]>;
	txnHash_eq?: InputMaybe<Scalars["String"]>;
	txnHash_gt?: InputMaybe<Scalars["String"]>;
	txnHash_gte?: InputMaybe<Scalars["String"]>;
	txnHash_in?: InputMaybe<Array<Scalars["String"]>>;
	txnHash_lt?: InputMaybe<Scalars["String"]>;
	txnHash_lte?: InputMaybe<Scalars["String"]>;
	txnHash_not_contains?: InputMaybe<Scalars["String"]>;
	txnHash_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	txnHash_not_endsWith?: InputMaybe<Scalars["String"]>;
	txnHash_not_eq?: InputMaybe<Scalars["String"]>;
	txnHash_not_in?: InputMaybe<Array<Scalars["String"]>>;
	txnHash_not_startsWith?: InputMaybe<Scalars["String"]>;
	txnHash_startsWith?: InputMaybe<Scalars["String"]>;
};

export type Tokens_UriUpdateActionWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Tokens_UriUpdateActionsConnection = {
	__typename?: "tokens_UriUpdateActionsConnection";
	edges: Array<Tokens_UriUpdateActionEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export type TransfersQuery = {
	__typename?: "transfersQuery";
	accountById?: Maybe<Transfers_Account>;
	accountByUniqueInput?: Maybe<Transfers_Account>;
	accounts: Array<Transfers_Account>;
	accountsConnection: Tokens_AccountsConnection;
	squidStatus?: Maybe<Balances_SquidStatus>;
	transferById?: Maybe<Transfers_Transfer>;
	transferByUniqueInput?: Maybe<Transfers_Transfer>;
	transfers: Array<Transfers_Transfer>;
	transfersConnection: Transfers_TransfersConnection;
};

export type TransfersQueryAccountByIdArgs = {
	id: Scalars["String"];
};

export type TransfersQueryAccountByUniqueInputArgs = {
	where: Balances_WhereIdInput;
};

export type TransfersQueryAccountsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Transfers_AccountOrderByInput>>;
	where?: InputMaybe<Transfers_AccountWhereInput>;
};

export type TransfersQueryAccountsConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Transfers_AccountOrderByInput>;
	where?: InputMaybe<Transfers_AccountWhereInput>;
};

export type TransfersQueryTransferByIdArgs = {
	id: Scalars["String"];
};

export type TransfersQueryTransferByUniqueInputArgs = {
	where: Balances_WhereIdInput;
};

export type TransfersQueryTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Transfers_TransferOrderByInput>>;
	where?: InputMaybe<Transfers_TransferWhereInput>;
};

export type TransfersQueryTransfersConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Transfers_TransferOrderByInput>;
	where?: InputMaybe<Transfers_TransferWhereInput>;
};

export type TransfersSubscription = {
	__typename?: "transfersSubscription";
	accountById?: Maybe<Transfers_Account>;
	accounts: Array<Transfers_Account>;
	transferById?: Maybe<Transfers_Transfer>;
	transfers: Array<Transfers_Transfer>;
};

export type TransfersSubscriptionAccountByIdArgs = {
	id: Scalars["String"];
};

export type TransfersSubscriptionAccountsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Transfers_AccountOrderByInput>>;
	where?: InputMaybe<Transfers_AccountWhereInput>;
};

export type TransfersSubscriptionTransferByIdArgs = {
	id: Scalars["String"];
};

export type TransfersSubscriptionTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Transfers_TransferOrderByInput>>;
	where?: InputMaybe<Transfers_TransferWhereInput>;
};

export type Transfers_Account = {
	__typename?: "transfers_Account";
	id: Scalars["String"];
	transfersFrom: Array<Transfers_Transfer>;
	transfersTo: Array<Transfers_Transfer>;
};

export type Transfers_AccountTransfersFromArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Transfers_TransferOrderByInput>>;
	where?: InputMaybe<Transfers_TransferWhereInput>;
};

export type Transfers_AccountTransfersToArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<Transfers_TransferOrderByInput>>;
	where?: InputMaybe<Transfers_TransferWhereInput>;
};

export enum Transfers_AccountOrderByInput {
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
}

export type Transfers_AccountWhereInput = {
	AND?: InputMaybe<Array<Transfers_AccountWhereInput>>;
	OR?: InputMaybe<Array<Transfers_AccountWhereInput>>;
	id_contains?: InputMaybe<Scalars["String"]>;
	id_containsInsensitive?: InputMaybe<Scalars["String"]>;
	id_endsWith?: InputMaybe<Scalars["String"]>;
	id_eq?: InputMaybe<Scalars["String"]>;
	id_gt?: InputMaybe<Scalars["String"]>;
	id_gte?: InputMaybe<Scalars["String"]>;
	id_in?: InputMaybe<Array<Scalars["String"]>>;
	id_isNull?: InputMaybe<Scalars["Boolean"]>;
	id_lt?: InputMaybe<Scalars["String"]>;
	id_lte?: InputMaybe<Scalars["String"]>;
	id_not_contains?: InputMaybe<Scalars["String"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	id_not_endsWith?: InputMaybe<Scalars["String"]>;
	id_not_eq?: InputMaybe<Scalars["String"]>;
	id_not_in?: InputMaybe<Array<Scalars["String"]>>;
	id_not_startsWith?: InputMaybe<Scalars["String"]>;
	id_startsWith?: InputMaybe<Scalars["String"]>;
	transfersFrom_every?: InputMaybe<Transfers_TransferWhereInput>;
	transfersFrom_none?: InputMaybe<Transfers_TransferWhereInput>;
	transfersFrom_some?: InputMaybe<Transfers_TransferWhereInput>;
	transfersTo_every?: InputMaybe<Transfers_TransferWhereInput>;
	transfersTo_none?: InputMaybe<Transfers_TransferWhereInput>;
	transfersTo_some?: InputMaybe<Transfers_TransferWhereInput>;
};

export enum Transfers_AssetStatus {
	Burned = "BURNED",
	Issued = "ISSUED",
	Transferred = "TRANSFERRED",
}

export type Transfers_Transfer = {
	__typename?: "transfers_Transfer";
	amount: Scalars["transfers_BigInt"];
	assetId: Scalars["String"];
	blockNumber: Scalars["Int"];
	extrinsicHash?: Maybe<Scalars["String"]>;
	from: Transfers_Account;
	id: Scalars["String"];
	status: Transfers_AssetStatus;
	timestamp: Scalars["transfers_DateTime"];
	to: Transfers_Account;
};

export type Transfers_TransferEdge = {
	__typename?: "transfers_TransferEdge";
	cursor: Scalars["String"];
	node: Transfers_Transfer;
};

export enum Transfers_TransferOrderByInput {
	AmountAsc = "amount_ASC",
	AmountDesc = "amount_DESC",
	AssetIdAsc = "assetId_ASC",
	AssetIdDesc = "assetId_DESC",
	BlockNumberAsc = "blockNumber_ASC",
	BlockNumberDesc = "blockNumber_DESC",
	ExtrinsicHashAsc = "extrinsicHash_ASC",
	ExtrinsicHashDesc = "extrinsicHash_DESC",
	FromIdAsc = "from_id_ASC",
	FromIdDesc = "from_id_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	StatusAsc = "status_ASC",
	StatusDesc = "status_DESC",
	TimestampAsc = "timestamp_ASC",
	TimestampDesc = "timestamp_DESC",
	ToIdAsc = "to_id_ASC",
	ToIdDesc = "to_id_DESC",
}

export type Transfers_TransferWhereInput = {
	AND?: InputMaybe<Array<Transfers_TransferWhereInput>>;
	OR?: InputMaybe<Array<Transfers_TransferWhereInput>>;
	amount_eq?: InputMaybe<Scalars["transfers_BigInt"]>;
	amount_gt?: InputMaybe<Scalars["transfers_BigInt"]>;
	amount_gte?: InputMaybe<Scalars["transfers_BigInt"]>;
	amount_in?: InputMaybe<Array<Scalars["transfers_BigInt"]>>;
	amount_isNull?: InputMaybe<Scalars["Boolean"]>;
	amount_lt?: InputMaybe<Scalars["transfers_BigInt"]>;
	amount_lte?: InputMaybe<Scalars["transfers_BigInt"]>;
	amount_not_eq?: InputMaybe<Scalars["transfers_BigInt"]>;
	amount_not_in?: InputMaybe<Array<Scalars["transfers_BigInt"]>>;
	assetId_contains?: InputMaybe<Scalars["String"]>;
	assetId_containsInsensitive?: InputMaybe<Scalars["String"]>;
	assetId_endsWith?: InputMaybe<Scalars["String"]>;
	assetId_eq?: InputMaybe<Scalars["String"]>;
	assetId_gt?: InputMaybe<Scalars["String"]>;
	assetId_gte?: InputMaybe<Scalars["String"]>;
	assetId_in?: InputMaybe<Array<Scalars["String"]>>;
	assetId_isNull?: InputMaybe<Scalars["Boolean"]>;
	assetId_lt?: InputMaybe<Scalars["String"]>;
	assetId_lte?: InputMaybe<Scalars["String"]>;
	assetId_not_contains?: InputMaybe<Scalars["String"]>;
	assetId_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	assetId_not_endsWith?: InputMaybe<Scalars["String"]>;
	assetId_not_eq?: InputMaybe<Scalars["String"]>;
	assetId_not_in?: InputMaybe<Array<Scalars["String"]>>;
	assetId_not_startsWith?: InputMaybe<Scalars["String"]>;
	assetId_startsWith?: InputMaybe<Scalars["String"]>;
	blockNumber_eq?: InputMaybe<Scalars["Int"]>;
	blockNumber_gt?: InputMaybe<Scalars["Int"]>;
	blockNumber_gte?: InputMaybe<Scalars["Int"]>;
	blockNumber_in?: InputMaybe<Array<Scalars["Int"]>>;
	blockNumber_isNull?: InputMaybe<Scalars["Boolean"]>;
	blockNumber_lt?: InputMaybe<Scalars["Int"]>;
	blockNumber_lte?: InputMaybe<Scalars["Int"]>;
	blockNumber_not_eq?: InputMaybe<Scalars["Int"]>;
	blockNumber_not_in?: InputMaybe<Array<Scalars["Int"]>>;
	extrinsicHash_contains?: InputMaybe<Scalars["String"]>;
	extrinsicHash_containsInsensitive?: InputMaybe<Scalars["String"]>;
	extrinsicHash_endsWith?: InputMaybe<Scalars["String"]>;
	extrinsicHash_eq?: InputMaybe<Scalars["String"]>;
	extrinsicHash_gt?: InputMaybe<Scalars["String"]>;
	extrinsicHash_gte?: InputMaybe<Scalars["String"]>;
	extrinsicHash_in?: InputMaybe<Array<Scalars["String"]>>;
	extrinsicHash_isNull?: InputMaybe<Scalars["Boolean"]>;
	extrinsicHash_lt?: InputMaybe<Scalars["String"]>;
	extrinsicHash_lte?: InputMaybe<Scalars["String"]>;
	extrinsicHash_not_contains?: InputMaybe<Scalars["String"]>;
	extrinsicHash_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	extrinsicHash_not_endsWith?: InputMaybe<Scalars["String"]>;
	extrinsicHash_not_eq?: InputMaybe<Scalars["String"]>;
	extrinsicHash_not_in?: InputMaybe<Array<Scalars["String"]>>;
	extrinsicHash_not_startsWith?: InputMaybe<Scalars["String"]>;
	extrinsicHash_startsWith?: InputMaybe<Scalars["String"]>;
	from?: InputMaybe<Transfers_AccountWhereInput>;
	from_isNull?: InputMaybe<Scalars["Boolean"]>;
	id_contains?: InputMaybe<Scalars["String"]>;
	id_containsInsensitive?: InputMaybe<Scalars["String"]>;
	id_endsWith?: InputMaybe<Scalars["String"]>;
	id_eq?: InputMaybe<Scalars["String"]>;
	id_gt?: InputMaybe<Scalars["String"]>;
	id_gte?: InputMaybe<Scalars["String"]>;
	id_in?: InputMaybe<Array<Scalars["String"]>>;
	id_isNull?: InputMaybe<Scalars["Boolean"]>;
	id_lt?: InputMaybe<Scalars["String"]>;
	id_lte?: InputMaybe<Scalars["String"]>;
	id_not_contains?: InputMaybe<Scalars["String"]>;
	id_not_containsInsensitive?: InputMaybe<Scalars["String"]>;
	id_not_endsWith?: InputMaybe<Scalars["String"]>;
	id_not_eq?: InputMaybe<Scalars["String"]>;
	id_not_in?: InputMaybe<Array<Scalars["String"]>>;
	id_not_startsWith?: InputMaybe<Scalars["String"]>;
	id_startsWith?: InputMaybe<Scalars["String"]>;
	status_eq?: InputMaybe<Transfers_AssetStatus>;
	status_in?: InputMaybe<Array<Transfers_AssetStatus>>;
	status_isNull?: InputMaybe<Scalars["Boolean"]>;
	status_not_eq?: InputMaybe<Transfers_AssetStatus>;
	status_not_in?: InputMaybe<Array<Transfers_AssetStatus>>;
	timestamp_eq?: InputMaybe<Scalars["transfers_DateTime"]>;
	timestamp_gt?: InputMaybe<Scalars["transfers_DateTime"]>;
	timestamp_gte?: InputMaybe<Scalars["transfers_DateTime"]>;
	timestamp_in?: InputMaybe<Array<Scalars["transfers_DateTime"]>>;
	timestamp_isNull?: InputMaybe<Scalars["Boolean"]>;
	timestamp_lt?: InputMaybe<Scalars["transfers_DateTime"]>;
	timestamp_lte?: InputMaybe<Scalars["transfers_DateTime"]>;
	timestamp_not_eq?: InputMaybe<Scalars["transfers_DateTime"]>;
	timestamp_not_in?: InputMaybe<Array<Scalars["transfers_DateTime"]>>;
	to?: InputMaybe<Transfers_AccountWhereInput>;
	to_isNull?: InputMaybe<Scalars["Boolean"]>;
};

export type Transfers_TransfersConnection = {
	__typename?: "transfers_TransfersConnection";
	edges: Array<Transfers_TransferEdge>;
	pageInfo: Tokens_PageInfo;
	totalCount: Scalars["Int"];
};

export type GetAccountsQueryVariables = Exact<{
	limit: Scalars["Int"];
}>;

export type GetAccountsQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balancesQuery";
		accounts: Array<{
			__typename?: "balances_Account";
			free: any;
			id: string;
			reserved: any;
			total: any;
			updatedAt?: number | null;
		}>;
	} | null;
};

export type GetBalanceQueryVariables = Exact<{
	address: Scalars["String"];
}>;

export type GetBalanceQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balancesQuery";
		accounts: Array<{
			__typename?: "balances_Account";
			total: any;
			reserved: any;
			id: string;
			free: any;
		}>;
	} | null;
};

export type GetBalancesQueryVariables = Exact<{
	limit: Scalars["Int"];
}>;

export type GetBalancesQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balancesQuery";
		accounts: Array<{
			__typename?: "balances_Account";
			free: any;
			id: string;
			reserved: any;
			total: any;
		}>;
	} | null;
};

export type GetBlockQueryVariables = Exact<{
	height: Scalars["Int"];
}>;

export type GetBlockQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archivequery_root";
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
	blockHash?: InputMaybe<Scalars["archive_bpchar"]>;
}>;

export type GetBlockHeightFromHashQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archivequery_root";
		block: Array<{ __typename?: "archive_block"; height: number }>;
	} | null;
};

export type GetBlocksQueryVariables = Exact<{
	limit: Scalars["Int"];
}>;

export type GetBlocksQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archivequery_root";
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
	} | null;
};

export type GetChainDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetChainDataQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balancesQuery";
		currentChainState: {
			__typename?: "balances_ChainStateObject";
			blockNumber: number;
			tokenHolders: number;
		};
	} | null;
	transfers?: {
		__typename?: "transfersQuery";
		transfersConnection: {
			__typename?: "transfers_TransfersConnection";
			totalCount: number;
		};
	} | null;
};

export type GetEvmTransactionsForAddressQueryVariables = Exact<{
	address: Scalars["String"];
}>;

export type GetEvmTransactionsForAddressQuery = {
	__typename?: "query_root";
	evm?: {
		__typename?: "evmQuery";
		transactions: Array<{
			__typename?: "evm_Transaction";
			id: string;
			type: number;
			txHash: string;
			to: string;
			timestamp: any;
			method: string;
			input: any;
			from: string;
			block: number;
		}>;
	} | null;
};

export type GetExtrinsicQueryVariables = Exact<{
	extrinsicId: Scalars["archive_bpchar"];
}>;

export type GetExtrinsicQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archivequery_root";
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
	regex: Scalars["archive_bpchar"];
}>;

export type GetExtrinsicByRegexQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archivequery_root";
		extrinsic: Array<{ __typename?: "archive_extrinsic"; id: any }>;
	} | null;
};

export type GetExtrinsicIdFromHashQueryVariables = Exact<{
	extrinsicHash: Scalars["archive_bpchar"];
}>;

export type GetExtrinsicIdFromHashQuery = {
	__typename?: "query_root";
	archive?: {
		__typename?: "archivequery_root";
		extrinsic: Array<{ __typename?: "archive_extrinsic"; id: any }>;
	} | null;
};

export type GetTransferByHashQueryVariables = Exact<{
	hash: Scalars["String"];
}>;

export type GetTransferByHashQuery = {
	__typename?: "query_root";
	transfers?: {
		__typename?: "transfersQuery";
		transfers: Array<{
			__typename?: "transfers_Transfer";
			id: string;
			amount: any;
			assetId: string;
			blockNumber: number;
			extrinsicHash?: string | null;
			status: Transfers_AssetStatus;
			timestamp: any;
			to: { __typename?: "transfers_Account"; id: string };
			from: { __typename?: "transfers_Account"; id: string };
		}>;
	} | null;
};

export type GetTransfersQueryVariables = Exact<{
	limit: Scalars["Int"];
}>;

export type GetTransfersQuery = {
	__typename?: "query_root";
	transfers?: {
		__typename?: "transfersQuery";
		transfers: Array<{
			__typename?: "transfers_Transfer";
			timestamp: any;
			status: Transfers_AssetStatus;
			id: string;
			extrinsicHash?: string | null;
			blockNumber: number;
			assetId: string;
			amount: any;
			from: { __typename?: "transfers_Account"; id: string };
			to: { __typename?: "transfers_Account"; id: string };
		}>;
	} | null;
};

export type GetTransfersFromAddressQueryVariables = Exact<{
	address?: InputMaybe<Scalars["ID"]>;
}>;

export type GetTransfersFromAddressQuery = {
	__typename?: "query_root";
	tokens?: {
		__typename?: "tokensQuery";
		ftTransfers: Array<{
			__typename?: "tokens_FtTransfer";
			amount?: any | null;
			blockNumber: any;
			timestamp: any;
			transferType?: Tokens_TransferType | null;
			txnHash: string;
			from: { __typename?: "tokens_Account"; id: string };
			to: { __typename?: "tokens_Account"; id: string };
			token: {
				__typename?: "tokens_FToken";
				decimals?: number | null;
				symbol?: string | null;
			};
		}>;
		nftTransfers: Array<{
			__typename?: "tokens_NftTransfer";
			amount: any;
			blockNumber: any;
			timestamp: any;
			transferType?: Tokens_TransferType | null;
			txnHash: string;
			from: { __typename?: "tokens_Account"; id: string };
			to: { __typename?: "tokens_Account"; id: string };
			token: {
				__typename?: "tokens_NfToken";
				symbol?: string | null;
				uri?: string | null;
			};
		}>;
	} | null;
};

export type GetTransfersToAddressQueryVariables = Exact<{
	address?: InputMaybe<Scalars["ID"]>;
}>;

export type GetTransfersToAddressQuery = {
	__typename?: "query_root";
	tokens?: {
		__typename?: "tokensQuery";
		ftTransfers: Array<{
			__typename?: "tokens_FtTransfer";
			amount?: any | null;
			blockNumber: any;
			timestamp: any;
			transferType?: Tokens_TransferType | null;
			txnHash: string;
			from: { __typename?: "tokens_Account"; id: string };
			to: { __typename?: "tokens_Account"; id: string };
			token: {
				__typename?: "tokens_FToken";
				decimals?: number | null;
				symbol?: string | null;
			};
		}>;
		nftTransfers: Array<{
			__typename?: "tokens_NftTransfer";
			amount: any;
			blockNumber: any;
			timestamp: any;
			transferType?: Tokens_TransferType | null;
			txnHash: string;
			from: { __typename?: "tokens_Account"; id: string };
			to: { __typename?: "tokens_Account"; id: string };
			token: {
				__typename?: "tokens_NfToken";
				symbol?: string | null;
				uri?: string | null;
			};
		}>;
	} | null;
};

export const GetAccountsDocument = `
    query GetAccounts($limit: Int!) {
  balances {
    accounts(orderBy: total_DESC, limit: $limit) {
      free
      id
      reserved
      total
      updatedAt
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
    accounts(limit: 1, where: {id_eq: $address}) {
      total
      reserved
      id
      free
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
export const GetBalancesDocument = `
    query GetBalances($limit: Int!) {
  balances {
    accounts(orderBy: total_DESC, limit: $limit) {
      free
      id
      reserved
      total
    }
  }
}
    `;
export const useGetBalancesQuery = <TData = GetBalancesQuery, TError = unknown>(
	client: GraphQLClient,
	variables: GetBalancesQueryVariables,
	options?: UseQueryOptions<GetBalancesQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetBalancesQuery, TError, TData>(
		["GetBalances", variables],
		fetcher<GetBalancesQuery, GetBalancesQueryVariables>(
			client,
			GetBalancesDocument,
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
    query GetBlockHeightFromHash($blockHash: archive_bpchar) {
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
    query GetBlocks($limit: Int!) {
  archive {
    block(order_by: {height: desc}, limit: $limit) {
      hash
      height
      id
      timestamp
      validator
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
      state_root
      spec_id
      parent_hash
      extrinsics_root
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
    currentChainState {
      blockNumber
      tokenHolders
    }
  }
  transfers {
    transfersConnection(orderBy: blockNumber_DESC) {
      totalCount
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
export const GetEvmTransactionsForAddressDocument = `
    query GetEVMTransactionsForAddress($address: String!) {
  evm {
    transactions(
      orderBy: block_DESC
      limit: 10
      where: {OR: {from_eq: $address}, to_eq: $address}
    ) {
      id
      type
      txHash
      to
      timestamp
      method
      input
      from
      block
    }
  }
}
    `;
export const useGetEvmTransactionsForAddressQuery = <
	TData = GetEvmTransactionsForAddressQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetEvmTransactionsForAddressQueryVariables,
	options?: UseQueryOptions<GetEvmTransactionsForAddressQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetEvmTransactionsForAddressQuery, TError, TData>(
		["GetEVMTransactionsForAddress", variables],
		fetcher<
			GetEvmTransactionsForAddressQuery,
			GetEvmTransactionsForAddressQueryVariables
		>(client, GetEvmTransactionsForAddressDocument, variables, headers),
		options
	);
export const GetExtrinsicDocument = `
    query GetExtrinsic($extrinsicId: archive_bpchar!) {
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
    query GetExtrinsicByRegex($regex: archive_bpchar!) {
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
    query GetExtrinsicIdFromHash($extrinsicHash: archive_bpchar!) {
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
export const GetTransferByHashDocument = `
    query GetTransferByHash($hash: String!) {
  transfers {
    transfers(where: {extrinsicHash_eq: $hash}) {
      id
      amount
      assetId
      blockNumber
      extrinsicHash
      status
      timestamp
      to {
        id
      }
      from {
        id
      }
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
  transfers {
    transfers(orderBy: blockNumber_DESC, limit: $limit) {
      timestamp
      status
      id
      extrinsicHash
      blockNumber
      assetId
      amount
      from {
        id
      }
      to {
        id
      }
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
    query GetTransfersFromAddress($address: ID) {
  tokens {
    ftTransfers(
      where: {from: {id_eq: $address}}
      limit: 5
      orderBy: blockNumber_DESC
    ) {
      amount
      blockNumber
      timestamp
      transferType
      txnHash
      from {
        id
      }
      to {
        id
      }
      token {
        decimals
        symbol
      }
    }
    nftTransfers(
      where: {from: {id_eq: $address}}
      limit: 5
      orderBy: blockNumber_DESC
    ) {
      amount
      blockNumber
      timestamp
      transferType
      txnHash
      from {
        id
      }
      to {
        id
      }
      token {
        symbol
        uri
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
	variables?: GetTransfersFromAddressQueryVariables,
	options?: UseQueryOptions<GetTransfersFromAddressQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetTransfersFromAddressQuery, TError, TData>(
		variables === undefined
			? ["GetTransfersFromAddress"]
			: ["GetTransfersFromAddress", variables],
		fetcher<
			GetTransfersFromAddressQuery,
			GetTransfersFromAddressQueryVariables
		>(client, GetTransfersFromAddressDocument, variables, headers),
		options
	);
export const GetTransfersToAddressDocument = `
    query GetTransfersToAddress($address: ID) {
  tokens {
    ftTransfers(where: {to: {id_eq: $address}}, limit: 5, orderBy: blockNumber_DESC) {
      amount
      blockNumber
      timestamp
      transferType
      txnHash
      from {
        id
      }
      to {
        id
      }
      token {
        decimals
        symbol
      }
    }
    nftTransfers(
      where: {to: {id_eq: $address}}
      limit: 5
      orderBy: blockNumber_DESC
    ) {
      amount
      blockNumber
      timestamp
      transferType
      txnHash
      from {
        id
      }
      to {
        id
      }
      token {
        symbol
        uri
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
	variables?: GetTransfersToAddressQueryVariables,
	options?: UseQueryOptions<GetTransfersToAddressQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetTransfersToAddressQuery, TError, TData>(
		variables === undefined
			? ["GetTransfersToAddress"]
			: ["GetTransfersToAddress", variables],
		fetcher<GetTransfersToAddressQuery, GetTransfersToAddressQueryVariables>(
			client,
			GetTransfersToAddressDocument,
			variables,
			headers
		),
		options
	);
