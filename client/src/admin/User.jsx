import React from "react";

const User = () => {
  const data = [
    {
      id: 1,
      name: "Alice Johnson",
      num: 2548874784,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 2,
      name: "Bob Smith",
      num: 3055678988,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 3,
      name: "Charlie Brown",
      num: 282376655,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 4,
      name: "Charlie Brown",
      num: 282376655,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 5,
      name: "Charlie Brown",
      num: 282376655,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 6,
      name: "Charlie Brown",
      num: 282376655,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 7,
      name: "Charlie Brown",
      num: 282376655,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 8,
      name: "Alice Johnson",
      num: 2548874784,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 9,
      name: "Bob Smith",
      num: 3055678988,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 10,
      name: "Charlie Brown",
      num: 282376655,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 11,
      name: "Charlie Brown",
      num: 282376655,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 12,
      name: "Charlie Brown",
      num: 282376655,
      email: "asifpvkodiyathur@gmail.com",
    },
    {
      id: 13,
      name: "Charlie Brown",
      num: 282376655,
      email: "asifpvkodiyathur@gmail.com",
    },
  ];
  return (
    <div className="px-3 py-3">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Ph no.</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50 text-sm">
              <td className="border border-gray-300 px-4 py-2 text-center">
                {row.id}
              </td>
              <td className="border border-gray-300 px-4 py-2">{row.name}</td>
              <td className="border border-gray-300 px-4 py-2">{row.num}</td>
              <td className="border border-gray-300 px-4 py-2">{row.email}</td>
              <td className="border border-gray-300 px-4 py-2">delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
