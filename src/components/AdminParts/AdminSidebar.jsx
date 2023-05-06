import React from "react";
import { Link } from "react-router-dom";
import { AdminList } from "./AdminList";

export const AdminSidebar = () => {
  return (
    <div>
      <button>
        <Link to="/dashboard" >Dashboard</Link>
      </button>
      <button>
        <Link to="/add-new" >Add Data</Link>
      </button>
    </div>
  );
};
