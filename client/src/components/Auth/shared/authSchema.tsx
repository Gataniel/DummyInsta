import * as yup from 'yup';

const minPasswordLength = 6;

export const AuthSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(minPasswordLength).required(),
});
