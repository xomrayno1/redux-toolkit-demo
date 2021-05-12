import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {addItem} from '../../redux/reducer/todo/todoReducer'
function TodoInput(props) {
    const dispatch = useDispatch();
    function handleAddItem(){
        dispatch(addItem(addRef.current.value))
        addRef.current.value = ''
    }
    const addRef = useRef();
    return (
        <div>
            <input type="text" ref={addRef} name="item"/> 
            <button onClick={handleAddItem}>Add</button>
        </div>
    );
}

export default TodoInput;