import { useEffect, useState } from "react"
import productService from './../services/productService'
import { MenuItem, Select, Stack, InputLabel, FormControl, Pagination } from "@mui/material"
import { ProductList } from "../components"
import _ from "lodash"

const selectProducts = ({products, orderCondition, categoryCondition, pageCondition, pageSize}) => {
  if(!products) return []

  let selected = [...products]
  
  let length = selected.length
  // Filtrado
  if(categoryCondition) {
    selected = selected.filter(p => !p.category.localeCompare(categoryCondition))
    length = selected.length
  }

  // Ordenado
  if(orderCondition == 'rating') 
    orderCondition = 'rating.rate'
  selected = _.orderBy(selected, [orderCondition])

  // Paginado
  selected = _(selected)
    .slice((pageCondition - 1)*pageSize)
    .take(pageSize)
    .value()

  return {selected, length}
}

const pageSize = 4

const HomePage = () => {

  const [products, setProducts] = useState()
  const [orderCondition, setOrderCondition] = useState("")

  const [categoryCondition, setCategoryCondition] = useState("")
  const [categories, setCategories] = useState()
  
  const [pageCondition, setPageCondition] = useState(1)

  useEffect(() => {
    productService.getProducts()
      .then(res => res.data)
      .then(data => setProducts(data))
    
    productService.getCategories()
      .then(res => res.data)
      .then(data => setCategories(data))
  }, [])

  const handleChangeOrder = (e) => {
    setOrderCondition(e.target.value)
  }
  
  const handleChangeCategory = (e) => {
    setPageCondition(1)
    setCategoryCondition(e.target.value)
  }

  const handleChangePage = (e, value) => setPageCondition(value)
  

  const {selected, length} = selectProducts({products, orderCondition, categoryCondition, pageCondition, pageSize})

  return (
    <Stack 
      padding='1rem 1.6rem'
      spacing={{sm: 1}} 
      direction="row" 
      useFlexGap 
      flexWrap="wrap"
      justifyContent="center"
    >
      <Stack 
        sx={{width: '100%', paddingBlock:1}}
        direction="row"
        justifyContent="flex-end"
        spacing={2}
      >
        <FormControl sx={{minWidth:110}}>
          <InputLabel id="order-select-label">Ordenar</InputLabel>

          <Select 
            value={orderCondition}
            onChange={handleChangeOrder}
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
            onChange={handleChangeCategory}
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
      <ProductList products={selected}/>
      <Stack sx={{
        width:'100%',
        alignItems: 'center',
        paddingTop:2
      }}>
        <Pagination count={Math.ceil(length / pageSize)} shape="rounded" page={pageCondition} onChange={handleChangePage}/>
      </Stack>
    </Stack>      
  )
}

export default HomePage