import React from "react";
import { useSelector } from "react-redux";
import { AdminCard } from "./AdminCard";

export const AdminList = () => {
  const products = useSelector((store) => store.adminReducer.products);

  return (
    <div>
      {products.length > 0 &&
        products.map((el) => {
          return <AdminCard key={el.id} {...el} />;
          
        })}
    </div>
  );
};
