import React, { useEffect, useState } from 'react';
import './adminuser.css'
import TableRow from '../Components/Admin/TableRow';
import Container from '../Components/Common/Container';
import { AuthServices } from '../Backend/auth';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, updatedUser } from '../App/updateSlice';


function AdminUser() {
    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.update
    })
    const [users,setUsers] = useState([])

    useEffect(()=>{
        AuthServices.getAllUser()
        .then((data)=>{
            setUsers(data.data.users);
            console.log(data.data.users);
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{  
            dispatch(updatedUser())
        })
    },[data.status])

    return (
        <Container>
            <div className='adminUser'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((value)=>(
                                <TableRow key={value._id} id={value._id}
                                name={value.username} email={value.email} phone={value.number} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
}

export default AdminUser;
