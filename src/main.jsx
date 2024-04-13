import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Recipies from './Recipies.jsx'

const router = createBrowserRouter([
  {
    path: '/plant-based-on-the-go/',
    element: <App />
  },
  {
    path: '/plant-based-on-the-go/recipies',
    element: <Recipies />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)
