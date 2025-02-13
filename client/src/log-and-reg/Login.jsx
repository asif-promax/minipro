import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigate();
  const { email, password } = data;
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        data
      );
      console.log(response);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        await navigation("/landing");
      }
    } catch (error) {
      toast.error("login failed");
      console.error(error.response.data);
    }
    console.log(data);
  };
  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-indigo-500  to-blue-900">
      <div className="w-full max-w-3xl bg-white flex flex-col sm:flex-row">
        <ToastContainer position="top-center" autoClose={1500} />
        <div className="p-8 space-y-5 flex flex-col justify-center text-center sm:w-3/6 bg-contain bg-gradient-to-t from-blue-900 to-blue-700">
          <h1
            style={{ fontFamily: "'Sofia', sans-serif" }}
            className="text-3xl font-bold text-white"
          >
            Proofpoint
          </h1>
          <p className="text-xs text-white">
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
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
                className="border-gray-300 border rounded-lg placeholder:text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="space-y-2 pt-4 ">
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
            <div className="text-right ">
              <a href="" className="my-2 block text-blue-500 text-sm">
                forgot password
              </a>
            </div>
            <div className="space-y-3">
              <button
                type="submit"
                className="text-white text-center bg-blue-600 w-full py-2 rounded-lg"
              >
                Login
              </button>
              <p className="text-center text-xs">
                Don't have an account ?
                <Link to={"/reg"} className="inline text-blue-500 underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
