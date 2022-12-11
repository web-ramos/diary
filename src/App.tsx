import React from 'react';
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Contexts from "./pages/Contexts";
import { ListProject } from './components/Project/Project';
import styles from './App.module.css';

export default function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/contexts",
          element: <Contexts />,
        },
        {
          path: "/projects",
          element: <ListProject />,
        },        
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];


  let element = useRoutes(routes);

  return (
    <div className={styles.App}>
      {element}
    </div>
  );
}