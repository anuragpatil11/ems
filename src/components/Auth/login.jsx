// import React from "react";
// import { useState } from "react";

// const login = ({ handleLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     // console.log("Form submitted", email, password);
//     handleLogin(email, password); // This is the function that is passed from the parent component

//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="h-screen w-screen flex items-center justify-center">
//       <div className="border-2 rounded-xl border-emerald-300 p-20">
//         <form
//           onSubmit={(e) => submitHandler(e)}
//           className="flex flex-col items-center justify-center"
//         >
//           <input
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             required
//             className="text-white bg-transparent rounded-full border-2 px-5 py-3 text-xl placeholder:text-white"
//             type="email"
//             placeholder="Enter your email"
//           />
//           <input
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             required
//             className="text-white bg-transparent rounded-full border-2 px-5 py-3 text-xl placeholder:text-white mt-5"
//             type="password"
//             placeholder="Enter password"
//           />
//           <button
//             required
//             className="text-white mt-5 border-none bg-emerald-500 rounded-full px-5 py-3 text-xl"
//           >
//             Log in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default login;
import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password); // Call the handleLogin function passed from the parent component

    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#1E1E30]">
      <div className="border-2 rounded-xl border-emerald-300 p-12 bg-[#2A2A3E] shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Login
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col items-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-white bg-transparent rounded-full border-2 border-emerald-500 px-5 py-3 text-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-white bg-transparent rounded-full border-2 border-emerald-500 px-5 py-3 text-xl placeholder:text-gray-400 mt-5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
            type="password"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="text-white mt-5 border-none bg-emerald-500 rounded-full px-5 py-3 text-xl hover:bg-emerald-600 transition duration-200"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
