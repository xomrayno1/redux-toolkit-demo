import { createStore } from "redux";
import rootReducer from './reducer/index'
import {configureStore} from '@reduxjs/toolkit'

// const store = createStore(rootReducer, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = configureStore({
    reducer : rootReducer
})
export default store;