import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "../../index.css";
import MiddlePart from "./middle/MiddlePart";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <MiddlePart />
    </div>
  );
};

export default HomePage;
