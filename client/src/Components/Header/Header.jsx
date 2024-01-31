import { NavLink } from "react-router-dom"
import './Header.css'
import Container from "../Common/Container";
import { useState } from "react";


const status = true;
// NavItem
const navItem = [
    {
        name: "Home",
        href: "/",
        active: true,
    },
    {
        name: "About",
        href: "/about",
        active: status,
    },
    {
        name: "Service",
        href: "/service",
        active: status,
    },
    {
        name: "Register",
        href: "/register",
        active: status,
    },
    {
        name: "Login",
        href: "/login",
        active: status,
    },
];

const Header = () => {


    const [isMobile,setMobile] = useState(false);

    const toggleMenu =()=>{
        setMobile(!isMobile);
    }
    return (
        <Container>
            <header>
                <div className="container flex header">
                    <NavLink to="/">
                        <h1></h1>
                        <img src="https://shubh.network/static/media/logo.95ba76bb.svg" alt="" />
                    </NavLink>


                    <nav className={`nav-bar nav-links ${isMobile==true?"nav-bar-active":""}`} id="nav-links">
                        <ul className="flex" >
                            {
                                navItem.map(({ name, href, active }, index, array) => (
                                    <li key={name} className={`${active ? "" : "hidden"} hover-link`}>
                                        <NavLink to={href}>{name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <a href="#" className={`icon ${isMobile == true?"nav-bar-active":""}`} id="nav-toggle" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </a>
                </div>
            </header>
        </Container>
    )
}
export default Header