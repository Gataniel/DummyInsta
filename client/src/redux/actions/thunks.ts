import * as api from 'redux/api';
import {
  PromiseThunk,
  PostFormData,
  Post,
  Comment,
  CommentFormData,
  Model,
  LikeResp,
  SortedBy,
} from 'redux/interfaces';
import * as actions from './actions';

// posts
export const createPost = (form: PostFormData): PromiseThunk<void> => async (
  dispatch
) => {
  dispatch(actions.createPostAction.request());
  try {
    const post: Post = await api.postPost(form);
    dispatch(actions.createPostAction.success(post));
  } catch (e) {
    dispatch(actions.createPostAction.failure());
  }
};

export const fetchPostsList = (
  userId: string,
  sortedBy: SortedBy
): PromiseThunk<void> => async (dispatch) => {
  dispatch(actions.fetchPostsListAction.request());
  try {
    const posts = await api.getPosts(userId, sortedBy);
    dispatch(actions.fetchPostsListAction.success(posts));
  } catch (e) {
    dispatch(actions.fetchPostsListAction.failure());
  }
};

// comments
export const createComment = (
  form: CommentFormData,
  postId: string
): PromiseThunk<void> => async (dispatch) => {
  dispatch(actions.createCommentAction.request());
  try {
    const comment: Comment = await api.postComment(form, postId);
    dispatch(actions.createCommentAction.success({ postId, comment }));
  } catch (e) {
    dispatch(actions.createCommentAction.failure());
  }
};

export const fetchCommentsList = (postId: string): PromiseThunk<void> => async (
  dispatch
) => {
  dispatch(actions.fetchCommentsListAction.request());
  try {
    const comments = await api.getComments(postId);
    dispatch(actions.fetchCommentsListAction.success({ postId, comments }));
  } catch (e) {
    dispatch(actions.fetchCommentsListAction.failure());
  }
};

// likes
export const createLike = (
  referenceType: Model,
  referenceId: number
): PromiseThunk<void> => {
  return async (dispatch) => {
    dispatch(actions.createLikeAction.request());
    try {
      const like: LikeResp = await api.postLike(referenceType, referenceId);
      dispatch(actions.createLikeAction.success({ referenceId, id: like.id }));
    } catch (e) {
      dispatch(actions.createLikeAction.failure());
    }
  };
};

export const destroyLike = (
  referenceId: number,
  id: number
): PromiseThunk<void> => async (dispatch) => {
  dispatch(actions.deleteLikeAction.request());
  try {
    await api.deleteLike(id);
    dispatch(actions.deleteLikeAction.success({ referenceId }));
  } catch (e) {
    dispatch(actions.deleteLikeAction.failure());
  }
};
