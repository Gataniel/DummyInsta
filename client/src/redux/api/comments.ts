import { BASE_URL, BASE_PARAMS } from 'lib/constants';
import { CommentFormData, Comment } from 'redux/interfaces';

export const getComments = (postId: string): Promise<Comment[]> =>
  fetch(`${BASE_URL}/comments/?post_id=${postId}`, {
    ...BASE_PARAMS,
    headers: {
      ...BASE_PARAMS.headers,
      uid: localStorage.uid,
      client: localStorage.client,
      'access-token': localStorage['access-token'],
    },
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
    headers: {
      ...BASE_PARAMS.headers,
      uid: localStorage.uid,
      client: localStorage.client,
      'access-token': localStorage['access-token'],
    },
    method: 'POST',
    body,
  });

  return res.json();
};
