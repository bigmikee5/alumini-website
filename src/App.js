import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Membership from "./routes/Membership";
import NewsUpdate from "./routes/NewsUpdate";
import Executives from "./routes/Executives";
import Patron from "./routes/Patron";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsupdate" element={<NewsUpdate />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/executives" element={<Executives />} />
        <Route path="/patron" element={<Patron />} />
      </Routes>
    </>
  );
}

export default App;
