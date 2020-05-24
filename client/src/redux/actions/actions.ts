import { createAsyncAction, createAction } from 'typesafe-actions';

import { ActionType } from 'redux/actionType';
import { Post, Comment, SortedBy } from 'redux/interfaces';

// posts
export const createPostAction = createAsyncAction(
  ActionType.POST_POST__REQUEST,
  ActionType.POST_POST__SUCCESS,
  ActionType.POST_POST__FAILURE
)<undefined, Post, undefined>();

export const fetchPostsListAction = createAsyncAction(
  ActionType.GET_POSTS__REQUEST,
  ActionType.GET_POSTS__SUCCESS,
  ActionType.GET_POSTS__FAILURE
)<undefined, Post[], undefined>();

// comments
export const createCommentAction = createAsyncAction(
  ActionType.POST_COMMENT__REQUEST,
  ActionType.POST_COMMENT__SUCCESS,
  ActionType.POST_COMMENT__FAILURE
)<undefined, { postId: string; comment: Comment }, undefined>();

export const fetchCommentsListAction = createAsyncAction(
  ActionType.GET_COMMENTS__REQUEST,
  ActionType.GET_COMMENTS__SUCCESS,
  ActionType.GET_COMMENTS__FAILURE
)<undefined, { postId: string; comments: Comment[] }, undefined>();

// likes
export const createLikeAction = createAsyncAction(
  ActionType.POST_LIKE__REQUEST,
  ActionType.POST_LIKE__SUCCESS,
  ActionType.POST_LIKE__FAILURE
)<undefined, { referenceId: number; id: number }, undefined>();

export const deleteLikeAction = createAsyncAction(
  ActionType.DELETE_LIKE__REQUEST,
  ActionType.DELETE_LIKE__SUCCESS,
  ActionType.DELETE_LIKE__FAILURE
)<undefined, { referenceId: number }, undefined>();

// sorts
export const setSortedBy = createAction(ActionType.SET_SORTED_BY)<SortedBy>();
