import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

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
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };
  return (
    <div className="mt-32 relative ">
      {products.map((val, index) => (
        <Product key={index} count={index} val={val} mover={mover} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none  ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          style={{ boxShadow: "0 0 15px rgba(255,100,100)" }}
          className="window w-[32rem] h-[23rem]  absolute left-[44%] overflow-hidden rounded-lg "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
              src="https://cdn.pixabay.com/video/2024/03/04/202987-919379330_large.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-white"
          >
            <video
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
              src="https://cdn.pixabay.com/video/2015/11/25/1360-147055409_tiny.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-white"
          >
            <video
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
              src="https://cdn.pixabay.com/video/2016/09/13/5058-182666741_tiny.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-yellow-100"
          >
            <video
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
              src="https://cdn.pixabay.com/video/2016/02/15/2176-155747466_tiny.mp4"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
