import { useDispatch, useSelector } from "react-redux"
import { Sidebar } from "./Sidebar"
import { useEffect } from "react";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCart } from "./ProductCard";
import "../Styles/Products.css"
export const ProductList=()=>{
    const {isLoading,products,isError}=useSelector((store)=>{
        return {
        isLoading:store.productReducer.isLoading,
        products:store.productReducer.products,
        isError:store.productReducer.isError
        }
    });
    console.log(products)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts)
    },[])
    return <div className="combineofsidebarandproduct">
        <div className="Sidebar">
            <Sidebar/>
        </div>
        <div className="Product">
           
          {isLoading?<h1>loading...</h1>:isError?<h1>Something Went Wrong</h1>:products?.map((e)=><ProductCart key={e.id} {...e}/>)}
        </div>
    </div>
}