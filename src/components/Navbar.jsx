import { AppBar, Toolbar, Typography, Button, Stack} from '@mui/material'
import { Link } from 'react-router-dom';
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { ShoppingCart } from '@mui/icons-material';

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
        <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
          <Typography variant="h6" >
            MUI Store
          </Typography>
        </Link>
        <Stack flexDirection='row'>
          <Button color="inherit" onClick={() => navigation("/cart")}>
            <ShoppingCart/>
          </Button>
          <Button color="inherit" onClick={handleLogOut}>Logout</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar