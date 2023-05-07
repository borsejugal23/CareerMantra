import React, { useState } from "react";
import { editProduct } from "./action";

export const AdminEditTable = () => {
  const [editData, setEditData] = useState({
    name: '',
    year_of_establishment: year_of_establishment,
    students: students,
    courses: courses,
    images: images,
    rating: rating,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(editData.id, editData);
  };
