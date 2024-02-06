import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  Component: any;
};
const token = localStorage.getItem("access_token");
export const Protected = ({ Component }: Props) => {
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  return Component;
};
export const ProtectedMain = ({ Component }: Props) => {
  if (false) {
    return <Navigate to="/log-in" replace />;
  }
  return Component;
};
