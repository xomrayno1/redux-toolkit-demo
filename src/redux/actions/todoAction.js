import {createAction} from '@reduxjs/toolkit'

export const addItem = createAction('ADD_ITEM');
export const deleteItem = createAction('DELETE_ITEM');

// export const addItem = (data) => {
//     return {
//         type : 'ADD_ITEM',
//         payload : data
//     }
// }
// export const deleteItem = (data) => {
//     return {
//         type : 'DELETE_ITEM',
//         payload : data
//     }
// }
