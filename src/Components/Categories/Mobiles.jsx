import React, { useContext } from 'react'
import { Mycontext } from '../Context/Context'
import { Card } from 'react-bootstrap'
import './Mobiles.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function Mobiles() {
  const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const Mobiles =
   Products.filter((mobiles)=>mobiles.Type === "Mobile")

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
            Mobiles.map((mobile)=>
            
            <div className="Home" key={mobile.Id}>
              <Link to={'/Specifications'} onClick={()=>Details(mobile)} style={{textDecoration:"none"}}>
               <Card style={{ width: '18rem' }} className='Mobile-card'>
               
      <Card.Img variant="top" src={mobile.Images}  className='Mobile-cardimg'/>
    <h5>{mobile.Name}</h5>
    <h4>₹ {mobile.Price.toLocaleString('en-IN')}</h4>
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

export default Mobiles