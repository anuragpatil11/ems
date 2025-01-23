import React from "react";

const AcceptTask = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <div className="flex-shrink-0 bg-[#FF4545]  rounded-xl w-[300px] h-full text-white text-center">
        <div className="flex items-center justify-between gap-5 p-5  text-sm">
          <h2 className="px-3 py-3 bg-red-600 rounded">{data.category}</h2>
          <h3>{data.task_date}</h3>
        </div>
        <h2 className="text-xl font-semibold mt-5">{data.task_title}</h2>
        <p className="text-sm mt-2">
          {data.task_description}
        </p>
        <div className="mt-2 flex justify-between p-5">
          <button className="w-50 bg-green-400 px-2 py-1 rounded-full">
            Accept Task
          </button>
          <button className="w-50 bg-black px-2 py-1 rounded-full">
            Reject Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;

// import React from "react";

// const AcceptTask = ({ data }) => {
//   return (
//     <div className="flex-shrink-0 bg-[#FF4545] rounded-xl w-[300px] h-full text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
//       <div className="flex items-center justify-between gap-5 px-4 py-3 bg-red-600 rounded-t-xl text-sm">
//         <h2 className="px-3 py-1 bg-red-800 text-white rounded-full text-xs font-medium">
//           {data.category}
//         </h2>
//         <h3 className="text-xs font-medium">{data.task_date}</h3>
//       </div>
//       <div className="px-4 py-5">
//         <h2 className="text-xl font-semibold">{data.task_title}</h2>
//         <p className="text-sm mt-3 text-gray-100">
//           {data.task_description}
//         </p>
//       </div>
//       <div className="mt-5 flex justify-between px-4 pb-4">
//         <button className="w-[48%] bg-green-500 text-sm px-4 py-2 rounded-full hover:bg-green-600 transition duration-200">
//           Accept
//         </button>
//         <button className="w-[48%] bg-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition duration-200">
//           Reject
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AcceptTask;
