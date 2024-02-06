import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

type Props = {};

const RootLayout = (props: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
