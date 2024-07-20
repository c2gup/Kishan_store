import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './LayOut.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'

import Our_Team from './components/Our_Team';


import Contact from './components/Contact';
import Sope from './components/Sope'
import SopePage from './components/SopePage';
import { Home } from 'lucide-react'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      
      <Route path='/' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Team' element={<Team />} />
      <Route path='Our_Team' element={<Our_Team />} />
      <Route path='Sope' element={<Sope />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='SopePage' element={<SopePage />} />
     
      
      
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
