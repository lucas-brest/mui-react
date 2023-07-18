import { useEffect, useState } from "react"
import productService from './../services/productService'
import { MenuItem, Select, Stack, InputLabel, FormControl, Pagination } from "@mui/material"
import { ProductList, SelectOrder, SelectCategory } from "../components"
import _ from "lodash"
import selectProducts from "../utils/selectProducts"

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
        <SelectOrder orderCondition={orderCondition} handleChangeOrder={handleChangeOrder}/>
        <SelectCategory categoryCondition={categoryCondition} handleChangeCategory={handleChangeCategory} categories={categories}/>
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