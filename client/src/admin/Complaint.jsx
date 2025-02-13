import React from "react";

const Complaint = () => {
  return (
    <div className="flex-1 h-full">
      <main className="p-4 space-y-4 ">
        <div className="border-b flex justify-between">
          <h2 className="text-xl font-semibold ">Complaint</h2>
          <button className="">Download</button>
        </div>
        <div className="flex space-x-4 m-">
          <button className="px-4 py-1 text-sm bg-blue-300 rounded-full hover:bg-blue-400">
            All complaints
          </button>
          <button className="px-4 py-1 text-sm bg-blue-300 rounded-full hover:bg-blue-400">
            Solved complaints
          </button>
          <button className="px-4 py-1 text-sm bg-blue-300 rounded-full hover:bg-blue-400">
            Pending complaints
          </button>
          <button className="px-4 py-1 text-sm bg-blue-300 rounded-full hover:bg-blue-400">
            Rejected complaints
          </button>
        </div>

        {/* Complaint List Placeholder */}
        <div className="bg-gray-50 p-4 h-110 border rounded-lg"></div>
        <div className="space-x-3 text-sm text-center">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>. . . .</span>
        </div>
      </main>
    </div>
  );
};

export default Complaint;
