import React from "react";
import { Outlet } from "react-router-dom";

const Mycomplaints = () => {
  return (
    <>
      <div className="px-12 pt-28 bg-amber-300 min-h-screen">
        
          <div className="border-b pb-4 space-y-4">
            <h1 className="text-4xl">Our Complaints</h1>
            <p>
              View the ongoing and resolved complaints to understand how we
              address user issues effectively.
            </p>
          </div>
          
          <div className=" flex flex-col sm:flex-row sm:items-center gap-6 border-b py-5 ">
            <div className="space-y-3 sm:w-1/2">
              <p>Complaint Model : fesfshregsergsege</p>
              <p>Compalint :sgrdgzdvdfgdg</p>
              <p>Status : bdgrdfv</p>
            </div>
            <div className="m-auto w-5/6 sm:w-1/2 object-contain"><img className="object-cover max-h-72" src="https://images.pexels.com/photos/845406/pexels-photo-845406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
          </div>
      </div>
      <Outlet />
    </>
  );
};

export default Mycomplaints;
