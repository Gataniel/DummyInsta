import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState, Action, Model } from 'redux/interfaces';
import { createLike, destroyLike } from 'redux/actions';

import Likes from './Likes';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, Action>
) => ({
  like: (referenceType: Model, referenceId: number) => {
    dispatch(createLike(referenceType, referenceId));
  },
  dislike: (referenceId: number, id: number) => {
    dispatch(destroyLike(referenceId, id));
  },
});

export default connect(null, mapDispatchToProps)(Likes);
