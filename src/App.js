import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/Aboutus';
import Forbuyers from './screens/Forbuyers';
import Forbuildersdealers from './screens/Forbuildersdealers';
import Contactus from './screens/Contactus';
import Privacypolicy from './screens/Privacypolicy';
import Vistacorner from './screens/Vistacorner';
import Universalsquare from './screens/Universalsquare';
import Featured from './screens/Featured';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Home",
      element: <Home />
    },
    {
      path: "/Aboutus",
      element: <About />
    },
    {
      path: "/Forbuyers",
      element: <Forbuyers />
    },
    {
      path: "/Forbuildersdealers",
      element: <Forbuildersdealers />
    },
    {
      path: "/Contactus",
      element: <Contactus />
    },
    {
      path: "/Privacypolicy",
      element: <Privacypolicy />
    },
    {
      path: "/Vistacorner",
      element: <Vistacorner />
    },
    {
      path: "/Universalsquare",
      element: <Universalsquare />
    },
    {
      path: "/Featured",
      element: <Featured />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;