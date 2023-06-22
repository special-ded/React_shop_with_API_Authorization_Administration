import axios from "axios";

export default async function OrdersHttpService() {
  const ORDERS_URL = "https://api-git-master-special-ded.vercel.app/orders";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOiI2M2M0MzQ1OTk1M2M4MDUzYWNkMDIxOTMiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2ODc0MjU4MDEsImV4cCI6MTY4NzUxMjIwMX0.njXxLmu28NqNjYk8lznbAxIR3OAIWw8XcYzPPpeIRiQ";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    key: "value",
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
  return response.data;
}
