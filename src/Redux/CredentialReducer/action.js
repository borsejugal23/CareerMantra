import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login = (obj) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    console.log(obj)
    try {
        const response = await axios.get("https://deploy-json-t437.onrender.com/login");

        const UserData = response.data;
        console.log(UserData)
        const matchingUsers = UserData.filter((user) => user.username === obj.username && user.password === obj.password);

        if (matchingUsers.length > 0) {
            console.log("Login successful");
            dispatch({ type: LOGIN_SUCCESS });
        } else {
            console.log("Login failed");
            dispatch({ type: LOGIN_FAILURE });
        }
    } catch (error) {
        console.log("Error:", error);
        dispatch({ type: LOGIN_FAILURE });
    }
};
