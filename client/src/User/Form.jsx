import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    model: "",
    complaintType: "",
    place: "",
    district: "",
    date: "",
    time: "",
    proof: null,
  });

  // Options based on complaint model
  const complaintOptions = {
    "Traffic violations": [
      "Driving without a valid license",
      "Driving without insurance",
      "Over speeding",
      "Using a mobile phone while driving",
      "Not wearing a seatbelt",
      "Driving under the influence of alcohol",
      "Improper parking / Ignoring traffic signals",
      "Overtaking from the wrong side",
      "Not giving way to emergency vehicles",
      "Driving a vehicle with faulty lights or registration plates",
    ],
    "Public nuisance": [
      "Obstructing public roads",
      "Excessive noise pollution",
      "Improper waste disposal",
      "Air pollution from factories",
      "Operating a house of prostitution",
      "Unauthorized encroachments on public spaces",
      "Digging holes on roads",
      "Exploding fireworks in public areas",
      "Keeping vicious animals",
      "Practicing medicine without a valid license",
    ],
  };

  // Handle input change
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/complaintRegistration",
        formData
      );
      alert("Form submitted successfully!");
      console.log("Form submitted:", formData);
      formData({
        model: "",
        complaintType: "",
        place: "",
        district: "",
        date: "",
        time: "",
        proof: null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-7 min-h-screen flex flex-col items-center mt-10 justify-center bg-gray-50 p-4">
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Report Issues Seamlessly
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Our platform empowers users to submit complaints with ease, offering
          tools to upload multimedia for comprehensive issue reporting.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mx-8">
          {/* Complaint Model Selection */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Complaint Model
            </label>
            <select
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg border-blue-300"
            >
              <option value="">Select Complaint Model</option>
              <option value="Traffic violations">Traffic Violations</option>
              <option value="Public nuisance">Public Nuisance</option>
            </select>
          </div>

          {/* Complaint Type - Dynamic Options */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Complaint Type
            </label>
            <select
              name="complaintType"
              value={formData.complaintType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg border-blue-300 focus:ring-blue-500 focus:border-blue-500"
              disabled={!formData.model} // Disable until model is selected
            >
              <option value="">Select Complaint Type</option>
              {formData.model &&
                complaintOptions[formData.model].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </div>

          {/* Place Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Place</label>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg border-blue-300"
              placeholder="Enter the place"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">district</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg border-blue-300"
            >
              <option value="">Select district</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Kollam">Kollam</option>
              <option value="Alappuzha">Alappuzha</option>
              <option value="Pathanamthitta">Pathanamthitta</option>
              <option value="Kottayam">Kottayam</option>
              <option value="Idukki">Idukki</option>
              <option value="Ernakulam">Ernakulam</option>
              <option value="Thrissur">Thrissur</option>
              <option value="Palakkad">Palakkad</option>
              <option value="Malappuram">Malappuram</option>
              <option value="Kozhikode">Kozhikode</option>
              <option value="Wayanad">Wayanad</option>
              <option value="Kannur">Kannur</option>
              <option value="Kasaragod">Kasaragod</option>
            </select>
          </div>

          {/* Date Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border-blue-300 w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Time Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="border-blue-300 w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Proof File Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Proof</label>
            <div className="bg-blue-300 rounded-lg">
              <input
                type="file"
                name="proof"
                onChange={handleChange}
                accept="image/*, video/*"
                className="block w-54 m-auto px-3 py-2 rounded-lg"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
