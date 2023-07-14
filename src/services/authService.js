import jwtDecode from "jwt-decode";

const apiUrl = 'https://jsonplaceholder.typicode.com/'
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