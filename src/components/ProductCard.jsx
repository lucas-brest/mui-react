import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onClick }) => {
  const { id, title, image, price} = product
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
      <Card 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '265px',
          // height: '500px',
        }}>
        <CardContent sx={{
          height: '250px', 
          display:'flex', 
          alignItems: 'center'
        }}>
          <img src={image} alt={title} style={{ maxHeight:'100%', maxWidth: '100%'}}/>
        </CardContent>
        <CardContent sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'start'
        }}>
          <Typography gutterBottom variant="h6" component="h2" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' maxWidth='230px'>
            {title}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Price: ${price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard