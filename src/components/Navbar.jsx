import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Navbar = () => {

  const navigation = useNavigate();

  useEffect(() => {

  }, [])

  const handleLogOut = () => {
    authService.logout();
    navigation("/login")
  }


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Red Social
        </Typography>
        <Button color="inherit" onClick={handleLogOut}>Logout</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar