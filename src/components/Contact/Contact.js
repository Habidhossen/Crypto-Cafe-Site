import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <section className="px-4 mt-12 mx-auto max-w-7xl md:px-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold text-center md:text-3xl ">
          Contact Us, Our Office Address Down Below
        </h1>

        <div className="flex justify-center items-center">
          <Link
            to="bd-address"
            className="  py-1 px-3 text-white mt-3 mx-1 bg-sky-700 rounded-full w-auto sm:mb-0"
          >
            BD Address
          </Link>
          <Link
            to="us-address"
            className="  py-1 px-3 text-white mt-3 mx-1 bg-sky-700 rounded-full w-auto sm:mb-0"
          >
            US Address
          </Link>
        </div>
        <div className="flex justify-center items-center w-full mt-24">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Contact;
