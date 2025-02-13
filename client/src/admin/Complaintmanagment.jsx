import React, { useState } from "react";
import { PiDownloadSimple } from "react-icons/pi";

const Complaintmanagment = () => {
  const [complaintmodel, setComplaintmodel] = useState("");
  const file = [
    {
      data: "grefewrtsfdghfghf",
    },
    {
      data: "grefewrtsfdghfghf",
    },
    {
      data: "grefewrtsfdghfghf",
    },
    {
      data: "grefewrtsfdghfghf",
    },
    {
      data: "grefewrtsfdghfghf",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex justify-between border-b border-white">
        <p>Manage complaints</p>
        <div className="flex items-center gap-1">
          <PiDownloadSimple />
          <p>Download</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full md:w-1/2 space-y-1 mb-4 bg-white py-3 px-5 rounded-s-lg mt-2">
          <p>Add complaint models</p>
          <input type="text" className="border bg-white w-full py-1.5" />
        </div>
        <div className="w-full md:w-1/2 space-y-1 mb-4 bg-white py-3 px-5 rounded-e-lg mt-2">
          <p>Add complaints</p>
          <input type="text" className="border bg-white w-full py-1.5" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="text-center border sm:w-1/2 bg-white">
          <h1 className="py-1.5">All complaint models</h1>
          {file.map((item) => (
            <div className="flex justify-between px-3 border-t">
              <p className=" py-0.5">item.data</p>
              <button className="bg-blue-200 text-xs px-2 rounded-lg my-1">
                delete
              </button>
            </div>
          ))}
        </div>
        <div className="text-center border sm:w-1/2 bg-white">
          <h1 className="py-1.5">All complaints</h1>
          {file.map((item) => (
            <div className="flex justify-between px-3 border-t">
              <p className=" py-0.5">item.data</p>
              <button className="bg-blue-200 text-xs px-2 rounded-lg my-1">
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Complaintmanagment;
