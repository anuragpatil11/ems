// import React from "react";
// import Header from "../other/Header";
// import CreateTask from "../other/CreateTask";
// import AllTask from "../other/AllTask";

// const AdminDashboard = () => {
//   return (
//     <div className="h-full w-full p-7 text-white bg-[#1E1E30]">
//       <Header />
//       <CreateTask />
//       <AllTask data />
//     </div>
//   );
// };

// export default AdminDashboard;
import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ data }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 md:p-10">
      {/* Header Section */}
      <Header data={data} />

      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Create Task */}
        <div className="lg:col-span-1">
          <CreateTask />
        </div>

        {/* Right Section: All Tasks */}
        <div className="lg:col-span-1">
          <AllTask data={data} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
