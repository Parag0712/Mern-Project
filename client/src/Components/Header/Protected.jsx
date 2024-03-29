import React, { useEffect } from 'react'
import { useSelector, } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();

    // AuthStatus   
    const authStatus = useSelector((state) => {
        return state.auth;
    });

    useEffect(() => {
        if (authentication && authStatus.status !== authentication) {
            navigate('/signin')
        } else if (!authentication && authStatus.status !== authentication) {
            navigate('/')
        }
    }, [authStatus.status, authStatus, navigate, authentication])

    return <>{children}</>
}
