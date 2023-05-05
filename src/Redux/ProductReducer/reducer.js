import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionTypes"

const initialstate={
    isLoading:false,
    isError:false,
    products:[]
}
export const reducer=(state=initialstate,{type,payload})=>{
    switch(type){
      case GET_REQUEST:{
        return{...state,isLoading:true}
      }
      case GET_SUCCESS:{
        return {...state,isLoading:false,products:payload}
      }
      case GET_FAILURE:{
        return {...state,isLoading:false,isError:true}
      }
      default: return state
    }
}