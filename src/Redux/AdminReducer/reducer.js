// import { ADD_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

// const initialstate={
//     isLoading:false,
//     isError:false,
//     products:[],
// }
// export const reducer=(state=initialstate,{type,payload})=>{
//     switch(type){
//       case PRODUCT_REQUEST:
//         return {...state,isLoading:true}
//       case GET_PRODUCT_SUCCESS:
//         return {...state,isLoading:false,products:payload}
//       case ADD_PRODUCT_SUCCESS:
//         return {...state,isLoading:true,isError:false}  
//       case PRODUCT_FAILURE:
//         return {...state,isError:true}    
//       default: return state
//     }
// }