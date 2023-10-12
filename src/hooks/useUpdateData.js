import { BaseUrl } from "../api/BaseUrl";

export const useUpdateData = async (url, data) => {
  let token;
  if (localStorage.token) token = localStorage.token;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await BaseUrl.put(url, data, config);
  return response;
};

export const useUpdateDataWithImage = async (url, data) => {
  let token;
  if (localStorage.token) token = localStorage.token;

  const config = {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await BaseUrl.put(url, data, config);
  return response;
};