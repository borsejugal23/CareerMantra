import React from "react";
import { PRODUCT_FAILURE, PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios";

const baseURL = "https://deploy-json-t437.onrender.com/products";

export const getProduct = (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(baseURL)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const addProduct = (data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .post(baseURL, data)
    .then((res) => {
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const editProduct = (id, data) => (dispatch) => {
  console.log(id,data)
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .put(`${baseURL}/${id}`, data)
    .then((res) => {
      dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
