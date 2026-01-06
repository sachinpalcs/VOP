import React from 'react';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />   
                
    </Route>
  )
)
  

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
  
}

export default App;