import { PostsState, Action, Post, Like } from 'redux/interfaces';
import { ActionType } from 'redux/actionType';

export const initialState: PostsState = {
  byId: {},
  allIds: [],
};

const like = (state: PostsState, payload: Like): PostsState => {
  const { referenceId, id } = payload;

  return {
    ...state,
    byId: {
      ...state.byId,
      [referenceId]: {
        ...state.byId[referenceId],
        current_users_like_id: id,
        likes_count: state.byId[referenceId].likes_count + 1,
      },
    },
  };
};

const unlike = (state: PostsState, payload: Like): PostsState => {
  const { referenceId } = payload;

  return {
    ...state,
    byId: {
      ...state.byId,
      [referenceId]: {
        ...state.byId[referenceId],
        current_users_like_id: null,
        likes_count: state.byId[referenceId].likes_count - 1,
      },
    },
  };
};

const addToPostsList = (state: PostsState, payload: Post): PostsState => {
  const newState: PostsState = {
    ...state,
  };

  newState.allIds = [payload.id, ...newState.allIds];
  newState.byId[payload.id] = payload;

  return newState;
};

const updatePostsList = (state: PostsState, payload: Post[]): PostsState => {
  const initialMemo: PostsState = {
    ...state,
    allIds: [],
  };

  return payload.reduce((memo: PostsState, post) => {
    const { id } = post;
    memo.byId[id] = {
      ...memo.byId[id],
      ...post,
    };
    memo.allIds.push(id);

    return memo;
  }, initialMemo);
};

const reducer = (state = initialState, action: Action): PostsState => {
  switch (action.type) {
    case ActionType.GET_POSTS__SUCCESS:
      return updatePostsList(state, action.payload);
    case ActionType.POST_LIKE__SUCCESS:
      return like(state, action.payload);
    case ActionType.DELETE_LIKE__SUCCESS:
      return unlike(state, action.payload);
    case ActionType.POST_POST__SUCCESS:
      return addToPostsList(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
