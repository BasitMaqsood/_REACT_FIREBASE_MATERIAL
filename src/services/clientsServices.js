import http from './httpService';

const apiEndpoint = '/client';

export function getAllData() {
  try {
    return http.get(`${apiEndpoint}`, {
      headers: { token: localStorage.getItem('x-auth-token') },
    });
  } catch (ex) {
    return ex;
  }
}

export function postClientData(clientObj) {
  try {
    return http.post(`${apiEndpoint}`, clientObj, {
      headers: { token: localStorage.getItem('x-auth-token') },
    });
  } catch (ex) {
    return ex;
  }
}

export default {
  getAllData,
  postClientData
};
