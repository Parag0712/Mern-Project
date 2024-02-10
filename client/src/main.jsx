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
import Protected from './Components/Header/Protected.jsx'
import ProtectedAdmin from './Components/Header/ProtectedAdmin.jsx'

import AdminUser from './pages/AdminUser.jsx'
import AdminContact from './pages/AdminContact.jsx'
import AdminService from './pages/AdminService.jsx'
import AdminPage from './pages/AdminPage.jsx'
import AdminForm from './pages/AdminForm.jsx'
import AdminEditPage from './pages/AdminEditPage.jsx'
import AdminAdd from './pages/AdminAdd.jsx'


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
      <Route path='login' element={

        <Protected authentication={false}>
          <Login />
        </Protected>
      } />
      <Route path='register' element={

        <Protected authentication={false}>
          <Register />
        </Protected>
      } />
      <Route path='about' element={<About />} />
      <Route path='service' element={<Service />} />
      <Route path='contact' element={<Contact />} />
      
      <Route path='admin' element={<ProtectedAdmin><AdminPage /></ProtectedAdmin>} />
      <Route path='users' element={<ProtectedAdmin> <AdminUser /> </ProtectedAdmin>} />
      <Route path='adminservice' element={<ProtectedAdmin> <AdminService /> </ProtectedAdmin>} />
      <Route path='admincontact' element={<ProtectedAdmin><AdminContact /></ProtectedAdmin>} />
      <Route path='adminform' element={<ProtectedAdmin><AdminAdd /></ProtectedAdmin>} />
      <Route path='editForm/:id?' element={<ProtectedAdmin><AdminEditPage /> </ProtectedAdmin>} />
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
