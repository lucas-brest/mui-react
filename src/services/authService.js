import jwtDecode from "jwt-decode";
import apiUrl from  './../config.json'

const jwtKey = "token"

export const login = async ({mail, password}) => {
  // Validacion
  sessionStorage.setItem(jwtKey, "JWT con user info")
}

export const logout = async () => {
  sessionStorage.removeItem(jwtKey)
}

export const getCurrentUser = () => {
  try {
    const jwt = sessionStorage.getItem(jwtKey);
    return jwt
    // return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}   

export default { getCurrentUser, login, logout }