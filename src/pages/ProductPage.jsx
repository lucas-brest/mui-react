import { Box, Paper, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productService from "../services/productService"
import { RatingStars } from "../components"

const ProductPage = () => {

  const { id } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    productService.getProductById(id)
      .then(res => res.data)
      .then(data => setProduct(data))
  }, [])

  return (
    <> 
    { product && 
      <Stack spacing={2} sx={{
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"flex-start",
        backgroundColor: "white",
        padding: 4,
        
      }}>
        <Box>
          <img src={product.image} alt={product.title} style={{maxWidth:'500px', maxHeight:'500px'}}/>
        </Box>
        <Paper elevation={12} sx={{
          width:'500px',
          padding: 2,
          display: 'flex',
          flexDirection: "column",
          justifyContent: "space-between"
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
          <Box>
            Cart Section
          </Box>
        </Paper>
        
      </Stack>
    }
    </>
  )
}

export default ProductPage