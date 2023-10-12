import { BaseUrl } from "../api/BaseUrl";

export const useDeleteData = async (url) => {
  let token = "";
  if (localStorage.token) {
    token = localStorage.token;
  }
  const config = {
    headers: { Authorization: token },
  };

  const response = await BaseUrl.delete(url, config);

  return response;
};