import { Box, Button, Paper, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productService from "../services/productService"
import { RatingStars } from "../components"


const ProductPage = () => {

  const { id } = useParams()
  const [product, setProduct] = useState()
  const [qty, setQty] = useState(1)

  useEffect(() => {
    productService.getProductById(id)
      .then(res => res.data)
      .then(data => setProduct(data))
  }, [])

  const handleAddToCart = () => {
    console.log(`Añadir ${qty} unidades de ${product.title}`);
  }

  return (
    <> 
    { product && 
    <>
      <Stack spacing={2} sx={{
        display:"flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems:"flex-start",
        backgroundColor: "white",
        padding: 4,
        
      }}>
        <Box>
          <img src={product.image} alt={product.title} style={{maxWidth:'500px', maxHeight:'500px'}}/>
        </Box>
        <Paper elevation={12} flexDirection='column' sx={{
          width:'500px',
          padding: 2,
        }}>
          <Typography variant="h6" color="textSecondary" component="p">
            {product.category}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" marginY={2}>
            {product.title}
          </Typography>
          <RatingStars rating={product.rating}/>
          <Typography variant="h3" component="p" marginY={2}>
            $ {product.price}
          </Typography>
          <Stack flexDirection='row' alignItems='center' marginY={2}>
            <Button variant="outlined" onClick={() => setQty(qty - 1)} disabled={qty < 1}>-</Button>
            <Typography variant="h6" paddingX={2} sx={{userSelect:'none'}}>{qty}</Typography>
            <Button variant="outlined" onClick={() => setQty(qty + 1)} disabled={qty > 9}>+</Button>
          </Stack>
          <Button variant="contained" disabled={qty < 1}>
            Add to Cart
          </Button>
        </Paper>
        <Typography variant="h6" component="p" paddingY={2}>
          {product.description}
        </Typography>
      </Stack>
    </>
    }
    </>
  )
}

export default ProductPage