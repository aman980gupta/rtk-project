// A mock function to mimic making an async request for data
import axios from "../../app/axios"
export function fetchproduct() {
  return axios.get("products")
}
