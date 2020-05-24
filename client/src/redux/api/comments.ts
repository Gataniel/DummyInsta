import { BASE_URL, BASE_PARAMS } from 'lib/constants';
import { CommentFormData, Comment } from 'redux/interfaces';
import { authHeaders } from './helpers';

export const getComments = (postId: string): Promise<Comment[]> =>
  fetch(`${BASE_URL}/comments/?post_id=${postId}`, {
    ...BASE_PARAMS,
    ...authHeaders(),
  }).then((res) => res.json());

export const postComment = async (
  form: CommentFormData,
  postId: string
): Promise<Comment> => {
  const { text } = form;

  const body = JSON.stringify({
    text,
  });

  const res = await fetch(`${BASE_URL}/comments?post_id=${postId}`, {
    ...BASE_PARAMS,
    ...authHeaders(),
    method: 'POST',
    body,
  });

  return res.json();
};
