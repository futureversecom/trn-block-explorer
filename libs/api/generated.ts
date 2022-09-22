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

/** columns and relationships of "squid_erc.account" */
export type Erc_Account = {
	__typename?: "erc_account";
	/** An array relationship */
	account_f_token_balances: Array<Erc_Account_F_Token_Balance>;
	/** An aggregate relationship */
	account_f_token_balances_aggregate: Erc_Account_F_Token_Balance_Aggregate;
	/** An array relationship */
	account_ft_transfers: Array<Erc_Account_Ft_Transfer>;
	/** An aggregate relationship */
	account_ft_transfers_aggregate: Erc_Account_Ft_Transfer_Aggregate;
	/** An array relationship */
	account_nft_transfers: Array<Erc_Account_Nft_Transfer>;
	/** An aggregate relationship */
	account_nft_transfers_aggregate: Erc_Account_Nft_Transfer_Aggregate;
	/** An array relationship */
	ftTransfersByToId: Array<Erc_Ft_Transfer>;
	/** An aggregate relationship */
	ftTransfersByToId_aggregate: Erc_Ft_Transfer_Aggregate;
	/** An array relationship */
	ft_transfers: Array<Erc_Ft_Transfer>;
	/** An aggregate relationship */
	ft_transfers_aggregate: Erc_Ft_Transfer_Aggregate;
	id: Scalars["String"];
	/** An array relationship */
	nf_tokens: Array<Erc_Nf_Token>;
	/** An aggregate relationship */
	nf_tokens_aggregate: Erc_Nf_Token_Aggregate;
	/** An array relationship */
	nftTransfersByFromId: Array<Erc_Nft_Transfer>;
	/** An aggregate relationship */
	nftTransfersByFromId_aggregate: Erc_Nft_Transfer_Aggregate;
	/** An array relationship */
	nftTransfersByToId: Array<Erc_Nft_Transfer>;
	/** An aggregate relationship */
	nftTransfersByToId_aggregate: Erc_Nft_Transfer_Aggregate;
	/** An array relationship */
	nft_transfers: Array<Erc_Nft_Transfer>;
	/** An aggregate relationship */
	nft_transfers_aggregate: Erc_Nft_Transfer_Aggregate;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountAccount_F_Token_BalancesArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_F_Token_Balance_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_F_Token_Balance_Order_By>>;
	where?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountAccount_F_Token_Balances_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_F_Token_Balance_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_F_Token_Balance_Order_By>>;
	where?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountAccount_Ft_TransfersArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountAccount_Ft_Transfers_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountAccount_Nft_TransfersArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountAccount_Nft_Transfers_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountFtTransfersByToIdArgs = {
	distinct_on?: InputMaybe<Array<Erc_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountFtTransfersByToId_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountFt_TransfersArgs = {
	distinct_on?: InputMaybe<Array<Erc_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountFt_Transfers_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountNf_TokensArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nf_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nf_Token_Order_By>>;
	where?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountNf_Tokens_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nf_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nf_Token_Order_By>>;
	where?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountNftTransfersByFromIdArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountNftTransfersByFromId_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountNftTransfersByToIdArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountNftTransfersByToId_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountNft_TransfersArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.account" */
export type Erc_AccountNft_Transfers_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

/** aggregated selection of "squid_erc.account" */
export type Erc_Account_Aggregate = {
	__typename?: "erc_account_aggregate";
	aggregate?: Maybe<Erc_Account_Aggregate_Fields>;
	nodes: Array<Erc_Account>;
};

/** aggregate fields of "squid_erc.account" */
export type Erc_Account_Aggregate_Fields = {
	__typename?: "erc_account_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Erc_Account_Max_Fields>;
	min?: Maybe<Erc_Account_Min_Fields>;
};

/** aggregate fields of "squid_erc.account" */
export type Erc_Account_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Erc_Account_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "squid_erc.account". All fields are combined with a logical 'AND'. */
export type Erc_Account_Bool_Exp = {
	_and?: InputMaybe<Array<Erc_Account_Bool_Exp>>;
	_not?: InputMaybe<Erc_Account_Bool_Exp>;
	_or?: InputMaybe<Array<Erc_Account_Bool_Exp>>;
	account_f_token_balances?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
	account_ft_transfers?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
	account_nft_transfers?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
	ftTransfersByToId?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
	ft_transfers?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	nf_tokens?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
	nftTransfersByFromId?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
	nftTransfersByToId?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
	nft_transfers?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

/** unique or primary key constraints on table "squid_erc.account" */
export enum Erc_Account_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_54115ee388cdb6d86bb4bf5b2ea = "PK_54115ee388cdb6d86bb4bf5b2ea",
}

/** columns and relationships of "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance = {
	__typename?: "erc_account_f_token_balance";
	/** An object relationship */
	account: Erc_Account;
	account_id: Scalars["String"];
	amount: Scalars["numeric"];
	/** An object relationship */
	f_token: Erc_F_Token;
	id: Scalars["String"];
	token_id: Scalars["String"];
	updated_at: Scalars["timestamptz"];
	updated_at_block: Scalars["numeric"];
};

/** aggregated selection of "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Aggregate = {
	__typename?: "erc_account_f_token_balance_aggregate";
	aggregate?: Maybe<Erc_Account_F_Token_Balance_Aggregate_Fields>;
	nodes: Array<Erc_Account_F_Token_Balance>;
};

/** aggregate fields of "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Aggregate_Fields = {
	__typename?: "erc_account_f_token_balance_aggregate_fields";
	avg?: Maybe<Erc_Account_F_Token_Balance_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Erc_Account_F_Token_Balance_Max_Fields>;
	min?: Maybe<Erc_Account_F_Token_Balance_Min_Fields>;
	stddev?: Maybe<Erc_Account_F_Token_Balance_Stddev_Fields>;
	stddev_pop?: Maybe<Erc_Account_F_Token_Balance_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Erc_Account_F_Token_Balance_Stddev_Samp_Fields>;
	sum?: Maybe<Erc_Account_F_Token_Balance_Sum_Fields>;
	var_pop?: Maybe<Erc_Account_F_Token_Balance_Var_Pop_Fields>;
	var_samp?: Maybe<Erc_Account_F_Token_Balance_Var_Samp_Fields>;
	variance?: Maybe<Erc_Account_F_Token_Balance_Variance_Fields>;
};

/** aggregate fields of "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Erc_Account_F_Token_Balance_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Aggregate_Order_By = {
	avg?: InputMaybe<Erc_Account_F_Token_Balance_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Erc_Account_F_Token_Balance_Max_Order_By>;
	min?: InputMaybe<Erc_Account_F_Token_Balance_Min_Order_By>;
	stddev?: InputMaybe<Erc_Account_F_Token_Balance_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Erc_Account_F_Token_Balance_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Erc_Account_F_Token_Balance_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Erc_Account_F_Token_Balance_Sum_Order_By>;
	var_pop?: InputMaybe<Erc_Account_F_Token_Balance_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Erc_Account_F_Token_Balance_Var_Samp_Order_By>;
	variance?: InputMaybe<Erc_Account_F_Token_Balance_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Arr_Rel_Insert_Input = {
	data: Array<Erc_Account_F_Token_Balance_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Account_F_Token_Balance_On_Conflict>;
};

/** aggregate avg on columns */
export type Erc_Account_F_Token_Balance_Avg_Fields = {
	__typename?: "erc_account_f_token_balance_avg_fields";
	amount?: Maybe<Scalars["Float"]>;
	updated_at_block?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Avg_Order_By = {
	amount?: InputMaybe<Order_By>;
	updated_at_block?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "squid_erc.account_f_token_balance". All fields are combined with a logical 'AND'. */
export type Erc_Account_F_Token_Balance_Bool_Exp = {
	_and?: InputMaybe<Array<Erc_Account_F_Token_Balance_Bool_Exp>>;
	_not?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
	_or?: InputMaybe<Array<Erc_Account_F_Token_Balance_Bool_Exp>>;
	account?: InputMaybe<Erc_Account_Bool_Exp>;
	account_id?: InputMaybe<String_Comparison_Exp>;
	amount?: InputMaybe<Numeric_Comparison_Exp>;
	f_token?: InputMaybe<Erc_F_Token_Bool_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	token_id?: InputMaybe<String_Comparison_Exp>;
	updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	updated_at_block?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "squid_erc.account_f_token_balance" */
export enum Erc_Account_F_Token_Balance_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkC5ff211ac7ea9f25010a8ceab68 = "PK_c5ff211ac7ea9f25010a8ceab68",
}

/** input type for incrementing numeric columns in table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Inc_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
	updated_at_block?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Insert_Input = {
	account?: InputMaybe<Erc_Account_Obj_Rel_Insert_Input>;
	account_id?: InputMaybe<Scalars["String"]>;
	amount?: InputMaybe<Scalars["numeric"]>;
	f_token?: InputMaybe<Erc_F_Token_Obj_Rel_Insert_Input>;
	id?: InputMaybe<Scalars["String"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	updated_at?: InputMaybe<Scalars["timestamptz"]>;
	updated_at_block?: InputMaybe<Scalars["numeric"]>;
};

/** aggregate max on columns */
export type Erc_Account_F_Token_Balance_Max_Fields = {
	__typename?: "erc_account_f_token_balance_max_fields";
	account_id?: Maybe<Scalars["String"]>;
	amount?: Maybe<Scalars["numeric"]>;
	id?: Maybe<Scalars["String"]>;
	token_id?: Maybe<Scalars["String"]>;
	updated_at?: Maybe<Scalars["timestamptz"]>;
	updated_at_block?: Maybe<Scalars["numeric"]>;
};

/** order by max() on columns of table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Max_Order_By = {
	account_id?: InputMaybe<Order_By>;
	amount?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	updated_at_block?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erc_Account_F_Token_Balance_Min_Fields = {
	__typename?: "erc_account_f_token_balance_min_fields";
	account_id?: Maybe<Scalars["String"]>;
	amount?: Maybe<Scalars["numeric"]>;
	id?: Maybe<Scalars["String"]>;
	token_id?: Maybe<Scalars["String"]>;
	updated_at?: Maybe<Scalars["timestamptz"]>;
	updated_at_block?: Maybe<Scalars["numeric"]>;
};

/** order by min() on columns of table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Min_Order_By = {
	account_id?: InputMaybe<Order_By>;
	amount?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	updated_at_block?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Mutation_Response = {
	__typename?: "erc_account_f_token_balance_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Erc_Account_F_Token_Balance>;
};

/** on_conflict condition type for table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_On_Conflict = {
	constraint: Erc_Account_F_Token_Balance_Constraint;
	update_columns?: Array<Erc_Account_F_Token_Balance_Update_Column>;
	where?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_erc.account_f_token_balance". */
export type Erc_Account_F_Token_Balance_Order_By = {
	account?: InputMaybe<Erc_Account_Order_By>;
	account_id?: InputMaybe<Order_By>;
	amount?: InputMaybe<Order_By>;
	f_token?: InputMaybe<Erc_F_Token_Order_By>;
	id?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	updated_at_block?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account_f_token_balance */
export type Erc_Account_F_Token_Balance_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "squid_erc.account_f_token_balance" */
export enum Erc_Account_F_Token_Balance_Select_Column {
	/** column name */
	AccountId = "account_id",
	/** column name */
	Amount = "amount",
	/** column name */
	Id = "id",
	/** column name */
	TokenId = "token_id",
	/** column name */
	UpdatedAt = "updated_at",
	/** column name */
	UpdatedAtBlock = "updated_at_block",
}

/** input type for updating data in table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Set_Input = {
	account_id?: InputMaybe<Scalars["String"]>;
	amount?: InputMaybe<Scalars["numeric"]>;
	id?: InputMaybe<Scalars["String"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	updated_at?: InputMaybe<Scalars["timestamptz"]>;
	updated_at_block?: InputMaybe<Scalars["numeric"]>;
};

/** aggregate stddev on columns */
export type Erc_Account_F_Token_Balance_Stddev_Fields = {
	__typename?: "erc_account_f_token_balance_stddev_fields";
	amount?: Maybe<Scalars["Float"]>;
	updated_at_block?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Stddev_Order_By = {
	amount?: InputMaybe<Order_By>;
	updated_at_block?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erc_Account_F_Token_Balance_Stddev_Pop_Fields = {
	__typename?: "erc_account_f_token_balance_stddev_pop_fields";
	amount?: Maybe<Scalars["Float"]>;
	updated_at_block?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Stddev_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
	updated_at_block?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erc_Account_F_Token_Balance_Stddev_Samp_Fields = {
	__typename?: "erc_account_f_token_balance_stddev_samp_fields";
	amount?: Maybe<Scalars["Float"]>;
	updated_at_block?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Stddev_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
	updated_at_block?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Erc_Account_F_Token_Balance_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Erc_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Erc_Account_F_Token_Balance_Stream_Cursor_Value_Input = {
	account_id?: InputMaybe<Scalars["String"]>;
	amount?: InputMaybe<Scalars["numeric"]>;
	id?: InputMaybe<Scalars["String"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	updated_at?: InputMaybe<Scalars["timestamptz"]>;
	updated_at_block?: InputMaybe<Scalars["numeric"]>;
};

/** aggregate sum on columns */
export type Erc_Account_F_Token_Balance_Sum_Fields = {
	__typename?: "erc_account_f_token_balance_sum_fields";
	amount?: Maybe<Scalars["numeric"]>;
	updated_at_block?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Sum_Order_By = {
	amount?: InputMaybe<Order_By>;
	updated_at_block?: InputMaybe<Order_By>;
};

/** update columns of table "squid_erc.account_f_token_balance" */
export enum Erc_Account_F_Token_Balance_Update_Column {
	/** column name */
	AccountId = "account_id",
	/** column name */
	Amount = "amount",
	/** column name */
	Id = "id",
	/** column name */
	TokenId = "token_id",
	/** column name */
	UpdatedAt = "updated_at",
	/** column name */
	UpdatedAtBlock = "updated_at_block",
}

export type Erc_Account_F_Token_Balance_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Erc_Account_F_Token_Balance_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Erc_Account_F_Token_Balance_Set_Input>;
	where: Erc_Account_F_Token_Balance_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Erc_Account_F_Token_Balance_Var_Pop_Fields = {
	__typename?: "erc_account_f_token_balance_var_pop_fields";
	amount?: Maybe<Scalars["Float"]>;
	updated_at_block?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Var_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
	updated_at_block?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erc_Account_F_Token_Balance_Var_Samp_Fields = {
	__typename?: "erc_account_f_token_balance_var_samp_fields";
	amount?: Maybe<Scalars["Float"]>;
	updated_at_block?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Var_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
	updated_at_block?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erc_Account_F_Token_Balance_Variance_Fields = {
	__typename?: "erc_account_f_token_balance_variance_fields";
	amount?: Maybe<Scalars["Float"]>;
	updated_at_block?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "squid_erc.account_f_token_balance" */
export type Erc_Account_F_Token_Balance_Variance_Order_By = {
	amount?: InputMaybe<Order_By>;
	updated_at_block?: InputMaybe<Order_By>;
};

/** columns and relationships of "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer = {
	__typename?: "erc_account_ft_transfer";
	/** An object relationship */
	account: Erc_Account;
	account_id: Scalars["String"];
	direction?: Maybe<Scalars["String"]>;
	/** An object relationship */
	ft_transfer?: Maybe<Erc_Ft_Transfer>;
	id: Scalars["String"];
	transfer_id?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer_Aggregate = {
	__typename?: "erc_account_ft_transfer_aggregate";
	aggregate?: Maybe<Erc_Account_Ft_Transfer_Aggregate_Fields>;
	nodes: Array<Erc_Account_Ft_Transfer>;
};

/** aggregate fields of "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer_Aggregate_Fields = {
	__typename?: "erc_account_ft_transfer_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Erc_Account_Ft_Transfer_Max_Fields>;
	min?: Maybe<Erc_Account_Ft_Transfer_Min_Fields>;
};

/** aggregate fields of "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Erc_Account_Ft_Transfer_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Erc_Account_Ft_Transfer_Max_Order_By>;
	min?: InputMaybe<Erc_Account_Ft_Transfer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer_Arr_Rel_Insert_Input = {
	data: Array<Erc_Account_Ft_Transfer_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Account_Ft_Transfer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "squid_erc.account_ft_transfer". All fields are combined with a logical 'AND'. */
export type Erc_Account_Ft_Transfer_Bool_Exp = {
	_and?: InputMaybe<Array<Erc_Account_Ft_Transfer_Bool_Exp>>;
	_not?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
	_or?: InputMaybe<Array<Erc_Account_Ft_Transfer_Bool_Exp>>;
	account?: InputMaybe<Erc_Account_Bool_Exp>;
	account_id?: InputMaybe<String_Comparison_Exp>;
	direction?: InputMaybe<String_Comparison_Exp>;
	ft_transfer?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	transfer_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "squid_erc.account_ft_transfer" */
export enum Erc_Account_Ft_Transfer_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkC806d331df157e95bfc5c97dc77 = "PK_c806d331df157e95bfc5c97dc77",
}

/** input type for inserting data into table "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer_Insert_Input = {
	account?: InputMaybe<Erc_Account_Obj_Rel_Insert_Input>;
	account_id?: InputMaybe<Scalars["String"]>;
	direction?: InputMaybe<Scalars["String"]>;
	ft_transfer?: InputMaybe<Erc_Ft_Transfer_Obj_Rel_Insert_Input>;
	id?: InputMaybe<Scalars["String"]>;
	transfer_id?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Erc_Account_Ft_Transfer_Max_Fields = {
	__typename?: "erc_account_ft_transfer_max_fields";
	account_id?: Maybe<Scalars["String"]>;
	direction?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	transfer_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer_Max_Order_By = {
	account_id?: InputMaybe<Order_By>;
	direction?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	transfer_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erc_Account_Ft_Transfer_Min_Fields = {
	__typename?: "erc_account_ft_transfer_min_fields";
	account_id?: Maybe<Scalars["String"]>;
	direction?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	transfer_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer_Min_Order_By = {
	account_id?: InputMaybe<Order_By>;
	direction?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	transfer_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer_Mutation_Response = {
	__typename?: "erc_account_ft_transfer_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Erc_Account_Ft_Transfer>;
};

/** on_conflict condition type for table "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer_On_Conflict = {
	constraint: Erc_Account_Ft_Transfer_Constraint;
	update_columns?: Array<Erc_Account_Ft_Transfer_Update_Column>;
	where?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_erc.account_ft_transfer". */
export type Erc_Account_Ft_Transfer_Order_By = {
	account?: InputMaybe<Erc_Account_Order_By>;
	account_id?: InputMaybe<Order_By>;
	direction?: InputMaybe<Order_By>;
	ft_transfer?: InputMaybe<Erc_Ft_Transfer_Order_By>;
	id?: InputMaybe<Order_By>;
	transfer_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account_ft_transfer */
export type Erc_Account_Ft_Transfer_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "squid_erc.account_ft_transfer" */
export enum Erc_Account_Ft_Transfer_Select_Column {
	/** column name */
	AccountId = "account_id",
	/** column name */
	Direction = "direction",
	/** column name */
	Id = "id",
	/** column name */
	TransferId = "transfer_id",
}

/** input type for updating data in table "squid_erc.account_ft_transfer" */
export type Erc_Account_Ft_Transfer_Set_Input = {
	account_id?: InputMaybe<Scalars["String"]>;
	direction?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	transfer_id?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "account_ft_transfer" */
export type Erc_Account_Ft_Transfer_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Erc_Account_Ft_Transfer_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Erc_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Erc_Account_Ft_Transfer_Stream_Cursor_Value_Input = {
	account_id?: InputMaybe<Scalars["String"]>;
	direction?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	transfer_id?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "squid_erc.account_ft_transfer" */
export enum Erc_Account_Ft_Transfer_Update_Column {
	/** column name */
	AccountId = "account_id",
	/** column name */
	Direction = "direction",
	/** column name */
	Id = "id",
	/** column name */
	TransferId = "transfer_id",
}

export type Erc_Account_Ft_Transfer_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Erc_Account_Ft_Transfer_Set_Input>;
	where: Erc_Account_Ft_Transfer_Bool_Exp;
};

/** input type for inserting data into table "squid_erc.account" */
export type Erc_Account_Insert_Input = {
	account_f_token_balances?: InputMaybe<Erc_Account_F_Token_Balance_Arr_Rel_Insert_Input>;
	account_ft_transfers?: InputMaybe<Erc_Account_Ft_Transfer_Arr_Rel_Insert_Input>;
	account_nft_transfers?: InputMaybe<Erc_Account_Nft_Transfer_Arr_Rel_Insert_Input>;
	ftTransfersByToId?: InputMaybe<Erc_Ft_Transfer_Arr_Rel_Insert_Input>;
	ft_transfers?: InputMaybe<Erc_Ft_Transfer_Arr_Rel_Insert_Input>;
	id?: InputMaybe<Scalars["String"]>;
	nf_tokens?: InputMaybe<Erc_Nf_Token_Arr_Rel_Insert_Input>;
	nftTransfersByFromId?: InputMaybe<Erc_Nft_Transfer_Arr_Rel_Insert_Input>;
	nftTransfersByToId?: InputMaybe<Erc_Nft_Transfer_Arr_Rel_Insert_Input>;
	nft_transfers?: InputMaybe<Erc_Nft_Transfer_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Erc_Account_Max_Fields = {
	__typename?: "erc_account_max_fields";
	id?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Erc_Account_Min_Fields = {
	__typename?: "erc_account_min_fields";
	id?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "squid_erc.account" */
export type Erc_Account_Mutation_Response = {
	__typename?: "erc_account_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Erc_Account>;
};

/** columns and relationships of "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer = {
	__typename?: "erc_account_nft_transfer";
	/** An object relationship */
	account: Erc_Account;
	account_id: Scalars["String"];
	direction?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** An object relationship */
	nft_transfer?: Maybe<Erc_Nft_Transfer>;
	transfer_id?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer_Aggregate = {
	__typename?: "erc_account_nft_transfer_aggregate";
	aggregate?: Maybe<Erc_Account_Nft_Transfer_Aggregate_Fields>;
	nodes: Array<Erc_Account_Nft_Transfer>;
};

/** aggregate fields of "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer_Aggregate_Fields = {
	__typename?: "erc_account_nft_transfer_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<Erc_Account_Nft_Transfer_Max_Fields>;
	min?: Maybe<Erc_Account_Nft_Transfer_Min_Fields>;
};

/** aggregate fields of "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Erc_Account_Nft_Transfer_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer_Aggregate_Order_By = {
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Erc_Account_Nft_Transfer_Max_Order_By>;
	min?: InputMaybe<Erc_Account_Nft_Transfer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer_Arr_Rel_Insert_Input = {
	data: Array<Erc_Account_Nft_Transfer_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Account_Nft_Transfer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "squid_erc.account_nft_transfer". All fields are combined with a logical 'AND'. */
export type Erc_Account_Nft_Transfer_Bool_Exp = {
	_and?: InputMaybe<Array<Erc_Account_Nft_Transfer_Bool_Exp>>;
	_not?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
	_or?: InputMaybe<Array<Erc_Account_Nft_Transfer_Bool_Exp>>;
	account?: InputMaybe<Erc_Account_Bool_Exp>;
	account_id?: InputMaybe<String_Comparison_Exp>;
	direction?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	nft_transfer?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
	transfer_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "squid_erc.account_nft_transfer" */
export enum Erc_Account_Nft_Transfer_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_63cecb44d101ea1a54908c34a24 = "PK_63cecb44d101ea1a54908c34a24",
}

/** input type for inserting data into table "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer_Insert_Input = {
	account?: InputMaybe<Erc_Account_Obj_Rel_Insert_Input>;
	account_id?: InputMaybe<Scalars["String"]>;
	direction?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	nft_transfer?: InputMaybe<Erc_Nft_Transfer_Obj_Rel_Insert_Input>;
	transfer_id?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Erc_Account_Nft_Transfer_Max_Fields = {
	__typename?: "erc_account_nft_transfer_max_fields";
	account_id?: Maybe<Scalars["String"]>;
	direction?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	transfer_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer_Max_Order_By = {
	account_id?: InputMaybe<Order_By>;
	direction?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	transfer_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erc_Account_Nft_Transfer_Min_Fields = {
	__typename?: "erc_account_nft_transfer_min_fields";
	account_id?: Maybe<Scalars["String"]>;
	direction?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	transfer_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer_Min_Order_By = {
	account_id?: InputMaybe<Order_By>;
	direction?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	transfer_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer_Mutation_Response = {
	__typename?: "erc_account_nft_transfer_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Erc_Account_Nft_Transfer>;
};

/** on_conflict condition type for table "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer_On_Conflict = {
	constraint: Erc_Account_Nft_Transfer_Constraint;
	update_columns?: Array<Erc_Account_Nft_Transfer_Update_Column>;
	where?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_erc.account_nft_transfer". */
export type Erc_Account_Nft_Transfer_Order_By = {
	account?: InputMaybe<Erc_Account_Order_By>;
	account_id?: InputMaybe<Order_By>;
	direction?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	nft_transfer?: InputMaybe<Erc_Nft_Transfer_Order_By>;
	transfer_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account_nft_transfer */
export type Erc_Account_Nft_Transfer_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "squid_erc.account_nft_transfer" */
export enum Erc_Account_Nft_Transfer_Select_Column {
	/** column name */
	AccountId = "account_id",
	/** column name */
	Direction = "direction",
	/** column name */
	Id = "id",
	/** column name */
	TransferId = "transfer_id",
}

/** input type for updating data in table "squid_erc.account_nft_transfer" */
export type Erc_Account_Nft_Transfer_Set_Input = {
	account_id?: InputMaybe<Scalars["String"]>;
	direction?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	transfer_id?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "account_nft_transfer" */
export type Erc_Account_Nft_Transfer_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Erc_Account_Nft_Transfer_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Erc_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Erc_Account_Nft_Transfer_Stream_Cursor_Value_Input = {
	account_id?: InputMaybe<Scalars["String"]>;
	direction?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	transfer_id?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "squid_erc.account_nft_transfer" */
export enum Erc_Account_Nft_Transfer_Update_Column {
	/** column name */
	AccountId = "account_id",
	/** column name */
	Direction = "direction",
	/** column name */
	Id = "id",
	/** column name */
	TransferId = "transfer_id",
}

export type Erc_Account_Nft_Transfer_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Erc_Account_Nft_Transfer_Set_Input>;
	where: Erc_Account_Nft_Transfer_Bool_Exp;
};

/** input type for inserting object relation for remote table "squid_erc.account" */
export type Erc_Account_Obj_Rel_Insert_Input = {
	data: Erc_Account_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Account_On_Conflict>;
};

/** on_conflict condition type for table "squid_erc.account" */
export type Erc_Account_On_Conflict = {
	constraint: Erc_Account_Constraint;
	update_columns?: Array<Erc_Account_Update_Column>;
	where?: InputMaybe<Erc_Account_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_erc.account". */
export type Erc_Account_Order_By = {
	account_f_token_balances_aggregate?: InputMaybe<Erc_Account_F_Token_Balance_Aggregate_Order_By>;
	account_ft_transfers_aggregate?: InputMaybe<Erc_Account_Ft_Transfer_Aggregate_Order_By>;
	account_nft_transfers_aggregate?: InputMaybe<Erc_Account_Nft_Transfer_Aggregate_Order_By>;
	ftTransfersByToId_aggregate?: InputMaybe<Erc_Ft_Transfer_Aggregate_Order_By>;
	ft_transfers_aggregate?: InputMaybe<Erc_Ft_Transfer_Aggregate_Order_By>;
	id?: InputMaybe<Order_By>;
	nf_tokens_aggregate?: InputMaybe<Erc_Nf_Token_Aggregate_Order_By>;
	nftTransfersByFromId_aggregate?: InputMaybe<Erc_Nft_Transfer_Aggregate_Order_By>;
	nftTransfersByToId_aggregate?: InputMaybe<Erc_Nft_Transfer_Aggregate_Order_By>;
	nft_transfers_aggregate?: InputMaybe<Erc_Nft_Transfer_Aggregate_Order_By>;
};

/** primary key columns input for table: account */
export type Erc_Account_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "squid_erc.account" */
export enum Erc_Account_Select_Column {
	/** column name */
	Id = "id",
}

/** input type for updating data in table "squid_erc.account" */
export type Erc_Account_Set_Input = {
	id?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "account" */
export type Erc_Account_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Erc_Account_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Erc_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Erc_Account_Stream_Cursor_Value_Input = {
	id?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "squid_erc.account" */
export enum Erc_Account_Update_Column {
	/** column name */
	Id = "id",
}

export type Erc_Account_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Erc_Account_Set_Input>;
	where: Erc_Account_Bool_Exp;
};

/** columns and relationships of "squid_erc.collection" */
export type Erc_Collection = {
	__typename?: "erc_collection";
	collection_type: Scalars["String"];
	created_at: Scalars["timestamptz"];
	created_at_block: Scalars["numeric"];
	id: Scalars["String"];
	/** An array relationship */
	nf_tokens: Array<Erc_Nf_Token>;
	/** An aggregate relationship */
	nf_tokens_aggregate: Erc_Nf_Token_Aggregate;
};

/** columns and relationships of "squid_erc.collection" */
export type Erc_CollectionNf_TokensArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nf_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nf_Token_Order_By>>;
	where?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
};

/** columns and relationships of "squid_erc.collection" */
export type Erc_CollectionNf_Tokens_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nf_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nf_Token_Order_By>>;
	where?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
};

/** aggregated selection of "squid_erc.collection" */
export type Erc_Collection_Aggregate = {
	__typename?: "erc_collection_aggregate";
	aggregate?: Maybe<Erc_Collection_Aggregate_Fields>;
	nodes: Array<Erc_Collection>;
};

/** aggregate fields of "squid_erc.collection" */
export type Erc_Collection_Aggregate_Fields = {
	__typename?: "erc_collection_aggregate_fields";
	avg?: Maybe<Erc_Collection_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Erc_Collection_Max_Fields>;
	min?: Maybe<Erc_Collection_Min_Fields>;
	stddev?: Maybe<Erc_Collection_Stddev_Fields>;
	stddev_pop?: Maybe<Erc_Collection_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Erc_Collection_Stddev_Samp_Fields>;
	sum?: Maybe<Erc_Collection_Sum_Fields>;
	var_pop?: Maybe<Erc_Collection_Var_Pop_Fields>;
	var_samp?: Maybe<Erc_Collection_Var_Samp_Fields>;
	variance?: Maybe<Erc_Collection_Variance_Fields>;
};

/** aggregate fields of "squid_erc.collection" */
export type Erc_Collection_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Erc_Collection_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Erc_Collection_Avg_Fields = {
	__typename?: "erc_collection_avg_fields";
	created_at_block?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "squid_erc.collection". All fields are combined with a logical 'AND'. */
export type Erc_Collection_Bool_Exp = {
	_and?: InputMaybe<Array<Erc_Collection_Bool_Exp>>;
	_not?: InputMaybe<Erc_Collection_Bool_Exp>;
	_or?: InputMaybe<Array<Erc_Collection_Bool_Exp>>;
	collection_type?: InputMaybe<String_Comparison_Exp>;
	created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	created_at_block?: InputMaybe<Numeric_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	nf_tokens?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
};

/** unique or primary key constraints on table "squid_erc.collection" */
export enum Erc_Collection_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkAd3f485bbc99d875491f44d7c85 = "PK_ad3f485bbc99d875491f44d7c85",
}

/** input type for incrementing numeric columns in table "squid_erc.collection" */
export type Erc_Collection_Inc_Input = {
	created_at_block?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "squid_erc.collection" */
export type Erc_Collection_Insert_Input = {
	collection_type?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamptz"]>;
	created_at_block?: InputMaybe<Scalars["numeric"]>;
	id?: InputMaybe<Scalars["String"]>;
	nf_tokens?: InputMaybe<Erc_Nf_Token_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Erc_Collection_Max_Fields = {
	__typename?: "erc_collection_max_fields";
	collection_type?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamptz"]>;
	created_at_block?: Maybe<Scalars["numeric"]>;
	id?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Erc_Collection_Min_Fields = {
	__typename?: "erc_collection_min_fields";
	collection_type?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamptz"]>;
	created_at_block?: Maybe<Scalars["numeric"]>;
	id?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "squid_erc.collection" */
export type Erc_Collection_Mutation_Response = {
	__typename?: "erc_collection_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Erc_Collection>;
};

/** input type for inserting object relation for remote table "squid_erc.collection" */
export type Erc_Collection_Obj_Rel_Insert_Input = {
	data: Erc_Collection_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Collection_On_Conflict>;
};

/** on_conflict condition type for table "squid_erc.collection" */
export type Erc_Collection_On_Conflict = {
	constraint: Erc_Collection_Constraint;
	update_columns?: Array<Erc_Collection_Update_Column>;
	where?: InputMaybe<Erc_Collection_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_erc.collection". */
export type Erc_Collection_Order_By = {
	collection_type?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	created_at_block?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	nf_tokens_aggregate?: InputMaybe<Erc_Nf_Token_Aggregate_Order_By>;
};

/** primary key columns input for table: collection */
export type Erc_Collection_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "squid_erc.collection" */
export enum Erc_Collection_Select_Column {
	/** column name */
	CollectionType = "collection_type",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	CreatedAtBlock = "created_at_block",
	/** column name */
	Id = "id",
}

/** input type for updating data in table "squid_erc.collection" */
export type Erc_Collection_Set_Input = {
	collection_type?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamptz"]>;
	created_at_block?: InputMaybe<Scalars["numeric"]>;
	id?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Erc_Collection_Stddev_Fields = {
	__typename?: "erc_collection_stddev_fields";
	created_at_block?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Erc_Collection_Stddev_Pop_Fields = {
	__typename?: "erc_collection_stddev_pop_fields";
	created_at_block?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Erc_Collection_Stddev_Samp_Fields = {
	__typename?: "erc_collection_stddev_samp_fields";
	created_at_block?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "collection" */
export type Erc_Collection_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Erc_Collection_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Erc_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Erc_Collection_Stream_Cursor_Value_Input = {
	collection_type?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamptz"]>;
	created_at_block?: InputMaybe<Scalars["numeric"]>;
	id?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Erc_Collection_Sum_Fields = {
	__typename?: "erc_collection_sum_fields";
	created_at_block?: Maybe<Scalars["numeric"]>;
};

/** update columns of table "squid_erc.collection" */
export enum Erc_Collection_Update_Column {
	/** column name */
	CollectionType = "collection_type",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	CreatedAtBlock = "created_at_block",
	/** column name */
	Id = "id",
}

export type Erc_Collection_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Erc_Collection_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Erc_Collection_Set_Input>;
	where: Erc_Collection_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Erc_Collection_Var_Pop_Fields = {
	__typename?: "erc_collection_var_pop_fields";
	created_at_block?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Erc_Collection_Var_Samp_Fields = {
	__typename?: "erc_collection_var_samp_fields";
	created_at_block?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Erc_Collection_Variance_Fields = {
	__typename?: "erc_collection_variance_fields";
	created_at_block?: Maybe<Scalars["Float"]>;
};

/** ordering argument of a cursor */
export enum Erc_Cursor_Ordering {
	/** ascending ordering of the cursor */
	Asc = "ASC",
	/** descending ordering of the cursor */
	Desc = "DESC",
}

export type Erc_Erc_Mutation_Frontend = {
	__typename?: "erc_erc_mutation_frontend";
	/** delete data from the table: "squid_erc.account" */
	delete_account?: Maybe<Erc_Account_Mutation_Response>;
	/** delete single row from the table: "squid_erc.account" */
	delete_account_by_pk?: Maybe<Erc_Account>;
	/** delete data from the table: "squid_erc.account_f_token_balance" */
	delete_account_f_token_balance?: Maybe<Erc_Account_F_Token_Balance_Mutation_Response>;
	/** delete single row from the table: "squid_erc.account_f_token_balance" */
	delete_account_f_token_balance_by_pk?: Maybe<Erc_Account_F_Token_Balance>;
	/** delete data from the table: "squid_erc.account_ft_transfer" */
	delete_account_ft_transfer?: Maybe<Erc_Account_Ft_Transfer_Mutation_Response>;
	/** delete single row from the table: "squid_erc.account_ft_transfer" */
	delete_account_ft_transfer_by_pk?: Maybe<Erc_Account_Ft_Transfer>;
	/** delete data from the table: "squid_erc.account_nft_transfer" */
	delete_account_nft_transfer?: Maybe<Erc_Account_Nft_Transfer_Mutation_Response>;
	/** delete single row from the table: "squid_erc.account_nft_transfer" */
	delete_account_nft_transfer_by_pk?: Maybe<Erc_Account_Nft_Transfer>;
	/** delete data from the table: "squid_erc.collection" */
	delete_collection?: Maybe<Erc_Collection_Mutation_Response>;
	/** delete single row from the table: "squid_erc.collection" */
	delete_collection_by_pk?: Maybe<Erc_Collection>;
	/** delete data from the table: "squid_erc.f_token" */
	delete_f_token?: Maybe<Erc_F_Token_Mutation_Response>;
	/** delete single row from the table: "squid_erc.f_token" */
	delete_f_token_by_pk?: Maybe<Erc_F_Token>;
	/** delete data from the table: "squid_erc.ft_transfer" */
	delete_ft_transfer?: Maybe<Erc_Ft_Transfer_Mutation_Response>;
	/** delete single row from the table: "squid_erc.ft_transfer" */
	delete_ft_transfer_by_pk?: Maybe<Erc_Ft_Transfer>;
	/** delete data from the table: "squid_erc.nf_token" */
	delete_nf_token?: Maybe<Erc_Nf_Token_Mutation_Response>;
	/** delete single row from the table: "squid_erc.nf_token" */
	delete_nf_token_by_pk?: Maybe<Erc_Nf_Token>;
	/** delete data from the table: "squid_erc.nft_transfer" */
	delete_nft_transfer?: Maybe<Erc_Nft_Transfer_Mutation_Response>;
	/** delete single row from the table: "squid_erc.nft_transfer" */
	delete_nft_transfer_by_pk?: Maybe<Erc_Nft_Transfer>;
	/** delete data from the table: "squid_erc.uri_update_action" */
	delete_uri_update_action?: Maybe<Erc_Uri_Update_Action_Mutation_Response>;
	/** delete single row from the table: "squid_erc.uri_update_action" */
	delete_uri_update_action_by_pk?: Maybe<Erc_Uri_Update_Action>;
	/** insert data into the table: "squid_erc.account" */
	insert_account?: Maybe<Erc_Account_Mutation_Response>;
	/** insert data into the table: "squid_erc.account_f_token_balance" */
	insert_account_f_token_balance?: Maybe<Erc_Account_F_Token_Balance_Mutation_Response>;
	/** insert a single row into the table: "squid_erc.account_f_token_balance" */
	insert_account_f_token_balance_one?: Maybe<Erc_Account_F_Token_Balance>;
	/** insert data into the table: "squid_erc.account_ft_transfer" */
	insert_account_ft_transfer?: Maybe<Erc_Account_Ft_Transfer_Mutation_Response>;
	/** insert a single row into the table: "squid_erc.account_ft_transfer" */
	insert_account_ft_transfer_one?: Maybe<Erc_Account_Ft_Transfer>;
	/** insert data into the table: "squid_erc.account_nft_transfer" */
	insert_account_nft_transfer?: Maybe<Erc_Account_Nft_Transfer_Mutation_Response>;
	/** insert a single row into the table: "squid_erc.account_nft_transfer" */
	insert_account_nft_transfer_one?: Maybe<Erc_Account_Nft_Transfer>;
	/** insert a single row into the table: "squid_erc.account" */
	insert_account_one?: Maybe<Erc_Account>;
	/** insert data into the table: "squid_erc.collection" */
	insert_collection?: Maybe<Erc_Collection_Mutation_Response>;
	/** insert a single row into the table: "squid_erc.collection" */
	insert_collection_one?: Maybe<Erc_Collection>;
	/** insert data into the table: "squid_erc.f_token" */
	insert_f_token?: Maybe<Erc_F_Token_Mutation_Response>;
	/** insert a single row into the table: "squid_erc.f_token" */
	insert_f_token_one?: Maybe<Erc_F_Token>;
	/** insert data into the table: "squid_erc.ft_transfer" */
	insert_ft_transfer?: Maybe<Erc_Ft_Transfer_Mutation_Response>;
	/** insert a single row into the table: "squid_erc.ft_transfer" */
	insert_ft_transfer_one?: Maybe<Erc_Ft_Transfer>;
	/** insert data into the table: "squid_erc.nf_token" */
	insert_nf_token?: Maybe<Erc_Nf_Token_Mutation_Response>;
	/** insert a single row into the table: "squid_erc.nf_token" */
	insert_nf_token_one?: Maybe<Erc_Nf_Token>;
	/** insert data into the table: "squid_erc.nft_transfer" */
	insert_nft_transfer?: Maybe<Erc_Nft_Transfer_Mutation_Response>;
	/** insert a single row into the table: "squid_erc.nft_transfer" */
	insert_nft_transfer_one?: Maybe<Erc_Nft_Transfer>;
	/** insert data into the table: "squid_erc.uri_update_action" */
	insert_uri_update_action?: Maybe<Erc_Uri_Update_Action_Mutation_Response>;
	/** insert a single row into the table: "squid_erc.uri_update_action" */
	insert_uri_update_action_one?: Maybe<Erc_Uri_Update_Action>;
	/** update data of the table: "squid_erc.account" */
	update_account?: Maybe<Erc_Account_Mutation_Response>;
	/** update single row of the table: "squid_erc.account" */
	update_account_by_pk?: Maybe<Erc_Account>;
	/** update data of the table: "squid_erc.account_f_token_balance" */
	update_account_f_token_balance?: Maybe<Erc_Account_F_Token_Balance_Mutation_Response>;
	/** update single row of the table: "squid_erc.account_f_token_balance" */
	update_account_f_token_balance_by_pk?: Maybe<Erc_Account_F_Token_Balance>;
	/** update multiples rows of table: "squid_erc.account_f_token_balance" */
	update_account_f_token_balance_many?: Maybe<
		Array<Maybe<Erc_Account_F_Token_Balance_Mutation_Response>>
	>;
	/** update data of the table: "squid_erc.account_ft_transfer" */
	update_account_ft_transfer?: Maybe<Erc_Account_Ft_Transfer_Mutation_Response>;
	/** update single row of the table: "squid_erc.account_ft_transfer" */
	update_account_ft_transfer_by_pk?: Maybe<Erc_Account_Ft_Transfer>;
	/** update multiples rows of table: "squid_erc.account_ft_transfer" */
	update_account_ft_transfer_many?: Maybe<
		Array<Maybe<Erc_Account_Ft_Transfer_Mutation_Response>>
	>;
	/** update multiples rows of table: "squid_erc.account" */
	update_account_many?: Maybe<Array<Maybe<Erc_Account_Mutation_Response>>>;
	/** update data of the table: "squid_erc.account_nft_transfer" */
	update_account_nft_transfer?: Maybe<Erc_Account_Nft_Transfer_Mutation_Response>;
	/** update single row of the table: "squid_erc.account_nft_transfer" */
	update_account_nft_transfer_by_pk?: Maybe<Erc_Account_Nft_Transfer>;
	/** update multiples rows of table: "squid_erc.account_nft_transfer" */
	update_account_nft_transfer_many?: Maybe<
		Array<Maybe<Erc_Account_Nft_Transfer_Mutation_Response>>
	>;
	/** update data of the table: "squid_erc.collection" */
	update_collection?: Maybe<Erc_Collection_Mutation_Response>;
	/** update single row of the table: "squid_erc.collection" */
	update_collection_by_pk?: Maybe<Erc_Collection>;
	/** update multiples rows of table: "squid_erc.collection" */
	update_collection_many?: Maybe<
		Array<Maybe<Erc_Collection_Mutation_Response>>
	>;
	/** update data of the table: "squid_erc.f_token" */
	update_f_token?: Maybe<Erc_F_Token_Mutation_Response>;
	/** update single row of the table: "squid_erc.f_token" */
	update_f_token_by_pk?: Maybe<Erc_F_Token>;
	/** update multiples rows of table: "squid_erc.f_token" */
	update_f_token_many?: Maybe<Array<Maybe<Erc_F_Token_Mutation_Response>>>;
	/** update data of the table: "squid_erc.ft_transfer" */
	update_ft_transfer?: Maybe<Erc_Ft_Transfer_Mutation_Response>;
	/** update single row of the table: "squid_erc.ft_transfer" */
	update_ft_transfer_by_pk?: Maybe<Erc_Ft_Transfer>;
	/** update multiples rows of table: "squid_erc.ft_transfer" */
	update_ft_transfer_many?: Maybe<
		Array<Maybe<Erc_Ft_Transfer_Mutation_Response>>
	>;
	/** update data of the table: "squid_erc.nf_token" */
	update_nf_token?: Maybe<Erc_Nf_Token_Mutation_Response>;
	/** update single row of the table: "squid_erc.nf_token" */
	update_nf_token_by_pk?: Maybe<Erc_Nf_Token>;
	/** update multiples rows of table: "squid_erc.nf_token" */
	update_nf_token_many?: Maybe<Array<Maybe<Erc_Nf_Token_Mutation_Response>>>;
	/** update data of the table: "squid_erc.nft_transfer" */
	update_nft_transfer?: Maybe<Erc_Nft_Transfer_Mutation_Response>;
	/** update single row of the table: "squid_erc.nft_transfer" */
	update_nft_transfer_by_pk?: Maybe<Erc_Nft_Transfer>;
	/** update multiples rows of table: "squid_erc.nft_transfer" */
	update_nft_transfer_many?: Maybe<
		Array<Maybe<Erc_Nft_Transfer_Mutation_Response>>
	>;
	/** update data of the table: "squid_erc.uri_update_action" */
	update_uri_update_action?: Maybe<Erc_Uri_Update_Action_Mutation_Response>;
	/** update single row of the table: "squid_erc.uri_update_action" */
	update_uri_update_action_by_pk?: Maybe<Erc_Uri_Update_Action>;
	/** update multiples rows of table: "squid_erc.uri_update_action" */
	update_uri_update_action_many?: Maybe<
		Array<Maybe<Erc_Uri_Update_Action_Mutation_Response>>
	>;
};

export type Erc_Erc_Mutation_FrontendDelete_AccountArgs = {
	where: Erc_Account_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendDelete_Account_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_Mutation_FrontendDelete_Account_F_Token_BalanceArgs = {
	where: Erc_Account_F_Token_Balance_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendDelete_Account_F_Token_Balance_By_PkArgs =
	{
		id: Scalars["String"];
	};

export type Erc_Erc_Mutation_FrontendDelete_Account_Ft_TransferArgs = {
	where: Erc_Account_Ft_Transfer_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendDelete_Account_Ft_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_Mutation_FrontendDelete_Account_Nft_TransferArgs = {
	where: Erc_Account_Nft_Transfer_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendDelete_Account_Nft_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_Mutation_FrontendDelete_CollectionArgs = {
	where: Erc_Collection_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendDelete_Collection_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_Mutation_FrontendDelete_F_TokenArgs = {
	where: Erc_F_Token_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendDelete_F_Token_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_Mutation_FrontendDelete_Ft_TransferArgs = {
	where: Erc_Ft_Transfer_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendDelete_Ft_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_Mutation_FrontendDelete_Nf_TokenArgs = {
	where: Erc_Nf_Token_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendDelete_Nf_Token_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_Mutation_FrontendDelete_Nft_TransferArgs = {
	where: Erc_Nft_Transfer_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendDelete_Nft_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_Mutation_FrontendDelete_Uri_Update_ActionArgs = {
	where: Erc_Uri_Update_Action_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendDelete_Uri_Update_Action_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_Mutation_FrontendInsert_AccountArgs = {
	objects: Array<Erc_Account_Insert_Input>;
	on_conflict?: InputMaybe<Erc_Account_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Account_F_Token_BalanceArgs = {
	objects: Array<Erc_Account_F_Token_Balance_Insert_Input>;
	on_conflict?: InputMaybe<Erc_Account_F_Token_Balance_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Account_F_Token_Balance_OneArgs = {
	object: Erc_Account_F_Token_Balance_Insert_Input;
	on_conflict?: InputMaybe<Erc_Account_F_Token_Balance_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Account_Ft_TransferArgs = {
	objects: Array<Erc_Account_Ft_Transfer_Insert_Input>;
	on_conflict?: InputMaybe<Erc_Account_Ft_Transfer_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Account_Ft_Transfer_OneArgs = {
	object: Erc_Account_Ft_Transfer_Insert_Input;
	on_conflict?: InputMaybe<Erc_Account_Ft_Transfer_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Account_Nft_TransferArgs = {
	objects: Array<Erc_Account_Nft_Transfer_Insert_Input>;
	on_conflict?: InputMaybe<Erc_Account_Nft_Transfer_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Account_Nft_Transfer_OneArgs = {
	object: Erc_Account_Nft_Transfer_Insert_Input;
	on_conflict?: InputMaybe<Erc_Account_Nft_Transfer_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Account_OneArgs = {
	object: Erc_Account_Insert_Input;
	on_conflict?: InputMaybe<Erc_Account_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_CollectionArgs = {
	objects: Array<Erc_Collection_Insert_Input>;
	on_conflict?: InputMaybe<Erc_Collection_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Collection_OneArgs = {
	object: Erc_Collection_Insert_Input;
	on_conflict?: InputMaybe<Erc_Collection_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_F_TokenArgs = {
	objects: Array<Erc_F_Token_Insert_Input>;
	on_conflict?: InputMaybe<Erc_F_Token_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_F_Token_OneArgs = {
	object: Erc_F_Token_Insert_Input;
	on_conflict?: InputMaybe<Erc_F_Token_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Ft_TransferArgs = {
	objects: Array<Erc_Ft_Transfer_Insert_Input>;
	on_conflict?: InputMaybe<Erc_Ft_Transfer_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Ft_Transfer_OneArgs = {
	object: Erc_Ft_Transfer_Insert_Input;
	on_conflict?: InputMaybe<Erc_Ft_Transfer_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Nf_TokenArgs = {
	objects: Array<Erc_Nf_Token_Insert_Input>;
	on_conflict?: InputMaybe<Erc_Nf_Token_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Nf_Token_OneArgs = {
	object: Erc_Nf_Token_Insert_Input;
	on_conflict?: InputMaybe<Erc_Nf_Token_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Nft_TransferArgs = {
	objects: Array<Erc_Nft_Transfer_Insert_Input>;
	on_conflict?: InputMaybe<Erc_Nft_Transfer_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Nft_Transfer_OneArgs = {
	object: Erc_Nft_Transfer_Insert_Input;
	on_conflict?: InputMaybe<Erc_Nft_Transfer_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Uri_Update_ActionArgs = {
	objects: Array<Erc_Uri_Update_Action_Insert_Input>;
	on_conflict?: InputMaybe<Erc_Uri_Update_Action_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendInsert_Uri_Update_Action_OneArgs = {
	object: Erc_Uri_Update_Action_Insert_Input;
	on_conflict?: InputMaybe<Erc_Uri_Update_Action_On_Conflict>;
};

export type Erc_Erc_Mutation_FrontendUpdate_AccountArgs = {
	_set?: InputMaybe<Erc_Account_Set_Input>;
	where: Erc_Account_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendUpdate_Account_By_PkArgs = {
	_set?: InputMaybe<Erc_Account_Set_Input>;
	pk_columns: Erc_Account_Pk_Columns_Input;
};

export type Erc_Erc_Mutation_FrontendUpdate_Account_F_Token_BalanceArgs = {
	_inc?: InputMaybe<Erc_Account_F_Token_Balance_Inc_Input>;
	_set?: InputMaybe<Erc_Account_F_Token_Balance_Set_Input>;
	where: Erc_Account_F_Token_Balance_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendUpdate_Account_F_Token_Balance_By_PkArgs =
	{
		_inc?: InputMaybe<Erc_Account_F_Token_Balance_Inc_Input>;
		_set?: InputMaybe<Erc_Account_F_Token_Balance_Set_Input>;
		pk_columns: Erc_Account_F_Token_Balance_Pk_Columns_Input;
	};

export type Erc_Erc_Mutation_FrontendUpdate_Account_F_Token_Balance_ManyArgs = {
	updates: Array<Erc_Account_F_Token_Balance_Updates>;
};

export type Erc_Erc_Mutation_FrontendUpdate_Account_Ft_TransferArgs = {
	_set?: InputMaybe<Erc_Account_Ft_Transfer_Set_Input>;
	where: Erc_Account_Ft_Transfer_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendUpdate_Account_Ft_Transfer_By_PkArgs = {
	_set?: InputMaybe<Erc_Account_Ft_Transfer_Set_Input>;
	pk_columns: Erc_Account_Ft_Transfer_Pk_Columns_Input;
};

export type Erc_Erc_Mutation_FrontendUpdate_Account_Ft_Transfer_ManyArgs = {
	updates: Array<Erc_Account_Ft_Transfer_Updates>;
};

export type Erc_Erc_Mutation_FrontendUpdate_Account_ManyArgs = {
	updates: Array<Erc_Account_Updates>;
};

export type Erc_Erc_Mutation_FrontendUpdate_Account_Nft_TransferArgs = {
	_set?: InputMaybe<Erc_Account_Nft_Transfer_Set_Input>;
	where: Erc_Account_Nft_Transfer_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendUpdate_Account_Nft_Transfer_By_PkArgs = {
	_set?: InputMaybe<Erc_Account_Nft_Transfer_Set_Input>;
	pk_columns: Erc_Account_Nft_Transfer_Pk_Columns_Input;
};

export type Erc_Erc_Mutation_FrontendUpdate_Account_Nft_Transfer_ManyArgs = {
	updates: Array<Erc_Account_Nft_Transfer_Updates>;
};

export type Erc_Erc_Mutation_FrontendUpdate_CollectionArgs = {
	_inc?: InputMaybe<Erc_Collection_Inc_Input>;
	_set?: InputMaybe<Erc_Collection_Set_Input>;
	where: Erc_Collection_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendUpdate_Collection_By_PkArgs = {
	_inc?: InputMaybe<Erc_Collection_Inc_Input>;
	_set?: InputMaybe<Erc_Collection_Set_Input>;
	pk_columns: Erc_Collection_Pk_Columns_Input;
};

export type Erc_Erc_Mutation_FrontendUpdate_Collection_ManyArgs = {
	updates: Array<Erc_Collection_Updates>;
};

export type Erc_Erc_Mutation_FrontendUpdate_F_TokenArgs = {
	_inc?: InputMaybe<Erc_F_Token_Inc_Input>;
	_set?: InputMaybe<Erc_F_Token_Set_Input>;
	where: Erc_F_Token_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendUpdate_F_Token_By_PkArgs = {
	_inc?: InputMaybe<Erc_F_Token_Inc_Input>;
	_set?: InputMaybe<Erc_F_Token_Set_Input>;
	pk_columns: Erc_F_Token_Pk_Columns_Input;
};

export type Erc_Erc_Mutation_FrontendUpdate_F_Token_ManyArgs = {
	updates: Array<Erc_F_Token_Updates>;
};

export type Erc_Erc_Mutation_FrontendUpdate_Ft_TransferArgs = {
	_inc?: InputMaybe<Erc_Ft_Transfer_Inc_Input>;
	_set?: InputMaybe<Erc_Ft_Transfer_Set_Input>;
	where: Erc_Ft_Transfer_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendUpdate_Ft_Transfer_By_PkArgs = {
	_inc?: InputMaybe<Erc_Ft_Transfer_Inc_Input>;
	_set?: InputMaybe<Erc_Ft_Transfer_Set_Input>;
	pk_columns: Erc_Ft_Transfer_Pk_Columns_Input;
};

export type Erc_Erc_Mutation_FrontendUpdate_Ft_Transfer_ManyArgs = {
	updates: Array<Erc_Ft_Transfer_Updates>;
};

export type Erc_Erc_Mutation_FrontendUpdate_Nf_TokenArgs = {
	_inc?: InputMaybe<Erc_Nf_Token_Inc_Input>;
	_set?: InputMaybe<Erc_Nf_Token_Set_Input>;
	where: Erc_Nf_Token_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendUpdate_Nf_Token_By_PkArgs = {
	_inc?: InputMaybe<Erc_Nf_Token_Inc_Input>;
	_set?: InputMaybe<Erc_Nf_Token_Set_Input>;
	pk_columns: Erc_Nf_Token_Pk_Columns_Input;
};

export type Erc_Erc_Mutation_FrontendUpdate_Nf_Token_ManyArgs = {
	updates: Array<Erc_Nf_Token_Updates>;
};

export type Erc_Erc_Mutation_FrontendUpdate_Nft_TransferArgs = {
	_inc?: InputMaybe<Erc_Nft_Transfer_Inc_Input>;
	_set?: InputMaybe<Erc_Nft_Transfer_Set_Input>;
	where: Erc_Nft_Transfer_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendUpdate_Nft_Transfer_By_PkArgs = {
	_inc?: InputMaybe<Erc_Nft_Transfer_Inc_Input>;
	_set?: InputMaybe<Erc_Nft_Transfer_Set_Input>;
	pk_columns: Erc_Nft_Transfer_Pk_Columns_Input;
};

export type Erc_Erc_Mutation_FrontendUpdate_Nft_Transfer_ManyArgs = {
	updates: Array<Erc_Nft_Transfer_Updates>;
};

export type Erc_Erc_Mutation_FrontendUpdate_Uri_Update_ActionArgs = {
	_inc?: InputMaybe<Erc_Uri_Update_Action_Inc_Input>;
	_set?: InputMaybe<Erc_Uri_Update_Action_Set_Input>;
	where: Erc_Uri_Update_Action_Bool_Exp;
};

export type Erc_Erc_Mutation_FrontendUpdate_Uri_Update_Action_By_PkArgs = {
	_inc?: InputMaybe<Erc_Uri_Update_Action_Inc_Input>;
	_set?: InputMaybe<Erc_Uri_Update_Action_Set_Input>;
	pk_columns: Erc_Uri_Update_Action_Pk_Columns_Input;
};

export type Erc_Erc_Mutation_FrontendUpdate_Uri_Update_Action_ManyArgs = {
	updates: Array<Erc_Uri_Update_Action_Updates>;
};

export type Erc_Erc_Query = {
	__typename?: "erc_erc_query";
	/** fetch data from the table: "squid_erc.account" */
	account: Array<Erc_Account>;
	/** fetch aggregated fields from the table: "squid_erc.account" */
	account_aggregate: Erc_Account_Aggregate;
	/** fetch data from the table: "squid_erc.account" using primary key columns */
	account_by_pk?: Maybe<Erc_Account>;
	/** fetch data from the table: "squid_erc.account_f_token_balance" */
	account_f_token_balance: Array<Erc_Account_F_Token_Balance>;
	/** fetch aggregated fields from the table: "squid_erc.account_f_token_balance" */
	account_f_token_balance_aggregate: Erc_Account_F_Token_Balance_Aggregate;
	/** fetch data from the table: "squid_erc.account_f_token_balance" using primary key columns */
	account_f_token_balance_by_pk?: Maybe<Erc_Account_F_Token_Balance>;
	/** fetch data from the table: "squid_erc.account_ft_transfer" */
	account_ft_transfer: Array<Erc_Account_Ft_Transfer>;
	/** fetch aggregated fields from the table: "squid_erc.account_ft_transfer" */
	account_ft_transfer_aggregate: Erc_Account_Ft_Transfer_Aggregate;
	/** fetch data from the table: "squid_erc.account_ft_transfer" using primary key columns */
	account_ft_transfer_by_pk?: Maybe<Erc_Account_Ft_Transfer>;
	/** fetch data from the table: "squid_erc.account_nft_transfer" */
	account_nft_transfer: Array<Erc_Account_Nft_Transfer>;
	/** fetch aggregated fields from the table: "squid_erc.account_nft_transfer" */
	account_nft_transfer_aggregate: Erc_Account_Nft_Transfer_Aggregate;
	/** fetch data from the table: "squid_erc.account_nft_transfer" using primary key columns */
	account_nft_transfer_by_pk?: Maybe<Erc_Account_Nft_Transfer>;
	/** fetch data from the table: "squid_erc.collection" */
	collection: Array<Erc_Collection>;
	/** fetch aggregated fields from the table: "squid_erc.collection" */
	collection_aggregate: Erc_Collection_Aggregate;
	/** fetch data from the table: "squid_erc.collection" using primary key columns */
	collection_by_pk?: Maybe<Erc_Collection>;
	/** fetch data from the table: "squid_erc.f_token" */
	f_token: Array<Erc_F_Token>;
	/** fetch aggregated fields from the table: "squid_erc.f_token" */
	f_token_aggregate: Erc_F_Token_Aggregate;
	/** fetch data from the table: "squid_erc.f_token" using primary key columns */
	f_token_by_pk?: Maybe<Erc_F_Token>;
	/** fetch data from the table: "squid_erc.ft_transfer" */
	ft_transfer: Array<Erc_Ft_Transfer>;
	/** fetch aggregated fields from the table: "squid_erc.ft_transfer" */
	ft_transfer_aggregate: Erc_Ft_Transfer_Aggregate;
	/** fetch data from the table: "squid_erc.ft_transfer" using primary key columns */
	ft_transfer_by_pk?: Maybe<Erc_Ft_Transfer>;
	/** fetch data from the table: "squid_erc.nf_token" */
	nf_token: Array<Erc_Nf_Token>;
	/** fetch aggregated fields from the table: "squid_erc.nf_token" */
	nf_token_aggregate: Erc_Nf_Token_Aggregate;
	/** fetch data from the table: "squid_erc.nf_token" using primary key columns */
	nf_token_by_pk?: Maybe<Erc_Nf_Token>;
	/** fetch data from the table: "squid_erc.nft_transfer" */
	nft_transfer: Array<Erc_Nft_Transfer>;
	/** fetch aggregated fields from the table: "squid_erc.nft_transfer" */
	nft_transfer_aggregate: Erc_Nft_Transfer_Aggregate;
	/** fetch data from the table: "squid_erc.nft_transfer" using primary key columns */
	nft_transfer_by_pk?: Maybe<Erc_Nft_Transfer>;
	/** fetch data from the table: "squid_erc.uri_update_action" */
	uri_update_action: Array<Erc_Uri_Update_Action>;
	/** fetch aggregated fields from the table: "squid_erc.uri_update_action" */
	uri_update_action_aggregate: Erc_Uri_Update_Action_Aggregate;
	/** fetch data from the table: "squid_erc.uri_update_action" using primary key columns */
	uri_update_action_by_pk?: Maybe<Erc_Uri_Update_Action>;
};

export type Erc_Erc_QueryAccountArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Order_By>>;
	where?: InputMaybe<Erc_Account_Bool_Exp>;
};

export type Erc_Erc_QueryAccount_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Order_By>>;
	where?: InputMaybe<Erc_Account_Bool_Exp>;
};

export type Erc_Erc_QueryAccount_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_QueryAccount_F_Token_BalanceArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_F_Token_Balance_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_F_Token_Balance_Order_By>>;
	where?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
};

export type Erc_Erc_QueryAccount_F_Token_Balance_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_F_Token_Balance_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_F_Token_Balance_Order_By>>;
	where?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
};

export type Erc_Erc_QueryAccount_F_Token_Balance_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_QueryAccount_Ft_TransferArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
};

export type Erc_Erc_QueryAccount_Ft_Transfer_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
};

export type Erc_Erc_QueryAccount_Ft_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_QueryAccount_Nft_TransferArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
};

export type Erc_Erc_QueryAccount_Nft_Transfer_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
};

export type Erc_Erc_QueryAccount_Nft_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_QueryCollectionArgs = {
	distinct_on?: InputMaybe<Array<Erc_Collection_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Collection_Order_By>>;
	where?: InputMaybe<Erc_Collection_Bool_Exp>;
};

export type Erc_Erc_QueryCollection_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Collection_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Collection_Order_By>>;
	where?: InputMaybe<Erc_Collection_Bool_Exp>;
};

export type Erc_Erc_QueryCollection_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_QueryF_TokenArgs = {
	distinct_on?: InputMaybe<Array<Erc_F_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_F_Token_Order_By>>;
	where?: InputMaybe<Erc_F_Token_Bool_Exp>;
};

export type Erc_Erc_QueryF_Token_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_F_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_F_Token_Order_By>>;
	where?: InputMaybe<Erc_F_Token_Bool_Exp>;
};

export type Erc_Erc_QueryF_Token_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_QueryFt_TransferArgs = {
	distinct_on?: InputMaybe<Array<Erc_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

export type Erc_Erc_QueryFt_Transfer_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

export type Erc_Erc_QueryFt_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_QueryNf_TokenArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nf_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nf_Token_Order_By>>;
	where?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
};

export type Erc_Erc_QueryNf_Token_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nf_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nf_Token_Order_By>>;
	where?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
};

export type Erc_Erc_QueryNf_Token_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_QueryNft_TransferArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

export type Erc_Erc_QueryNft_Transfer_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

export type Erc_Erc_QueryNft_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_QueryUri_Update_ActionArgs = {
	distinct_on?: InputMaybe<Array<Erc_Uri_Update_Action_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Uri_Update_Action_Order_By>>;
	where?: InputMaybe<Erc_Uri_Update_Action_Bool_Exp>;
};

export type Erc_Erc_QueryUri_Update_Action_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Uri_Update_Action_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Uri_Update_Action_Order_By>>;
	where?: InputMaybe<Erc_Uri_Update_Action_Bool_Exp>;
};

export type Erc_Erc_QueryUri_Update_Action_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_Subscription = {
	__typename?: "erc_erc_subscription";
	/** fetch data from the table: "squid_erc.account" */
	account: Array<Erc_Account>;
	/** fetch aggregated fields from the table: "squid_erc.account" */
	account_aggregate: Erc_Account_Aggregate;
	/** fetch data from the table: "squid_erc.account" using primary key columns */
	account_by_pk?: Maybe<Erc_Account>;
	/** fetch data from the table: "squid_erc.account_f_token_balance" */
	account_f_token_balance: Array<Erc_Account_F_Token_Balance>;
	/** fetch aggregated fields from the table: "squid_erc.account_f_token_balance" */
	account_f_token_balance_aggregate: Erc_Account_F_Token_Balance_Aggregate;
	/** fetch data from the table: "squid_erc.account_f_token_balance" using primary key columns */
	account_f_token_balance_by_pk?: Maybe<Erc_Account_F_Token_Balance>;
	/** fetch data from the table in a streaming manner : "squid_erc.account_f_token_balance" */
	account_f_token_balance_stream: Array<Erc_Account_F_Token_Balance>;
	/** fetch data from the table: "squid_erc.account_ft_transfer" */
	account_ft_transfer: Array<Erc_Account_Ft_Transfer>;
	/** fetch aggregated fields from the table: "squid_erc.account_ft_transfer" */
	account_ft_transfer_aggregate: Erc_Account_Ft_Transfer_Aggregate;
	/** fetch data from the table: "squid_erc.account_ft_transfer" using primary key columns */
	account_ft_transfer_by_pk?: Maybe<Erc_Account_Ft_Transfer>;
	/** fetch data from the table in a streaming manner : "squid_erc.account_ft_transfer" */
	account_ft_transfer_stream: Array<Erc_Account_Ft_Transfer>;
	/** fetch data from the table: "squid_erc.account_nft_transfer" */
	account_nft_transfer: Array<Erc_Account_Nft_Transfer>;
	/** fetch aggregated fields from the table: "squid_erc.account_nft_transfer" */
	account_nft_transfer_aggregate: Erc_Account_Nft_Transfer_Aggregate;
	/** fetch data from the table: "squid_erc.account_nft_transfer" using primary key columns */
	account_nft_transfer_by_pk?: Maybe<Erc_Account_Nft_Transfer>;
	/** fetch data from the table in a streaming manner : "squid_erc.account_nft_transfer" */
	account_nft_transfer_stream: Array<Erc_Account_Nft_Transfer>;
	/** fetch data from the table in a streaming manner : "squid_erc.account" */
	account_stream: Array<Erc_Account>;
	/** fetch data from the table: "squid_erc.collection" */
	collection: Array<Erc_Collection>;
	/** fetch aggregated fields from the table: "squid_erc.collection" */
	collection_aggregate: Erc_Collection_Aggregate;
	/** fetch data from the table: "squid_erc.collection" using primary key columns */
	collection_by_pk?: Maybe<Erc_Collection>;
	/** fetch data from the table in a streaming manner : "squid_erc.collection" */
	collection_stream: Array<Erc_Collection>;
	/** fetch data from the table: "squid_erc.f_token" */
	f_token: Array<Erc_F_Token>;
	/** fetch aggregated fields from the table: "squid_erc.f_token" */
	f_token_aggregate: Erc_F_Token_Aggregate;
	/** fetch data from the table: "squid_erc.f_token" using primary key columns */
	f_token_by_pk?: Maybe<Erc_F_Token>;
	/** fetch data from the table in a streaming manner : "squid_erc.f_token" */
	f_token_stream: Array<Erc_F_Token>;
	/** fetch data from the table: "squid_erc.ft_transfer" */
	ft_transfer: Array<Erc_Ft_Transfer>;
	/** fetch aggregated fields from the table: "squid_erc.ft_transfer" */
	ft_transfer_aggregate: Erc_Ft_Transfer_Aggregate;
	/** fetch data from the table: "squid_erc.ft_transfer" using primary key columns */
	ft_transfer_by_pk?: Maybe<Erc_Ft_Transfer>;
	/** fetch data from the table in a streaming manner : "squid_erc.ft_transfer" */
	ft_transfer_stream: Array<Erc_Ft_Transfer>;
	/** fetch data from the table: "squid_erc.nf_token" */
	nf_token: Array<Erc_Nf_Token>;
	/** fetch aggregated fields from the table: "squid_erc.nf_token" */
	nf_token_aggregate: Erc_Nf_Token_Aggregate;
	/** fetch data from the table: "squid_erc.nf_token" using primary key columns */
	nf_token_by_pk?: Maybe<Erc_Nf_Token>;
	/** fetch data from the table in a streaming manner : "squid_erc.nf_token" */
	nf_token_stream: Array<Erc_Nf_Token>;
	/** fetch data from the table: "squid_erc.nft_transfer" */
	nft_transfer: Array<Erc_Nft_Transfer>;
	/** fetch aggregated fields from the table: "squid_erc.nft_transfer" */
	nft_transfer_aggregate: Erc_Nft_Transfer_Aggregate;
	/** fetch data from the table: "squid_erc.nft_transfer" using primary key columns */
	nft_transfer_by_pk?: Maybe<Erc_Nft_Transfer>;
	/** fetch data from the table in a streaming manner : "squid_erc.nft_transfer" */
	nft_transfer_stream: Array<Erc_Nft_Transfer>;
	/** fetch data from the table: "squid_erc.uri_update_action" */
	uri_update_action: Array<Erc_Uri_Update_Action>;
	/** fetch aggregated fields from the table: "squid_erc.uri_update_action" */
	uri_update_action_aggregate: Erc_Uri_Update_Action_Aggregate;
	/** fetch data from the table: "squid_erc.uri_update_action" using primary key columns */
	uri_update_action_by_pk?: Maybe<Erc_Uri_Update_Action>;
	/** fetch data from the table in a streaming manner : "squid_erc.uri_update_action" */
	uri_update_action_stream: Array<Erc_Uri_Update_Action>;
};

export type Erc_Erc_SubscriptionAccountArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Order_By>>;
	where?: InputMaybe<Erc_Account_Bool_Exp>;
};

export type Erc_Erc_SubscriptionAccount_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Order_By>>;
	where?: InputMaybe<Erc_Account_Bool_Exp>;
};

export type Erc_Erc_SubscriptionAccount_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_SubscriptionAccount_F_Token_BalanceArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_F_Token_Balance_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_F_Token_Balance_Order_By>>;
	where?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
};

export type Erc_Erc_SubscriptionAccount_F_Token_Balance_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_F_Token_Balance_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_F_Token_Balance_Order_By>>;
	where?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
};

export type Erc_Erc_SubscriptionAccount_F_Token_Balance_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_SubscriptionAccount_F_Token_Balance_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Erc_Account_F_Token_Balance_Stream_Cursor_Input>>;
	where?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
};

export type Erc_Erc_SubscriptionAccount_Ft_TransferArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionAccount_Ft_Transfer_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionAccount_Ft_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_SubscriptionAccount_Ft_Transfer_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Erc_Account_Ft_Transfer_Stream_Cursor_Input>>;
	where?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionAccount_Nft_TransferArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionAccount_Nft_Transfer_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionAccount_Nft_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_SubscriptionAccount_Nft_Transfer_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Erc_Account_Nft_Transfer_Stream_Cursor_Input>>;
	where?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionAccount_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Erc_Account_Stream_Cursor_Input>>;
	where?: InputMaybe<Erc_Account_Bool_Exp>;
};

export type Erc_Erc_SubscriptionCollectionArgs = {
	distinct_on?: InputMaybe<Array<Erc_Collection_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Collection_Order_By>>;
	where?: InputMaybe<Erc_Collection_Bool_Exp>;
};

export type Erc_Erc_SubscriptionCollection_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Collection_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Collection_Order_By>>;
	where?: InputMaybe<Erc_Collection_Bool_Exp>;
};

export type Erc_Erc_SubscriptionCollection_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_SubscriptionCollection_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Erc_Collection_Stream_Cursor_Input>>;
	where?: InputMaybe<Erc_Collection_Bool_Exp>;
};

export type Erc_Erc_SubscriptionF_TokenArgs = {
	distinct_on?: InputMaybe<Array<Erc_F_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_F_Token_Order_By>>;
	where?: InputMaybe<Erc_F_Token_Bool_Exp>;
};

export type Erc_Erc_SubscriptionF_Token_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_F_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_F_Token_Order_By>>;
	where?: InputMaybe<Erc_F_Token_Bool_Exp>;
};

export type Erc_Erc_SubscriptionF_Token_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_SubscriptionF_Token_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Erc_F_Token_Stream_Cursor_Input>>;
	where?: InputMaybe<Erc_F_Token_Bool_Exp>;
};

export type Erc_Erc_SubscriptionFt_TransferArgs = {
	distinct_on?: InputMaybe<Array<Erc_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionFt_Transfer_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionFt_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_SubscriptionFt_Transfer_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Erc_Ft_Transfer_Stream_Cursor_Input>>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionNf_TokenArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nf_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nf_Token_Order_By>>;
	where?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
};

export type Erc_Erc_SubscriptionNf_Token_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nf_Token_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nf_Token_Order_By>>;
	where?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
};

export type Erc_Erc_SubscriptionNf_Token_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_SubscriptionNf_Token_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Erc_Nf_Token_Stream_Cursor_Input>>;
	where?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
};

export type Erc_Erc_SubscriptionNft_TransferArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionNft_Transfer_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionNft_Transfer_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_SubscriptionNft_Transfer_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Erc_Nft_Transfer_Stream_Cursor_Input>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

export type Erc_Erc_SubscriptionUri_Update_ActionArgs = {
	distinct_on?: InputMaybe<Array<Erc_Uri_Update_Action_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Uri_Update_Action_Order_By>>;
	where?: InputMaybe<Erc_Uri_Update_Action_Bool_Exp>;
};

export type Erc_Erc_SubscriptionUri_Update_Action_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Uri_Update_Action_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Uri_Update_Action_Order_By>>;
	where?: InputMaybe<Erc_Uri_Update_Action_Bool_Exp>;
};

export type Erc_Erc_SubscriptionUri_Update_Action_By_PkArgs = {
	id: Scalars["String"];
};

export type Erc_Erc_SubscriptionUri_Update_Action_StreamArgs = {
	batch_size: Scalars["Int"];
	cursor: Array<InputMaybe<Erc_Uri_Update_Action_Stream_Cursor_Input>>;
	where?: InputMaybe<Erc_Uri_Update_Action_Bool_Exp>;
};

/** columns and relationships of "squid_erc.f_token" */
export type Erc_F_Token = {
	__typename?: "erc_f_token";
	/** An array relationship */
	account_f_token_balances: Array<Erc_Account_F_Token_Balance>;
	/** An aggregate relationship */
	account_f_token_balances_aggregate: Erc_Account_F_Token_Balance_Aggregate;
	decimals?: Maybe<Scalars["Int"]>;
	/** An array relationship */
	ft_transfers: Array<Erc_Ft_Transfer>;
	/** An aggregate relationship */
	ft_transfers_aggregate: Erc_Ft_Transfer_Aggregate;
	id: Scalars["String"];
	name?: Maybe<Scalars["String"]>;
	symbol?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "squid_erc.f_token" */
export type Erc_F_TokenAccount_F_Token_BalancesArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_F_Token_Balance_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_F_Token_Balance_Order_By>>;
	where?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
};

/** columns and relationships of "squid_erc.f_token" */
export type Erc_F_TokenAccount_F_Token_Balances_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_F_Token_Balance_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_F_Token_Balance_Order_By>>;
	where?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
};

/** columns and relationships of "squid_erc.f_token" */
export type Erc_F_TokenFt_TransfersArgs = {
	distinct_on?: InputMaybe<Array<Erc_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.f_token" */
export type Erc_F_TokenFt_Transfers_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

/** aggregated selection of "squid_erc.f_token" */
export type Erc_F_Token_Aggregate = {
	__typename?: "erc_f_token_aggregate";
	aggregate?: Maybe<Erc_F_Token_Aggregate_Fields>;
	nodes: Array<Erc_F_Token>;
};

/** aggregate fields of "squid_erc.f_token" */
export type Erc_F_Token_Aggregate_Fields = {
	__typename?: "erc_f_token_aggregate_fields";
	avg?: Maybe<Erc_F_Token_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Erc_F_Token_Max_Fields>;
	min?: Maybe<Erc_F_Token_Min_Fields>;
	stddev?: Maybe<Erc_F_Token_Stddev_Fields>;
	stddev_pop?: Maybe<Erc_F_Token_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Erc_F_Token_Stddev_Samp_Fields>;
	sum?: Maybe<Erc_F_Token_Sum_Fields>;
	var_pop?: Maybe<Erc_F_Token_Var_Pop_Fields>;
	var_samp?: Maybe<Erc_F_Token_Var_Samp_Fields>;
	variance?: Maybe<Erc_F_Token_Variance_Fields>;
};

/** aggregate fields of "squid_erc.f_token" */
export type Erc_F_Token_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Erc_F_Token_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Erc_F_Token_Avg_Fields = {
	__typename?: "erc_f_token_avg_fields";
	decimals?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "squid_erc.f_token". All fields are combined with a logical 'AND'. */
export type Erc_F_Token_Bool_Exp = {
	_and?: InputMaybe<Array<Erc_F_Token_Bool_Exp>>;
	_not?: InputMaybe<Erc_F_Token_Bool_Exp>;
	_or?: InputMaybe<Array<Erc_F_Token_Bool_Exp>>;
	account_f_token_balances?: InputMaybe<Erc_Account_F_Token_Balance_Bool_Exp>;
	decimals?: InputMaybe<Int_Comparison_Exp>;
	ft_transfers?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	symbol?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "squid_erc.f_token" */
export enum Erc_F_Token_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkDa896c08df3022e579355d781b9 = "PK_da896c08df3022e579355d781b9",
}

/** input type for incrementing numeric columns in table "squid_erc.f_token" */
export type Erc_F_Token_Inc_Input = {
	decimals?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "squid_erc.f_token" */
export type Erc_F_Token_Insert_Input = {
	account_f_token_balances?: InputMaybe<Erc_Account_F_Token_Balance_Arr_Rel_Insert_Input>;
	decimals?: InputMaybe<Scalars["Int"]>;
	ft_transfers?: InputMaybe<Erc_Ft_Transfer_Arr_Rel_Insert_Input>;
	id?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	symbol?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Erc_F_Token_Max_Fields = {
	__typename?: "erc_f_token_max_fields";
	decimals?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	symbol?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Erc_F_Token_Min_Fields = {
	__typename?: "erc_f_token_min_fields";
	decimals?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	symbol?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "squid_erc.f_token" */
export type Erc_F_Token_Mutation_Response = {
	__typename?: "erc_f_token_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Erc_F_Token>;
};

/** input type for inserting object relation for remote table "squid_erc.f_token" */
export type Erc_F_Token_Obj_Rel_Insert_Input = {
	data: Erc_F_Token_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_F_Token_On_Conflict>;
};

/** on_conflict condition type for table "squid_erc.f_token" */
export type Erc_F_Token_On_Conflict = {
	constraint: Erc_F_Token_Constraint;
	update_columns?: Array<Erc_F_Token_Update_Column>;
	where?: InputMaybe<Erc_F_Token_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_erc.f_token". */
export type Erc_F_Token_Order_By = {
	account_f_token_balances_aggregate?: InputMaybe<Erc_Account_F_Token_Balance_Aggregate_Order_By>;
	decimals?: InputMaybe<Order_By>;
	ft_transfers_aggregate?: InputMaybe<Erc_Ft_Transfer_Aggregate_Order_By>;
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	symbol?: InputMaybe<Order_By>;
};

/** primary key columns input for table: f_token */
export type Erc_F_Token_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "squid_erc.f_token" */
export enum Erc_F_Token_Select_Column {
	/** column name */
	Decimals = "decimals",
	/** column name */
	Id = "id",
	/** column name */
	Name = "name",
	/** column name */
	Symbol = "symbol",
}

/** input type for updating data in table "squid_erc.f_token" */
export type Erc_F_Token_Set_Input = {
	decimals?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	symbol?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Erc_F_Token_Stddev_Fields = {
	__typename?: "erc_f_token_stddev_fields";
	decimals?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Erc_F_Token_Stddev_Pop_Fields = {
	__typename?: "erc_f_token_stddev_pop_fields";
	decimals?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Erc_F_Token_Stddev_Samp_Fields = {
	__typename?: "erc_f_token_stddev_samp_fields";
	decimals?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "f_token" */
export type Erc_F_Token_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Erc_F_Token_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Erc_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Erc_F_Token_Stream_Cursor_Value_Input = {
	decimals?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	symbol?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Erc_F_Token_Sum_Fields = {
	__typename?: "erc_f_token_sum_fields";
	decimals?: Maybe<Scalars["Int"]>;
};

/** update columns of table "squid_erc.f_token" */
export enum Erc_F_Token_Update_Column {
	/** column name */
	Decimals = "decimals",
	/** column name */
	Id = "id",
	/** column name */
	Name = "name",
	/** column name */
	Symbol = "symbol",
}

export type Erc_F_Token_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Erc_F_Token_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Erc_F_Token_Set_Input>;
	where: Erc_F_Token_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Erc_F_Token_Var_Pop_Fields = {
	__typename?: "erc_f_token_var_pop_fields";
	decimals?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Erc_F_Token_Var_Samp_Fields = {
	__typename?: "erc_f_token_var_samp_fields";
	decimals?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Erc_F_Token_Variance_Fields = {
	__typename?: "erc_f_token_variance_fields";
	decimals?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer = {
	__typename?: "erc_ft_transfer";
	/** An object relationship */
	account: Erc_Account;
	/** An object relationship */
	accountByToId: Erc_Account;
	/** An array relationship */
	account_ft_transfers: Array<Erc_Account_Ft_Transfer>;
	/** An aggregate relationship */
	account_ft_transfers_aggregate: Erc_Account_Ft_Transfer_Aggregate;
	amount?: Maybe<Scalars["numeric"]>;
	block_number: Scalars["numeric"];
	event_index: Scalars["Int"];
	/** An object relationship */
	f_token: Erc_F_Token;
	from_id: Scalars["String"];
	id: Scalars["String"];
	timestamp: Scalars["timestamptz"];
	to_id: Scalars["String"];
	token_id: Scalars["String"];
	transfer_type?: Maybe<Scalars["String"]>;
	txn_hash: Scalars["String"];
};

/** columns and relationships of "squid_erc.ft_transfer" */
export type Erc_Ft_TransferAccount_Ft_TransfersArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.ft_transfer" */
export type Erc_Ft_TransferAccount_Ft_Transfers_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Ft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Ft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
};

/** aggregated selection of "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Aggregate = {
	__typename?: "erc_ft_transfer_aggregate";
	aggregate?: Maybe<Erc_Ft_Transfer_Aggregate_Fields>;
	nodes: Array<Erc_Ft_Transfer>;
};

/** aggregate fields of "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Aggregate_Fields = {
	__typename?: "erc_ft_transfer_aggregate_fields";
	avg?: Maybe<Erc_Ft_Transfer_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Erc_Ft_Transfer_Max_Fields>;
	min?: Maybe<Erc_Ft_Transfer_Min_Fields>;
	stddev?: Maybe<Erc_Ft_Transfer_Stddev_Fields>;
	stddev_pop?: Maybe<Erc_Ft_Transfer_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Erc_Ft_Transfer_Stddev_Samp_Fields>;
	sum?: Maybe<Erc_Ft_Transfer_Sum_Fields>;
	var_pop?: Maybe<Erc_Ft_Transfer_Var_Pop_Fields>;
	var_samp?: Maybe<Erc_Ft_Transfer_Var_Samp_Fields>;
	variance?: Maybe<Erc_Ft_Transfer_Variance_Fields>;
};

/** aggregate fields of "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Erc_Ft_Transfer_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Aggregate_Order_By = {
	avg?: InputMaybe<Erc_Ft_Transfer_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Erc_Ft_Transfer_Max_Order_By>;
	min?: InputMaybe<Erc_Ft_Transfer_Min_Order_By>;
	stddev?: InputMaybe<Erc_Ft_Transfer_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Erc_Ft_Transfer_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Erc_Ft_Transfer_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Erc_Ft_Transfer_Sum_Order_By>;
	var_pop?: InputMaybe<Erc_Ft_Transfer_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Erc_Ft_Transfer_Var_Samp_Order_By>;
	variance?: InputMaybe<Erc_Ft_Transfer_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Arr_Rel_Insert_Input = {
	data: Array<Erc_Ft_Transfer_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Ft_Transfer_On_Conflict>;
};

/** aggregate avg on columns */
export type Erc_Ft_Transfer_Avg_Fields = {
	__typename?: "erc_ft_transfer_avg_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Avg_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "squid_erc.ft_transfer". All fields are combined with a logical 'AND'. */
export type Erc_Ft_Transfer_Bool_Exp = {
	_and?: InputMaybe<Array<Erc_Ft_Transfer_Bool_Exp>>;
	_not?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
	_or?: InputMaybe<Array<Erc_Ft_Transfer_Bool_Exp>>;
	account?: InputMaybe<Erc_Account_Bool_Exp>;
	accountByToId?: InputMaybe<Erc_Account_Bool_Exp>;
	account_ft_transfers?: InputMaybe<Erc_Account_Ft_Transfer_Bool_Exp>;
	amount?: InputMaybe<Numeric_Comparison_Exp>;
	block_number?: InputMaybe<Numeric_Comparison_Exp>;
	event_index?: InputMaybe<Int_Comparison_Exp>;
	f_token?: InputMaybe<Erc_F_Token_Bool_Exp>;
	from_id?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
	to_id?: InputMaybe<String_Comparison_Exp>;
	token_id?: InputMaybe<String_Comparison_Exp>;
	transfer_type?: InputMaybe<String_Comparison_Exp>;
	txn_hash?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "squid_erc.ft_transfer" */
export enum Erc_Ft_Transfer_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_9197e98e6e5fc3ead382a4b80a3 = "PK_9197e98e6e5fc3ead382a4b80a3",
}

/** input type for incrementing numeric columns in table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Inc_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
	block_number?: InputMaybe<Scalars["numeric"]>;
	event_index?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Insert_Input = {
	account?: InputMaybe<Erc_Account_Obj_Rel_Insert_Input>;
	accountByToId?: InputMaybe<Erc_Account_Obj_Rel_Insert_Input>;
	account_ft_transfers?: InputMaybe<Erc_Account_Ft_Transfer_Arr_Rel_Insert_Input>;
	amount?: InputMaybe<Scalars["numeric"]>;
	block_number?: InputMaybe<Scalars["numeric"]>;
	event_index?: InputMaybe<Scalars["Int"]>;
	f_token?: InputMaybe<Erc_F_Token_Obj_Rel_Insert_Input>;
	from_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	to_id?: InputMaybe<Scalars["String"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	transfer_type?: InputMaybe<Scalars["String"]>;
	txn_hash?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Erc_Ft_Transfer_Max_Fields = {
	__typename?: "erc_ft_transfer_max_fields";
	amount?: Maybe<Scalars["numeric"]>;
	block_number?: Maybe<Scalars["numeric"]>;
	event_index?: Maybe<Scalars["Int"]>;
	from_id?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	to_id?: Maybe<Scalars["String"]>;
	token_id?: Maybe<Scalars["String"]>;
	transfer_type?: Maybe<Scalars["String"]>;
	txn_hash?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Max_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
	from_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	to_id?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	transfer_type?: InputMaybe<Order_By>;
	txn_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erc_Ft_Transfer_Min_Fields = {
	__typename?: "erc_ft_transfer_min_fields";
	amount?: Maybe<Scalars["numeric"]>;
	block_number?: Maybe<Scalars["numeric"]>;
	event_index?: Maybe<Scalars["Int"]>;
	from_id?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	to_id?: Maybe<Scalars["String"]>;
	token_id?: Maybe<Scalars["String"]>;
	transfer_type?: Maybe<Scalars["String"]>;
	txn_hash?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Min_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
	from_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	to_id?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	transfer_type?: InputMaybe<Order_By>;
	txn_hash?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Mutation_Response = {
	__typename?: "erc_ft_transfer_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Erc_Ft_Transfer>;
};

/** input type for inserting object relation for remote table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Obj_Rel_Insert_Input = {
	data: Erc_Ft_Transfer_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Ft_Transfer_On_Conflict>;
};

/** on_conflict condition type for table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_On_Conflict = {
	constraint: Erc_Ft_Transfer_Constraint;
	update_columns?: Array<Erc_Ft_Transfer_Update_Column>;
	where?: InputMaybe<Erc_Ft_Transfer_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_erc.ft_transfer". */
export type Erc_Ft_Transfer_Order_By = {
	account?: InputMaybe<Erc_Account_Order_By>;
	accountByToId?: InputMaybe<Erc_Account_Order_By>;
	account_ft_transfers_aggregate?: InputMaybe<Erc_Account_Ft_Transfer_Aggregate_Order_By>;
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
	f_token?: InputMaybe<Erc_F_Token_Order_By>;
	from_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	to_id?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	transfer_type?: InputMaybe<Order_By>;
	txn_hash?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ft_transfer */
export type Erc_Ft_Transfer_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "squid_erc.ft_transfer" */
export enum Erc_Ft_Transfer_Select_Column {
	/** column name */
	Amount = "amount",
	/** column name */
	BlockNumber = "block_number",
	/** column name */
	EventIndex = "event_index",
	/** column name */
	FromId = "from_id",
	/** column name */
	Id = "id",
	/** column name */
	Timestamp = "timestamp",
	/** column name */
	ToId = "to_id",
	/** column name */
	TokenId = "token_id",
	/** column name */
	TransferType = "transfer_type",
	/** column name */
	TxnHash = "txn_hash",
}

/** input type for updating data in table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Set_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
	block_number?: InputMaybe<Scalars["numeric"]>;
	event_index?: InputMaybe<Scalars["Int"]>;
	from_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	to_id?: InputMaybe<Scalars["String"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	transfer_type?: InputMaybe<Scalars["String"]>;
	txn_hash?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Erc_Ft_Transfer_Stddev_Fields = {
	__typename?: "erc_ft_transfer_stddev_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Stddev_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erc_Ft_Transfer_Stddev_Pop_Fields = {
	__typename?: "erc_ft_transfer_stddev_pop_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Stddev_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erc_Ft_Transfer_Stddev_Samp_Fields = {
	__typename?: "erc_ft_transfer_stddev_samp_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Stddev_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ft_transfer" */
export type Erc_Ft_Transfer_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Erc_Ft_Transfer_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Erc_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Erc_Ft_Transfer_Stream_Cursor_Value_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
	block_number?: InputMaybe<Scalars["numeric"]>;
	event_index?: InputMaybe<Scalars["Int"]>;
	from_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	to_id?: InputMaybe<Scalars["String"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	transfer_type?: InputMaybe<Scalars["String"]>;
	txn_hash?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Erc_Ft_Transfer_Sum_Fields = {
	__typename?: "erc_ft_transfer_sum_fields";
	amount?: Maybe<Scalars["numeric"]>;
	block_number?: Maybe<Scalars["numeric"]>;
	event_index?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Sum_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** update columns of table "squid_erc.ft_transfer" */
export enum Erc_Ft_Transfer_Update_Column {
	/** column name */
	Amount = "amount",
	/** column name */
	BlockNumber = "block_number",
	/** column name */
	EventIndex = "event_index",
	/** column name */
	FromId = "from_id",
	/** column name */
	Id = "id",
	/** column name */
	Timestamp = "timestamp",
	/** column name */
	ToId = "to_id",
	/** column name */
	TokenId = "token_id",
	/** column name */
	TransferType = "transfer_type",
	/** column name */
	TxnHash = "txn_hash",
}

export type Erc_Ft_Transfer_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Erc_Ft_Transfer_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Erc_Ft_Transfer_Set_Input>;
	where: Erc_Ft_Transfer_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Erc_Ft_Transfer_Var_Pop_Fields = {
	__typename?: "erc_ft_transfer_var_pop_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Var_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erc_Ft_Transfer_Var_Samp_Fields = {
	__typename?: "erc_ft_transfer_var_samp_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Var_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erc_Ft_Transfer_Variance_Fields = {
	__typename?: "erc_ft_transfer_variance_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "squid_erc.ft_transfer" */
export type Erc_Ft_Transfer_Variance_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** columns and relationships of "squid_erc.nf_token" */
export type Erc_Nf_Token = {
	__typename?: "erc_nf_token";
	/** An object relationship */
	account: Erc_Account;
	amount: Scalars["numeric"];
	/** An object relationship */
	collection: Erc_Collection;
	collection_id: Scalars["String"];
	current_owner_id: Scalars["String"];
	id: Scalars["String"];
	is_burned: Scalars["Boolean"];
	name?: Maybe<Scalars["String"]>;
	native_id: Scalars["String"];
	/** An array relationship */
	nft_transfers: Array<Erc_Nft_Transfer>;
	/** An aggregate relationship */
	nft_transfers_aggregate: Erc_Nft_Transfer_Aggregate;
	symbol?: Maybe<Scalars["String"]>;
	uri?: Maybe<Scalars["String"]>;
	/** An array relationship */
	uri_update_actions: Array<Erc_Uri_Update_Action>;
	/** An aggregate relationship */
	uri_update_actions_aggregate: Erc_Uri_Update_Action_Aggregate;
};

/** columns and relationships of "squid_erc.nf_token" */
export type Erc_Nf_TokenNft_TransfersArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.nf_token" */
export type Erc_Nf_TokenNft_Transfers_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.nf_token" */
export type Erc_Nf_TokenUri_Update_ActionsArgs = {
	distinct_on?: InputMaybe<Array<Erc_Uri_Update_Action_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Uri_Update_Action_Order_By>>;
	where?: InputMaybe<Erc_Uri_Update_Action_Bool_Exp>;
};

/** columns and relationships of "squid_erc.nf_token" */
export type Erc_Nf_TokenUri_Update_Actions_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Uri_Update_Action_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Uri_Update_Action_Order_By>>;
	where?: InputMaybe<Erc_Uri_Update_Action_Bool_Exp>;
};

/** aggregated selection of "squid_erc.nf_token" */
export type Erc_Nf_Token_Aggregate = {
	__typename?: "erc_nf_token_aggregate";
	aggregate?: Maybe<Erc_Nf_Token_Aggregate_Fields>;
	nodes: Array<Erc_Nf_Token>;
};

/** aggregate fields of "squid_erc.nf_token" */
export type Erc_Nf_Token_Aggregate_Fields = {
	__typename?: "erc_nf_token_aggregate_fields";
	avg?: Maybe<Erc_Nf_Token_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Erc_Nf_Token_Max_Fields>;
	min?: Maybe<Erc_Nf_Token_Min_Fields>;
	stddev?: Maybe<Erc_Nf_Token_Stddev_Fields>;
	stddev_pop?: Maybe<Erc_Nf_Token_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Erc_Nf_Token_Stddev_Samp_Fields>;
	sum?: Maybe<Erc_Nf_Token_Sum_Fields>;
	var_pop?: Maybe<Erc_Nf_Token_Var_Pop_Fields>;
	var_samp?: Maybe<Erc_Nf_Token_Var_Samp_Fields>;
	variance?: Maybe<Erc_Nf_Token_Variance_Fields>;
};

/** aggregate fields of "squid_erc.nf_token" */
export type Erc_Nf_Token_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Erc_Nf_Token_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "squid_erc.nf_token" */
export type Erc_Nf_Token_Aggregate_Order_By = {
	avg?: InputMaybe<Erc_Nf_Token_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Erc_Nf_Token_Max_Order_By>;
	min?: InputMaybe<Erc_Nf_Token_Min_Order_By>;
	stddev?: InputMaybe<Erc_Nf_Token_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Erc_Nf_Token_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Erc_Nf_Token_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Erc_Nf_Token_Sum_Order_By>;
	var_pop?: InputMaybe<Erc_Nf_Token_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Erc_Nf_Token_Var_Samp_Order_By>;
	variance?: InputMaybe<Erc_Nf_Token_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "squid_erc.nf_token" */
export type Erc_Nf_Token_Arr_Rel_Insert_Input = {
	data: Array<Erc_Nf_Token_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Nf_Token_On_Conflict>;
};

/** aggregate avg on columns */
export type Erc_Nf_Token_Avg_Fields = {
	__typename?: "erc_nf_token_avg_fields";
	amount?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "squid_erc.nf_token" */
export type Erc_Nf_Token_Avg_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "squid_erc.nf_token". All fields are combined with a logical 'AND'. */
export type Erc_Nf_Token_Bool_Exp = {
	_and?: InputMaybe<Array<Erc_Nf_Token_Bool_Exp>>;
	_not?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
	_or?: InputMaybe<Array<Erc_Nf_Token_Bool_Exp>>;
	account?: InputMaybe<Erc_Account_Bool_Exp>;
	amount?: InputMaybe<Numeric_Comparison_Exp>;
	collection?: InputMaybe<Erc_Collection_Bool_Exp>;
	collection_id?: InputMaybe<String_Comparison_Exp>;
	current_owner_id?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	is_burned?: InputMaybe<Boolean_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	native_id?: InputMaybe<String_Comparison_Exp>;
	nft_transfers?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
	symbol?: InputMaybe<String_Comparison_Exp>;
	uri?: InputMaybe<String_Comparison_Exp>;
	uri_update_actions?: InputMaybe<Erc_Uri_Update_Action_Bool_Exp>;
};

/** unique or primary key constraints on table "squid_erc.nf_token" */
export enum Erc_Nf_Token_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_4b875f332d287d53286f0120060 = "PK_4b875f332d287d53286f0120060",
}

/** input type for incrementing numeric columns in table "squid_erc.nf_token" */
export type Erc_Nf_Token_Inc_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "squid_erc.nf_token" */
export type Erc_Nf_Token_Insert_Input = {
	account?: InputMaybe<Erc_Account_Obj_Rel_Insert_Input>;
	amount?: InputMaybe<Scalars["numeric"]>;
	collection?: InputMaybe<Erc_Collection_Obj_Rel_Insert_Input>;
	collection_id?: InputMaybe<Scalars["String"]>;
	current_owner_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	is_burned?: InputMaybe<Scalars["Boolean"]>;
	name?: InputMaybe<Scalars["String"]>;
	native_id?: InputMaybe<Scalars["String"]>;
	nft_transfers?: InputMaybe<Erc_Nft_Transfer_Arr_Rel_Insert_Input>;
	symbol?: InputMaybe<Scalars["String"]>;
	uri?: InputMaybe<Scalars["String"]>;
	uri_update_actions?: InputMaybe<Erc_Uri_Update_Action_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Erc_Nf_Token_Max_Fields = {
	__typename?: "erc_nf_token_max_fields";
	amount?: Maybe<Scalars["numeric"]>;
	collection_id?: Maybe<Scalars["String"]>;
	current_owner_id?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	native_id?: Maybe<Scalars["String"]>;
	symbol?: Maybe<Scalars["String"]>;
	uri?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "squid_erc.nf_token" */
export type Erc_Nf_Token_Max_Order_By = {
	amount?: InputMaybe<Order_By>;
	collection_id?: InputMaybe<Order_By>;
	current_owner_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	native_id?: InputMaybe<Order_By>;
	symbol?: InputMaybe<Order_By>;
	uri?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erc_Nf_Token_Min_Fields = {
	__typename?: "erc_nf_token_min_fields";
	amount?: Maybe<Scalars["numeric"]>;
	collection_id?: Maybe<Scalars["String"]>;
	current_owner_id?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	native_id?: Maybe<Scalars["String"]>;
	symbol?: Maybe<Scalars["String"]>;
	uri?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "squid_erc.nf_token" */
export type Erc_Nf_Token_Min_Order_By = {
	amount?: InputMaybe<Order_By>;
	collection_id?: InputMaybe<Order_By>;
	current_owner_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	native_id?: InputMaybe<Order_By>;
	symbol?: InputMaybe<Order_By>;
	uri?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "squid_erc.nf_token" */
export type Erc_Nf_Token_Mutation_Response = {
	__typename?: "erc_nf_token_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Erc_Nf_Token>;
};

/** input type for inserting object relation for remote table "squid_erc.nf_token" */
export type Erc_Nf_Token_Obj_Rel_Insert_Input = {
	data: Erc_Nf_Token_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Nf_Token_On_Conflict>;
};

/** on_conflict condition type for table "squid_erc.nf_token" */
export type Erc_Nf_Token_On_Conflict = {
	constraint: Erc_Nf_Token_Constraint;
	update_columns?: Array<Erc_Nf_Token_Update_Column>;
	where?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_erc.nf_token". */
export type Erc_Nf_Token_Order_By = {
	account?: InputMaybe<Erc_Account_Order_By>;
	amount?: InputMaybe<Order_By>;
	collection?: InputMaybe<Erc_Collection_Order_By>;
	collection_id?: InputMaybe<Order_By>;
	current_owner_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	is_burned?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	native_id?: InputMaybe<Order_By>;
	nft_transfers_aggregate?: InputMaybe<Erc_Nft_Transfer_Aggregate_Order_By>;
	symbol?: InputMaybe<Order_By>;
	uri?: InputMaybe<Order_By>;
	uri_update_actions_aggregate?: InputMaybe<Erc_Uri_Update_Action_Aggregate_Order_By>;
};

/** primary key columns input for table: nf_token */
export type Erc_Nf_Token_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "squid_erc.nf_token" */
export enum Erc_Nf_Token_Select_Column {
	/** column name */
	Amount = "amount",
	/** column name */
	CollectionId = "collection_id",
	/** column name */
	CurrentOwnerId = "current_owner_id",
	/** column name */
	Id = "id",
	/** column name */
	IsBurned = "is_burned",
	/** column name */
	Name = "name",
	/** column name */
	NativeId = "native_id",
	/** column name */
	Symbol = "symbol",
	/** column name */
	Uri = "uri",
}

/** input type for updating data in table "squid_erc.nf_token" */
export type Erc_Nf_Token_Set_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
	collection_id?: InputMaybe<Scalars["String"]>;
	current_owner_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	is_burned?: InputMaybe<Scalars["Boolean"]>;
	name?: InputMaybe<Scalars["String"]>;
	native_id?: InputMaybe<Scalars["String"]>;
	symbol?: InputMaybe<Scalars["String"]>;
	uri?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Erc_Nf_Token_Stddev_Fields = {
	__typename?: "erc_nf_token_stddev_fields";
	amount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "squid_erc.nf_token" */
export type Erc_Nf_Token_Stddev_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erc_Nf_Token_Stddev_Pop_Fields = {
	__typename?: "erc_nf_token_stddev_pop_fields";
	amount?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "squid_erc.nf_token" */
export type Erc_Nf_Token_Stddev_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erc_Nf_Token_Stddev_Samp_Fields = {
	__typename?: "erc_nf_token_stddev_samp_fields";
	amount?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "squid_erc.nf_token" */
export type Erc_Nf_Token_Stddev_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nf_token" */
export type Erc_Nf_Token_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Erc_Nf_Token_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Erc_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Erc_Nf_Token_Stream_Cursor_Value_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
	collection_id?: InputMaybe<Scalars["String"]>;
	current_owner_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	is_burned?: InputMaybe<Scalars["Boolean"]>;
	name?: InputMaybe<Scalars["String"]>;
	native_id?: InputMaybe<Scalars["String"]>;
	symbol?: InputMaybe<Scalars["String"]>;
	uri?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Erc_Nf_Token_Sum_Fields = {
	__typename?: "erc_nf_token_sum_fields";
	amount?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "squid_erc.nf_token" */
export type Erc_Nf_Token_Sum_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** update columns of table "squid_erc.nf_token" */
export enum Erc_Nf_Token_Update_Column {
	/** column name */
	Amount = "amount",
	/** column name */
	CollectionId = "collection_id",
	/** column name */
	CurrentOwnerId = "current_owner_id",
	/** column name */
	Id = "id",
	/** column name */
	IsBurned = "is_burned",
	/** column name */
	Name = "name",
	/** column name */
	NativeId = "native_id",
	/** column name */
	Symbol = "symbol",
	/** column name */
	Uri = "uri",
}

export type Erc_Nf_Token_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Erc_Nf_Token_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Erc_Nf_Token_Set_Input>;
	where: Erc_Nf_Token_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Erc_Nf_Token_Var_Pop_Fields = {
	__typename?: "erc_nf_token_var_pop_fields";
	amount?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "squid_erc.nf_token" */
export type Erc_Nf_Token_Var_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erc_Nf_Token_Var_Samp_Fields = {
	__typename?: "erc_nf_token_var_samp_fields";
	amount?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "squid_erc.nf_token" */
export type Erc_Nf_Token_Var_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erc_Nf_Token_Variance_Fields = {
	__typename?: "erc_nf_token_variance_fields";
	amount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "squid_erc.nf_token" */
export type Erc_Nf_Token_Variance_Order_By = {
	amount?: InputMaybe<Order_By>;
};

/** columns and relationships of "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer = {
	__typename?: "erc_nft_transfer";
	/** An object relationship */
	account?: Maybe<Erc_Account>;
	/** An object relationship */
	accountByFromId: Erc_Account;
	/** An object relationship */
	accountByToId: Erc_Account;
	/** An array relationship */
	account_nft_transfers: Array<Erc_Account_Nft_Transfer>;
	/** An aggregate relationship */
	account_nft_transfers_aggregate: Erc_Account_Nft_Transfer_Aggregate;
	amount: Scalars["numeric"];
	block_number: Scalars["numeric"];
	event_index: Scalars["Int"];
	from_id: Scalars["String"];
	id: Scalars["String"];
	is_batch: Scalars["Boolean"];
	/** An object relationship */
	nf_token: Erc_Nf_Token;
	operator_id?: Maybe<Scalars["String"]>;
	timestamp: Scalars["timestamptz"];
	to_id: Scalars["String"];
	token_id: Scalars["String"];
	transfer_type?: Maybe<Scalars["String"]>;
	txn_hash: Scalars["String"];
};

/** columns and relationships of "squid_erc.nft_transfer" */
export type Erc_Nft_TransferAccount_Nft_TransfersArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
};

/** columns and relationships of "squid_erc.nft_transfer" */
export type Erc_Nft_TransferAccount_Nft_Transfers_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Erc_Account_Nft_Transfer_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Erc_Account_Nft_Transfer_Order_By>>;
	where?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
};

/** aggregated selection of "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Aggregate = {
	__typename?: "erc_nft_transfer_aggregate";
	aggregate?: Maybe<Erc_Nft_Transfer_Aggregate_Fields>;
	nodes: Array<Erc_Nft_Transfer>;
};

/** aggregate fields of "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Aggregate_Fields = {
	__typename?: "erc_nft_transfer_aggregate_fields";
	avg?: Maybe<Erc_Nft_Transfer_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Erc_Nft_Transfer_Max_Fields>;
	min?: Maybe<Erc_Nft_Transfer_Min_Fields>;
	stddev?: Maybe<Erc_Nft_Transfer_Stddev_Fields>;
	stddev_pop?: Maybe<Erc_Nft_Transfer_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Erc_Nft_Transfer_Stddev_Samp_Fields>;
	sum?: Maybe<Erc_Nft_Transfer_Sum_Fields>;
	var_pop?: Maybe<Erc_Nft_Transfer_Var_Pop_Fields>;
	var_samp?: Maybe<Erc_Nft_Transfer_Var_Samp_Fields>;
	variance?: Maybe<Erc_Nft_Transfer_Variance_Fields>;
};

/** aggregate fields of "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Erc_Nft_Transfer_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Aggregate_Order_By = {
	avg?: InputMaybe<Erc_Nft_Transfer_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Erc_Nft_Transfer_Max_Order_By>;
	min?: InputMaybe<Erc_Nft_Transfer_Min_Order_By>;
	stddev?: InputMaybe<Erc_Nft_Transfer_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Erc_Nft_Transfer_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Erc_Nft_Transfer_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Erc_Nft_Transfer_Sum_Order_By>;
	var_pop?: InputMaybe<Erc_Nft_Transfer_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Erc_Nft_Transfer_Var_Samp_Order_By>;
	variance?: InputMaybe<Erc_Nft_Transfer_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Arr_Rel_Insert_Input = {
	data: Array<Erc_Nft_Transfer_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Nft_Transfer_On_Conflict>;
};

/** aggregate avg on columns */
export type Erc_Nft_Transfer_Avg_Fields = {
	__typename?: "erc_nft_transfer_avg_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Avg_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "squid_erc.nft_transfer". All fields are combined with a logical 'AND'. */
export type Erc_Nft_Transfer_Bool_Exp = {
	_and?: InputMaybe<Array<Erc_Nft_Transfer_Bool_Exp>>;
	_not?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
	_or?: InputMaybe<Array<Erc_Nft_Transfer_Bool_Exp>>;
	account?: InputMaybe<Erc_Account_Bool_Exp>;
	accountByFromId?: InputMaybe<Erc_Account_Bool_Exp>;
	accountByToId?: InputMaybe<Erc_Account_Bool_Exp>;
	account_nft_transfers?: InputMaybe<Erc_Account_Nft_Transfer_Bool_Exp>;
	amount?: InputMaybe<Numeric_Comparison_Exp>;
	block_number?: InputMaybe<Numeric_Comparison_Exp>;
	event_index?: InputMaybe<Int_Comparison_Exp>;
	from_id?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	is_batch?: InputMaybe<Boolean_Comparison_Exp>;
	nf_token?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
	operator_id?: InputMaybe<String_Comparison_Exp>;
	timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
	to_id?: InputMaybe<String_Comparison_Exp>;
	token_id?: InputMaybe<String_Comparison_Exp>;
	transfer_type?: InputMaybe<String_Comparison_Exp>;
	txn_hash?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "squid_erc.nft_transfer" */
export enum Erc_Nft_Transfer_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_2d9d4b37560ecbcae8bd13026ab = "PK_2d9d4b37560ecbcae8bd13026ab",
}

/** input type for incrementing numeric columns in table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Inc_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
	block_number?: InputMaybe<Scalars["numeric"]>;
	event_index?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Insert_Input = {
	account?: InputMaybe<Erc_Account_Obj_Rel_Insert_Input>;
	accountByFromId?: InputMaybe<Erc_Account_Obj_Rel_Insert_Input>;
	accountByToId?: InputMaybe<Erc_Account_Obj_Rel_Insert_Input>;
	account_nft_transfers?: InputMaybe<Erc_Account_Nft_Transfer_Arr_Rel_Insert_Input>;
	amount?: InputMaybe<Scalars["numeric"]>;
	block_number?: InputMaybe<Scalars["numeric"]>;
	event_index?: InputMaybe<Scalars["Int"]>;
	from_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	is_batch?: InputMaybe<Scalars["Boolean"]>;
	nf_token?: InputMaybe<Erc_Nf_Token_Obj_Rel_Insert_Input>;
	operator_id?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	to_id?: InputMaybe<Scalars["String"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	transfer_type?: InputMaybe<Scalars["String"]>;
	txn_hash?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Erc_Nft_Transfer_Max_Fields = {
	__typename?: "erc_nft_transfer_max_fields";
	amount?: Maybe<Scalars["numeric"]>;
	block_number?: Maybe<Scalars["numeric"]>;
	event_index?: Maybe<Scalars["Int"]>;
	from_id?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	operator_id?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	to_id?: Maybe<Scalars["String"]>;
	token_id?: Maybe<Scalars["String"]>;
	transfer_type?: Maybe<Scalars["String"]>;
	txn_hash?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Max_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
	from_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	operator_id?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	to_id?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	transfer_type?: InputMaybe<Order_By>;
	txn_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erc_Nft_Transfer_Min_Fields = {
	__typename?: "erc_nft_transfer_min_fields";
	amount?: Maybe<Scalars["numeric"]>;
	block_number?: Maybe<Scalars["numeric"]>;
	event_index?: Maybe<Scalars["Int"]>;
	from_id?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	operator_id?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	to_id?: Maybe<Scalars["String"]>;
	token_id?: Maybe<Scalars["String"]>;
	transfer_type?: Maybe<Scalars["String"]>;
	txn_hash?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Min_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
	from_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	operator_id?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	to_id?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	transfer_type?: InputMaybe<Order_By>;
	txn_hash?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Mutation_Response = {
	__typename?: "erc_nft_transfer_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Erc_Nft_Transfer>;
};

/** input type for inserting object relation for remote table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Obj_Rel_Insert_Input = {
	data: Erc_Nft_Transfer_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Nft_Transfer_On_Conflict>;
};

/** on_conflict condition type for table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_On_Conflict = {
	constraint: Erc_Nft_Transfer_Constraint;
	update_columns?: Array<Erc_Nft_Transfer_Update_Column>;
	where?: InputMaybe<Erc_Nft_Transfer_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_erc.nft_transfer". */
export type Erc_Nft_Transfer_Order_By = {
	account?: InputMaybe<Erc_Account_Order_By>;
	accountByFromId?: InputMaybe<Erc_Account_Order_By>;
	accountByToId?: InputMaybe<Erc_Account_Order_By>;
	account_nft_transfers_aggregate?: InputMaybe<Erc_Account_Nft_Transfer_Aggregate_Order_By>;
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
	from_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	is_batch?: InputMaybe<Order_By>;
	nf_token?: InputMaybe<Erc_Nf_Token_Order_By>;
	operator_id?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	to_id?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	transfer_type?: InputMaybe<Order_By>;
	txn_hash?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nft_transfer */
export type Erc_Nft_Transfer_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "squid_erc.nft_transfer" */
export enum Erc_Nft_Transfer_Select_Column {
	/** column name */
	Amount = "amount",
	/** column name */
	BlockNumber = "block_number",
	/** column name */
	EventIndex = "event_index",
	/** column name */
	FromId = "from_id",
	/** column name */
	Id = "id",
	/** column name */
	IsBatch = "is_batch",
	/** column name */
	OperatorId = "operator_id",
	/** column name */
	Timestamp = "timestamp",
	/** column name */
	ToId = "to_id",
	/** column name */
	TokenId = "token_id",
	/** column name */
	TransferType = "transfer_type",
	/** column name */
	TxnHash = "txn_hash",
}

/** input type for updating data in table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Set_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
	block_number?: InputMaybe<Scalars["numeric"]>;
	event_index?: InputMaybe<Scalars["Int"]>;
	from_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	is_batch?: InputMaybe<Scalars["Boolean"]>;
	operator_id?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	to_id?: InputMaybe<Scalars["String"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	transfer_type?: InputMaybe<Scalars["String"]>;
	txn_hash?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Erc_Nft_Transfer_Stddev_Fields = {
	__typename?: "erc_nft_transfer_stddev_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Stddev_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erc_Nft_Transfer_Stddev_Pop_Fields = {
	__typename?: "erc_nft_transfer_stddev_pop_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Stddev_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erc_Nft_Transfer_Stddev_Samp_Fields = {
	__typename?: "erc_nft_transfer_stddev_samp_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Stddev_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nft_transfer" */
export type Erc_Nft_Transfer_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Erc_Nft_Transfer_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Erc_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Erc_Nft_Transfer_Stream_Cursor_Value_Input = {
	amount?: InputMaybe<Scalars["numeric"]>;
	block_number?: InputMaybe<Scalars["numeric"]>;
	event_index?: InputMaybe<Scalars["Int"]>;
	from_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	is_batch?: InputMaybe<Scalars["Boolean"]>;
	operator_id?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	to_id?: InputMaybe<Scalars["String"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	transfer_type?: InputMaybe<Scalars["String"]>;
	txn_hash?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Erc_Nft_Transfer_Sum_Fields = {
	__typename?: "erc_nft_transfer_sum_fields";
	amount?: Maybe<Scalars["numeric"]>;
	block_number?: Maybe<Scalars["numeric"]>;
	event_index?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Sum_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** update columns of table "squid_erc.nft_transfer" */
export enum Erc_Nft_Transfer_Update_Column {
	/** column name */
	Amount = "amount",
	/** column name */
	BlockNumber = "block_number",
	/** column name */
	EventIndex = "event_index",
	/** column name */
	FromId = "from_id",
	/** column name */
	Id = "id",
	/** column name */
	IsBatch = "is_batch",
	/** column name */
	OperatorId = "operator_id",
	/** column name */
	Timestamp = "timestamp",
	/** column name */
	ToId = "to_id",
	/** column name */
	TokenId = "token_id",
	/** column name */
	TransferType = "transfer_type",
	/** column name */
	TxnHash = "txn_hash",
}

export type Erc_Nft_Transfer_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Erc_Nft_Transfer_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Erc_Nft_Transfer_Set_Input>;
	where: Erc_Nft_Transfer_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Erc_Nft_Transfer_Var_Pop_Fields = {
	__typename?: "erc_nft_transfer_var_pop_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Var_Pop_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erc_Nft_Transfer_Var_Samp_Fields = {
	__typename?: "erc_nft_transfer_var_samp_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Var_Samp_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erc_Nft_Transfer_Variance_Fields = {
	__typename?: "erc_nft_transfer_variance_fields";
	amount?: Maybe<Scalars["Float"]>;
	block_number?: Maybe<Scalars["Float"]>;
	event_index?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "squid_erc.nft_transfer" */
export type Erc_Nft_Transfer_Variance_Order_By = {
	amount?: InputMaybe<Order_By>;
	block_number?: InputMaybe<Order_By>;
	event_index?: InputMaybe<Order_By>;
};

/** columns and relationships of "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action = {
	__typename?: "erc_uri_update_action";
	block_number: Scalars["numeric"];
	id: Scalars["String"];
	new_value?: Maybe<Scalars["String"]>;
	/** An object relationship */
	nf_token: Erc_Nf_Token;
	old_value?: Maybe<Scalars["String"]>;
	timestamp: Scalars["timestamptz"];
	token_id: Scalars["String"];
	txn_hash: Scalars["String"];
};

/** aggregated selection of "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Aggregate = {
	__typename?: "erc_uri_update_action_aggregate";
	aggregate?: Maybe<Erc_Uri_Update_Action_Aggregate_Fields>;
	nodes: Array<Erc_Uri_Update_Action>;
};

/** aggregate fields of "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Aggregate_Fields = {
	__typename?: "erc_uri_update_action_aggregate_fields";
	avg?: Maybe<Erc_Uri_Update_Action_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Erc_Uri_Update_Action_Max_Fields>;
	min?: Maybe<Erc_Uri_Update_Action_Min_Fields>;
	stddev?: Maybe<Erc_Uri_Update_Action_Stddev_Fields>;
	stddev_pop?: Maybe<Erc_Uri_Update_Action_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Erc_Uri_Update_Action_Stddev_Samp_Fields>;
	sum?: Maybe<Erc_Uri_Update_Action_Sum_Fields>;
	var_pop?: Maybe<Erc_Uri_Update_Action_Var_Pop_Fields>;
	var_samp?: Maybe<Erc_Uri_Update_Action_Var_Samp_Fields>;
	variance?: Maybe<Erc_Uri_Update_Action_Variance_Fields>;
};

/** aggregate fields of "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Erc_Uri_Update_Action_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Aggregate_Order_By = {
	avg?: InputMaybe<Erc_Uri_Update_Action_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Erc_Uri_Update_Action_Max_Order_By>;
	min?: InputMaybe<Erc_Uri_Update_Action_Min_Order_By>;
	stddev?: InputMaybe<Erc_Uri_Update_Action_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Erc_Uri_Update_Action_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Erc_Uri_Update_Action_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Erc_Uri_Update_Action_Sum_Order_By>;
	var_pop?: InputMaybe<Erc_Uri_Update_Action_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Erc_Uri_Update_Action_Var_Samp_Order_By>;
	variance?: InputMaybe<Erc_Uri_Update_Action_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Arr_Rel_Insert_Input = {
	data: Array<Erc_Uri_Update_Action_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Erc_Uri_Update_Action_On_Conflict>;
};

/** aggregate avg on columns */
export type Erc_Uri_Update_Action_Avg_Fields = {
	__typename?: "erc_uri_update_action_avg_fields";
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Avg_Order_By = {
	block_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "squid_erc.uri_update_action". All fields are combined with a logical 'AND'. */
export type Erc_Uri_Update_Action_Bool_Exp = {
	_and?: InputMaybe<Array<Erc_Uri_Update_Action_Bool_Exp>>;
	_not?: InputMaybe<Erc_Uri_Update_Action_Bool_Exp>;
	_or?: InputMaybe<Array<Erc_Uri_Update_Action_Bool_Exp>>;
	block_number?: InputMaybe<Numeric_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	new_value?: InputMaybe<String_Comparison_Exp>;
	nf_token?: InputMaybe<Erc_Nf_Token_Bool_Exp>;
	old_value?: InputMaybe<String_Comparison_Exp>;
	timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
	token_id?: InputMaybe<String_Comparison_Exp>;
	txn_hash?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "squid_erc.uri_update_action" */
export enum Erc_Uri_Update_Action_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_0de40fe0fe070f895e84d31ecd0 = "PK_0de40fe0fe070f895e84d31ecd0",
}

/** input type for incrementing numeric columns in table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Inc_Input = {
	block_number?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Insert_Input = {
	block_number?: InputMaybe<Scalars["numeric"]>;
	id?: InputMaybe<Scalars["String"]>;
	new_value?: InputMaybe<Scalars["String"]>;
	nf_token?: InputMaybe<Erc_Nf_Token_Obj_Rel_Insert_Input>;
	old_value?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	txn_hash?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Erc_Uri_Update_Action_Max_Fields = {
	__typename?: "erc_uri_update_action_max_fields";
	block_number?: Maybe<Scalars["numeric"]>;
	id?: Maybe<Scalars["String"]>;
	new_value?: Maybe<Scalars["String"]>;
	old_value?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	token_id?: Maybe<Scalars["String"]>;
	txn_hash?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Max_Order_By = {
	block_number?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	new_value?: InputMaybe<Order_By>;
	old_value?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	txn_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Erc_Uri_Update_Action_Min_Fields = {
	__typename?: "erc_uri_update_action_min_fields";
	block_number?: Maybe<Scalars["numeric"]>;
	id?: Maybe<Scalars["String"]>;
	new_value?: Maybe<Scalars["String"]>;
	old_value?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	token_id?: Maybe<Scalars["String"]>;
	txn_hash?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Min_Order_By = {
	block_number?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	new_value?: InputMaybe<Order_By>;
	old_value?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	txn_hash?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Mutation_Response = {
	__typename?: "erc_uri_update_action_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Erc_Uri_Update_Action>;
};

/** on_conflict condition type for table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_On_Conflict = {
	constraint: Erc_Uri_Update_Action_Constraint;
	update_columns?: Array<Erc_Uri_Update_Action_Update_Column>;
	where?: InputMaybe<Erc_Uri_Update_Action_Bool_Exp>;
};

/** Ordering options when selecting data from "squid_erc.uri_update_action". */
export type Erc_Uri_Update_Action_Order_By = {
	block_number?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	new_value?: InputMaybe<Order_By>;
	nf_token?: InputMaybe<Erc_Nf_Token_Order_By>;
	old_value?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	token_id?: InputMaybe<Order_By>;
	txn_hash?: InputMaybe<Order_By>;
};

/** primary key columns input for table: uri_update_action */
export type Erc_Uri_Update_Action_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "squid_erc.uri_update_action" */
export enum Erc_Uri_Update_Action_Select_Column {
	/** column name */
	BlockNumber = "block_number",
	/** column name */
	Id = "id",
	/** column name */
	NewValue = "new_value",
	/** column name */
	OldValue = "old_value",
	/** column name */
	Timestamp = "timestamp",
	/** column name */
	TokenId = "token_id",
	/** column name */
	TxnHash = "txn_hash",
}

/** input type for updating data in table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Set_Input = {
	block_number?: InputMaybe<Scalars["numeric"]>;
	id?: InputMaybe<Scalars["String"]>;
	new_value?: InputMaybe<Scalars["String"]>;
	old_value?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	txn_hash?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Erc_Uri_Update_Action_Stddev_Fields = {
	__typename?: "erc_uri_update_action_stddev_fields";
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Stddev_Order_By = {
	block_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Erc_Uri_Update_Action_Stddev_Pop_Fields = {
	__typename?: "erc_uri_update_action_stddev_pop_fields";
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Stddev_Pop_Order_By = {
	block_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Erc_Uri_Update_Action_Stddev_Samp_Fields = {
	__typename?: "erc_uri_update_action_stddev_samp_fields";
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Stddev_Samp_Order_By = {
	block_number?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "uri_update_action" */
export type Erc_Uri_Update_Action_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Erc_Uri_Update_Action_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Erc_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Erc_Uri_Update_Action_Stream_Cursor_Value_Input = {
	block_number?: InputMaybe<Scalars["numeric"]>;
	id?: InputMaybe<Scalars["String"]>;
	new_value?: InputMaybe<Scalars["String"]>;
	old_value?: InputMaybe<Scalars["String"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	token_id?: InputMaybe<Scalars["String"]>;
	txn_hash?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Erc_Uri_Update_Action_Sum_Fields = {
	__typename?: "erc_uri_update_action_sum_fields";
	block_number?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Sum_Order_By = {
	block_number?: InputMaybe<Order_By>;
};

/** update columns of table "squid_erc.uri_update_action" */
export enum Erc_Uri_Update_Action_Update_Column {
	/** column name */
	BlockNumber = "block_number",
	/** column name */
	Id = "id",
	/** column name */
	NewValue = "new_value",
	/** column name */
	OldValue = "old_value",
	/** column name */
	Timestamp = "timestamp",
	/** column name */
	TokenId = "token_id",
	/** column name */
	TxnHash = "txn_hash",
}

export type Erc_Uri_Update_Action_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Erc_Uri_Update_Action_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Erc_Uri_Update_Action_Set_Input>;
	where: Erc_Uri_Update_Action_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Erc_Uri_Update_Action_Var_Pop_Fields = {
	__typename?: "erc_uri_update_action_var_pop_fields";
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Var_Pop_Order_By = {
	block_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Erc_Uri_Update_Action_Var_Samp_Fields = {
	__typename?: "erc_uri_update_action_var_samp_fields";
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Var_Samp_Order_By = {
	block_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Erc_Uri_Update_Action_Variance_Fields = {
	__typename?: "erc_uri_update_action_variance_fields";
	block_number?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "squid_erc.uri_update_action" */
export type Erc_Uri_Update_Action_Variance_Order_By = {
	block_number?: InputMaybe<Order_By>;
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
	erc?: Maybe<Erc_Erc_Mutation_Frontend>;
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
	erc?: Maybe<Erc_Erc_Query>;
};

export type Subscription_Root = {
	__typename?: "subscription_root";
	archive?: Maybe<Archive_Archive_Subscription>;
	balances?: Maybe<Balances_Balances_Subscription>;
	erc?: Maybe<Erc_Erc_Subscription>;
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

export type GetErcTransfersForAddressQueryVariables = Exact<{
	address: Scalars["String"];
	offset?: InputMaybe<Scalars["Int"]>;
}>;

export type GetErcTransfersForAddressQuery = {
	__typename?: "query_root";
	erc?: {
		__typename?: "erc_erc_query";
		ft_transfer: Array<{
			__typename?: "erc_ft_transfer";
			id: string;
			amount?: any | null;
			block_number: any;
			timestamp: any;
			to_id: string;
			from_id: string;
			event_index: number;
			token_id: string;
			transfer_type?: string | null;
			txn_hash: string;
		}>;
		nft_transfer: Array<{
			__typename?: "erc_nft_transfer";
			id: string;
			amount: any;
			block_number: any;
			timestamp: any;
			to_id: string;
			from_id: string;
			event_index: number;
			token_id: string;
			transfer_type?: string | null;
			txn_hash: string;
		}>;
		ft_transfer_aggregate: {
			__typename?: "erc_ft_transfer_aggregate";
			aggregate?: {
				__typename?: "erc_ft_transfer_aggregate_fields";
				count: number;
			} | null;
		};
		nft_transfer_aggregate: {
			__typename?: "erc_nft_transfer_aggregate";
			aggregate?: {
				__typename?: "erc_nft_transfer_aggregate_fields";
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
			hash: any;
			success: boolean;
			index_in_block: number;
			block: { __typename?: "archive_block"; height: number; timestamp: any };
			calls: Array<{ __typename?: "archive_call"; name: string }>;
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
export const GetErcTransfersForAddressDocument = `
    query GetErcTransfersForAddress($address: String!, $offset: Int) {
  erc {
    ft_transfer(
      limit: $offset
      where: {_or: {from_id: {_eq: $address}, id: {_eq: $address}}}
    ) {
      id
      amount
      block_number
      timestamp
      to_id
      from_id
      event_index
      token_id
      transfer_type
      txn_hash
    }
    nft_transfer(
      limit: $offset
      where: {_or: {from_id: {_eq: $address}, id: {_eq: $address}}}
    ) {
      id
      amount
      block_number
      timestamp
      to_id
      from_id
      event_index
      token_id
      transfer_type
      txn_hash
    }
    ft_transfer_aggregate(
      where: {_or: {from_id: {_eq: $address}, id: {_eq: $address}}}
    ) {
      aggregate {
        count
      }
    }
    nft_transfer_aggregate(
      where: {_or: {from_id: {_eq: $address}, id: {_eq: $address}}}
    ) {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetErcTransfersForAddressQuery = <
	TData = GetErcTransfersForAddressQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetErcTransfersForAddressQueryVariables,
	options?: UseQueryOptions<GetErcTransfersForAddressQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetErcTransfersForAddressQuery, TError, TData>(
		["GetErcTransfersForAddress", variables],
		fetcher<
			GetErcTransfersForAddressQuery,
			GetErcTransfersForAddressQueryVariables
		>(client, GetErcTransfersForAddressDocument, variables, headers),
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
export const GetExtrinsicsDocument = `
    query GetExtrinsics($limit: Int!, $offset: Int) {
  archive {
    extrinsic(limit: $limit, offset: $offset, order_by: {block: {height: desc}}) {
      id
      hash
      success
      index_in_block
      block {
        height
        timestamp
      }
      calls {
        name
      }
      events_aggregate {
        aggregate {
          count
        }
      }
    }
    extrinsic_aggregate {
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
