import { connect } from 'react-redux';
import { signInUser } from 'redux/actions/redux-token-auth-config';

import Login from './Login';

export default connect(null, { signInUser })(Login);
