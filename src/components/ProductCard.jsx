import "../Styles/Products.css"
export const ProductCart=({country,ownership,rating,category,year_of_establishment,place,flag,images,name})=>{
    // console.log(category,year_of_establishment,place)
    return <div className="card">
       <div style={{width:"30%"}}>
       <img src={images[0]} alt="place" className="university_img"/>
       </div>
        <div style={{marginLeft:"5%",lineHeight:"30px"}}>
            <h1 style={{fontSize:"20px"}}>{name}</h1>
            
            <p style={{fontSize:"15px"}}>{place}, {country} | {ownership} | {rating}</p>
        </div>
    </div>
}