import { createAction, createReducer } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'

const updateItem = createAction('updateItem');
const isErrorAction = (action) => {
    return action.type.endsWith('FAIL')
}
const initialState = {
    todo : [{id : 1, name : 'Work'}]
}
const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const {payload} = action;
            return {
                    ...state, 
                    todo: [...state.todo, 
                    {id: Math.max(...state.todo.map(item => item.id)) + 1, name: payload}
                ]
            }
        },
        deleteItem: (state, action) => {
            const {payload} = action;
            const {todo} = state;
            const idx = todo.findIndex(item => item.id == payload);
            return {
                ...state,
                todo: [
                    ...state.todo.slice(0, idx),
                    ...state.todo.slice(idx + 1)
                ]
            }
        },
    },
    extraReducers : builder => { // xu ly 1 action khac
        builder
            //neu action trùng nhiều
            // .addMatcher(isErrorAction, (state,action) => {
            //     return {    //boolean
            //         ...state
            //     }
            // })
            .addCase(updateItem, (state, action) => {
                return {
                    ...state
                }
            })
            .addDefaultCase(state => { // add case default
                return {
                    ...state
                }
            })
    }

});
const todoReducer = todoSlice.reducer;
export const {addItem, deleteItem}  = todoSlice.actions;
//reducer redux tookit cách 1
// const todoReducer = createReducer(initialState, {
//     'ADD_ITEM': (state,action) => {
//         const {payload} = action;
//         return {
//                 ...state, 
//                 todo: [...state.todo, 
//                 {id: Math.max(...state.todo.map(item => item.id)) + 1, name: payload}
//             ]
//         }
//     },
//     'DELETE_ITEM': (state,action) => {
//         const {payload} = action;
//         const {todo} = state;
//         const idx = todo.findIndex(item => item.id == payload);
//         return {
//             ...state,
//             todo: [
//                 ...state.todo.slice(0, idx),
//                 ...state.todo.slice(idx + 1)
//             ]
//         }
//     }
// });
//reducer redux tookit cách 2

// const todoReducer = createReducer(initialState, builder => {
//     builder
//         .addCase('ADD_ITEM', (state, action) => {
//             const {payload} = action;
//             return {
//                 ...state, 
//                 todo: [...state.todo, 
//                     {id: Math.max(...state.todo.map(item => item.id)) + 1, name: payload}
//                 ]
//             }
//         })
//         .addCase('DELETE_ITEM', (state, action)=>{
//             const {payload} = action;
//             const {todo} = state;
//             const idx = todo.findIndex(item => item.id == payload);
//             return {
//                 ...state,
//                 todo: [
//                     ...state.todo.slice(0, idx),
//                     ...state.todo.slice(idx + 1)
//                 ]
//             }
//         })
// });

//reducer redux

// const todoReducer = (state = initialState, action)=>{
//     const {type, payload} = action;
//     switch(type){
//         case 'ADD_ITEM':
//             return {
//                 ...state, 
//                 todo: [...state.todo, 
//                     {id: Math.max(...state.todo.map(item => item.id)) + 1, name: payload}
//                 ]
//             }
//         case 'DELETE_ITEM':
//             const {todo} = state;
//             const idx = todo.findIndex(item => item.id == payload);
//             return {
//                 ...state,
//                 todo: [
//                     ...state.todo.slice(0, idx),
//                     ...state.todo.slice(idx + 1)
//                 ]
//             }
//         default:
//             return state
//     }
// }
export default todoReducer;