import axios from "axios"
import { GET_FAILURE, GET_PRODUCT_ID_SUCCESS, GET_REQUEST, GET_SUCCESS } from "./actionTypes"

export const getProducts=(query)=>(dispatch)=>{
    dispatch({type:GET_REQUEST})
    axios.get(`https://deploy-json-t437.onrender.com/products`,query)
    .then((res)=>{
        const totalCount = res.headers.get("x-total-count");
        // console.log(+totalCount)
        dispatch({type:GET_SUCCESS,payload: { data: res.data, totalCount: +totalCount } })
    })
    .catch((err)=>{
        dispatch({type:GET_FAILURE})
    })
}

