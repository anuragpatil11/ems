// import React from "react";

// const TaskNumberList = ({ data }) => {
//   return (
//     <div className="grid grid-cols-4 gap-5 mt-10">
//       <div className="bg-[#FF4545] p-5 rounded-xl text-white ">
//         <h2 className="text-3xl font-semibold">{data.task_numbers.new}</h2>
//         <h3 className="text-xl font-medium">New Task</h3>
//       </div>
//       <div className="bg-[#DA498D] p-5 rounded-xl text-white">
//         <h2 className="text-3xl font-semibold">
//           {data.task_numbers.completed}
//         </h2>
//         <h3 className="text-xl font-medium">Completed Task</h3>
//       </div>
//       <div className="bg-[#5CB338] p-5 rounded-xl text-white">
//         <h2 className="text-3xl font-semibold">{data.task_numbers.active}</h2>
//         <h3 className="text-xl font-medium">Accepted Task</h3>
//       </div>
//       <div className="bg-[#80C4E9] p-5 rounded-xl text-white">
//         <h2 className="text-3xl font-semibold">{data.task_numbers.failed}</h2>
//         <h3 className="text-xl font-medium">Failed Task</h3>
//       </div>
//     </div>
//   );
// };

// export default TaskNumberList;
import React from "react";

const TaskNumberList = ({ data }) => {
  const taskData = [
    {
      value: data.task_numbers.new,
      label: "New Task",
      bgColor: "bg-[#FF4545]",
    },
    {
      value: data.task_numbers.completed,
      label: "Completed Task",
      bgColor: "bg-[#DA498D]",
    },
    {
      value: data.task_numbers.active,
      label: "Active Task",
      bgColor: "bg-[#5CB338]",
    },
    {
      value: data.task_numbers.failed,
      label: "Failed Task",
      bgColor: "bg-[#80C4E9]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
      {taskData.map((task, index) => (
        <div
          key={index}
          className={`${task.bgColor} p-5 rounded-xl text-white shadow-md transform transition duration-300 hover:scale-105`}
        >
          <h2 className="text-3xl font-semibold">{task.value}</h2>
          <h3 className="text-xl font-medium">{task.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskNumberList;
