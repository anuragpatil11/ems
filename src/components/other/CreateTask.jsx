// import React from "react";

// const CreateTask = () => {
//   return (
//     <div>
//       <div className="mt-10 bg-[#2A2A3E] p-10 rounded-lg">
//         <form className="flex justify-between items-start w-full">
//           <div className="flex flex-col gap-5 p-5 rounded-lg w-1/2">
//             <div>
//               <h3>Task Title</h3>
//               <input
//                 type="text"
//                 placeholder="Enter Task Title"
//                 className="text-gray-400 border-gray-400 border-2 rounded-lg py-1 px-2 w-4/5 bg-transparent"
//               />
//             </div>
//             <div>
//               <h3>Task Deadline</h3>
//               <input
//                 type="date"
//                 className="text-gray-400 border-gray-400 border-2 rounded-lg py-1 px-2 w-4/5 bg-transparent"
//               />
//             </div>
//             <div>
//               <h3>Assign to:</h3>
//               <input
//                 type="text"
//                 placeholder="Enter Employee Name"
//                 className="text-gray-400 border-gray-400 border-2 rounded-lg py-1 px-2 w-4/5 bg-transparent"
//               />
//             </div>
//             <div>
//               <h3>Category:</h3>
//               <input
//                 type="text"
//                 placeholder="dev,design etc"
//                 className="text-gray-400 border-gray-400 border-2 rounded-lg py-1 px-2 w-4/5 bg-transparent"
//               />
//             </div>
//           </div>
//           <div className="bg-[#2A2A3E] rounded-lg w-2/5 flex flex-col gap-5 ">
//             <h3>Task Description</h3>
//             <textarea
//               name=""
//               id=""
//               placeholder="Enter Task Description"
//               cols="30"
//               rows="10"
//               className="text-gray-400 border-gray-400 border-2 rounded-lg p-2 bg-transparent"
//             />
//             <button className="bg-gray-400 text-white p-2 rounded-lg mt-5 w-full">
//               Create Task
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateTask;
import React, { act, useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newtask, setNewTask] = useState({});
  const submitTask = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDeadline,
      category,
      taskDescription,
      active: false,
      completed: false,
      failed: false,
      new: true,
    });
    // console.log(task);
    const data = JSON.parse(localStorage.getItem("employees"));
    // console.log(data);

    data.forEach((e) => {
      if (e.first_name === assignTo) {
        e.tasks.push(newtask);
        e.task_numbers.newtask = e.task_numbers.newtask + 1;
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));

    setTaskTitle("");
    setTaskDeadline("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };
  return (
    <div className="mt-10 p-6">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-lg shadow-lg text-white">
        <form
          onSubmit={(e) => submitTask(e)}
          className="flex flex-wrap md:flex-nowrap justify-between gap-6"
        >
          {/* Left Section */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div>
              <label className="block text-sm font-medium mb-1">
                Task Title
              </label>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Enter Task Title"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Task Deadline
              </label>
              <input
                value={taskDeadline}
                onChange={(e) => setTaskDeadline(e.target.value)}
                type="date"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Assign To
              </label>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                type="text"
                placeholder="Enter Employee Name"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="e.g., dev, design"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div>
              <label className="block text-sm font-medium mb-1">
                Task Description
              </label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Enter Task Description"
                rows="6"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
