import { createContext } from "react";

// Create the authentication context
export const AuthContext = createContext();

// Authentication reducer function
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { currentUser: action.payload };

    case "LOGOUT":
      return { currentUser: null };

    default:
      return state;
  }
};
