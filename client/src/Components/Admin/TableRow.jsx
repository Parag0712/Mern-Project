import { useDispatch } from "react-redux";
import { AuthServices } from "../../Backend/auth";
import Button from "./Button";
import { updateUser } from "../../App/updateSlice";

function TableRow({ name, email, phone ,id}) {

    const dispatch = useDispatch();

    const handleDelete = ()=>{
        console.log(id);
        AuthServices.deleteAccount(id).
            then((data) => {
                console.log(data);
                dispatch(updateUser())
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td><Button 
            onclick={handleDelete}
            name="delete"></Button></td>
        </tr>
    );
}

export default TableRow