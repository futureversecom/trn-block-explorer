import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

export function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: any;
  /** A scalar that can represent any JSON value. */
  JSON: any;
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

export type Batch = {
  __typename?: 'Batch';
  calls: Array<Scalars['JSON']>;
  events: Array<Scalars['JSON']>;
  extrinsics: Array<Scalars['JSON']>;
  header: BlockHeader;
};

export type BlockHeader = {
  __typename?: 'BlockHeader';
  extrinsicsRoot: Scalars['String'];
  hash: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['String'];
  parentHash: Scalars['String'];
  specId: Scalars['String'];
  stateRoot: Scalars['String'];
  timestamp: Scalars['DateTime'];
  validator?: Maybe<Scalars['String']>;
};

export type CallDataSelection = {
  call?: InputMaybe<CallFields>;
  extrinsic?: InputMaybe<ExtrinsicFields>;
};

export type CallFields = {
  _all?: InputMaybe<Scalars['Boolean']>;
  args?: InputMaybe<Scalars['Boolean']>;
  error?: InputMaybe<Scalars['Boolean']>;
  origin?: InputMaybe<Scalars['Boolean']>;
  parent?: InputMaybe<ParentCallFields>;
};

export type CallSelectionInput = {
  data?: InputMaybe<CallDataSelection>;
  name: Scalars['String'];
};

export type EthereumTransactionSelection = {
  contract: Scalars['String'];
  data?: InputMaybe<CallDataSelection>;
  sighash?: InputMaybe<Scalars['String']>;
};

export type EventDataSelection = {
  event?: InputMaybe<EventFields>;
};

export type EventFields = {
  _all?: InputMaybe<Scalars['Boolean']>;
  args?: InputMaybe<Scalars['Boolean']>;
  call?: InputMaybe<CallFields>;
  extrinsic?: InputMaybe<ExtrinsicFields>;
  indexInBlock?: InputMaybe<Scalars['Boolean']>;
  phase?: InputMaybe<Scalars['Boolean']>;
};

export type EventSelection = {
  data?: InputMaybe<EventDataSelection>;
  name: Scalars['String'];
};

export type EvmLogDataSelection = {
  event?: InputMaybe<EvmLogFields>;
};

export type EvmLogFields = {
  _all?: InputMaybe<Scalars['Boolean']>;
  args?: InputMaybe<Scalars['Boolean']>;
  call?: InputMaybe<CallFields>;
  evmTxHash?: InputMaybe<Scalars['Boolean']>;
  extrinsic?: InputMaybe<ExtrinsicFields>;
  indexInBlock?: InputMaybe<Scalars['Boolean']>;
  phase?: InputMaybe<Scalars['Boolean']>;
};

export type EvmLogSelection = {
  contract: Scalars['String'];
  data?: InputMaybe<EvmLogDataSelection>;
  filter?: InputMaybe<Array<Array<Scalars['String']>>>;
};

export type ExtrinsicFields = {
  _all?: InputMaybe<Scalars['Boolean']>;
  call?: InputMaybe<CallFields>;
  error?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Boolean']>;
  hash?: InputMaybe<Scalars['Boolean']>;
  indexInBlock?: InputMaybe<Scalars['Boolean']>;
  signature?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  tip?: InputMaybe<Scalars['Boolean']>;
  version?: InputMaybe<Scalars['Boolean']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  blockHash: Scalars['String'];
  blockHeight: Scalars['Int'];
  hex: Scalars['String'];
  id: Scalars['String'];
  specName: Scalars['String'];
  specVersion: Scalars['Int'];
};

export type ParentCallFields = {
  _all?: InputMaybe<Scalars['Boolean']>;
  args?: InputMaybe<Scalars['Boolean']>;
  error?: InputMaybe<Scalars['Boolean']>;
  origin?: InputMaybe<Scalars['Boolean']>;
  parent?: InputMaybe<Scalars['Boolean']>;
};

export type Status = {
  __typename?: 'Status';
  head: Scalars['Int'];
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
  balances?: Maybe<BalancesQuery>;
  batch: Array<Batch>;
  evm?: Maybe<EvmQuery>;
  metadata: Array<Metadata>;
  metadataById?: Maybe<Metadata>;
  status: Status;
  transfers?: Maybe<TransfersQuery>;
};


export type Query_RootBatchArgs = {
  calls?: InputMaybe<Array<CallSelectionInput>>;
  ethereumTransactions?: InputMaybe<Array<EthereumTransactionSelection>>;
  events?: InputMaybe<Array<EventSelection>>;
  evmLogs?: InputMaybe<Array<EvmLogSelection>>;
  fromBlock?: Scalars['Int'];
  includeAllBlocks?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  toBlock?: InputMaybe<Scalars['Int']>;
};


export type Query_RootMetadataByIdArgs = {
  id: Scalars['String'];
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

export type GetLatestTenTransfersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLatestTenTransfersQuery = { __typename?: 'query_root', transfers?: { __typename?: 'transfersQuery', transfers: Array<{ __typename?: 'transfers_Transfer', timestamp: any, status: Transfers_AssetStatus, id: string, extrinsicHash?: string | null, blockNumber: number, assetId: string, amount: any, from: { __typename?: 'transfers_Account', id: string }, to: { __typename?: 'transfers_Account', id: string } }> } | null };


export const GetLatestTenTransfersDocument = `
    query GetLatestTenTransfers {
  transfers {
    transfers(orderBy: blockNumber_DESC, limit: 10) {
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
export const useGetLatestTenTransfersQuery = <
      TData = GetLatestTenTransfersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetLatestTenTransfersQueryVariables,
      options?: UseQueryOptions<GetLatestTenTransfersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetLatestTenTransfersQuery, TError, TData>(
      variables === undefined ? ['GetLatestTenTransfers'] : ['GetLatestTenTransfers', variables],
      fetcher<GetLatestTenTransfersQuery, GetLatestTenTransfersQueryVariables>(client, GetLatestTenTransfersDocument, variables, headers),
      options
    );