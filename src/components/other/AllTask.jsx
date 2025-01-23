// import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthProvider";
// const AllTask = ({ data }) => {
//   const authData = useContext(AuthContext);
//   // console.log(authData);

//   return (
//     <div className="mt-10 p-5 bg-[#2A2A3E] rounded-lg h-full">
//       <div className="bg-red-500 mb-3 px-4 py-4 rounded-lg flex justify-between items-center">
//         <h2 className="text-2xl font-semibold">Employees</h2>
//         <h3>Active </h3>
//         <h4>Completed</h4>
//         <h4>New</h4>
//         <h4>Failed</h4>
//       </div>
//       {authData.employees.map((e, idx) => {
//         return (
//           <div className="bg-transparent border-white border-2 mb-3 px-4 py-4 rounded-lg flex justify-between items-center">
//             <h2 className="text-2xl font-semibold">{e.first_name}</h2>
//             <h3>{e.task_numbers.active} </h3>
//             <h4>{e.task_numbers.completed}</h4>
//             <h4>{e.task_numbers.new}</h4>
//             <h4>{e.task_numbers.failed}</h4>
//           </div>
//         );
//       })}

//       {/* <div className=" bg-blue-500 mb-3 px-4 py-4 rounded-lg flex justify-between items-center">
//         <h2 className="text-2xl font-semibold">Anurag</h2>
//         <h3>Practice dsa</h3>
//         <h4>Status</h4>
//       </div>
//       <div className=" bg-green-500 mb-3 px-4 py-4 rounded-lg flex justify-between items-center">
//         <h2 className="text-2xl font-semibold">Anurag</h2>
//         <h3>Practice dsa</h3>
//         <h4>Status</h4>
//       </div>
//       <div className=" bg-yellow-500 mb-3 px-4 py-4 rounded-lg flex justify-between items-center">
//         <h2 className="text-2xl font-semibold">Anurag</h2>
//         <h3>Practice dsa</h3>
//         <h4>Status</h4>
//       </div> */}
//     </div>
//   );
// };

// export default AllTask;
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = ({ data }) => {
  const authData = useContext(AuthContext);

  return (
    <div className="mt-10 p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-lg text-white">
      {/* Header Section */}
      <div className="bg-gray-700 mb-5 px-6 py-4 rounded-lg flex justify-between items-center">
        <h2 className="text-xl font-bold uppercase">Employees</h2>
        <div className="flex space-x-8 ">
          <span className="font-medium text-green-400">Active</span>
          <span className="font-medium text-blue-400">Completed</span>
          <span className="font-medium text-yellow-400">New</span>
          <span className="font-medium text-red-400">Failed</span>
        </div>
      </div>

      {/* Employee Tasks */}
      {authData.employees.map((e, idx) => (
        <div
          key={idx}
          className="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700 flex justify-between items-center hover:shadow-md transition-shadow"
        >
          <h2 className="text-lg font-semibold">{e.first_name}</h2>
          <div className="flex space-x-8 text-center">
            <span className="text-green-400 px-5">{e.task_numbers.active}</span>
            <span className="text-blue-400 px-5">
              {e.task_numbers.completed}
            </span>
            <span className="text-yellow-400 px-5">{e.task_numbers.new}</span>
            <span className="text-red-400 px-5">{e.task_numbers.failed}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
