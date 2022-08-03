import React from "react";
import { store } from "../Redux/store";
import { useSelector } from "react-redux/es/exports";
import { Navigate } from "react-router-dom";
import {useNavigate} from  'react-router-dom'
import { useLocation } from "react-router-dom";

const AuthWrappers = ({ children }) => {
  const authStatus = useSelector((store) => store.authReducer.auth);
  console.log("authStatus", authStatus);

  const location= useLocation();
  const navigate= useNavigate();
  if (!authStatus) {
    return <Navigate to="/login" replace={true} state={location} />;
    
  }
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export { AuthWrappers };
