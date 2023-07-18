import { Route, Routes } from 'react-router-dom'
import useValidateLogin from "./hooks/useValidateLogin"
import { LoginPage, HomePage, UserPage, CartPage, ProductPage } from "./pages"
import Navbar from "./components/Navbar"
import { Container } from "@mui/material"

function App() {

  useValidateLogin()

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path='/product/:id' Component={ProductPage}/>
          <Route path='/cart' Component={CartPage}/>
          <Route path="/login" Component={LoginPage}/>
          <Route path="/user/:username" Component={UserPage}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
