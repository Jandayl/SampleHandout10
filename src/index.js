import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root'
import Subjects from './pages/Subjects';
import Home from './pages/Home';
import SubjectDetail from './pages/SubjectDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'subjects',
        element: <Subjects />
      },
      {
        path: '/',
        element: <Home />
      },{
        path: 'subjects/:code',
        element: <SubjectDetail />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);