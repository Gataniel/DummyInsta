import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth';

import { RootState } from 'redux/interfaces';
import posts from './posts/reducer';
import comments from './comments/reducer';
import loader from './loader/reducer';
import sorts from './sorts/reducer';

export default combineReducers<RootState>({
  reduxTokenAuth: reduxTokenAuthReducer,
  posts,
  comments,
  loader,
  sorts,
});
