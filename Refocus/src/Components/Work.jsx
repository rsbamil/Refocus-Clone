import React from "react";

function Work() {
  var images = [
    {
      url: "https://plus.unsplash.com/premium_photo-1683120974913-1ef17fdec2a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682310100722-2bbe79fe324e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHx0ZWNobm9sb2d5fGVufDB8fDB8fHww",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc5fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg2fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1681426701125-bed484a8c829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjcwfHx0ZWNobm9sb2d5fGVufDB8fDB8fHww",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjcxfHx0ZWNobm9sb2d5fGVufDB8fDB8fHww",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full  ">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none">
          work
        </h1>
        <div className="absolute w-full h-full  top-0">
          {images.map(
            (image, i) =>
              image.isActive && (
                <img
                  className="absolute w-60 h-60 rounded-lg object-cover -translate-x-[50%] -translate-y-[50%] "
                  src={image.url}
                  style={{
                    top: image.top,
                    left: image.left,
                  }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
