import { FC, useMemo } from 'react'
import type { RouteObject } from "react-router-dom"
import { useRoutes } from "react-router-dom"
import axios from 'axios'
import iconsSprite from './media/icons.svg'
import Layout from "./layouts/Layout/Layout"
import NoMatch from "./pages/NoMatch"
import Home from "./pages/Home"
import Contexts from "./pages/Contexts"
import { ListProject } from './components/Project/Project'
import styles from './App.module.css'
import { useDispatch } from 'react-redux'
import { setIconSprite } from './store/diarySlice'

const App: FC = () => {

  const dispatch = useDispatch()

  useMemo(() =>
    setIcons(iconsSprite, setIconSprite ), []
  )

  function setIcons (icons: string, dispatchHandler: any) {
    try {
      console.log('read icons');
      axios.get(icons)
        .then((response) => response.data.match(/id="[^"]+"/g))
        .then((arr) => arr.map((item: string) => {
          let _item = item.match(/("|')(.*?)\1/g)
          if (_item) return _item[0].replace(/"/g,'')
          return item
        }))
        .then((result) => dispatch(dispatchHandler(result)))
    } catch (error) {
      console.log(error)
    }
  }

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

export default App