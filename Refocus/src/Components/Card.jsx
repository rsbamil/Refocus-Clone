import { motion } from "motion/react";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "30px",
      }}
      className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full ">
        <div className="w-full flex items-center justify-between">
          <h3>One Heading</h3>
          <FaLongArrowAltRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">Heading</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] mt-5 border-zinc-50">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
