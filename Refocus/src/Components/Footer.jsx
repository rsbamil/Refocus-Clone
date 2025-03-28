import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem]  font-semibold tracking-tight leading-none">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3 ">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((elem, i) => (
              <a
                className="block mt-3 text-zinc-600 capitalize"
                key={i}
                href="#"
              >
                {elem}
              </a>
            ))}
          </div>
          <div className="basis-1/3 ">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((elem, i) => (
              <a
                className="block mt-3 text-zinc-600 capitalize"
                key={i}
                href="#"
              >
                {elem}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              vel adi assumenda sapiente
            </p>
            <img
              className="w-32 mt-7"
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
