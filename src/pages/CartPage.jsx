import { useSelector } from 'react-redux';
import useValidateLogin from './../hooks/useValidateLogin'
import { Button, CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Stack } from '@mui/system';
import { Clear } from '@mui/icons-material';

const priceFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const CartPage = () => {

  const {data: cartProducts} = useSelector(state => state.cart);
  
  useValidateLogin()

  return (
    <Stack>
      <TableContainer component={Paper} sx={{marginTop:2}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Imagen</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Sub Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              cartProducts && cartProducts.map(p => (
                <TableRow 
                  key={p.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='center'>
                    <CardMedia component='img' image={p.image} height='100px'  sx={{objectFit: 'contain', maxWidth:'100px'}}/>
                  </TableCell>
                  <TableCell>{p.title}</TableCell>
                  <TableCell>{priceFormatter.format(p.price)}</TableCell>
                  <TableCell align='center'>{p.quantity}</TableCell>
                  <TableCell>{priceFormatter.format(p.totalPrice)}</TableCell>
                  <TableCell align='right'>
                    <Button variant="text"><Clear/></Button>
                  </TableCell>
                </TableRow>
              ))
            }
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell>Total: </TableCell>
              <TableCell>{cartProducts && priceFormatter.format(cartProducts.reduce((acum, prod) => acum + prod.totalPrice, 0))}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  )
}

export default CartPage