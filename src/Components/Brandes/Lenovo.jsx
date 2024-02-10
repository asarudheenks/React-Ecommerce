import React, { useContext } from 'react'
import { Mycontext } from '../Context/Context';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';

function Lenovo() {
  const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const Lenovo =
   Products.filter((lenovo)=>lenovo.Brand === "Lenovo")

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
            Lenovo.map((lenovo)=>
            
            <div className="Home" key={lenovo.Id}>
              <Link to={'/Specifications'} onClick={()=>Details(lenovo)} style={{textDecoration:"none"}}>
               <Card style={{ width: '18rem' }} className='Mobile-card'>
               
      <Card.Img variant="top" src={lenovo.Images}  className='Mobile-cardimg'/>
    <h5>{lenovo.Name}</h5>
    <h4>₹ {lenovo.Price.toLocaleString('en-IN')}</h4>
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

export default Lenovo