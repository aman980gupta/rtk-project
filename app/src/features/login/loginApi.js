import axios from "../../app/axios"

export function fetchUserLogin(userData) {
  return axios.post("auth/login",userData)
};
export function fetchUserRESOURCE(token) {
  return axios.get("auth/RESOURCE",{
    headers:{
      "Authorization": `Bearer ${token}`, 
      "Content-Type": "application/json"
    },
  })
};