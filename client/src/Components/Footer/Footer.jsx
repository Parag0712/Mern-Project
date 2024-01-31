import React from 'react'

import "./footer.css"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <section className="subh-footer-background">
                <section className="subh-footer container">
                    <div className="col-1 flex-colum">
                        <div className="subfooter-img">
                            <img src="https://shubh.network/static/media/footer_logo.c9fd0b90.svg" alt="" />
                        </div>
                        <p>Shubh is a protocol and a framework for building</p>
                        <p>and connecting Ethereum-compatible blockchain networks</p>
                        <ul className="social_info flex">
                            <li>
                                <Link to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 flex-colum">
                        <h4>Quick Links</h4>
                        <ul className="flex-colum">
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="col-3 flex-colum">
                        <ul className="flex-colum">
                            <li><Link to="/">Whitepaper</Link></li>
                            <li><Link to="/">Ethereum</Link></li>
                            <li><Link to="/">Contact Us</Link></li>
                        </ul>
                    </div>
                </section>

                <footer className="end-footer">
                    <p>© 2022 Shubh Network Limited</p>
                </footer>
            </section>
        </>
    )
}

export default Footer