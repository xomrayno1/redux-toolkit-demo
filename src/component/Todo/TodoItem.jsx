import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteItem} from '../../redux/reducer/todo/todoReducer'
function TodoItem({data, key}) {
    const dispatch  = useDispatch();
    function handleDeleteItem(id){
        dispatch(deleteItem(id))
    }
    return (
        <>
            <li key={key}>
                {data.name} 
                <button onClick={()=>handleDeleteItem(data.id)}>delete</button>
            </li>  
        </>
    );
}

export default TodoItem;