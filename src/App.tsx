import { useEffect, useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import { useStoreAllProducts } from "./components/states/fetcher";
function App() {
  const [array, setArray] = useState();
  var firstArray = useStoreAllProducts();

  return (
    <>
      <Header />
      <Main array={firstArray} />
    </>
  );
}

export default App;
