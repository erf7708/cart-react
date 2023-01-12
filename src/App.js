import Store from "./Components/Store";
import ProductContextProvider from "./Context/ProductContextProvider";


function App() {
  return (
  <ProductContextProvider>
        <Store/>
  </ProductContextProvider>
  );
}

export default App;
