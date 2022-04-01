import React from "react";
import { useState } from "react";

function Box({ selected, removeAll }) {
  return (
    <div className="boxgeneral">
      <h1 style={{ textAlign: "center" }}>SHOPPING BOX</h1>
      {selected.length == 0 ? (
        <h1>EMPTY LİST</h1>
      ) : (
        <div className="boxdiv">
          {selected.map((item) => {
            return (
              <div className="productcard">
                <img src={item[0].image} className="image" />
                <h3>{item[0].title}</h3>

                <div className="pricecategory">
                  <h4>{item[0].price}</h4>
                  <h4>{item[0].category}</h4>
                </div>
              </div>
            );
          })}
          
        </div>
      )}

        {selected.length > 0 ? <button onClick={() => removeAll()} className="removebutton">REMOVE ALL</button> : ""}
      
    </div>
  );
}

export default Box;
