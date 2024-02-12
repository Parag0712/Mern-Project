import React from 'react'
import './bigfeature.css'

import asset6 from '../../assets/asset 6.svg';
import asset7 from '../../assets/asset 7.svg';
import asset8 from '../../assets/asset 8.svg';
import asset9 from '../../assets/asset 9.png';
import asset10 from '../../assets/asset 10.svg';
import asset11 from '../../assets/asset 11.svg';
import asset12 from '../../assets/asset 12.svg';
import asset13 from '../../assets/asset 13.svg';
import asset14 from '../../assets/asset 21.svg';
import asset15 from '../../assets/asset 23.svg';

import Container from '../Common/Container';

function BigFeature() {
    return (
        <>
            <Container>

                {/* First section */}
                <section className="big-feature container flex">
                    <div className="big-feature-left">
                        <img src={asset6} alt="" />
                    </div>
                    <div className="big-feature-right flex-colum">
                        <h3>A New Era of Collaboration and Innovation.</h3>
                        <p>Node selection enables a decentralized network of validators to participate in the generation of blocks
                            and the flow of data between them. By collecting an organization's shared transactional data from
                            multiple sources we eliminate data duplication and provide data integrity with a single source of truth.
                        </p>
                    </div>
                </section>

                {/* Second section */}
                <section className="big-feature container flex flex-reverse">
                    <div className="big-feature-left">
                        <img src={asset7} alt="" />
                    </div>
                    <div className="big-feature-right flex-colum">
                        <h3>A BlockChain Solution For Every Industry.</h3>
                        <p>Shubh allows anyone to create scalable DApps while ensuring superior user experience in a secure and
                            decentralized manner.</p>
                        <p>This is done by allowing cross-chain linking for leveraging DApps on our side chain that gets secured
                            through Plasma chains. Thus, Shubh allows the creation of DApps that can leverage its own network. The
                            scalability allows us to fulfill any of the upcoming generation's requirements. </p>
                    </div>
                </section>
            </Container>
            <section className="email-section-background">
                <section className="email-section container flex">
                    <div className="email-section-left flex-colum">
                        <h2>Be an early adopter</h2>
                        <p>Early movers gain an advantage, join our network now to maximize your returns.</p>
                    </div>
                    <div className="email-section-right">
                        <div className="email-input">
                            <input type="text" placeholder="Enter your email address" />
                            <button className="email-btn">Get in Touch</button>
                        </div>
                    </div>
                </section>
            </section>

            <section className="Ethereum-section container">
                <div className="Ethereum-section-left-up flex-colum">
                    <h2>Ethereum Made <br /><span className="blue-text">Efficient.</span></h2>
                    <h3>Outcome-Driven Network Design That Enable Blockchains to Deliver Results</h3>
                    <p>The Shubh platform will use a Proof-of-Stake (PoS) system to build and verify blocks. The PoS system will
                        require the generation of blocks from approved transactions and the resulting staking of SHUBH tokens.
                        This process ensures decentralization and also enables real-time validation of transaction requests and
                        state transitions, improving block generation time and throughput.</p>
                    <p>Shubh's unique design and development of applications accomplishing specific business goals benefit two
                        different kinds of users.</p>
                </div>
                <div className="Ethereum-section-right-up">
                    <img src={asset14} alt="" />
                </div>
            </section>
        </>
    )
}

export default BigFeature