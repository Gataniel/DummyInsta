import React from 'react';

interface Props {
  errors: any;
}

const InputErrors: React.FC<Props> = ({ errors }) => (
  <span className="has-text-danger">{errors}</span>
);

export default InputErrors;
