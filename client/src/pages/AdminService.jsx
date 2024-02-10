import React, { useDebugValue, useEffect, useState } from 'react'
import { AnimationContainer, Container } from '../Components'
import { NavLink, useNavigate } from 'react-router-dom'
import Card from '../Components/Common/Card'
import Button from '../Components/Admin/Button'
import { dataService } from '../Backend/service'
import { useDispatch, useSelector } from 'react-redux'
import { loadingStart, loadingStop } from '../App/loadingSlice'
import { updateUser, updatedService } from '../App/updateSlice';


function AdminService() {
    const [services, setServices] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // HandleAddService
    const handleAddService = () => {
        navigate("/adminform");
    };

    const data = useSelector((state) => {
        return state.update
    })
    console.log(data);

    useEffect(() => {
        dispatch(loadingStart())
        dataService.getService().
            then((data) => {
                setServices(data.data)
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                dispatch(updatedService())
                dispatch(loadingStop())
            })
    }, [data.serviceStatus])

    return (
        <Container>
            <AnimationContainer>
                <section style={{ borderRadius: '10px', padding: '50px 0px', marginTop: "50px" }}>
                    <section className="card-details flex-colum container">
                        <div className="card-section-header">
                            <h2 style={{ textAlign: "center" }}>All Service</h2>
                        </div>

                        <div >
                            <Button name="Add Service" onclick={handleAddService} color="white"></Button>
                        </div>
                        <div className="cards-section">
                            {/* Card components */}
                            {
                                services.map((value) => {
                                    console.log(value);
                                    return <Card
                                        key={value?._id}
                                        id={value?._id}
                                        button="true"
                                        serviceImgUrl={value?.serviceImage?.imgUrl}
                                        serviceName={value?.name}
                                        serviceDetails={value?.price}
                                    >
                                    </Card>
                                })
                            }
                            {/* </NavLink> */}
                        </div>
                    </section>
                </section>
            </AnimationContainer>
        </Container >
    )
}

export default AdminService