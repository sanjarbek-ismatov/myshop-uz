import axios from "axios";
import { useState } from "react";
export function useStoreAllProducts() {
  const [array, setArray] = useState<any>();
  axios
    .get(`https://fakestoreapi.com/products`)
    .then((data) => {
      setArray(data);
      console.log(data);
    })
    .catch((error) => console.log(error));
  return array;
}
