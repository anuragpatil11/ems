// import React from "react";
// import AcceptTask from "./AcceptTask";
// import NewTask from "./NewTask";
// import CompletedTask from "./CompletedTask";
// import FailedTask from "./FailedTask";

// const TaskList = ({ data }) => {
//   return (
//     <div
//       id="tasklist"
//       className=" flex items-center justify-start gap-5 flex-nowrap overflow-x-auto  w-full h-[55%] mt-10"
//     >
//       {data.tasks.map((e, idx) => {
//         if (e.active_task) {
//           return <AcceptTask key={idx} data={e} />;
//         }
//         if (e.completed_task) {
//           return <CompletedTask key={idx} data={e} />;
//         }
//         if (e.failed_task) {
//           return <FailedTask key={idx} data={e} />;
//         }
//         if (e.new_task) {
//           return <NewTask key={idx} data={e} />;
//         }
//       })}
//     </div>
//   );
// };

// export default TaskList;
import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex items-center justify-start gap-5 flex-nowrap  w-full h-[55%] mt-10 px-4 py-2  rounded-lg shadow-md"
    >
      {data.tasks.length > 0 ? (
        data.tasks.map((task, idx) => {
          if (task.active_task) {
            return <AcceptTask key={idx} data={task} />;
          }
          if (task.completed_task) {
            return <CompletedTask key={idx} data={task} />;
          }
          if (task.failed_task) {
            return <FailedTask key={idx} data={task} />;
          }
          if (task.new_task) {
            return <NewTask key={idx} data={task} />;
          }
          return null; // Ensures no undefined return values
        })
      ) : (
        <div className="text-center text-gray-400 w-full">
          No tasks available.
        </div>
      )}
    </div>
  );
};

export default TaskList;
