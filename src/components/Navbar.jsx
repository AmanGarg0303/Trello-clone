import React from "react";

const Navbar = ({ changeState }) => {
  return (
    <nav className="flex text-white px-10 py-2 mb-2 justify-between">
      <h1 className="font-bold text-3xl">Taco's Tacos</h1>

      <button onClick={changeState}>Switch Board</button>
    </nav>
  );
};

export default Navbar;
