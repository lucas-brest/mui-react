import ProductCard from "./ProductCard"
import { Grid } from "@mui/material"

const ProductList = ({products}) => {
  return (
    <>
      {
        products && products.map(p => 
          <Grid item key={p.id} xs={12} sm={4} md={3}>
            <ProductCard product={p}/>
          </Grid>
        )
      }
    </>
  )
}

export default ProductList