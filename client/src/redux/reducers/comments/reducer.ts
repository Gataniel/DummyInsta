import { CommentsState, Comment, Action } from 'redux/interfaces';
import { ActionType } from 'redux/actionType';

export const initialState: CommentsState = {
  byPostId: {},
};

const addToCommentsList = (
  state: CommentsState,
  payload: {
    postId: string;
    comment: Comment;
  }
): CommentsState => {
  const { postId, comment } = payload;

  return {
    ...state,
    byPostId: {
      ...state.byPostId,
      [postId]: [comment, ...state.byPostId[postId]],
    },
  };
};

const updateCommentsList = (
  state: CommentsState,
  payload: {
    postId: string;
    comments: Comment[];
  }
): CommentsState => {
  const { postId, comments } = payload;

  return {
    ...state,
    byPostId: {
      ...state.byPostId,
      [postId]: comments,
    },
  };
};

const reducer = (state = initialState, action: Action): CommentsState => {
  switch (action.type) {
    case ActionType.GET_COMMENTS__SUCCESS:
      return updateCommentsList(state, action.payload);
    case ActionType.POST_COMMENT__SUCCESS:
      return addToCommentsList(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
