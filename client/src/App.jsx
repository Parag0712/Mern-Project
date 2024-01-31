import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { Outlet } from 'react-router-dom';
import Service from './pages/Service';
import { Header, Loading } from './Components';
import axios from 'axios';
import Footer from './Components/Footer/Footer';
import { AuthServices } from './Backend/auth';
import {useDispatch,useSelector} from 'react-redux'
import authSlice, { login, logout } from './App/authSlice';
import { loadingStart, loadingStop } from './App/loadingSlice';
import { useState } from 'react';

// App 
//Entry Point 
function App() {
  const [serverError,setServerError] = useState();
  const loading = useSelector((state)=>{
    return state.loading;
  });
  const dispatch= useDispatch()  
  useEffect(()=>{
    // Loading Start
    dispatch(loadingStart())
    AuthServices.getUserData().
    then((data)=>{
      
      if(data){
        console.log("login");
      }else{
        dispatch(logout());
        console.log("helo");
      }
    }).catch((error)=>{
      setServerError(error);
    }).finally(()=>{
      dispatch(loadingStop());
    })

  },[])
  return (
    <div>
      { loading.loading && <Loading></Loading>}
      <main >
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}

export default App