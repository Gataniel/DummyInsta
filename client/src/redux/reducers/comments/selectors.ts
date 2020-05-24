import { createSelector } from 'reselect';

import { RootState, FetchStatus, CommentsState } from 'redux/interfaces';
import { createFetchingSelector } from 'redux/reducers/loader/selectors';

const commentsState = ({ comments }: RootState): CommentsState => comments;

const getCommentsMap = (state: RootState, props: any) =>
  commentsState(state).byPostId[props.postId];

const getCommentListFetchingStatus = createFetchingSelector('GET_COMMENTS');
const getCommentCreationStatus = createFetchingSelector('POST_COMMENT');

export const getIsCommentsListFetched = createSelector(
  getCommentListFetchingStatus,
  (status) => status === FetchStatus.fetched
);

export const getIsCommentCreated = createSelector(
  getCommentCreationStatus,
  (status) => status === FetchStatus.fetched
);

export const getCommentsList = createSelector(
  getIsCommentsListFetched,
  getCommentsMap,
  (isFetched, byId) => {
    if (!isFetched) {
      return [];
    }

    return byId && Object.values(byId);
  }
);
