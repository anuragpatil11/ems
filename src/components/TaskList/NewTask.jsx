// import React from "react";

// const NewTask = ({ data }) => {
  

//   return (
//     <div>
//       <div className="flex-shrink-0 bg-green-400  rounded-xl w-[300px] h-full text-white text-center">
//         <div className="flex items-center justify-between gap-5 p-5  text-sm">
//           <h2 className="px-3 py-3 bg-red-600 rounded">{data.category}</h2>
//           <h3>{data.task_date}</h3>
//         </div>
//         <h2 className="text-xl font-semibold mt-5">{data.task_title}</h2>
//         <p className="text-sm mt-2">
//           {data.task_description}
//         </p>
//         <div className="mt-2 p-5">
//           <button className="w-50 bg-emerald-800 px-2 py-1 rounded-full">
//             Accept Task
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewTask;
import React from "react";

const NewTask = ({ data }) => {
  return (
    <div>
      <div className="flex-shrink-0 bg-green-500 rounded-xl w-[300px] h-full text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Header Section */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 bg-green-600 rounded-t-xl text-sm">
          <h2 className="px-3 py-1 bg-red-700 text-white rounded-full text-xs font-medium">
            {data.category}
          </h2>
          <h3 className="text-xs font-medium">{data.task_date}</h3>
        </div>

        {/* Task Title & Description */}
        <div className="px-4 py-5">
          <h2 className="text-xl font-semibold">{data.task_title}</h2>
          <p className="text-sm mt-3 text-gray-100">
            {data.task_description}
          </p>
        </div>

        {/* Action Button */}
        <div className="px-4 pb-5">
          <button className="w-full bg-emerald-700 text-sm px-4 py-2 rounded-full hover:bg-emerald-800 transition duration-200">
            Accept Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
