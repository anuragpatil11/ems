// import React, { useContext, useEffect, useState } from "react";
// import Login from "./components/Auth/login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
// import { AuthContext } from "./context/AuthProvider";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loggedInUserData, setLoggedInUserData] = useState(null);
//   const authData = useContext(AuthContext);
//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//       setUser(JSON.parse(loggedInUser).role);
//       setLoggedInUserData(JSON.parse(loggedInUser).data);
//     }
//   }, []);

//   const handleLogin = (email, password) => {
//     if (authData) {
//       const employee = authData.employees.find(
//         (emp) => emp.email === email && emp.password === password
//       );
//       if (employee) {
//         setUser("employee");
//         setLoggedInUserData(employee);
//         localStorage.setItem(
//           "loggedInUser",
//           JSON.stringify({ role: "employee", data: employee })
//         );
//       }
//     } else if (email == "admin@example.com" && password == "123") {
//       setUser("admin");
//       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin} /> : " "}
//       {user === "admin" ? (
//         <AdminDashboard />
//       ) : user === "employee" ? (
//         <EmployeeDashboard data={loggedInUserData} />
//       ) : null}
//     </>
//   );
// };

// export default App;

import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // Load user from localStorage on component mount
  useEffect(() => {
    const loggedInUser = getLocalStorage("loggedInUser");
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    // Check for admin credentials
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      setLocalStorage("loggedInUser", { role: "admin" });
    }
    // Check for employee credentials
    else if (authData && authData.employees) {
      const employee = authData.employees.find(
        (emp) => emp.email === email && emp.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        setLocalStorage("loggedInUser", { role: "employee", data: employee });
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard data={loggedInUserData} />}
    </>
  );
};

export default App;
