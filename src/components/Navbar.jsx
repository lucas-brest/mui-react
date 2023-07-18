import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigation = useNavigate();

  const handleLogOut = () => {
    authService.logout();
    navigation("/login")
  }

  return (
    <AppBar position="static" sx={{alignItems:'center'}}>
      <Toolbar sx={{maxWidth:'1200px', width:'100%'}}>
        <Typography 
          variant="h6"
          component="a" 
          href="/" 
          sx={{ 
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          
          MUI Store
        </Typography>
        <Button color="inherit" onClick={handleLogOut}>Logout</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar