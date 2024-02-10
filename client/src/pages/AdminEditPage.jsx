import React, { useEffect, useState } from 'react'
import { dataService } from '../Backend/service'
import { useParams } from 'react-router-dom';
import AdminForm from './AdminForm';

function AdminEditPage() {
    const { id } = useParams();
    const [data,setData] = useState({})
    useEffect(() => {
        dataService.getSingleService(id)
        .then((data)=>{
            setData(data.data)
        }).catch((error)=>{
            console.log(error);
        })
    }, [])
    console.log(data);
    return (
        <AdminForm service={data} edit="true">
            
        </AdminForm>
    )
}

export default AdminEditPage