import React from 'react'
import Card from '../Components/Common/Card'
import { AnimationContainer, Container } from '../Components'
import { NavLink } from 'react-router-dom'

function AdminPage() {
  return (
    <Container>
      <AnimationContainer>
        <section style={{ borderRadius: '10px', padding: '50px 0px', marginTop: "50px" }}>
          <section className="card-details flex-colum container">
            <div className="card-section-header">
              <h2 style={{ textAlign: "center" }}>All Features</h2>
            </div>
            <div className="cards-section">
              {/* Card components */}
              <NavLink to="/users">
                <Card img="false"
                  serviceName="Users"
                  serviceDetails="authentication"
                >
                </Card>
              </NavLink>
              <NavLink to="/adminservice">
                <Card img="false"
                  serviceName="Service"
                  serviceDetails="Other"
                >
                </Card>
              </NavLink>
              <NavLink to="/adminform">
                <Card img="false"
                  serviceName="Add Service"
                  serviceDetails="Other"
                >
                </Card>
              </NavLink>
            </div>
          </section>
        </section>
      </AnimationContainer>
    </Container >
  )
}

export default AdminPage