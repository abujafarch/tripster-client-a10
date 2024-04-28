import React from 'react'
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Router/Router.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
