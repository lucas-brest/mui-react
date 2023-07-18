import { useEffect, useState } from "react"
import productService from './../services/productService'
import { MenuItem, Select, Stack, InputLabel, FormControl } from "@mui/material"
import { ProductList } from "../components"
import _ from "lodash"

const selectProducts = ({products, orderCondition, categoryCondition}) => {
  if(!products) return

  let selected = [...products]
  
  // Filtrado
  if(categoryCondition)
    selected = selected.filter(p => !p.category.localeCompare(categoryCondition))

  // Ordenado
  if(orderCondition == 'rating') orderCondition = 'rating.rate'
  const sorted = _.orderBy(selected, [orderCondition])

  // Paginado



  return sorted
}

const HomePage = () => {

  const [products, setProducts] = useState()
  const [orderCondition, setOrderCondition] = useState("")
  const [categoryCondition, setCategoryCondition] = useState("")
  
  const [categories, setCategories] = useState()

  useEffect(() => {
    productService.getProducts()
      .then(res => res.data)
      .then(data => setProducts(data))
    
    productService.getCategories()
      .then(res => res.data)
      .then(data => setCategories(data))
  }, [])

  const handleChangeOrderCondition = (e) => setOrderCondition(e.target.value)

  const handleCategoryCondition = (e) => setCategoryCondition(e.target.value)

  const selectedProducts = selectProducts({products, orderCondition, categoryCondition})

  return (
    <div style={{backgroundColor: '#cecece'}}>
      <Stack 
        padding='1rem 1.6rem'
        spacing={{xs: 1, sm: 2}} 
        direction="row" 
        useFlexGap 
        flexWrap="wrap"
        justifyContent="center"
      >
        <Stack 
          sx={{width: '100%'}}
          direction="row"
          justifyContent="flex-end"
          spacing={2}
        >
          <FormControl sx={{minWidth:110}}>
            <InputLabel id="order-select-label">Ordenar</InputLabel>

            <Select 
              value={orderCondition}
              onChange={handleChangeOrderCondition}
              labelId="order-select-label"
              >
              
              <MenuItem value='title'>Nombre</MenuItem>
              <MenuItem value='price'>Precio</MenuItem>
              <MenuItem value='rating'>Valoración</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{minWidth:120}}>
            <InputLabel id="category-select-label">Categoría</InputLabel>
            <Select 
              value={categoryCondition}
              onChange={handleCategoryCondition}
              labelId="category-select-label"
              autoWidth
              >
              <MenuItem value="">Todas</MenuItem>
            {
              categories && categories.map(c => (
                <MenuItem value={c} key={c}>{_.startCase(_.toLower(c))}</MenuItem>
                ))
              } 
            </Select>
          </FormControl>
        </Stack>
        <ProductList products={selectedProducts}/>
      </Stack>      
    </div>
  )
}

export default HomePage