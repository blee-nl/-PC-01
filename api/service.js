import axios from "axios";

export async function getCompareProducts() {
  const response = await axios.get(
    "https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all",
  );
  return response;
}
