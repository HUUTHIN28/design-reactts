import React, { createContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const ContextGlobal = (props: Props) => {
  const [open, toggle] = useState(false);
  const ContextGlobal = createContext({});
  return (
    <ContextGlobal.Provider value={{ open, toggle }}>
      {props.children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;
