export enum ActionType {
  SET_SORTED_BY = 'SET_SORTED_BY',
  // posts
  POST_POST__REQUEST = 'POST_POST__REQUEST',
  POST_POST__SUCCESS = 'POST_POST__SUCCESS',
  POST_POST__FAILURE = 'POST_POST__FAILURE',

  GET_POSTS__REQUEST = 'GET_POSTS__REQUEST',
  GET_POSTS__SUCCESS = 'GET_POSTS__SUCCESS',
  GET_POSTS__FAILURE = 'GET_POSTS__FAILURE',

  // comments
  GET_COMMENTS__REQUEST = 'GET_COMMENTS__REQUEST',
  GET_COMMENTS__SUCCESS = 'GET_COMMENTS__SUCCESS',
  GET_COMMENTS__FAILURE = 'GET_COMMENTS__FAILURE',
  //
  POST_COMMENT__REQUEST = 'POST_COMMENT__REQUEST',
  POST_COMMENT__SUCCESS = 'POST_COMMENT__SUCCESS',
  POST_COMMENT__FAILURE = 'POST_COMMENT__FAILURE',
  //
  // // likes
  POST_LIKE__REQUEST = 'POST_LIKE__REQUEST',
  POST_LIKE__SUCCESS = 'POST_LIKE__SUCCESS',
  POST_LIKE__FAILURE = 'POST_LIKE__FAILURE',

  DELETE_LIKE__REQUEST = 'DELETE_LIKE__REQUEST',
  DELETE_LIKE__SUCCESS = 'DELETE_LIKE__SUCCESS',
  DELETE_LIKE__FAILURE = 'DELETE_LIKE__FAILURE',

  // sorts
}