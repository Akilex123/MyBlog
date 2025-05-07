import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 md:px-10 h-20 bg-black text-white border-b-1 relative">
      <Link to="/">
        <span className="font-semibold text-2xl ml-22">MyBlog</span>
      </Link>
      <div className="flex items-center gap-5 text-black">
        <Link to="/">
          <span className="py-2 px-4 text-lg text-white hover: rounded-4xl hover:bg-white hover:text-black transition duration-400">
            Home
          </span>
        </Link>
        <Link to="/ourstory">
          <span className="py-2 px-4 text-lg text-white hover: rounded-2xl hover:bg-white hover:text-black transition duration-400">
            Our Story
          </span>
        </Link>
        <Link to="/login">
          <span className="py-2 px-4 text-lg text-white hover: rounded-2xl hover:bg-white hover:text-black transition duration-400 mr-10">
            Log in
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
