import React, { useState } from "react";
import { editProduct } from "../../Redux/AdminReducer/action";


export const AdminEditTable = () => {
  const [editData, setEditData] = useState({
    name:"",
    year_of_establishment: "",
    students: "",
    courses: "",
    images: "",
    rating: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(editData.id, editData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} />
      </label>
      <br />
      <label>
        Year of Establishment:
        <input type="number" name="year_of_establishment" value={editData.year_of_establishment} onChange={(e) => setEditData({ ...editData, year_of_establishment: e.target.value })} />
</label>
<br />
<label>
Students:
<input type="number" name="students" value={editData.students} onChange={(e) => setEditData({ ...editData, students: e.target.value })} />
</label>
<br />
<label>
Courses:
<input type="text" name="courses" value={editData.courses} onChange={(e) => setEditData({ ...editData, courses: e.target.value })} />
</label>
<br />
<label>
Images:
<input type="text" name="images" value={editData.images} onChange={(e) => setEditData({ ...editData, images: e.target.value })} />
</label>
<br />
<label>
Rating:
<input type="number" name="rating" value={editData.rating} onChange={(e) => setEditData({ ...editData, rating: e.target.value })} />
</label>
<br />
<button type="submit">Save Changes</button>
</form>
);
};