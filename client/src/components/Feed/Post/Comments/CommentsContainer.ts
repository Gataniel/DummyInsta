import { connect } from 'react-redux';
import { fetchCommentsList } from 'redux/actions';
import { RootState } from 'redux/interfaces';
import { getCommentsList } from 'redux/reducers/comments/selectors';

import Comments from './Comments';

interface OwnProps {
  postId: number;
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
  comments: getCommentsList(state, props),
});

const mapDispatchToProps = {
  fetchCommentsList: (postId: string) => fetchCommentsList(postId),
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
