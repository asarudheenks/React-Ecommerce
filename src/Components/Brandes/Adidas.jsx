import React, { useContext } from 'react'
import Header from '../Header/Header';
import { Mycontext } from '../Context/Context';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';

function Adidas() {
  const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const Adidas =
   Products.filter((adidas)=>adidas.Brand === "Adidas")

   const Details = (products) => {
    if (productDetails.includes(products)) {
      setproductDetails(productDetails.filter((item) => item !== products));
    } else {
      setproductDetails([products]);
    }
   }
  return (
    <div>
      <div style={{marginTop:"75px"}}>
      <Header/>
        <div className="Mobile-container">
        {
            Adidas.map((adidas)=>
            
            <div className="Home" key={adidas.Id}>
              <Link to={'/Specifications'} onClick={()=>Details(adidas)} style={{textDecoration:"none"}}>
               <Card style={{ width: '18rem' }} className='Mobile-card'>
               
      <Card.Img variant="top" src={adidas.Images}  className='Mobile-cardimg'/>
    <h5>{adidas.Name}</h5>
    <h4>₹ {adidas.Price.toLocaleString('en-IN')}</h4>
    </Card>
    </Link>
            </div>
            )
        }
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Adidas