import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { Outlet } from 'react-router-dom';
import Service from './pages/Service';
import { Header, Loading } from './Components';
import axios from 'axios';
import Footer from './Components/Footer/Footer';
import { AuthServices } from './Backend/auth';
import { useDispatch, useSelector } from 'react-redux'
import authSlice, { login, logout, updateAvatar } from './App/authSlice';
import { loadingStart, loadingStop } from './App/loadingSlice';
import { useState } from 'react';
import "./app.css"
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// App 
//Entry Point 
function App() {
  const [serverError, setServerError] = useState();

  const loading = useSelector((state) => {
    return state.loading;
  });


  const controls = useAnimation();
  useEffect(() => {
    // Run the animation whenever the component renders or loading state changes
    controls.start({ opacity: loading.loading ? 0 : 1 });
  }, [loading.loading, controls]);

  const dispatch = useDispatch()
  useEffect(() => {
    // Loading Start
    dispatch(loadingStart())
    AuthServices.getUserData().
      then((data) => {
        if (data) {
          const userData = data.data.user;
          const avatarUrl = userData.avatar;
          dispatch(updateAvatar({avatarUrl}))
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      }).catch((error) => {
        setServerError(error);
      }).finally(() => {
        dispatch(loadingStop());
      })
  }, []);
  return (
    <div>
      

      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      {loading.loading && <Loading></Loading>}
      <motion.main
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={loading.loading ? 'hidden' : ''}>

        <Header />
        <Outlet />
        <Footer />
      </motion.main>
    </div>
  )
}

export default App