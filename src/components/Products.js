import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

function Products({ item, selectItem }) {
  const { title, price, image, category, id } = item;

  return (
    <div className="productcard">
      <img src={image} alt={title} className="image" />
      <h3>{title}</h3>
      <div className="pricecategory">
        <h1>{price} $</h1>
        <h4>{category}</h4>
      </div>
      <div className="shoppingicondiv">
        <button onClick={() => selectItem(id)} className = "addbuton"><AddShoppingCartOutlinedIcon/></button>
      </div>
    </div>
  );
}

export default Products;
