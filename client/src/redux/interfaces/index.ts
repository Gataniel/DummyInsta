import { AnyAction } from 'redux';
import { ActionType } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';

import * as actions from 'redux/actions/actions';

import { PostsState } from './post';
import { SortsState } from './sort';
import { CommentsState } from './comment';
import { LoaderState } from './loader';

export * from './post';
export * from './comment';
export * from './loader';
export * from './like';
export * from './sort';

export enum FetchStatus {
  notFetched = 'notFetched',
  fetching = 'fetching',
  fetched = 'fetched',
  errorFetching = 'errorFetching',
}

export enum Model {
  Post = 'Post',
}

export interface RootState {
  loader: LoaderState;
  posts: PostsState;
  comments: CommentsState;
  sorts: SortsState;
  reduxTokenAuth: any;
}

export type Action = ActionType<typeof actions>;

export type PromiseThunk<T> = ThunkAction<
  Promise<T>,
  RootState,
  undefined,
  AnyAction
>;
