import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../layout/Footer/Footer';
import Home from '../Pages/Home';
import Main from '../layout/Main/Main';
import ApartementsPage from '../Pages/ApartementsPage';
import About from '../Pages/About';
import PageNotFound from '../Pages/PageNotFound';

const HeaderFooterLayout = () => {
  return (
    <Main>
      <Navbar />
      <Outlet />
      <Footer />
    </Main>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    
    elementError: <PageNotFound />,
    children: [
      {
        path: "/kasa/",
        element: <Home />
      },
      {
        path: "/kasa/:id",
        element: <ApartementsPage />
      },
      {
        path: "/kasa/about",
        element: <About />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]);
