import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const SelectOrder = ({orderCondition, handleChangeOrder}) => {
  return (
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
  )
}

export default SelectOrder