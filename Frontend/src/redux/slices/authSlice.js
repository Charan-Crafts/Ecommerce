import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:"authentication",
    initialState:{
        isAuthenticated:false,
        isLoading:false,
        user:null
    },
    reducers:{
        setUser:(state,action)=>{

        }
    },
    extraReducers:()=>{
        
    }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer;