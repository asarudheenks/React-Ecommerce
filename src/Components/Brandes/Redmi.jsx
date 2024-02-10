import React, { useContext } from 'react'
import { Mycontext } from '../Context/Context';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';

function Redmi() {
  const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const Redmi =
   Products.filter((redmi)=>redmi.Brand === "Redmi")

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
          Redmi.map((redmi)=>
          
          <div className="Home" key={redmi.Id}>
            <Link to={'/Specifications'} onClick={()=>Details(redmi)} style={{textDecoration:"none"}}>
             <Card style={{ width: '18rem' }} className='Mobile-card'>
             
    <Card.Img variant="top" src={redmi.Images}  className='Mobile-cardimg'/>
  <h5>{redmi.Name}</h5>
  <h4>₹ {redmi.Price.toLocaleString('en-IN')}</h4>
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

export default Redmi