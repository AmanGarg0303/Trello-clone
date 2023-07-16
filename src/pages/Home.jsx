import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-blue-100 px-10 py-5">
      <Navbar />

      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
