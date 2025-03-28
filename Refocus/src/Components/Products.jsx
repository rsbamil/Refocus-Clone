import React from "react";
import Product from "./Product";

function Products() {
  const products = [
    {
      name: "arqitel",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Si ",
      live: true,
      casee: false,
    },
    {
      name: "TTR",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Si ",
      live: true,
      casee: false,
    },
    {
      name: "YIR 2022",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Si ",
      live: true,
      casee: true,
    },
    {
      name: "Yahoo!",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Si ",
      live: true,
      casee: true,
    },
  ];
  return (
    <div className="mt-32">
      {products.map((val, index) => (
        <Product val={val} />
      ))}
    </div>
  );
}

export default Products;
