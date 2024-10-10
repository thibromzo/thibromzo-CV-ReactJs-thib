import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';


import './index.css'
import './Assets/CSS/Header.css'
import './Assets/CSS/Accueil.css'
import './Assets/CSS/Service.css'
import './Assets/CSS/Realisation.css'
import './Assets/CSS/Blog.css'
import './Assets/CSS/MeContacter.css'
import './Assets/CSS/MentionsLegales.css'
import './Assets/CSS/GitHub.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Accueil from './pages/Accueil.jsx'
import Service from './pages/Service.jsx'
import Realisation from './pages/Realisation.jsx'
import Blog from "./pages/Blog.jsx"
import Contact from "./pages/MeContacter.jsx"
import MentionsLegales from "./pages/MentionsLegales.jsx"
import GitHub from "./pages/GitHub.jsx"


const router = createBrowserRouter([
  {
    path: '/',
    element: ( 
      <div>
      <Header/>
      <Accueil />
      <Footer/>
      </div>

  ),
  },
  {
    path: "/Service",
    element: (
    <div>
      <Header/>
      <Service/>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/Realisation",
    element: (
    <div>
      <Header/>
      <Realisation/>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/Blog",
    element: (
    <div>
      <Header/>
      <Blog/>
      <Footer/>
      </div>
    ),
  },
  {
    path: "/MeContacter",
    element: (
    <div>
      <Header/>
      <Contact />
      <Footer/>
      </div>
    ),
  },
  {
    path: "/MentionsLegales",
    element: (
    <div>
      <Header/>
      <MentionsLegales />
      <Footer/>
      </div>
    ),
  },
  {
    path: "/GitHub",
    element: (
      <GitHub></GitHub>
    )
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

