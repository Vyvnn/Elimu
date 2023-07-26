// // import { createContext, useReducer, useEffect } from "react";
// // export const AuthContext = createContext();

// // export const authReducer = (state, action) => {

// //   switch (action.type) {
// //     case "LOGIN":
// //       return { currentUser: action.payload };

// //     case "LOGOUT":

// //       return { currentUser: null };

// //     default:

// //       return state;
// //   }

// // };

// // export const AuthContextProvider = ({ children }) => {

// //   const [state, dispatch] = useReducer(authReducer, { currentUser: null });

// //   useEffect(() => {
// //     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
// //     if (currentUser) {

// //       dispatch({ type: "LOGIN", payload: currentUser });
// //     }

// //   }, []);
// //   return (
// //     <AuthContext.Provider value={{ ...state, dispatch }}>

// //       {children}

// //     </AuthContext.Provider>

// //   );

// // };
// import React, { createContext, useReducer, useEffect } from "react";
// import { authReducer } from "./AuthContext"; // Import the authReducer

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, { currentUser: null });

//   // Use useEffect to initialize the authentication state from localStorage (if available)
//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     if (currentUser) {
//       dispatch({ type: "LOGIN", payload: currentUser });
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// import React, { useContext } from "react";
// import { AuthContext } from "./path/to/AuthContext";

// const MyComponent = () => {
//   const { currentUser, dispatch } = useContext(AuthContext);

//   // Use currentUser to determine if the user is logged in and show relevant content

//   return <div>{currentUser ? "Welcome, " + currentUser.name : "Please log in."}</div>;
// };