import { combineReducers } from 'redux';
import todoReducer from './todo/todoReducer'
import userReducer from './todo/userSlice'
const rootReducer = combineReducers({
    todo : todoReducer,
    user : userReducer
})
export default rootReducer;