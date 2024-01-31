import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './App/store.js'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx'

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <AnimatePresence mode="wait">
          <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <App />
          </motion.div>
        </AnimatePresence>
      }
    >
      {/* Here Other Object */}
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} f />
      <Route path='register' element={<Register />} />
      <Route path='about' element={<About />} />
      <Route path='service' element={<Service />} />
      <Route path='contact' element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>

)
