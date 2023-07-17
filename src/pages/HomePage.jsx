import { useEffect, useState } from "react"
import productService from './../services/productService'
import ProductCard from "../components/ProductCard"
import { Grid } from "@mui/material"

const HomePage = () => {

  const [products, setProducts] = useState()

  useEffect(() => {
    productService.getProducts()
      .then(res => res.data)
      .then(data => setProducts(data))
    
  }, [])

  return (
    <div>
      <Grid container spacing={2} sx={{paddingBlock:"2rem",}}>

      {
        products && products.map(p => 
          <Grid item key={p.id} xs={12} sm={6} md={4}>
            <ProductCard product={p}/>
          </Grid>
        )
      }
      </Grid>
      
    </div>
  )
}

export default HomePage