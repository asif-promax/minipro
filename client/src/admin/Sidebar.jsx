import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex p-1 h-screen">
        {/* Sidebar */}

        <aside className="text-center w-1/5 bg-blue-300 px-3 py-3 rounded-lg">
          <h1 className="text-3xl text-left font-semibold">ProofPoint</h1>
          <ul className="space-y-3 pt-3">
            <li className="font-medium cursor-pointer">Overview</li>
            <li className="font-medium cursor-pointer bg-white rounded-lg py-1">
              Complaint
            </li>
            <select
              name=""
              id=""
              className="w-full px-3 focus:outline-0 py-1 border rounded-lg"
            >
              <option value="">
                <Link to={"/User"}>
                  <button>
                    <span className="bold">--</span> User
                  </button>
                </Link>
              </option>
              <option value="">
                <Link to={"/complaintmanage"}>
                  <button>
                    <span className="bold">--</span> Manage Complaints
                  </button>
                </Link>
              </option>
              <option value=""></option>
            </select>
            <li className="font-medium cursor-pointer">Reports</li>
          </ul>
        </aside>
        <div className="flex-1 bg-blue-100">
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
