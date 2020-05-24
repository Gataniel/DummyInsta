import { connect } from 'react-redux';
import {
  registerUser,
  signInUser,
} from 'redux/actions/redux-token-auth-config';

import Signup from './Signup';

export default connect(null, { registerUser, signInUser })(Signup);
