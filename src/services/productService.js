import { apiUrl } from './../config.json'
import httpService from './httpService'

const apiEndpoint = apiUrl + "/products"

export const getProducts = () => {
  try {
    return httpService.get(apiEndpoint)
  } catch (ex) {
    console.log("Error: " ,ex);
  }
}

export default { getProducts }