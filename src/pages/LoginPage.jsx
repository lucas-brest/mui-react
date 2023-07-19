import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import authService from "../services/authService"
import { Container, Box, Typography, TextField, Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { setUser } from "../store/userSlice"

const LoginPage = () => {

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const user = authService.getCurrentUser()
    if(user) navigate("/")
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      // Validar form
      authService.login({mail, password})

      const user = authService.getCurrentUser()
      dispatch(setUser(user))
      navigate("/")
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container component="main">
        <Box
          sx={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" 
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
  )
}

export default LoginPage