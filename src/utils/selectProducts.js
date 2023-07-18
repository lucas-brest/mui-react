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

export default selectProducts;