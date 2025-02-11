import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="fixed w-full top-0 bg-white z-50 py-1 border-b">
        <div className=" mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <h1 className="font-bold text-3xl ps-6">ProofPoint</h1>

            {/* Hamburger Menu Icon (Visible on Medium and Smaller Screens) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-2xl focus:outline-none"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Menu (Visible on Larger Screens) */}
            <div className="hidden md:flex items-center md:gap-10 lg:gap-20">
              <p className="border px-3 py-1 rounded-2xl border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white transition duration-300">
                Home
              </p>
              <Link to={"/complaint"}>
                <p className="cursor-pointer hover:text-blue-400 transition duration-300">
                  My complaints
                </p>
              </Link>
              <Link to={"/about"}>
              <p className="cursor-pointer hover:text-blue-400 transition duration-300">
                About
              </p>
              </Link>
              <p className="cursor-pointer hover:text-blue-400 transition duration-300">
                Profile
              </p>
            </div>

            {/* Complaint Registration Button (Visible on Larger Screens) */}
            <button className="hidden mx-6 text-sm md:inline-block rounded-lg px-3.5 py-1.5 text-center bg-blue-400 text-white hover:bg-blue-500 transition duration-300">
              Complaint <br /> registration
            </button>
          </div>

          {/* Dropdown Menu (Visible on Medium and Smaller Screens) */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col items-center gap-1">
                <p className=" text-black border text-center w-full py-1 rounded-2xl border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white transition duration-300">
                  Home
                </p>
                <p className="rounded-2xl cursor-pointer py-1 hover:bg-blue-400 block w-full text-center transition duration-300">
                  My complaints
                </p>
                <p className="rounded-2xl cursor-pointer py-1 hover:bg-blue-400 block w-full text-center transition duration-300">
                  About
                </p>
                <p className="rounded-2xl cursor-pointer py-1 hover:bg-blue-400 block w-full text-center transition duration-300">
                  Profile
                </p>
                <button className="rounded-lg px-3.5 py-2 text-center bg-blue-400 text-white hover:bg-blue-500 transition duration-300">
                  Complaint registration
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
