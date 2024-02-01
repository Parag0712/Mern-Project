import React, { useEffect, useState } from 'react'
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
import { dataService } from '../Backend/service';


function Service() {
  const [service, setService] = useState([]);
  useEffect(() => {
    dataService.getService().then((data) => {
      setService(data.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  "65b64e563d713fa346ca65a6"
  return (
    <Container>
      <AnimationContainer>
        <section style={{ borderRadius: '10px', padding: '50px 0px', marginTop: "50px" }}>
          <section className="card-details flex-colum container">
            <div className="card-section-header">
              <h2 style={{ textAlign: "center" }}>All Services</h2>
            </div> 
            <div className="cards-section">
              {/* Card components */}
              {
                service.map((value) => {
                  return <Card
                    key={value._id}
                    serviceImgUrl={value?.serviceImage?.imgUrl}
                    serviceName={value?.name}
                    serviceDetails={value?.category}
                  >
                  </Card>
                })
              }
            </div>
          </section>
        </section>
      </AnimationContainer>
    </Container >
  )
}

export default Service