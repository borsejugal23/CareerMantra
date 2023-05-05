import React from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../../Redux/AdminReducer/action";

export const AdminCard = ({ id, students, faculty }) => {
    
  return (
    <div>
      <div>Total Students: {students}</div>
      <div>Total Faculty: {faculty}</div>
    </div>
  );
};
