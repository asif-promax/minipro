import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex w-full p-1">
      {/* Sidebar */}

      <aside className="sticky bottom-0 min-h-screen text-center w-1/5 bg-blue-300 px-3 py-3 rounded-lg">
        <h1 className="text-3xl text-left font-semibold">ProofPoint</h1>
        <ul className="space-y-2 pt-3">
          <li className="font-medium cursor-pointer">
            <Link to={"/admin"}>Overview</Link>
          </li>
          <li className="font-medium cursor-pointer rounded-lg py-1">
            <Link to={"Complaint"}>Complaint</Link>
          </li>
          <li className="font-medium cursor-pointer rounded-lg py-1">
            <Link to={"user"}>User Managment</Link>
          </li>
          <li className="font-medium cursor-pointer rounded-lg py-1">
            <Link to={"complaintmanage"}>Manage Complaints</Link>
          </li>
          <li className="font-medium cursor-pointer">Reports</li>
        </ul>
      </aside>
      <Outlet />
    </div>
  );
};

export default Sidebar;
