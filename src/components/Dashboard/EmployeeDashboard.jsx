// import React from "react";
// import Header from "../other/Header";
// import TaskNumberList from "../other/TaskNumberList";
// import TaskList from "../TaskList/TaskList";

// const EmployeeDashboard = ({ data }) => {
//   return (
//     <div className="p-10 bg-[#17153B] h-screen">
//       <Header data={data} />
//       <TaskNumberList data={data} />
//       <TaskList data={data} />
//     </div>
//   );
// };

// export default EmployeeDashboard;

import React from "react";
import Header from "../other/Header";
import TaskNumberList from "../other/TaskNumberList";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="flex flex-col p-10 bg-[#17153B] h-screen ">
      <Header data={data} />
      <div className="mt-8">
        <TaskNumberList data={data} />
      </div>
      <div className="mt-6">
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
