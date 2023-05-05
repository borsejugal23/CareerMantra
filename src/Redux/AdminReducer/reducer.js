import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"

const initialstate={
    isLoading:false,
    isError:false,
    products:[],
}
export const reducer=(state=initialstate,{type,payload})=>{
    switch(type){
      case GET_PRODUCT_REQUEST:
        return {...state,isLoading:true}
      case GET_PRODUCT_SUCCESS:
        return {...state,isLoading:false,products:payload}
      case GET_PRODUCT_FAILURE:
        return {...state,isError:true}    
      default: return state
    }
}