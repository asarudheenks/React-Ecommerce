import "./Sidebar.css"
import React, { useContext } from 'react'
import { Button, Dropdown } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { FaCircleUser } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { Mycontext } from "../Context/Context";

function Sidebar() {
  const {Admin_Email} = useContext(Mycontext)
  
  const navigate =useNavigate()
  const handleLogout=()=>{
    navigate('/')
  }
  return (
    <div className="d-flex justify-content-between flex-column bg-dark text-white pe-3 ps-3 pe-5 vh-100">
        <div >
          <div className="Adminname h-100 mt-5 ms-5">
          <div className="Adminname  mt-5">
      <Dropdown className="me-1">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <>
          <FaCircleUser /> {Admin_Email}
        </>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Button variant="outline-info" className="w-100" onClick={handleLogout}>
            <span>
            <TbLogout /> Logout
            </span>
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button variant="outline-info" className="w-100">
            <Link to={'/Profiles'} style={{ textDecoration: "none", color: "black" }}>
            <FaCircleUser /> Profile
            </Link>
          </Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </div>
          </div>
          <hr className="text-secondary mt-2"/>
          <ul className="nav nav-pills flex-column mt-2">
            <li className="nav-item p-2 ">
<Link className="p-3 link">
<span className="fs-4"><strong>Dashboard</strong></span>
</Link>
            </li> <li className="nav-item p-2">
<Link to={'/Allproducts'} className="p-3 link">
<span className="fs-4">Products</span>
</Link>
            </li>
            <li className="nav-item p-2">
<Link to={'/Users'} className="p-3 link">
<span className="fs-4">Customers</span>
</Link>
            </li>
           
          </ul>
        </div>
        
        </div>
 
  )
}

export default Sidebar