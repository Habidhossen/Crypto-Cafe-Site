import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="py-6 bg-slate-50 shadow-sm sticky top-0">
      <div className="flex justify-between container mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-slate-600">
            <Link to="/">Crypto Cafe</Link>
          </h1>
        </div>
        <nav>
          <CustomLink to="/" className="nav-item">
            Home
          </CustomLink>
          <CustomLink to="/coins" className="nav-item">
            Coins
          </CustomLink>
          <CustomLink to="/contact" className="nav-item">
            Contact
          </CustomLink>
          <CustomLink to="/about" className="nav-item">
            About
          </CustomLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
