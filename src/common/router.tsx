// import { Router } from "next/router";
import { Route, useRouteError } from "react-router-dom";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Protected, ProtectedMain } from "./protected";
import { getDashboard } from "../pages/dashboard/api";
import { getMission } from "../pages/mission/api";

const Mission = React.lazy(() => import("../pages/mission/Mission"));
const DashBoard = React.lazy(() => import("../pages/dashboard/dashboard"));
const BlogLayout = React.lazy(() => import("../pages/blog/layout"));
const ListBlog = React.lazy(() => import("../pages/blog/listBlog"));
const BlogId = React.lazy(() => import("../pages/blog/blogId"));
const RootLayout = React.lazy(() => import("../layout/rootLayout"));
const LogIn = React.lazy(() => import("../pages/auth/logIn"));
const Register = React.lazy(() => import("../pages/auth/register"));

type props = {
  path: string;
  element: JSX.Element;
  index?: boolean;
  child?: props[];
  // loader?: (value: any) => void;
};

const listRouter = [
  {
    path: "/",
    element: <ProtectedMain Component={<RootLayout />} />,
    child: [
      {
        path: "dashboard",
        element: <DashBoard />,
        index: true,
        // loader: getDashboard,
      },
      {
        path: "",
        element: <BlogLayout />,
        child: [
          {
            path: "list-blog",
            element: <ListBlog />,
            index: true,
            // loader: getMission,
          },
          {
            path: "blog-detail",
            element: <BlogId />,
          },
        ],
      },
      {
        path: "mission",
        element: <Mission />,
      },
    ],
  },
  {
    path: "log-in",
    element: <Protected Component={<LogIn />} />,
  },
  {
    path: "register",
    element: <Register />,
  },
];

export const HandleRecursiveList = (data: props[]) => {
  return data.map((item: props) =>
    item.child ? (
      <Route
        path={item.path}
        element={item.element}
        errorElement={<ErrorBoundary />}
      >
        {" "}
        {HandleRecursiveList(item.child)}{" "}
      </Route>
    ) : (
      <Route
        path={item.path}
        element={item.element}
        // loader={item.loader}
        errorElement={<ErrorBoundary />}
      />
    )
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(HandleRecursiveList(listRouter))
);

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}
