import React from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import first from "../images/first.png";
import second from "../images/second.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Main Content Section */}
      <div className="pt-20 flex flex-col md:flex-row justify-around md:pl-6  items-center">
        {/* Left Side: Text Content */}
        <div className="max-w-lg text-justify px-5 md:w-1/2">
          <h1 className="text-4xl font-bold my-4">Welcome to ProofPoint</h1>
          <p className="text-gray-600  mb-8">
            Experience a seamless way to report issues with our user-friendly
            platform. Upload photos and videos to provide substantial proof for
            your complaints and track their status effortlessly.
          </p>
          <Link to={"form"}>
            <button className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
              Complaint Registration
            </button>
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="md:py-10 " src={first} alt="ProofPoint" />
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-center py-4 text-3xl font-semibold">
          Complaint model
        </h1>
        <p className="text-sm text-center py-3 px-9">
          What are the violations of law? <br /> Act of breaking established
          rules or regulations set by the legal system, leading to potential
          harm to society as a whole.
        </p>
        <div className="max-w-5xl py-3 px-9 m-auto gap-4 grid md:grid-cols-2 lg:grid-cols-3 text-center">
          <p className="bg-gray-300 rounded-2xl py-1.5 ">Waste dumping</p>
          <p className="bg-gray-300 rounded-2xl py-1.5 ">Public nuicense</p>
          <p className="bg-gray-300 rounded-2xl py-1.5 ">Trafic voilence</p>
          <p className="bg-gray-300 rounded-2xl py-1.5 hidden md:block">
            Public nuicense
          </p>
          <p className="bg-gray-300 rounded-2xl py-1.5 hidden md:block">
            Public nuicense
          </p>
          <p className="bg-gray-300 rounded-2xl py-1.5 hidden lg:block">
            Public nuicense
          </p>
          <p className="bg-gray-300 rounded-2xl py-1.5 hidden lg:block">
            Public nuicense
          </p>
          <p className="bg-gray-300 rounded-2xl py-1.5 hidden lg:block">
            Public nuicense
          </p>
          <p className="bg-gray-300 rounded-2xl py-1.5">others</p>
        </div>
      </div>
      <div className="text-center space-y-8">
        <h1 className="text-3xl font-semibold">Registrstion steps</h1>
        <div className="flex flex-col items-center gap-3 md:flex-row justify-center">
          <div className="border border-blue-400 w-64 h-24 grid rounded-lg">
            <h1 className="font-semibold text-lg">step 1</h1>
            <p className="flex items-center justify-center">
              click the
              <Link to={"form"}>
                <button className="bg-blue-400 p-1 rounded-lg">
                  Complaint <br />
                  registration
                </button>
              </Link>
              button
            </p>
          </div>
          <div className="border border-blue-400 w-64 h-24 grid rounded-lg">
            <h1 className="font-semibold text-lg">step 2</h1>
            <p>
              Fill the form and proof <br />
              <span>( image or video )</span>
            </p>
          </div>
          <div className="border border-blue-400 w-64 h-24 grid rounded-lg">
            <h1 className="font-semibold text-lg">step 3</h1>
            <p>Track status</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg md:grid grid-cols-2 items-center m-10 md:mx-auto space-y-4 border border-blue-400 text-left max-w-5xl">
        <div className="flex">
          <img src={second} alt="" className="" />
        </div>
        <div className="space-y-3 px-10">
          <h1 className="text-2xl font-semibold">Our mission and values</h1>
          <p className="">
            ProofPoint was founded in 2025 with a commitment to transparency and
            user empowerment. Our mission is to create a safe and accessible
            platform for users to report issues, ensuring that every complaint
            is heard and addressed promptly. We value accountability and
            innovation, striving to enhance the user experience continuously.
            Our dedicated team, including experts like Alice Johnson, our CEO,
            and Mark Smith, our CTO, works tirelessly to uphold these principles
            and foster a supportive community around our services.
          </p>
        </div>
      </div>
      <div className="text-center ">
        <h1 className="text-2xl font-semibold">All About ProofPoint</h1>
        <p className="py-3">List all complaints and status</p>
        <div className="flex justify-center py-2">
          <div className="px-14 border-e-2 border-gray-500">
            <p className="text-3xl font-bold">20k</p>
            Total <br /> complaints
          </div>
          <div className="px-14 border-e-2  border-gray-500">
            <p className="text-3xl font-bold">19k</p>
            Solved <br />
            complaints
          </div>
          <div className="px-14 ">
            <p className="text-3xl font-bold">1k</p>
            Pending <br /> complaints
          </div>
        </div>
      </div>
      <div className="mt-3 bg-blue-400 py-5 text-center px-8">
        <h1 className="text-2xl font-semibold pb-2 text-gray-200">Feedback</h1>
        <div className="max-w-4xl m-auto flex py-4 gap-15  justify-center">
          <div className="flex items-center ">
            <MdArrowBackIos className="text-gray-200" />
          </div>
          <div className="bg-gray-200 w-3/6  rounded-lg text-left">
            <img
              className="w-15 m-2 h-15 float-left"
              src="https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>Jorge</p>
            <span className="text-sm">This is awsome website</span>
          </div>
          <div className="hidden sm:block w-3/6 bg-gray-200 rounded-lg text-left">
            <img
              className="w-16 h-16 m-2 float-left"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>Aami </p>
            <span className="text-sm">This is awsome website</span>
          </div>
          <div className="flex items-center">
            <MdArrowForwardIos className="text-gray-200" />
          </div>
        </div>
        <div className="pt-4 flex gap-2 justify-center text-gray-800 ">
          <div className="w-16 h-16 m-2 bg-gray-500 rounded-full"></div>
          <input
            type="text"
            placeholder="Write your Feedback ?"
            className="rounded-lg md:w-72  ps-3 bg-gray-200"
          />
        </div>
      </div>
      <div className="md:flex justify-between border-y px-20 items-center text-sm">
        <div className="flex gap-10">
          <p>My complaints</p>
          <p>about</p>
          <p>profile</p>
        </div>
        <div className="flex gap-4">
          <SiGmail />
          <FaFacebookSquare />
          <FaXTwitter />
        </div>
      </div>
      <p className="text-center text-sm">
        © PROOFPOINT 2025 | Empowering Citizens, Improving Communities.
      </p>
    </div>
  );
};

export default LandingPage;
