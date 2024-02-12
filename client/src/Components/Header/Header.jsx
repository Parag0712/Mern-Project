import { NavLink, useNavigate } from "react-router-dom"
import './Header.css'
import Container from "../Common/Container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateAvatar } from "../../App/authSlice";
import { AuthServices } from "../../Backend/auth";
import userImg from '../../assets/avatar1.jpg'

// const status = true;

const Header = () => {
    const user = useSelector((state) => {
        return state.auth.status;
    });

    const navigate = useNavigate();
    // NavItem
    const navItem = [
        {
            name: "Home",
            href: "/",
            active: user,
        },
        {
            name: "About",
            href: "/about",
            active: user,
        },
        {
            name: "Service",
            href: "/service",
            active: user,
        },
        {
            name: "Register",
            href: "/register",
            active: !user,
        },
        {
            name: "Login",
            href: "/login",
            active: !user,
        },
        {
            name: "logout",
            href: "/logout",
            active: user,
        },
    ];


    const auth = useSelector((state) => {
        return state.auth
    });
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        AuthServices.updateAvatar(selectedFile).then((data) => {
            const avatarUrl = data.data.avatar;
            dispatch(updateAvatar({ avatarUrl }));
        })
        // Optionally, you can submit the form automatically here
    };


    const logoutHandle = () => {
        AuthServices.logout().then((data) => {
            dispatch(logout())
            navigate("/");
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log("finally");
        })
        dispatch(logout);
    }

    const [isMobile, setMobile] = useState(false);

    //Toggle Menu
    const toggleMenu = () => {
        setMobile(!isMobile);
    }
    
    return (
            <header>
                <div className="container flex header">
                    <NavLink to="/">
                        <h1></h1>
                        <img src="https://shubh.network/static/media/logo.95ba76bb.svg" alt="" />
                    </NavLink>


                    <nav className={`nav-bar nav-links ${isMobile == true ? "nav-bar-active" : ""}`} id="nav-links">
                        <ul className="flex" >
                            {
                                navItem.map(({ name, href, active }, index, array) => {
                                    if (name !== "logout") {
                                        return <li key={name} className={`${active ? "" : "hidden"} hover-link`}>
                                            <NavLink to={href}>{name}</NavLink>
                                        </li>
                                    } else {
                                        return <li key={name} className={`${active ? "" : "hidden"} hover-link`}>
                                            <NavLink onClick={logoutHandle}>{name}</NavLink>
                                        </li>
                                    }
                                })
                            }
                            <li className={`user-name ${user == true ? "" : "hidden"}`}>
                                <form encType="multipart/form-data">
                                    <input type="file" id="inputField" hidden onChange={handleFileChange} />
                                </form>
                                <img src={auth?.avatarUrl?.imgUrl || userImg} alt="User" className="user-image-nav"
                                    accept="image/png, image/jpg, image/jpeg, image/gif"
                                    onClick={() => document.querySelector('#inputField').click()}
                                />
                                <p>{user == true? auth.userData?.username:"" }</p>
                            </li>
                            <li className={auth.userData?.isAdmin ? "" : "hidden"}>
                                <NavLink to="/admin">Admin</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <a href="#" className={`icon ${isMobile == true ? "nav-bar-active" : ""}`} id="nav-toggle" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </a>
                </div>
            </header>
    )
}
export default Header