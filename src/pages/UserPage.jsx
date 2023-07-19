import { Button, Stack, Typography, TextField, FormHelperText } from "@mui/material";
import useValidateLogin from "../hooks/useValidateLogin";
import { useSelector } from "react-redux";
import { useState } from "react";

const emptyPassword = {
  actual:"",
  nueva:"",
  nuevaConfirmada:""
}

const UserPage = () => {

  const { user } = useSelector(store => store.user)
  const [formDisplay, setFormDisplay] = useState()
  const [password, setPassword] = useState(emptyPassword)
  const [error, setError] = useState("")

  useValidateLogin()

  const handleSubmit = () => {
    // Llamada api para confirmar

    // Valida que coincida nueva y confirmada
    if(password.nueva !== password.nuevaConfirmada) {
      setError("Las contraseñas no coinciden")
      return;
    }

    if(password.nueva === "") {
      setError("Ingrese una contraseña nueva")
      return;
    }

    // Llamada api para guardar
      //if ok
    setFormDisplay(false)
    setPassword(emptyPassword)
    setError("")
  }



  if(!user) return <></>

  return (
    <Stack sx={{backgroundColor:'white', marginTop:4, padding:'2.4rem 1.6rem',gap:1}}>
      <Typography variant="h4">
        {user.name}
      </Typography>
      <Typography variant="h6">
        Correo: {user.mail}
      </Typography>
      <Typography variant="h6">
        Clave: ********
      </Typography>
      {
        formDisplay && <>
          <TextField
            margin="normal"
            required
            label="Actual"
            type="password"
            autoFocus
            value={password.actual}
            onChange={(e) => setPassword({...password, actual: e.target.value})}
          />
          <TextField
            margin="normal"
            required
            label="Nueva"
            type="password"
            value={password.nueva}
            onChange={(e) => setPassword({...password, nueva: e.target.value})}
          />
          <TextField
            margin="normal"
            required
            label="Confirmar nueva contraseña"
            type="password"
            value={password.nuevaConfirmada}
            onChange={(e) => setPassword({...password, nuevaConfirmada: e.target.value})}
          />
          <FormHelperText sx={{fontSize:'1rem', color:'red'}}>{error}</FormHelperText>
        </>
      }
      {
        formDisplay ? 
        <Button onClick={handleSubmit} variant="contained">Confirmar</Button>
        :
        <Button onClick={() => setFormDisplay(true)}>Cambiar contraseña</Button>
      }
    </Stack>
  )
}

export default UserPage