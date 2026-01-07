import React from 'react';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
                
    </Route>
  )
)
  

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;