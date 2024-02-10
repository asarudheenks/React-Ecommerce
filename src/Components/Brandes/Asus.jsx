import React, { useContext } from 'react'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Mycontext } from '../Context/Context';
import Footer from '../Footer/Footer';

function Asus() {
  const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const Asus =
   Products.filter((asus)=>asus.Brand === "ASUS")

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
            Asus.map((asus)=>
            
            <div className="Home" key={asus.Id}>
              <Link to={'/Specifications'} onClick={()=>Details(asus)} style={{textDecoration:"none"}}>
               <Card style={{ width: '18rem' }} className='Mobile-card'>
               
      <Card.Img variant="top" src={asus.Images}  className='Mobile-cardimg'/>
    <h5>{asus.Name}</h5>
    <h4>₹ {asus.Price.toLocaleString('en-IN')}</h4>
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

export default Asus