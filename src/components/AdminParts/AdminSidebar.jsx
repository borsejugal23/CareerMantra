import React from "react";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <div>
      <button>
        <Link to="/">Dashboard</Link>
      </button>
      <button>
        <Link to="/add-new">Add Data</Link>
      </button>
    </div>
  );
};
