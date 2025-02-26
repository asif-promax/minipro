import React from "react";
import { motion } from "framer-motion";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import first from "../images/first.png";
import second from "../images/second.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20 px-6">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg space-y-6"
        >
          <h1 className="text-4xl font-bold text-blue-500">Welcome to ProofPoint</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Experience a seamless way to report issues with our user-friendly platform.
            Upload photos and videos to provide substantial proof for your complaints
            and track their status effortlessly.
          </p>
          <Link to={"form"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Register a Complaint
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img className="w-full md:w-[400px] rounded-lg shadow-lg" src={first} alt="ProofPoint" />
        </motion.div>
      </div>

      {/* Complaint Categories */}
      <div className="text-center py-16">
        <h1 className="text-3xl font-semibold">Complaint Categories</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Common issues reported by users
        </p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {["Waste Dumping", "Public Nuisance", "Traffic Violation", "Noise Pollution"].map(
            (category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg p-4 shadow-md cursor-pointer"
              >
                {category}
              </motion.div>
            )
          )}
        </motion.div>
      </div>

      {/* Registration Steps */}
      <div className="text-center py-16">
        <h1 className="text-3xl font-semibold">How to Register a Complaint</h1>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {["Click Register", "Fill Form & Upload Proof", "Track Status"].map(
            (step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="border border-blue-500 w-64 p-4 rounded-lg shadow-md"
              >
                <h1 className="font-semibold text-lg">Step {index + 1}</h1>
                <p>{step}</p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>

      {/* Feedback Section */}
      <div className="mt-3 bg-blue-500 py-12 text-center px-6">
        <h1 className="text-2xl font-semibold text-white">User Feedback</h1>
        <div className="flex justify-center items-center gap-6 mt-6">
          <MdArrowBackIos className="text-white text-2xl cursor-pointer" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 dark:bg-gray-800 w-80 p-4 rounded-lg text-left shadow-md"
          >
            <p className="font-semibold">Jorge</p>
            <span className="text-sm">This is an awesome website!</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 dark:bg-gray-800 w-80 p-4 rounded-lg text-left shadow-md hidden sm:block"
          >
            <p className="font-semibold">Aami</p>
            <span className="text-sm">Great experience using this app!</span>
          </motion.div>
          <MdArrowForwardIos className="text-white text-2xl cursor-pointer" />
        </div>
        <div className="pt-6 flex gap-3 justify-center">
          <input
            type="text"
            placeholder="Write your feedback..."
            className="rounded-lg p-3 w-80 bg-gray-200 dark:bg-gray-800"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t py-6 px-6 text-sm">
        <div className="flex gap-6">
          <p>My Complaints</p>
          <p>About</p>
          <p>Profile</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <SiGmail className="text-xl cursor-pointer" />
          <FaFacebookSquare className="text-xl cursor-pointer" />
          <FaXTwitter className="text-xl cursor-pointer" />
        </div>
      </div>
      <p className="text-center text-sm py-4">
        © ProofPoint 2025 | Empowering Citizens, Improving Communities.
      </p>
    </div>
  );
};

export default LandingPage;
