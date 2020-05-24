import React from 'react';
import { useFormContext } from 'react-hook-form';
import { get } from 'lodash';

import InputErrors from 'components/shared/form/InputErrors';

const Password: React.FC = () => {
  const { register, errors } = useFormContext();

  return (
    <div className="control">
      <input
        name="password"
        ref={register}
        autoComplete="on"
        className="input"
        type="password"
        placeholder="Your Password"
      />

      {errors && <InputErrors errors={get(errors, 'password.message')} />}
    </div>
  );
};

export default Password;
