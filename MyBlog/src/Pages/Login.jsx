import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login({ setUsername, onLogin }) {
  const [inputName, setInputName] = useState("");
  const handleLogin = () => {
    setUsername(inputName);
    onLogin();
  };

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center bg-black relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='401' height='334.2' viewBox='0 0 1080 900'><rect fill='%23000000' width='1080' height='900'/><g fill-opacity='0.01'><polygon fill='%23444' points='90 150 0 300 180 300'/><polygon points='90 150 180 0 0 0'/><polygon fill='%23AAA' points='270 150 360 0 180 0'/><polygon fill='%23DDD' points='450 150 360 300 540 300'/><polygon fill='%23999' points='450 150 540 0 360 0'/><polygon points='630 150 540 300 720 300'/><polygon fill='%23DDD' points='630 150 720 0 540 0'/><polygon fill='%23444' points='810 150 720 300 900 300'/><polygon fill='%23FFF' points='810 150 900 0 720 0'/><polygon fill='%23DDD' points='990 150 900 300 1080 300'/><polygon fill='%23444' points='990 150 1080 0 900 0'/><polygon fill='%23DDD' points='90 450 0 600 180 600'/><polygon points='90 450 180 300 0 300'/><polygon fill='%23666' points='270 450 180 600 360 600'/><polygon fill='%23AAA' points='270 450 360 300 180 300'/><polygon fill='%23DDD' points='450 450 360 600 540 600'/><polygon fill='%23999' points='450 450 540 300 360 300'/><polygon fill='%23999' points='630 450 540 600 720 600'/><polygon fill='%23FFF' points='630 450 720 300 540 300'/><polygon points='810 450 720 600 900 600'/><polygon fill='%23DDD' points='810 450 900 300 720 300'/><polygon fill='%23AAA' points='990 450 900 600 1080 600'/><polygon fill='%23444' points='990 450 1080 300 900 300'/><polygon fill='%23222' points='90 750 0 900 180 900'/><polygon points='270 750 180 900 360 900'/><polygon fill='%23DDD' points='270 750 360 600 180 600'/><polygon points='450 750 540 600 360 600'/><polygon points='630 750 540 900 720 900'/><polygon fill='%23444' points='630 750 720 600 540 600'/><polygon fill='%23AAA' points='810 750 720 900 900 900'/><polygon fill='%23666' points='810 750 900 600 720 600'/><polygon fill='%23999' points='990 750 900 900 1080 900'/><polygon fill='%23999' points='180 0 90 150 270 150'/><polygon fill='%23444' points='360 0 270 150 450 150'/><polygon fill='%23FFF' points='540 0 450 150 630 150'/><polygon points='900 0 810 150 990 150'/><polygon fill='%23222' points='0 300 -90 450 90 450'/><polygon fill='%23FFF' points='0 300 90 150 -90 150'/><polygon fill='%23FFF' points='180 300 90 450 270 450'/><polygon fill='%23666' points='180 300 270 150 90 150'/><polygon fill='%23222' points='360 300 270 450 450 450'/><polygon fill='%23FFF' points='360 300 450 150 270 150'/><polygon fill='%23444' points='540 300 450 450 630 450'/><polygon fill='%23222' points='540 300 630 150 450 150'/><polygon fill='%23AAA' points='720 300 630 450 810 450'/><polygon fill='%23666' points='720 300 810 150 630 150'/><polygon fill='%23FFF' points='900 300 810 450 990 450'/><polygon fill='%23999' points='900 300 990 150 810 150'/><polygon points='0 600 -90 750 90 750'/><polygon fill='%23666' points='0 600 90 450 -90 450'/><polygon fill='%23AAA' points='180 600 90 750 270 750'/><polygon fill='%23444' points='180 600 270 450 90 450'/><polygon fill='%23444' points='360 600 270 750 450 750'/><polygon fill='%23999' points='360 600 450 450 270 450'/><polygon fill='%23666' points='540 600 630 450 450 450'/><polygon fill='%23222' points='720 600 630 750 810 750'/><polygon fill='%23FFF' points='900 600 810 750 990 750'/><polygon fill='%23222' points='900 600 990 450 810 450'/><polygon fill='%23DDD' points='0 900 90 750 -90 750'/><polygon fill='%23444' points='180 900 270 750 90 750'/><polygon fill='%23FFF' points='360 900 450 750 270 750'/><polygon fill='%23AAA' points='540 900 630 750 450 750'/><polygon fill='%23FFF' points='720 900 810 750 630 750'/><polygon fill='%23222' points='900 900 990 750 810 750'/><polygon fill='%23222' points='1080 300 990 450 1170 450'/><polygon fill='%23FFF' points='1080 300 1170 150 990 150'/><polygon points='1080 600 990 750 1170 750'/><polygon fill='%23666' points='1080 600 1170 450 990 450'/><polygon fill='%23DDD' points='1080 900 1170 750 990 750'/></g></svg>")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex text-center justify-center">
        <form className="bg-gray-700/30 h-110 w-90 mt-20 rounded-4xl ">
          <h1 className="text-white text-4xl mt-20">Login</h1>
          <div className="mb-4 mt-10">
            <input
              type="text"
              id="name"
              placeholder="Username"
              className="w-70 p-3 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:white"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </div>
          <div className="mb-4 mt-3">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-70 p-3 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:white"
            />
          </div>
          <button
            type="submit"
            className="text-white border w-30 h-10 rounded-lg mt-3 cursor-pointer hover:border-2 hover:bg-gray-800"
            onClick={handleLogin}
          >
            <Link to="/dashboard">Log in</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
