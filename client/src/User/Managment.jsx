import React, { useState } from "react";
import { Edit } from "lucide-react";

const Managment = () => {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [formData,setFormdata]=useState('')

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormdata(data)
  };

  return (
    <div className="min-h-screen">
      <div className="border-b py-3 px-7">
        <h1 className="font-semibold text-3xl">Proofpoint</h1>
      </div>
      <div className=" bg-white flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Account Management
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="w-full py-2 ps-3 rounded-lg focus:outline-none border border-blue-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className=" cursor-pointer">
            <label htmlFor="">Ph no.</label>
            <input
              type="text"
              name="number"
              value={data.number}
              onChange={handleChange}
              className="w-full py-2 ps-3 rounded-lg focus:outline-none border border-blue-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full py-2 ps-3 rounded-lg focus:outline-none border border-blue-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Managment;
