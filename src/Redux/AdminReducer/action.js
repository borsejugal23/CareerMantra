import React from "react"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"
import axios from "axios";

const baseURL = "https://mu9umx-8080.csb.app/admin"

export const Admin = (dispatch) => {

        dispatch({type:GET_PRODUCT_REQUEST});

       axios.get(baseURL).then((res) =>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data});
       })
       .catch(() =>{
        dispatch({type:GET_PRODUCT_FAILURE});
       })
};
