import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: string;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<Tasks_Mutation_Response>;
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk?: Maybe<Tasks>;
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<Tasks_Mutation_Response>;
  /** insert a single row into the table: "tasks" */
  insert_tasks_one?: Maybe<Tasks>;
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<Tasks_Mutation_Response>;
  /** update single row of the table: "tasks" */
  update_tasks_by_pk?: Maybe<Tasks>;
};


/** mutation root */
export type Mutation_RootDelete_TasksArgs = {
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tasks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_TasksArgs = {
  objects: Array<Tasks_Insert_Input>;
  on_conflict?: Maybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tasks_OneArgs = {
  object: Tasks_Insert_Input;
  on_conflict?: Maybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TasksArgs = {
  _set?: Maybe<Tasks_Set_Input>;
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tasks_By_PkArgs = {
  _set?: Maybe<Tasks_Set_Input>;
  pk_columns: Tasks_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: Tasks_Aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
};


/** query root */
export type Query_RootTasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


/** query root */
export type Query_RootTasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


/** query root */
export type Query_RootTasks_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: Tasks_Aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
};


/** subscription root */
export type Subscription_RootTasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTasks_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "tasks" */
export type Tasks = {
  __typename?: 'tasks';
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDone: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "tasks" */
export type Tasks_Aggregate = {
  __typename?: 'tasks_aggregate';
  aggregate?: Maybe<Tasks_Aggregate_Fields>;
  nodes: Array<Tasks>;
};

/** aggregate fields of "tasks" */
export type Tasks_Aggregate_Fields = {
  __typename?: 'tasks_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tasks_Max_Fields>;
  min?: Maybe<Tasks_Min_Fields>;
};


/** aggregate fields of "tasks" */
export type Tasks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tasks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tasks" */
export type Tasks_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Tasks_Max_Order_By>;
  min?: Maybe<Tasks_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tasks" */
export type Tasks_Arr_Rel_Insert_Input = {
  data: Array<Tasks_Insert_Input>;
  on_conflict?: Maybe<Tasks_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export type Tasks_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tasks_Bool_Exp>>>;
  _not?: Maybe<Tasks_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tasks_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isDone?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tasks" */
export enum Tasks_Constraint {
  /** unique or primary key constraint */
  TasksPkey = 'tasks_pkey'
}

/** input type for inserting data into table "tasks" */
export type Tasks_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  isDone?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tasks_Max_Fields = {
  __typename?: 'tasks_max_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "tasks" */
export type Tasks_Max_Order_By = {
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tasks_Min_Fields = {
  __typename?: 'tasks_min_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "tasks" */
export type Tasks_Min_Order_By = {
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "tasks" */
export type Tasks_Mutation_Response = {
  __typename?: 'tasks_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tasks>;
};

/** input type for inserting object relation for remote table "tasks" */
export type Tasks_Obj_Rel_Insert_Input = {
  data: Tasks_Insert_Input;
  on_conflict?: Maybe<Tasks_On_Conflict>;
};

/** on conflict condition type for table "tasks" */
export type Tasks_On_Conflict = {
  constraint: Tasks_Constraint;
  update_columns: Array<Tasks_Update_Column>;
  where?: Maybe<Tasks_Bool_Exp>;
};

/** ordering options when selecting data from "tasks" */
export type Tasks_Order_By = {
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDone?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "tasks" */
export type Tasks_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tasks" */
export enum Tasks_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "tasks" */
export type Tasks_Set_Input = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  isDone?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "tasks" */
export enum Tasks_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type InsertTaskMutationVariables = Exact<{
  name: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  isDone: Scalars['Boolean'];
}>;


export type InsertTaskMutation = (
  { __typename?: 'mutation_root' }
  & { insert_tasks_one?: Maybe<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'id' | 'name' | 'content' | 'isDone'>
  )> }
);

export type UpdateIsDoneMutationVariables = Exact<{
  id: Scalars['uuid'];
  isDone: Scalars['Boolean'];
}>;


export type UpdateIsDoneMutation = (
  { __typename?: 'mutation_root' }
  & { update_tasks_by_pk?: Maybe<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'id' | 'isDone'>
  )> }
);

export type GetTaskByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetTaskByIdQuery = (
  { __typename?: 'query_root' }
  & { tasks_by_pk?: Maybe<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'id' | 'name' | 'content' | 'isDone' | 'createdAt' | 'updatedAt'>
  )> }
);

export type GetTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTasksQuery = (
  { __typename?: 'query_root' }
  & { tasks: Array<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'id' | 'name' | 'content' | 'isDone'>
  )> }
);


export const InsertTaskDocument = gql`
    mutation insertTask($name: String!, $content: String, $isDone: Boolean!) {
  insert_tasks_one(object: {name: $name, content: $content, isDone: $isDone}) {
    id
    name
    content
    isDone
  }
}
    `;
export type InsertTaskMutationFn = Apollo.MutationFunction<InsertTaskMutation, InsertTaskMutationVariables>;

/**
 * __useInsertTaskMutation__
 *
 * To run a mutation, you first call `useInsertTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTaskMutation, { data, loading, error }] = useInsertTaskMutation({
 *   variables: {
 *      name: // value for 'name'
 *      content: // value for 'content'
 *      isDone: // value for 'isDone'
 *   },
 * });
 */
export function useInsertTaskMutation(baseOptions?: Apollo.MutationHookOptions<InsertTaskMutation, InsertTaskMutationVariables>) {
        return Apollo.useMutation<InsertTaskMutation, InsertTaskMutationVariables>(InsertTaskDocument, baseOptions);
      }
export type InsertTaskMutationHookResult = ReturnType<typeof useInsertTaskMutation>;
export type InsertTaskMutationResult = Apollo.MutationResult<InsertTaskMutation>;
export type InsertTaskMutationOptions = Apollo.BaseMutationOptions<InsertTaskMutation, InsertTaskMutationVariables>;
export const UpdateIsDoneDocument = gql`
    mutation updateIsDone($id: uuid!, $isDone: Boolean!) {
  update_tasks_by_pk(pk_columns: {id: $id}, _set: {isDone: $isDone}) {
    id
    isDone
  }
}
    `;
export type UpdateIsDoneMutationFn = Apollo.MutationFunction<UpdateIsDoneMutation, UpdateIsDoneMutationVariables>;

/**
 * __useUpdateIsDoneMutation__
 *
 * To run a mutation, you first call `useUpdateIsDoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIsDoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIsDoneMutation, { data, loading, error }] = useUpdateIsDoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isDone: // value for 'isDone'
 *   },
 * });
 */
export function useUpdateIsDoneMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIsDoneMutation, UpdateIsDoneMutationVariables>) {
        return Apollo.useMutation<UpdateIsDoneMutation, UpdateIsDoneMutationVariables>(UpdateIsDoneDocument, baseOptions);
      }
export type UpdateIsDoneMutationHookResult = ReturnType<typeof useUpdateIsDoneMutation>;
export type UpdateIsDoneMutationResult = Apollo.MutationResult<UpdateIsDoneMutation>;
export type UpdateIsDoneMutationOptions = Apollo.BaseMutationOptions<UpdateIsDoneMutation, UpdateIsDoneMutationVariables>;
export const GetTaskByIdDocument = gql`
    query getTaskById($id: uuid!) {
  tasks_by_pk(id: $id) {
    id
    name
    content
    isDone
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetTaskByIdQuery__
 *
 * To run a query within a React component, call `useGetTaskByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTaskByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetTaskByIdQuery, GetTaskByIdQueryVariables>) {
        return Apollo.useQuery<GetTaskByIdQuery, GetTaskByIdQueryVariables>(GetTaskByIdDocument, baseOptions);
      }
export function useGetTaskByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaskByIdQuery, GetTaskByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetTaskByIdQuery, GetTaskByIdQueryVariables>(GetTaskByIdDocument, baseOptions);
        }
export type GetTaskByIdQueryHookResult = ReturnType<typeof useGetTaskByIdQuery>;
export type GetTaskByIdLazyQueryHookResult = ReturnType<typeof useGetTaskByIdLazyQuery>;
export type GetTaskByIdQueryResult = Apollo.QueryResult<GetTaskByIdQuery, GetTaskByIdQueryVariables>;
export const GetTasksDocument = gql`
    query getTasks {
  tasks(order_by: {createdAt: asc}) {
    id
    name
    content
    isDone
  }
}
    `;

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTasksQuery(baseOptions?: Apollo.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
        return Apollo.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, baseOptions);
      }
export function useGetTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
          return Apollo.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, baseOptions);
        }
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksQueryResult = Apollo.QueryResult<GetTasksQuery, GetTasksQueryVariables>;