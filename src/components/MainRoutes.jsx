import { Route, Routes } from "react-router-dom"
import { ProductList } from "./ProductList"

export const MainRoutes=()=>{
 return   <Routes>
    <Route path="/" element={<ProductList/>}/>
    {/* <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/> */}
 </Routes>
}