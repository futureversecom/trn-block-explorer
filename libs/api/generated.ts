import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Big number integer */
  archive_BigInt: any;
  /** A scalar that can represent any JSON value */
  archive_JSON: any;
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
  transfers_BigInt: any;
  /** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
  transfers_DateTime: any;
};

export type ArchiveQuery = {
  __typename?: 'archiveQuery';
  blockById?: Maybe<Archive_Block>;
  blockByUniqueInput?: Maybe<Archive_Block>;
  blocks: Array<Archive_Block>;
  blocksConnection: Archive_BlocksConnection;
  callById?: Maybe<Archive_Call>;
  callByUniqueInput?: Maybe<Archive_Call>;
  calls: Array<Archive_Call>;
  callsConnection: Archive_CallsConnection;
  eventById?: Maybe<Archive_Event>;
  eventByUniqueInput?: Maybe<Archive_Event>;
  events: Array<Archive_Event>;
  eventsConnection: Archive_EventsConnection;
  extrinsicById?: Maybe<Archive_Extrinsic>;
  extrinsicByUniqueInput?: Maybe<Archive_Extrinsic>;
  extrinsics: Array<Archive_Extrinsic>;
  extrinsicsConnection: Archive_ExtrinsicsConnection;
  metadata: Array<Archive_Metadata>;
  metadataById?: Maybe<Archive_Metadata>;
  metadataByUniqueInput?: Maybe<Archive_Metadata>;
  metadataConnection: Archive_MetadataConnection;
};


export type ArchiveQueryBlockByIdArgs = {
  id: Scalars['ID'];
};


export type ArchiveQueryBlockByUniqueInputArgs = {
  where: Archive_BlockWhereUniqueInput;
};


export type ArchiveQueryBlocksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<Archive_BlockOrderByInput>>>;
  where?: InputMaybe<Archive_BlockWhereInput>;
};


export type ArchiveQueryBlocksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<Archive_BlockOrderByInput>;
  where?: InputMaybe<Archive_BlockWhereInput>;
};


export type ArchiveQueryCallByIdArgs = {
  id: Scalars['ID'];
};


export type ArchiveQueryCallByUniqueInputArgs = {
  where: Archive_CallWhereUniqueInput;
};


export type ArchiveQueryCallsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<Archive_CallOrderByInput>>>;
  where?: InputMaybe<Archive_CallWhereInput>;
};


export type ArchiveQueryCallsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<Archive_CallOrderByInput>;
  where?: InputMaybe<Archive_CallWhereInput>;
};


export type ArchiveQueryEventByIdArgs = {
  id: Scalars['ID'];
};


export type ArchiveQueryEventByUniqueInputArgs = {
  where: Archive_EventWhereUniqueInput;
};


export type ArchiveQueryEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<Archive_EventOrderByInput>>>;
  where?: InputMaybe<Archive_EventWhereInput>;
};


export type ArchiveQueryEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<Archive_EventOrderByInput>;
  where?: InputMaybe<Archive_EventWhereInput>;
};


export type ArchiveQueryExtrinsicByIdArgs = {
  id: Scalars['ID'];
};


export type ArchiveQueryExtrinsicByUniqueInputArgs = {
  where: Archive_ExtrinsicWhereUniqueInput;
};


export type ArchiveQueryExtrinsicsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<Archive_ExtrinsicOrderByInput>>>;
  where?: InputMaybe<Archive_ExtrinsicWhereInput>;
};


export type ArchiveQueryExtrinsicsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<Archive_ExtrinsicOrderByInput>;
  where?: InputMaybe<Archive_ExtrinsicWhereInput>;
};


export type ArchiveQueryMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<Archive_MetadataOrderByInput>>>;
  where?: InputMaybe<Archive_MetadataWhereInput>;
};


export type ArchiveQueryMetadataByIdArgs = {
  id: Scalars['ID'];
};


export type ArchiveQueryMetadataByUniqueInputArgs = {
  where: Archive_MetadataWhereUniqueInput;
};


export type ArchiveQueryMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<Archive_MetadataOrderByInput>;
  where?: InputMaybe<Archive_MetadataWhereInput>;
};

export type Archive_Block = {
  __typename?: 'archive_Block';
  calls: Array<Archive_Call>;
  events: Array<Archive_Event>;
  extrinsics: Array<Archive_Extrinsic>;
  hash: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  parentHash: Scalars['String'];
  spec: Archive_Metadata;
  timestamp: Scalars['archive_BigInt'];
  validator?: Maybe<Scalars['String']>;
};


export type Archive_BlockCallsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<Archive_CallOrderByInput>>>;
  where?: InputMaybe<Archive_CallWhereInput>;
};


export type Archive_BlockEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<Archive_EventOrderByInput>>>;
  where?: InputMaybe<Archive_EventWhereInput>;
};


export type Archive_BlockExtrinsicsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<Archive_ExtrinsicOrderByInput>>>;
  where?: InputMaybe<Archive_ExtrinsicWhereInput>;
};

export type Archive_BlockEdge = {
  __typename?: 'archive_BlockEdge';
  cursor: Scalars['String'];
  node: Archive_Block;
};

export enum Archive_BlockOrderByInput {
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ParentHashAsc = 'parentHash_ASC',
  ParentHashDesc = 'parentHash_DESC',
  SpecBlockHashAsc = 'spec_blockHash_ASC',
  SpecBlockHashDesc = 'spec_blockHash_DESC',
  SpecBlockHeightAsc = 'spec_blockHeight_ASC',
  SpecBlockHeightDesc = 'spec_blockHeight_DESC',
  SpecHexAsc = 'spec_hex_ASC',
  SpecHexDesc = 'spec_hex_DESC',
  SpecIdAsc = 'spec_id_ASC',
  SpecIdDesc = 'spec_id_DESC',
  SpecSpecNameAsc = 'spec_specName_ASC',
  SpecSpecNameDesc = 'spec_specName_DESC',
  SpecSpecVersionAsc = 'spec_specVersion_ASC',
  SpecSpecVersionDesc = 'spec_specVersion_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  ValidatorAsc = 'validator_ASC',
  ValidatorDesc = 'validator_DESC'
}

export type Archive_BlockWhereInput = {
  AND?: InputMaybe<Array<Archive_BlockWhereInput>>;
  OR?: InputMaybe<Array<Archive_BlockWhereInput>>;
  calls_every?: InputMaybe<Archive_CallWhereInput>;
  calls_none?: InputMaybe<Archive_CallWhereInput>;
  calls_some?: InputMaybe<Archive_CallWhereInput>;
  events_every?: InputMaybe<Archive_EventWhereInput>;
  events_none?: InputMaybe<Archive_EventWhereInput>;
  events_some?: InputMaybe<Archive_EventWhereInput>;
  extrinsics_every?: InputMaybe<Archive_ExtrinsicWhereInput>;
  extrinsics_none?: InputMaybe<Archive_ExtrinsicWhereInput>;
  extrinsics_some?: InputMaybe<Archive_ExtrinsicWhereInput>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_containsInsensitive?: InputMaybe<Scalars['String']>;
  hash_endsWith?: InputMaybe<Scalars['String']>;
  hash_eq?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  hash_not_endsWith?: InputMaybe<Scalars['String']>;
  hash_not_eq?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_startsWith?: InputMaybe<Scalars['String']>;
  hash_startsWith?: InputMaybe<Scalars['String']>;
  height_eq?: InputMaybe<Scalars['Int']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<Scalars['Int']>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not_eq?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  parentHash_contains?: InputMaybe<Scalars['String']>;
  parentHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  parentHash_endsWith?: InputMaybe<Scalars['String']>;
  parentHash_eq?: InputMaybe<Scalars['String']>;
  parentHash_gt?: InputMaybe<Scalars['String']>;
  parentHash_gte?: InputMaybe<Scalars['String']>;
  parentHash_in?: InputMaybe<Array<Scalars['String']>>;
  parentHash_lt?: InputMaybe<Scalars['String']>;
  parentHash_lte?: InputMaybe<Scalars['String']>;
  parentHash_not_contains?: InputMaybe<Scalars['String']>;
  parentHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  parentHash_not_endsWith?: InputMaybe<Scalars['String']>;
  parentHash_not_eq?: InputMaybe<Scalars['String']>;
  parentHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  parentHash_not_startsWith?: InputMaybe<Scalars['String']>;
  parentHash_startsWith?: InputMaybe<Scalars['String']>;
  spec?: InputMaybe<Archive_MetadataWhereInput>;
  timestamp_eq?: InputMaybe<Scalars['archive_BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['archive_BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['archive_BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['archive_BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['archive_BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['archive_BigInt']>;
  timestamp_not_eq?: InputMaybe<Scalars['archive_BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['archive_BigInt']>>;
  validator_contains?: InputMaybe<Scalars['String']>;
  validator_containsInsensitive?: InputMaybe<Scalars['String']>;
  validator_endsWith?: InputMaybe<Scalars['String']>;
  validator_eq?: InputMaybe<Scalars['String']>;
  validator_gt?: InputMaybe<Scalars['String']>;
  validator_gte?: InputMaybe<Scalars['String']>;
  validator_in?: InputMaybe<Array<Scalars['String']>>;
  validator_isNull?: InputMaybe<Scalars['Boolean']>;
  validator_lt?: InputMaybe<Scalars['String']>;
  validator_lte?: InputMaybe<Scalars['String']>;
  validator_not_contains?: InputMaybe<Scalars['String']>;
  validator_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  validator_not_endsWith?: InputMaybe<Scalars['String']>;
  validator_not_eq?: InputMaybe<Scalars['String']>;
  validator_not_in?: InputMaybe<Array<Scalars['String']>>;
  validator_not_startsWith?: InputMaybe<Scalars['String']>;
  validator_startsWith?: InputMaybe<Scalars['String']>;
};

export type Archive_BlockWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Archive_BlocksConnection = {
  __typename?: 'archive_BlocksConnection';
  edges: Array<Archive_BlockEdge>;
  pageInfo: Balances_PageInfo;
  totalCount: Scalars['Int'];
};

export type Archive_Call = {
  __typename?: 'archive_Call';
  args?: Maybe<Scalars['archive_JSON']>;
  block: Archive_Block;
  error?: Maybe<Scalars['archive_JSON']>;
  extrinsic: Archive_Extrinsic;
  id: Scalars['ID'];
  name: Scalars['String'];
  origin?: Maybe<Scalars['archive_JSON']>;
  parent?: Maybe<Archive_Call>;
  pos: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Archive_CallEdge = {
  __typename?: 'archive_CallEdge';
  cursor: Scalars['String'];
  node: Archive_Call;
};

export enum Archive_CallOrderByInput {
  BlockHashAsc = 'block_hash_ASC',
  BlockHashDesc = 'block_hash_DESC',
  BlockHeightAsc = 'block_height_ASC',
  BlockHeightDesc = 'block_height_DESC',
  BlockIdAsc = 'block_id_ASC',
  BlockIdDesc = 'block_id_DESC',
  BlockParentHashAsc = 'block_parentHash_ASC',
  BlockParentHashDesc = 'block_parentHash_DESC',
  BlockTimestampAsc = 'block_timestamp_ASC',
  BlockTimestampDesc = 'block_timestamp_DESC',
  BlockValidatorAsc = 'block_validator_ASC',
  BlockValidatorDesc = 'block_validator_DESC',
  ExtrinsicFeeAsc = 'extrinsic_fee_ASC',
  ExtrinsicFeeDesc = 'extrinsic_fee_DESC',
  ExtrinsicHashAsc = 'extrinsic_hash_ASC',
  ExtrinsicHashDesc = 'extrinsic_hash_DESC',
  ExtrinsicIdAsc = 'extrinsic_id_ASC',
  ExtrinsicIdDesc = 'extrinsic_id_DESC',
  ExtrinsicIndexInBlockAsc = 'extrinsic_indexInBlock_ASC',
  ExtrinsicIndexInBlockDesc = 'extrinsic_indexInBlock_DESC',
  ExtrinsicPosAsc = 'extrinsic_pos_ASC',
  ExtrinsicPosDesc = 'extrinsic_pos_DESC',
  ExtrinsicSuccessAsc = 'extrinsic_success_ASC',
  ExtrinsicSuccessDesc = 'extrinsic_success_DESC',
  ExtrinsicTipAsc = 'extrinsic_tip_ASC',
  ExtrinsicTipDesc = 'extrinsic_tip_DESC',
  ExtrinsicVersionAsc = 'extrinsic_version_ASC',
  ExtrinsicVersionDesc = 'extrinsic_version_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ParentIdAsc = 'parent_id_ASC',
  ParentIdDesc = 'parent_id_DESC',
  ParentNameAsc = 'parent_name_ASC',
  ParentNameDesc = 'parent_name_DESC',
  ParentPosAsc = 'parent_pos_ASC',
  ParentPosDesc = 'parent_pos_DESC',
  ParentSuccessAsc = 'parent_success_ASC',
  ParentSuccessDesc = 'parent_success_DESC',
  PosAsc = 'pos_ASC',
  PosDesc = 'pos_DESC',
  SuccessAsc = 'success_ASC',
  SuccessDesc = 'success_DESC'
}

export type Archive_CallWhereInput = {
  AND?: InputMaybe<Array<Archive_CallWhereInput>>;
  OR?: InputMaybe<Array<Archive_CallWhereInput>>;
  args_eq?: InputMaybe<Scalars['archive_JSON']>;
  args_isNull?: InputMaybe<Scalars['Boolean']>;
  args_jsonContains?: InputMaybe<Scalars['archive_JSON']>;
  args_jsonHasKey?: InputMaybe<Scalars['archive_JSON']>;
  args_not_eq?: InputMaybe<Scalars['archive_JSON']>;
  block?: InputMaybe<Archive_BlockWhereInput>;
  error_eq?: InputMaybe<Scalars['archive_JSON']>;
  error_isNull?: InputMaybe<Scalars['Boolean']>;
  error_jsonContains?: InputMaybe<Scalars['archive_JSON']>;
  error_jsonHasKey?: InputMaybe<Scalars['archive_JSON']>;
  error_not_eq?: InputMaybe<Scalars['archive_JSON']>;
  extrinsic?: InputMaybe<Archive_ExtrinsicWhereInput>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_containsInsensitive?: InputMaybe<Scalars['String']>;
  name_endsWith?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  name_not_endsWith?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_startsWith?: InputMaybe<Scalars['String']>;
  name_startsWith?: InputMaybe<Scalars['String']>;
  origin_eq?: InputMaybe<Scalars['archive_JSON']>;
  origin_isNull?: InputMaybe<Scalars['Boolean']>;
  origin_jsonContains?: InputMaybe<Scalars['archive_JSON']>;
  origin_jsonHasKey?: InputMaybe<Scalars['archive_JSON']>;
  origin_not_eq?: InputMaybe<Scalars['archive_JSON']>;
  parent?: InputMaybe<Archive_CallWhereInput>;
  parent_isNull?: InputMaybe<Scalars['Boolean']>;
  pos_eq?: InputMaybe<Scalars['Int']>;
  pos_gt?: InputMaybe<Scalars['Int']>;
  pos_gte?: InputMaybe<Scalars['Int']>;
  pos_in?: InputMaybe<Array<Scalars['Int']>>;
  pos_lt?: InputMaybe<Scalars['Int']>;
  pos_lte?: InputMaybe<Scalars['Int']>;
  pos_not_eq?: InputMaybe<Scalars['Int']>;
  pos_not_in?: InputMaybe<Array<Scalars['Int']>>;
  success_eq?: InputMaybe<Scalars['Boolean']>;
  success_not_eq?: InputMaybe<Scalars['Boolean']>;
};

export type Archive_CallWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Archive_CallsConnection = {
  __typename?: 'archive_CallsConnection';
  edges: Array<Archive_CallEdge>;
  pageInfo: Balances_PageInfo;
  totalCount: Scalars['Int'];
};

export type Archive_Event = {
  __typename?: 'archive_Event';
  args?: Maybe<Scalars['archive_JSON']>;
  block: Archive_Block;
  call?: Maybe<Archive_Call>;
  extrinsic?: Maybe<Archive_Extrinsic>;
  id: Scalars['ID'];
  indexInBlock: Scalars['Int'];
  name: Scalars['String'];
  phase: Scalars['String'];
  pos: Scalars['Int'];
};

export type Archive_EventEdge = {
  __typename?: 'archive_EventEdge';
  cursor: Scalars['String'];
  node: Archive_Event;
};

export enum Archive_EventOrderByInput {
  BlockHashAsc = 'block_hash_ASC',
  BlockHashDesc = 'block_hash_DESC',
  BlockHeightAsc = 'block_height_ASC',
  BlockHeightDesc = 'block_height_DESC',
  BlockIdAsc = 'block_id_ASC',
  BlockIdDesc = 'block_id_DESC',
  BlockParentHashAsc = 'block_parentHash_ASC',
  BlockParentHashDesc = 'block_parentHash_DESC',
  BlockTimestampAsc = 'block_timestamp_ASC',
  BlockTimestampDesc = 'block_timestamp_DESC',
  BlockValidatorAsc = 'block_validator_ASC',
  BlockValidatorDesc = 'block_validator_DESC',
  CallIdAsc = 'call_id_ASC',
  CallIdDesc = 'call_id_DESC',
  CallNameAsc = 'call_name_ASC',
  CallNameDesc = 'call_name_DESC',
  CallPosAsc = 'call_pos_ASC',
  CallPosDesc = 'call_pos_DESC',
  CallSuccessAsc = 'call_success_ASC',
  CallSuccessDesc = 'call_success_DESC',
  ExtrinsicFeeAsc = 'extrinsic_fee_ASC',
  ExtrinsicFeeDesc = 'extrinsic_fee_DESC',
  ExtrinsicHashAsc = 'extrinsic_hash_ASC',
  ExtrinsicHashDesc = 'extrinsic_hash_DESC',
  ExtrinsicIdAsc = 'extrinsic_id_ASC',
  ExtrinsicIdDesc = 'extrinsic_id_DESC',
  ExtrinsicIndexInBlockAsc = 'extrinsic_indexInBlock_ASC',
  ExtrinsicIndexInBlockDesc = 'extrinsic_indexInBlock_DESC',
  ExtrinsicPosAsc = 'extrinsic_pos_ASC',
  ExtrinsicPosDesc = 'extrinsic_pos_DESC',
  ExtrinsicSuccessAsc = 'extrinsic_success_ASC',
  ExtrinsicSuccessDesc = 'extrinsic_success_DESC',
  ExtrinsicTipAsc = 'extrinsic_tip_ASC',
  ExtrinsicTipDesc = 'extrinsic_tip_DESC',
  ExtrinsicVersionAsc = 'extrinsic_version_ASC',
  ExtrinsicVersionDesc = 'extrinsic_version_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhaseAsc = 'phase_ASC',
  PhaseDesc = 'phase_DESC',
  PosAsc = 'pos_ASC',
  PosDesc = 'pos_DESC'
}

export type Archive_EventWhereInput = {
  AND?: InputMaybe<Array<Archive_EventWhereInput>>;
  OR?: InputMaybe<Array<Archive_EventWhereInput>>;
  args_eq?: InputMaybe<Scalars['archive_JSON']>;
  args_isNull?: InputMaybe<Scalars['Boolean']>;
  args_jsonContains?: InputMaybe<Scalars['archive_JSON']>;
  args_jsonHasKey?: InputMaybe<Scalars['archive_JSON']>;
  args_not_eq?: InputMaybe<Scalars['archive_JSON']>;
  block?: InputMaybe<Archive_BlockWhereInput>;
  call?: InputMaybe<Archive_CallWhereInput>;
  call_isNull?: InputMaybe<Scalars['Boolean']>;
  extrinsic?: InputMaybe<Archive_ExtrinsicWhereInput>;
  extrinsic_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  indexInBlock_eq?: InputMaybe<Scalars['Int']>;
  indexInBlock_gt?: InputMaybe<Scalars['Int']>;
  indexInBlock_gte?: InputMaybe<Scalars['Int']>;
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  indexInBlock_lt?: InputMaybe<Scalars['Int']>;
  indexInBlock_lte?: InputMaybe<Scalars['Int']>;
  indexInBlock_not_eq?: InputMaybe<Scalars['Int']>;
  indexInBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_containsInsensitive?: InputMaybe<Scalars['String']>;
  name_endsWith?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  name_not_endsWith?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_startsWith?: InputMaybe<Scalars['String']>;
  name_startsWith?: InputMaybe<Scalars['String']>;
  phase_contains?: InputMaybe<Scalars['String']>;
  phase_containsInsensitive?: InputMaybe<Scalars['String']>;
  phase_endsWith?: InputMaybe<Scalars['String']>;
  phase_eq?: InputMaybe<Scalars['String']>;
  phase_gt?: InputMaybe<Scalars['String']>;
  phase_gte?: InputMaybe<Scalars['String']>;
  phase_in?: InputMaybe<Array<Scalars['String']>>;
  phase_lt?: InputMaybe<Scalars['String']>;
  phase_lte?: InputMaybe<Scalars['String']>;
  phase_not_contains?: InputMaybe<Scalars['String']>;
  phase_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  phase_not_endsWith?: InputMaybe<Scalars['String']>;
  phase_not_eq?: InputMaybe<Scalars['String']>;
  phase_not_in?: InputMaybe<Array<Scalars['String']>>;
  phase_not_startsWith?: InputMaybe<Scalars['String']>;
  phase_startsWith?: InputMaybe<Scalars['String']>;
  pos_eq?: InputMaybe<Scalars['Int']>;
  pos_gt?: InputMaybe<Scalars['Int']>;
  pos_gte?: InputMaybe<Scalars['Int']>;
  pos_in?: InputMaybe<Array<Scalars['Int']>>;
  pos_lt?: InputMaybe<Scalars['Int']>;
  pos_lte?: InputMaybe<Scalars['Int']>;
  pos_not_eq?: InputMaybe<Scalars['Int']>;
  pos_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type Archive_EventWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Archive_EventsConnection = {
  __typename?: 'archive_EventsConnection';
  edges: Array<Archive_EventEdge>;
  pageInfo: Balances_PageInfo;
  totalCount: Scalars['Int'];
};

export type Archive_Extrinsic = {
  __typename?: 'archive_Extrinsic';
  block: Archive_Block;
  call: Archive_Call;
  calls: Array<Archive_Call>;
  error?: Maybe<Scalars['archive_JSON']>;
  fee?: Maybe<Scalars['Int']>;
  hash: Scalars['String'];
  id: Scalars['ID'];
  indexInBlock: Scalars['Int'];
  pos: Scalars['Int'];
  signature?: Maybe<Scalars['archive_JSON']>;
  success: Scalars['Boolean'];
  tip?: Maybe<Scalars['Int']>;
  version: Scalars['Int'];
};


export type Archive_ExtrinsicCallsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<Archive_CallOrderByInput>>>;
  where?: InputMaybe<Archive_CallWhereInput>;
};

export type Archive_ExtrinsicEdge = {
  __typename?: 'archive_ExtrinsicEdge';
  cursor: Scalars['String'];
  node: Archive_Extrinsic;
};

export enum Archive_ExtrinsicOrderByInput {
  BlockHashAsc = 'block_hash_ASC',
  BlockHashDesc = 'block_hash_DESC',
  BlockHeightAsc = 'block_height_ASC',
  BlockHeightDesc = 'block_height_DESC',
  BlockIdAsc = 'block_id_ASC',
  BlockIdDesc = 'block_id_DESC',
  BlockParentHashAsc = 'block_parentHash_ASC',
  BlockParentHashDesc = 'block_parentHash_DESC',
  BlockTimestampAsc = 'block_timestamp_ASC',
  BlockTimestampDesc = 'block_timestamp_DESC',
  BlockValidatorAsc = 'block_validator_ASC',
  BlockValidatorDesc = 'block_validator_DESC',
  CallIdAsc = 'call_id_ASC',
  CallIdDesc = 'call_id_DESC',
  CallNameAsc = 'call_name_ASC',
  CallNameDesc = 'call_name_DESC',
  CallPosAsc = 'call_pos_ASC',
  CallPosDesc = 'call_pos_DESC',
  CallSuccessAsc = 'call_success_ASC',
  CallSuccessDesc = 'call_success_DESC',
  FeeAsc = 'fee_ASC',
  FeeDesc = 'fee_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  PosAsc = 'pos_ASC',
  PosDesc = 'pos_DESC',
  SuccessAsc = 'success_ASC',
  SuccessDesc = 'success_DESC',
  TipAsc = 'tip_ASC',
  TipDesc = 'tip_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC'
}

export type Archive_ExtrinsicWhereInput = {
  AND?: InputMaybe<Array<Archive_ExtrinsicWhereInput>>;
  OR?: InputMaybe<Array<Archive_ExtrinsicWhereInput>>;
  block?: InputMaybe<Archive_BlockWhereInput>;
  call?: InputMaybe<Archive_CallWhereInput>;
  calls_every?: InputMaybe<Archive_CallWhereInput>;
  calls_none?: InputMaybe<Archive_CallWhereInput>;
  calls_some?: InputMaybe<Archive_CallWhereInput>;
  error_eq?: InputMaybe<Scalars['archive_JSON']>;
  error_isNull?: InputMaybe<Scalars['Boolean']>;
  error_jsonContains?: InputMaybe<Scalars['archive_JSON']>;
  error_jsonHasKey?: InputMaybe<Scalars['archive_JSON']>;
  error_not_eq?: InputMaybe<Scalars['archive_JSON']>;
  fee_eq?: InputMaybe<Scalars['Int']>;
  fee_gt?: InputMaybe<Scalars['Int']>;
  fee_gte?: InputMaybe<Scalars['Int']>;
  fee_in?: InputMaybe<Array<Scalars['Int']>>;
  fee_isNull?: InputMaybe<Scalars['Boolean']>;
  fee_lt?: InputMaybe<Scalars['Int']>;
  fee_lte?: InputMaybe<Scalars['Int']>;
  fee_not_eq?: InputMaybe<Scalars['Int']>;
  fee_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_containsInsensitive?: InputMaybe<Scalars['String']>;
  hash_endsWith?: InputMaybe<Scalars['String']>;
  hash_eq?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  hash_not_endsWith?: InputMaybe<Scalars['String']>;
  hash_not_eq?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_startsWith?: InputMaybe<Scalars['String']>;
  hash_startsWith?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  indexInBlock_eq?: InputMaybe<Scalars['Int']>;
  indexInBlock_gt?: InputMaybe<Scalars['Int']>;
  indexInBlock_gte?: InputMaybe<Scalars['Int']>;
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  indexInBlock_lt?: InputMaybe<Scalars['Int']>;
  indexInBlock_lte?: InputMaybe<Scalars['Int']>;
  indexInBlock_not_eq?: InputMaybe<Scalars['Int']>;
  indexInBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pos_eq?: InputMaybe<Scalars['Int']>;
  pos_gt?: InputMaybe<Scalars['Int']>;
  pos_gte?: InputMaybe<Scalars['Int']>;
  pos_in?: InputMaybe<Array<Scalars['Int']>>;
  pos_lt?: InputMaybe<Scalars['Int']>;
  pos_lte?: InputMaybe<Scalars['Int']>;
  pos_not_eq?: InputMaybe<Scalars['Int']>;
  pos_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signature_eq?: InputMaybe<Scalars['archive_JSON']>;
  signature_isNull?: InputMaybe<Scalars['Boolean']>;
  signature_jsonContains?: InputMaybe<Scalars['archive_JSON']>;
  signature_jsonHasKey?: InputMaybe<Scalars['archive_JSON']>;
  signature_not_eq?: InputMaybe<Scalars['archive_JSON']>;
  success_eq?: InputMaybe<Scalars['Boolean']>;
  success_not_eq?: InputMaybe<Scalars['Boolean']>;
  tip_eq?: InputMaybe<Scalars['Int']>;
  tip_gt?: InputMaybe<Scalars['Int']>;
  tip_gte?: InputMaybe<Scalars['Int']>;
  tip_in?: InputMaybe<Array<Scalars['Int']>>;
  tip_isNull?: InputMaybe<Scalars['Boolean']>;
  tip_lt?: InputMaybe<Scalars['Int']>;
  tip_lte?: InputMaybe<Scalars['Int']>;
  tip_not_eq?: InputMaybe<Scalars['Int']>;
  tip_not_in?: InputMaybe<Array<Scalars['Int']>>;
  version_eq?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not_eq?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type Archive_ExtrinsicWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Archive_ExtrinsicsConnection = {
  __typename?: 'archive_ExtrinsicsConnection';
  edges: Array<Archive_ExtrinsicEdge>;
  pageInfo: Balances_PageInfo;
  totalCount: Scalars['Int'];
};

export type Archive_Metadata = {
  __typename?: 'archive_Metadata';
  blockHash: Scalars['String'];
  blockHeight: Scalars['Int'];
  hex: Scalars['String'];
  id: Scalars['ID'];
  specName: Scalars['String'];
  specVersion?: Maybe<Scalars['Int']>;
};

export type Archive_MetadataConnection = {
  __typename?: 'archive_MetadataConnection';
  edges: Array<Archive_MetadataEdge>;
  pageInfo: Balances_PageInfo;
  totalCount: Scalars['Int'];
};

export type Archive_MetadataEdge = {
  __typename?: 'archive_MetadataEdge';
  cursor: Scalars['String'];
  node: Archive_Metadata;
};

export enum Archive_MetadataOrderByInput {
  BlockHashAsc = 'blockHash_ASC',
  BlockHashDesc = 'blockHash_DESC',
  BlockHeightAsc = 'blockHeight_ASC',
  BlockHeightDesc = 'blockHeight_DESC',
  HexAsc = 'hex_ASC',
  HexDesc = 'hex_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SpecNameAsc = 'specName_ASC',
  SpecNameDesc = 'specName_DESC',
  SpecVersionAsc = 'specVersion_ASC',
  SpecVersionDesc = 'specVersion_DESC'
}

export type Archive_MetadataWhereInput = {
  AND?: InputMaybe<Array<Archive_MetadataWhereInput>>;
  OR?: InputMaybe<Array<Archive_MetadataWhereInput>>;
  blockHash_contains?: InputMaybe<Scalars['String']>;
  blockHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  blockHash_endsWith?: InputMaybe<Scalars['String']>;
  blockHash_eq?: InputMaybe<Scalars['String']>;
  blockHash_gt?: InputMaybe<Scalars['String']>;
  blockHash_gte?: InputMaybe<Scalars['String']>;
  blockHash_in?: InputMaybe<Array<Scalars['String']>>;
  blockHash_lt?: InputMaybe<Scalars['String']>;
  blockHash_lte?: InputMaybe<Scalars['String']>;
  blockHash_not_contains?: InputMaybe<Scalars['String']>;
  blockHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  blockHash_not_endsWith?: InputMaybe<Scalars['String']>;
  blockHash_not_eq?: InputMaybe<Scalars['String']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockHash_not_startsWith?: InputMaybe<Scalars['String']>;
  blockHash_startsWith?: InputMaybe<Scalars['String']>;
  blockHeight_eq?: InputMaybe<Scalars['Int']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']>;
  blockHeight_in?: InputMaybe<Array<Scalars['Int']>>;
  blockHeight_lt?: InputMaybe<Scalars['Int']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']>;
  blockHeight_not_eq?: InputMaybe<Scalars['Int']>;
  blockHeight_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hex_contains?: InputMaybe<Scalars['String']>;
  hex_containsInsensitive?: InputMaybe<Scalars['String']>;
  hex_endsWith?: InputMaybe<Scalars['String']>;
  hex_eq?: InputMaybe<Scalars['String']>;
  hex_gt?: InputMaybe<Scalars['String']>;
  hex_gte?: InputMaybe<Scalars['String']>;
  hex_in?: InputMaybe<Array<Scalars['String']>>;
  hex_lt?: InputMaybe<Scalars['String']>;
  hex_lte?: InputMaybe<Scalars['String']>;
  hex_not_contains?: InputMaybe<Scalars['String']>;
  hex_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  hex_not_endsWith?: InputMaybe<Scalars['String']>;
  hex_not_eq?: InputMaybe<Scalars['String']>;
  hex_not_in?: InputMaybe<Array<Scalars['String']>>;
  hex_not_startsWith?: InputMaybe<Scalars['String']>;
  hex_startsWith?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_endsWith?: InputMaybe<Scalars['ID']>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['ID']>;
  id_not_endsWith?: InputMaybe<Scalars['ID']>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_startsWith?: InputMaybe<Scalars['ID']>;
  id_startsWith?: InputMaybe<Scalars['ID']>;
  specName_contains?: InputMaybe<Scalars['String']>;
  specName_containsInsensitive?: InputMaybe<Scalars['String']>;
  specName_endsWith?: InputMaybe<Scalars['String']>;
  specName_eq?: InputMaybe<Scalars['String']>;
  specName_gt?: InputMaybe<Scalars['String']>;
  specName_gte?: InputMaybe<Scalars['String']>;
  specName_in?: InputMaybe<Array<Scalars['String']>>;
  specName_lt?: InputMaybe<Scalars['String']>;
  specName_lte?: InputMaybe<Scalars['String']>;
  specName_not_contains?: InputMaybe<Scalars['String']>;
  specName_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  specName_not_endsWith?: InputMaybe<Scalars['String']>;
  specName_not_eq?: InputMaybe<Scalars['String']>;
  specName_not_in?: InputMaybe<Array<Scalars['String']>>;
  specName_not_startsWith?: InputMaybe<Scalars['String']>;
  specName_startsWith?: InputMaybe<Scalars['String']>;
  specVersion_eq?: InputMaybe<Scalars['Int']>;
  specVersion_gt?: InputMaybe<Scalars['Int']>;
  specVersion_gte?: InputMaybe<Scalars['Int']>;
  specVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  specVersion_isNull?: InputMaybe<Scalars['Boolean']>;
  specVersion_lt?: InputMaybe<Scalars['Int']>;
  specVersion_lte?: InputMaybe<Scalars['Int']>;
  specVersion_not_eq?: InputMaybe<Scalars['Int']>;
  specVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type Archive_MetadataWhereUniqueInput = {
  id: Scalars['ID'];
};

export type BalancesQuery = {
  __typename?: 'balancesQuery';
  accountById?: Maybe<Balances_Account>;
  accountByUniqueInput?: Maybe<Balances_Account>;
  accounts: Array<Balances_Account>;
  accountsConnection: Balances_AccountsConnection;
  chainInfo: Balances_ChainInfo;
  chainStateById?: Maybe<Balances_ChainState>;
  chainStateByUniqueInput?: Maybe<Balances_ChainState>;
  chainStates: Array<Balances_ChainState>;
  chainStatesConnection: Balances_ChainStatesConnection;
  currentChainState: Balances_ChainStateObject;
  squidStatus?: Maybe<Balances_SquidStatus>;
};


export type BalancesQueryAccountByIdArgs = {
  id: Scalars['String'];
};


export type BalancesQueryAccountByUniqueInputArgs = {
  where: Balances_WhereIdInput;
};


export type BalancesQueryAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Balances_AccountOrderByInput>>;
  where?: InputMaybe<Balances_AccountWhereInput>;
};


export type BalancesQueryAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<Balances_AccountOrderByInput>;
  where?: InputMaybe<Balances_AccountWhereInput>;
};


export type BalancesQueryChainStateByIdArgs = {
  id: Scalars['String'];
};


export type BalancesQueryChainStateByUniqueInputArgs = {
  where: Balances_WhereIdInput;
};


export type BalancesQueryChainStatesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Balances_ChainStateOrderByInput>>;
  where?: InputMaybe<Balances_ChainStateWhereInput>;
};


export type BalancesQueryChainStatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<Balances_ChainStateOrderByInput>;
  where?: InputMaybe<Balances_ChainStateWhereInput>;
};

export type BalancesSubscription = {
  __typename?: 'balancesSubscription';
  accountById?: Maybe<Balances_Account>;
  accounts: Array<Balances_Account>;
  chainStateById?: Maybe<Balances_ChainState>;
  chainStates: Array<Balances_ChainState>;
};


export type BalancesSubscriptionAccountByIdArgs = {
  id: Scalars['String'];
};


export type BalancesSubscriptionAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Balances_AccountOrderByInput>>;
  where?: InputMaybe<Balances_AccountWhereInput>;
};


export type BalancesSubscriptionChainStateByIdArgs = {
  id: Scalars['String'];
};


export type BalancesSubscriptionChainStatesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Balances_ChainStateOrderByInput>>;
  where?: InputMaybe<Balances_ChainStateWhereInput>;
};

export type Balances_Account = {
  __typename?: 'balances_Account';
  free: Scalars['balances_BigInt'];
  id: Scalars['String'];
  reserved: Scalars['balances_BigInt'];
  total: Scalars['balances_BigInt'];
  updatedAt?: Maybe<Scalars['Int']>;
};

export type Balances_AccountEdge = {
  __typename?: 'balances_AccountEdge';
  cursor: Scalars['String'];
  node: Balances_Account;
};

export enum Balances_AccountOrderByInput {
  FreeAsc = 'free_ASC',
  FreeDesc = 'free_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ReservedAsc = 'reserved_ASC',
  ReservedDesc = 'reserved_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type Balances_AccountWhereInput = {
  AND?: InputMaybe<Array<Balances_AccountWhereInput>>;
  OR?: InputMaybe<Array<Balances_AccountWhereInput>>;
  free_eq?: InputMaybe<Scalars['balances_BigInt']>;
  free_gt?: InputMaybe<Scalars['balances_BigInt']>;
  free_gte?: InputMaybe<Scalars['balances_BigInt']>;
  free_in?: InputMaybe<Array<Scalars['balances_BigInt']>>;
  free_isNull?: InputMaybe<Scalars['Boolean']>;
  free_lt?: InputMaybe<Scalars['balances_BigInt']>;
  free_lte?: InputMaybe<Scalars['balances_BigInt']>;
  free_not_eq?: InputMaybe<Scalars['balances_BigInt']>;
  free_not_in?: InputMaybe<Array<Scalars['balances_BigInt']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  reserved_eq?: InputMaybe<Scalars['balances_BigInt']>;
  reserved_gt?: InputMaybe<Scalars['balances_BigInt']>;
  reserved_gte?: InputMaybe<Scalars['balances_BigInt']>;
  reserved_in?: InputMaybe<Array<Scalars['balances_BigInt']>>;
  reserved_isNull?: InputMaybe<Scalars['Boolean']>;
  reserved_lt?: InputMaybe<Scalars['balances_BigInt']>;
  reserved_lte?: InputMaybe<Scalars['balances_BigInt']>;
  reserved_not_eq?: InputMaybe<Scalars['balances_BigInt']>;
  reserved_not_in?: InputMaybe<Array<Scalars['balances_BigInt']>>;
  total_eq?: InputMaybe<Scalars['balances_BigInt']>;
  total_gt?: InputMaybe<Scalars['balances_BigInt']>;
  total_gte?: InputMaybe<Scalars['balances_BigInt']>;
  total_in?: InputMaybe<Array<Scalars['balances_BigInt']>>;
  total_isNull?: InputMaybe<Scalars['Boolean']>;
  total_lt?: InputMaybe<Scalars['balances_BigInt']>;
  total_lte?: InputMaybe<Scalars['balances_BigInt']>;
  total_not_eq?: InputMaybe<Scalars['balances_BigInt']>;
  total_not_in?: InputMaybe<Array<Scalars['balances_BigInt']>>;
  updatedAt_eq?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_isNull?: InputMaybe<Scalars['Boolean']>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_not_eq?: InputMaybe<Scalars['Int']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type Balances_AccountsConnection = {
  __typename?: 'balances_AccountsConnection';
  edges: Array<Balances_AccountEdge>;
  pageInfo: Balances_PageInfo;
  totalCount: Scalars['Int'];
};

export type Balances_ChainInfo = {
  __typename?: 'balances_ChainInfo';
  displayName: Scalars['String'];
  name: Scalars['String'];
  paraId?: Maybe<Scalars['Float']>;
  prefix?: Maybe<Scalars['Float']>;
  relayChain?: Maybe<Scalars['String']>;
  tokens: Array<Balances_Token>;
};

export type Balances_ChainState = {
  __typename?: 'balances_ChainState';
  blockNumber: Scalars['Int'];
  councilMembers: Scalars['Int'];
  councilProposals: Scalars['Int'];
  democracyProposals: Scalars['Int'];
  id: Scalars['String'];
  timestamp: Scalars['balances_DateTime'];
  tokenBalance: Scalars['balances_BigInt'];
  tokenHolders: Scalars['Int'];
};

export type Balances_ChainStateEdge = {
  __typename?: 'balances_ChainStateEdge';
  cursor: Scalars['String'];
  node: Balances_ChainState;
};

export type Balances_ChainStateObject = {
  __typename?: 'balances_ChainStateObject';
  blockNumber: Scalars['Float'];
  councilMembers: Scalars['Float'];
  councilProposals: Scalars['Float'];
  democracyProposals: Scalars['Float'];
  timestamp: Scalars['balances_DateTime'];
  tokenBalance: Scalars['balances_BigInt'];
  tokenHolders: Scalars['Float'];
};

export enum Balances_ChainStateOrderByInput {
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  CouncilMembersAsc = 'councilMembers_ASC',
  CouncilMembersDesc = 'councilMembers_DESC',
  CouncilProposalsAsc = 'councilProposals_ASC',
  CouncilProposalsDesc = 'councilProposals_DESC',
  DemocracyProposalsAsc = 'democracyProposals_ASC',
  DemocracyProposalsDesc = 'democracyProposals_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  TokenBalanceAsc = 'tokenBalance_ASC',
  TokenBalanceDesc = 'tokenBalance_DESC',
  TokenHoldersAsc = 'tokenHolders_ASC',
  TokenHoldersDesc = 'tokenHolders_DESC'
}

export type Balances_ChainStateWhereInput = {
  AND?: InputMaybe<Array<Balances_ChainStateWhereInput>>;
  OR?: InputMaybe<Array<Balances_ChainStateWhereInput>>;
  blockNumber_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  councilMembers_eq?: InputMaybe<Scalars['Int']>;
  councilMembers_gt?: InputMaybe<Scalars['Int']>;
  councilMembers_gte?: InputMaybe<Scalars['Int']>;
  councilMembers_in?: InputMaybe<Array<Scalars['Int']>>;
  councilMembers_isNull?: InputMaybe<Scalars['Boolean']>;
  councilMembers_lt?: InputMaybe<Scalars['Int']>;
  councilMembers_lte?: InputMaybe<Scalars['Int']>;
  councilMembers_not_eq?: InputMaybe<Scalars['Int']>;
  councilMembers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  councilProposals_eq?: InputMaybe<Scalars['Int']>;
  councilProposals_gt?: InputMaybe<Scalars['Int']>;
  councilProposals_gte?: InputMaybe<Scalars['Int']>;
  councilProposals_in?: InputMaybe<Array<Scalars['Int']>>;
  councilProposals_isNull?: InputMaybe<Scalars['Boolean']>;
  councilProposals_lt?: InputMaybe<Scalars['Int']>;
  councilProposals_lte?: InputMaybe<Scalars['Int']>;
  councilProposals_not_eq?: InputMaybe<Scalars['Int']>;
  councilProposals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  democracyProposals_eq?: InputMaybe<Scalars['Int']>;
  democracyProposals_gt?: InputMaybe<Scalars['Int']>;
  democracyProposals_gte?: InputMaybe<Scalars['Int']>;
  democracyProposals_in?: InputMaybe<Array<Scalars['Int']>>;
  democracyProposals_isNull?: InputMaybe<Scalars['Boolean']>;
  democracyProposals_lt?: InputMaybe<Scalars['Int']>;
  democracyProposals_lte?: InputMaybe<Scalars['Int']>;
  democracyProposals_not_eq?: InputMaybe<Scalars['Int']>;
  democracyProposals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  timestamp_eq?: InputMaybe<Scalars['balances_DateTime']>;
  timestamp_gt?: InputMaybe<Scalars['balances_DateTime']>;
  timestamp_gte?: InputMaybe<Scalars['balances_DateTime']>;
  timestamp_in?: InputMaybe<Array<Scalars['balances_DateTime']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['balances_DateTime']>;
  timestamp_lte?: InputMaybe<Scalars['balances_DateTime']>;
  timestamp_not_eq?: InputMaybe<Scalars['balances_DateTime']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['balances_DateTime']>>;
  tokenBalance_eq?: InputMaybe<Scalars['balances_BigInt']>;
  tokenBalance_gt?: InputMaybe<Scalars['balances_BigInt']>;
  tokenBalance_gte?: InputMaybe<Scalars['balances_BigInt']>;
  tokenBalance_in?: InputMaybe<Array<Scalars['balances_BigInt']>>;
  tokenBalance_isNull?: InputMaybe<Scalars['Boolean']>;
  tokenBalance_lt?: InputMaybe<Scalars['balances_BigInt']>;
  tokenBalance_lte?: InputMaybe<Scalars['balances_BigInt']>;
  tokenBalance_not_eq?: InputMaybe<Scalars['balances_BigInt']>;
  tokenBalance_not_in?: InputMaybe<Array<Scalars['balances_BigInt']>>;
  tokenHolders_eq?: InputMaybe<Scalars['Int']>;
  tokenHolders_gt?: InputMaybe<Scalars['Int']>;
  tokenHolders_gte?: InputMaybe<Scalars['Int']>;
  tokenHolders_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenHolders_isNull?: InputMaybe<Scalars['Boolean']>;
  tokenHolders_lt?: InputMaybe<Scalars['Int']>;
  tokenHolders_lte?: InputMaybe<Scalars['Int']>;
  tokenHolders_not_eq?: InputMaybe<Scalars['Int']>;
  tokenHolders_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type Balances_ChainStatesConnection = {
  __typename?: 'balances_ChainStatesConnection';
  edges: Array<Balances_ChainStateEdge>;
  pageInfo: Balances_PageInfo;
  totalCount: Scalars['Int'];
};

export type Balances_PageInfo = {
  __typename?: 'balances_PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Balances_SquidStatus = {
  __typename?: 'balances_SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']>;
};

export type Balances_Token = {
  __typename?: 'balances_Token';
  decimals?: Maybe<Scalars['String']>;
  symbol: Scalars['String'];
};

export type Balances_WhereIdInput = {
  id: Scalars['String'];
};

export type EvmQuery = {
  __typename?: 'evmQuery';
  squidStatus?: Maybe<Balances_SquidStatus>;
  transactionById?: Maybe<Evm_Transaction>;
  transactionByUniqueInput?: Maybe<Evm_Transaction>;
  transactions: Array<Evm_Transaction>;
  transactionsConnection: Evm_TransactionsConnection;
};


export type EvmQueryTransactionByIdArgs = {
  id: Scalars['String'];
};


export type EvmQueryTransactionByUniqueInputArgs = {
  where: Balances_WhereIdInput;
};


export type EvmQueryTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Evm_TransactionOrderByInput>>;
  where?: InputMaybe<Evm_TransactionWhereInput>;
};


export type EvmQueryTransactionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<Evm_TransactionOrderByInput>;
  where?: InputMaybe<Evm_TransactionWhereInput>;
};

export type EvmSubscription = {
  __typename?: 'evmSubscription';
  transactionById?: Maybe<Evm_Transaction>;
  transactions: Array<Evm_Transaction>;
};


export type EvmSubscriptionTransactionByIdArgs = {
  id: Scalars['String'];
};


export type EvmSubscriptionTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Evm_TransactionOrderByInput>>;
  where?: InputMaybe<Evm_TransactionWhereInput>;
};

export type Evm_Eip1559 = {
  __typename?: 'evm_EIP1559';
  gasLimit: Scalars['evm_BigInt'];
  maxFeePerGas: Scalars['evm_BigInt'];
  maxPriorityFeePerGas: Scalars['evm_BigInt'];
  value: Scalars['evm_BigInt'];
};

export type Evm_Eip2930 = {
  __typename?: 'evm_EIP2930';
  gasLimit: Scalars['evm_BigInt'];
  gasPrice: Scalars['evm_BigInt'];
  value: Scalars['evm_BigInt'];
};

export type Evm_Legacy = {
  __typename?: 'evm_Legacy';
  gasLimit: Scalars['evm_BigInt'];
  gasPrice: Scalars['evm_BigInt'];
  value: Scalars['evm_BigInt'];
};

export type Evm_Transaction = {
  __typename?: 'evm_Transaction';
  block: Scalars['Int'];
  data?: Maybe<Evm_TransactionData>;
  from: Scalars['String'];
  id: Scalars['String'];
  input: Scalars['evm_JSON'];
  method: Scalars['String'];
  timestamp: Scalars['evm_DateTime'];
  to: Scalars['String'];
  txHash: Scalars['String'];
  type: Scalars['Int'];
};

export type Evm_TransactionData = Evm_Eip1559 | Evm_Eip2930 | Evm_Legacy;

export type Evm_TransactionDataWhereInput = {
  gasLimit_eq?: InputMaybe<Scalars['evm_BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['evm_BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['evm_BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['evm_BigInt']>>;
  gasLimit_isNull?: InputMaybe<Scalars['Boolean']>;
  gasLimit_lt?: InputMaybe<Scalars['evm_BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['evm_BigInt']>;
  gasLimit_not_eq?: InputMaybe<Scalars['evm_BigInt']>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['evm_BigInt']>>;
  gasPrice_eq?: InputMaybe<Scalars['evm_BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['evm_BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['evm_BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['evm_BigInt']>>;
  gasPrice_isNull?: InputMaybe<Scalars['Boolean']>;
  gasPrice_lt?: InputMaybe<Scalars['evm_BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['evm_BigInt']>;
  gasPrice_not_eq?: InputMaybe<Scalars['evm_BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['evm_BigInt']>>;
  isTypeOf_contains?: InputMaybe<Scalars['String']>;
  isTypeOf_containsInsensitive?: InputMaybe<Scalars['String']>;
  isTypeOf_endsWith?: InputMaybe<Scalars['String']>;
  isTypeOf_eq?: InputMaybe<Scalars['String']>;
  isTypeOf_gt?: InputMaybe<Scalars['String']>;
  isTypeOf_gte?: InputMaybe<Scalars['String']>;
  isTypeOf_in?: InputMaybe<Array<Scalars['String']>>;
  isTypeOf_isNull?: InputMaybe<Scalars['Boolean']>;
  isTypeOf_lt?: InputMaybe<Scalars['String']>;
  isTypeOf_lte?: InputMaybe<Scalars['String']>;
  isTypeOf_not_contains?: InputMaybe<Scalars['String']>;
  isTypeOf_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  isTypeOf_not_endsWith?: InputMaybe<Scalars['String']>;
  isTypeOf_not_eq?: InputMaybe<Scalars['String']>;
  isTypeOf_not_in?: InputMaybe<Array<Scalars['String']>>;
  isTypeOf_not_startsWith?: InputMaybe<Scalars['String']>;
  isTypeOf_startsWith?: InputMaybe<Scalars['String']>;
  maxFeePerGas_eq?: InputMaybe<Scalars['evm_BigInt']>;
  maxFeePerGas_gt?: InputMaybe<Scalars['evm_BigInt']>;
  maxFeePerGas_gte?: InputMaybe<Scalars['evm_BigInt']>;
  maxFeePerGas_in?: InputMaybe<Array<Scalars['evm_BigInt']>>;
  maxFeePerGas_isNull?: InputMaybe<Scalars['Boolean']>;
  maxFeePerGas_lt?: InputMaybe<Scalars['evm_BigInt']>;
  maxFeePerGas_lte?: InputMaybe<Scalars['evm_BigInt']>;
  maxFeePerGas_not_eq?: InputMaybe<Scalars['evm_BigInt']>;
  maxFeePerGas_not_in?: InputMaybe<Array<Scalars['evm_BigInt']>>;
  maxPriorityFeePerGas_eq?: InputMaybe<Scalars['evm_BigInt']>;
  maxPriorityFeePerGas_gt?: InputMaybe<Scalars['evm_BigInt']>;
  maxPriorityFeePerGas_gte?: InputMaybe<Scalars['evm_BigInt']>;
  maxPriorityFeePerGas_in?: InputMaybe<Array<Scalars['evm_BigInt']>>;
  maxPriorityFeePerGas_isNull?: InputMaybe<Scalars['Boolean']>;
  maxPriorityFeePerGas_lt?: InputMaybe<Scalars['evm_BigInt']>;
  maxPriorityFeePerGas_lte?: InputMaybe<Scalars['evm_BigInt']>;
  maxPriorityFeePerGas_not_eq?: InputMaybe<Scalars['evm_BigInt']>;
  maxPriorityFeePerGas_not_in?: InputMaybe<Array<Scalars['evm_BigInt']>>;
  value_eq?: InputMaybe<Scalars['evm_BigInt']>;
  value_gt?: InputMaybe<Scalars['evm_BigInt']>;
  value_gte?: InputMaybe<Scalars['evm_BigInt']>;
  value_in?: InputMaybe<Array<Scalars['evm_BigInt']>>;
  value_isNull?: InputMaybe<Scalars['Boolean']>;
  value_lt?: InputMaybe<Scalars['evm_BigInt']>;
  value_lte?: InputMaybe<Scalars['evm_BigInt']>;
  value_not_eq?: InputMaybe<Scalars['evm_BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['evm_BigInt']>>;
};

export type Evm_TransactionEdge = {
  __typename?: 'evm_TransactionEdge';
  cursor: Scalars['String'];
  node: Evm_Transaction;
};

export enum Evm_TransactionOrderByInput {
  BlockAsc = 'block_ASC',
  BlockDesc = 'block_DESC',
  DataGasLimitAsc = 'data_gasLimit_ASC',
  DataGasLimitDesc = 'data_gasLimit_DESC',
  DataGasPriceAsc = 'data_gasPrice_ASC',
  DataGasPriceDesc = 'data_gasPrice_DESC',
  DataIsTypeOfAsc = 'data_isTypeOf_ASC',
  DataIsTypeOfDesc = 'data_isTypeOf_DESC',
  DataMaxFeePerGasAsc = 'data_maxFeePerGas_ASC',
  DataMaxFeePerGasDesc = 'data_maxFeePerGas_DESC',
  DataMaxPriorityFeePerGasAsc = 'data_maxPriorityFeePerGas_ASC',
  DataMaxPriorityFeePerGasDesc = 'data_maxPriorityFeePerGas_DESC',
  DataValueAsc = 'data_value_ASC',
  DataValueDesc = 'data_value_DESC',
  FromAsc = 'from_ASC',
  FromDesc = 'from_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MethodAsc = 'method_ASC',
  MethodDesc = 'method_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  ToAsc = 'to_ASC',
  ToDesc = 'to_DESC',
  TxHashAsc = 'txHash_ASC',
  TxHashDesc = 'txHash_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type Evm_TransactionWhereInput = {
  AND?: InputMaybe<Array<Evm_TransactionWhereInput>>;
  OR?: InputMaybe<Array<Evm_TransactionWhereInput>>;
  block_eq?: InputMaybe<Scalars['Int']>;
  block_gt?: InputMaybe<Scalars['Int']>;
  block_gte?: InputMaybe<Scalars['Int']>;
  block_in?: InputMaybe<Array<Scalars['Int']>>;
  block_isNull?: InputMaybe<Scalars['Boolean']>;
  block_lt?: InputMaybe<Scalars['Int']>;
  block_lte?: InputMaybe<Scalars['Int']>;
  block_not_eq?: InputMaybe<Scalars['Int']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']>>;
  data?: InputMaybe<Evm_TransactionDataWhereInput>;
  data_isNull?: InputMaybe<Scalars['Boolean']>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_containsInsensitive?: InputMaybe<Scalars['String']>;
  from_endsWith?: InputMaybe<Scalars['String']>;
  from_eq?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_isNull?: InputMaybe<Scalars['Boolean']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  from_not_endsWith?: InputMaybe<Scalars['String']>;
  from_not_eq?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_startsWith?: InputMaybe<Scalars['String']>;
  from_startsWith?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  input_eq?: InputMaybe<Scalars['evm_JSON']>;
  input_isNull?: InputMaybe<Scalars['Boolean']>;
  input_jsonContains?: InputMaybe<Scalars['evm_JSON']>;
  input_jsonHasKey?: InputMaybe<Scalars['evm_JSON']>;
  input_not_eq?: InputMaybe<Scalars['evm_JSON']>;
  method_contains?: InputMaybe<Scalars['String']>;
  method_containsInsensitive?: InputMaybe<Scalars['String']>;
  method_endsWith?: InputMaybe<Scalars['String']>;
  method_eq?: InputMaybe<Scalars['String']>;
  method_gt?: InputMaybe<Scalars['String']>;
  method_gte?: InputMaybe<Scalars['String']>;
  method_in?: InputMaybe<Array<Scalars['String']>>;
  method_isNull?: InputMaybe<Scalars['Boolean']>;
  method_lt?: InputMaybe<Scalars['String']>;
  method_lte?: InputMaybe<Scalars['String']>;
  method_not_contains?: InputMaybe<Scalars['String']>;
  method_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  method_not_endsWith?: InputMaybe<Scalars['String']>;
  method_not_eq?: InputMaybe<Scalars['String']>;
  method_not_in?: InputMaybe<Array<Scalars['String']>>;
  method_not_startsWith?: InputMaybe<Scalars['String']>;
  method_startsWith?: InputMaybe<Scalars['String']>;
  timestamp_eq?: InputMaybe<Scalars['evm_DateTime']>;
  timestamp_gt?: InputMaybe<Scalars['evm_DateTime']>;
  timestamp_gte?: InputMaybe<Scalars['evm_DateTime']>;
  timestamp_in?: InputMaybe<Array<Scalars['evm_DateTime']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['evm_DateTime']>;
  timestamp_lte?: InputMaybe<Scalars['evm_DateTime']>;
  timestamp_not_eq?: InputMaybe<Scalars['evm_DateTime']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['evm_DateTime']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_containsInsensitive?: InputMaybe<Scalars['String']>;
  to_endsWith?: InputMaybe<Scalars['String']>;
  to_eq?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_isNull?: InputMaybe<Scalars['Boolean']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  to_not_endsWith?: InputMaybe<Scalars['String']>;
  to_not_eq?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_startsWith?: InputMaybe<Scalars['String']>;
  to_startsWith?: InputMaybe<Scalars['String']>;
  txHash_contains?: InputMaybe<Scalars['String']>;
  txHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  txHash_endsWith?: InputMaybe<Scalars['String']>;
  txHash_eq?: InputMaybe<Scalars['String']>;
  txHash_gt?: InputMaybe<Scalars['String']>;
  txHash_gte?: InputMaybe<Scalars['String']>;
  txHash_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_isNull?: InputMaybe<Scalars['Boolean']>;
  txHash_lt?: InputMaybe<Scalars['String']>;
  txHash_lte?: InputMaybe<Scalars['String']>;
  txHash_not_contains?: InputMaybe<Scalars['String']>;
  txHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  txHash_not_endsWith?: InputMaybe<Scalars['String']>;
  txHash_not_eq?: InputMaybe<Scalars['String']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_not_startsWith?: InputMaybe<Scalars['String']>;
  txHash_startsWith?: InputMaybe<Scalars['String']>;
  type_eq?: InputMaybe<Scalars['Int']>;
  type_gt?: InputMaybe<Scalars['Int']>;
  type_gte?: InputMaybe<Scalars['Int']>;
  type_in?: InputMaybe<Array<Scalars['Int']>>;
  type_isNull?: InputMaybe<Scalars['Boolean']>;
  type_lt?: InputMaybe<Scalars['Int']>;
  type_lte?: InputMaybe<Scalars['Int']>;
  type_not_eq?: InputMaybe<Scalars['Int']>;
  type_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type Evm_TransactionsConnection = {
  __typename?: 'evm_TransactionsConnection';
  edges: Array<Evm_TransactionEdge>;
  pageInfo: Balances_PageInfo;
  totalCount: Scalars['Int'];
};

export type Query_Root = {
  __typename?: 'query_root';
  archive?: Maybe<ArchiveQuery>;
  balances?: Maybe<BalancesQuery>;
  evm?: Maybe<EvmQuery>;
  transfers?: Maybe<TransfersQuery>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  balances?: Maybe<BalancesSubscription>;
  evm?: Maybe<EvmSubscription>;
  transfers?: Maybe<TransfersSubscription>;
};

export type TransfersQuery = {
  __typename?: 'transfersQuery';
  accountById?: Maybe<Transfers_Account>;
  accountByUniqueInput?: Maybe<Transfers_Account>;
  accounts: Array<Transfers_Account>;
  accountsConnection: Balances_AccountsConnection;
  squidStatus?: Maybe<Balances_SquidStatus>;
  transferById?: Maybe<Transfers_Transfer>;
  transferByUniqueInput?: Maybe<Transfers_Transfer>;
  transfers: Array<Transfers_Transfer>;
  transfersConnection: Transfers_TransfersConnection;
};


export type TransfersQueryAccountByIdArgs = {
  id: Scalars['String'];
};


export type TransfersQueryAccountByUniqueInputArgs = {
  where: Balances_WhereIdInput;
};


export type TransfersQueryAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Transfers_AccountOrderByInput>>;
  where?: InputMaybe<Transfers_AccountWhereInput>;
};


export type TransfersQueryAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<Transfers_AccountOrderByInput>;
  where?: InputMaybe<Transfers_AccountWhereInput>;
};


export type TransfersQueryTransferByIdArgs = {
  id: Scalars['String'];
};


export type TransfersQueryTransferByUniqueInputArgs = {
  where: Balances_WhereIdInput;
};


export type TransfersQueryTransfersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Transfers_TransferOrderByInput>>;
  where?: InputMaybe<Transfers_TransferWhereInput>;
};


export type TransfersQueryTransfersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<Transfers_TransferOrderByInput>;
  where?: InputMaybe<Transfers_TransferWhereInput>;
};

export type TransfersSubscription = {
  __typename?: 'transfersSubscription';
  accountById?: Maybe<Transfers_Account>;
  accounts: Array<Transfers_Account>;
  transferById?: Maybe<Transfers_Transfer>;
  transfers: Array<Transfers_Transfer>;
};


export type TransfersSubscriptionAccountByIdArgs = {
  id: Scalars['String'];
};


export type TransfersSubscriptionAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Transfers_AccountOrderByInput>>;
  where?: InputMaybe<Transfers_AccountWhereInput>;
};


export type TransfersSubscriptionTransferByIdArgs = {
  id: Scalars['String'];
};


export type TransfersSubscriptionTransfersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Transfers_TransferOrderByInput>>;
  where?: InputMaybe<Transfers_TransferWhereInput>;
};

export type Transfers_Account = {
  __typename?: 'transfers_Account';
  id: Scalars['String'];
  transfersFrom: Array<Transfers_Transfer>;
  transfersTo: Array<Transfers_Transfer>;
};


export type Transfers_AccountTransfersFromArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Transfers_TransferOrderByInput>>;
  where?: InputMaybe<Transfers_TransferWhereInput>;
};


export type Transfers_AccountTransfersToArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Transfers_TransferOrderByInput>>;
  where?: InputMaybe<Transfers_TransferWhereInput>;
};

export enum Transfers_AccountOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type Transfers_AccountWhereInput = {
  AND?: InputMaybe<Array<Transfers_AccountWhereInput>>;
  OR?: InputMaybe<Array<Transfers_AccountWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  transfersFrom_every?: InputMaybe<Transfers_TransferWhereInput>;
  transfersFrom_none?: InputMaybe<Transfers_TransferWhereInput>;
  transfersFrom_some?: InputMaybe<Transfers_TransferWhereInput>;
  transfersTo_every?: InputMaybe<Transfers_TransferWhereInput>;
  transfersTo_none?: InputMaybe<Transfers_TransferWhereInput>;
  transfersTo_some?: InputMaybe<Transfers_TransferWhereInput>;
};

export enum Transfers_AssetStatus {
  Burned = 'BURNED',
  Issued = 'ISSUED',
  Transferred = 'TRANSFERRED'
}

export type Transfers_Transfer = {
  __typename?: 'transfers_Transfer';
  amount: Scalars['transfers_BigInt'];
  assetId: Scalars['String'];
  blockNumber: Scalars['Int'];
  extrinsicHash?: Maybe<Scalars['String']>;
  from: Transfers_Account;
  id: Scalars['String'];
  status: Transfers_AssetStatus;
  timestamp: Scalars['transfers_DateTime'];
  to: Transfers_Account;
};

export type Transfers_TransferEdge = {
  __typename?: 'transfers_TransferEdge';
  cursor: Scalars['String'];
  node: Transfers_Transfer;
};

export enum Transfers_TransferOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  AssetIdAsc = 'assetId_ASC',
  AssetIdDesc = 'assetId_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  ExtrinsicHashAsc = 'extrinsicHash_ASC',
  ExtrinsicHashDesc = 'extrinsicHash_DESC',
  FromIdAsc = 'from_id_ASC',
  FromIdDesc = 'from_id_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  ToIdAsc = 'to_id_ASC',
  ToIdDesc = 'to_id_DESC'
}

export type Transfers_TransferWhereInput = {
  AND?: InputMaybe<Array<Transfers_TransferWhereInput>>;
  OR?: InputMaybe<Array<Transfers_TransferWhereInput>>;
  amount_eq?: InputMaybe<Scalars['transfers_BigInt']>;
  amount_gt?: InputMaybe<Scalars['transfers_BigInt']>;
  amount_gte?: InputMaybe<Scalars['transfers_BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['transfers_BigInt']>>;
  amount_isNull?: InputMaybe<Scalars['Boolean']>;
  amount_lt?: InputMaybe<Scalars['transfers_BigInt']>;
  amount_lte?: InputMaybe<Scalars['transfers_BigInt']>;
  amount_not_eq?: InputMaybe<Scalars['transfers_BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['transfers_BigInt']>>;
  assetId_contains?: InputMaybe<Scalars['String']>;
  assetId_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetId_endsWith?: InputMaybe<Scalars['String']>;
  assetId_eq?: InputMaybe<Scalars['String']>;
  assetId_gt?: InputMaybe<Scalars['String']>;
  assetId_gte?: InputMaybe<Scalars['String']>;
  assetId_in?: InputMaybe<Array<Scalars['String']>>;
  assetId_isNull?: InputMaybe<Scalars['Boolean']>;
  assetId_lt?: InputMaybe<Scalars['String']>;
  assetId_lte?: InputMaybe<Scalars['String']>;
  assetId_not_contains?: InputMaybe<Scalars['String']>;
  assetId_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetId_not_endsWith?: InputMaybe<Scalars['String']>;
  assetId_not_eq?: InputMaybe<Scalars['String']>;
  assetId_not_in?: InputMaybe<Array<Scalars['String']>>;
  assetId_not_startsWith?: InputMaybe<Scalars['String']>;
  assetId_startsWith?: InputMaybe<Scalars['String']>;
  blockNumber_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  extrinsicHash_contains?: InputMaybe<Scalars['String']>;
  extrinsicHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  extrinsicHash_endsWith?: InputMaybe<Scalars['String']>;
  extrinsicHash_eq?: InputMaybe<Scalars['String']>;
  extrinsicHash_gt?: InputMaybe<Scalars['String']>;
  extrinsicHash_gte?: InputMaybe<Scalars['String']>;
  extrinsicHash_in?: InputMaybe<Array<Scalars['String']>>;
  extrinsicHash_isNull?: InputMaybe<Scalars['Boolean']>;
  extrinsicHash_lt?: InputMaybe<Scalars['String']>;
  extrinsicHash_lte?: InputMaybe<Scalars['String']>;
  extrinsicHash_not_contains?: InputMaybe<Scalars['String']>;
  extrinsicHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  extrinsicHash_not_endsWith?: InputMaybe<Scalars['String']>;
  extrinsicHash_not_eq?: InputMaybe<Scalars['String']>;
  extrinsicHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  extrinsicHash_not_startsWith?: InputMaybe<Scalars['String']>;
  extrinsicHash_startsWith?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Transfers_AccountWhereInput>;
  from_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  status_eq?: InputMaybe<Transfers_AssetStatus>;
  status_in?: InputMaybe<Array<Transfers_AssetStatus>>;
  status_isNull?: InputMaybe<Scalars['Boolean']>;
  status_not_eq?: InputMaybe<Transfers_AssetStatus>;
  status_not_in?: InputMaybe<Array<Transfers_AssetStatus>>;
  timestamp_eq?: InputMaybe<Scalars['transfers_DateTime']>;
  timestamp_gt?: InputMaybe<Scalars['transfers_DateTime']>;
  timestamp_gte?: InputMaybe<Scalars['transfers_DateTime']>;
  timestamp_in?: InputMaybe<Array<Scalars['transfers_DateTime']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['transfers_DateTime']>;
  timestamp_lte?: InputMaybe<Scalars['transfers_DateTime']>;
  timestamp_not_eq?: InputMaybe<Scalars['transfers_DateTime']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['transfers_DateTime']>>;
  to?: InputMaybe<Transfers_AccountWhereInput>;
  to_isNull?: InputMaybe<Scalars['Boolean']>;
};

export type Transfers_TransfersConnection = {
  __typename?: 'transfers_TransfersConnection';
  edges: Array<Transfers_TransferEdge>;
  pageInfo: Balances_PageInfo;
  totalCount: Scalars['Int'];
};

export type GetAccountsQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetAccountsQuery = { __typename?: 'query_root', balances?: { __typename?: 'balancesQuery', accounts: Array<{ __typename?: 'balances_Account', free: any, id: string, reserved: any, total: any, updatedAt?: number | null }> } | null };

export type GetBalancesQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetBalancesQuery = { __typename?: 'query_root', balances?: { __typename?: 'balancesQuery', accounts: Array<{ __typename?: 'balances_Account', free: any, id: string, reserved: any, total: any }> } | null };

export type GetBlockQueryVariables = Exact<{
  height: Scalars['Int'];
}>;


export type GetBlockQuery = { __typename?: 'query_root', archive?: { __typename?: 'archiveQuery', blocks: Array<{ __typename?: 'archive_Block', hash: string, height: number, id: string, parentHash: string, timestamp: any, validator?: string | null, spec: { __typename?: 'archive_Metadata', specVersion?: number | null, specName: string } }> } | null };

export type GetBlocksQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetBlocksQuery = { __typename?: 'query_root', archive?: { __typename?: 'archiveQuery', blocks: Array<{ __typename?: 'archive_Block', hash: string, height: number, id: string, parentHash: string, timestamp: any, validator?: string | null, spec: { __typename?: 'archive_Metadata', specVersion?: number | null, specName: string } }> } | null };

export type GetTransferByHashQueryVariables = Exact<{
  hash: Scalars['String'];
}>;


export type GetTransferByHashQuery = { __typename?: 'query_root', transfers?: { __typename?: 'transfersQuery', transfers: Array<{ __typename?: 'transfers_Transfer', id: string, amount: any, assetId: string, blockNumber: number, extrinsicHash?: string | null, status: Transfers_AssetStatus, timestamp: any, to: { __typename?: 'transfers_Account', id: string }, from: { __typename?: 'transfers_Account', id: string } }> } | null };

export type GetTransfersQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetTransfersQuery = { __typename?: 'query_root', transfers?: { __typename?: 'transfersQuery', transfers: Array<{ __typename?: 'transfers_Transfer', timestamp: any, status: Transfers_AssetStatus, id: string, extrinsicHash?: string | null, blockNumber: number, assetId: string, amount: any, from: { __typename?: 'transfers_Account', id: string }, to: { __typename?: 'transfers_Account', id: string } }> } | null };


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
export const useGetAccountsQuery = <
      TData = GetAccountsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAccountsQueryVariables,
      options?: UseQueryOptions<GetAccountsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAccountsQuery, TError, TData>(
      ['GetAccounts', variables],
      fetcher<GetAccountsQuery, GetAccountsQueryVariables>(client, GetAccountsDocument, variables, headers),
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
export const useGetBalancesQuery = <
      TData = GetBalancesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetBalancesQueryVariables,
      options?: UseQueryOptions<GetBalancesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetBalancesQuery, TError, TData>(
      ['GetBalances', variables],
      fetcher<GetBalancesQuery, GetBalancesQueryVariables>(client, GetBalancesDocument, variables, headers),
      options
    );
export const GetBlockDocument = `
    query GetBlock($height: Int!) {
  archive {
    blocks(limit: 1, where: {height_eq: $height}) {
      hash
      height
      id
      parentHash
      timestamp
      validator
      spec {
        specVersion
        specName
      }
    }
  }
}
    `;
export const useGetBlockQuery = <
      TData = GetBlockQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetBlockQueryVariables,
      options?: UseQueryOptions<GetBlockQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetBlockQuery, TError, TData>(
      ['GetBlock', variables],
      fetcher<GetBlockQuery, GetBlockQueryVariables>(client, GetBlockDocument, variables, headers),
      options
    );
export const GetBlocksDocument = `
    query GetBlocks($limit: Int!) {
  archive {
    blocks(orderBy: height_DESC, limit: $limit) {
      hash
      height
      id
      parentHash
      timestamp
      validator
      spec {
        specVersion
        specName
      }
    }
  }
}
    `;
export const useGetBlocksQuery = <
      TData = GetBlocksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetBlocksQueryVariables,
      options?: UseQueryOptions<GetBlocksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetBlocksQuery, TError, TData>(
      ['GetBlocks', variables],
      fetcher<GetBlocksQuery, GetBlocksQueryVariables>(client, GetBlocksDocument, variables, headers),
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
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTransferByHashQuery, TError, TData>(
      ['GetTransferByHash', variables],
      fetcher<GetTransferByHashQuery, GetTransferByHashQueryVariables>(client, GetTransferByHashDocument, variables, headers),
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
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTransfersQuery, TError, TData>(
      ['GetTransfers', variables],
      fetcher<GetTransfersQuery, GetTransfersQueryVariables>(client, GetTransfersDocument, variables, headers),
      options
    );