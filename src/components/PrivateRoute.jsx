
// import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export const PrivateRoute = ({children}) => {
  const token=localStorage.getItem("token")
  // console.log(token)
  // const isAuth=useSelector(store=>store.credentialReducer.isAuth);
  // console.log(isAuth)
  const location=useLocation();
  return <div>{token?children:<Navigate state={location.pathname} to ={"/login"}/>}</div>;
};

