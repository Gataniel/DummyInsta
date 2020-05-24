import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { error as pnError } from '@pnotify/core';
import { get } from 'lodash';
import { useForm, FormContext } from 'react-hook-form';

import { AuthFormData, RegisterInput } from 'redux/interfaces/auth';
import { rootPath } from 'lib/paths';

import Header from './shared/Header';
import Email from './shared/Email';
import Password from './shared/Password';
import { AuthSchema } from './shared/authSchema';

interface Props {
  registerUser: (input: RegisterInput) => Promise<void>;
  signInUser: (input: AuthFormData) => Promise<void>;
}

const Signup: React.FC<Props> = ({ registerUser, signInUser }) => {
  const history = useHistory();
  const methods = useForm<AuthFormData>({
    validationSchema: AuthSchema,
    mode: 'onBlur',
  });

  const afterRegister = (email: string, password: string) => {
    signInUser({ email, password })
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

  const onSubmit = (data: AuthFormData) => {
    registerUser({
      email: data.email,
      password: data.password,
      passwordConfirmation: data.password,
    })
      .then(() => {
        afterRegister(data.email, data.password);
      })
      .catch((error) => {
        const errorMsgs = get(error, 'response.data.errors.full_messages', [
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
            <Header title="Sign Up" subTitle="Please Sign Up to proceed." />

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
                    className="button is-block is-success is-fullwidth"
                    onClick={methods.handleSubmit(onSubmit)}
                  >
                    Sign Up
                  </button>
                </form>
              </FormContext>
            </div>

            <p className="has-text-grey">
              <NavLink to="/login">Log in</NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
