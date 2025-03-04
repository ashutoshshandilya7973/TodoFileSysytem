import { useEffect, useState } from "react"
import { ProfileCard } from "./components/Card"
import Login from "./components/Login"
import Home from "./components/pages/Home"
import Register from "./components/Register"
import {Routes,Route, Navigate} from 'react-router-dom'
import { userInfo } from "./stores/userAtom"
import { useRecoilState, useRecoilValue } from "recoil"
import { isAuthenticated } from "./stores/userAtom"
 
function App() {
      
   const [info,setInfo]=useRecoilState(userInfo)
   const isAuth=useRecoilValue(isAuthenticated)
   


   

  return (
  <>
     <Routes >
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={isAuth? <Home /> : <Navigate to="/login" />} />
        </Routes> 
     
     

  </>
  )
}

export default App
