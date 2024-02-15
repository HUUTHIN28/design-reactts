import React, { Suspense } from "react";
import "./App.css";

import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Mission from "./pages/mission/Mission";
import LogIn from "./pages/auth/logIn";
import { router } from "./common/router";
function App() {
  return (
    // <div>
    //   <BrowserRouter basename="/">
    //     <Routes>
    //       <Route path="/" element={<Dashboard />}></Route>
    //       <Route path="/mission" element={<Mission />}></Route>
    //       <Route path="/log-in" element={<LogIn />}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
