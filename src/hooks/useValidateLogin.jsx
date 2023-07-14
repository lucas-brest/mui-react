import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import authService from "../services/authService"

const useValidateLogin = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = authService.getCurrentUser()
    if(!user) navigate("/login")
  }, [])
}

export default useValidateLogin;