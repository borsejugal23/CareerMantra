import React, { useState } from "react";
import { editProduct } from "../../Redux/AdminReducer/action";

export const AdminEditTable = () => {
  const [editData, setEditData] = useState({
    name: '',
    year_of_establishment: '',
    students: '',
    courses: '',
    images: '',
    rating: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(editData.id, editData);
  }};
