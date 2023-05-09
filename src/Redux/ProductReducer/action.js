import axios from "axios"
import { GET_FAILURE, GET_PRODUCT_ID_SUCCESS, GET_REQUEST, GET_SUCCESS } from "./actionTypes"

export const getProducts=(query)=>(dispatch)=>{
    dispatch({type:GET_REQUEST})
    axios.get(`https://mu9umx-8080.csb.app/products`,query)
    .then((res)=>{
        dispatch({type:GET_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_FAILURE})
    })
}
// export const getProductsId=(id)=>(dispatch)=>{
//     dispatch({type:GET_REQUEST})
//     axios.get(`https://mu9umx-8080.csb.app/products/${id}`)
//     .then((res)=>{
//         // console.log(res.data)
//         dispatch({type:GET_PRODUCT_ID_SUCCESS,payload:res?.data})
//     })
//     .catch((err)=>{
//         dispatch({type:GET_FAILURE})
//     })
// }