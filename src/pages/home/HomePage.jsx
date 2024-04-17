import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "../../index.css";
import MiddlePart from "./middle/MiddlePart";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [session, setSession] = useState(null);

  return (
    <div>
      <Navbar />
      <MiddlePart />
    </div>
  );
};

export default HomePage;
