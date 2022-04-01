import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Products from "./components/Products";
import Box from "./components/Box";

function App() {
  const [products, setProducts] = useState([]);
  const [productsBox, setProductsBox] = useState(true);
  const [selected, setSelected] = useState([]);

  const getApi = async () => {
    const response = await axios("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  const openProducts = () => {
    setProductsBox(true);
  };

  const openBox = () => {
    setProductsBox(false);
  };

  const selectItem = (id) => {
    const selectedItems = products.filter((item) => item.id === id);
    setSelected([...selected, selectedItems]);
  };


  const removeAll = () => {
    setSelected([]);
  }





  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <button className="productsbutton" onClick={openProducts}>
          Products
        </button>
        <ShoppingCartIcon
          style={{ marginRight: "2rem", cursor: "pointer" }}
          onClick={openBox}
        />
      </nav>

      {productsBox ? (
        <div className="products">
          {products?.map((item) => {
            return (
              <Products key={item.id} item={item} selectItem={selectItem} />
            );
          })}
        </div>
      ) : (
        <Box selected={selected} removeAll = {removeAll}/>
      )}
    </div>
  );
}

export default App;
