import { connect } from 'react-redux';

import { RootState } from 'redux/interfaces';
import { signOutUser } from 'redux/actions/redux-token-auth-config';
import { getCurrentUserEmail } from 'redux/reducers/reduxTokenAuth/selectors';

import LogoutBtn from 'components/Nav/LogoutBtn';

const mapStateToProps = (state: RootState) => ({
  currentEmail: getCurrentUserEmail(state),
});

export default connect(mapStateToProps, { signOutUser })(LogoutBtn);
