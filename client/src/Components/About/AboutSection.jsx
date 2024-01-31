import React from 'react'
import './about.css'

function About() {
    return (
        
            <section className="blockchain-dev container flex-colum">
                <div className="header-blockchain-dev flex-colum">
                    <h2>About Our <br /><span className="blue-text">Services</span></h2>
                    <h3>Transforming Industries with Innovative Solutions</h3>
                    <p>At Subh, we are dedicated to revolutionizing industries worldwide with innovative solutions tailored to meet the unique needs of our clients.</p>
                </div>
                <div className="blockchain-details flex">
                    <div className="blockchain-card">
                        <h3>Customized Software Development</h3>
                        <p>Our team specializes in developing customized software solutions to address specific business challenges. We leverage cutting-edge technologies to deliver scalable and efficient applications.</p>
                    </div>
                    <div className="blockchain-card">
                        <h3>Consultation and Advisory Services</h3>
                        <p>We offer consultation and advisory services to help businesses navigate the complexities of technology adoption and digital transformation. Our experts provide strategic guidance to drive growth and innovation.</p>
                    </div>
                    <div className="blockchain-card">
                        <h3>Implementation and Integration</h3>
                        <p>Shubh provides end-to-end implementation and integration services to seamlessly incorporate new technologies into existing infrastructure. We ensure smooth deployment and integration with minimal disruption.</p>
                    </div>
                    <div className="blockchain-card">
                        <h3>Continuous Support and Maintenance</h3>
                        <p>Our commitment extends beyond project delivery. We offer continuous support and maintenance services to ensure the optimal performance and reliability of our solutions, keeping your business operations running smoothly.</p>
                    </div>
                </div>
            </section>
        
    )
}

export default About