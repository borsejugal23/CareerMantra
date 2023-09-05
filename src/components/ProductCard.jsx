import { Link } from "react-router-dom";
import "../Styles/Products.css";
export const ProductCart=(
    {
        country,
        ownership,
        rating,
        courses,
        category,
        year_of_establishment,
        place,
        flag,
        images,
        name,
        brochure,
        id
    })=>{

    return <div className="card">
       <div style={{width:"30%"}}>
         <img src={images[0]} alt="place" className="university_img"/>
       </div>
        <div className="lineheight">
            <h1 className="h1_text">{name}</h1>
            
            <div id="icondiv">
                <div id="locateicon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                </div> 
                {place}, {country} | {ownership} | {}
                <div  className="stardiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                   </svg>
                </div>
                   {rating}
            </div>
            <br />
            <br />
            <br />
            <h2 id="coursetext"><span className="courses">{courses}+</span> Courses Offered </h2>
        </div>
        <div className="buttondiv">
            <p><button className="brochurebtn"><b>Brochure</b></button></p>
            <br />
            <Link to={`/product/${id}`}><p><button className="visitbtn"><b>Visit</b></button></p></Link>
            <br />
            <br />
            <br />

            <p className="brochure"><span>{brochure}+</span> Brochures downloaded so far</p>
        </div>
        
    </div>
}