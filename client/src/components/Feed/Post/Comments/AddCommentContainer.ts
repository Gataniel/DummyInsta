import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { createComment } from 'redux/actions';
import { RootState, CommentFormData, Action } from 'redux/interfaces';
import { getIsCommentCreated } from 'redux/reducers/comments/selectors';

import AddComment from './AddComment';

const mapStateToProps = (state: RootState) => ({
  isCommentCreated: getIsCommentCreated(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, Action>
) => ({
  createComment: (form: CommentFormData, postId: string) => {
    dispatch(createComment(form, postId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
