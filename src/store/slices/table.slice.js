import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    isLoading: false,
    users: []
}

export const getUsers = createAsyncThunk('user/getUsers', async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        return res.data
    }

    catch (err) {
        console.log(err);
    }
})


export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending, (state) => {
            state.isLoading = true
        })
       .addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
        })
    }
})

export default userSlice.reducer