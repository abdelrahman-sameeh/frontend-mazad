import { BaseUrl } from "../api/BaseUrl";

export const useGetData = async (url) => {
  let token = "";
  if (localStorage.token) {
    token = localStorage.token;
  }

  const config = {
    headers: { Authorization: token },
  };

  const response = await BaseUrl.get(url, config);
  return response;
};