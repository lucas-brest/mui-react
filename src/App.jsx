import { Route, Routes } from 'react-router-dom'
import { LoginPage, HomePage, UserPage, CartPage, ProductPage } from "./pages"
import Navbar from "./components/Navbar"
import { Container } from "@mui/material"
import { useEffect } from 'react'
import { getCurrentUser } from './services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from './store/userSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    const user = getCurrentUser();
    if(user) dispatch(setUser(user))
  },[])

  return (
    <div style={{backgroundColor: 'rgb(222 222 222)', minHeight:'100vh'}}>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path='/product/:id' Component={ProductPage}/>
          <Route path='/cart' Component={CartPage}/>
          <Route path="/login" Component={LoginPage}/>
          <Route path="/user" Component={UserPage}/>
        </Routes>
      </Container>
    </div>
  )
}

export default App
