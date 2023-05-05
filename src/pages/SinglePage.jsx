import React, { useEffect } from 'react'
import Carousel from '../components/carousel/carousel1'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/ProductReducer/action'
import "../Styles/SinglePage.css"




const SinglePage = () => {
    const data = useSelector((store)=>store.productReducer.products)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts)
    },[])
    console.log(data)
  return (
    <div className='cont'>
       
        <div>
            <img width={"100%"} height={'300px'} src={data[0].images[0]} alt="" />
            <h1>{data[0].name}</h1>
            <Carousel/>
        </div>
    </div>
  )
}

export default SinglePage