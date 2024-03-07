import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";

export function AppRouter() {
  return (
    <div className="card">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/converter" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
