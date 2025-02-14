import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex p-1 h-screen">
        {/* Sidebar */}

        <aside className="text-center w-1/5 bg-blue-300 px-3 py-3 rounded-lg">
          <h1 className="text-3xl text-left font-semibold">ProofPoint</h1>
          <ul className="space-y-2 pt-3">
            <li className="font-medium cursor-pointer">
              <Link to={"/admin"}>Overview</Link>
            </li>
            <li className="font-medium cursor-pointer bg-white rounded-lg py-1">
              <Link to={"Complaint"}>Complaint</Link>
            </li>

            <select
              name=""
              id=""
              className="w-full px-3 focus:outline-0 py-1 border rounded-lg"
            >
              <option value="">User managment</option>
              <option value="">
                <Link to={"user"}>
                  <span className="bold">--</span> User
                </Link>
              </option>

              <option value="">
                <Link to={"/complaintmanage"}>
                  <span className="bold">--</span> Manage Complaints
                </Link>
              </option>
              <option value=""></option>
            </select>
            <li className="font-medium cursor-pointer">Reports</li>
          </ul>
        </aside>
        <div className="flex-1 bg-blue-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
