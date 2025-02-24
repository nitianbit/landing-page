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

// Layout component that conditionally renders the header
const Layout = ({ children, showHeader = true }) => {
  return (
    <>
      {showHeader && <Header />}
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  useEffect(() => {
    facebookPixelService.init();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Home /></Layout>
    },
    {
      path: "/Home",
      element: <Layout><Home /></Layout>
    },
    {
      path: "/Aboutus",
      element: <Layout><About /></Layout>
    },
    {
      path: "/Forbuyers",
      element: <Layout><Forbuyers /></Layout>
    },
    {
      path: "/Forbuildersdealers",
      element: <Layout><Forbuildersdealers /></Layout>
    },
    {
      path: "/Contactus",
      element: <Layout><Contactus /></Layout>
    },
    {
      path: "/Privacypolicy",
      element: <Layout><Privacypolicy /></Layout>
    },
    {
      path: "/Vistacorner",
      element: <Layout><Vistacorner /></Layout>
    },
    {
      path: "/VistacornerTest",
      element: <Layout showHeader={false}><VistacornerTest /></Layout>
    },
    {
      path: "/Universalsquare",
      element: <Layout><Universalsquare /></Layout>
    },
    {
      path: "/Featured",
      element: <Layout><Featured /></Layout>
    },
    {
      path: "/thankYou",
      element: <Layout><ThankYouPage /></Layout>
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;