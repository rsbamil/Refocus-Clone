import React from "react";
import Button from "./Button";

function Product({ val }) {
  const { name, description, live, casee } = val;
  return (
    <div className="w-full py-20 text-white">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{name}</h1>
        <div className="dets w-1/3">
          <p className="mb-10 text-sm">{description}</p>
          <div className="w-[10%] flex items-center gap-5">
            {live && <Button />}
            {casee && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
