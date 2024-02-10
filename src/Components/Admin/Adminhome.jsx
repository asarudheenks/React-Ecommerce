import React, { useContext } from 'react'
import { Mycontext } from '../Context/Context'
import { Link,  } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function Adminhome() {
  const { Products, User,LoggedUser } = useContext(Mycontext)
console.log(LoggedUser);
  const totalProducts = Products.length;
  
  const totalCustomers = User.length
  

  return (
    <div className="Category-container">
      <Link to={'/Allproducts'} style={{ textDecoration: "none" }}>
        <Card style={{ width: "14rem" }} className="admincard1">
          <h3>Products</h3>
          <h3>{totalProducts}</h3>
        </Card>
      </Link>
     
      <Link to={'/Customers'} style={{ textDecoration: "none" }}>
        <Card style={{ width: "14rem" }} className="admincard3">
          <h3>Customers</h3>
          <h3>{totalCustomers}</h3>
        </Card>
      </Link>
    </div>
  );
}

export default Adminhome;
