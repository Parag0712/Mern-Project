import React from 'react'
import { AnimationContainer, Container } from '../Components'

import asset6 from '../assets/asset 6.svg';
import asset7 from '../assets/asset 7.svg';
import asset8 from '../assets/asset 8.svg';
import asset9 from '../assets/asset 9.png';
import asset10 from '../assets/asset 10.svg';
import asset11 from '../assets/asset 11.svg';
import asset12 from '../assets/asset 12.svg';
import asset13 from '../assets/asset 13.svg';
import Card from '../Components/Common/Card';
function Service() {
  return (
    <Container>
      <AnimationContainer>
      <section style={{ backgroundColor: '#FBFBFB', borderRadius: '10px', padding: '50px 0px', marginTop: "50px" }}>
        <section className="card-details flex-colum container">
          <div className="card-section-header">
            <h2>All Services</h2>
          </div>
          <div className="cards-section">
            {/* Card components */}
            <Card serviceImgUrl={asset10}
              serviceName="web Dev"
              serviceDetails="lorem"
            >

            </Card>

            <div className="card">
              <div className="card-img">
                <img src={asset9} alt="" />
              </div>
              <div class="card-details">
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
      </AnimationContainer>
    </Container >
  )
}

export default Service