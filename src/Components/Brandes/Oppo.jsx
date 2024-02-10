import React, { useContext } from 'react'
import { Mycontext } from '../Context/Context';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';

function Oppo() {
  const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const Oppo =
   Products.filter((oppo)=>oppo.Brand === "OPPO")

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
          Oppo.map((oppo)=>
          
          <div className="Home" key={oppo.Id}>
            <Link to={'/Specifications'} onClick={()=>Details(oppo)} style={{textDecoration:"none"}}>
             <Card style={{ width: '18rem' }} className='Mobile-card'>
             
    <Card.Img variant="top" src={oppo.Images}  className='Mobile-cardimg'/>
  <h5>{oppo.Name}</h5>
  <h4>₹ {oppo.Price.toLocaleString('en-IN')}</h4>
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

export default Oppo