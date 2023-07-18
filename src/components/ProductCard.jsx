import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onClick }) => {
  const { id, title, image, price} = product
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
      <Card 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          maxWidth: '260px',
          height: '100%',
        }}>
        <CardContent sx={{height: '300px'}}>
          <CardMedia 
            sx={{
              height: '100%',
              objectFit: 'cover',
              '&hover':'b'
            }} 
            image={image} 
            title={title} />
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Price: {price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard