import React, { useEffect, useState } from 'react';
import { fetchUser } from '../../redux/reducer/todo/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
function UserList(props) {
     //const [users,setUsers] = useState([]);
    const {users} = useSelector(state => state.user);
    const dispatch  = useDispatch();
    useEffect( ()=>{
        // const actionResult = dispatch(fetchUser());
        // const {data} =  unwrapResult(actionResult);
        // setUsers(data)
        dispatch(fetchUser())
    },[])
    function handleDeleteUser(id){
        console.log(id);
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {
                    users && users.map(item =>  (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><button onClick={()=>handleDeleteUser(item.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default UserList;