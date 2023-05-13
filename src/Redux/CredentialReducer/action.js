import axios from "axios"
import { LOGIN_SUCCESS } from "./actionTypes"

export const login =(user) => (dispatch) =>{
axios.post('https://mu9umx-8080.csb.app/login',user)
.then((res)=>dispatch({type:LOGIN_SUCCESS ,payload:res.data.token }))
}

export const signUp = (dispatch) => {

}