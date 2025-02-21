import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Complaint = () => {
  const [complaints, setComplaints] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("all");
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/allcomplaints/all-complaints?page=${currentPage}&status=${filter}`
        );
        setComplaints(response.data.complaints);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error(
          "Error fetching complaints:",
          error.response?.data || error
        );
      }
    };

    fetchComplaints();
  }, [currentPage, filter]);

  // Function to update complaint status (solve/reject)
  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:5000/allcomplaints/update-status/${id}`,
        { status },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Update the local state to reflect the change
      setComplaints((prevComplaints) =>
        prevComplaints.map((complaint) =>
          complaint._id === id ? { ...complaint, status } : complaint
        )
      );
    } catch (error) {
      console.error(
        `Error updating complaint status to ${status}:`,
        error.response?.data || error
      );
    }
  };

  // Function to open the modal and set selected complaint
  const openModal = (complaint) => {
    setSelectedComplaint(complaint);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComplaint(null);
  };

  // Function to download complaint details as PDF
  const handlePrint = useReactToPrint({
    content: () => modalRef.current,
    documentTitle: `Complaint_${selectedComplaint?._id}`,
  });

  return (
    <div className="flex-1 h-full p-4">
      <main className="space-y-4">
        <div className="border-b flex justify-between">
          <h2 className="text-xl font-semibold">User Complaints</h2>
        </div>

        {/* Filter Buttons */}
        <div className="space-x-4">
          <button
            className={`px-3 py-1 rounded ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setFilter("all");
              setCurrentPage(1);
            }}
          >
            All Complaints
          </button>
          <button
            className={`px-3 py-1 rounded ${
              filter === "solved" ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setFilter("solved");
              setCurrentPage(1);
            }}
          >
            Solved Complaints
          </button>
          <button
            className={`px-3 py-1 rounded ${
              filter === "rejected" ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setFilter("rejected");
              setCurrentPage(1);
            }}
          >
            Rejected Complaints
          </button>
        </div>

        {/* Table */}
        <table className="w-full border-collapse border border-gray-300 mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Model</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Place</th>
              <th className="border px-4 py-2">Date & Time</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint._id} className="bg-white border">
                <td className="border px-4 py-2">
                  {complaint.user?.email || "No Email"}
                </td>
                <td className="border px-4 py-2">
                  {complaint.user?.number || "No Phone"}
                </td>
                <td className="border px-4 py-2">{complaint.model}</td>
                <td className="border px-4 py-2">{complaint.complaintType}</td>
                <td className="border px-4 py-2">
                  {complaint.place} - {complaint.district}
                </td>
                <td className="border px-4 py-2">
                  {complaint.date} - {complaint.time}
                </td>
                <td className="border px-4 py-2">{complaint.status}</td>
                <td className="px-4 py-2 flex flex-col space-y-1">
                  <div className="flex space-x-1">
                    <button
                      className="bg-green-500 text-white text-sm px-2 py-1 rounded"
                      onClick={() => updateStatus(complaint._id, "solved")}
                    >
                      Solve
                    </button>
                    <button
                      className="bg-red-500 text-white text-sm px-2 py-1 rounded"
                      onClick={() => updateStatus(complaint._id, "rejected")}
                    >
                      Reject
                    </button>
                  </div>
                  <button
                    className="bg-blue-200 w-full rounded-md"
                    onClick={() => openModal(complaint)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Modal Popup */}
      {isModalOpen && selectedComplaint && (
        <div className="fixed inset-0.5 flex items-center justify-center bg-gray-800">
          <div
            ref={modalRef}
            className="bg-amber-300 flex p-5 space-x-3 rounded-lg shadow-lg w-screen  h-screen"
          >
            <div className="w-3/12">
              <h2 className="text-xl font-bold mb-4">Complaint Details</h2>
              <p>
                <strong>Email:</strong> {selectedComplaint.user?.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedComplaint.user?.number}
              </p>
              <p>
                <strong>Model:</strong> {selectedComplaint.model}
              </p>
              <p>
                <strong>Complaint Type:</strong>{" "}
                {selectedComplaint.complaintType}
              </p>
              <p>
                <strong>Place:</strong> {selectedComplaint.place} -{" "}
                {selectedComplaint.district}
              </p>
              <p>
                <strong>Date & Time:</strong> {selectedComplaint.date} -{" "}
                {selectedComplaint.time}
              </p>
            </div>
            {/* Proof Images/Videos */}
            <div className="w-9/12 p-3 bg-amber-200">
              {selectedComplaint.proof.length > 0 && (
                <div className="">
                  <h3 className="font-semibold text-center">Proof:</h3>
                  {selectedComplaint.proof.map((file, index) => (
                    <div key={index} className="">
                      {file.match(/\.(jpeg|jpg|png)$/) ? (
                        <div className="h-116 flex justify-center">
                          <img
                          src={file}
                          alt="Proof"
                          className="rounded-md h-118"
                        />
                        </div>
                      ) : file.match(/\.(mp4|avi|mov)$/) ? (
                        <video controls className="w-full">
                          <source src={file} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between mt-4">
                <button
                  onClick={closeModal}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
                <button
                  onClick={handlePrint}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* pagination */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        <button
          className={`px-3 py-1 border rounded ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed bg-gray-300"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-3 py-1 border bg-gray-200">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-3 py-1 border rounded ${
            currentPage >= totalPages
              ? "opacity-50 cursor-not-allowed bg-gray-300"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Complaint;
