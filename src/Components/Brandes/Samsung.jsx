import React, { useContext } from 'react'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Mycontext } from '../Context/Context';
import Footer from '../Footer/Footer';

function Samsung() {
  const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const Samsung =
   Products.filter((hp)=>hp.Brand === "SAMSUNG")

   const Details = (products) => {
    if (productDetails.includes(products)) {
      setproductDetails(productDetails.filter((item) => item !== products));
    } else {
      setproductDetails([products]);
    }
   }
  return (
    <div style={{marginTop:"75px"}}>
    <Header/>
      <div className="Mobile-container">
      {
          Samsung.map((samsung)=>
          
          <div className="Home" key={samsung.Id}>
            <Link to={'/Specifications'} onClick={()=>Details(samsung)} style={{textDecoration:"none"}}>
             <Card style={{ width: '18rem' }} className='Mobile-card'>
             
    <Card.Img variant="top" src={samsung.Images}  className='Mobile-cardimg'/>
  <h5>{samsung.Name}</h5>
  <h4>₹ {samsung.Price.toLocaleString('en-IN')}</h4>
  </Card>
  </Link>
          </div>
          )
      }
      </div>
      <Footer/>
  </div>
  )
}

export default Samsung