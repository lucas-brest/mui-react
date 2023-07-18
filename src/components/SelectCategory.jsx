import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import _ from "lodash"

const SelectCategory = ({categoryCondition, handleChangeCategory, categories}) => {
  return (
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
  )
}

export default SelectCategory