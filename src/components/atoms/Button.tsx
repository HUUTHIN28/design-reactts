import React from "react";
import { dataMission } from "../../pages/mission/layout";

type TypeButton = Pick<dataMission, "open">;
const Button = (props: any) => {
  const { open }: TypeButton = props;
  return <div>{open ? "Button1" : "Button2"}</div>;
};

export default Button;
