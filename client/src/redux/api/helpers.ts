import { BASE_PARAMS } from 'lib/constants';

export const authHeaders = () => ({
  headers: {
    ...BASE_PARAMS.headers,
    uid: localStorage.uid,
    client: localStorage.client,
    'access-token': localStorage['access-token'],
  },
});
