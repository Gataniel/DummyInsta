import { BASE_URL, BASE_PARAMS } from 'lib/constants';
import { Model, Like, LikeResp } from 'redux/interfaces';
import { authHeaders } from './helpers';

export const deleteLike = async (id: number): Promise<Like> => {
  const body = JSON.stringify({
    id,
  });

  const res = await fetch(`${BASE_URL}/likes/${id}`, {
    ...BASE_PARAMS,
    ...authHeaders(),
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
    ...authHeaders(),
    method: 'POST',
    body,
  });

  return res.json();
};
