import { createSelector } from 'reselect';
import { RootState, FetchStatus, PostsState } from 'redux/interfaces';

import { createFetchingSelector } from 'redux/reducers/loader/selectors';

const postsState = ({ posts }: RootState): PostsState => posts;

const getAllIds = (state: RootState) => postsState(state).allIds;
const getPostsMap = (state: RootState) => postsState(state).byId;

const getPostListFetchingStatus = createFetchingSelector('GET_POSTS');
const getPostCreationStatus = createFetchingSelector('POST_POST');

export const getIsPostsListFetchStatus = createSelector(
  getPostListFetchingStatus,
  (status) => status
);

export const getIsPostsListFetched = createSelector(
  getPostListFetchingStatus,
  (status) => status === FetchStatus.fetched
);

export const getIsPostsListErrored = createSelector(
  getPostListFetchingStatus,
  (status) => status === FetchStatus.errorFetching
);

export const getIsPostsListFetching = createSelector(
  getPostListFetchingStatus,
  (status) => status === FetchStatus.fetching
);

export const getIsPostCreated = createSelector(
  getPostCreationStatus,
  (status) => status === FetchStatus.fetched
);

export const getPostsList = createSelector(
  getIsPostsListFetched,
  getAllIds,
  getPostsMap,
  (isFetched, allIds, byId) => {
    if (!isFetched) {
      return [];
    }

    return allIds.map((id) => byId[id]);
  }
);
