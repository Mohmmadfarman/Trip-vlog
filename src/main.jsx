import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Service from './component/Service.jsx';
import Contact from './component/Contact.jsx';
import Err from './component/Err.jsx';

// Setting basename for the router
const createdata = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/service',
      element: <Service />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path:'*',
      element:<Err/>
    }
  ],
  {
    // Add the basename property here
    basename: '/Trip-vlog'
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createdata} />
  </StrictMode>,
);
