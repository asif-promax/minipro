import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const { name, email, password, number } = data;
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-indigo-500  to-blue-900">
      <div className="w-full max-w-3xl bg-white flex flex-col sm:flex-row">
        <div className="p-8 space-y-5 text-white flex flex-col justify-center text-center sm:w-3/6 bg-contain bg-gradient-to-t from-blue-900 to-blue-700">
          <h1
            className="text-3xl font-bold"
            style={{ fontFamily: "'Sofia', sans-serif" }}
          >
            Proofpoint
          </h1>
          <p className="text-xs">
            Experience a seamless way to report issues with our user-friendly
            platform. Upload photos and videos to provide substantial proof for
            your complaints and track their status effortlessly.
          </p>
        </div>
        <div className="sm:w-3/6 py-8 px-8 flex flex-col justify-center">
          <h1
            style={{ fontFamily: "'Sofia', sans-serif" }}
            className="text-4xl pb-4 text-center font-extrabold bg-gradient-to-br from-blue-900 to-blue-300 bg-clip-text text-transparent"
          >
            <span className="text-xs font-normal block text-black">
              Welcome to
            </span>
            Proofpoint
          </h1>
          <form onSubmit={handleSubmit} action="" className="">
            <div className="space-y-2 mb-3">
              <label htmlFor="" className="text-xs font-semibold block">
                Username
              </label>
              <input
                type="text"
                value={name}
                name="name"
                onChange={handleChange}
                className="border-gray-300 border rounded-lg placeholder:text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="" className="text-xs font-semibold block">
                Phone number
              </label>
              <input
                type="number"
                value={number}
                name="number"
                onChange={handleChange}
                className="border-gray-300 border rounded-lg placeholder:text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ph no."
                required
              />
            </div>
            <div className="space-y-2 mb-3">
              <label htmlFor="" className="text-xs font-semibold block">
                Email
              </label>
              <input
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
                className="border-gray-300 border rounded-lg placeholder:text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="" className="text-xs font-semibold block">
                Password
              </label>
              <input
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                className="border-gray-300 border rounded-lg placeholder:text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="space-y-3 pt-5">
              <button
                type="submit"
                className="text-center text-white bg-blue-600 w-full py-2 rounded-lg"
              >
                Register
              </button>
              <p className="text-center text-xs">
                Do you have alredy an account ?
                <Link to={"/"} className="text-blue-500 underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
