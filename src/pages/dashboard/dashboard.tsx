import React from "react";
import { useLoaderData } from "react-router-dom";

type Props = {};

const Dashboard = (props: Props) => {
  try {
    const loaderData = useLoaderData();
    console.log("loaderData", loaderData);
  } catch (err) {
    console.log(err);
  }

  return <div>dashboard</div>;
};

export default Dashboard;
