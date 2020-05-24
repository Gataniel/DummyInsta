import * as yup from 'yup';

const MAX_TEXT_LENGTH = 200;

export const commentSchema = yup.object().shape({
  text: yup.string().required().max(MAX_TEXT_LENGTH),
});
