import React from 'react';
import { useForm } from 'react-hook-form';
import { get } from 'lodash';

import { CommentFormData } from 'redux/interfaces';
import InputErrors from 'components/shared/form/InputErrors';
import { commentSchema } from './commentSchema';

import './styles/AddComment.scss';

interface Props {
  postId: number;
  createComment: (form: CommentFormData, postId: string) => void;
}

const AddComment: React.FC<Props> = ({ createComment, postId }) => {
  const { register, errors, handleSubmit } = useForm<CommentFormData>({
    validationSchema: commentSchema,
    mode: 'onBlur',
  });

  const onSubmit = async (form: CommentFormData) => {
    createComment(form, postId.toString());
  };

  return (
    <div className="field field_add-comment has-addons">
      <div className="control is-expanded">
        <input
          type="text"
          className="input"
          ref={register}
          name="text"
          placeholder="Add your comment"
        />

        {errors && <InputErrors errors={get(errors, 'text.message')} />}
      </div>

      <div className="control">
        <button
          className="button is-success"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddComment;
