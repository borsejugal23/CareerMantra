// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProduct } from "../../Redux/AdminReducer/action";

// export const AdminForm = () => {
//   const [formData, setFormData] = useState({
//     year_of_establishment: "",
//     name: "",
//     country: "",
//     faculty: 0,
//     students: 0,
//     courses: 0,
//     images: ["", "", ""],
//     flag: "",
//     ownership: "",
//     rating: 0,
//     place: "",
//     category: ""
//   });

//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addProduct(formData));

//     setFormData({
//       year_of_establishment: "",
//       name: "",
//       country: "",
//       faculty: 0,
//       students: 0,
//       courses: 0,
//       images: ["", "", ""],
//       flag: "",
//       ownership: "",
//       rating: 0,
//       place: "",
//       category: ""
//     });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Year of Establishment:
//           <input
//             type="text"
//             name="year_of_establishment"
//             value={formData.year_of_establishment}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Country:
//           <input
//             type="text"
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Faculty:
//           <input
//             type="number"
//             name="faculty"
//             value={formData.faculty}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Students:
//           <input
//             type="number"
//             name="students"
//             value={formData.students}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Courses:
//           <input
//             type="number"
//             name="courses"
//             value={formData.courses}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Images:
//           <input
//             type="text"
//             name="images"
//             value={formData.images}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Flag:
//           <input
//             type="text"
//             name="flag"
//             value={formData.flag}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Ownership:
//           <input
//             type="text"
//             name="ownership"
//             value={formData.ownership}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Rating:
//           <input
//             type="number"
//             name="rating"
//             value={formData.rating}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Place:
//           <input
//             type="text"
//             name="place"
//             value={formData.place}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Category:
//           <input
//          type="text"
//          name="category"
//          value={formData.category}
//          onChange={handleChange}
//        />
//        </label>
//         <button type="submit">Add Data</button>
// </form>
// </div>
// );
// };
         
