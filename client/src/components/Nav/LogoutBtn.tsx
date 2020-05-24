import React from 'react';
import { get } from 'lodash';
import { error as pnError } from '@pnotify/core';
import { useHistory } from 'react-router-dom';

import { loginPath } from 'lib/paths';

interface Props {
  signOutUser(): Promise<void>;
  currentEmail: string;
  onLogout(): void;
}

const LogoutBtn: React.FC<Props> = ({
  signOutUser,
  currentEmail,
  onLogout,
}) => {
  const history = useHistory();

  const onLogOutClick = () => {
    signOutUser()
      .then(() => {
        onLogout();
        history.push(loginPath);
      })
      .catch((error) => {
        const errorMsgs = get(error, 'response.data.errors.full_messages', [
          'Something went wrong',
        ]);
        pnError(errorMsgs.join('\n'));
      });
  };

  return (
    <div className="navbar-end">
      <div className="navbar-item">{currentEmail}</div>

      <div className="navbar-item">
        <div className="buttons">
          <button className="button is-block is-dark" onClick={onLogOutClick}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutBtn;
