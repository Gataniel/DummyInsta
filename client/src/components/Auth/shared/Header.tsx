import React from 'react';

interface Props {
  title: string;
  subTitle: string;
}

const Header: React.FC<Props> = ({ title, subTitle }) => (
  <>
    <h3 className="title has-text-black">{title}</h3>
    <hr className="login-hr" />
    <p className="subtitle has-text-black">{subTitle}</p>
  </>
);

export default Header;
