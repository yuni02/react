import React, { useState } from "react";

export default function Products({ addToCart }) {
  const [products] = useState([
    {
      name: "AA Batery",
      cost: "$2.99",
      image:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210321_299%2F16162660041256F1xV_PNG%2FB07QXV6N1B.jpg&type=a340",
    },

    {
      name: "Blanket",
      cost: "$19.99",
      image:
        "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe4%2F1b%2F85%2Fe41b8550fb0229229c579059f33fefb7.png&type=a340",
    },
  ]);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
