// import React, { useState } from "react";

// const Header = () => {
//   // console.log(data);
//   // const [username, setUsername] = useState(" ");
//   // if (!data) {
//   //   setUsername(" Admin");
//   // } else {
//   //   setUsername(data.first_name);
//   // }
//   const logOutUser = () => {
//     localStorage.setItem("loggedInUser", "");
//     window.location.reload();
//   };
//   return (
//     <div className="flex items-end justify-between text-white">
//       <h1 className="text-2xl font-medium">
//         Hello <br />
//         <span className="text-3xl font-semibold">username 🙏</span>
//       </h1>
//       <button
//         onClick={logOutUser}
//         className="bg-[#CD1818] px-4 py-3 rounded-full"
//       >
//         Log out
//       </button>
//     </div>
//   );
// };

// export default Header;
import React from "react";

const Header = ({ data }) => {
  const username = data?.first_name || "Admin";

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 px-6 rounded-lg shadow-lg">
      {/* Welcome Section */}
      <div>
        <h1 className="text-xl md:text-2xl font-light">Hello 👋</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mt-1">
          {username}
        </h2>
      </div>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm md:text-base shadow-md focus:outline-none focus:ring-4 focus:ring-red-300 transition-all"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
