import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { generateRequireSignInWrapper } from 'redux-token-auth';

import { loginPath, signupPath, rootPath } from 'lib/paths';

import NavContainer from 'components/Nav/NavContainer';
import PageLoader from 'components/shared/PageLoader/PageLoader';
import NotFound from 'components/shared/NotFound';

const SignupContainer = React.lazy(() => import('./Auth/SignupContainer'));
const LoginContainer = React.lazy(() => import('./Auth/LoginContainer'));
const FeedContainer = React.lazy(() => import('./Feed/FeedContainer'));

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: loginPath,
});

const Routes: React.FC = () => (
  <Router>
    <div className="Layout has-navbar-fixed-top">
      <NavContainer />
      <main>
        <div className="container">
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path={loginPath} component={LoginContainer} />

              <Route path={signupPath} component={SignupContainer} />

              <Route
                exact
                path={[rootPath, '/:userId', '/top']}
                component={requireSignIn(FeedContainer)}
              />

              <Route path="*" component={NotFound} />
            </Switch>
          </Suspense>
        </div>
      </main>
    </div>
  </Router>
);

export default Routes;
