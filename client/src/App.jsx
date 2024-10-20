import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import BuyCredit from "./Pages/BuyCredit";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <ToastContainer position="bottom-right" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
