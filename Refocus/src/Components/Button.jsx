import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center gap-8">
      <span className="text-sm font-regular font-medium ">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
