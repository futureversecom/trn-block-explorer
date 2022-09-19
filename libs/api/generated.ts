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
	bpchar: any;
	/** Big number integer */
	erc_BigInt: any;
	/** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
	erc_DateTime: any;
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

export type Archive_Archive_Mutation_Frontend = {
	__typename?: "archive_archive_mutation_frontend";
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
	/** delete data from the table: "metadata" */
	delete_metadata?: Maybe<Archive_Metadata_Mutation_Response>;
	/** delete single row from the table: "metadata" */
	delete_metadata_by_pk?: Maybe<Archive_Metadata>;
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
	/** insert data into the table: "metadata" */
	insert_metadata?: Maybe<Archive_Metadata_Mutation_Response>;
	/** insert a single row into the table: "metadata" */
	insert_metadata_one?: Maybe<Archive_Metadata>;
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
	/** update data of the table: "metadata" */
	update_metadata?: Maybe<Archive_Metadata_Mutation_Response>;
	/** update single row of the table: "metadata" */
	update_metadata_by_pk?: Maybe<Archive_Metadata>;
	/** update multiples rows of table: "metadata" */
	update_metadata_many?: Maybe<
		Array<Maybe<Archive_Metadata_Mutation_Response>>
	>;
};

export type Archive_Archive_Mutation_FrontendDelete_BlockArgs = {
	where: Archive_Block_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendDelete_Block_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Archive_Archive_Mutation_FrontendDelete_CallArgs = {
	where: Archive_Call_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendDelete_Call_By_PkArgs = {
	id: Scalars["String"];
};

export type Archive_Archive_Mutation_FrontendDelete_Contracts_Contract_EmittedArgs =
	{
		where: Archive_Contracts_Contract_Emitted_Bool_Exp;
	};

export type Archive_Archive_Mutation_FrontendDelete_Contracts_Contract_Emitted_By_PkArgs =
	{
		event_id: Scalars["bpchar"];
	};

export type Archive_Archive_Mutation_FrontendDelete_EventArgs = {
	where: Archive_Event_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendDelete_Event_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Archive_Archive_Mutation_FrontendDelete_ExtrinsicArgs = {
	where: Archive_Extrinsic_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendDelete_Extrinsic_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Archive_Archive_Mutation_FrontendDelete_Frontier_Ethereum_TransactionArgs =
	{
		where: Archive_Frontier_Ethereum_Transaction_Bool_Exp;
	};

export type Archive_Archive_Mutation_FrontendDelete_Frontier_Ethereum_Transaction_By_PkArgs =
	{
		call_id: Scalars["String"];
	};

export type Archive_Archive_Mutation_FrontendDelete_Frontier_Evm_LogArgs = {
	where: Archive_Frontier_Evm_Log_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendDelete_Frontier_Evm_Log_By_PkArgs =
	{
		event_id: Scalars["bpchar"];
	};

export type Archive_Archive_Mutation_FrontendDelete_MetadataArgs = {
	where: Archive_Metadata_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendDelete_Metadata_By_PkArgs = {
	id: Scalars["String"];
};

export type Archive_Archive_Mutation_FrontendInsert_BlockArgs = {
	objects: Array<Archive_Block_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Block_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendInsert_Block_OneArgs = {
	object: Archive_Block_Insert_Input;
	on_conflict?: InputMaybe<Archive_Block_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendInsert_CallArgs = {
	objects: Array<Archive_Call_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Call_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendInsert_Call_OneArgs = {
	object: Archive_Call_Insert_Input;
	on_conflict?: InputMaybe<Archive_Call_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendInsert_Contracts_Contract_EmittedArgs =
	{
		objects: Array<Archive_Contracts_Contract_Emitted_Insert_Input>;
		on_conflict?: InputMaybe<Archive_Contracts_Contract_Emitted_On_Conflict>;
	};

export type Archive_Archive_Mutation_FrontendInsert_Contracts_Contract_Emitted_OneArgs =
	{
		object: Archive_Contracts_Contract_Emitted_Insert_Input;
		on_conflict?: InputMaybe<Archive_Contracts_Contract_Emitted_On_Conflict>;
	};

export type Archive_Archive_Mutation_FrontendInsert_EventArgs = {
	objects: Array<Archive_Event_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Event_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendInsert_Event_OneArgs = {
	object: Archive_Event_Insert_Input;
	on_conflict?: InputMaybe<Archive_Event_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendInsert_ExtrinsicArgs = {
	objects: Array<Archive_Extrinsic_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Extrinsic_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendInsert_Extrinsic_OneArgs = {
	object: Archive_Extrinsic_Insert_Input;
	on_conflict?: InputMaybe<Archive_Extrinsic_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendInsert_Frontier_Ethereum_TransactionArgs =
	{
		objects: Array<Archive_Frontier_Ethereum_Transaction_Insert_Input>;
		on_conflict?: InputMaybe<Archive_Frontier_Ethereum_Transaction_On_Conflict>;
	};

export type Archive_Archive_Mutation_FrontendInsert_Frontier_Ethereum_Transaction_OneArgs =
	{
		object: Archive_Frontier_Ethereum_Transaction_Insert_Input;
		on_conflict?: InputMaybe<Archive_Frontier_Ethereum_Transaction_On_Conflict>;
	};

export type Archive_Archive_Mutation_FrontendInsert_Frontier_Evm_LogArgs = {
	objects: Array<Archive_Frontier_Evm_Log_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Frontier_Evm_Log_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendInsert_Frontier_Evm_Log_OneArgs = {
	object: Archive_Frontier_Evm_Log_Insert_Input;
	on_conflict?: InputMaybe<Archive_Frontier_Evm_Log_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendInsert_MetadataArgs = {
	objects: Array<Archive_Metadata_Insert_Input>;
	on_conflict?: InputMaybe<Archive_Metadata_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendInsert_Metadata_OneArgs = {
	object: Archive_Metadata_Insert_Input;
	on_conflict?: InputMaybe<Archive_Metadata_On_Conflict>;
};

export type Archive_Archive_Mutation_FrontendUpdate_BlockArgs = {
	_inc?: InputMaybe<Archive_Block_Inc_Input>;
	_set?: InputMaybe<Archive_Block_Set_Input>;
	where: Archive_Block_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendUpdate_Block_By_PkArgs = {
	_inc?: InputMaybe<Archive_Block_Inc_Input>;
	_set?: InputMaybe<Archive_Block_Set_Input>;
	pk_columns: Archive_Block_Pk_Columns_Input;
};

export type Archive_Archive_Mutation_FrontendUpdate_Block_ManyArgs = {
	updates: Array<Archive_Block_Updates>;
};

export type Archive_Archive_Mutation_FrontendUpdate_CallArgs = {
	_append?: InputMaybe<Archive_Call_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Call_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Call_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Call_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Call_Inc_Input>;
	_prepend?: InputMaybe<Archive_Call_Prepend_Input>;
	_set?: InputMaybe<Archive_Call_Set_Input>;
	where: Archive_Call_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendUpdate_Call_By_PkArgs = {
	_append?: InputMaybe<Archive_Call_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Call_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Call_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Call_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Call_Inc_Input>;
	_prepend?: InputMaybe<Archive_Call_Prepend_Input>;
	_set?: InputMaybe<Archive_Call_Set_Input>;
	pk_columns: Archive_Call_Pk_Columns_Input;
};

export type Archive_Archive_Mutation_FrontendUpdate_Call_ManyArgs = {
	updates: Array<Archive_Call_Updates>;
};

export type Archive_Archive_Mutation_FrontendUpdate_Contracts_Contract_EmittedArgs =
	{
		_set?: InputMaybe<Archive_Contracts_Contract_Emitted_Set_Input>;
		where: Archive_Contracts_Contract_Emitted_Bool_Exp;
	};

export type Archive_Archive_Mutation_FrontendUpdate_Contracts_Contract_Emitted_By_PkArgs =
	{
		_set?: InputMaybe<Archive_Contracts_Contract_Emitted_Set_Input>;
		pk_columns: Archive_Contracts_Contract_Emitted_Pk_Columns_Input;
	};

export type Archive_Archive_Mutation_FrontendUpdate_Contracts_Contract_Emitted_ManyArgs =
	{
		updates: Array<Archive_Contracts_Contract_Emitted_Updates>;
	};

export type Archive_Archive_Mutation_FrontendUpdate_EventArgs = {
	_append?: InputMaybe<Archive_Event_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Event_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Event_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Event_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Event_Inc_Input>;
	_prepend?: InputMaybe<Archive_Event_Prepend_Input>;
	_set?: InputMaybe<Archive_Event_Set_Input>;
	where: Archive_Event_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendUpdate_Event_By_PkArgs = {
	_append?: InputMaybe<Archive_Event_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Event_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Event_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Event_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Event_Inc_Input>;
	_prepend?: InputMaybe<Archive_Event_Prepend_Input>;
	_set?: InputMaybe<Archive_Event_Set_Input>;
	pk_columns: Archive_Event_Pk_Columns_Input;
};

export type Archive_Archive_Mutation_FrontendUpdate_Event_ManyArgs = {
	updates: Array<Archive_Event_Updates>;
};

export type Archive_Archive_Mutation_FrontendUpdate_ExtrinsicArgs = {
	_append?: InputMaybe<Archive_Extrinsic_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Extrinsic_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Extrinsic_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Extrinsic_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Extrinsic_Inc_Input>;
	_prepend?: InputMaybe<Archive_Extrinsic_Prepend_Input>;
	_set?: InputMaybe<Archive_Extrinsic_Set_Input>;
	where: Archive_Extrinsic_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendUpdate_Extrinsic_By_PkArgs = {
	_append?: InputMaybe<Archive_Extrinsic_Append_Input>;
	_delete_at_path?: InputMaybe<Archive_Extrinsic_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Archive_Extrinsic_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Archive_Extrinsic_Delete_Key_Input>;
	_inc?: InputMaybe<Archive_Extrinsic_Inc_Input>;
	_prepend?: InputMaybe<Archive_Extrinsic_Prepend_Input>;
	_set?: InputMaybe<Archive_Extrinsic_Set_Input>;
	pk_columns: Archive_Extrinsic_Pk_Columns_Input;
};

export type Archive_Archive_Mutation_FrontendUpdate_Extrinsic_ManyArgs = {
	updates: Array<Archive_Extrinsic_Updates>;
};

export type Archive_Archive_Mutation_FrontendUpdate_Frontier_Ethereum_TransactionArgs =
	{
		_set?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Set_Input>;
		where: Archive_Frontier_Ethereum_Transaction_Bool_Exp;
	};

export type Archive_Archive_Mutation_FrontendUpdate_Frontier_Ethereum_Transaction_By_PkArgs =
	{
		_set?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Set_Input>;
		pk_columns: Archive_Frontier_Ethereum_Transaction_Pk_Columns_Input;
	};

export type Archive_Archive_Mutation_FrontendUpdate_Frontier_Ethereum_Transaction_ManyArgs =
	{
		updates: Array<Archive_Frontier_Ethereum_Transaction_Updates>;
	};

export type Archive_Archive_Mutation_FrontendUpdate_Frontier_Evm_LogArgs = {
	_set?: InputMaybe<Archive_Frontier_Evm_Log_Set_Input>;
	where: Archive_Frontier_Evm_Log_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendUpdate_Frontier_Evm_Log_By_PkArgs =
	{
		_set?: InputMaybe<Archive_Frontier_Evm_Log_Set_Input>;
		pk_columns: Archive_Frontier_Evm_Log_Pk_Columns_Input;
	};

export type Archive_Archive_Mutation_FrontendUpdate_Frontier_Evm_Log_ManyArgs =
	{
		updates: Array<Archive_Frontier_Evm_Log_Updates>;
	};

export type Archive_Archive_Mutation_FrontendUpdate_MetadataArgs = {
	_inc?: InputMaybe<Archive_Metadata_Inc_Input>;
	_set?: InputMaybe<Archive_Metadata_Set_Input>;
	where: Archive_Metadata_Bool_Exp;
};

export type Archive_Archive_Mutation_FrontendUpdate_Metadata_By_PkArgs = {
	_inc?: InputMaybe<Archive_Metadata_Inc_Input>;
	_set?: InputMaybe<Archive_Metadata_Set_Input>;
	pk_columns: Archive_Metadata_Pk_Columns_Input;
};

export type Archive_Archive_Mutation_FrontendUpdate_Metadata_ManyArgs = {
	updates: Array<Archive_Metadata_Updates>;
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

/** primary key columns input for table: block */
export type Archive_Block_Pk_Columns_Input = {
	id: Scalars["bpchar"];
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Archive_Call_Append_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
	error?: InputMaybe<Scalars["jsonb"]>;
	origin?: InputMaybe<Scalars["jsonb"]>;
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
	args?: InputMaybe<Scalars["jsonb"]>;
	block?: InputMaybe<Archive_Block_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["bpchar"]>;
	call?: InputMaybe<Archive_Call_Obj_Rel_Insert_Input>;
	calls?: InputMaybe<Archive_Call_Arr_Rel_Insert_Input>;
	error?: InputMaybe<Scalars["jsonb"]>;
	events?: InputMaybe<Archive_Event_Arr_Rel_Insert_Input>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Obj_Rel_Insert_Input>;
	extrinsic_id?: InputMaybe<Scalars["bpchar"]>;
	frontier_ethereum_transactions?: InputMaybe<Archive_Frontier_Ethereum_Transaction_Arr_Rel_Insert_Input>;
	id?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	origin?: InputMaybe<Scalars["jsonb"]>;
	parent_id?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
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

/** primary key columns input for table: call */
export type Archive_Call_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Archive_Call_Prepend_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
	error?: InputMaybe<Scalars["jsonb"]>;
	origin?: InputMaybe<Scalars["jsonb"]>;
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

/** input type for inserting array relation for remote table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Arr_Rel_Insert_Input = {
	data: Array<Archive_Contracts_Contract_Emitted_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Contracts_Contract_Emitted_On_Conflict>;
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

/** unique or primary key constraints on table "contracts_contract_emitted" */
export enum Archive_Contracts_Contract_Emitted_Constraint {
	/** unique or primary key constraint on columns "event_id" */
	ContractsContractEmittedPkey = "contracts_contract_emitted_pkey",
}

/** input type for inserting data into table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Insert_Input = {
	contract?: InputMaybe<Scalars["String"]>;
	event?: InputMaybe<Archive_Event_Obj_Rel_Insert_Input>;
	event_id?: InputMaybe<Scalars["bpchar"]>;
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

/** response of any mutation on the table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_Mutation_Response = {
	__typename?: "archive_contracts_contract_emitted_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Contracts_Contract_Emitted>;
};

/** on_conflict condition type for table "contracts_contract_emitted" */
export type Archive_Contracts_Contract_Emitted_On_Conflict = {
	constraint: Archive_Contracts_Contract_Emitted_Constraint;
	update_columns?: Array<Archive_Contracts_Contract_Emitted_Update_Column>;
	where?: InputMaybe<Archive_Contracts_Contract_Emitted_Bool_Exp>;
};

/** Ordering options when selecting data from "contracts_contract_emitted". */
export type Archive_Contracts_Contract_Emitted_Order_By = {
	contract?: InputMaybe<Order_By>;
	event?: InputMaybe<Archive_Event_Order_By>;
	event_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contracts_contract_emitted */
export type Archive_Contracts_Contract_Emitted_Pk_Columns_Input = {
	event_id: Scalars["bpchar"];
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
	event_id?: InputMaybe<Scalars["bpchar"]>;
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
	event_id?: InputMaybe<Scalars["bpchar"]>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Archive_Event_Append_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
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
	args?: InputMaybe<Scalars["jsonb"]>;
	block?: InputMaybe<Archive_Block_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["bpchar"]>;
	call?: InputMaybe<Archive_Call_Obj_Rel_Insert_Input>;
	call_id?: InputMaybe<Scalars["String"]>;
	contracts_contract_emitteds?: InputMaybe<Archive_Contracts_Contract_Emitted_Arr_Rel_Insert_Input>;
	extrinsic?: InputMaybe<Archive_Extrinsic_Obj_Rel_Insert_Input>;
	extrinsic_id?: InputMaybe<Scalars["bpchar"]>;
	frontier_evm_logs?: InputMaybe<Archive_Frontier_Evm_Log_Arr_Rel_Insert_Input>;
	id?: InputMaybe<Scalars["bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	name?: InputMaybe<Scalars["String"]>;
	phase?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
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

/** primary key columns input for table: event */
export type Archive_Event_Pk_Columns_Input = {
	id: Scalars["bpchar"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Archive_Event_Prepend_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Archive_Extrinsic_Append_Input = {
	error?: InputMaybe<Scalars["jsonb"]>;
	signature?: InputMaybe<Scalars["jsonb"]>;
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
	fee?: InputMaybe<Scalars["numeric"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	tip?: InputMaybe<Scalars["numeric"]>;
	version?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "extrinsic" */
export type Archive_Extrinsic_Insert_Input = {
	block?: InputMaybe<Archive_Block_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["bpchar"]>;
	call_id?: InputMaybe<Scalars["String"]>;
	calls?: InputMaybe<Archive_Call_Arr_Rel_Insert_Input>;
	error?: InputMaybe<Scalars["jsonb"]>;
	events?: InputMaybe<Archive_Event_Arr_Rel_Insert_Input>;
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

/** primary key columns input for table: extrinsic */
export type Archive_Extrinsic_Pk_Columns_Input = {
	id: Scalars["bpchar"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Archive_Extrinsic_Prepend_Input = {
	error?: InputMaybe<Scalars["jsonb"]>;
	signature?: InputMaybe<Scalars["jsonb"]>;
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

/** input type for inserting array relation for remote table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Arr_Rel_Insert_Input = {
	data: Array<Archive_Frontier_Ethereum_Transaction_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Frontier_Ethereum_Transaction_On_Conflict>;
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

/** unique or primary key constraints on table "frontier_ethereum_transaction" */
export enum Archive_Frontier_Ethereum_Transaction_Constraint {
	/** unique or primary key constraint on columns "call_id" */
	FrontierEthereumTransactionPkey = "frontier_ethereum_transaction_pkey",
}

/** input type for inserting data into table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Insert_Input = {
	call?: InputMaybe<Archive_Call_Obj_Rel_Insert_Input>;
	call_id?: InputMaybe<Scalars["String"]>;
	contract?: InputMaybe<Scalars["bpchar"]>;
	sighash?: InputMaybe<Scalars["String"]>;
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

/** response of any mutation on the table "frontier_ethereum_transaction" */
export type Archive_Frontier_Ethereum_Transaction_Mutation_Response = {
	__typename?: "archive_frontier_ethereum_transaction_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Frontier_Ethereum_Transaction>;
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
	call_id?: InputMaybe<Order_By>;
	contract?: InputMaybe<Order_By>;
	sighash?: InputMaybe<Order_By>;
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
	contract?: InputMaybe<Scalars["bpchar"]>;
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
	contract?: InputMaybe<Scalars["bpchar"]>;
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

/** input type for inserting array relation for remote table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Arr_Rel_Insert_Input = {
	data: Array<Archive_Frontier_Evm_Log_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Archive_Frontier_Evm_Log_On_Conflict>;
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

/** unique or primary key constraints on table "frontier_evm_log" */
export enum Archive_Frontier_Evm_Log_Constraint {
	/** unique or primary key constraint on columns "event_id" */
	FrontierEvmLogPkey = "frontier_evm_log_pkey",
}

/** input type for inserting data into table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Insert_Input = {
	contract?: InputMaybe<Scalars["bpchar"]>;
	event?: InputMaybe<Archive_Event_Obj_Rel_Insert_Input>;
	event_id?: InputMaybe<Scalars["bpchar"]>;
	topic0?: InputMaybe<Scalars["bpchar"]>;
	topic1?: InputMaybe<Scalars["bpchar"]>;
	topic2?: InputMaybe<Scalars["bpchar"]>;
	topic3?: InputMaybe<Scalars["bpchar"]>;
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

/** response of any mutation on the table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_Mutation_Response = {
	__typename?: "archive_frontier_evm_log_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Archive_Frontier_Evm_Log>;
};

/** on_conflict condition type for table "frontier_evm_log" */
export type Archive_Frontier_Evm_Log_On_Conflict = {
	constraint: Archive_Frontier_Evm_Log_Constraint;
	update_columns?: Array<Archive_Frontier_Evm_Log_Update_Column>;
	where?: InputMaybe<Archive_Frontier_Evm_Log_Bool_Exp>;
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

/** primary key columns input for table: frontier_evm_log */
export type Archive_Frontier_Evm_Log_Pk_Columns_Input = {
	event_id: Scalars["bpchar"];
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
	contract?: InputMaybe<Scalars["bpchar"]>;
	event_id?: InputMaybe<Scalars["bpchar"]>;
	topic0?: InputMaybe<Scalars["bpchar"]>;
	topic1?: InputMaybe<Scalars["bpchar"]>;
	topic2?: InputMaybe<Scalars["bpchar"]>;
	topic3?: InputMaybe<Scalars["bpchar"]>;
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
	contract?: InputMaybe<Scalars["bpchar"]>;
	event_id?: InputMaybe<Scalars["bpchar"]>;
	topic0?: InputMaybe<Scalars["bpchar"]>;
	topic1?: InputMaybe<Scalars["bpchar"]>;
	topic2?: InputMaybe<Scalars["bpchar"]>;
	topic3?: InputMaybe<Scalars["bpchar"]>;
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
	block_hash?: InputMaybe<Scalars["bpchar"]>;
	block_height?: InputMaybe<Scalars["Int"]>;
	hex?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	spec_name?: InputMaybe<Scalars["String"]>;
	spec_version?: InputMaybe<Scalars["Int"]>;
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
	block_hash?: InputMaybe<Order_By>;
	block_height?: InputMaybe<Order_By>;
	hex?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	spec_name?: InputMaybe<Order_By>;
	spec_version?: InputMaybe<Order_By>;
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
	block_hash?: InputMaybe<Scalars["bpchar"]>;
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

/** columns and relationships of "squid_processor.account" */
export type Balances_Account = {
	__typename?: "balances_account";
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
	free?: InputMaybe<Numeric_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	reserved?: InputMaybe<Numeric_Comparison_Exp>;
	total?: InputMaybe<Numeric_Comparison_Exp>;
	transfers?: InputMaybe<Balances_Transfer_Bool_Exp>;
	transfersByFromId?: InputMaybe<Balances_Transfer_Bool_Exp>;
	updated_at?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "squid_processor.account" */
export enum Balances_Account_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_54115ee388cdb6d86bb4bf5b2ea = "PK_54115ee388cdb6d86bb4bf5b2ea",
}

/** input type for incrementing numeric columns in table "squid_processor.account" */
export type Balances_Account_Inc_Input = {
	free?: InputMaybe<Scalars["numeric"]>;
	reserved?: InputMaybe<Scalars["numeric"]>;
	total?: InputMaybe<Scalars["numeric"]>;
	updated_at?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "squid_processor.account" */
export type Balances_Account_Insert_Input = {
	free?: InputMaybe<Scalars["numeric"]>;
	id?: InputMaybe<Scalars["String"]>;
	reserved?: InputMaybe<Scalars["numeric"]>;
	total?: InputMaybe<Scalars["numeric"]>;
	transfers?: InputMaybe<Balances_Transfer_Arr_Rel_Insert_Input>;
	transfersByFromId?: InputMaybe<Balances_Transfer_Arr_Rel_Insert_Input>;
	updated_at?: InputMaybe<Scalars["Int"]>;
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

/** response of any mutation on the table "squid_processor.account" */
export type Balances_Account_Mutation_Response = {
	__typename?: "balances_account_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Balances_Account>;
};

/** input type for inserting object relation for remote table "squid_processor.account" */
export type Balances_Account_Obj_Rel_Insert_Input = {
	data: Balances_Account_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Balances_Account_On_Conflict>;
};

/** on_conflict condition type for table "squid_processor.account" */
export type Balances_Account_On_Conflict = {
	constraint: Balances_Account_Constraint;
	update_columns?: Array<Balances_Account_Update_Column>;
	where?: InputMaybe<Balances_Account_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_processor.account". */
export type Balances_Account_Order_By = {
	free?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	reserved?: InputMaybe<Order_By>;
	total?: InputMaybe<Order_By>;
	transfersByFromId_aggregate?: InputMaybe<Balances_Transfer_Aggregate_Order_By>;
	transfers_aggregate?: InputMaybe<Balances_Transfer_Aggregate_Order_By>;
	updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account */
export type Balances_Account_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "squid_processor.account" */
export enum Balances_Account_Select_Column {
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

/** input type for updating data in table "squid_processor.account" */
export type Balances_Account_Set_Input = {
	free?: InputMaybe<Scalars["numeric"]>;
	id?: InputMaybe<Scalars["String"]>;
	reserved?: InputMaybe<Scalars["numeric"]>;
	total?: InputMaybe<Scalars["numeric"]>;
	updated_at?: InputMaybe<Scalars["Int"]>;
};

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

/** update columns of table "squid_processor.account" */
export enum Balances_Account_Update_Column {
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

export type Balances_Account_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Balances_Account_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Balances_Account_Set_Input>;
	where: Balances_Account_Bool_Exp;
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

export type Balances_Balances_Mutation_Frontend = {
	__typename?: "balances_balances_mutation_frontend";
	/** delete data from the table: "squid_processor.account" */
	delete_account?: Maybe<Balances_Account_Mutation_Response>;
	/** delete single row from the table: "squid_processor.account" */
	delete_account_by_pk?: Maybe<Balances_Account>;
	/** delete data from the table: "squid_processor.chain_state" */
	delete_chain_state?: Maybe<Balances_Chain_State_Mutation_Response>;
	/** delete single row from the table: "squid_processor.chain_state" */
	delete_chain_state_by_pk?: Maybe<Balances_Chain_State>;
	/** delete data from the table: "squid_processor.transfer" */
	delete_transfer?: Maybe<Balances_Transfer_Mutation_Response>;
	/** delete single row from the table: "squid_processor.transfer" */
	delete_transfer_by_pk?: Maybe<Balances_Transfer>;
	/** insert data into the table: "squid_processor.account" */
	insert_account?: Maybe<Balances_Account_Mutation_Response>;
	/** insert a single row into the table: "squid_processor.account" */
	insert_account_one?: Maybe<Balances_Account>;
	/** insert data into the table: "squid_processor.chain_state" */
	insert_chain_state?: Maybe<Balances_Chain_State_Mutation_Response>;
	/** insert a single row into the table: "squid_processor.chain_state" */
	insert_chain_state_one?: Maybe<Balances_Chain_State>;
	/** insert data into the table: "squid_processor.transfer" */
	insert_transfer?: Maybe<Balances_Transfer_Mutation_Response>;
	/** insert a single row into the table: "squid_processor.transfer" */
	insert_transfer_one?: Maybe<Balances_Transfer>;
	/** update data of the table: "squid_processor.account" */
	update_account?: Maybe<Balances_Account_Mutation_Response>;
	/** update single row of the table: "squid_processor.account" */
	update_account_by_pk?: Maybe<Balances_Account>;
	/** update multiples rows of table: "squid_processor.account" */
	update_account_many?: Maybe<Array<Maybe<Balances_Account_Mutation_Response>>>;
	/** update data of the table: "squid_processor.chain_state" */
	update_chain_state?: Maybe<Balances_Chain_State_Mutation_Response>;
	/** update single row of the table: "squid_processor.chain_state" */
	update_chain_state_by_pk?: Maybe<Balances_Chain_State>;
	/** update multiples rows of table: "squid_processor.chain_state" */
	update_chain_state_many?: Maybe<
		Array<Maybe<Balances_Chain_State_Mutation_Response>>
	>;
	/** update data of the table: "squid_processor.transfer" */
	update_transfer?: Maybe<Balances_Transfer_Mutation_Response>;
	/** update single row of the table: "squid_processor.transfer" */
	update_transfer_by_pk?: Maybe<Balances_Transfer>;
	/** update multiples rows of table: "squid_processor.transfer" */
	update_transfer_many?: Maybe<
		Array<Maybe<Balances_Transfer_Mutation_Response>>
	>;
};

export type Balances_Balances_Mutation_FrontendDelete_AccountArgs = {
	where: Balances_Account_Bool_Exp;
};

export type Balances_Balances_Mutation_FrontendDelete_Account_By_PkArgs = {
	id: Scalars["String"];
};

export type Balances_Balances_Mutation_FrontendDelete_Chain_StateArgs = {
	where: Balances_Chain_State_Bool_Exp;
};

export type Balances_Balances_Mutation_FrontendDelete_Chain_State_By_PkArgs = {
	id: Scalars["String"];
};

export type Balances_Balances_Mutation_FrontendDelete_TransferArgs = {
	where: Balances_Transfer_Bool_Exp;
};

export type Balances_Balances_Mutation_FrontendDelete_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Balances_Balances_Mutation_FrontendInsert_AccountArgs = {
	objects: Array<Balances_Account_Insert_Input>;
	on_conflict?: InputMaybe<Balances_Account_On_Conflict>;
};

export type Balances_Balances_Mutation_FrontendInsert_Account_OneArgs = {
	object: Balances_Account_Insert_Input;
	on_conflict?: InputMaybe<Balances_Account_On_Conflict>;
};

export type Balances_Balances_Mutation_FrontendInsert_Chain_StateArgs = {
	objects: Array<Balances_Chain_State_Insert_Input>;
	on_conflict?: InputMaybe<Balances_Chain_State_On_Conflict>;
};

export type Balances_Balances_Mutation_FrontendInsert_Chain_State_OneArgs = {
	object: Balances_Chain_State_Insert_Input;
	on_conflict?: InputMaybe<Balances_Chain_State_On_Conflict>;
};

export type Balances_Balances_Mutation_FrontendInsert_TransferArgs = {
	objects: Array<Balances_Transfer_Insert_Input>;
	on_conflict?: InputMaybe<Balances_Transfer_On_Conflict>;
};

export type Balances_Balances_Mutation_FrontendInsert_Transfer_OneArgs = {
	object: Balances_Transfer_Insert_Input;
	on_conflict?: InputMaybe<Balances_Transfer_On_Conflict>;
};

export type Balances_Balances_Mutation_FrontendUpdate_AccountArgs = {
	_inc?: InputMaybe<Balances_Account_Inc_Input>;
	_set?: InputMaybe<Balances_Account_Set_Input>;
	where: Balances_Account_Bool_Exp;
};

export type Balances_Balances_Mutation_FrontendUpdate_Account_By_PkArgs = {
	_inc?: InputMaybe<Balances_Account_Inc_Input>;
	_set?: InputMaybe<Balances_Account_Set_Input>;
	pk_columns: Balances_Account_Pk_Columns_Input;
};

export type Balances_Balances_Mutation_FrontendUpdate_Account_ManyArgs = {
	updates: Array<Balances_Account_Updates>;
};

export type Balances_Balances_Mutation_FrontendUpdate_Chain_StateArgs = {
	_inc?: InputMaybe<Balances_Chain_State_Inc_Input>;
	_set?: InputMaybe<Balances_Chain_State_Set_Input>;
	where: Balances_Chain_State_Bool_Exp;
};

export type Balances_Balances_Mutation_FrontendUpdate_Chain_State_By_PkArgs = {
	_inc?: InputMaybe<Balances_Chain_State_Inc_Input>;
	_set?: InputMaybe<Balances_Chain_State_Set_Input>;
	pk_columns: Balances_Chain_State_Pk_Columns_Input;
};

export type Balances_Balances_Mutation_FrontendUpdate_Chain_State_ManyArgs = {
	updates: Array<Balances_Chain_State_Updates>;
};

export type Balances_Balances_Mutation_FrontendUpdate_TransferArgs = {
	_inc?: InputMaybe<Balances_Transfer_Inc_Input>;
	_set?: InputMaybe<Balances_Transfer_Set_Input>;
	where: Balances_Transfer_Bool_Exp;
};

export type Balances_Balances_Mutation_FrontendUpdate_Transfer_By_PkArgs = {
	_inc?: InputMaybe<Balances_Transfer_Inc_Input>;
	_set?: InputMaybe<Balances_Transfer_Set_Input>;
	pk_columns: Balances_Transfer_Pk_Columns_Input;
};

export type Balances_Balances_Mutation_FrontendUpdate_Transfer_ManyArgs = {
	updates: Array<Balances_Transfer_Updates>;
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

/** unique or primary key constraints on table "squid_processor.chain_state" */
export enum Balances_Chain_State_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkE28e46a238ada7cbbcf711b3f6c = "PK_e28e46a238ada7cbbcf711b3f6c",
}

/** input type for incrementing numeric columns in table "squid_processor.chain_state" */
export type Balances_Chain_State_Inc_Input = {
	block_number?: InputMaybe<Scalars["Int"]>;
	token_balance?: InputMaybe<Scalars["numeric"]>;
	token_holders?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "squid_processor.chain_state" */
export type Balances_Chain_State_Insert_Input = {
	block_number?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	token_balance?: InputMaybe<Scalars["numeric"]>;
	token_holders?: InputMaybe<Scalars["Int"]>;
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

/** response of any mutation on the table "squid_processor.chain_state" */
export type Balances_Chain_State_Mutation_Response = {
	__typename?: "balances_chain_state_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Balances_Chain_State>;
};

/** on_conflict condition type for table "squid_processor.chain_state" */
export type Balances_Chain_State_On_Conflict = {
	constraint: Balances_Chain_State_Constraint;
	update_columns?: Array<Balances_Chain_State_Update_Column>;
	where?: InputMaybe<Balances_Chain_State_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_processor.chain_state". */
export type Balances_Chain_State_Order_By = {
	block_number?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	token_balance?: InputMaybe<Order_By>;
	token_holders?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chain_state */
export type Balances_Chain_State_Pk_Columns_Input = {
	id: Scalars["String"];
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

/** input type for updating data in table "squid_processor.chain_state" */
export type Balances_Chain_State_Set_Input = {
	block_number?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	token_balance?: InputMaybe<Scalars["numeric"]>;
	token_holders?: InputMaybe<Scalars["Int"]>;
};

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

/** update columns of table "squid_processor.chain_state" */
export enum Balances_Chain_State_Update_Column {
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

export type Balances_Chain_State_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Balances_Chain_State_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Balances_Chain_State_Set_Input>;
	where: Balances_Chain_State_Bool_Exp;
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

/** input type for inserting array relation for remote table "squid_processor.transfer" */
export type Balances_Transfer_Arr_Rel_Insert_Input = {
	data: Array<Balances_Transfer_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Balances_Transfer_On_Conflict>;
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

/** unique or primary key constraints on table "squid_processor.transfer" */
export enum Balances_Transfer_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkFd9ddbdd49a17afcbe014401295 = "PK_fd9ddbdd49a17afcbe014401295",
}

/** input type for incrementing numeric columns in table "squid_processor.transfer" */
export type Balances_Transfer_Inc_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
	block_number?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "squid_processor.transfer" */
export type Balances_Transfer_Insert_Input = {
	account?: InputMaybe<Balances_Account_Obj_Rel_Insert_Input>;
	accountByFromId?: InputMaybe<Balances_Account_Obj_Rel_Insert_Input>;
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

/** response of any mutation on the table "squid_processor.transfer" */
export type Balances_Transfer_Mutation_Response = {
	__typename?: "balances_transfer_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Balances_Transfer>;
};

/** on_conflict condition type for table "squid_processor.transfer" */
export type Balances_Transfer_On_Conflict = {
	constraint: Balances_Transfer_Constraint;
	update_columns?: Array<Balances_Transfer_Update_Column>;
	where?: InputMaybe<Balances_Transfer_Bool_Exp>;
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

/** primary key columns input for table: transfer */
export type Balances_Transfer_Pk_Columns_Input = {
	id: Scalars["String"];
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

/** input type for updating data in table "squid_processor.transfer" */
export type Balances_Transfer_Set_Input = {
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

/** update columns of table "squid_processor.transfer" */
export enum Balances_Transfer_Update_Column {
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

export type Balances_Transfer_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Balances_Transfer_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Balances_Transfer_Set_Input>;
	where: Balances_Transfer_Bool_Exp;
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

export type ErcQuery = {
	__typename?: "ercQuery";
	accountById?: Maybe<Erc_Account>;
	accountByUniqueInput?: Maybe<Erc_Account>;
	accountFTokenBalanceById?: Maybe<Erc_AccountFTokenBalance>;
	accountFTokenBalanceByUniqueInput?: Maybe<Erc_AccountFTokenBalance>;
	accountFTokenBalances: Array<Erc_AccountFTokenBalance>;
	accountFTokenBalancesConnection: Erc_AccountFTokenBalancesConnection;
	accountFtTransferById?: Maybe<Erc_AccountFtTransfer>;
	accountFtTransferByUniqueInput?: Maybe<Erc_AccountFtTransfer>;
	accountFtTransfers: Array<Erc_AccountFtTransfer>;
	accountFtTransfersConnection: Erc_AccountFtTransfersConnection;
	accountNftTransferById?: Maybe<Erc_AccountNftTransfer>;
	accountNftTransferByUniqueInput?: Maybe<Erc_AccountNftTransfer>;
	accountNftTransfers: Array<Erc_AccountNftTransfer>;
	accountNftTransfersConnection: Erc_AccountNftTransfersConnection;
	accounts: Array<Erc_Account>;
	accountsConnection: Erc_AccountsConnection;
	collectionById?: Maybe<Erc_Collection>;
	collectionByUniqueInput?: Maybe<Erc_Collection>;
	collections: Array<Erc_Collection>;
	collectionsConnection: Erc_CollectionsConnection;
	fTokenById?: Maybe<Erc_FToken>;
	fTokenByUniqueInput?: Maybe<Erc_FToken>;
	fTokens: Array<Erc_FToken>;
	fTokensConnection: Erc_FTokensConnection;
	ftTransferById?: Maybe<Erc_FtTransfer>;
	ftTransferByUniqueInput?: Maybe<Erc_FtTransfer>;
	ftTransfers: Array<Erc_FtTransfer>;
	ftTransfersConnection: Erc_FtTransfersConnection;
	nfTokenById?: Maybe<Erc_NfToken>;
	nfTokenByUniqueInput?: Maybe<Erc_NfToken>;
	nfTokens: Array<Erc_NfToken>;
	nfTokensConnection: Erc_NfTokensConnection;
	nftTransferById?: Maybe<Erc_NftTransfer>;
	nftTransferByUniqueInput?: Maybe<Erc_NftTransfer>;
	nftTransfers: Array<Erc_NftTransfer>;
	nftTransfersConnection: Erc_NftTransfersConnection;
	uriUpdateActionById?: Maybe<Erc_UriUpdateAction>;
	uriUpdateActionByUniqueInput?: Maybe<Erc_UriUpdateAction>;
	uriUpdateActions: Array<Erc_UriUpdateAction>;
	uriUpdateActionsConnection: Erc_UriUpdateActionsConnection;
};

export type ErcQueryAccountByIdArgs = {
	id: Scalars["ID"];
};

export type ErcQueryAccountByUniqueInputArgs = {
	where: Erc_AccountWhereUniqueInput;
};

export type ErcQueryAccountFTokenBalanceByIdArgs = {
	id: Scalars["ID"];
};

export type ErcQueryAccountFTokenBalanceByUniqueInputArgs = {
	where: Erc_AccountFTokenBalanceWhereUniqueInput;
};

export type ErcQueryAccountFTokenBalancesArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_AccountFTokenBalanceOrderByInput>>>;
	where?: InputMaybe<Erc_AccountFTokenBalanceWhereInput>;
};

export type ErcQueryAccountFTokenBalancesConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Erc_AccountFTokenBalanceOrderByInput>;
	where?: InputMaybe<Erc_AccountFTokenBalanceWhereInput>;
};

export type ErcQueryAccountFtTransferByIdArgs = {
	id: Scalars["ID"];
};

export type ErcQueryAccountFtTransferByUniqueInputArgs = {
	where: Erc_AccountFtTransferWhereUniqueInput;
};

export type ErcQueryAccountFtTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_AccountFtTransferOrderByInput>>>;
	where?: InputMaybe<Erc_AccountFtTransferWhereInput>;
};

export type ErcQueryAccountFtTransfersConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Erc_AccountFtTransferOrderByInput>;
	where?: InputMaybe<Erc_AccountFtTransferWhereInput>;
};

export type ErcQueryAccountNftTransferByIdArgs = {
	id: Scalars["ID"];
};

export type ErcQueryAccountNftTransferByUniqueInputArgs = {
	where: Erc_AccountNftTransferWhereUniqueInput;
};

export type ErcQueryAccountNftTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_AccountNftTransferOrderByInput>>>;
	where?: InputMaybe<Erc_AccountNftTransferWhereInput>;
};

export type ErcQueryAccountNftTransfersConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Erc_AccountNftTransferOrderByInput>;
	where?: InputMaybe<Erc_AccountNftTransferWhereInput>;
};

export type ErcQueryAccountsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_AccountOrderByInput>>>;
	where?: InputMaybe<Erc_AccountWhereInput>;
};

export type ErcQueryAccountsConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Erc_AccountOrderByInput>;
	where?: InputMaybe<Erc_AccountWhereInput>;
};

export type ErcQueryCollectionByIdArgs = {
	id: Scalars["ID"];
};

export type ErcQueryCollectionByUniqueInputArgs = {
	where: Erc_CollectionWhereUniqueInput;
};

export type ErcQueryCollectionsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_CollectionOrderByInput>>>;
	where?: InputMaybe<Erc_CollectionWhereInput>;
};

export type ErcQueryCollectionsConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Erc_CollectionOrderByInput>;
	where?: InputMaybe<Erc_CollectionWhereInput>;
};

export type ErcQueryFTokenByIdArgs = {
	id: Scalars["ID"];
};

export type ErcQueryFTokenByUniqueInputArgs = {
	where: Erc_FTokenWhereUniqueInput;
};

export type ErcQueryFTokensArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_FTokenOrderByInput>>>;
	where?: InputMaybe<Erc_FTokenWhereInput>;
};

export type ErcQueryFTokensConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Erc_FTokenOrderByInput>;
	where?: InputMaybe<Erc_FTokenWhereInput>;
};

export type ErcQueryFtTransferByIdArgs = {
	id: Scalars["ID"];
};

export type ErcQueryFtTransferByUniqueInputArgs = {
	where: Erc_FtTransferWhereUniqueInput;
};

export type ErcQueryFtTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_FtTransferOrderByInput>>>;
	where?: InputMaybe<Erc_FtTransferWhereInput>;
};

export type ErcQueryFtTransfersConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Erc_FtTransferOrderByInput>;
	where?: InputMaybe<Erc_FtTransferWhereInput>;
};

export type ErcQueryNfTokenByIdArgs = {
	id: Scalars["ID"];
};

export type ErcQueryNfTokenByUniqueInputArgs = {
	where: Erc_NfTokenWhereUniqueInput;
};

export type ErcQueryNfTokensArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_NfTokenOrderByInput>>>;
	where?: InputMaybe<Erc_NfTokenWhereInput>;
};

export type ErcQueryNfTokensConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Erc_NfTokenOrderByInput>;
	where?: InputMaybe<Erc_NfTokenWhereInput>;
};

export type ErcQueryNftTransferByIdArgs = {
	id: Scalars["ID"];
};

export type ErcQueryNftTransferByUniqueInputArgs = {
	where: Erc_NftTransferWhereUniqueInput;
};

export type ErcQueryNftTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_NftTransferOrderByInput>>>;
	where?: InputMaybe<Erc_NftTransferWhereInput>;
};

export type ErcQueryNftTransfersConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Erc_NftTransferOrderByInput>;
	where?: InputMaybe<Erc_NftTransferWhereInput>;
};

export type ErcQueryUriUpdateActionByIdArgs = {
	id: Scalars["ID"];
};

export type ErcQueryUriUpdateActionByUniqueInputArgs = {
	where: Erc_UriUpdateActionWhereUniqueInput;
};

export type ErcQueryUriUpdateActionsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_UriUpdateActionOrderByInput>>>;
	where?: InputMaybe<Erc_UriUpdateActionWhereInput>;
};

export type ErcQueryUriUpdateActionsConnectionArgs = {
	after?: InputMaybe<Scalars["String"]>;
	first?: InputMaybe<Scalars["Int"]>;
	orderBy: Array<Erc_UriUpdateActionOrderByInput>;
	where?: InputMaybe<Erc_UriUpdateActionWhereInput>;
};

export type Erc_Account = {
	__typename?: "erc_Account";
	balancesFToken: Array<Erc_AccountFTokenBalance>;
	ftTransfers: Array<Erc_AccountFtTransfer>;
	id: Scalars["ID"];
	nftTransfers: Array<Erc_AccountNftTransfer>;
	ownedTokens: Array<Erc_NfToken>;
};

export type Erc_AccountBalancesFTokenArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_AccountFTokenBalanceOrderByInput>>>;
	where?: InputMaybe<Erc_AccountFTokenBalanceWhereInput>;
};

export type Erc_AccountFtTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_AccountFtTransferOrderByInput>>>;
	where?: InputMaybe<Erc_AccountFtTransferWhereInput>;
};

export type Erc_AccountNftTransfersArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_AccountNftTransferOrderByInput>>>;
	where?: InputMaybe<Erc_AccountNftTransferWhereInput>;
};

export type Erc_AccountOwnedTokensArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_NfTokenOrderByInput>>>;
	where?: InputMaybe<Erc_NfTokenWhereInput>;
};

export type Erc_AccountEdge = {
	__typename?: "erc_AccountEdge";
	cursor: Scalars["String"];
	node: Erc_Account;
};

export type Erc_AccountFTokenBalance = {
	__typename?: "erc_AccountFTokenBalance";
	account: Erc_Account;
	amount: Scalars["erc_BigInt"];
	id: Scalars["ID"];
	token: Erc_FToken;
	updatedAt: Scalars["erc_DateTime"];
	updatedAtBlock: Scalars["erc_BigInt"];
};

export type Erc_AccountFTokenBalanceEdge = {
	__typename?: "erc_AccountFTokenBalanceEdge";
	cursor: Scalars["String"];
	node: Erc_AccountFTokenBalance;
};

export enum Erc_AccountFTokenBalanceOrderByInput {
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

export type Erc_AccountFTokenBalanceWhereInput = {
	AND?: InputMaybe<Array<Erc_AccountFTokenBalanceWhereInput>>;
	OR?: InputMaybe<Array<Erc_AccountFTokenBalanceWhereInput>>;
	account?: InputMaybe<Erc_AccountWhereInput>;
	amount_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_gt?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_gte?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	amount_lt?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_lte?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_not_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_not_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
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
	token?: InputMaybe<Erc_FTokenWhereInput>;
	updatedAtBlock_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	updatedAtBlock_gt?: InputMaybe<Scalars["erc_BigInt"]>;
	updatedAtBlock_gte?: InputMaybe<Scalars["erc_BigInt"]>;
	updatedAtBlock_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	updatedAtBlock_lt?: InputMaybe<Scalars["erc_BigInt"]>;
	updatedAtBlock_lte?: InputMaybe<Scalars["erc_BigInt"]>;
	updatedAtBlock_not_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	updatedAtBlock_not_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	updatedAt_eq?: InputMaybe<Scalars["erc_DateTime"]>;
	updatedAt_gt?: InputMaybe<Scalars["erc_DateTime"]>;
	updatedAt_gte?: InputMaybe<Scalars["erc_DateTime"]>;
	updatedAt_in?: InputMaybe<Array<Scalars["erc_DateTime"]>>;
	updatedAt_lt?: InputMaybe<Scalars["erc_DateTime"]>;
	updatedAt_lte?: InputMaybe<Scalars["erc_DateTime"]>;
	updatedAt_not_eq?: InputMaybe<Scalars["erc_DateTime"]>;
	updatedAt_not_in?: InputMaybe<Array<Scalars["erc_DateTime"]>>;
};

export type Erc_AccountFTokenBalanceWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Erc_AccountFTokenBalancesConnection = {
	__typename?: "erc_AccountFTokenBalancesConnection";
	edges: Array<Erc_AccountFTokenBalanceEdge>;
	pageInfo: Erc_PageInfo;
	totalCount: Scalars["Int"];
};

export type Erc_AccountFtTransfer = {
	__typename?: "erc_AccountFtTransfer";
	account: Erc_Account;
	direction?: Maybe<Erc_TransferDirection>;
	id: Scalars["ID"];
	transfer?: Maybe<Erc_FtTransfer>;
};

export type Erc_AccountFtTransferEdge = {
	__typename?: "erc_AccountFtTransferEdge";
	cursor: Scalars["String"];
	node: Erc_AccountFtTransfer;
};

export enum Erc_AccountFtTransferOrderByInput {
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

export type Erc_AccountFtTransferWhereInput = {
	AND?: InputMaybe<Array<Erc_AccountFtTransferWhereInput>>;
	OR?: InputMaybe<Array<Erc_AccountFtTransferWhereInput>>;
	account?: InputMaybe<Erc_AccountWhereInput>;
	direction_eq?: InputMaybe<Erc_TransferDirection>;
	direction_in?: InputMaybe<Array<Erc_TransferDirection>>;
	direction_isNull?: InputMaybe<Scalars["Boolean"]>;
	direction_not_eq?: InputMaybe<Erc_TransferDirection>;
	direction_not_in?: InputMaybe<Array<Erc_TransferDirection>>;
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
	transfer?: InputMaybe<Erc_FtTransferWhereInput>;
	transfer_isNull?: InputMaybe<Scalars["Boolean"]>;
};

export type Erc_AccountFtTransferWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Erc_AccountFtTransfersConnection = {
	__typename?: "erc_AccountFtTransfersConnection";
	edges: Array<Erc_AccountFtTransferEdge>;
	pageInfo: Erc_PageInfo;
	totalCount: Scalars["Int"];
};

export type Erc_AccountNftTransfer = {
	__typename?: "erc_AccountNftTransfer";
	account: Erc_Account;
	direction?: Maybe<Erc_TransferDirection>;
	id: Scalars["ID"];
	transfer?: Maybe<Erc_NftTransfer>;
};

export type Erc_AccountNftTransferEdge = {
	__typename?: "erc_AccountNftTransferEdge";
	cursor: Scalars["String"];
	node: Erc_AccountNftTransfer;
};

export enum Erc_AccountNftTransferOrderByInput {
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

export type Erc_AccountNftTransferWhereInput = {
	AND?: InputMaybe<Array<Erc_AccountNftTransferWhereInput>>;
	OR?: InputMaybe<Array<Erc_AccountNftTransferWhereInput>>;
	account?: InputMaybe<Erc_AccountWhereInput>;
	direction_eq?: InputMaybe<Erc_TransferDirection>;
	direction_in?: InputMaybe<Array<Erc_TransferDirection>>;
	direction_isNull?: InputMaybe<Scalars["Boolean"]>;
	direction_not_eq?: InputMaybe<Erc_TransferDirection>;
	direction_not_in?: InputMaybe<Array<Erc_TransferDirection>>;
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
	transfer?: InputMaybe<Erc_NftTransferWhereInput>;
	transfer_isNull?: InputMaybe<Scalars["Boolean"]>;
};

export type Erc_AccountNftTransferWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Erc_AccountNftTransfersConnection = {
	__typename?: "erc_AccountNftTransfersConnection";
	edges: Array<Erc_AccountNftTransferEdge>;
	pageInfo: Erc_PageInfo;
	totalCount: Scalars["Int"];
};

export enum Erc_AccountOrderByInput {
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
}

export type Erc_AccountWhereInput = {
	AND?: InputMaybe<Array<Erc_AccountWhereInput>>;
	OR?: InputMaybe<Array<Erc_AccountWhereInput>>;
	balancesFToken_every?: InputMaybe<Erc_AccountFTokenBalanceWhereInput>;
	balancesFToken_none?: InputMaybe<Erc_AccountFTokenBalanceWhereInput>;
	balancesFToken_some?: InputMaybe<Erc_AccountFTokenBalanceWhereInput>;
	ftTransfers_every?: InputMaybe<Erc_AccountFtTransferWhereInput>;
	ftTransfers_none?: InputMaybe<Erc_AccountFtTransferWhereInput>;
	ftTransfers_some?: InputMaybe<Erc_AccountFtTransferWhereInput>;
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
	nftTransfers_every?: InputMaybe<Erc_AccountNftTransferWhereInput>;
	nftTransfers_none?: InputMaybe<Erc_AccountNftTransferWhereInput>;
	nftTransfers_some?: InputMaybe<Erc_AccountNftTransferWhereInput>;
	ownedTokens_every?: InputMaybe<Erc_NfTokenWhereInput>;
	ownedTokens_none?: InputMaybe<Erc_NfTokenWhereInput>;
	ownedTokens_some?: InputMaybe<Erc_NfTokenWhereInput>;
};

export type Erc_AccountWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Erc_AccountsConnection = {
	__typename?: "erc_AccountsConnection";
	edges: Array<Erc_AccountEdge>;
	pageInfo: Erc_PageInfo;
	totalCount: Scalars["Int"];
};

export type Erc_Collection = {
	__typename?: "erc_Collection";
	collectionType: Erc_ContractStandard;
	createdAt: Scalars["erc_DateTime"];
	createdAtBlock: Scalars["erc_BigInt"];
	id: Scalars["ID"];
	nfts: Array<Erc_NfToken>;
};

export type Erc_CollectionNftsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_NfTokenOrderByInput>>>;
	where?: InputMaybe<Erc_NfTokenWhereInput>;
};

export type Erc_CollectionEdge = {
	__typename?: "erc_CollectionEdge";
	cursor: Scalars["String"];
	node: Erc_Collection;
};

export enum Erc_CollectionOrderByInput {
	CollectionTypeAsc = "collectionType_ASC",
	CollectionTypeDesc = "collectionType_DESC",
	CreatedAtBlockAsc = "createdAtBlock_ASC",
	CreatedAtBlockDesc = "createdAtBlock_DESC",
	CreatedAtAsc = "createdAt_ASC",
	CreatedAtDesc = "createdAt_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
}

export type Erc_CollectionWhereInput = {
	AND?: InputMaybe<Array<Erc_CollectionWhereInput>>;
	OR?: InputMaybe<Array<Erc_CollectionWhereInput>>;
	collectionType_eq?: InputMaybe<Erc_ContractStandard>;
	collectionType_in?: InputMaybe<Array<Erc_ContractStandard>>;
	collectionType_not_eq?: InputMaybe<Erc_ContractStandard>;
	collectionType_not_in?: InputMaybe<Array<Erc_ContractStandard>>;
	createdAtBlock_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	createdAtBlock_gt?: InputMaybe<Scalars["erc_BigInt"]>;
	createdAtBlock_gte?: InputMaybe<Scalars["erc_BigInt"]>;
	createdAtBlock_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	createdAtBlock_lt?: InputMaybe<Scalars["erc_BigInt"]>;
	createdAtBlock_lte?: InputMaybe<Scalars["erc_BigInt"]>;
	createdAtBlock_not_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	createdAtBlock_not_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	createdAt_eq?: InputMaybe<Scalars["erc_DateTime"]>;
	createdAt_gt?: InputMaybe<Scalars["erc_DateTime"]>;
	createdAt_gte?: InputMaybe<Scalars["erc_DateTime"]>;
	createdAt_in?: InputMaybe<Array<Scalars["erc_DateTime"]>>;
	createdAt_lt?: InputMaybe<Scalars["erc_DateTime"]>;
	createdAt_lte?: InputMaybe<Scalars["erc_DateTime"]>;
	createdAt_not_eq?: InputMaybe<Scalars["erc_DateTime"]>;
	createdAt_not_in?: InputMaybe<Array<Scalars["erc_DateTime"]>>;
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
	nfts_every?: InputMaybe<Erc_NfTokenWhereInput>;
	nfts_none?: InputMaybe<Erc_NfTokenWhereInput>;
	nfts_some?: InputMaybe<Erc_NfTokenWhereInput>;
};

export type Erc_CollectionWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Erc_CollectionsConnection = {
	__typename?: "erc_CollectionsConnection";
	edges: Array<Erc_CollectionEdge>;
	pageInfo: Erc_PageInfo;
	totalCount: Scalars["Int"];
};

export enum Erc_ContractStandard {
	Erc20 = "ERC20",
	Erc721 = "ERC721",
	Erc1155 = "ERC1155",
}

export type Erc_FToken = Erc_Token & {
	__typename?: "erc_FToken";
	decimals?: Maybe<Scalars["Int"]>;
	id: Scalars["ID"];
	name?: Maybe<Scalars["String"]>;
	symbol?: Maybe<Scalars["String"]>;
};

export type Erc_FTokenEdge = {
	__typename?: "erc_FTokenEdge";
	cursor: Scalars["String"];
	node: Erc_FToken;
};

export enum Erc_FTokenOrderByInput {
	DecimalsAsc = "decimals_ASC",
	DecimalsDesc = "decimals_DESC",
	IdAsc = "id_ASC",
	IdDesc = "id_DESC",
	NameAsc = "name_ASC",
	NameDesc = "name_DESC",
	SymbolAsc = "symbol_ASC",
	SymbolDesc = "symbol_DESC",
}

export type Erc_FTokenWhereInput = {
	AND?: InputMaybe<Array<Erc_FTokenWhereInput>>;
	OR?: InputMaybe<Array<Erc_FTokenWhereInput>>;
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

export type Erc_FTokenWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Erc_FTokensConnection = {
	__typename?: "erc_FTokensConnection";
	edges: Array<Erc_FTokenEdge>;
	pageInfo: Erc_PageInfo;
	totalCount: Scalars["Int"];
};

export type Erc_FtTransfer = Erc_Transfer & {
	__typename?: "erc_FtTransfer";
	amount?: Maybe<Scalars["erc_BigInt"]>;
	blockNumber: Scalars["erc_BigInt"];
	eventIndex: Scalars["Int"];
	from: Erc_Account;
	id: Scalars["ID"];
	timestamp: Scalars["erc_DateTime"];
	to: Erc_Account;
	token: Erc_FToken;
	transferType?: Maybe<Erc_TransferType>;
	txnHash: Scalars["String"];
};

export type Erc_FtTransferEdge = {
	__typename?: "erc_FtTransferEdge";
	cursor: Scalars["String"];
	node: Erc_FtTransfer;
};

export enum Erc_FtTransferOrderByInput {
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

export type Erc_FtTransferWhereInput = {
	AND?: InputMaybe<Array<Erc_FtTransferWhereInput>>;
	OR?: InputMaybe<Array<Erc_FtTransferWhereInput>>;
	amount_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_gt?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_gte?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	amount_isNull?: InputMaybe<Scalars["Boolean"]>;
	amount_lt?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_lte?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_not_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_not_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	blockNumber_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_gt?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_gte?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	blockNumber_lt?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_lte?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_not_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_not_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	eventIndex_eq?: InputMaybe<Scalars["Int"]>;
	eventIndex_gt?: InputMaybe<Scalars["Int"]>;
	eventIndex_gte?: InputMaybe<Scalars["Int"]>;
	eventIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
	eventIndex_lt?: InputMaybe<Scalars["Int"]>;
	eventIndex_lte?: InputMaybe<Scalars["Int"]>;
	eventIndex_not_eq?: InputMaybe<Scalars["Int"]>;
	eventIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
	from?: InputMaybe<Erc_AccountWhereInput>;
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
	timestamp_eq?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_gt?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_gte?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_in?: InputMaybe<Array<Scalars["erc_DateTime"]>>;
	timestamp_lt?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_lte?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_not_eq?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_not_in?: InputMaybe<Array<Scalars["erc_DateTime"]>>;
	to?: InputMaybe<Erc_AccountWhereInput>;
	token?: InputMaybe<Erc_FTokenWhereInput>;
	transferType_eq?: InputMaybe<Erc_TransferType>;
	transferType_in?: InputMaybe<Array<Erc_TransferType>>;
	transferType_isNull?: InputMaybe<Scalars["Boolean"]>;
	transferType_not_eq?: InputMaybe<Erc_TransferType>;
	transferType_not_in?: InputMaybe<Array<Erc_TransferType>>;
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

export type Erc_FtTransferWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Erc_FtTransfersConnection = {
	__typename?: "erc_FtTransfersConnection";
	edges: Array<Erc_FtTransferEdge>;
	pageInfo: Erc_PageInfo;
	totalCount: Scalars["Int"];
};

export type Erc_NfToken = Erc_Token & {
	__typename?: "erc_NfToken";
	amount: Scalars["erc_BigInt"];
	collection: Erc_Collection;
	currentOwner: Erc_Account;
	id: Scalars["ID"];
	isBurned: Scalars["Boolean"];
	name?: Maybe<Scalars["String"]>;
	nativeId: Scalars["String"];
	symbol?: Maybe<Scalars["String"]>;
	uri?: Maybe<Scalars["String"]>;
	uriUpdateActions: Array<Erc_UriUpdateAction>;
};

export type Erc_NfTokenUriUpdateActionsArgs = {
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<InputMaybe<Erc_UriUpdateActionOrderByInput>>>;
	where?: InputMaybe<Erc_UriUpdateActionWhereInput>;
};

export type Erc_NfTokenEdge = {
	__typename?: "erc_NfTokenEdge";
	cursor: Scalars["String"];
	node: Erc_NfToken;
};

export enum Erc_NfTokenOrderByInput {
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

export type Erc_NfTokenWhereInput = {
	AND?: InputMaybe<Array<Erc_NfTokenWhereInput>>;
	OR?: InputMaybe<Array<Erc_NfTokenWhereInput>>;
	amount_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_gt?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_gte?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	amount_lt?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_lte?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_not_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_not_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	collection?: InputMaybe<Erc_CollectionWhereInput>;
	currentOwner?: InputMaybe<Erc_AccountWhereInput>;
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
	uriUpdateActions_every?: InputMaybe<Erc_UriUpdateActionWhereInput>;
	uriUpdateActions_none?: InputMaybe<Erc_UriUpdateActionWhereInput>;
	uriUpdateActions_some?: InputMaybe<Erc_UriUpdateActionWhereInput>;
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

export type Erc_NfTokenWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Erc_NfTokensConnection = {
	__typename?: "erc_NfTokensConnection";
	edges: Array<Erc_NfTokenEdge>;
	pageInfo: Erc_PageInfo;
	totalCount: Scalars["Int"];
};

export type Erc_NftTransfer = Erc_Transfer & {
	__typename?: "erc_NftTransfer";
	amount: Scalars["erc_BigInt"];
	blockNumber: Scalars["erc_BigInt"];
	eventIndex: Scalars["Int"];
	from: Erc_Account;
	id: Scalars["ID"];
	isBatch: Scalars["Boolean"];
	operator?: Maybe<Erc_Account>;
	timestamp: Scalars["erc_DateTime"];
	to: Erc_Account;
	token: Erc_NfToken;
	transferType?: Maybe<Erc_TransferType>;
	txnHash: Scalars["String"];
};

export type Erc_NftTransferEdge = {
	__typename?: "erc_NftTransferEdge";
	cursor: Scalars["String"];
	node: Erc_NftTransfer;
};

export enum Erc_NftTransferOrderByInput {
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

export type Erc_NftTransferWhereInput = {
	AND?: InputMaybe<Array<Erc_NftTransferWhereInput>>;
	OR?: InputMaybe<Array<Erc_NftTransferWhereInput>>;
	amount_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_gt?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_gte?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	amount_lt?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_lte?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_not_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	amount_not_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	blockNumber_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_gt?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_gte?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	blockNumber_lt?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_lte?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_not_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_not_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	eventIndex_eq?: InputMaybe<Scalars["Int"]>;
	eventIndex_gt?: InputMaybe<Scalars["Int"]>;
	eventIndex_gte?: InputMaybe<Scalars["Int"]>;
	eventIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
	eventIndex_lt?: InputMaybe<Scalars["Int"]>;
	eventIndex_lte?: InputMaybe<Scalars["Int"]>;
	eventIndex_not_eq?: InputMaybe<Scalars["Int"]>;
	eventIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
	from?: InputMaybe<Erc_AccountWhereInput>;
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
	operator?: InputMaybe<Erc_AccountWhereInput>;
	operator_isNull?: InputMaybe<Scalars["Boolean"]>;
	timestamp_eq?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_gt?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_gte?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_in?: InputMaybe<Array<Scalars["erc_DateTime"]>>;
	timestamp_lt?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_lte?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_not_eq?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_not_in?: InputMaybe<Array<Scalars["erc_DateTime"]>>;
	to?: InputMaybe<Erc_AccountWhereInput>;
	token?: InputMaybe<Erc_NfTokenWhereInput>;
	transferType_eq?: InputMaybe<Erc_TransferType>;
	transferType_in?: InputMaybe<Array<Erc_TransferType>>;
	transferType_isNull?: InputMaybe<Scalars["Boolean"]>;
	transferType_not_eq?: InputMaybe<Erc_TransferType>;
	transferType_not_in?: InputMaybe<Array<Erc_TransferType>>;
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

export type Erc_NftTransferWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Erc_NftTransfersConnection = {
	__typename?: "erc_NftTransfersConnection";
	edges: Array<Erc_NftTransferEdge>;
	pageInfo: Erc_PageInfo;
	totalCount: Scalars["Int"];
};

export type Erc_PageInfo = {
	__typename?: "erc_PageInfo";
	endCursor: Scalars["String"];
	hasNextPage: Scalars["Boolean"];
	hasPreviousPage: Scalars["Boolean"];
	startCursor: Scalars["String"];
};

export type Erc_Token = {
	id: Scalars["ID"];
	name?: Maybe<Scalars["String"]>;
	symbol?: Maybe<Scalars["String"]>;
};

export type Erc_Transfer = {
	amount?: Maybe<Scalars["erc_BigInt"]>;
	blockNumber: Scalars["erc_BigInt"];
	eventIndex: Scalars["Int"];
	from: Erc_Account;
	id: Scalars["ID"];
	timestamp: Scalars["erc_DateTime"];
	to: Erc_Account;
	transferType?: Maybe<Erc_TransferType>;
	txnHash: Scalars["String"];
};

export enum Erc_TransferDirection {
	From = "From",
	To = "To",
}

export enum Erc_TransferType {
	Burn = "BURN",
	Mint = "MINT",
	Transfer = "TRANSFER",
}

export type Erc_UriUpdateAction = {
	__typename?: "erc_UriUpdateAction";
	blockNumber: Scalars["erc_BigInt"];
	id: Scalars["ID"];
	newValue?: Maybe<Scalars["String"]>;
	oldValue?: Maybe<Scalars["String"]>;
	timestamp: Scalars["erc_DateTime"];
	token: Erc_NfToken;
	txnHash: Scalars["String"];
};

export type Erc_UriUpdateActionEdge = {
	__typename?: "erc_UriUpdateActionEdge";
	cursor: Scalars["String"];
	node: Erc_UriUpdateAction;
};

export enum Erc_UriUpdateActionOrderByInput {
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

export type Erc_UriUpdateActionWhereInput = {
	AND?: InputMaybe<Array<Erc_UriUpdateActionWhereInput>>;
	OR?: InputMaybe<Array<Erc_UriUpdateActionWhereInput>>;
	blockNumber_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_gt?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_gte?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
	blockNumber_lt?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_lte?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_not_eq?: InputMaybe<Scalars["erc_BigInt"]>;
	blockNumber_not_in?: InputMaybe<Array<Scalars["erc_BigInt"]>>;
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
	timestamp_eq?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_gt?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_gte?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_in?: InputMaybe<Array<Scalars["erc_DateTime"]>>;
	timestamp_lt?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_lte?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_not_eq?: InputMaybe<Scalars["erc_DateTime"]>;
	timestamp_not_in?: InputMaybe<Array<Scalars["erc_DateTime"]>>;
	token?: InputMaybe<Erc_NfTokenWhereInput>;
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

export type Erc_UriUpdateActionWhereUniqueInput = {
	id: Scalars["ID"];
};

export type Erc_UriUpdateActionsConnection = {
	__typename?: "erc_UriUpdateActionsConnection";
	edges: Array<Erc_UriUpdateActionEdge>;
	pageInfo: Erc_PageInfo;
	totalCount: Scalars["Int"];
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

/** mutation root */
export type Mutation_Root = {
	__typename?: "mutation_root";
	archive?: Maybe<Archive_Archive_Mutation_Frontend>;
	balances?: Maybe<Balances_Balances_Mutation_Frontend>;
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
	erc?: Maybe<ErcQuery>;
};

export type Subscription_Root = {
	__typename?: "subscription_root";
	archive?: Maybe<Archive_Archive_Subscription>;
	balances?: Maybe<Balances_Balances_Subscription>;
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
}>;

export type GetAccountsQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balances_balances_query";
		account: Array<{
			__typename?: "balances_account";
			free: any;
			id: string;
			reserved: any;
			total: any;
			updated_at?: number | null;
		}>;
	} | null;
};

export type GetBalanceQueryVariables = Exact<{
	address: Scalars["String"];
}>;

export type GetBalanceQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balances_balances_query";
		account_by_pk?: {
			__typename?: "balances_account";
			id: string;
			free: any;
			total: any;
			reserved: any;
			updated_at?: number | null;
		} | null;
	} | null;
};

export type GetBalancesQueryVariables = Exact<{
	limit: Scalars["Int"];
}>;

export type GetBalancesQuery = {
	__typename?: "query_root";
	balances?: {
		__typename?: "balances_balances_query";
		account: Array<{
			__typename?: "balances_account";
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

export const GetAccountsDocument = `
    query GetAccounts($limit: Int!) {
  balances {
    account(limit: $limit, order_by: {total: desc}) {
      free
      id
      reserved
      total
      updated_at
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
    account_by_pk(id: $address) {
      id
      free
      total
      reserved
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
export const GetBalancesDocument = `
    query GetBalances($limit: Int!) {
  balances {
    account(limit: $limit, order_by: {total: desc}) {
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
