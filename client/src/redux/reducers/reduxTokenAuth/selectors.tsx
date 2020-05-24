import { RootState } from 'redux/interfaces';

export const currentUser = (state: RootState) =>
  state.reduxTokenAuth.currentUser;

export const getIsSignedIn = (state: RootState) =>
  currentUser(state).isSignedIn;

export const getCurrentUserEmail = (state: RootState) =>
  currentUser(state).attributes.email;

export const getCurrentUserId = (state: RootState) =>
  currentUser(state).attributes.id;
