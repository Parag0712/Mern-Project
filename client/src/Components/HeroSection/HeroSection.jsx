import React from 'react';
import { Link } from 'react-router-dom';
import  downArrowSvg from '../../assets/down arrow.svg'
import  heroImg from '../../assets/hero img.svg'
import  ss1Img from '../../assets/Screenshot 2023-12-08 123827.png'
import  ss3Img from '../../assets/Screenshot 2023-12-08 130709.png'
import  asset5 from '../../assets/asset 5.png'
import "./herosection.css"

function HeroSection() {
    return (
        <>
            <section className="hero-section container">
                <div className="hero-section-left">
                    <h1>Meet The Blockchain That <span className="blue-text">Works For You</span>.</h1>
                    <p>Built to create scalable decentralized application systems for a multitude of business processes.</p>
                    <button className="primary-button">Trade Shubh</button>
                    <Link to="" className="down-arrow"><img src={downArrowSvg} alt="" /></Link>
                </div>
                <div className="hero-section-right">
                    <img src={heroImg} alt="" />
                </div>
            </section>
            <section className="container details-section flex">
                <div className="details-section-left flex-colum">
                    <h2>Bringing Intent To The <br />Ethereum Blockchain</h2>
                    <p>Shubh combines the best practices of Plasma Sidechains with current blockchain technologies. This enables
                        us to build enterprise grade software with a higher degree of security, speed, and scalability beyond
                        what is currently available.</p>
                </div>
                <div className="details-section-right flex-colum">
                    <div className="small-card small-card-left flex">
                        <img src={ss1Img} alt="" height="50px" />
                        <h4>Scalable like never Before.</h4>
                    </div>
                    <div className="small-card small-card-right flex">
                        <img src={ss3Img} alt="" height="50px" />
                        <p>Secure on Every Level</p>
                    </div>
                    <div className="small-card small-card-left flex">
                        <img  alt={asset5} src={asset5} className="img-back" height="50px" />
                        <h4>Asset and data Automation</h4>
                    </div>
                </div>
            </section></>
    );
}

export default HeroSection;
