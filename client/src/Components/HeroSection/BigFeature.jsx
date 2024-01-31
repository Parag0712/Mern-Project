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

                {/* Third section */}
                <section style={{ backgroundColor: '#FBFBFB', borderRadius: '10px', padding: '90px 0px' }}>
                    <section className="card-details flex-colum container">
                        <div className="card-section-header">
                            <h2>Built for the next generation <br />of business <span className="blue-text">challenges.</span></h2>
                        </div>
                        <div className="cards-section">
                            {/* Card components */}
                            <div className="card">
                                <div className="card-img">
                                    <img src={asset8} alt="" />
                                </div>
                                <div className="card-details">
                                    <h3>Scalability</h3>
                                    <p>Enables the blockchain to scale infinitely and prevents bloat in the main chain, which
                                        reduces its speed and cost of transacting.</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-img">
                                    <img src={asset9} alt="" />
                                </div>
                                <div className="card-details">
                                    <h3>Smooth Asset Transfer</h3>
                                    <p>Allows participants to have their assets and identity on multiple blockchains at once with no
                                        permission necessary from anyone else.</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-img">
                                    <img src={asset10} alt="" />
                                </div>
                                <div className="card-details">
                                    <h3>Proof-of-Stake Consensus</h3>
                                    <p>A Proof of Stake (PoS) consensus algorithm is like a democracy where validators' stake in the
                                        network decides which transactions will be processed.</p>
                                </div>
                            </div>


                            <div className="card">
                                <div className="card-img">
                                    <img src={asset11} alt="" />
                                </div>
                                <div className="card-details">
                                    <h3>Trustless Transactions</h3>
                                    <p>Our API or client-side software application let's merchants easily integrate with their
                                        current PoS systems to accept cryptocurrency payments. Allowing them information to all the
                                        transactions they have made.</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-img">
                                    <img src={asset12} alt="" />
                                </div>
                                <div className="card-details">
                                    <h3>Speed</h3>
                                    <p>The transactions performed using Shubh sidechain are fast and efficient. This is done by
                                        avoiding the need for processing on a single chain and hence preventing bloat.</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-img">
                                    <img src={asset13} alt="" />
                                </div>
                                <div className="card-details">
                                    <h3>Low Cost</h3>
                                    <p>Minimal hardware usage, low processing requirements on the main chain, and bloat prevention
                                        allows Shubh to have minuscule transaction fees.</p>
                                </div>
                            </div>
                        </div>
                    </section>
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
                <div className="card pointer-event-disable">
                    <div className="card-img">
                        <img src="/assets/asset 22.svg" alt="" />
                    </div>
                    <div className="card-details">
                        <h3>Business Owners</h3>
                        <p>Businesses will be able to utilize blockchain technology for seamless transactions without having to
                            worry about the long wait times and high transaction costs. This should facilitate faster exchanges
                            which were not possible at scale before.</p>
                    </div>
                </div>
                <div className="card pointer-event-disable">
                    <div className="card-img">
                        <img src={asset15} alt="" />
                    </div>
                    <div className="card-details">
                        <h3>Investors</h3>
                        <p>Investors will be able to use their cryptocurrencies within the Shubh ecosystem for trading. The PoS
                            system to make profitable trades via faster cheaper crypto transactions. This is possible while
                            still maintaining its decentralized features.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BigFeature