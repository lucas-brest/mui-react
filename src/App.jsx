import { useEffect } from "react"
import authService from "./services/authService"
import { Route, Routes, useNavigate } from 'react-router-dom'
import useValidateLogin from "./hooks/useValidateLogin"

import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import UserPage from "./pages/UserPage"
import Navbar from "./components/Navbar"
import { Container } from "@mui/material"

function App() {

  useValidateLogin()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/user/:username" Component={UserPage}/>
      </Routes>
    </>
  )
}

export default App
