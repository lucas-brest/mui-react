import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const classes = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 300,
    height: "100%"
  },
  media: {
    padding: '1rem',
    height: '300px', // Revisar otra forma de hacer esto
    width: 'auto'
  },
  content: {
    flexGrow: 1,
    textAlign: 'center',
  },
  price: {
    marginTop: 1,
  },
  button: {
    marginTop: 2,
  },
};

const ProductCard = ({ product, onClick }) => {
  const { id, title, image, price} = product
  console.log(image);
  return (
    <Card sx={classes.root}>
      <CardMedia component="img" sx={classes.media} image={image} title={title} />
      <CardContent sx={classes.content}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={classes.price}>
          ${price}
        </Typography>
        
        <Button
          variant="contained"
          color="primary"
          sx={classes.button}
          onClick={onClick}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard