import { Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import { Sidebar } from "./Sidebar"
import { useEffect } from "react";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCart } from "./ProductCard";
import "../Styles/Products.css"
import { useLocation,useSearchParams } from "react-router-dom";


export const ProductList=()=>{
    const {isLoading,products,isError}=useSelector((store)=>{
        return {
        isLoading:store.productReducer.isLoading,
        products:store.productReducer.products,
        isError:store.productReducer.isError
        }
    });
    
    const dispatch=useDispatch();
    const [serchparams]=useSearchParams();
    const location=useLocation();
    let queryparams={
        params:{
          country:serchparams.getAll("country"),
          category:serchparams.getAll("category"),
        //   _sort:serchparams.get("order")&&"price",
        //   _order:serchparams.get("order")
        },
       }
    // console.log(products)
    useEffect(()=>{
        dispatch(getProducts(queryparams))
    },[location.search])
    return <div className="combineofsidebarandproduct">
        <div className="Sidebar">
            <Sidebar/>
        </div>
        <div className="Product">
           
          {isLoading?<div className='spinner'><Spinner
  thickness='3px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></div>:isError?<h1>Something Went Wrong</h1>:products?.map((e)=><ProductCart key={e.id} {...e}/>)}
        </div>
    </div>
}