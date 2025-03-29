import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto p-3 py-4 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="n-left flex items-center">
        <h1 className="text-2xl  uppercase tracking-wider">Refokus</h1>
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, i) =>
            elem.length === 0 ? (
              <span key={i} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a key={i} className="text-sm flex items-center gap-2" href="#">
                {i === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1  rounded-full bg-green-500"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <div className="n-right">
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
