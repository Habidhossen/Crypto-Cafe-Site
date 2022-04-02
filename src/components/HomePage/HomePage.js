import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="md:px-16 py-8">
        <div className="flex flex-col justify-center h-[70vh] items-center">
          <h1 className=" font-sans font-bold text-xl md:text-5xl ">
            Welcome to CRYPTO CAFE<span className="text-6xl">☕</span>
          </h1>
          <Link
            to="/coins"
            className="py-2 px-5 text-white mt-6 rounded-full bg-purple-700"
          >
            Explore Coins
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
