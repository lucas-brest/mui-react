import { AppBar, Toolbar, Typography, Button, Stack, Badge} from '@mui/material'
import { Link } from 'react-router-dom';
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart, Person } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from './../store/userSlice'

const Navbar = () => {

  const { isConnected } = useSelector(state => state.user);
  const { data } = useSelector(state => state.cart)
  const navigation = useNavigate();
  const dispatch = useDispatch()

  const handleLogOut = () => {
    authService.logout();
    dispatch(removeUser())
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
        {
          isConnected ? 
          <>
            <Button color="inherit" onClick={() => navigation("/cart")}>
              <Badge badgeContent={data.reduce((acum, p) => acum + p.quantity, 0)} color='secondary'>
                <ShoppingCart/>
              </Badge>
            </Button>
            <Button color="inherit" onClick={() => navigation("/user")}>
              <Person/>
            </Button>
            <Button color="inherit" onClick={handleLogOut}>Logout</Button>
          </>
            :
            <>
            <Button color="inherit" onClick={() => navigation("/login")}>Login</Button>
            </>
          }
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar