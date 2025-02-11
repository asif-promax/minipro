import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const Form = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage("Successfully registered!");
  };

  return (
    <div className="pt-7 min-h-screen flex flex-col items-center mt-10 justify-center bg-gray-50 p-4">
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-md">
      {successMessage && (
        <div className="flex items-center bg-blue-100 p-4 text-center text-blue-600 rounded-lg m-4">
          <CheckCircle className="w-5 h-5 mr-2" />
          {successMessage}
        </div>
      )}
        <h1 className="text-2xl font-semibold text-center mb-4">
          Report Issues Seamlessly
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Our platform empowers users to submit complaints with ease, offering
          tools to upload multimedia for comprehensive issue reporting.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mx-8">
          <div>
            <label className="block text-sm font-medium mb-1">
              Complaint Model
            </label>
            <select className="w-full px-3 py-2 border rounded-lg border-blue-300">
              <option>Select a model</option>
              <option>Model A</option>
              <option>Model B</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Complaint</label>
            <select className="w-full px-3 py-2 border rounded-lg  border-blue-300 focus:ring-blue-500 focus:border-blue-500">
              <option>Select complaint type</option>
              <option>Technical Issue</option>
              <option>Billing Issue</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 ">Place</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg border-blue-300"
              placeholder="Enter the place"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              className="border-blue-300 w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Time</label>
            <input
              type="time"
              className="border-blue-300 w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
          <div>
            <label className="block text-sm font-medium mb-1 ">Proof</label>
            <input
              type="file"
              className="w-full px-3 py-2 bg-blue-400 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              accept="image/*, video/*"
            />
          </div>
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
  );
};

export default Form;
