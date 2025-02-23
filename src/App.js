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
import ThankYouPage from './components/ThankYou/ThankYouPage';
import Footer from './screens/footer';
import Header from './screens/header';
import facebookPixelService from './services/facebookPixelService';
import { useEffect } from 'react';
import VistacornerTest from './screens/VistaCornerTest';
// import facebookPixel from './pixels/facebookPixel';


// facebookPixel.init("1072641991236564");
// facebookPixel.track("PageView");

const App = () => {

  useEffect(() => {
    facebookPixelService.init();
 
  }, []);

 


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
      path: "/VistacornerTest",
      element: <VistacornerTest />
    },
    {
      path: "/Universalsquare",
      element: <Universalsquare />
    },
    {
      path: "/Featured",
      element: <Featured />
    },
    {
      path: "/thankYou",
      element: <ThankYouPage />
    },
  ])
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App;
