import React, { useContext } from 'react'
import { Mycontext } from '../Context/Context';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';

function Realme() {
  const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const Realme =
   Products.filter((realme)=>realme.Brand === "Realme")

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
          Realme.map((realme)=>
          
          <div className="Home" key={realme.Id}>
            <Link to={'/Specifications'} onClick={()=>Details(realme)} style={{textDecoration:"none"}}>
             <Card style={{ width: '18rem' }} className='Mobile-card'>
             
    <Card.Img variant="top" src={realme.Images}  className='Mobile-cardimg'/>
  <h5>{realme.Name}</h5>
  <h4>₹ {realme.Price.toLocaleString('en-IN')}</h4>
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

export default Realme