import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { fetchPostsList } from 'redux/actions';
import { RootState, SortedBy } from 'redux/interfaces';
import {
  getPostsList,
  getIsPostsListFetchStatus,
} from 'redux/reducers/posts/selectors';
import { getCurrentUserId } from 'redux/reducers/reduxTokenAuth/selectors';
import { getSortedBy } from 'redux/reducers/sorts/selectors';

import Feed from './Feed';

interface RouteProps {
  userId: string;
}

type OwnProps = RouteComponentProps<RouteProps>;

const mapStateToProps = (
  state: RootState,
  {
    match: {
      params: { userId },
    },
  }: OwnProps
) => ({
  userId,
  sortedBy: getSortedBy(state),
  fetchStatus: getIsPostsListFetchStatus(state),
  posts: getPostsList(state),
  currentUserId: getCurrentUserId(state),
});

const mapDispatchToProps = {
  fetchPostsList: (userId: string, sortedBy: SortedBy) =>
    fetchPostsList(userId, sortedBy),
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
