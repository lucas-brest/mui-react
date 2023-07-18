import { useEffect, useState } from "react"
import productService from './../services/productService'
import { Grid } from "@mui/material"
import { ProductList } from "../components"

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
        <Grid item xs={12}>
          <p>Filtros</p>
        </Grid>
        <ProductList products={products}/>
      </Grid>
      
    </div>
  )
}

export default HomePage