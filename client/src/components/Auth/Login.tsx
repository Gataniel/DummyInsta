import React from 'react';
import { get } from 'lodash';
import { error as pnError } from '@pnotify/core';
import { useHistory, NavLink } from 'react-router-dom';
import { useForm, FormContext } from 'react-hook-form';

import { AuthFormData } from 'redux/interfaces/auth';
import { rootPath } from 'lib/paths';

import Password from './shared/Password';
import Email from './shared/Email';
import Header from './shared/Header';
import { AuthSchema } from './shared/authSchema';

import './styles/LoginSignup.scss';

interface Props {
  signInUser: (input: AuthFormData) => Promise<void>;
}

const Login: React.FC<Props> = ({ signInUser }) => {
  const history = useHistory();
  const methods = useForm<AuthFormData>({
    validationSchema: AuthSchema,
    mode: 'onBlur',
  });

  const onSubmit = (data: AuthFormData) => {
    signInUser({ email: data.email, password: data.password })
      .then(() => {
        history.push(rootPath);
      })
      .catch((error) => {
        const errorMsgs = get(error, 'response.data.errors', [
          'Something went wrong',
        ]);
        pnError(errorMsgs.join('\n'));
      });
  };

  return (
    <section className="auth-page hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <Header title="Login" subTitle="Please login to proceed." />

            <div className="box">
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <FormContext {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <div className="field">
                    <Email />
                  </div>

                  <div className="field">
                    <Password />
                  </div>

                  <div className="field" />

                  <button
                    className="button is-block is-info is-fullwidth"
                    onClick={methods.handleSubmit(onSubmit)}
                  >
                    Login
                  </button>
                </form>
              </FormContext>
            </div>

            <p className="has-text-grey">
              <NavLink to="/signup">Sign Up</NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
