import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, createBrowserRouter,Routes, RouterProvider } from 'react-router-dom'
import Historial from './Components/Historial.jsx'

const route = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/historial",
    element: <Historial/>

  }

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
