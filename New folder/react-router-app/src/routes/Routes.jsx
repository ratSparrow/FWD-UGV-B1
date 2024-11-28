import { createBrowserRouter } from "react-router-dom"
import Homepage from "../components/static/Homepage"
import MainLayout from "../layout/MainLayout"
import About from "../components/static/About"
import Contact from "../components/static/Contact"

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Homepage></Homepage>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },

      ]
    },
    {
      path: '/about',
      element: <div>About</div>
    },
    {
      path: '/contact',
      element: <div>Contact</div>
    },
  ])

  export default routes