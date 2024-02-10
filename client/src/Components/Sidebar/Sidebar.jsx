import React from 'react';
import './styles.css'; // Make sure to import your CSS file

function Sidebar() {
    return (
        <nav className="sidebar">
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src="https://t4.ftcdn.net/jpg/04/06/91/91/240_F_406919147_D3WsGjwXj1qmFNrei2ZFvBWwiueRcFmg.jpg" alt="logo" />
                    </span>
                    <div className="text header-text">
                        <span className="main">Sidebar</span>
                        <span className="sub">Component</span>
                    </div>
                </div>
                <i className="bx bx-chevron-right toggle"></i>
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li className="search-bar">
                            <i className="bx bx-search icons"></i>
                            <input type="search" placeholder="Search..." />
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-home-alt icons"></i>
                                <span className="text nav-text">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-bar-chart-alt-2 icons"></i>
                                <span className="text nav-text">Revenue</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-bell icons"></i>
                                <span className="text nav-text">Notifications</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-pie-chart-alt icons"></i>
                                <span className="text nav-text">Analytics</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-heart icons"></i>
                                <span className="text nav-text">Likes</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-wallet-alt icons"></i>
                                <span className="text nav-text">Wallets</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <li className="nav-link">
                        <a href="#">
                            <i className="bx bx-log-out icons"></i>
                            <span className="text nav-text">Log Out</span>
                        </a>
                    </li>
                    <li className="mode">
                        <div className="moon-sun">
                            <i className="bx bx-moon icons moon"></i>
                            <i className="bx bx-sun icons sun"></i>
                        </div>
                        <span className="mode-text text">Dark Mode</span>
                        <div className="toggle-switch">
                            <span className="switch"></span>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
