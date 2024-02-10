import React from 'react'
import Container from '../Common/Container'
import "./adminheader.css"
import { Link } from 'react-router-dom'
function AdminHeader() {
  return (
    <Container>    
        <nav className='admin-nav-bar'>
            <ul className='nav-bar'>
                <li><Link to="/admin/service">Service</Link></li>
                <li><Link to="/admin/users">Users</Link></li>
                <li><Link to="/admin/contact">Contact</Link></li>
            </ul>
        </nav>
    </Container>
  )
}

export default AdminHeader