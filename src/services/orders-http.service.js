import axios from "axios";
import localStorageService from "./localStorage.service";

export default async function OrdersHttpService() {
  const ORDERS_URL = "https://api-git-master-special-ded.vercel.app/orders";
  const token = JSON.parse(localStorageService.getToken("access_token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.get(ORDERS_URL, config).catch((error) => {
    if (error.response) {
      console.log(error.response);
      console.log("server responded");
    } else if (error.request) {
      console.log("network error");
    } else {
      console.log(error);
    }
  });
  console.log(response);
  return response?.data;
}
