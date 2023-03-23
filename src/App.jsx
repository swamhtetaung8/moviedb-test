import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieProvider } from "./context/MovieProvider";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
const App = () => {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </MovieProvider>
  );
};

export default App;
