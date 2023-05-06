import "../Styles/sidebar.css";
import { HiFilter } from "@react-icons/all-files/hi/HiFilter"
import { Checkbox,Stack,Text } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
// import { useDispatch } from "react-redux";
import {useSearchParams} from "react-router-dom"
import { useEffect, useState } from "react";
export const Sidebar=()=>{

   // const dispatch = useDispatch();
   const [searchparams,setSearchparams]=useSearchParams();
     const initialcountry=searchparams.getAll("country");
     const [country, setCountry] = useState(initialcountry||[]);
   const initialCategory=searchparams.getAll("category");
   const [category,setCategory]=useState(initialCategory||[])
   //   const initilasort=searchparams.get("order")
   //   const [order,setOrder]=useState(initilasort||"")
   const initialcity=searchparams.getAll("city");
   const [city,setCity]=useState(initialcity||[])


   const filterByCategory=(e)=>{
      const {value}=e.target
      let newCategory=[...category];
      if (newCategory.includes(value)){
            newCategory=newCategory.filter((e)=>e!==value)
      }
      else{
            newCategory.push(value)
      }
      setCategory(newCategory)
      // console.log(category)
   }

   const filterByContry=(e)=>{
      const {value}=e.target
      let newCountry=[...country];
      if (newCountry.includes(value)){
         newCountry=newCountry.filter((e)=>e!==value)
      }
      else{
         newCountry.push(value)
      }
      setCountry(newCountry)
      // console.log(category)
   }
   const filterByCity=(e)=>{
      const {value}=e.target
      let newCity=[...city];
      if (newCity.includes(value)){
         newCity=newCity.filter((e)=>e!==value)
      }
      else{
         newCity.push(value)
      }
      setCity(newCity)
      // console.log(category)
   }
   useEffect(()=>{
      let params={
         category,
         country
       }
      //  order && (params.order=order)
       setSearchparams(params)
     },[category,country])

    return <div className="sidebar">
       <div>
        <div  className="postion">
           <p className="postion-p"> <HiFilter/></p></div>
        <h1 style={{fontSize:"20px"}}>Filter By</h1>
        
        <br />
        <br />
        <div>
           <Text fontSize='lg' className="testing">Category</Text>
                <Stack pl={6} mt={1} spacing={1}>
                    <Checkbox value={"university"} isChecked={category.includes("university")} onChange={filterByCategory} >
                       University
                    </Checkbox>
                    <Checkbox value={"school"} isChecked={category.includes("school")} onChange={filterByCategory} >
                       School
                    </Checkbox>
                </Stack>
            </div>
            <br />
            <hr />
            <div>
            <Text fontSize='lg'>Country</Text>
             
                <Stack pl={6} mt={1} spacing={1}>
                    <Checkbox value={"India"} isChecked={country.includes("India")} onChange={filterByContry}>
                        India
                    </Checkbox>
                    <Checkbox value={"USA"} isChecked={country.includes("USA")} onChange={filterByContry}>
                       USA
                    </Checkbox>
                    <Checkbox value={"UK"} isChecked={country.includes("UK")} onChange={filterByContry}>
                       UK
                    </Checkbox>
                    <Checkbox value={"Japan"} isChecked={country.includes("Japan")} onChange={filterByContry}>
                       Japan
                    </Checkbox>
                </Stack>
            </div>
            <br />
            <hr />
            <div>
            <Text fontSize='lg'>City</Text>
                <Stack pl={6} mt={1} spacing={1}>
                    <Checkbox value={"India"} isChecked={country.includes("India")} onChange={filterByCity}>
                    Pasadena
                    </Checkbox>
                    <Checkbox value={"India"} isChecked={country.includes("India")} onChange={filterByCity}>
                    Cambridge
                    </Checkbox>
                    <Checkbox value={"India"} isChecked={country.includes("India")} onChange={filterByCity}>
                      Pune
                    </Checkbox>
                    <Checkbox value={"India"} isChecked={country.includes("India")} onChange={filterByCity}>
                       Mumbai
                    </Checkbox>
                    <Checkbox value={"India"} isChecked={country.includes("India")} onChange={filterByCity}>
                       Bangalore
                    </Checkbox>
                    <Checkbox value={"India"} isChecked={country.includes("India")} onChange={filterByCity}>
                       Tokyo
                    </Checkbox>
                </Stack>
            </div>
            <br />
            <hr />
            <div>
            <Text fontSize='lg'>Ownership</Text>
                <Stack pl={6} mt={1} spacing={1}>
                    <Checkbox>
                       Private
                    </Checkbox>
                    <Checkbox>
                       Government
                    </Checkbox>
                </Stack>
            </div>
       </div>
       <br />
       <hr />
       <h1 style={{fontSize:"20px"}}>Sort By Rating</h1>
        <br />
       <div className="shortdiv">
            <RadioGroup defaultValue='1'>
            <Stack>
                <Radio value='3'>Low to High</Radio>
                <Radio value='4'>High to Low</Radio>
            </Stack>
            
            </RadioGroup>
       </div>
       <br />
       <br />
       <br />

    </div>
}