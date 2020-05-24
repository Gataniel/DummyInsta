import React from 'react';
import { useFormContext } from 'react-hook-form';
import { get } from 'lodash';

import InputErrors from 'components/shared/form/InputErrors';

const Email: React.FC = () => {
  const { register, errors } = useFormContext();

  return (
    <div className="control">
      <input
        name="email"
        ref={register}
        className="input"
        autoComplete="on"
        type="email"
        placeholder="Your Email"
      />

      {errors && <InputErrors errors={get(errors, 'email.message')} />}
    </div>
  );
};

export default Email;
