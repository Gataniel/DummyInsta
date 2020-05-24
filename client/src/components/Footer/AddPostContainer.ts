import { connect } from 'react-redux';
import { RootState, Action, PostFormData } from 'redux/interfaces';
import { ThunkDispatch } from 'redux-thunk';
import { createPost } from 'redux/actions';

import { getIsPostCreated } from 'redux/reducers/posts/selectors';
import { getCurrentUserId } from 'redux/reducers/reduxTokenAuth/selectors';

import AddPost from 'components/Footer/AddPost';

const mapStateToProps = (state: RootState) => ({
  isPostCreated: getIsPostCreated(state),
  currentUserId: getCurrentUserId(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, Action>
) => ({
  createPost: (form: PostFormData) => {
    dispatch(createPost(form));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
