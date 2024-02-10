import React from 'react'
import "./card.css"
import Button from '../Admin/Button'
import { dataService } from '../../Backend/service'
import { useDispatch } from 'react-redux'
import { updateService } from '../../App/updateSlice'
import { useNavigate } from 'react-router-dom'
// import { updateService } from '../../App/updateSlice'


function Card({ serviceImgUrl, serviceName, serviceDetails, id = "", img = true, button = false, ...props }) {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(updateService())        
        dataService.deleteService(id)
        .then((data)=>{
            console.log(data);
        }).catch((error)=>{
            console.log(error);
        }).finally(()=>{
        })
    }

    const handleEdit = () => {
        navigate(`/editForm/${id}`)
         // Assuming the route for editing a service is '/edit/:id'
    };
    return (
        <div className="card">
            {img &&
                <div className="card-img">
                    <img src={serviceImgUrl || ""} alt="" />
                </div>
            }
            <div className="card-details">
                <h3>{serviceName}</h3>
                <p>{serviceDetails}</p>
            </div>
            {button &&
                <div className='btn-container'>
                    <Button name="Edit" color='green' onclick={handleEdit}></Button>
                    <Button name="Delete" color='red' onclick={handleDelete}></Button>
                </div>
            }
        </div>
    )
}

export default Card