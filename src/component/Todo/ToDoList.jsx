import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux'

function ToDoList(props) {
    const {todo} = useSelector(state => state.todo);
    return (
        <div>
            <TodoInput/>
            <ul>
                {
                    todo && todo.map((item,idx) => <TodoItem data={item} key={idx}/>)
                }
            </ul>
        </div>
    );
}

export default ToDoList;