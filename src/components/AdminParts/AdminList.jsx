// import React from "react";
// import { useSelector } from "react-redux";
// import { AdminCard } from "./AdminCard";
// import { AdminTable } from "./AdminTable";

// export const AdminList = () => {
//   const products = useSelector((store) => store.adminReducer.products);
  
//   const totalStudents = products.reduce((total, product) => total + product.students, 0);
//   const totalFaculty = products.reduce((total, product) => total + product.faculty, 0);

//   return (
//     <div>
//       <AdminCard students={totalStudents} faculty={totalFaculty} />
//       <AdminTable products={products} />
//     </div>
//   );
// };