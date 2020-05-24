import { generateAuthActions } from 'redux-token-auth';

import { AUTH_URL } from 'lib/constants';

const config = {
  authUrl: AUTH_URL,
  userAttributes: {
    email: 'email',
    id: 'id',
  },
  userRegistrationAttributes: {},
  storage: {
    flushGetRequests: false,
  },
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config);

export { registerUser, signInUser, signOutUser, verifyCredentials };
