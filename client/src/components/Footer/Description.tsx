import React from 'react';
import { useFormContext } from 'react-hook-form';
import { get } from 'lodash';

import InputErrors from 'components/shared/form/InputErrors';

const Description: React.FC = () => {
  const { register, errors } = useFormContext();

  return (
    <div className="field">
      <div className="control">
        <textarea
          className="input"
          autoFocus
          ref={register}
          placeholder="Add your description"
          name="description"
        />
      </div>

      {errors && <InputErrors errors={get(errors, 'description.message')} />}
    </div>
  );
};

export default Description;
