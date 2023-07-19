import jwtDecode from "jwt-decode";
import apiUrl from  './../config.json'

const jwtKey = "token"

export const login = async ({mail, password}) => {
  // Validacion
  const placeholder = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJtYWlsIjoiY29ycmVvQGdtYWlsLmNvbS5hciJ9.yAqWWOr0UmB9r4Ue5xpv7l677yDa_4w44uSXsptWJUg'
  sessionStorage.setItem(jwtKey, placeholder)
}

export const logout = async () => {
  sessionStorage.removeItem(jwtKey)
}

export const getCurrentUser = () => {
  try {
    const jwt = sessionStorage.getItem(jwtKey);
    return jwtDecode(jwt)
  } catch (ex) {
    return null;
  }
}   

export default { getCurrentUser, login, logout }