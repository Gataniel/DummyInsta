import { BASE_URL, BASE_PARAMS } from 'lib/constants';
import { Model, Like, LikeResp } from 'redux/interfaces';

export const deleteLike = async (id: number): Promise<Like> => {
  const body = JSON.stringify({
    id,
  });

  const res = await fetch(`${BASE_URL}/likes/${id}`, {
    ...BASE_PARAMS,
    headers: {
      ...BASE_PARAMS.headers,
      uid: localStorage.uid,
      client: localStorage.client,
      'access-token': localStorage['access-token'],
    },
    method: 'DELETE',
    body,
  });

  return res.json();
};

export const postLike = async (
  referenceType: Model,
  referenceId: number
): Promise<LikeResp> => {
  const body = JSON.stringify({
    reference_type: referenceType,
    reference_id: referenceId,
  });

  const res = await fetch(`${BASE_URL}/likes`, {
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
