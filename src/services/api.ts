import axios from "axios";
import { parseCookies } from "nookies";

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://golden-skin-hotel.herokuapp.com",
    // headers: {
    //   "x-access-token": `${cookies['nextauth.token']}`
    // }
  });

  api.interceptors.response.use((response) => {
    return response;
  });

  return api;
}
