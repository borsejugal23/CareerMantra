import axios from "axios"
import { LOGIN_SUCCESS } from "./actionTypes"

export const login =(user) => (dispatch) =>{
axios.post('https://reqres.in/api/login',user)
.then((res)=>dispatch({type:LOGIN_SUCCESS ,payload:res.data.token }))
}