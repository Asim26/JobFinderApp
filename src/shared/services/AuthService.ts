import {HTTP_CLIENT} from '../utils/config';
import {BASE_URL, ENDPOINTS} from '../utils/endpoints';

const loginUser = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};

const signupUser = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.SIGNUP, params);
};

export {loginUser, signupUser};
