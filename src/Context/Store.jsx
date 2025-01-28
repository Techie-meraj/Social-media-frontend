import {createSlice,configureStore} from '@reduxjs/toolkit'
const storedloginstatus = JSON.parse(localStorage.getItem('islogin')) || false

const authSlice=createSlice({
    name:'auth',
    initialState:{
        isLogin:storedloginstatus
    },
    reducers:{
        login(state){
            state.isLogin=true
            //login(state) with the help of this we can change the data which is in initial state
            localStorage.setItem('islogin',JSON.stringify(true))
            //when login function called it will be true
        },
        logout(state){
            state.isLogin=false
        }
    }
})

export const authActions =authSlice.actions

export const store = configureStore({
    reducer:authSlice.reducer
})