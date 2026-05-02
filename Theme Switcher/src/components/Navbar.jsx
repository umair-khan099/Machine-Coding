import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../utils/Theam-Context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/blog"}>Blog</Link>
      <button onClick={toggleTheme}>Theme Change</button>
    </div>
  );
};

export default Navbar;
