import React from "react";
import { Link } from "react-router";

function DashBoard({ username }) {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center bg-black relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='401' height='334.2' viewBox='0 0 1080 900'><rect fill='%23000000' width='1080' height='900'/><g fill-opacity='0.01'><polygon fill='%23444' points='90 150 0 300 180 300'/><polygon points='90 150 180 0 0 0'/><polygon fill='%23AAA' points='270 150 360 0 180 0'/><polygon fill='%23DDD' points='450 150 360 300 540 300'/><polygon fill='%23999' points='450 150 540 0 360 0'/><polygon points='630 150 540 300 720 300'/><polygon fill='%23DDD' points='630 150 720 0 540 0'/><polygon fill='%23444' points='810 150 720 300 900 300'/><polygon fill='%23FFF' points='810 150 900 0 720 0'/><polygon fill='%23DDD' points='990 150 900 300 1080 300'/><polygon fill='%23444' points='990 150 1080 0 900 0'/><polygon fill='%23DDD' points='90 450 0 600 180 600'/><polygon points='90 450 180 300 0 300'/><polygon fill='%23666' points='270 450 180 600 360 600'/><polygon fill='%23AAA' points='270 450 360 300 180 300'/><polygon fill='%23DDD' points='450 450 360 600 540 600'/><polygon fill='%23999' points='450 450 540 300 360 300'/><polygon fill='%23999' points='630 450 540 600 720 600'/><polygon fill='%23FFF' points='630 450 720 300 540 300'/><polygon points='810 450 720 600 900 600'/><polygon fill='%23DDD' points='810 450 900 300 720 300'/><polygon fill='%23AAA' points='990 450 900 600 1080 600'/><polygon fill='%23444' points='990 450 1080 300 900 300'/><polygon fill='%23222' points='90 750 0 900 180 900'/><polygon points='270 750 180 900 360 900'/><polygon fill='%23DDD' points='270 750 360 600 180 600'/><polygon points='450 750 540 600 360 600'/><polygon points='630 750 540 900 720 900'/><polygon fill='%23444' points='630 750 720 600 540 600'/><polygon fill='%23AAA' points='810 750 720 900 900 900'/><polygon fill='%23666' points='810 750 900 600 720 600'/><polygon fill='%23999' points='990 750 900 900 1080 900'/><polygon fill='%23999' points='180 0 90 150 270 150'/><polygon fill='%23444' points='360 0 270 150 450 150'/><polygon fill='%23FFF' points='540 0 450 150 630 150'/><polygon points='900 0 810 150 990 150'/><polygon fill='%23222' points='0 300 -90 450 90 450'/><polygon fill='%23FFF' points='0 300 90 150 -90 150'/><polygon fill='%23FFF' points='180 300 90 450 270 450'/><polygon fill='%23666' points='180 300 270 150 90 150'/><polygon fill='%23222' points='360 300 270 450 450 450'/><polygon fill='%23FFF' points='360 300 450 150 270 150'/><polygon fill='%23444' points='540 300 450 450 630 450'/><polygon fill='%23222' points='540 300 630 150 450 150'/><polygon fill='%23AAA' points='720 300 630 450 810 450'/><polygon fill='%23666' points='720 300 810 150 630 150'/><polygon fill='%23FFF' points='900 300 810 450 990 450'/><polygon fill='%23999' points='900 300 990 150 810 150'/><polygon points='0 600 -90 750 90 750'/><polygon fill='%23666' points='0 600 90 450 -90 450'/><polygon fill='%23AAA' points='180 600 90 750 270 750'/><polygon fill='%23444' points='180 600 270 450 90 450'/><polygon fill='%23444' points='360 600 270 750 450 750'/><polygon fill='%23999' points='360 600 450 450 270 450'/><polygon fill='%23666' points='540 600 630 450 450 450'/><polygon fill='%23222' points='720 600 630 750 810 750'/><polygon fill='%23FFF' points='900 600 810 750 990 750'/><polygon fill='%23222' points='900 600 990 450 810 450'/><polygon fill='%23DDD' points='0 900 90 750 -90 750'/><polygon fill='%23444' points='180 900 270 750 90 750'/><polygon fill='%23FFF' points='360 900 450 750 270 750'/><polygon fill='%23AAA' points='540 900 630 750 450 750'/><polygon fill='%23FFF' points='720 900 810 750 630 750'/><polygon fill='%23222' points='900 900 990 750 810 750'/><polygon fill='%23222' points='1080 300 990 450 1170 450'/><polygon fill='%23FFF' points='1080 300 1170 150 990 150'/><polygon points='1080 600 990 750 1170 750'/><polygon fill='%23666' points='1080 600 1170 450 990 450'/><polygon fill='%23DDD' points='1080 900 1170 750 990 750'/></g></svg>")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-full  flex-row- justify-center text-center">
        <h1 className="text-white mt-5 pt-7 text-6xl">
          Welcome{username ? `, ${username}` : ""}
        </h1>
        <p className="text-white mt-4 ">What will be your next move?</p>
      </div>
      <div className=" w-full  h-screen mt-10 flex ">
        <button className="border-r w-1/2  text-white text-6xl  transition duration-400 ease-in-out hover:bg-gray-700/10">
          <Link to="/write">Write</Link>
        </button>
        <button className=" w-1/2  text-white text-6xl transition duration-400 ease-in-out hover:bg-gray-700/10">
          <Link to="/read">Read</Link>
        </button>
      </div>
    </div>
  );
}

export default DashBoard;
