export const BASE_PARAMS: RequestInit = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const BASE_URL = process.env.REACT_APP_API_URL;
export const AUTH_URL = `${BASE_URL}/auth`;
