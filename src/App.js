import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Info from './pages/Info';
import Main from './pages/Main';
import Login from './pages/Login';


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/main',
      element: <Main />
    },
    {
      path: '/info/:id',
      element: <Info />
    }
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
