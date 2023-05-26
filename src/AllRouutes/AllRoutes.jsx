import React from "react";
import { Routes, Route } from "react-router-dom";
import TypingPage from "../Pages/TypingPage";
import Home from "../Pages/Home";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gamepage" element={<TypingPage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
