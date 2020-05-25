import { BASE_URL, BASE_PARAMS } from 'lib/constants';
import { PostFormData, Post, SortedBy } from 'redux/interfaces';
import { authHeaders } from './helpers';

export const getPosts = async (
  userId: string,
  sortedBy: SortedBy
): Promise<Post[]> => {
  const res = await fetch(
    `${BASE_URL}/posts?${new URLSearchParams({
      user_id: userId,
      sorted_by: sortedBy,
    })}`,
    {
      ...BASE_PARAMS,
      ...authHeaders(),
    }
  );
  return res.json();
};

export const postPost = async (form: PostFormData): Promise<Post> => {
  const { description, file } = form;
  const img = file[0];

  const formData = new FormData();
  formData.append('file', img);
  formData.append('description', description);

  const body = formData;

  const res = await fetch(`${BASE_URL}/posts`, {
    headers: {
      uid: localStorage.uid,
      client: localStorage.client,
      'access-token': localStorage['access-token'],
    },
    method: 'POST',
    body,
  });

  return res.json();
};
