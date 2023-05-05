import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/AdminReducer/action";

export const AdminForm = () => {
  const [formData, setFormData] = useState({
    students: "",
    faculty: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch(addProduct (formData));
   
    setFormData ({
      students: "",
      faculty: "",
    });
     
  };

  const handleChange = (e) => {
      
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Students:
          <input
            type="number"
            name="students"
            value={formData.students}
            onChange={handleChange}
          />
        </label>
        <label>
          Faculty:
          <input
            type="number"
            name="faculty"
            value={formData.faculty}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};
