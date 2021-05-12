import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getUsers} from '../../../api/userApi'
const initialState = {
    users : [],
    loading : false,
    error : ''
}                                                               //tham so truyen vao
export const fetchUser = createAsyncThunk('user/fecthUser', async (params, thunkAPI)=>{
    //thunkAPI(....) //dispatch 1 aciton neu ban muon
    const users = await getUsers();
    return users.data;
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.loading  = true
        },
        [fetchUser.rejected]: (state) => {
            state.loading = false;
            state.error = ''
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload
        },
    }
});
export default userSlice.reducer;
 