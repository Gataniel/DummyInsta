import { connect } from 'react-redux';

import { RootState } from 'redux/interfaces';
import { getIsSignedIn } from 'redux/reducers/reduxTokenAuth/selectors';

import Nav from 'components/Nav/Nav';

const mapStateToProps = (state: RootState) => ({
  isSignedIn: getIsSignedIn(state),
});

export default connect(mapStateToProps)(Nav);
