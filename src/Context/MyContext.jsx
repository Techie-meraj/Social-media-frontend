// import React, { createContext, useContext, useEffect, useState } from 'react'

// const userContext = createContext()

// const Usercontextprovider=({children})=>{
// const [auth,setAuth] =useState(null)
// const [isLoggedIn,setisLoggedIn] = useState(false)

// // After refreshing login and register came back so to avoid that ,use below code .

// useEffect(()=>{
//     const data=JSON.parse(localStorage.getItem('auth'))
//     if(data){
//         setAuth(data)
//         setisLoggedIn(true)
//     }
    
// },[])


// return(<>
// <userContext.Provider value={{auth,setAuth,isLoggedIn,setisLoggedIn}}>
// {children}
// </userContext.Provider>
// </>)
// }

// const useAuth=()=>{
//     return useContext(userContext)
// }

// export  {useAuth,Usercontextprovider}