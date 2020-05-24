import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import LogoutBtnContainer from './LogoutBtnContainer';

import './styles/Nav.scss';

interface Props {
  isSignedIn: boolean;
}

const Nav: React.FC<Props> = ({ isSignedIn }) => {
  const [menuIsActive, setMenuIsActive] = React.useState(false);

  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          DummyInsta
        </Link>

        <a
          role="button"
          className={classNames('navbar-burger burger', {
            'is-active': menuIsActive,
          })}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={classNames('navbar-menu', { 'is-active': menuIsActive })}
      >
        <div className="navbar-start">
          <div className="top-rated" onClick={toggleMenu}>
            <Link className="navbar-item" to="/top">
              Top RATED
            </Link>
          </div>
        </div>

        {isSignedIn && <LogoutBtnContainer onLogout={toggleMenu} />}
      </div>
    </nav>
  );
};

export default Nav;
