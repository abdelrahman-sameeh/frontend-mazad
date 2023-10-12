import { BaseUrl } from "../api/BaseUrl";

export const useInsertData = async (url, data) => {
  let token = "";
  if (localStorage.token) {
    token = localStorage.token;
  }

  const config = {
    headers: { Authorization: token },
  };

  const response = await BaseUrl.post(url, data, config);
  return response;
};

export const useInsertDataWithImage = async (url, data) => {
  let token = "";
  if (localStorage.token) {
    token = localStorage.token;
  }

  const config = {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data"
    },
  };

  const response = await BaseUrl.post(url, data, config);
  return response;
};