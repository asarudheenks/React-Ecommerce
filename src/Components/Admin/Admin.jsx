import React from "react";
import Sidebar from "./Sidebar";
import Adminhome from "./Adminhome";


function Admin() {
  return (
    
    <div className="d-flex">
      
    <div className="w-auto">
    
        <Sidebar />
      </div>
      <div className="col">
      
      <Adminhome/>
      </div>
    </div>
 
  );
}

export default Admin;
