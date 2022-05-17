import axios from "axios";
import { useState } from "react";
export function useStoreAllProducts() {
  var lastResult;
  const [array, setArray] = useState<any>();
  axios
    .get(`https://dummyproducts-api.herokuapp.com/api/v1/departments?apikey=`)
    .then((data) => {
      lastResult = data;
      setArray(data);
      console.log(data);
    })
    .catch((error) => console.log(error));
  return lastResult;
}
