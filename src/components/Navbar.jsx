import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material'
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Navbar = () => {

  const navigation = useNavigate();

  useEffect(() => {
    // Obtener el user de redux 
  }, [])  // Agregar ese user como dependencia

  const handleLogOut = () => {
    authService.logout();
    navigation("/login")
  }

  return (
    <AppBar position="static" sx={{alignItems:'center'}}>
      <Toolbar sx={{maxWidth:'1200px', width:'100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography 
          variant="h6"
          component="a" 
          href="/" 
          sx={{ 
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          
          MUI Store
        </Typography>
        <Stack flexDirection='row'>
          <Button color="inherit" onClick={() => navigation("/cart")}>Cart</Button>
          <Button color="inherit" onClick={handleLogOut}>Logout</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar