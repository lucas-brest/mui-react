import ProductCard from "./ProductCard"

const ProductList = ({products}) => {

  return (
    <>
      {
        products && products.map(p => 
            <ProductCard product={p} key={p.id}/>
        )
      }
    </>
  )
}

export default ProductList