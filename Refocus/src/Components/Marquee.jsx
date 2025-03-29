import React from "react";

function Marquee({ imagesUrl }) {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
      {imagesUrl.map((img, index) => (
        <img key={index} className="w-[6vw] flex-shrink-0" src={img} />
      ))}
      {imagesUrl.map((img, index) => (
        <img key={index} className=" flex-shrink-0" src={img} />
      ))}
    </div>
  );
}

export default Marquee;
