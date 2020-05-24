import React from 'react';
import { isEmpty } from 'lodash';
import { useLocation } from 'react-router-dom';

import { Post as PostInterface, SortedBy, FetchStatus } from 'redux/interfaces';
import { topPath } from 'lib/paths';

import AddPostContainer from 'components/Footer/AddPostContainer';
import Post from 'components/Feed/Post/Post';
import SortTabsContainer from 'components/Feed/SortTabsContainer';
import NotFound from 'components/shared/NotFound';
import PageLoader from 'components/shared/PageLoader/PageLoader';
import NoPostsYet from 'components/Feed/NoPostsYet';

interface Props {
  userId: string;
  posts: PostInterface[];
  currentUserId: number;
  fetchStatus: FetchStatus;
  fetchPostsList: (userId: string, sortedBy: SortedBy) => void;
  sortedBy: SortedBy;
}

const Feed: React.FC<Props> = ({
  userId,
  currentUserId,
  fetchPostsList,
  fetchStatus,
  posts,
  sortedBy,
}) => {
  const isOwnFeed = userId === undefined || Number(userId) === currentUserId;
  const loadUserIdPosts = userId || currentUserId.toString();

  const isEmptyPosts = isEmpty(posts);

  const location = useLocation();

  React.useEffect(() => {
    fetchPostsList(loadUserIdPosts, sortedBy);
  }, [fetchPostsList, loadUserIdPosts, sortedBy]);

  if (fetchStatus === FetchStatus.errorFetching && isEmptyPosts) {
    return <NotFound />;
  }

  return (
    <>
      {!isEmptyPosts && location.pathname !== topPath && <SortTabsContainer />}

      {fetchStatus === FetchStatus.fetching && <PageLoader />}

      {fetchStatus === FetchStatus.fetched && isEmptyPosts && <NoPostsYet />}

      {posts && posts.map((post) => <Post post={post} key={post.id} />)}

      {isOwnFeed && <AddPostContainer />}
    </>
  );
};

export default Feed;
