import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import OurStory from "./Pages/OurStory";
import Login from "./Pages/Login";
import DashBoard from "./Pages/DashBoard";
import Write from "./Pages/Write";
import Read from "./Pages/Read";
import IndPost from "./Pages/IndPost";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";

function App() {
  const [username, setUsername] = useState("");
  const [post, setPost] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  }, []);

  const addPost = (newPost) => {
    setPost([...post, newPost]);
  };
  return (
    <>
      {loading ? (
        <div className="bg-black h-screen w-screen flex justify-center text-center">
          <ScaleLoader
            loading={loading}
            color="white"
            size={30}
            className="m-auto"
          />
        </div>
      ) : (
        <div className="min-h-screen flex flex-col ">
          <Navbar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          ></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/ourstory" element={<OurStory></OurStory>}></Route>
            <Route
              path="/login"
              element={
                <Login
                  setUsername={setUsername}
                  onLogin={() => setIsLoggedIn(true)}
                ></Login>
              } // postavljamo da login postavlja ime
            ></Route>
            <Route
              path="/dashboard"
              element={<DashBoard username={username}></DashBoard>} // postavljamo da dashboard preuzima ime
            ></Route>
            <Route
              path="/write"
              element={<Write addPost={addPost}></Write>}
            ></Route>
            <Route path="/read" element={<Read post={post}></Read>}></Route>
            <Route
              path="/read/:id"
              element={<IndPost post={post}></IndPost>}
            ></Route>
          </Routes>
        </div>
      )}{" "}
    </>
  );
}

export default App;
