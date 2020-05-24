import * as yup from 'yup';

const MAX_DESC_LENGTH = 200;

export const PostSchema = yup.object().shape({
  description: yup.string().trim().required().max(MAX_DESC_LENGTH),
});
