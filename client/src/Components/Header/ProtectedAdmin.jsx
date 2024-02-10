import React, { useEffect } from 'react'
import { useSelector, } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ProtectedAdmin({ children, authentication = true }) {
    const navigate = useNavigate();

    // AuthStatus   
    const authStatus = useSelector((state) => {
        return state.auth;
    });

    useEffect(() => {
        if (!authStatus?.userData?.isAdmin) {
            navigate('/')
        } 
    }, [authStatus.status, authStatus, navigate, authentication])

    return <>{children}</>
}
