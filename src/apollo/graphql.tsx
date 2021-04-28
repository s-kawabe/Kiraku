import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
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
export type StringComparisonExp = {
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

/** columns and relationships of "blog_brands" */
export type BlogBrands = {
  __typename?: 'blog_brands';
  /** An object relationship */
  blog: Blogs;
  blog_id: Scalars['Int'];
  /** An object relationship */
  brand: Brands;
  brand_id: Scalars['Int'];
  id: Scalars['Int'];
};

/** aggregated selection of "blog_brands" */
export type BlogBrandsAggregate = {
  __typename?: 'blog_brands_aggregate';
  aggregate?: Maybe<BlogBrandsAggregateFields>;
  nodes: Array<BlogBrands>;
};

/** aggregate fields of "blog_brands" */
export type BlogBrandsAggregateFields = {
  __typename?: 'blog_brands_aggregate_fields';
  avg?: Maybe<BlogBrandsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<BlogBrandsMaxFields>;
  min?: Maybe<BlogBrandsMinFields>;
  stddev?: Maybe<BlogBrandsStddevFields>;
  stddev_pop?: Maybe<BlogBrandsStddevPopFields>;
  stddev_samp?: Maybe<BlogBrandsStddevSampFields>;
  sum?: Maybe<BlogBrandsSumFields>;
  var_pop?: Maybe<BlogBrandsVarPopFields>;
  var_samp?: Maybe<BlogBrandsVarSampFields>;
  variance?: Maybe<BlogBrandsVarianceFields>;
};


/** aggregate fields of "blog_brands" */
export type BlogBrandsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<BlogBrandsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blog_brands" */
export type BlogBrandsAggregateOrderBy = {
  avg?: Maybe<BlogBrandsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<BlogBrandsMaxOrderBy>;
  min?: Maybe<BlogBrandsMinOrderBy>;
  stddev?: Maybe<BlogBrandsStddevOrderBy>;
  stddev_pop?: Maybe<BlogBrandsStddevPopOrderBy>;
  stddev_samp?: Maybe<BlogBrandsStddevSampOrderBy>;
  sum?: Maybe<BlogBrandsSumOrderBy>;
  var_pop?: Maybe<BlogBrandsVarPopOrderBy>;
  var_samp?: Maybe<BlogBrandsVarSampOrderBy>;
  variance?: Maybe<BlogBrandsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "blog_brands" */
export type BlogBrandsArrRelInsertInput = {
  data: Array<BlogBrandsInsertInput>;
  on_conflict?: Maybe<BlogBrandsOnConflict>;
};

/** aggregate avg on columns */
export type BlogBrandsAvgFields = {
  __typename?: 'blog_brands_avg_fields';
  blog_id?: Maybe<Scalars['Float']>;
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "blog_brands" */
export type BlogBrandsAvgOrderBy = {
  blog_id?: Maybe<OrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "blog_brands". All fields are combined with a logical 'AND'. */
export type BlogBrandsBoolExp = {
  _and?: Maybe<Array<Maybe<BlogBrandsBoolExp>>>;
  _not?: Maybe<BlogBrandsBoolExp>;
  _or?: Maybe<Array<Maybe<BlogBrandsBoolExp>>>;
  blog?: Maybe<BlogsBoolExp>;
  blog_id?: Maybe<IntComparisonExp>;
  brand?: Maybe<BrandsBoolExp>;
  brand_id?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "blog_brands" */
export enum BlogBrandsConstraint {
  /** unique or primary key constraint */
  BLOG_BRANDS_ID_KEY = 'blog_brands_id_key',
  /** unique or primary key constraint */
  BLOG_BRANDS_PKEY = 'blog_brands_pkey'
}

/** input type for incrementing integer column in table "blog_brands" */
export type BlogBrandsIncInput = {
  blog_id?: Maybe<Scalars['Int']>;
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "blog_brands" */
export type BlogBrandsInsertInput = {
  blog?: Maybe<BlogsObjRelInsertInput>;
  blog_id?: Maybe<Scalars['Int']>;
  brand?: Maybe<BrandsObjRelInsertInput>;
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type BlogBrandsMaxFields = {
  __typename?: 'blog_brands_max_fields';
  blog_id?: Maybe<Scalars['Int']>;
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "blog_brands" */
export type BlogBrandsMaxOrderBy = {
  blog_id?: Maybe<OrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type BlogBrandsMinFields = {
  __typename?: 'blog_brands_min_fields';
  blog_id?: Maybe<Scalars['Int']>;
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "blog_brands" */
export type BlogBrandsMinOrderBy = {
  blog_id?: Maybe<OrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "blog_brands" */
export type BlogBrandsMutationResponse = {
  __typename?: 'blog_brands_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<BlogBrands>;
};

/** input type for inserting object relation for remote table "blog_brands" */
export type BlogBrandsObjRelInsertInput = {
  data: BlogBrandsInsertInput;
  on_conflict?: Maybe<BlogBrandsOnConflict>;
};

/** on conflict condition type for table "blog_brands" */
export type BlogBrandsOnConflict = {
  constraint: BlogBrandsConstraint;
  update_columns: Array<BlogBrandsUpdateColumn>;
  where?: Maybe<BlogBrandsBoolExp>;
};

/** ordering options when selecting data from "blog_brands" */
export type BlogBrandsOrderBy = {
  blog?: Maybe<BlogsOrderBy>;
  blog_id?: Maybe<OrderBy>;
  brand?: Maybe<BrandsOrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "blog_brands" */
export type BlogBrandsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "blog_brands" */
export enum BlogBrandsSelectColumn {
  /** column name */
  BLOG_ID = 'blog_id',
  /** column name */
  BRAND_ID = 'brand_id',
  /** column name */
  ID = 'id'
}

/** input type for updating data in table "blog_brands" */
export type BlogBrandsSetInput = {
  blog_id?: Maybe<Scalars['Int']>;
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type BlogBrandsStddevFields = {
  __typename?: 'blog_brands_stddev_fields';
  blog_id?: Maybe<Scalars['Float']>;
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "blog_brands" */
export type BlogBrandsStddevOrderBy = {
  blog_id?: Maybe<OrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type BlogBrandsStddevPopFields = {
  __typename?: 'blog_brands_stddev_pop_fields';
  blog_id?: Maybe<Scalars['Float']>;
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "blog_brands" */
export type BlogBrandsStddevPopOrderBy = {
  blog_id?: Maybe<OrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type BlogBrandsStddevSampFields = {
  __typename?: 'blog_brands_stddev_samp_fields';
  blog_id?: Maybe<Scalars['Float']>;
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "blog_brands" */
export type BlogBrandsStddevSampOrderBy = {
  blog_id?: Maybe<OrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type BlogBrandsSumFields = {
  __typename?: 'blog_brands_sum_fields';
  blog_id?: Maybe<Scalars['Int']>;
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "blog_brands" */
export type BlogBrandsSumOrderBy = {
  blog_id?: Maybe<OrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** update columns of table "blog_brands" */
export enum BlogBrandsUpdateColumn {
  /** column name */
  BLOG_ID = 'blog_id',
  /** column name */
  BRAND_ID = 'brand_id',
  /** column name */
  ID = 'id'
}

/** aggregate var_pop on columns */
export type BlogBrandsVarPopFields = {
  __typename?: 'blog_brands_var_pop_fields';
  blog_id?: Maybe<Scalars['Float']>;
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "blog_brands" */
export type BlogBrandsVarPopOrderBy = {
  blog_id?: Maybe<OrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type BlogBrandsVarSampFields = {
  __typename?: 'blog_brands_var_samp_fields';
  blog_id?: Maybe<Scalars['Float']>;
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "blog_brands" */
export type BlogBrandsVarSampOrderBy = {
  blog_id?: Maybe<OrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type BlogBrandsVarianceFields = {
  __typename?: 'blog_brands_variance_fields';
  blog_id?: Maybe<Scalars['Float']>;
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "blog_brands" */
export type BlogBrandsVarianceOrderBy = {
  blog_id?: Maybe<OrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "blog_comments" */
export type BlogComments = {
  __typename?: 'blog_comments';
  /** An object relationship */
  blog: Blogs;
  blog_id: Scalars['Int'];
  comment: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "blog_comments" */
export type BlogCommentsAggregate = {
  __typename?: 'blog_comments_aggregate';
  aggregate?: Maybe<BlogCommentsAggregateFields>;
  nodes: Array<BlogComments>;
};

/** aggregate fields of "blog_comments" */
export type BlogCommentsAggregateFields = {
  __typename?: 'blog_comments_aggregate_fields';
  avg?: Maybe<BlogCommentsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<BlogCommentsMaxFields>;
  min?: Maybe<BlogCommentsMinFields>;
  stddev?: Maybe<BlogCommentsStddevFields>;
  stddev_pop?: Maybe<BlogCommentsStddevPopFields>;
  stddev_samp?: Maybe<BlogCommentsStddevSampFields>;
  sum?: Maybe<BlogCommentsSumFields>;
  var_pop?: Maybe<BlogCommentsVarPopFields>;
  var_samp?: Maybe<BlogCommentsVarSampFields>;
  variance?: Maybe<BlogCommentsVarianceFields>;
};


/** aggregate fields of "blog_comments" */
export type BlogCommentsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<BlogCommentsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blog_comments" */
export type BlogCommentsAggregateOrderBy = {
  avg?: Maybe<BlogCommentsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<BlogCommentsMaxOrderBy>;
  min?: Maybe<BlogCommentsMinOrderBy>;
  stddev?: Maybe<BlogCommentsStddevOrderBy>;
  stddev_pop?: Maybe<BlogCommentsStddevPopOrderBy>;
  stddev_samp?: Maybe<BlogCommentsStddevSampOrderBy>;
  sum?: Maybe<BlogCommentsSumOrderBy>;
  var_pop?: Maybe<BlogCommentsVarPopOrderBy>;
  var_samp?: Maybe<BlogCommentsVarSampOrderBy>;
  variance?: Maybe<BlogCommentsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "blog_comments" */
export type BlogCommentsArrRelInsertInput = {
  data: Array<BlogCommentsInsertInput>;
  on_conflict?: Maybe<BlogCommentsOnConflict>;
};

/** aggregate avg on columns */
export type BlogCommentsAvgFields = {
  __typename?: 'blog_comments_avg_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "blog_comments" */
export type BlogCommentsAvgOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "blog_comments". All fields are combined with a logical 'AND'. */
export type BlogCommentsBoolExp = {
  _and?: Maybe<Array<Maybe<BlogCommentsBoolExp>>>;
  _not?: Maybe<BlogCommentsBoolExp>;
  _or?: Maybe<Array<Maybe<BlogCommentsBoolExp>>>;
  blog?: Maybe<BlogsBoolExp>;
  blog_id?: Maybe<IntComparisonExp>;
  comment?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "blog_comments" */
export enum BlogCommentsConstraint {
  /** unique or primary key constraint */
  BLOG_COMMENTS_PKEY = 'blog_comments_pkey'
}

/** input type for incrementing integer column in table "blog_comments" */
export type BlogCommentsIncInput = {
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "blog_comments" */
export type BlogCommentsInsertInput = {
  blog?: Maybe<BlogsObjRelInsertInput>;
  blog_id?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type BlogCommentsMaxFields = {
  __typename?: 'blog_comments_max_fields';
  blog_id?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "blog_comments" */
export type BlogCommentsMaxOrderBy = {
  blog_id?: Maybe<OrderBy>;
  comment?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type BlogCommentsMinFields = {
  __typename?: 'blog_comments_min_fields';
  blog_id?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "blog_comments" */
export type BlogCommentsMinOrderBy = {
  blog_id?: Maybe<OrderBy>;
  comment?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "blog_comments" */
export type BlogCommentsMutationResponse = {
  __typename?: 'blog_comments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<BlogComments>;
};

/** input type for inserting object relation for remote table "blog_comments" */
export type BlogCommentsObjRelInsertInput = {
  data: BlogCommentsInsertInput;
  on_conflict?: Maybe<BlogCommentsOnConflict>;
};

/** on conflict condition type for table "blog_comments" */
export type BlogCommentsOnConflict = {
  constraint: BlogCommentsConstraint;
  update_columns: Array<BlogCommentsUpdateColumn>;
  where?: Maybe<BlogCommentsBoolExp>;
};

/** ordering options when selecting data from "blog_comments" */
export type BlogCommentsOrderBy = {
  blog?: Maybe<BlogsOrderBy>;
  blog_id?: Maybe<OrderBy>;
  comment?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "blog_comments" */
export type BlogCommentsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "blog_comments" */
export enum BlogCommentsSelectColumn {
  /** column name */
  BLOG_ID = 'blog_id',
  /** column name */
  COMMENT = 'comment',
  /** column name */
  ID = 'id',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "blog_comments" */
export type BlogCommentsSetInput = {
  blog_id?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type BlogCommentsStddevFields = {
  __typename?: 'blog_comments_stddev_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "blog_comments" */
export type BlogCommentsStddevOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type BlogCommentsStddevPopFields = {
  __typename?: 'blog_comments_stddev_pop_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "blog_comments" */
export type BlogCommentsStddevPopOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type BlogCommentsStddevSampFields = {
  __typename?: 'blog_comments_stddev_samp_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "blog_comments" */
export type BlogCommentsStddevSampOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type BlogCommentsSumFields = {
  __typename?: 'blog_comments_sum_fields';
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "blog_comments" */
export type BlogCommentsSumOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** update columns of table "blog_comments" */
export enum BlogCommentsUpdateColumn {
  /** column name */
  BLOG_ID = 'blog_id',
  /** column name */
  COMMENT = 'comment',
  /** column name */
  ID = 'id',
  /** column name */
  USER_ID = 'user_id'
}

/** aggregate var_pop on columns */
export type BlogCommentsVarPopFields = {
  __typename?: 'blog_comments_var_pop_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "blog_comments" */
export type BlogCommentsVarPopOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type BlogCommentsVarSampFields = {
  __typename?: 'blog_comments_var_samp_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "blog_comments" */
export type BlogCommentsVarSampOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type BlogCommentsVarianceFields = {
  __typename?: 'blog_comments_variance_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "blog_comments" */
export type BlogCommentsVarianceOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "blog_likes" */
export type BlogLikes = {
  __typename?: 'blog_likes';
  /** An object relationship */
  blog: Blogs;
  blog_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "blog_likes" */
export type BlogLikesAggregate = {
  __typename?: 'blog_likes_aggregate';
  aggregate?: Maybe<BlogLikesAggregateFields>;
  nodes: Array<BlogLikes>;
};

/** aggregate fields of "blog_likes" */
export type BlogLikesAggregateFields = {
  __typename?: 'blog_likes_aggregate_fields';
  avg?: Maybe<BlogLikesAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<BlogLikesMaxFields>;
  min?: Maybe<BlogLikesMinFields>;
  stddev?: Maybe<BlogLikesStddevFields>;
  stddev_pop?: Maybe<BlogLikesStddevPopFields>;
  stddev_samp?: Maybe<BlogLikesStddevSampFields>;
  sum?: Maybe<BlogLikesSumFields>;
  var_pop?: Maybe<BlogLikesVarPopFields>;
  var_samp?: Maybe<BlogLikesVarSampFields>;
  variance?: Maybe<BlogLikesVarianceFields>;
};


/** aggregate fields of "blog_likes" */
export type BlogLikesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<BlogLikesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blog_likes" */
export type BlogLikesAggregateOrderBy = {
  avg?: Maybe<BlogLikesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<BlogLikesMaxOrderBy>;
  min?: Maybe<BlogLikesMinOrderBy>;
  stddev?: Maybe<BlogLikesStddevOrderBy>;
  stddev_pop?: Maybe<BlogLikesStddevPopOrderBy>;
  stddev_samp?: Maybe<BlogLikesStddevSampOrderBy>;
  sum?: Maybe<BlogLikesSumOrderBy>;
  var_pop?: Maybe<BlogLikesVarPopOrderBy>;
  var_samp?: Maybe<BlogLikesVarSampOrderBy>;
  variance?: Maybe<BlogLikesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "blog_likes" */
export type BlogLikesArrRelInsertInput = {
  data: Array<BlogLikesInsertInput>;
  on_conflict?: Maybe<BlogLikesOnConflict>;
};

/** aggregate avg on columns */
export type BlogLikesAvgFields = {
  __typename?: 'blog_likes_avg_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "blog_likes" */
export type BlogLikesAvgOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "blog_likes". All fields are combined with a logical 'AND'. */
export type BlogLikesBoolExp = {
  _and?: Maybe<Array<Maybe<BlogLikesBoolExp>>>;
  _not?: Maybe<BlogLikesBoolExp>;
  _or?: Maybe<Array<Maybe<BlogLikesBoolExp>>>;
  blog?: Maybe<BlogsBoolExp>;
  blog_id?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "blog_likes" */
export enum BlogLikesConstraint {
  /** unique or primary key constraint */
  BLOG_LIKES_PKEY = 'blog_likes_pkey'
}

/** input type for incrementing integer column in table "blog_likes" */
export type BlogLikesIncInput = {
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "blog_likes" */
export type BlogLikesInsertInput = {
  blog?: Maybe<BlogsObjRelInsertInput>;
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type BlogLikesMaxFields = {
  __typename?: 'blog_likes_max_fields';
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "blog_likes" */
export type BlogLikesMaxOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type BlogLikesMinFields = {
  __typename?: 'blog_likes_min_fields';
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "blog_likes" */
export type BlogLikesMinOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "blog_likes" */
export type BlogLikesMutationResponse = {
  __typename?: 'blog_likes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<BlogLikes>;
};

/** input type for inserting object relation for remote table "blog_likes" */
export type BlogLikesObjRelInsertInput = {
  data: BlogLikesInsertInput;
  on_conflict?: Maybe<BlogLikesOnConflict>;
};

/** on conflict condition type for table "blog_likes" */
export type BlogLikesOnConflict = {
  constraint: BlogLikesConstraint;
  update_columns: Array<BlogLikesUpdateColumn>;
  where?: Maybe<BlogLikesBoolExp>;
};

/** ordering options when selecting data from "blog_likes" */
export type BlogLikesOrderBy = {
  blog?: Maybe<BlogsOrderBy>;
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "blog_likes" */
export type BlogLikesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "blog_likes" */
export enum BlogLikesSelectColumn {
  /** column name */
  BLOG_ID = 'blog_id',
  /** column name */
  ID = 'id',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "blog_likes" */
export type BlogLikesSetInput = {
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type BlogLikesStddevFields = {
  __typename?: 'blog_likes_stddev_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "blog_likes" */
export type BlogLikesStddevOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type BlogLikesStddevPopFields = {
  __typename?: 'blog_likes_stddev_pop_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "blog_likes" */
export type BlogLikesStddevPopOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type BlogLikesStddevSampFields = {
  __typename?: 'blog_likes_stddev_samp_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "blog_likes" */
export type BlogLikesStddevSampOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type BlogLikesSumFields = {
  __typename?: 'blog_likes_sum_fields';
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "blog_likes" */
export type BlogLikesSumOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** update columns of table "blog_likes" */
export enum BlogLikesUpdateColumn {
  /** column name */
  BLOG_ID = 'blog_id',
  /** column name */
  ID = 'id',
  /** column name */
  USER_ID = 'user_id'
}

/** aggregate var_pop on columns */
export type BlogLikesVarPopFields = {
  __typename?: 'blog_likes_var_pop_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "blog_likes" */
export type BlogLikesVarPopOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type BlogLikesVarSampFields = {
  __typename?: 'blog_likes_var_samp_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "blog_likes" */
export type BlogLikesVarSampOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type BlogLikesVarianceFields = {
  __typename?: 'blog_likes_variance_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "blog_likes" */
export type BlogLikesVarianceOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "blog_topics" */
export type BlogTopics = {
  __typename?: 'blog_topics';
  /** An object relationship */
  blog: Blogs;
  blog_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  topic: Topics;
  topic_id: Scalars['Int'];
};

/** aggregated selection of "blog_topics" */
export type BlogTopicsAggregate = {
  __typename?: 'blog_topics_aggregate';
  aggregate?: Maybe<BlogTopicsAggregateFields>;
  nodes: Array<BlogTopics>;
};

/** aggregate fields of "blog_topics" */
export type BlogTopicsAggregateFields = {
  __typename?: 'blog_topics_aggregate_fields';
  avg?: Maybe<BlogTopicsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<BlogTopicsMaxFields>;
  min?: Maybe<BlogTopicsMinFields>;
  stddev?: Maybe<BlogTopicsStddevFields>;
  stddev_pop?: Maybe<BlogTopicsStddevPopFields>;
  stddev_samp?: Maybe<BlogTopicsStddevSampFields>;
  sum?: Maybe<BlogTopicsSumFields>;
  var_pop?: Maybe<BlogTopicsVarPopFields>;
  var_samp?: Maybe<BlogTopicsVarSampFields>;
  variance?: Maybe<BlogTopicsVarianceFields>;
};


/** aggregate fields of "blog_topics" */
export type BlogTopicsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<BlogTopicsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blog_topics" */
export type BlogTopicsAggregateOrderBy = {
  avg?: Maybe<BlogTopicsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<BlogTopicsMaxOrderBy>;
  min?: Maybe<BlogTopicsMinOrderBy>;
  stddev?: Maybe<BlogTopicsStddevOrderBy>;
  stddev_pop?: Maybe<BlogTopicsStddevPopOrderBy>;
  stddev_samp?: Maybe<BlogTopicsStddevSampOrderBy>;
  sum?: Maybe<BlogTopicsSumOrderBy>;
  var_pop?: Maybe<BlogTopicsVarPopOrderBy>;
  var_samp?: Maybe<BlogTopicsVarSampOrderBy>;
  variance?: Maybe<BlogTopicsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "blog_topics" */
export type BlogTopicsArrRelInsertInput = {
  data: Array<BlogTopicsInsertInput>;
  on_conflict?: Maybe<BlogTopicsOnConflict>;
};

/** aggregate avg on columns */
export type BlogTopicsAvgFields = {
  __typename?: 'blog_topics_avg_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "blog_topics" */
export type BlogTopicsAvgOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "blog_topics". All fields are combined with a logical 'AND'. */
export type BlogTopicsBoolExp = {
  _and?: Maybe<Array<Maybe<BlogTopicsBoolExp>>>;
  _not?: Maybe<BlogTopicsBoolExp>;
  _or?: Maybe<Array<Maybe<BlogTopicsBoolExp>>>;
  blog?: Maybe<BlogsBoolExp>;
  blog_id?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  topic?: Maybe<TopicsBoolExp>;
  topic_id?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "blog_topics" */
export enum BlogTopicsConstraint {
  /** unique or primary key constraint */
  BLOG_TOPICS_PKEY = 'blog_topics_pkey'
}

/** input type for incrementing integer column in table "blog_topics" */
export type BlogTopicsIncInput = {
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "blog_topics" */
export type BlogTopicsInsertInput = {
  blog?: Maybe<BlogsObjRelInsertInput>;
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic?: Maybe<TopicsObjRelInsertInput>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type BlogTopicsMaxFields = {
  __typename?: 'blog_topics_max_fields';
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "blog_topics" */
export type BlogTopicsMaxOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type BlogTopicsMinFields = {
  __typename?: 'blog_topics_min_fields';
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "blog_topics" */
export type BlogTopicsMinOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "blog_topics" */
export type BlogTopicsMutationResponse = {
  __typename?: 'blog_topics_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<BlogTopics>;
};

/** input type for inserting object relation for remote table "blog_topics" */
export type BlogTopicsObjRelInsertInput = {
  data: BlogTopicsInsertInput;
  on_conflict?: Maybe<BlogTopicsOnConflict>;
};

/** on conflict condition type for table "blog_topics" */
export type BlogTopicsOnConflict = {
  constraint: BlogTopicsConstraint;
  update_columns: Array<BlogTopicsUpdateColumn>;
  where?: Maybe<BlogTopicsBoolExp>;
};

/** ordering options when selecting data from "blog_topics" */
export type BlogTopicsOrderBy = {
  blog?: Maybe<BlogsOrderBy>;
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  topic?: Maybe<TopicsOrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "blog_topics" */
export type BlogTopicsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "blog_topics" */
export enum BlogTopicsSelectColumn {
  /** column name */
  BLOG_ID = 'blog_id',
  /** column name */
  ID = 'id',
  /** column name */
  TOPIC_ID = 'topic_id'
}

/** input type for updating data in table "blog_topics" */
export type BlogTopicsSetInput = {
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type BlogTopicsStddevFields = {
  __typename?: 'blog_topics_stddev_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "blog_topics" */
export type BlogTopicsStddevOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type BlogTopicsStddevPopFields = {
  __typename?: 'blog_topics_stddev_pop_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "blog_topics" */
export type BlogTopicsStddevPopOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type BlogTopicsStddevSampFields = {
  __typename?: 'blog_topics_stddev_samp_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "blog_topics" */
export type BlogTopicsStddevSampOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type BlogTopicsSumFields = {
  __typename?: 'blog_topics_sum_fields';
  blog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "blog_topics" */
export type BlogTopicsSumOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** update columns of table "blog_topics" */
export enum BlogTopicsUpdateColumn {
  /** column name */
  BLOG_ID = 'blog_id',
  /** column name */
  ID = 'id',
  /** column name */
  TOPIC_ID = 'topic_id'
}

/** aggregate var_pop on columns */
export type BlogTopicsVarPopFields = {
  __typename?: 'blog_topics_var_pop_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "blog_topics" */
export type BlogTopicsVarPopOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type BlogTopicsVarSampFields = {
  __typename?: 'blog_topics_var_samp_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "blog_topics" */
export type BlogTopicsVarSampOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type BlogTopicsVarianceFields = {
  __typename?: 'blog_topics_variance_fields';
  blog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "blog_topics" */
export type BlogTopicsVarianceOrderBy = {
  blog_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** columns and relationships of "blogs" */
export type Blogs = {
  __typename?: 'blogs';
  /** An array relationship */
  brands: Array<BlogBrands>;
  /** An aggregated array relationship */
  brands_aggregate: BlogBrandsAggregate;
  /** An array relationship */
  comments: Array<BlogComments>;
  /** An aggregated array relationship */
  comments_aggregate: BlogCommentsAggregate;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  gender: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  likes: Array<BlogLikes>;
  /** An aggregated array relationship */
  likes_aggregate: BlogLikesAggregate;
  title: Scalars['String'];
  /** An array relationship */
  topics: Array<BlogTopics>;
  /** An aggregated array relationship */
  topics_aggregate: BlogTopicsAggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};


/** columns and relationships of "blogs" */
export type BlogsBrandsArgs = {
  distinct_on?: Maybe<Array<BlogBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogBrandsOrderBy>>;
  where?: Maybe<BlogBrandsBoolExp>;
};


/** columns and relationships of "blogs" */
export type BlogsBrandsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogBrandsOrderBy>>;
  where?: Maybe<BlogBrandsBoolExp>;
};


/** columns and relationships of "blogs" */
export type BlogsCommentsArgs = {
  distinct_on?: Maybe<Array<BlogCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogCommentsOrderBy>>;
  where?: Maybe<BlogCommentsBoolExp>;
};


/** columns and relationships of "blogs" */
export type BlogsCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogCommentsOrderBy>>;
  where?: Maybe<BlogCommentsBoolExp>;
};


/** columns and relationships of "blogs" */
export type BlogsLikesArgs = {
  distinct_on?: Maybe<Array<BlogLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogLikesOrderBy>>;
  where?: Maybe<BlogLikesBoolExp>;
};


/** columns and relationships of "blogs" */
export type BlogsLikesAggregateArgs = {
  distinct_on?: Maybe<Array<BlogLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogLikesOrderBy>>;
  where?: Maybe<BlogLikesBoolExp>;
};


/** columns and relationships of "blogs" */
export type BlogsTopicsArgs = {
  distinct_on?: Maybe<Array<BlogTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogTopicsOrderBy>>;
  where?: Maybe<BlogTopicsBoolExp>;
};


/** columns and relationships of "blogs" */
export type BlogsTopicsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogTopicsOrderBy>>;
  where?: Maybe<BlogTopicsBoolExp>;
};

/** aggregated selection of "blogs" */
export type BlogsAggregate = {
  __typename?: 'blogs_aggregate';
  aggregate?: Maybe<BlogsAggregateFields>;
  nodes: Array<Blogs>;
};

/** aggregate fields of "blogs" */
export type BlogsAggregateFields = {
  __typename?: 'blogs_aggregate_fields';
  avg?: Maybe<BlogsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<BlogsMaxFields>;
  min?: Maybe<BlogsMinFields>;
  stddev?: Maybe<BlogsStddevFields>;
  stddev_pop?: Maybe<BlogsStddevPopFields>;
  stddev_samp?: Maybe<BlogsStddevSampFields>;
  sum?: Maybe<BlogsSumFields>;
  var_pop?: Maybe<BlogsVarPopFields>;
  var_samp?: Maybe<BlogsVarSampFields>;
  variance?: Maybe<BlogsVarianceFields>;
};


/** aggregate fields of "blogs" */
export type BlogsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<BlogsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blogs" */
export type BlogsAggregateOrderBy = {
  avg?: Maybe<BlogsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<BlogsMaxOrderBy>;
  min?: Maybe<BlogsMinOrderBy>;
  stddev?: Maybe<BlogsStddevOrderBy>;
  stddev_pop?: Maybe<BlogsStddevPopOrderBy>;
  stddev_samp?: Maybe<BlogsStddevSampOrderBy>;
  sum?: Maybe<BlogsSumOrderBy>;
  var_pop?: Maybe<BlogsVarPopOrderBy>;
  var_samp?: Maybe<BlogsVarSampOrderBy>;
  variance?: Maybe<BlogsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "blogs" */
export type BlogsArrRelInsertInput = {
  data: Array<BlogsInsertInput>;
  on_conflict?: Maybe<BlogsOnConflict>;
};

/** aggregate avg on columns */
export type BlogsAvgFields = {
  __typename?: 'blogs_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "blogs" */
export type BlogsAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "blogs". All fields are combined with a logical 'AND'. */
export type BlogsBoolExp = {
  _and?: Maybe<Array<Maybe<BlogsBoolExp>>>;
  _not?: Maybe<BlogsBoolExp>;
  _or?: Maybe<Array<Maybe<BlogsBoolExp>>>;
  brands?: Maybe<BlogBrandsBoolExp>;
  comments?: Maybe<BlogCommentsBoolExp>;
  content?: Maybe<StringComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  gender?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  likes?: Maybe<BlogLikesBoolExp>;
  title?: Maybe<StringComparisonExp>;
  topics?: Maybe<BlogTopicsBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "blogs" */
export enum BlogsConstraint {
  /** unique or primary key constraint */
  BLOGS_ID_KEY = 'blogs_id_key',
  /** unique or primary key constraint */
  BLOGS_PKEY = 'blogs_pkey'
}

/** input type for incrementing integer column in table "blogs" */
export type BlogsIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "blogs" */
export type BlogsInsertInput = {
  brands?: Maybe<BlogBrandsArrRelInsertInput>;
  comments?: Maybe<BlogCommentsArrRelInsertInput>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<BlogLikesArrRelInsertInput>;
  title?: Maybe<Scalars['String']>;
  topics?: Maybe<BlogTopicsArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type BlogsMaxFields = {
  __typename?: 'blogs_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "blogs" */
export type BlogsMaxOrderBy = {
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type BlogsMinFields = {
  __typename?: 'blogs_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "blogs" */
export type BlogsMinOrderBy = {
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "blogs" */
export type BlogsMutationResponse = {
  __typename?: 'blogs_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Blogs>;
};

/** input type for inserting object relation for remote table "blogs" */
export type BlogsObjRelInsertInput = {
  data: BlogsInsertInput;
  on_conflict?: Maybe<BlogsOnConflict>;
};

/** on conflict condition type for table "blogs" */
export type BlogsOnConflict = {
  constraint: BlogsConstraint;
  update_columns: Array<BlogsUpdateColumn>;
  where?: Maybe<BlogsBoolExp>;
};

/** ordering options when selecting data from "blogs" */
export type BlogsOrderBy = {
  brands_aggregate?: Maybe<BlogBrandsAggregateOrderBy>;
  comments_aggregate?: Maybe<BlogCommentsAggregateOrderBy>;
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  likes_aggregate?: Maybe<BlogLikesAggregateOrderBy>;
  title?: Maybe<OrderBy>;
  topics_aggregate?: Maybe<BlogTopicsAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "blogs" */
export type BlogsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "blogs" */
export enum BlogsSelectColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  GENDER = 'gender',
  /** column name */
  ID = 'id',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "blogs" */
export type BlogsSetInput = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type BlogsStddevFields = {
  __typename?: 'blogs_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "blogs" */
export type BlogsStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type BlogsStddevPopFields = {
  __typename?: 'blogs_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "blogs" */
export type BlogsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type BlogsStddevSampFields = {
  __typename?: 'blogs_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "blogs" */
export type BlogsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type BlogsSumFields = {
  __typename?: 'blogs_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "blogs" */
export type BlogsSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "blogs" */
export enum BlogsUpdateColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  GENDER = 'gender',
  /** column name */
  ID = 'id',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** aggregate var_pop on columns */
export type BlogsVarPopFields = {
  __typename?: 'blogs_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "blogs" */
export type BlogsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type BlogsVarSampFields = {
  __typename?: 'blogs_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "blogs" */
export type BlogsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type BlogsVarianceFields = {
  __typename?: 'blogs_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "blogs" */
export type BlogsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "brands" */
export type Brands = {
  __typename?: 'brands';
  /** An array relationship */
  blog_brands: Array<BlogBrands>;
  /** An aggregated array relationship */
  blog_brands_aggregate: BlogBrandsAggregate;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  post_brands: Array<PostBrands>;
  /** An aggregated array relationship */
  post_brands_aggregate: PostBrandsAggregate;
};


/** columns and relationships of "brands" */
export type BrandsBlogBrandsArgs = {
  distinct_on?: Maybe<Array<BlogBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogBrandsOrderBy>>;
  where?: Maybe<BlogBrandsBoolExp>;
};


/** columns and relationships of "brands" */
export type BrandsBlogBrandsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogBrandsOrderBy>>;
  where?: Maybe<BlogBrandsBoolExp>;
};


/** columns and relationships of "brands" */
export type BrandsPostBrandsArgs = {
  distinct_on?: Maybe<Array<PostBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostBrandsOrderBy>>;
  where?: Maybe<PostBrandsBoolExp>;
};


/** columns and relationships of "brands" */
export type BrandsPostBrandsAggregateArgs = {
  distinct_on?: Maybe<Array<PostBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostBrandsOrderBy>>;
  where?: Maybe<PostBrandsBoolExp>;
};

/** aggregated selection of "brands" */
export type BrandsAggregate = {
  __typename?: 'brands_aggregate';
  aggregate?: Maybe<BrandsAggregateFields>;
  nodes: Array<Brands>;
};

/** aggregate fields of "brands" */
export type BrandsAggregateFields = {
  __typename?: 'brands_aggregate_fields';
  avg?: Maybe<BrandsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<BrandsMaxFields>;
  min?: Maybe<BrandsMinFields>;
  stddev?: Maybe<BrandsStddevFields>;
  stddev_pop?: Maybe<BrandsStddevPopFields>;
  stddev_samp?: Maybe<BrandsStddevSampFields>;
  sum?: Maybe<BrandsSumFields>;
  var_pop?: Maybe<BrandsVarPopFields>;
  var_samp?: Maybe<BrandsVarSampFields>;
  variance?: Maybe<BrandsVarianceFields>;
};


/** aggregate fields of "brands" */
export type BrandsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<BrandsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "brands" */
export type BrandsAggregateOrderBy = {
  avg?: Maybe<BrandsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<BrandsMaxOrderBy>;
  min?: Maybe<BrandsMinOrderBy>;
  stddev?: Maybe<BrandsStddevOrderBy>;
  stddev_pop?: Maybe<BrandsStddevPopOrderBy>;
  stddev_samp?: Maybe<BrandsStddevSampOrderBy>;
  sum?: Maybe<BrandsSumOrderBy>;
  var_pop?: Maybe<BrandsVarPopOrderBy>;
  var_samp?: Maybe<BrandsVarSampOrderBy>;
  variance?: Maybe<BrandsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "brands" */
export type BrandsArrRelInsertInput = {
  data: Array<BrandsInsertInput>;
  on_conflict?: Maybe<BrandsOnConflict>;
};

/** aggregate avg on columns */
export type BrandsAvgFields = {
  __typename?: 'brands_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "brands" */
export type BrandsAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "brands". All fields are combined with a logical 'AND'. */
export type BrandsBoolExp = {
  _and?: Maybe<Array<Maybe<BrandsBoolExp>>>;
  _not?: Maybe<BrandsBoolExp>;
  _or?: Maybe<Array<Maybe<BrandsBoolExp>>>;
  blog_brands?: Maybe<BlogBrandsBoolExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  post_brands?: Maybe<PostBrandsBoolExp>;
};

/** unique or primary key constraints on table "brands" */
export enum BrandsConstraint {
  /** unique or primary key constraint */
  BRANDS_NAME_KEY = 'brands_name_key',
  /** unique or primary key constraint */
  BRANDS_PKEY = 'brands_pkey'
}

/** input type for incrementing integer column in table "brands" */
export type BrandsIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "brands" */
export type BrandsInsertInput = {
  blog_brands?: Maybe<BlogBrandsArrRelInsertInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  post_brands?: Maybe<PostBrandsArrRelInsertInput>;
};

/** aggregate max on columns */
export type BrandsMaxFields = {
  __typename?: 'brands_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "brands" */
export type BrandsMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type BrandsMinFields = {
  __typename?: 'brands_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "brands" */
export type BrandsMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "brands" */
export type BrandsMutationResponse = {
  __typename?: 'brands_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Brands>;
};

/** input type for inserting object relation for remote table "brands" */
export type BrandsObjRelInsertInput = {
  data: BrandsInsertInput;
  on_conflict?: Maybe<BrandsOnConflict>;
};

/** on conflict condition type for table "brands" */
export type BrandsOnConflict = {
  constraint: BrandsConstraint;
  update_columns: Array<BrandsUpdateColumn>;
  where?: Maybe<BrandsBoolExp>;
};

/** ordering options when selecting data from "brands" */
export type BrandsOrderBy = {
  blog_brands_aggregate?: Maybe<BlogBrandsAggregateOrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  post_brands_aggregate?: Maybe<PostBrandsAggregateOrderBy>;
};

/** primary key columns input for table: "brands" */
export type BrandsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "brands" */
export enum BrandsSelectColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name'
}

/** input type for updating data in table "brands" */
export type BrandsSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type BrandsStddevFields = {
  __typename?: 'brands_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "brands" */
export type BrandsStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type BrandsStddevPopFields = {
  __typename?: 'brands_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "brands" */
export type BrandsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type BrandsStddevSampFields = {
  __typename?: 'brands_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "brands" */
export type BrandsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type BrandsSumFields = {
  __typename?: 'brands_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "brands" */
export type BrandsSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "brands" */
export enum BrandsUpdateColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name'
}

/** aggregate var_pop on columns */
export type BrandsVarPopFields = {
  __typename?: 'brands_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "brands" */
export type BrandsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type BrandsVarSampFields = {
  __typename?: 'brands_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "brands" */
export type BrandsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type BrandsVarianceFields = {
  __typename?: 'brands_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "brands" */
export type BrandsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "blog_brands" */
  delete_blog_brands?: Maybe<BlogBrandsMutationResponse>;
  /** delete single row from the table: "blog_brands" */
  delete_blog_brands_by_pk?: Maybe<BlogBrands>;
  /** delete data from the table: "blog_comments" */
  delete_blog_comments?: Maybe<BlogCommentsMutationResponse>;
  /** delete single row from the table: "blog_comments" */
  delete_blog_comments_by_pk?: Maybe<BlogComments>;
  /** delete data from the table: "blog_likes" */
  delete_blog_likes?: Maybe<BlogLikesMutationResponse>;
  /** delete single row from the table: "blog_likes" */
  delete_blog_likes_by_pk?: Maybe<BlogLikes>;
  /** delete data from the table: "blog_topics" */
  delete_blog_topics?: Maybe<BlogTopicsMutationResponse>;
  /** delete single row from the table: "blog_topics" */
  delete_blog_topics_by_pk?: Maybe<BlogTopics>;
  /** delete data from the table: "blogs" */
  delete_blogs?: Maybe<BlogsMutationResponse>;
  /** delete single row from the table: "blogs" */
  delete_blogs_by_pk?: Maybe<Blogs>;
  /** delete data from the table: "brands" */
  delete_brands?: Maybe<BrandsMutationResponse>;
  /** delete single row from the table: "brands" */
  delete_brands_by_pk?: Maybe<Brands>;
  /** delete data from the table: "nortifications" */
  delete_nortifications?: Maybe<NortificationsMutationResponse>;
  /** delete single row from the table: "nortifications" */
  delete_nortifications_by_pk?: Maybe<Nortifications>;
  /** delete data from the table: "post_brands" */
  delete_post_brands?: Maybe<PostBrandsMutationResponse>;
  /** delete single row from the table: "post_brands" */
  delete_post_brands_by_pk?: Maybe<PostBrands>;
  /** delete data from the table: "post_comments" */
  delete_post_comments?: Maybe<PostCommentsMutationResponse>;
  /** delete single row from the table: "post_comments" */
  delete_post_comments_by_pk?: Maybe<PostComments>;
  /** delete data from the table: "post_likes" */
  delete_post_likes?: Maybe<PostLikesMutationResponse>;
  /** delete single row from the table: "post_likes" */
  delete_post_likes_by_pk?: Maybe<PostLikes>;
  /** delete data from the table: "post_topics" */
  delete_post_topics?: Maybe<PostTopicsMutationResponse>;
  /** delete single row from the table: "post_topics" */
  delete_post_topics_by_pk?: Maybe<PostTopics>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<PostsMutationResponse>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "relationships" */
  delete_relationships?: Maybe<RelationshipsMutationResponse>;
  /** delete single row from the table: "relationships" */
  delete_relationships_by_pk?: Maybe<Relationships>;
  /** delete data from the table: "topics" */
  delete_topics?: Maybe<TopicsMutationResponse>;
  /** delete single row from the table: "topics" */
  delete_topics_by_pk?: Maybe<Topics>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "blog_brands" */
  insert_blog_brands?: Maybe<BlogBrandsMutationResponse>;
  /** insert a single row into the table: "blog_brands" */
  insert_blog_brands_one?: Maybe<BlogBrands>;
  /** insert data into the table: "blog_comments" */
  insert_blog_comments?: Maybe<BlogCommentsMutationResponse>;
  /** insert a single row into the table: "blog_comments" */
  insert_blog_comments_one?: Maybe<BlogComments>;
  /** insert data into the table: "blog_likes" */
  insert_blog_likes?: Maybe<BlogLikesMutationResponse>;
  /** insert a single row into the table: "blog_likes" */
  insert_blog_likes_one?: Maybe<BlogLikes>;
  /** insert data into the table: "blog_topics" */
  insert_blog_topics?: Maybe<BlogTopicsMutationResponse>;
  /** insert a single row into the table: "blog_topics" */
  insert_blog_topics_one?: Maybe<BlogTopics>;
  /** insert data into the table: "blogs" */
  insert_blogs?: Maybe<BlogsMutationResponse>;
  /** insert a single row into the table: "blogs" */
  insert_blogs_one?: Maybe<Blogs>;
  /** insert data into the table: "brands" */
  insert_brands?: Maybe<BrandsMutationResponse>;
  /** insert a single row into the table: "brands" */
  insert_brands_one?: Maybe<Brands>;
  /** insert data into the table: "nortifications" */
  insert_nortifications?: Maybe<NortificationsMutationResponse>;
  /** insert a single row into the table: "nortifications" */
  insert_nortifications_one?: Maybe<Nortifications>;
  /** insert data into the table: "post_brands" */
  insert_post_brands?: Maybe<PostBrandsMutationResponse>;
  /** insert a single row into the table: "post_brands" */
  insert_post_brands_one?: Maybe<PostBrands>;
  /** insert data into the table: "post_comments" */
  insert_post_comments?: Maybe<PostCommentsMutationResponse>;
  /** insert a single row into the table: "post_comments" */
  insert_post_comments_one?: Maybe<PostComments>;
  /** insert data into the table: "post_likes" */
  insert_post_likes?: Maybe<PostLikesMutationResponse>;
  /** insert a single row into the table: "post_likes" */
  insert_post_likes_one?: Maybe<PostLikes>;
  /** insert data into the table: "post_topics" */
  insert_post_topics?: Maybe<PostTopicsMutationResponse>;
  /** insert a single row into the table: "post_topics" */
  insert_post_topics_one?: Maybe<PostTopics>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<PostsMutationResponse>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "relationships" */
  insert_relationships?: Maybe<RelationshipsMutationResponse>;
  /** insert a single row into the table: "relationships" */
  insert_relationships_one?: Maybe<Relationships>;
  /** insert data into the table: "topics" */
  insert_topics?: Maybe<TopicsMutationResponse>;
  /** insert a single row into the table: "topics" */
  insert_topics_one?: Maybe<Topics>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "blog_brands" */
  update_blog_brands?: Maybe<BlogBrandsMutationResponse>;
  /** update single row of the table: "blog_brands" */
  update_blog_brands_by_pk?: Maybe<BlogBrands>;
  /** update data of the table: "blog_comments" */
  update_blog_comments?: Maybe<BlogCommentsMutationResponse>;
  /** update single row of the table: "blog_comments" */
  update_blog_comments_by_pk?: Maybe<BlogComments>;
  /** update data of the table: "blog_likes" */
  update_blog_likes?: Maybe<BlogLikesMutationResponse>;
  /** update single row of the table: "blog_likes" */
  update_blog_likes_by_pk?: Maybe<BlogLikes>;
  /** update data of the table: "blog_topics" */
  update_blog_topics?: Maybe<BlogTopicsMutationResponse>;
  /** update single row of the table: "blog_topics" */
  update_blog_topics_by_pk?: Maybe<BlogTopics>;
  /** update data of the table: "blogs" */
  update_blogs?: Maybe<BlogsMutationResponse>;
  /** update single row of the table: "blogs" */
  update_blogs_by_pk?: Maybe<Blogs>;
  /** update data of the table: "brands" */
  update_brands?: Maybe<BrandsMutationResponse>;
  /** update single row of the table: "brands" */
  update_brands_by_pk?: Maybe<Brands>;
  /** update data of the table: "nortifications" */
  update_nortifications?: Maybe<NortificationsMutationResponse>;
  /** update single row of the table: "nortifications" */
  update_nortifications_by_pk?: Maybe<Nortifications>;
  /** update data of the table: "post_brands" */
  update_post_brands?: Maybe<PostBrandsMutationResponse>;
  /** update single row of the table: "post_brands" */
  update_post_brands_by_pk?: Maybe<PostBrands>;
  /** update data of the table: "post_comments" */
  update_post_comments?: Maybe<PostCommentsMutationResponse>;
  /** update single row of the table: "post_comments" */
  update_post_comments_by_pk?: Maybe<PostComments>;
  /** update data of the table: "post_likes" */
  update_post_likes?: Maybe<PostLikesMutationResponse>;
  /** update single row of the table: "post_likes" */
  update_post_likes_by_pk?: Maybe<PostLikes>;
  /** update data of the table: "post_topics" */
  update_post_topics?: Maybe<PostTopicsMutationResponse>;
  /** update single row of the table: "post_topics" */
  update_post_topics_by_pk?: Maybe<PostTopics>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<PostsMutationResponse>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "relationships" */
  update_relationships?: Maybe<RelationshipsMutationResponse>;
  /** update single row of the table: "relationships" */
  update_relationships_by_pk?: Maybe<Relationships>;
  /** update data of the table: "topics" */
  update_topics?: Maybe<TopicsMutationResponse>;
  /** update single row of the table: "topics" */
  update_topics_by_pk?: Maybe<Topics>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type MutationRootDeleteBlogBrandsArgs = {
  where: BlogBrandsBoolExp;
};


/** mutation root */
export type MutationRootDeleteBlogBrandsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteBlogCommentsArgs = {
  where: BlogCommentsBoolExp;
};


/** mutation root */
export type MutationRootDeleteBlogCommentsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteBlogLikesArgs = {
  where: BlogLikesBoolExp;
};


/** mutation root */
export type MutationRootDeleteBlogLikesByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteBlogTopicsArgs = {
  where: BlogTopicsBoolExp;
};


/** mutation root */
export type MutationRootDeleteBlogTopicsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteBlogsArgs = {
  where: BlogsBoolExp;
};


/** mutation root */
export type MutationRootDeleteBlogsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteBrandsArgs = {
  where: BrandsBoolExp;
};


/** mutation root */
export type MutationRootDeleteBrandsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteNortificationsArgs = {
  where: NortificationsBoolExp;
};


/** mutation root */
export type MutationRootDeleteNortificationsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeletePostBrandsArgs = {
  where: PostBrandsBoolExp;
};


/** mutation root */
export type MutationRootDeletePostBrandsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeletePostCommentsArgs = {
  where: PostCommentsBoolExp;
};


/** mutation root */
export type MutationRootDeletePostCommentsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeletePostLikesArgs = {
  where: PostLikesBoolExp;
};


/** mutation root */
export type MutationRootDeletePostLikesByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeletePostTopicsArgs = {
  where: PostTopicsBoolExp;
};


/** mutation root */
export type MutationRootDeletePostTopicsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeletePostsArgs = {
  where: PostsBoolExp;
};


/** mutation root */
export type MutationRootDeletePostsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteRelationshipsArgs = {
  where: RelationshipsBoolExp;
};


/** mutation root */
export type MutationRootDeleteRelationshipsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteTopicsArgs = {
  where: TopicsBoolExp;
};


/** mutation root */
export type MutationRootDeleteTopicsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootInsertBlogBrandsArgs = {
  objects: Array<BlogBrandsInsertInput>;
  on_conflict?: Maybe<BlogBrandsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBlogBrandsOneArgs = {
  object: BlogBrandsInsertInput;
  on_conflict?: Maybe<BlogBrandsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBlogCommentsArgs = {
  objects: Array<BlogCommentsInsertInput>;
  on_conflict?: Maybe<BlogCommentsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBlogCommentsOneArgs = {
  object: BlogCommentsInsertInput;
  on_conflict?: Maybe<BlogCommentsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBlogLikesArgs = {
  objects: Array<BlogLikesInsertInput>;
  on_conflict?: Maybe<BlogLikesOnConflict>;
};


/** mutation root */
export type MutationRootInsertBlogLikesOneArgs = {
  object: BlogLikesInsertInput;
  on_conflict?: Maybe<BlogLikesOnConflict>;
};


/** mutation root */
export type MutationRootInsertBlogTopicsArgs = {
  objects: Array<BlogTopicsInsertInput>;
  on_conflict?: Maybe<BlogTopicsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBlogTopicsOneArgs = {
  object: BlogTopicsInsertInput;
  on_conflict?: Maybe<BlogTopicsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBlogsArgs = {
  objects: Array<BlogsInsertInput>;
  on_conflict?: Maybe<BlogsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBlogsOneArgs = {
  object: BlogsInsertInput;
  on_conflict?: Maybe<BlogsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBrandsArgs = {
  objects: Array<BrandsInsertInput>;
  on_conflict?: Maybe<BrandsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBrandsOneArgs = {
  object: BrandsInsertInput;
  on_conflict?: Maybe<BrandsOnConflict>;
};


/** mutation root */
export type MutationRootInsertNortificationsArgs = {
  objects: Array<NortificationsInsertInput>;
  on_conflict?: Maybe<NortificationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertNortificationsOneArgs = {
  object: NortificationsInsertInput;
  on_conflict?: Maybe<NortificationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostBrandsArgs = {
  objects: Array<PostBrandsInsertInput>;
  on_conflict?: Maybe<PostBrandsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostBrandsOneArgs = {
  object: PostBrandsInsertInput;
  on_conflict?: Maybe<PostBrandsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostCommentsArgs = {
  objects: Array<PostCommentsInsertInput>;
  on_conflict?: Maybe<PostCommentsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostCommentsOneArgs = {
  object: PostCommentsInsertInput;
  on_conflict?: Maybe<PostCommentsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostLikesArgs = {
  objects: Array<PostLikesInsertInput>;
  on_conflict?: Maybe<PostLikesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostLikesOneArgs = {
  object: PostLikesInsertInput;
  on_conflict?: Maybe<PostLikesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostTopicsArgs = {
  objects: Array<PostTopicsInsertInput>;
  on_conflict?: Maybe<PostTopicsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostTopicsOneArgs = {
  object: PostTopicsInsertInput;
  on_conflict?: Maybe<PostTopicsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostsArgs = {
  objects: Array<PostsInsertInput>;
  on_conflict?: Maybe<PostsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostsOneArgs = {
  object: PostsInsertInput;
  on_conflict?: Maybe<PostsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRelationshipsArgs = {
  objects: Array<RelationshipsInsertInput>;
  on_conflict?: Maybe<RelationshipsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRelationshipsOneArgs = {
  object: RelationshipsInsertInput;
  on_conflict?: Maybe<RelationshipsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTopicsArgs = {
  objects: Array<TopicsInsertInput>;
  on_conflict?: Maybe<TopicsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTopicsOneArgs = {
  object: TopicsInsertInput;
  on_conflict?: Maybe<TopicsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootUpdateBlogBrandsArgs = {
  _inc?: Maybe<BlogBrandsIncInput>;
  _set?: Maybe<BlogBrandsSetInput>;
  where: BlogBrandsBoolExp;
};


/** mutation root */
export type MutationRootUpdateBlogBrandsByPkArgs = {
  _inc?: Maybe<BlogBrandsIncInput>;
  _set?: Maybe<BlogBrandsSetInput>;
  pk_columns: BlogBrandsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateBlogCommentsArgs = {
  _inc?: Maybe<BlogCommentsIncInput>;
  _set?: Maybe<BlogCommentsSetInput>;
  where: BlogCommentsBoolExp;
};


/** mutation root */
export type MutationRootUpdateBlogCommentsByPkArgs = {
  _inc?: Maybe<BlogCommentsIncInput>;
  _set?: Maybe<BlogCommentsSetInput>;
  pk_columns: BlogCommentsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateBlogLikesArgs = {
  _inc?: Maybe<BlogLikesIncInput>;
  _set?: Maybe<BlogLikesSetInput>;
  where: BlogLikesBoolExp;
};


/** mutation root */
export type MutationRootUpdateBlogLikesByPkArgs = {
  _inc?: Maybe<BlogLikesIncInput>;
  _set?: Maybe<BlogLikesSetInput>;
  pk_columns: BlogLikesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateBlogTopicsArgs = {
  _inc?: Maybe<BlogTopicsIncInput>;
  _set?: Maybe<BlogTopicsSetInput>;
  where: BlogTopicsBoolExp;
};


/** mutation root */
export type MutationRootUpdateBlogTopicsByPkArgs = {
  _inc?: Maybe<BlogTopicsIncInput>;
  _set?: Maybe<BlogTopicsSetInput>;
  pk_columns: BlogTopicsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateBlogsArgs = {
  _inc?: Maybe<BlogsIncInput>;
  _set?: Maybe<BlogsSetInput>;
  where: BlogsBoolExp;
};


/** mutation root */
export type MutationRootUpdateBlogsByPkArgs = {
  _inc?: Maybe<BlogsIncInput>;
  _set?: Maybe<BlogsSetInput>;
  pk_columns: BlogsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateBrandsArgs = {
  _inc?: Maybe<BrandsIncInput>;
  _set?: Maybe<BrandsSetInput>;
  where: BrandsBoolExp;
};


/** mutation root */
export type MutationRootUpdateBrandsByPkArgs = {
  _inc?: Maybe<BrandsIncInput>;
  _set?: Maybe<BrandsSetInput>;
  pk_columns: BrandsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateNortificationsArgs = {
  _inc?: Maybe<NortificationsIncInput>;
  _set?: Maybe<NortificationsSetInput>;
  where: NortificationsBoolExp;
};


/** mutation root */
export type MutationRootUpdateNortificationsByPkArgs = {
  _inc?: Maybe<NortificationsIncInput>;
  _set?: Maybe<NortificationsSetInput>;
  pk_columns: NortificationsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostBrandsArgs = {
  _inc?: Maybe<PostBrandsIncInput>;
  _set?: Maybe<PostBrandsSetInput>;
  where: PostBrandsBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostBrandsByPkArgs = {
  _inc?: Maybe<PostBrandsIncInput>;
  _set?: Maybe<PostBrandsSetInput>;
  pk_columns: PostBrandsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostCommentsArgs = {
  _inc?: Maybe<PostCommentsIncInput>;
  _set?: Maybe<PostCommentsSetInput>;
  where: PostCommentsBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostCommentsByPkArgs = {
  _inc?: Maybe<PostCommentsIncInput>;
  _set?: Maybe<PostCommentsSetInput>;
  pk_columns: PostCommentsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostLikesArgs = {
  _inc?: Maybe<PostLikesIncInput>;
  _set?: Maybe<PostLikesSetInput>;
  where: PostLikesBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostLikesByPkArgs = {
  _inc?: Maybe<PostLikesIncInput>;
  _set?: Maybe<PostLikesSetInput>;
  pk_columns: PostLikesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostTopicsArgs = {
  _inc?: Maybe<PostTopicsIncInput>;
  _set?: Maybe<PostTopicsSetInput>;
  where: PostTopicsBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostTopicsByPkArgs = {
  _inc?: Maybe<PostTopicsIncInput>;
  _set?: Maybe<PostTopicsSetInput>;
  pk_columns: PostTopicsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostsArgs = {
  _inc?: Maybe<PostsIncInput>;
  _set?: Maybe<PostsSetInput>;
  where: PostsBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostsByPkArgs = {
  _inc?: Maybe<PostsIncInput>;
  _set?: Maybe<PostsSetInput>;
  pk_columns: PostsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRelationshipsArgs = {
  _inc?: Maybe<RelationshipsIncInput>;
  _set?: Maybe<RelationshipsSetInput>;
  where: RelationshipsBoolExp;
};


/** mutation root */
export type MutationRootUpdateRelationshipsByPkArgs = {
  _inc?: Maybe<RelationshipsIncInput>;
  _set?: Maybe<RelationshipsSetInput>;
  pk_columns: RelationshipsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTopicsArgs = {
  _inc?: Maybe<TopicsIncInput>;
  _set?: Maybe<TopicsSetInput>;
  where: TopicsBoolExp;
};


/** mutation root */
export type MutationRootUpdateTopicsByPkArgs = {
  _inc?: Maybe<TopicsIncInput>;
  _set?: Maybe<TopicsSetInput>;
  pk_columns: TopicsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set?: Maybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _set?: Maybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};

/** columns and relationships of "nortifications" */
export type Nortifications = {
  __typename?: 'nortifications';
  id: Scalars['Int'];
  text: Scalars['String'];
  type: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "nortifications" */
export type NortificationsAggregate = {
  __typename?: 'nortifications_aggregate';
  aggregate?: Maybe<NortificationsAggregateFields>;
  nodes: Array<Nortifications>;
};

/** aggregate fields of "nortifications" */
export type NortificationsAggregateFields = {
  __typename?: 'nortifications_aggregate_fields';
  avg?: Maybe<NortificationsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<NortificationsMaxFields>;
  min?: Maybe<NortificationsMinFields>;
  stddev?: Maybe<NortificationsStddevFields>;
  stddev_pop?: Maybe<NortificationsStddevPopFields>;
  stddev_samp?: Maybe<NortificationsStddevSampFields>;
  sum?: Maybe<NortificationsSumFields>;
  var_pop?: Maybe<NortificationsVarPopFields>;
  var_samp?: Maybe<NortificationsVarSampFields>;
  variance?: Maybe<NortificationsVarianceFields>;
};


/** aggregate fields of "nortifications" */
export type NortificationsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<NortificationsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nortifications" */
export type NortificationsAggregateOrderBy = {
  avg?: Maybe<NortificationsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<NortificationsMaxOrderBy>;
  min?: Maybe<NortificationsMinOrderBy>;
  stddev?: Maybe<NortificationsStddevOrderBy>;
  stddev_pop?: Maybe<NortificationsStddevPopOrderBy>;
  stddev_samp?: Maybe<NortificationsStddevSampOrderBy>;
  sum?: Maybe<NortificationsSumOrderBy>;
  var_pop?: Maybe<NortificationsVarPopOrderBy>;
  var_samp?: Maybe<NortificationsVarSampOrderBy>;
  variance?: Maybe<NortificationsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "nortifications" */
export type NortificationsArrRelInsertInput = {
  data: Array<NortificationsInsertInput>;
  on_conflict?: Maybe<NortificationsOnConflict>;
};

/** aggregate avg on columns */
export type NortificationsAvgFields = {
  __typename?: 'nortifications_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nortifications" */
export type NortificationsAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "nortifications". All fields are combined with a logical 'AND'. */
export type NortificationsBoolExp = {
  _and?: Maybe<Array<Maybe<NortificationsBoolExp>>>;
  _not?: Maybe<NortificationsBoolExp>;
  _or?: Maybe<Array<Maybe<NortificationsBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  text?: Maybe<StringComparisonExp>;
  type?: Maybe<StringComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "nortifications" */
export enum NortificationsConstraint {
  /** unique or primary key constraint */
  NORTIFICATIONS_PKEY = 'nortifications_pkey'
}

/** input type for incrementing integer column in table "nortifications" */
export type NortificationsIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "nortifications" */
export type NortificationsInsertInput = {
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type NortificationsMaxFields = {
  __typename?: 'nortifications_max_fields';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "nortifications" */
export type NortificationsMaxOrderBy = {
  id?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type NortificationsMinFields = {
  __typename?: 'nortifications_min_fields';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "nortifications" */
export type NortificationsMinOrderBy = {
  id?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "nortifications" */
export type NortificationsMutationResponse = {
  __typename?: 'nortifications_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Nortifications>;
};

/** input type for inserting object relation for remote table "nortifications" */
export type NortificationsObjRelInsertInput = {
  data: NortificationsInsertInput;
  on_conflict?: Maybe<NortificationsOnConflict>;
};

/** on conflict condition type for table "nortifications" */
export type NortificationsOnConflict = {
  constraint: NortificationsConstraint;
  update_columns: Array<NortificationsUpdateColumn>;
  where?: Maybe<NortificationsBoolExp>;
};

/** ordering options when selecting data from "nortifications" */
export type NortificationsOrderBy = {
  id?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "nortifications" */
export type NortificationsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "nortifications" */
export enum NortificationsSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  TEXT = 'text',
  /** column name */
  TYPE = 'type',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "nortifications" */
export type NortificationsSetInput = {
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type NortificationsStddevFields = {
  __typename?: 'nortifications_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nortifications" */
export type NortificationsStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type NortificationsStddevPopFields = {
  __typename?: 'nortifications_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nortifications" */
export type NortificationsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type NortificationsStddevSampFields = {
  __typename?: 'nortifications_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nortifications" */
export type NortificationsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type NortificationsSumFields = {
  __typename?: 'nortifications_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nortifications" */
export type NortificationsSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "nortifications" */
export enum NortificationsUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  TEXT = 'text',
  /** column name */
  TYPE = 'type',
  /** column name */
  USER_ID = 'user_id'
}

/** aggregate var_pop on columns */
export type NortificationsVarPopFields = {
  __typename?: 'nortifications_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nortifications" */
export type NortificationsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type NortificationsVarSampFields = {
  __typename?: 'nortifications_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nortifications" */
export type NortificationsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type NortificationsVarianceFields = {
  __typename?: 'nortifications_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nortifications" */
export type NortificationsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  ASC = 'asc',
  /** in the ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in the descending order, nulls first */
  DESC = 'desc',
  /** in the descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last'
}

/** columns and relationships of "post_brands" */
export type PostBrands = {
  __typename?: 'post_brands';
  /** An object relationship */
  brand: Brands;
  brand_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
};

/** aggregated selection of "post_brands" */
export type PostBrandsAggregate = {
  __typename?: 'post_brands_aggregate';
  aggregate?: Maybe<PostBrandsAggregateFields>;
  nodes: Array<PostBrands>;
};

/** aggregate fields of "post_brands" */
export type PostBrandsAggregateFields = {
  __typename?: 'post_brands_aggregate_fields';
  avg?: Maybe<PostBrandsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PostBrandsMaxFields>;
  min?: Maybe<PostBrandsMinFields>;
  stddev?: Maybe<PostBrandsStddevFields>;
  stddev_pop?: Maybe<PostBrandsStddevPopFields>;
  stddev_samp?: Maybe<PostBrandsStddevSampFields>;
  sum?: Maybe<PostBrandsSumFields>;
  var_pop?: Maybe<PostBrandsVarPopFields>;
  var_samp?: Maybe<PostBrandsVarSampFields>;
  variance?: Maybe<PostBrandsVarianceFields>;
};


/** aggregate fields of "post_brands" */
export type PostBrandsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PostBrandsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_brands" */
export type PostBrandsAggregateOrderBy = {
  avg?: Maybe<PostBrandsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PostBrandsMaxOrderBy>;
  min?: Maybe<PostBrandsMinOrderBy>;
  stddev?: Maybe<PostBrandsStddevOrderBy>;
  stddev_pop?: Maybe<PostBrandsStddevPopOrderBy>;
  stddev_samp?: Maybe<PostBrandsStddevSampOrderBy>;
  sum?: Maybe<PostBrandsSumOrderBy>;
  var_pop?: Maybe<PostBrandsVarPopOrderBy>;
  var_samp?: Maybe<PostBrandsVarSampOrderBy>;
  variance?: Maybe<PostBrandsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "post_brands" */
export type PostBrandsArrRelInsertInput = {
  data: Array<PostBrandsInsertInput>;
  on_conflict?: Maybe<PostBrandsOnConflict>;
};

/** aggregate avg on columns */
export type PostBrandsAvgFields = {
  __typename?: 'post_brands_avg_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_brands" */
export type PostBrandsAvgOrderBy = {
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "post_brands". All fields are combined with a logical 'AND'. */
export type PostBrandsBoolExp = {
  _and?: Maybe<Array<Maybe<PostBrandsBoolExp>>>;
  _not?: Maybe<PostBrandsBoolExp>;
  _or?: Maybe<Array<Maybe<PostBrandsBoolExp>>>;
  brand?: Maybe<BrandsBoolExp>;
  brand_id?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  post?: Maybe<PostsBoolExp>;
  post_id?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "post_brands" */
export enum PostBrandsConstraint {
  /** unique or primary key constraint */
  POST_BRANDS_PKEY = 'post_brands_pkey'
}

/** input type for incrementing integer column in table "post_brands" */
export type PostBrandsIncInput = {
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** aggregate max on columns */
export type PostBrandsMaxFields = {
  __typename?: 'post_brands_max_fields';
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "post_brands" */
export type PostBrandsMaxOrderBy = {
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PostBrandsMinFields = {
  __typename?: 'post_brands_min_fields';
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "post_brands" */
export type PostBrandsMinOrderBy = {
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "post_brands" */
export type PostBrandsMutationResponse = {
  __typename?: 'post_brands_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<PostBrands>;
};

/** input type for inserting object relation for remote table "post_brands" */
export type PostBrandsObjRelInsertInput = {
  data: PostBrandsInsertInput;
  on_conflict?: Maybe<PostBrandsOnConflict>;
};

/** on conflict condition type for table "post_brands" */
export type PostBrandsOnConflict = {
  constraint: PostBrandsConstraint;
  update_columns: Array<PostBrandsUpdateColumn>;
  where?: Maybe<PostBrandsBoolExp>;
};

/** ordering options when selecting data from "post_brands" */
export type PostBrandsOrderBy = {
  brand?: Maybe<BrandsOrderBy>;
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post?: Maybe<PostsOrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "post_brands" */
export type PostBrandsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "post_brands" */
export enum PostBrandsSelectColumn {
  /** column name */
  BRAND_ID = 'brand_id',
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id'
}

/** input type for updating data in table "post_brands" */
export type PostBrandsSetInput = {
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type PostBrandsStddevFields = {
  __typename?: 'post_brands_stddev_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_brands" */
export type PostBrandsStddevOrderBy = {
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PostBrandsStddevPopFields = {
  __typename?: 'post_brands_stddev_pop_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_brands" */
export type PostBrandsStddevPopOrderBy = {
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PostBrandsStddevSampFields = {
  __typename?: 'post_brands_stddev_samp_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_brands" */
export type PostBrandsStddevSampOrderBy = {
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PostBrandsSumFields = {
  __typename?: 'post_brands_sum_fields';
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_brands" */
export type PostBrandsSumOrderBy = {
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** update columns of table "post_brands" */
export enum PostBrandsUpdateColumn {
  /** column name */
  BRAND_ID = 'brand_id',
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id'
}

/** aggregate var_pop on columns */
export type PostBrandsVarPopFields = {
  __typename?: 'post_brands_var_pop_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_brands" */
export type PostBrandsVarPopOrderBy = {
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PostBrandsVarSampFields = {
  __typename?: 'post_brands_var_samp_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_brands" */
export type PostBrandsVarSampOrderBy = {
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PostBrandsVarianceFields = {
  __typename?: 'post_brands_variance_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_brands" */
export type PostBrandsVarianceOrderBy = {
  brand_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** columns and relationships of "post_comments" */
export type PostComments = {
  __typename?: 'post_comments';
  comment: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "post_comments" */
export type PostCommentsAggregate = {
  __typename?: 'post_comments_aggregate';
  aggregate?: Maybe<PostCommentsAggregateFields>;
  nodes: Array<PostComments>;
};

/** aggregate fields of "post_comments" */
export type PostCommentsAggregateFields = {
  __typename?: 'post_comments_aggregate_fields';
  avg?: Maybe<PostCommentsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PostCommentsMaxFields>;
  min?: Maybe<PostCommentsMinFields>;
  stddev?: Maybe<PostCommentsStddevFields>;
  stddev_pop?: Maybe<PostCommentsStddevPopFields>;
  stddev_samp?: Maybe<PostCommentsStddevSampFields>;
  sum?: Maybe<PostCommentsSumFields>;
  var_pop?: Maybe<PostCommentsVarPopFields>;
  var_samp?: Maybe<PostCommentsVarSampFields>;
  variance?: Maybe<PostCommentsVarianceFields>;
};


/** aggregate fields of "post_comments" */
export type PostCommentsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PostCommentsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_comments" */
export type PostCommentsAggregateOrderBy = {
  avg?: Maybe<PostCommentsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PostCommentsMaxOrderBy>;
  min?: Maybe<PostCommentsMinOrderBy>;
  stddev?: Maybe<PostCommentsStddevOrderBy>;
  stddev_pop?: Maybe<PostCommentsStddevPopOrderBy>;
  stddev_samp?: Maybe<PostCommentsStddevSampOrderBy>;
  sum?: Maybe<PostCommentsSumOrderBy>;
  var_pop?: Maybe<PostCommentsVarPopOrderBy>;
  var_samp?: Maybe<PostCommentsVarSampOrderBy>;
  variance?: Maybe<PostCommentsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "post_comments" */
export type PostCommentsArrRelInsertInput = {
  data: Array<PostCommentsInsertInput>;
  on_conflict?: Maybe<PostCommentsOnConflict>;
};

/** aggregate avg on columns */
export type PostCommentsAvgFields = {
  __typename?: 'post_comments_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_comments" */
export type PostCommentsAvgOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "post_comments". All fields are combined with a logical 'AND'. */
export type PostCommentsBoolExp = {
  _and?: Maybe<Array<Maybe<PostCommentsBoolExp>>>;
  _not?: Maybe<PostCommentsBoolExp>;
  _or?: Maybe<Array<Maybe<PostCommentsBoolExp>>>;
  comment?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  post?: Maybe<PostsBoolExp>;
  post_id?: Maybe<IntComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "post_comments" */
export enum PostCommentsConstraint {
  /** unique or primary key constraint */
  POST_COMMENTS_PKEY = 'post_comments_pkey'
}

/** input type for incrementing integer column in table "post_comments" */
export type PostCommentsIncInput = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_comments" */
export type PostCommentsInsertInput = {
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<PostsObjRelInsertInput>;
  post_id?: Maybe<Scalars['Int']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostCommentsMaxFields = {
  __typename?: 'post_comments_max_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_comments" */
export type PostCommentsMaxOrderBy = {
  comment?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PostCommentsMinFields = {
  __typename?: 'post_comments_min_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_comments" */
export type PostCommentsMinOrderBy = {
  comment?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "post_comments" */
export type PostCommentsMutationResponse = {
  __typename?: 'post_comments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<PostComments>;
};

/** input type for inserting object relation for remote table "post_comments" */
export type PostCommentsObjRelInsertInput = {
  data: PostCommentsInsertInput;
  on_conflict?: Maybe<PostCommentsOnConflict>;
};

/** on conflict condition type for table "post_comments" */
export type PostCommentsOnConflict = {
  constraint: PostCommentsConstraint;
  update_columns: Array<PostCommentsUpdateColumn>;
  where?: Maybe<PostCommentsBoolExp>;
};

/** ordering options when selecting data from "post_comments" */
export type PostCommentsOrderBy = {
  comment?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post?: Maybe<PostsOrderBy>;
  post_id?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "post_comments" */
export type PostCommentsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "post_comments" */
export enum PostCommentsSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "post_comments" */
export type PostCommentsSetInput = {
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type PostCommentsStddevFields = {
  __typename?: 'post_comments_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_comments" */
export type PostCommentsStddevOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PostCommentsStddevPopFields = {
  __typename?: 'post_comments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_comments" */
export type PostCommentsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PostCommentsStddevSampFields = {
  __typename?: 'post_comments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_comments" */
export type PostCommentsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PostCommentsSumFields = {
  __typename?: 'post_comments_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_comments" */
export type PostCommentsSumOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** update columns of table "post_comments" */
export enum PostCommentsUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  USER_ID = 'user_id'
}

/** aggregate var_pop on columns */
export type PostCommentsVarPopFields = {
  __typename?: 'post_comments_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_comments" */
export type PostCommentsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PostCommentsVarSampFields = {
  __typename?: 'post_comments_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_comments" */
export type PostCommentsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PostCommentsVarianceFields = {
  __typename?: 'post_comments_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_comments" */
export type PostCommentsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** columns and relationships of "post_likes" */
export type PostLikes = {
  __typename?: 'post_likes';
  id: Scalars['Int'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "post_likes" */
export type PostLikesAggregate = {
  __typename?: 'post_likes_aggregate';
  aggregate?: Maybe<PostLikesAggregateFields>;
  nodes: Array<PostLikes>;
};

/** aggregate fields of "post_likes" */
export type PostLikesAggregateFields = {
  __typename?: 'post_likes_aggregate_fields';
  avg?: Maybe<PostLikesAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PostLikesMaxFields>;
  min?: Maybe<PostLikesMinFields>;
  stddev?: Maybe<PostLikesStddevFields>;
  stddev_pop?: Maybe<PostLikesStddevPopFields>;
  stddev_samp?: Maybe<PostLikesStddevSampFields>;
  sum?: Maybe<PostLikesSumFields>;
  var_pop?: Maybe<PostLikesVarPopFields>;
  var_samp?: Maybe<PostLikesVarSampFields>;
  variance?: Maybe<PostLikesVarianceFields>;
};


/** aggregate fields of "post_likes" */
export type PostLikesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PostLikesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_likes" */
export type PostLikesAggregateOrderBy = {
  avg?: Maybe<PostLikesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PostLikesMaxOrderBy>;
  min?: Maybe<PostLikesMinOrderBy>;
  stddev?: Maybe<PostLikesStddevOrderBy>;
  stddev_pop?: Maybe<PostLikesStddevPopOrderBy>;
  stddev_samp?: Maybe<PostLikesStddevSampOrderBy>;
  sum?: Maybe<PostLikesSumOrderBy>;
  var_pop?: Maybe<PostLikesVarPopOrderBy>;
  var_samp?: Maybe<PostLikesVarSampOrderBy>;
  variance?: Maybe<PostLikesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "post_likes" */
export type PostLikesArrRelInsertInput = {
  data: Array<PostLikesInsertInput>;
  on_conflict?: Maybe<PostLikesOnConflict>;
};

/** aggregate avg on columns */
export type PostLikesAvgFields = {
  __typename?: 'post_likes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_likes" */
export type PostLikesAvgOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "post_likes". All fields are combined with a logical 'AND'. */
export type PostLikesBoolExp = {
  _and?: Maybe<Array<Maybe<PostLikesBoolExp>>>;
  _not?: Maybe<PostLikesBoolExp>;
  _or?: Maybe<Array<Maybe<PostLikesBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  post?: Maybe<PostsBoolExp>;
  post_id?: Maybe<IntComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "post_likes" */
export enum PostLikesConstraint {
  /** unique or primary key constraint */
  POST_LIKES_PKEY = 'post_likes_pkey'
}

/** input type for incrementing integer column in table "post_likes" */
export type PostLikesIncInput = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_likes" */
export type PostLikesInsertInput = {
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<PostsObjRelInsertInput>;
  post_id?: Maybe<Scalars['Int']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostLikesMaxFields = {
  __typename?: 'post_likes_max_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_likes" */
export type PostLikesMaxOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PostLikesMinFields = {
  __typename?: 'post_likes_min_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_likes" */
export type PostLikesMinOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "post_likes" */
export type PostLikesMutationResponse = {
  __typename?: 'post_likes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<PostLikes>;
};

/** input type for inserting object relation for remote table "post_likes" */
export type PostLikesObjRelInsertInput = {
  data: PostLikesInsertInput;
  on_conflict?: Maybe<PostLikesOnConflict>;
};

/** on conflict condition type for table "post_likes" */
export type PostLikesOnConflict = {
  constraint: PostLikesConstraint;
  update_columns: Array<PostLikesUpdateColumn>;
  where?: Maybe<PostLikesBoolExp>;
};

/** ordering options when selecting data from "post_likes" */
export type PostLikesOrderBy = {
  id?: Maybe<OrderBy>;
  post?: Maybe<PostsOrderBy>;
  post_id?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "post_likes" */
export type PostLikesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "post_likes" */
export enum PostLikesSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "post_likes" */
export type PostLikesSetInput = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type PostLikesStddevFields = {
  __typename?: 'post_likes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_likes" */
export type PostLikesStddevOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PostLikesStddevPopFields = {
  __typename?: 'post_likes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_likes" */
export type PostLikesStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PostLikesStddevSampFields = {
  __typename?: 'post_likes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_likes" */
export type PostLikesStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PostLikesSumFields = {
  __typename?: 'post_likes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_likes" */
export type PostLikesSumOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** update columns of table "post_likes" */
export enum PostLikesUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  USER_ID = 'user_id'
}

/** aggregate var_pop on columns */
export type PostLikesVarPopFields = {
  __typename?: 'post_likes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_likes" */
export type PostLikesVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PostLikesVarSampFields = {
  __typename?: 'post_likes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_likes" */
export type PostLikesVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PostLikesVarianceFields = {
  __typename?: 'post_likes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_likes" */
export type PostLikesVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** columns and relationships of "post_topics" */
export type PostTopics = {
  __typename?: 'post_topics';
  id: Scalars['Int'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  /** An object relationship */
  topic: Topics;
  topic_id: Scalars['Int'];
};

/** aggregated selection of "post_topics" */
export type PostTopicsAggregate = {
  __typename?: 'post_topics_aggregate';
  aggregate?: Maybe<PostTopicsAggregateFields>;
  nodes: Array<PostTopics>;
};

/** aggregate fields of "post_topics" */
export type PostTopicsAggregateFields = {
  __typename?: 'post_topics_aggregate_fields';
  avg?: Maybe<PostTopicsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PostTopicsMaxFields>;
  min?: Maybe<PostTopicsMinFields>;
  stddev?: Maybe<PostTopicsStddevFields>;
  stddev_pop?: Maybe<PostTopicsStddevPopFields>;
  stddev_samp?: Maybe<PostTopicsStddevSampFields>;
  sum?: Maybe<PostTopicsSumFields>;
  var_pop?: Maybe<PostTopicsVarPopFields>;
  var_samp?: Maybe<PostTopicsVarSampFields>;
  variance?: Maybe<PostTopicsVarianceFields>;
};


/** aggregate fields of "post_topics" */
export type PostTopicsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PostTopicsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_topics" */
export type PostTopicsAggregateOrderBy = {
  avg?: Maybe<PostTopicsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PostTopicsMaxOrderBy>;
  min?: Maybe<PostTopicsMinOrderBy>;
  stddev?: Maybe<PostTopicsStddevOrderBy>;
  stddev_pop?: Maybe<PostTopicsStddevPopOrderBy>;
  stddev_samp?: Maybe<PostTopicsStddevSampOrderBy>;
  sum?: Maybe<PostTopicsSumOrderBy>;
  var_pop?: Maybe<PostTopicsVarPopOrderBy>;
  var_samp?: Maybe<PostTopicsVarSampOrderBy>;
  variance?: Maybe<PostTopicsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "post_topics" */
export type PostTopicsArrRelInsertInput = {
  data: Array<PostTopicsInsertInput>;
  on_conflict?: Maybe<PostTopicsOnConflict>;
};

/** aggregate avg on columns */
export type PostTopicsAvgFields = {
  __typename?: 'post_topics_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_topics" */
export type PostTopicsAvgOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "post_topics". All fields are combined with a logical 'AND'. */
export type PostTopicsBoolExp = {
  _and?: Maybe<Array<Maybe<PostTopicsBoolExp>>>;
  _not?: Maybe<PostTopicsBoolExp>;
  _or?: Maybe<Array<Maybe<PostTopicsBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  post?: Maybe<PostsBoolExp>;
  post_id?: Maybe<IntComparisonExp>;
  topic?: Maybe<TopicsBoolExp>;
  topic_id?: Maybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "post_topics" */
export enum PostTopicsConstraint {
  /** unique or primary key constraint */
  POST_TOPICS_PKEY = 'post_topics_pkey'
}

/** input type for incrementing integer column in table "post_topics" */
export type PostTopicsIncInput = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_topics" */
export type PostTopicsInsertInput = {
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<PostsObjRelInsertInput>;
  post_id?: Maybe<Scalars['Int']>;
  topic?: Maybe<TopicsObjRelInsertInput>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type PostTopicsMaxFields = {
  __typename?: 'post_topics_max_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "post_topics" */
export type PostTopicsMaxOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PostTopicsMinFields = {
  __typename?: 'post_topics_min_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "post_topics" */
export type PostTopicsMinOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "post_topics" */
export type PostTopicsMutationResponse = {
  __typename?: 'post_topics_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<PostTopics>;
};

/** input type for inserting object relation for remote table "post_topics" */
export type PostTopicsObjRelInsertInput = {
  data: PostTopicsInsertInput;
  on_conflict?: Maybe<PostTopicsOnConflict>;
};

/** on conflict condition type for table "post_topics" */
export type PostTopicsOnConflict = {
  constraint: PostTopicsConstraint;
  update_columns: Array<PostTopicsUpdateColumn>;
  where?: Maybe<PostTopicsBoolExp>;
};

/** ordering options when selecting data from "post_topics" */
export type PostTopicsOrderBy = {
  id?: Maybe<OrderBy>;
  post?: Maybe<PostsOrderBy>;
  post_id?: Maybe<OrderBy>;
  topic?: Maybe<TopicsOrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "post_topics" */
export type PostTopicsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "post_topics" */
export enum PostTopicsSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  TOPIC_ID = 'topic_id'
}

/** input type for updating data in table "post_topics" */
export type PostTopicsSetInput = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type PostTopicsStddevFields = {
  __typename?: 'post_topics_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_topics" */
export type PostTopicsStddevOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PostTopicsStddevPopFields = {
  __typename?: 'post_topics_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_topics" */
export type PostTopicsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PostTopicsStddevSampFields = {
  __typename?: 'post_topics_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_topics" */
export type PostTopicsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PostTopicsSumFields = {
  __typename?: 'post_topics_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_topics" */
export type PostTopicsSumOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** update columns of table "post_topics" */
export enum PostTopicsUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  TOPIC_ID = 'topic_id'
}

/** aggregate var_pop on columns */
export type PostTopicsVarPopFields = {
  __typename?: 'post_topics_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_topics" */
export type PostTopicsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PostTopicsVarSampFields = {
  __typename?: 'post_topics_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_topics" */
export type PostTopicsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PostTopicsVarianceFields = {
  __typename?: 'post_topics_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_topics" */
export type PostTopicsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  topic_id?: Maybe<OrderBy>;
};

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  /** An array relationship */
  brands: Array<PostBrands>;
  /** An aggregated array relationship */
  brands_aggregate: PostBrandsAggregate;
  /** An array relationship */
  comments: Array<PostComments>;
  /** An aggregated array relationship */
  comments_aggregate: PostCommentsAggregate;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  gender: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  image_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  likes: Array<PostLikes>;
  /** An aggregated array relationship */
  likes_aggregate: PostLikesAggregate;
  /** An array relationship */
  topics: Array<PostTopics>;
  /** An aggregated array relationship */
  topics_aggregate: PostTopicsAggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};


/** columns and relationships of "posts" */
export type PostsBrandsArgs = {
  distinct_on?: Maybe<Array<PostBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostBrandsOrderBy>>;
  where?: Maybe<PostBrandsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsBrandsAggregateArgs = {
  distinct_on?: Maybe<Array<PostBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostBrandsOrderBy>>;
  where?: Maybe<PostBrandsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: Maybe<Array<PostCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostCommentsOrderBy>>;
  where?: Maybe<PostCommentsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<PostCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostCommentsOrderBy>>;
  where?: Maybe<PostCommentsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsLikesArgs = {
  distinct_on?: Maybe<Array<PostLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostLikesOrderBy>>;
  where?: Maybe<PostLikesBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsLikesAggregateArgs = {
  distinct_on?: Maybe<Array<PostLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostLikesOrderBy>>;
  where?: Maybe<PostLikesBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsTopicsArgs = {
  distinct_on?: Maybe<Array<PostTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTopicsOrderBy>>;
  where?: Maybe<PostTopicsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsTopicsAggregateArgs = {
  distinct_on?: Maybe<Array<PostTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTopicsOrderBy>>;
  where?: Maybe<PostTopicsBoolExp>;
};

/** aggregated selection of "posts" */
export type PostsAggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<PostsAggregateFields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type PostsAggregateFields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<PostsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PostsMaxFields>;
  min?: Maybe<PostsMinFields>;
  stddev?: Maybe<PostsStddevFields>;
  stddev_pop?: Maybe<PostsStddevPopFields>;
  stddev_samp?: Maybe<PostsStddevSampFields>;
  sum?: Maybe<PostsSumFields>;
  var_pop?: Maybe<PostsVarPopFields>;
  var_samp?: Maybe<PostsVarSampFields>;
  variance?: Maybe<PostsVarianceFields>;
};


/** aggregate fields of "posts" */
export type PostsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PostsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type PostsAggregateOrderBy = {
  avg?: Maybe<PostsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PostsMaxOrderBy>;
  min?: Maybe<PostsMinOrderBy>;
  stddev?: Maybe<PostsStddevOrderBy>;
  stddev_pop?: Maybe<PostsStddevPopOrderBy>;
  stddev_samp?: Maybe<PostsStddevSampOrderBy>;
  sum?: Maybe<PostsSumOrderBy>;
  var_pop?: Maybe<PostsVarPopOrderBy>;
  var_samp?: Maybe<PostsVarSampOrderBy>;
  variance?: Maybe<PostsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "posts" */
export type PostsArrRelInsertInput = {
  data: Array<PostsInsertInput>;
  on_conflict?: Maybe<PostsOnConflict>;
};

/** aggregate avg on columns */
export type PostsAvgFields = {
  __typename?: 'posts_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "posts" */
export type PostsAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type PostsBoolExp = {
  _and?: Maybe<Array<Maybe<PostsBoolExp>>>;
  _not?: Maybe<PostsBoolExp>;
  _or?: Maybe<Array<Maybe<PostsBoolExp>>>;
  brands?: Maybe<PostBrandsBoolExp>;
  comments?: Maybe<PostCommentsBoolExp>;
  content?: Maybe<StringComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  gender?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  image?: Maybe<StringComparisonExp>;
  image_id?: Maybe<StringComparisonExp>;
  likes?: Maybe<PostLikesBoolExp>;
  topics?: Maybe<PostTopicsBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "posts" */
export enum PostsConstraint {
  /** unique or primary key constraint */
  POSTS_PKEY = 'posts_pkey'
}

/** input type for incrementing integer column in table "posts" */
export type PostsIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "posts" */
export type PostsInsertInput = {
  brands?: Maybe<PostBrandsArrRelInsertInput>;
  comments?: Maybe<PostCommentsArrRelInsertInput>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  image_id?: Maybe<Scalars['String']>;
  likes?: Maybe<PostLikesArrRelInsertInput>;
  topics?: Maybe<PostTopicsArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostsMaxFields = {
  __typename?: 'posts_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  image_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "posts" */
export type PostsMaxOrderBy = {
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  image_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PostsMinFields = {
  __typename?: 'posts_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  image_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "posts" */
export type PostsMinOrderBy = {
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  image_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "posts" */
export type PostsMutationResponse = {
  __typename?: 'posts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type PostsObjRelInsertInput = {
  data: PostsInsertInput;
  on_conflict?: Maybe<PostsOnConflict>;
};

/** on conflict condition type for table "posts" */
export type PostsOnConflict = {
  constraint: PostsConstraint;
  update_columns: Array<PostsUpdateColumn>;
  where?: Maybe<PostsBoolExp>;
};

/** ordering options when selecting data from "posts" */
export type PostsOrderBy = {
  brands_aggregate?: Maybe<PostBrandsAggregateOrderBy>;
  comments_aggregate?: Maybe<PostCommentsAggregateOrderBy>;
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  image_id?: Maybe<OrderBy>;
  likes_aggregate?: Maybe<PostLikesAggregateOrderBy>;
  topics_aggregate?: Maybe<PostTopicsAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "posts" */
export type PostsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "posts" */
export enum PostsSelectColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  GENDER = 'gender',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE = 'image',
  /** column name */
  IMAGE_ID = 'image_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "posts" */
export type PostsSetInput = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  image_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type PostsStddevFields = {
  __typename?: 'posts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "posts" */
export type PostsStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PostsStddevPopFields = {
  __typename?: 'posts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type PostsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PostsStddevSampFields = {
  __typename?: 'posts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type PostsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PostsSumFields = {
  __typename?: 'posts_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "posts" */
export type PostsSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "posts" */
export enum PostsUpdateColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  GENDER = 'gender',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE = 'image',
  /** column name */
  IMAGE_ID = 'image_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** aggregate var_pop on columns */
export type PostsVarPopFields = {
  __typename?: 'posts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "posts" */
export type PostsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PostsVarSampFields = {
  __typename?: 'posts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "posts" */
export type PostsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PostsVarianceFields = {
  __typename?: 'posts_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "posts" */
export type PostsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** query root */
export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "blog_brands" */
  blog_brands: Array<BlogBrands>;
  /** fetch aggregated fields from the table: "blog_brands" */
  blog_brands_aggregate: BlogBrandsAggregate;
  /** fetch data from the table: "blog_brands" using primary key columns */
  blog_brands_by_pk?: Maybe<BlogBrands>;
  /** fetch data from the table: "blog_comments" */
  blog_comments: Array<BlogComments>;
  /** fetch aggregated fields from the table: "blog_comments" */
  blog_comments_aggregate: BlogCommentsAggregate;
  /** fetch data from the table: "blog_comments" using primary key columns */
  blog_comments_by_pk?: Maybe<BlogComments>;
  /** fetch data from the table: "blog_likes" */
  blog_likes: Array<BlogLikes>;
  /** fetch aggregated fields from the table: "blog_likes" */
  blog_likes_aggregate: BlogLikesAggregate;
  /** fetch data from the table: "blog_likes" using primary key columns */
  blog_likes_by_pk?: Maybe<BlogLikes>;
  /** fetch data from the table: "blog_topics" */
  blog_topics: Array<BlogTopics>;
  /** fetch aggregated fields from the table: "blog_topics" */
  blog_topics_aggregate: BlogTopicsAggregate;
  /** fetch data from the table: "blog_topics" using primary key columns */
  blog_topics_by_pk?: Maybe<BlogTopics>;
  /** fetch data from the table: "blogs" */
  blogs: Array<Blogs>;
  /** fetch aggregated fields from the table: "blogs" */
  blogs_aggregate: BlogsAggregate;
  /** fetch data from the table: "blogs" using primary key columns */
  blogs_by_pk?: Maybe<Blogs>;
  /** fetch data from the table: "brands" */
  brands: Array<Brands>;
  /** fetch aggregated fields from the table: "brands" */
  brands_aggregate: BrandsAggregate;
  /** fetch data from the table: "brands" using primary key columns */
  brands_by_pk?: Maybe<Brands>;
  /** fetch data from the table: "nortifications" */
  nortifications: Array<Nortifications>;
  /** fetch aggregated fields from the table: "nortifications" */
  nortifications_aggregate: NortificationsAggregate;
  /** fetch data from the table: "nortifications" using primary key columns */
  nortifications_by_pk?: Maybe<Nortifications>;
  /** fetch data from the table: "post_brands" */
  post_brands: Array<PostBrands>;
  /** fetch aggregated fields from the table: "post_brands" */
  post_brands_aggregate: PostBrandsAggregate;
  /** fetch data from the table: "post_brands" using primary key columns */
  post_brands_by_pk?: Maybe<PostBrands>;
  /** fetch data from the table: "post_comments" */
  post_comments: Array<PostComments>;
  /** fetch aggregated fields from the table: "post_comments" */
  post_comments_aggregate: PostCommentsAggregate;
  /** fetch data from the table: "post_comments" using primary key columns */
  post_comments_by_pk?: Maybe<PostComments>;
  /** fetch data from the table: "post_likes" */
  post_likes: Array<PostLikes>;
  /** fetch aggregated fields from the table: "post_likes" */
  post_likes_aggregate: PostLikesAggregate;
  /** fetch data from the table: "post_likes" using primary key columns */
  post_likes_by_pk?: Maybe<PostLikes>;
  /** fetch data from the table: "post_topics" */
  post_topics: Array<PostTopics>;
  /** fetch aggregated fields from the table: "post_topics" */
  post_topics_aggregate: PostTopicsAggregate;
  /** fetch data from the table: "post_topics" using primary key columns */
  post_topics_by_pk?: Maybe<PostTopics>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "relationships" */
  relationships: Array<Relationships>;
  /** fetch aggregated fields from the table: "relationships" */
  relationships_aggregate: RelationshipsAggregate;
  /** fetch data from the table: "relationships" using primary key columns */
  relationships_by_pk?: Maybe<Relationships>;
  /** fetch data from the table: "topics" */
  topics: Array<Topics>;
  /** fetch aggregated fields from the table: "topics" */
  topics_aggregate: TopicsAggregate;
  /** fetch data from the table: "topics" using primary key columns */
  topics_by_pk?: Maybe<Topics>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type QueryRootBlogBrandsArgs = {
  distinct_on?: Maybe<Array<BlogBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogBrandsOrderBy>>;
  where?: Maybe<BlogBrandsBoolExp>;
};


/** query root */
export type QueryRootBlogBrandsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogBrandsOrderBy>>;
  where?: Maybe<BlogBrandsBoolExp>;
};


/** query root */
export type QueryRootBlogBrandsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootBlogCommentsArgs = {
  distinct_on?: Maybe<Array<BlogCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogCommentsOrderBy>>;
  where?: Maybe<BlogCommentsBoolExp>;
};


/** query root */
export type QueryRootBlogCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogCommentsOrderBy>>;
  where?: Maybe<BlogCommentsBoolExp>;
};


/** query root */
export type QueryRootBlogCommentsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootBlogLikesArgs = {
  distinct_on?: Maybe<Array<BlogLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogLikesOrderBy>>;
  where?: Maybe<BlogLikesBoolExp>;
};


/** query root */
export type QueryRootBlogLikesAggregateArgs = {
  distinct_on?: Maybe<Array<BlogLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogLikesOrderBy>>;
  where?: Maybe<BlogLikesBoolExp>;
};


/** query root */
export type QueryRootBlogLikesByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootBlogTopicsArgs = {
  distinct_on?: Maybe<Array<BlogTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogTopicsOrderBy>>;
  where?: Maybe<BlogTopicsBoolExp>;
};


/** query root */
export type QueryRootBlogTopicsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogTopicsOrderBy>>;
  where?: Maybe<BlogTopicsBoolExp>;
};


/** query root */
export type QueryRootBlogTopicsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootBlogsArgs = {
  distinct_on?: Maybe<Array<BlogsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogsOrderBy>>;
  where?: Maybe<BlogsBoolExp>;
};


/** query root */
export type QueryRootBlogsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogsOrderBy>>;
  where?: Maybe<BlogsBoolExp>;
};


/** query root */
export type QueryRootBlogsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootBrandsArgs = {
  distinct_on?: Maybe<Array<BrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BrandsOrderBy>>;
  where?: Maybe<BrandsBoolExp>;
};


/** query root */
export type QueryRootBrandsAggregateArgs = {
  distinct_on?: Maybe<Array<BrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BrandsOrderBy>>;
  where?: Maybe<BrandsBoolExp>;
};


/** query root */
export type QueryRootBrandsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootNortificationsArgs = {
  distinct_on?: Maybe<Array<NortificationsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<NortificationsOrderBy>>;
  where?: Maybe<NortificationsBoolExp>;
};


/** query root */
export type QueryRootNortificationsAggregateArgs = {
  distinct_on?: Maybe<Array<NortificationsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<NortificationsOrderBy>>;
  where?: Maybe<NortificationsBoolExp>;
};


/** query root */
export type QueryRootNortificationsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootPostBrandsArgs = {
  distinct_on?: Maybe<Array<PostBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostBrandsOrderBy>>;
  where?: Maybe<PostBrandsBoolExp>;
};


/** query root */
export type QueryRootPostBrandsAggregateArgs = {
  distinct_on?: Maybe<Array<PostBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostBrandsOrderBy>>;
  where?: Maybe<PostBrandsBoolExp>;
};


/** query root */
export type QueryRootPostBrandsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootPostCommentsArgs = {
  distinct_on?: Maybe<Array<PostCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostCommentsOrderBy>>;
  where?: Maybe<PostCommentsBoolExp>;
};


/** query root */
export type QueryRootPostCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<PostCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostCommentsOrderBy>>;
  where?: Maybe<PostCommentsBoolExp>;
};


/** query root */
export type QueryRootPostCommentsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootPostLikesArgs = {
  distinct_on?: Maybe<Array<PostLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostLikesOrderBy>>;
  where?: Maybe<PostLikesBoolExp>;
};


/** query root */
export type QueryRootPostLikesAggregateArgs = {
  distinct_on?: Maybe<Array<PostLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostLikesOrderBy>>;
  where?: Maybe<PostLikesBoolExp>;
};


/** query root */
export type QueryRootPostLikesByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootPostTopicsArgs = {
  distinct_on?: Maybe<Array<PostTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTopicsOrderBy>>;
  where?: Maybe<PostTopicsBoolExp>;
};


/** query root */
export type QueryRootPostTopicsAggregateArgs = {
  distinct_on?: Maybe<Array<PostTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTopicsOrderBy>>;
  where?: Maybe<PostTopicsBoolExp>;
};


/** query root */
export type QueryRootPostTopicsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootPostsArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


/** query root */
export type QueryRootPostsAggregateArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


/** query root */
export type QueryRootPostsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootRelationshipsArgs = {
  distinct_on?: Maybe<Array<RelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RelationshipsOrderBy>>;
  where?: Maybe<RelationshipsBoolExp>;
};


/** query root */
export type QueryRootRelationshipsAggregateArgs = {
  distinct_on?: Maybe<Array<RelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RelationshipsOrderBy>>;
  where?: Maybe<RelationshipsBoolExp>;
};


/** query root */
export type QueryRootRelationshipsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootTopicsArgs = {
  distinct_on?: Maybe<Array<TopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TopicsOrderBy>>;
  where?: Maybe<TopicsBoolExp>;
};


/** query root */
export type QueryRootTopicsAggregateArgs = {
  distinct_on?: Maybe<Array<TopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TopicsOrderBy>>;
  where?: Maybe<TopicsBoolExp>;
};


/** query root */
export type QueryRootTopicsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type QueryRootUsersArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


/** query root */
export type QueryRootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


/** query root */
export type QueryRootUsersByPkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "relationships" */
export type Relationships = {
  __typename?: 'relationships';
  /** An object relationship */
  follow: Users;
  follow_id: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "relationships" */
export type RelationshipsAggregate = {
  __typename?: 'relationships_aggregate';
  aggregate?: Maybe<RelationshipsAggregateFields>;
  nodes: Array<Relationships>;
};

/** aggregate fields of "relationships" */
export type RelationshipsAggregateFields = {
  __typename?: 'relationships_aggregate_fields';
  avg?: Maybe<RelationshipsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<RelationshipsMaxFields>;
  min?: Maybe<RelationshipsMinFields>;
  stddev?: Maybe<RelationshipsStddevFields>;
  stddev_pop?: Maybe<RelationshipsStddevPopFields>;
  stddev_samp?: Maybe<RelationshipsStddevSampFields>;
  sum?: Maybe<RelationshipsSumFields>;
  var_pop?: Maybe<RelationshipsVarPopFields>;
  var_samp?: Maybe<RelationshipsVarSampFields>;
  variance?: Maybe<RelationshipsVarianceFields>;
};


/** aggregate fields of "relationships" */
export type RelationshipsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<RelationshipsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "relationships" */
export type RelationshipsAggregateOrderBy = {
  avg?: Maybe<RelationshipsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<RelationshipsMaxOrderBy>;
  min?: Maybe<RelationshipsMinOrderBy>;
  stddev?: Maybe<RelationshipsStddevOrderBy>;
  stddev_pop?: Maybe<RelationshipsStddevPopOrderBy>;
  stddev_samp?: Maybe<RelationshipsStddevSampOrderBy>;
  sum?: Maybe<RelationshipsSumOrderBy>;
  var_pop?: Maybe<RelationshipsVarPopOrderBy>;
  var_samp?: Maybe<RelationshipsVarSampOrderBy>;
  variance?: Maybe<RelationshipsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "relationships" */
export type RelationshipsArrRelInsertInput = {
  data: Array<RelationshipsInsertInput>;
  on_conflict?: Maybe<RelationshipsOnConflict>;
};

/** aggregate avg on columns */
export type RelationshipsAvgFields = {
  __typename?: 'relationships_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "relationships" */
export type RelationshipsAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "relationships". All fields are combined with a logical 'AND'. */
export type RelationshipsBoolExp = {
  _and?: Maybe<Array<Maybe<RelationshipsBoolExp>>>;
  _not?: Maybe<RelationshipsBoolExp>;
  _or?: Maybe<Array<Maybe<RelationshipsBoolExp>>>;
  follow?: Maybe<UsersBoolExp>;
  follow_id?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "relationships" */
export enum RelationshipsConstraint {
  /** unique or primary key constraint */
  RELATIONSHIPS_PKEY = 'relationships_pkey'
}

/** input type for incrementing integer column in table "relationships" */
export type RelationshipsIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "relationships" */
export type RelationshipsInsertInput = {
  follow?: Maybe<UsersObjRelInsertInput>;
  follow_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RelationshipsMaxFields = {
  __typename?: 'relationships_max_fields';
  follow_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "relationships" */
export type RelationshipsMaxOrderBy = {
  follow_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type RelationshipsMinFields = {
  __typename?: 'relationships_min_fields';
  follow_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "relationships" */
export type RelationshipsMinOrderBy = {
  follow_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "relationships" */
export type RelationshipsMutationResponse = {
  __typename?: 'relationships_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Relationships>;
};

/** input type for inserting object relation for remote table "relationships" */
export type RelationshipsObjRelInsertInput = {
  data: RelationshipsInsertInput;
  on_conflict?: Maybe<RelationshipsOnConflict>;
};

/** on conflict condition type for table "relationships" */
export type RelationshipsOnConflict = {
  constraint: RelationshipsConstraint;
  update_columns: Array<RelationshipsUpdateColumn>;
  where?: Maybe<RelationshipsBoolExp>;
};

/** ordering options when selecting data from "relationships" */
export type RelationshipsOrderBy = {
  follow?: Maybe<UsersOrderBy>;
  follow_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "relationships" */
export type RelationshipsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "relationships" */
export enum RelationshipsSelectColumn {
  /** column name */
  FOLLOW_ID = 'follow_id',
  /** column name */
  ID = 'id',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "relationships" */
export type RelationshipsSetInput = {
  follow_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type RelationshipsStddevFields = {
  __typename?: 'relationships_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "relationships" */
export type RelationshipsStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type RelationshipsStddevPopFields = {
  __typename?: 'relationships_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "relationships" */
export type RelationshipsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type RelationshipsStddevSampFields = {
  __typename?: 'relationships_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "relationships" */
export type RelationshipsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type RelationshipsSumFields = {
  __typename?: 'relationships_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "relationships" */
export type RelationshipsSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "relationships" */
export enum RelationshipsUpdateColumn {
  /** column name */
  FOLLOW_ID = 'follow_id',
  /** column name */
  ID = 'id',
  /** column name */
  USER_ID = 'user_id'
}

/** aggregate var_pop on columns */
export type RelationshipsVarPopFields = {
  __typename?: 'relationships_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "relationships" */
export type RelationshipsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type RelationshipsVarSampFields = {
  __typename?: 'relationships_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "relationships" */
export type RelationshipsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type RelationshipsVarianceFields = {
  __typename?: 'relationships_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "relationships" */
export type RelationshipsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** subscription root */
export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "blog_brands" */
  blog_brands: Array<BlogBrands>;
  /** fetch aggregated fields from the table: "blog_brands" */
  blog_brands_aggregate: BlogBrandsAggregate;
  /** fetch data from the table: "blog_brands" using primary key columns */
  blog_brands_by_pk?: Maybe<BlogBrands>;
  /** fetch data from the table: "blog_comments" */
  blog_comments: Array<BlogComments>;
  /** fetch aggregated fields from the table: "blog_comments" */
  blog_comments_aggregate: BlogCommentsAggregate;
  /** fetch data from the table: "blog_comments" using primary key columns */
  blog_comments_by_pk?: Maybe<BlogComments>;
  /** fetch data from the table: "blog_likes" */
  blog_likes: Array<BlogLikes>;
  /** fetch aggregated fields from the table: "blog_likes" */
  blog_likes_aggregate: BlogLikesAggregate;
  /** fetch data from the table: "blog_likes" using primary key columns */
  blog_likes_by_pk?: Maybe<BlogLikes>;
  /** fetch data from the table: "blog_topics" */
  blog_topics: Array<BlogTopics>;
  /** fetch aggregated fields from the table: "blog_topics" */
  blog_topics_aggregate: BlogTopicsAggregate;
  /** fetch data from the table: "blog_topics" using primary key columns */
  blog_topics_by_pk?: Maybe<BlogTopics>;
  /** fetch data from the table: "blogs" */
  blogs: Array<Blogs>;
  /** fetch aggregated fields from the table: "blogs" */
  blogs_aggregate: BlogsAggregate;
  /** fetch data from the table: "blogs" using primary key columns */
  blogs_by_pk?: Maybe<Blogs>;
  /** fetch data from the table: "brands" */
  brands: Array<Brands>;
  /** fetch aggregated fields from the table: "brands" */
  brands_aggregate: BrandsAggregate;
  /** fetch data from the table: "brands" using primary key columns */
  brands_by_pk?: Maybe<Brands>;
  /** fetch data from the table: "nortifications" */
  nortifications: Array<Nortifications>;
  /** fetch aggregated fields from the table: "nortifications" */
  nortifications_aggregate: NortificationsAggregate;
  /** fetch data from the table: "nortifications" using primary key columns */
  nortifications_by_pk?: Maybe<Nortifications>;
  /** fetch data from the table: "post_brands" */
  post_brands: Array<PostBrands>;
  /** fetch aggregated fields from the table: "post_brands" */
  post_brands_aggregate: PostBrandsAggregate;
  /** fetch data from the table: "post_brands" using primary key columns */
  post_brands_by_pk?: Maybe<PostBrands>;
  /** fetch data from the table: "post_comments" */
  post_comments: Array<PostComments>;
  /** fetch aggregated fields from the table: "post_comments" */
  post_comments_aggregate: PostCommentsAggregate;
  /** fetch data from the table: "post_comments" using primary key columns */
  post_comments_by_pk?: Maybe<PostComments>;
  /** fetch data from the table: "post_likes" */
  post_likes: Array<PostLikes>;
  /** fetch aggregated fields from the table: "post_likes" */
  post_likes_aggregate: PostLikesAggregate;
  /** fetch data from the table: "post_likes" using primary key columns */
  post_likes_by_pk?: Maybe<PostLikes>;
  /** fetch data from the table: "post_topics" */
  post_topics: Array<PostTopics>;
  /** fetch aggregated fields from the table: "post_topics" */
  post_topics_aggregate: PostTopicsAggregate;
  /** fetch data from the table: "post_topics" using primary key columns */
  post_topics_by_pk?: Maybe<PostTopics>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "relationships" */
  relationships: Array<Relationships>;
  /** fetch aggregated fields from the table: "relationships" */
  relationships_aggregate: RelationshipsAggregate;
  /** fetch data from the table: "relationships" using primary key columns */
  relationships_by_pk?: Maybe<Relationships>;
  /** fetch data from the table: "topics" */
  topics: Array<Topics>;
  /** fetch aggregated fields from the table: "topics" */
  topics_aggregate: TopicsAggregate;
  /** fetch data from the table: "topics" using primary key columns */
  topics_by_pk?: Maybe<Topics>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type SubscriptionRootBlogBrandsArgs = {
  distinct_on?: Maybe<Array<BlogBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogBrandsOrderBy>>;
  where?: Maybe<BlogBrandsBoolExp>;
};


/** subscription root */
export type SubscriptionRootBlogBrandsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogBrandsOrderBy>>;
  where?: Maybe<BlogBrandsBoolExp>;
};


/** subscription root */
export type SubscriptionRootBlogBrandsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootBlogCommentsArgs = {
  distinct_on?: Maybe<Array<BlogCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogCommentsOrderBy>>;
  where?: Maybe<BlogCommentsBoolExp>;
};


/** subscription root */
export type SubscriptionRootBlogCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogCommentsOrderBy>>;
  where?: Maybe<BlogCommentsBoolExp>;
};


/** subscription root */
export type SubscriptionRootBlogCommentsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootBlogLikesArgs = {
  distinct_on?: Maybe<Array<BlogLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogLikesOrderBy>>;
  where?: Maybe<BlogLikesBoolExp>;
};


/** subscription root */
export type SubscriptionRootBlogLikesAggregateArgs = {
  distinct_on?: Maybe<Array<BlogLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogLikesOrderBy>>;
  where?: Maybe<BlogLikesBoolExp>;
};


/** subscription root */
export type SubscriptionRootBlogLikesByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootBlogTopicsArgs = {
  distinct_on?: Maybe<Array<BlogTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogTopicsOrderBy>>;
  where?: Maybe<BlogTopicsBoolExp>;
};


/** subscription root */
export type SubscriptionRootBlogTopicsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogTopicsOrderBy>>;
  where?: Maybe<BlogTopicsBoolExp>;
};


/** subscription root */
export type SubscriptionRootBlogTopicsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootBlogsArgs = {
  distinct_on?: Maybe<Array<BlogsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogsOrderBy>>;
  where?: Maybe<BlogsBoolExp>;
};


/** subscription root */
export type SubscriptionRootBlogsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogsOrderBy>>;
  where?: Maybe<BlogsBoolExp>;
};


/** subscription root */
export type SubscriptionRootBlogsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootBrandsArgs = {
  distinct_on?: Maybe<Array<BrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BrandsOrderBy>>;
  where?: Maybe<BrandsBoolExp>;
};


/** subscription root */
export type SubscriptionRootBrandsAggregateArgs = {
  distinct_on?: Maybe<Array<BrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BrandsOrderBy>>;
  where?: Maybe<BrandsBoolExp>;
};


/** subscription root */
export type SubscriptionRootBrandsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootNortificationsArgs = {
  distinct_on?: Maybe<Array<NortificationsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<NortificationsOrderBy>>;
  where?: Maybe<NortificationsBoolExp>;
};


/** subscription root */
export type SubscriptionRootNortificationsAggregateArgs = {
  distinct_on?: Maybe<Array<NortificationsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<NortificationsOrderBy>>;
  where?: Maybe<NortificationsBoolExp>;
};


/** subscription root */
export type SubscriptionRootNortificationsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootPostBrandsArgs = {
  distinct_on?: Maybe<Array<PostBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostBrandsOrderBy>>;
  where?: Maybe<PostBrandsBoolExp>;
};


/** subscription root */
export type SubscriptionRootPostBrandsAggregateArgs = {
  distinct_on?: Maybe<Array<PostBrandsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostBrandsOrderBy>>;
  where?: Maybe<PostBrandsBoolExp>;
};


/** subscription root */
export type SubscriptionRootPostBrandsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootPostCommentsArgs = {
  distinct_on?: Maybe<Array<PostCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostCommentsOrderBy>>;
  where?: Maybe<PostCommentsBoolExp>;
};


/** subscription root */
export type SubscriptionRootPostCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<PostCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostCommentsOrderBy>>;
  where?: Maybe<PostCommentsBoolExp>;
};


/** subscription root */
export type SubscriptionRootPostCommentsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootPostLikesArgs = {
  distinct_on?: Maybe<Array<PostLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostLikesOrderBy>>;
  where?: Maybe<PostLikesBoolExp>;
};


/** subscription root */
export type SubscriptionRootPostLikesAggregateArgs = {
  distinct_on?: Maybe<Array<PostLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostLikesOrderBy>>;
  where?: Maybe<PostLikesBoolExp>;
};


/** subscription root */
export type SubscriptionRootPostLikesByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootPostTopicsArgs = {
  distinct_on?: Maybe<Array<PostTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTopicsOrderBy>>;
  where?: Maybe<PostTopicsBoolExp>;
};


/** subscription root */
export type SubscriptionRootPostTopicsAggregateArgs = {
  distinct_on?: Maybe<Array<PostTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTopicsOrderBy>>;
  where?: Maybe<PostTopicsBoolExp>;
};


/** subscription root */
export type SubscriptionRootPostTopicsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootPostsArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


/** subscription root */
export type SubscriptionRootPostsAggregateArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


/** subscription root */
export type SubscriptionRootPostsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootRelationshipsArgs = {
  distinct_on?: Maybe<Array<RelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RelationshipsOrderBy>>;
  where?: Maybe<RelationshipsBoolExp>;
};


/** subscription root */
export type SubscriptionRootRelationshipsAggregateArgs = {
  distinct_on?: Maybe<Array<RelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RelationshipsOrderBy>>;
  where?: Maybe<RelationshipsBoolExp>;
};


/** subscription root */
export type SubscriptionRootRelationshipsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootTopicsArgs = {
  distinct_on?: Maybe<Array<TopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TopicsOrderBy>>;
  where?: Maybe<TopicsBoolExp>;
};


/** subscription root */
export type SubscriptionRootTopicsAggregateArgs = {
  distinct_on?: Maybe<Array<TopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TopicsOrderBy>>;
  where?: Maybe<TopicsBoolExp>;
};


/** subscription root */
export type SubscriptionRootTopicsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type SubscriptionRootUsersArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


/** subscription root */
export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


/** subscription root */
export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
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

/** columns and relationships of "topics" */
export type Topics = {
  __typename?: 'topics';
  /** An array relationship */
  blog_topics: Array<BlogTopics>;
  /** An aggregated array relationship */
  blog_topics_aggregate: BlogTopicsAggregate;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  post_topics: Array<PostTopics>;
  /** An aggregated array relationship */
  post_topics_aggregate: PostTopicsAggregate;
};


/** columns and relationships of "topics" */
export type TopicsBlogTopicsArgs = {
  distinct_on?: Maybe<Array<BlogTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogTopicsOrderBy>>;
  where?: Maybe<BlogTopicsBoolExp>;
};


/** columns and relationships of "topics" */
export type TopicsBlogTopicsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogTopicsOrderBy>>;
  where?: Maybe<BlogTopicsBoolExp>;
};


/** columns and relationships of "topics" */
export type TopicsPostTopicsArgs = {
  distinct_on?: Maybe<Array<PostTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTopicsOrderBy>>;
  where?: Maybe<PostTopicsBoolExp>;
};


/** columns and relationships of "topics" */
export type TopicsPostTopicsAggregateArgs = {
  distinct_on?: Maybe<Array<PostTopicsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTopicsOrderBy>>;
  where?: Maybe<PostTopicsBoolExp>;
};

/** aggregated selection of "topics" */
export type TopicsAggregate = {
  __typename?: 'topics_aggregate';
  aggregate?: Maybe<TopicsAggregateFields>;
  nodes: Array<Topics>;
};

/** aggregate fields of "topics" */
export type TopicsAggregateFields = {
  __typename?: 'topics_aggregate_fields';
  avg?: Maybe<TopicsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TopicsMaxFields>;
  min?: Maybe<TopicsMinFields>;
  stddev?: Maybe<TopicsStddevFields>;
  stddev_pop?: Maybe<TopicsStddevPopFields>;
  stddev_samp?: Maybe<TopicsStddevSampFields>;
  sum?: Maybe<TopicsSumFields>;
  var_pop?: Maybe<TopicsVarPopFields>;
  var_samp?: Maybe<TopicsVarSampFields>;
  variance?: Maybe<TopicsVarianceFields>;
};


/** aggregate fields of "topics" */
export type TopicsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TopicsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "topics" */
export type TopicsAggregateOrderBy = {
  avg?: Maybe<TopicsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TopicsMaxOrderBy>;
  min?: Maybe<TopicsMinOrderBy>;
  stddev?: Maybe<TopicsStddevOrderBy>;
  stddev_pop?: Maybe<TopicsStddevPopOrderBy>;
  stddev_samp?: Maybe<TopicsStddevSampOrderBy>;
  sum?: Maybe<TopicsSumOrderBy>;
  var_pop?: Maybe<TopicsVarPopOrderBy>;
  var_samp?: Maybe<TopicsVarSampOrderBy>;
  variance?: Maybe<TopicsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "topics" */
export type TopicsArrRelInsertInput = {
  data: Array<TopicsInsertInput>;
  on_conflict?: Maybe<TopicsOnConflict>;
};

/** aggregate avg on columns */
export type TopicsAvgFields = {
  __typename?: 'topics_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "topics" */
export type TopicsAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "topics". All fields are combined with a logical 'AND'. */
export type TopicsBoolExp = {
  _and?: Maybe<Array<Maybe<TopicsBoolExp>>>;
  _not?: Maybe<TopicsBoolExp>;
  _or?: Maybe<Array<Maybe<TopicsBoolExp>>>;
  blog_topics?: Maybe<BlogTopicsBoolExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  post_topics?: Maybe<PostTopicsBoolExp>;
};

/** unique or primary key constraints on table "topics" */
export enum TopicsConstraint {
  /** unique or primary key constraint */
  TOPICS_NAME_KEY = 'topics_name_key',
  /** unique or primary key constraint */
  TOPICS_PKEY = 'topics_pkey'
}

/** input type for incrementing integer column in table "topics" */
export type TopicsIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "topics" */
export type TopicsInsertInput = {
  blog_topics?: Maybe<BlogTopicsArrRelInsertInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  post_topics?: Maybe<PostTopicsArrRelInsertInput>;
};

/** aggregate max on columns */
export type TopicsMaxFields = {
  __typename?: 'topics_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "topics" */
export type TopicsMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TopicsMinFields = {
  __typename?: 'topics_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "topics" */
export type TopicsMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "topics" */
export type TopicsMutationResponse = {
  __typename?: 'topics_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Topics>;
};

/** input type for inserting object relation for remote table "topics" */
export type TopicsObjRelInsertInput = {
  data: TopicsInsertInput;
  on_conflict?: Maybe<TopicsOnConflict>;
};

/** on conflict condition type for table "topics" */
export type TopicsOnConflict = {
  constraint: TopicsConstraint;
  update_columns: Array<TopicsUpdateColumn>;
  where?: Maybe<TopicsBoolExp>;
};

/** ordering options when selecting data from "topics" */
export type TopicsOrderBy = {
  blog_topics_aggregate?: Maybe<BlogTopicsAggregateOrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  post_topics_aggregate?: Maybe<PostTopicsAggregateOrderBy>;
};

/** primary key columns input for table: "topics" */
export type TopicsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "topics" */
export enum TopicsSelectColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name'
}

/** input type for updating data in table "topics" */
export type TopicsSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type TopicsStddevFields = {
  __typename?: 'topics_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "topics" */
export type TopicsStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TopicsStddevPopFields = {
  __typename?: 'topics_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "topics" */
export type TopicsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TopicsStddevSampFields = {
  __typename?: 'topics_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "topics" */
export type TopicsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type TopicsSumFields = {
  __typename?: 'topics_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "topics" */
export type TopicsSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "topics" */
export enum TopicsUpdateColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name'
}

/** aggregate var_pop on columns */
export type TopicsVarPopFields = {
  __typename?: 'topics_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "topics" */
export type TopicsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TopicsVarSampFields = {
  __typename?: 'topics_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "topics" */
export type TopicsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type TopicsVarianceFields = {
  __typename?: 'topics_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "topics" */
export type TopicsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  blog_comments: Array<BlogComments>;
  /** An aggregated array relationship */
  blog_comments_aggregate: BlogCommentsAggregate;
  /** An array relationship */
  blog_likes: Array<BlogLikes>;
  /** An aggregated array relationship */
  blog_likes_aggregate: BlogLikesAggregate;
  /** An array relationship */
  blogs: Array<Blogs>;
  /** An aggregated array relationship */
  blogs_aggregate: BlogsAggregate;
  created_at: Scalars['timestamptz'];
  display_id: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  isDarkMode: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  nortifications: Array<Nortifications>;
  /** An aggregated array relationship */
  nortifications_aggregate: NortificationsAggregate;
  /** An array relationship */
  post_comments: Array<PostComments>;
  /** An aggregated array relationship */
  post_comments_aggregate: PostCommentsAggregate;
  /** An array relationship */
  post_likes: Array<PostLikes>;
  /** An aggregated array relationship */
  post_likes_aggregate: PostLikesAggregate;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregated array relationship */
  posts_aggregate: PostsAggregate;
  profile?: Maybe<Scalars['String']>;
  /** An array relationship */
  relation_user_from: Array<Relationships>;
  /** An aggregated array relationship */
  relation_user_from_aggregate: RelationshipsAggregate;
  /** An array relationship */
  relation_user_to: Array<Relationships>;
  /** An aggregated array relationship */
  relation_user_to_aggregate: RelationshipsAggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersBlogCommentsArgs = {
  distinct_on?: Maybe<Array<BlogCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogCommentsOrderBy>>;
  where?: Maybe<BlogCommentsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersBlogCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogCommentsOrderBy>>;
  where?: Maybe<BlogCommentsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersBlogLikesArgs = {
  distinct_on?: Maybe<Array<BlogLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogLikesOrderBy>>;
  where?: Maybe<BlogLikesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersBlogLikesAggregateArgs = {
  distinct_on?: Maybe<Array<BlogLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogLikesOrderBy>>;
  where?: Maybe<BlogLikesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersBlogsArgs = {
  distinct_on?: Maybe<Array<BlogsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogsOrderBy>>;
  where?: Maybe<BlogsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersBlogsAggregateArgs = {
  distinct_on?: Maybe<Array<BlogsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BlogsOrderBy>>;
  where?: Maybe<BlogsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersNortificationsArgs = {
  distinct_on?: Maybe<Array<NortificationsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<NortificationsOrderBy>>;
  where?: Maybe<NortificationsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersNortificationsAggregateArgs = {
  distinct_on?: Maybe<Array<NortificationsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<NortificationsOrderBy>>;
  where?: Maybe<NortificationsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostCommentsArgs = {
  distinct_on?: Maybe<Array<PostCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostCommentsOrderBy>>;
  where?: Maybe<PostCommentsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<PostCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostCommentsOrderBy>>;
  where?: Maybe<PostCommentsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostLikesArgs = {
  distinct_on?: Maybe<Array<PostLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostLikesOrderBy>>;
  where?: Maybe<PostLikesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostLikesAggregateArgs = {
  distinct_on?: Maybe<Array<PostLikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostLikesOrderBy>>;
  where?: Maybe<PostLikesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostsAggregateArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersRelationUserFromArgs = {
  distinct_on?: Maybe<Array<RelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RelationshipsOrderBy>>;
  where?: Maybe<RelationshipsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersRelationUserFromAggregateArgs = {
  distinct_on?: Maybe<Array<RelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RelationshipsOrderBy>>;
  where?: Maybe<RelationshipsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersRelationUserToArgs = {
  distinct_on?: Maybe<Array<RelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RelationshipsOrderBy>>;
  where?: Maybe<RelationshipsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersRelationUserToAggregateArgs = {
  distinct_on?: Maybe<Array<RelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RelationshipsOrderBy>>;
  where?: Maybe<RelationshipsBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UsersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type UsersAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<UsersMaxOrderBy>;
  min?: Maybe<UsersMinOrderBy>;
};

/** input type for inserting array relation for remote table "users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: Maybe<Array<Maybe<UsersBoolExp>>>;
  _not?: Maybe<UsersBoolExp>;
  _or?: Maybe<Array<Maybe<UsersBoolExp>>>;
  blog_comments?: Maybe<BlogCommentsBoolExp>;
  blog_likes?: Maybe<BlogLikesBoolExp>;
  blogs?: Maybe<BlogsBoolExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  display_id?: Maybe<StringComparisonExp>;
  email?: Maybe<StringComparisonExp>;
  gender?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
  image?: Maybe<StringComparisonExp>;
  isDarkMode?: Maybe<BooleanComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  nortifications?: Maybe<NortificationsBoolExp>;
  post_comments?: Maybe<PostCommentsBoolExp>;
  post_likes?: Maybe<PostLikesBoolExp>;
  posts?: Maybe<PostsBoolExp>;
  profile?: Maybe<StringComparisonExp>;
  relation_user_from?: Maybe<RelationshipsBoolExp>;
  relation_user_to?: Maybe<RelationshipsBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint */
  USERS_DISPLAY_ID_ID_KEY = 'users_display_id_id_key',
  /** unique or primary key constraint */
  USERS_PKEY = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  blog_comments?: Maybe<BlogCommentsArrRelInsertInput>;
  blog_likes?: Maybe<BlogLikesArrRelInsertInput>;
  blogs?: Maybe<BlogsArrRelInsertInput>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isDarkMode?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  nortifications?: Maybe<NortificationsArrRelInsertInput>;
  post_comments?: Maybe<PostCommentsArrRelInsertInput>;
  post_likes?: Maybe<PostLikesArrRelInsertInput>;
  posts?: Maybe<PostsArrRelInsertInput>;
  profile?: Maybe<Scalars['String']>;
  relation_user_from?: Maybe<RelationshipsArrRelInsertInput>;
  relation_user_to?: Maybe<RelationshipsArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type UsersMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  display_id?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  profile?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type UsersMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  display_id?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  profile?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
};

/** on conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns: Array<UsersUpdateColumn>;
  where?: Maybe<UsersBoolExp>;
};

/** ordering options when selecting data from "users" */
export type UsersOrderBy = {
  blog_comments_aggregate?: Maybe<BlogCommentsAggregateOrderBy>;
  blog_likes_aggregate?: Maybe<BlogLikesAggregateOrderBy>;
  blogs_aggregate?: Maybe<BlogsAggregateOrderBy>;
  created_at?: Maybe<OrderBy>;
  display_id?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  isDarkMode?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  nortifications_aggregate?: Maybe<NortificationsAggregateOrderBy>;
  post_comments_aggregate?: Maybe<PostCommentsAggregateOrderBy>;
  post_likes_aggregate?: Maybe<PostLikesAggregateOrderBy>;
  posts_aggregate?: Maybe<PostsAggregateOrderBy>;
  profile?: Maybe<OrderBy>;
  relation_user_from_aggregate?: Maybe<RelationshipsAggregateOrderBy>;
  relation_user_to_aggregate?: Maybe<RelationshipsAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: "users" */
export type UsersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DISPLAY_ID = 'display_id',
  /** column name */
  EMAIL = 'email',
  /** column name */
  GENDER = 'gender',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE = 'image',
  /** column name */
  ISDARKMODE = 'isDarkMode',
  /** column name */
  NAME = 'name',
  /** column name */
  PROFILE = 'profile',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isDarkMode?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DISPLAY_ID = 'display_id',
  /** column name */
  EMAIL = 'email',
  /** column name */
  GENDER = 'gender',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE = 'image',
  /** column name */
  ISDARKMODE = 'isDarkMode',
  /** column name */
  NAME = 'name',
  /** column name */
  PROFILE = 'profile',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for inserting data into table "post_brands" */
export type PostBrandsInsertInput = {
  brand?: Maybe<BrandsObjRelInsertInput>;
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<PostsObjRelInsertInput>;
  post_id?: Maybe<Scalars['Int']>;
};

export type ReactiveVarGetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ReactiveVarGetUserQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'display_id' | 'name' | 'profile' | 'gender' | 'email' | 'image' | 'created_at'>
  )> }
);

export type InsertPostOneMutationVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  user_id: Scalars['String'];
  content: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  image_id?: Maybe<Scalars['String']>;
  gender: Scalars['String'];
}>;


export type InsertPostOneMutation = (
  { __typename?: 'mutation_root' }
  & { insert_posts_one?: Maybe<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'user_id' | 'content' | 'image' | 'image_id' | 'gender' | 'created_at'>
  )> }
);

export type InsertPostOneWithTopicsMutationVariables = Exact<{
  user_id: Scalars['String'];
  content: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  image_id?: Maybe<Scalars['String']>;
  gender: Scalars['String'];
  topicsIds: Array<PostTopicsInsertInput> | PostTopicsInsertInput;
}>;


export type InsertPostOneWithTopicsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_posts_one?: Maybe<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'user_id' | 'content' | 'image' | 'image_id' | 'gender' | 'created_at'>
  )> }
);

export type InsertPostOneWithBrandsMutationVariables = Exact<{
  user_id: Scalars['String'];
  content: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  image_id?: Maybe<Scalars['String']>;
  gender: Scalars['String'];
  brandsIds: Array<PostBrandsInsertInput> | PostBrandsInsertInput;
}>;


export type InsertPostOneWithBrandsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_posts_one?: Maybe<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'user_id' | 'content' | 'image' | 'image_id' | 'gender' | 'created_at'>
  )> }
);

export type InsertPostOneWithTopicsAndBrandsMutationVariables = Exact<{
  user_id: Scalars['String'];
  content: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  image_id?: Maybe<Scalars['String']>;
  gender: Scalars['String'];
  topicsIds: Array<PostTopicsInsertInput> | PostTopicsInsertInput;
  brandsIds: Array<PostBrandsInsertInput> | PostBrandsInsertInput;
}>;


export type InsertPostOneWithTopicsAndBrandsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_posts_one?: Maybe<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'user_id' | 'content' | 'image' | 'image_id' | 'gender' | 'created_at'>
  )> }
);

export type GetAllTopicsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTopicsQuery = (
  { __typename?: 'query_root' }
  & { topics: Array<(
    { __typename?: 'topics' }
    & Pick<Topics, 'name'>
  )> }
);

export type GetAllBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBrandsQuery = (
  { __typename?: 'query_root' }
  & { brands: Array<(
    { __typename?: 'brands' }
    & Pick<Brands, 'name'>
  )> }
);

export type InsertTopicsMutationVariables = Exact<{
  newItems: Array<TopicsInsertInput> | TopicsInsertInput;
}>;


export type InsertTopicsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_topics?: Maybe<(
    { __typename?: 'topics_mutation_response' }
    & Pick<TopicsMutationResponse, 'affected_rows'>
  )> }
);

export type InsertBrandsMutationVariables = Exact<{
  newItems: Array<BrandsInsertInput> | BrandsInsertInput;
}>;


export type InsertBrandsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_brands?: Maybe<(
    { __typename?: 'brands_mutation_response' }
    & Pick<BrandsMutationResponse, 'affected_rows'>
  )> }
);

export type MappingTopicsToIdQueryVariables = Exact<{
  topics: Array<Scalars['String']> | Scalars['String'];
}>;


export type MappingTopicsToIdQuery = (
  { __typename?: 'query_root' }
  & { topics: Array<(
    { __typename?: 'topics' }
    & { topic_id: Topics['id'] }
  )> }
);

export type MappingBrandsToIdQueryVariables = Exact<{
  brands: Array<Scalars['String']> | Scalars['String'];
}>;


export type MappingBrandsToIdQuery = (
  { __typename?: 'query_root' }
  & { brands: Array<(
    { __typename?: 'brands' }
    & { brand_id: Brands['id'] }
  )> }
);

export type GetAllUsersWithPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersWithPostsQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
    & { posts: Array<(
      { __typename?: 'posts' }
      & Pick<Posts, 'id'>
    )> }
  )> }
);

export type GetOneUserWithPostQueryVariables = Exact<{
  userId: Scalars['String'];
  postId: Scalars['Int'];
}>;


export type GetOneUserWithPostQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'display_id' | 'name' | 'image'>
    & { posts: Array<(
      { __typename?: 'posts' }
      & Pick<Posts, 'content' | 'image' | 'gender' | 'created_at'>
      & { topics: Array<(
        { __typename?: 'post_topics' }
        & { topic: (
          { __typename?: 'topics' }
          & Pick<Topics, 'name'>
        ) }
      )>, brands: Array<(
        { __typename?: 'post_brands' }
        & { brand: (
          { __typename?: 'brands' }
          & Pick<Brands, 'name'>
        ) }
      )> }
    )> }
  )> }
);

export type Top10TopicAndBrandQueryVariables = Exact<{ [key: string]: never; }>;


export type Top10TopicAndBrandQuery = (
  { __typename?: 'query_root' }
  & { topics: Array<(
    { __typename?: 'topics' }
    & Pick<Topics, 'name' | 'id'>
  )>, brands: Array<(
    { __typename?: 'brands' }
    & Pick<Brands, 'name' | 'id'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  id: Scalars['String'];
  display_id: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'display_id' | 'email' | 'name' | 'image' | 'created_at'>
  )> }
);


export const ReactiveVarGetUserDocument = gql`
    query ReactiveVarGetUser($id: String!) {
  users_by_pk(id: $id) {
    id
    display_id
    name
    profile
    gender
    email
    image
    created_at
  }
}
    `;

/**
 * __useReactiveVarGetUserQuery__
 *
 * To run a query within a React component, call `useReactiveVarGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useReactiveVarGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReactiveVarGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReactiveVarGetUserQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>(ReactiveVarGetUserDocument, options);
      }
export function useReactiveVarGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>(ReactiveVarGetUserDocument, options);
        }
export type ReactiveVarGetUserQueryHookResult = ReturnType<typeof useReactiveVarGetUserQuery>;
export type ReactiveVarGetUserLazyQueryHookResult = ReturnType<typeof useReactiveVarGetUserLazyQuery>;
export type ReactiveVarGetUserQueryResult = ApolloReactCommon.QueryResult<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>;
export const InsertPostOneDocument = gql`
    mutation InsertPostOne($id: Int, $user_id: String!, $content: String!, $image: String, $image_id: String, $gender: String!) {
  insert_posts_one(
    object: {id: $id, user_id: $user_id, content: $content, image: $image, image_id: $image_id, gender: $gender}
    on_conflict: {constraint: posts_pkey, update_columns: [content, image, image_id, gender, updated_at]}
  ) {
    id
    user_id
    content
    image
    image_id
    gender
    created_at
  }
}
    `;
export type InsertPostOneMutationFn = ApolloReactCommon.MutationFunction<InsertPostOneMutation, InsertPostOneMutationVariables>;

/**
 * __useInsertPostOneMutation__
 *
 * To run a mutation, you first call `useInsertPostOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPostOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPostOneMutation, { data, loading, error }] = useInsertPostOneMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *      content: // value for 'content'
 *      image: // value for 'image'
 *      image_id: // value for 'image_id'
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useInsertPostOneMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertPostOneMutation, InsertPostOneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<InsertPostOneMutation, InsertPostOneMutationVariables>(InsertPostOneDocument, options);
      }
export type InsertPostOneMutationHookResult = ReturnType<typeof useInsertPostOneMutation>;
export type InsertPostOneMutationResult = ApolloReactCommon.MutationResult<InsertPostOneMutation>;
export type InsertPostOneMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertPostOneMutation, InsertPostOneMutationVariables>;
export const InsertPostOneWithTopicsDocument = gql`
    mutation InsertPostOneWithTopics($user_id: String!, $content: String!, $image: String, $image_id: String, $gender: String!, $topicsIds: [post_topics_insert_input!]!) {
  insert_posts_one(
    object: {user_id: $user_id, content: $content, image: $image, image_id: $image_id, gender: $gender, topics: {data: $topicsIds}}
  ) {
    id
    user_id
    content
    image
    image_id
    gender
    created_at
  }
}
    `;
export type InsertPostOneWithTopicsMutationFn = ApolloReactCommon.MutationFunction<InsertPostOneWithTopicsMutation, InsertPostOneWithTopicsMutationVariables>;

/**
 * __useInsertPostOneWithTopicsMutation__
 *
 * To run a mutation, you first call `useInsertPostOneWithTopicsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPostOneWithTopicsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPostOneWithTopicsMutation, { data, loading, error }] = useInsertPostOneWithTopicsMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      content: // value for 'content'
 *      image: // value for 'image'
 *      image_id: // value for 'image_id'
 *      gender: // value for 'gender'
 *      topicsIds: // value for 'topicsIds'
 *   },
 * });
 */
export function useInsertPostOneWithTopicsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertPostOneWithTopicsMutation, InsertPostOneWithTopicsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<InsertPostOneWithTopicsMutation, InsertPostOneWithTopicsMutationVariables>(InsertPostOneWithTopicsDocument, options);
      }
export type InsertPostOneWithTopicsMutationHookResult = ReturnType<typeof useInsertPostOneWithTopicsMutation>;
export type InsertPostOneWithTopicsMutationResult = ApolloReactCommon.MutationResult<InsertPostOneWithTopicsMutation>;
export type InsertPostOneWithTopicsMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertPostOneWithTopicsMutation, InsertPostOneWithTopicsMutationVariables>;
export const InsertPostOneWithBrandsDocument = gql`
    mutation InsertPostOneWithBrands($user_id: String!, $content: String!, $image: String, $image_id: String, $gender: String!, $brandsIds: [post_brands_insert_input!]!) {
  insert_posts_one(
    object: {user_id: $user_id, content: $content, image: $image, image_id: $image_id, gender: $gender, brands: {data: $brandsIds}}
  ) {
    id
    user_id
    content
    image
    image_id
    gender
    created_at
  }
}
    `;
export type InsertPostOneWithBrandsMutationFn = ApolloReactCommon.MutationFunction<InsertPostOneWithBrandsMutation, InsertPostOneWithBrandsMutationVariables>;

/**
 * __useInsertPostOneWithBrandsMutation__
 *
 * To run a mutation, you first call `useInsertPostOneWithBrandsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPostOneWithBrandsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPostOneWithBrandsMutation, { data, loading, error }] = useInsertPostOneWithBrandsMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      content: // value for 'content'
 *      image: // value for 'image'
 *      image_id: // value for 'image_id'
 *      gender: // value for 'gender'
 *      brandsIds: // value for 'brandsIds'
 *   },
 * });
 */
export function useInsertPostOneWithBrandsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertPostOneWithBrandsMutation, InsertPostOneWithBrandsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<InsertPostOneWithBrandsMutation, InsertPostOneWithBrandsMutationVariables>(InsertPostOneWithBrandsDocument, options);
      }
export type InsertPostOneWithBrandsMutationHookResult = ReturnType<typeof useInsertPostOneWithBrandsMutation>;
export type InsertPostOneWithBrandsMutationResult = ApolloReactCommon.MutationResult<InsertPostOneWithBrandsMutation>;
export type InsertPostOneWithBrandsMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertPostOneWithBrandsMutation, InsertPostOneWithBrandsMutationVariables>;
export const InsertPostOneWithTopicsAndBrandsDocument = gql`
    mutation InsertPostOneWithTopicsAndBrands($user_id: String!, $content: String!, $image: String, $image_id: String, $gender: String!, $topicsIds: [post_topics_insert_input!]!, $brandsIds: [post_brands_insert_input!]!) {
  insert_posts_one(
    object: {user_id: $user_id, content: $content, image: $image, image_id: $image_id, gender: $gender, topics: {data: $topicsIds}, brands: {data: $brandsIds}}
  ) {
    id
    user_id
    content
    image
    image_id
    gender
    created_at
  }
}
    `;
export type InsertPostOneWithTopicsAndBrandsMutationFn = ApolloReactCommon.MutationFunction<InsertPostOneWithTopicsAndBrandsMutation, InsertPostOneWithTopicsAndBrandsMutationVariables>;

/**
 * __useInsertPostOneWithTopicsAndBrandsMutation__
 *
 * To run a mutation, you first call `useInsertPostOneWithTopicsAndBrandsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPostOneWithTopicsAndBrandsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPostOneWithTopicsAndBrandsMutation, { data, loading, error }] = useInsertPostOneWithTopicsAndBrandsMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      content: // value for 'content'
 *      image: // value for 'image'
 *      image_id: // value for 'image_id'
 *      gender: // value for 'gender'
 *      topicsIds: // value for 'topicsIds'
 *      brandsIds: // value for 'brandsIds'
 *   },
 * });
 */
export function useInsertPostOneWithTopicsAndBrandsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertPostOneWithTopicsAndBrandsMutation, InsertPostOneWithTopicsAndBrandsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<InsertPostOneWithTopicsAndBrandsMutation, InsertPostOneWithTopicsAndBrandsMutationVariables>(InsertPostOneWithTopicsAndBrandsDocument, options);
      }
export type InsertPostOneWithTopicsAndBrandsMutationHookResult = ReturnType<typeof useInsertPostOneWithTopicsAndBrandsMutation>;
export type InsertPostOneWithTopicsAndBrandsMutationResult = ApolloReactCommon.MutationResult<InsertPostOneWithTopicsAndBrandsMutation>;
export type InsertPostOneWithTopicsAndBrandsMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertPostOneWithTopicsAndBrandsMutation, InsertPostOneWithTopicsAndBrandsMutationVariables>;
export const GetAllTopicsDocument = gql`
    query GetAllTopics {
  topics {
    name
  }
}
    `;

/**
 * __useGetAllTopicsQuery__
 *
 * To run a query within a React component, call `useGetAllTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTopicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTopicsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllTopicsQuery, GetAllTopicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllTopicsQuery, GetAllTopicsQueryVariables>(GetAllTopicsDocument, options);
      }
export function useGetAllTopicsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllTopicsQuery, GetAllTopicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllTopicsQuery, GetAllTopicsQueryVariables>(GetAllTopicsDocument, options);
        }
export type GetAllTopicsQueryHookResult = ReturnType<typeof useGetAllTopicsQuery>;
export type GetAllTopicsLazyQueryHookResult = ReturnType<typeof useGetAllTopicsLazyQuery>;
export type GetAllTopicsQueryResult = ApolloReactCommon.QueryResult<GetAllTopicsQuery, GetAllTopicsQueryVariables>;
export const GetAllBrandsDocument = gql`
    query GetAllBrands {
  brands {
    name
  }
}
    `;

/**
 * __useGetAllBrandsQuery__
 *
 * To run a query within a React component, call `useGetAllBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBrandsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBrandsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllBrandsQuery, GetAllBrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllBrandsQuery, GetAllBrandsQueryVariables>(GetAllBrandsDocument, options);
      }
export function useGetAllBrandsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllBrandsQuery, GetAllBrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllBrandsQuery, GetAllBrandsQueryVariables>(GetAllBrandsDocument, options);
        }
export type GetAllBrandsQueryHookResult = ReturnType<typeof useGetAllBrandsQuery>;
export type GetAllBrandsLazyQueryHookResult = ReturnType<typeof useGetAllBrandsLazyQuery>;
export type GetAllBrandsQueryResult = ApolloReactCommon.QueryResult<GetAllBrandsQuery, GetAllBrandsQueryVariables>;
export const InsertTopicsDocument = gql`
    mutation InsertTopics($newItems: [topics_insert_input!]!) {
  insert_topics(objects: $newItems) {
    affected_rows
  }
}
    `;
export type InsertTopicsMutationFn = ApolloReactCommon.MutationFunction<InsertTopicsMutation, InsertTopicsMutationVariables>;

/**
 * __useInsertTopicsMutation__
 *
 * To run a mutation, you first call `useInsertTopicsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTopicsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTopicsMutation, { data, loading, error }] = useInsertTopicsMutation({
 *   variables: {
 *      newItems: // value for 'newItems'
 *   },
 * });
 */
export function useInsertTopicsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertTopicsMutation, InsertTopicsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<InsertTopicsMutation, InsertTopicsMutationVariables>(InsertTopicsDocument, options);
      }
export type InsertTopicsMutationHookResult = ReturnType<typeof useInsertTopicsMutation>;
export type InsertTopicsMutationResult = ApolloReactCommon.MutationResult<InsertTopicsMutation>;
export type InsertTopicsMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertTopicsMutation, InsertTopicsMutationVariables>;
export const InsertBrandsDocument = gql`
    mutation InsertBrands($newItems: [brands_insert_input!]!) {
  insert_brands(objects: $newItems) {
    affected_rows
  }
}
    `;
export type InsertBrandsMutationFn = ApolloReactCommon.MutationFunction<InsertBrandsMutation, InsertBrandsMutationVariables>;

/**
 * __useInsertBrandsMutation__
 *
 * To run a mutation, you first call `useInsertBrandsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertBrandsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertBrandsMutation, { data, loading, error }] = useInsertBrandsMutation({
 *   variables: {
 *      newItems: // value for 'newItems'
 *   },
 * });
 */
export function useInsertBrandsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertBrandsMutation, InsertBrandsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<InsertBrandsMutation, InsertBrandsMutationVariables>(InsertBrandsDocument, options);
      }
export type InsertBrandsMutationHookResult = ReturnType<typeof useInsertBrandsMutation>;
export type InsertBrandsMutationResult = ApolloReactCommon.MutationResult<InsertBrandsMutation>;
export type InsertBrandsMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertBrandsMutation, InsertBrandsMutationVariables>;
export const MappingTopicsToIdDocument = gql`
    query MappingTopicsToId($topics: [String!]!) {
  topics(where: {name: {_in: $topics}}) {
    topic_id: id
  }
}
    `;

/**
 * __useMappingTopicsToIdQuery__
 *
 * To run a query within a React component, call `useMappingTopicsToIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMappingTopicsToIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMappingTopicsToIdQuery({
 *   variables: {
 *      topics: // value for 'topics'
 *   },
 * });
 */
export function useMappingTopicsToIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<MappingTopicsToIdQuery, MappingTopicsToIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MappingTopicsToIdQuery, MappingTopicsToIdQueryVariables>(MappingTopicsToIdDocument, options);
      }
export function useMappingTopicsToIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MappingTopicsToIdQuery, MappingTopicsToIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MappingTopicsToIdQuery, MappingTopicsToIdQueryVariables>(MappingTopicsToIdDocument, options);
        }
export type MappingTopicsToIdQueryHookResult = ReturnType<typeof useMappingTopicsToIdQuery>;
export type MappingTopicsToIdLazyQueryHookResult = ReturnType<typeof useMappingTopicsToIdLazyQuery>;
export type MappingTopicsToIdQueryResult = ApolloReactCommon.QueryResult<MappingTopicsToIdQuery, MappingTopicsToIdQueryVariables>;
export const MappingBrandsToIdDocument = gql`
    query MappingBrandsToId($brands: [String!]!) {
  brands(where: {name: {_in: $brands}}) {
    brand_id: id
  }
}
    `;

/**
 * __useMappingBrandsToIdQuery__
 *
 * To run a query within a React component, call `useMappingBrandsToIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMappingBrandsToIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMappingBrandsToIdQuery({
 *   variables: {
 *      brands: // value for 'brands'
 *   },
 * });
 */
export function useMappingBrandsToIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<MappingBrandsToIdQuery, MappingBrandsToIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MappingBrandsToIdQuery, MappingBrandsToIdQueryVariables>(MappingBrandsToIdDocument, options);
      }
export function useMappingBrandsToIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MappingBrandsToIdQuery, MappingBrandsToIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MappingBrandsToIdQuery, MappingBrandsToIdQueryVariables>(MappingBrandsToIdDocument, options);
        }
export type MappingBrandsToIdQueryHookResult = ReturnType<typeof useMappingBrandsToIdQuery>;
export type MappingBrandsToIdLazyQueryHookResult = ReturnType<typeof useMappingBrandsToIdLazyQuery>;
export type MappingBrandsToIdQueryResult = ApolloReactCommon.QueryResult<MappingBrandsToIdQuery, MappingBrandsToIdQueryVariables>;
export const GetAllUsersWithPostsDocument = gql`
    query GetAllUsersWithPosts {
  users {
    id
    posts {
      id
    }
  }
}
    `;

/**
 * __useGetAllUsersWithPostsQuery__
 *
 * To run a query within a React component, call `useGetAllUsersWithPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersWithPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersWithPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersWithPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllUsersWithPostsQuery, GetAllUsersWithPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllUsersWithPostsQuery, GetAllUsersWithPostsQueryVariables>(GetAllUsersWithPostsDocument, options);
      }
export function useGetAllUsersWithPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllUsersWithPostsQuery, GetAllUsersWithPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllUsersWithPostsQuery, GetAllUsersWithPostsQueryVariables>(GetAllUsersWithPostsDocument, options);
        }
export type GetAllUsersWithPostsQueryHookResult = ReturnType<typeof useGetAllUsersWithPostsQuery>;
export type GetAllUsersWithPostsLazyQueryHookResult = ReturnType<typeof useGetAllUsersWithPostsLazyQuery>;
export type GetAllUsersWithPostsQueryResult = ApolloReactCommon.QueryResult<GetAllUsersWithPostsQuery, GetAllUsersWithPostsQueryVariables>;
export const GetOneUserWithPostDocument = gql`
    query GetOneUserWithPost($userId: String!, $postId: Int!) {
  users_by_pk(id: $userId) {
    id
    display_id
    name
    image
    posts(where: {id: {_eq: $postId}}) {
      content
      image
      gender
      created_at
      topics {
        topic {
          name
        }
      }
      brands {
        brand {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetOneUserWithPostQuery__
 *
 * To run a query within a React component, call `useGetOneUserWithPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserWithPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserWithPostQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetOneUserWithPostQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>(GetOneUserWithPostDocument, options);
      }
export function useGetOneUserWithPostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>(GetOneUserWithPostDocument, options);
        }
export type GetOneUserWithPostQueryHookResult = ReturnType<typeof useGetOneUserWithPostQuery>;
export type GetOneUserWithPostLazyQueryHookResult = ReturnType<typeof useGetOneUserWithPostLazyQuery>;
export type GetOneUserWithPostQueryResult = ApolloReactCommon.QueryResult<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>;
export const Top10TopicAndBrandDocument = gql`
    query Top10TopicAndBrand {
  topics(limit: 10, order_by: {post_topics_aggregate: {count: desc}}) {
    name
    id
  }
  brands(limit: 10, order_by: {post_brands_aggregate: {count: desc}}) {
    name
    id
  }
}
    `;

/**
 * __useTop10TopicAndBrandQuery__
 *
 * To run a query within a React component, call `useTop10TopicAndBrandQuery` and pass it any options that fit your needs.
 * When your component renders, `useTop10TopicAndBrandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTop10TopicAndBrandQuery({
 *   variables: {
 *   },
 * });
 */
export function useTop10TopicAndBrandQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables>(Top10TopicAndBrandDocument, options);
      }
export function useTop10TopicAndBrandLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables>(Top10TopicAndBrandDocument, options);
        }
export type Top10TopicAndBrandQueryHookResult = ReturnType<typeof useTop10TopicAndBrandQuery>;
export type Top10TopicAndBrandLazyQueryHookResult = ReturnType<typeof useTop10TopicAndBrandLazyQuery>;
export type Top10TopicAndBrandQueryResult = ApolloReactCommon.QueryResult<Top10TopicAndBrandQuery, Top10TopicAndBrandQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($id: String!, $display_id: String!, $email: String!, $name: String!, $image: String) {
  insert_users_one(
    object: {id: $id, display_id: $display_id, name: $name, email: $email, image: $image}
  ) {
    id
    display_id
    email
    name
    image
    created_at
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      display_id: // value for 'display_id'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;