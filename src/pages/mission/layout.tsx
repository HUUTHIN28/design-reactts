import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

// const Layout = (props: Props) => {
//   const MissionContext = createContext({});
//   const [open, toggle] = useState(false);
//   return (
//     <MissionContext.Provider value={{ open, toggle }}>
//     {props.children}
//   </MissionContext.Provider>
//   )
// }

// export default Layout
export type dataMission = {
  open: boolean;
  toggle: (value: boolean) => void;
};
const LayoutMission = (props: Props) => {
  const [open, toggle] = useState(true);
  const data: dataMission = {
    open,
    toggle,
  };
  return (
    <>
      {React.Children.map(props.children, (child: any) =>
        React.cloneElement(child, data)
      )}
    </>
  );
};

export default LayoutMission;
