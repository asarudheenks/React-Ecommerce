import React, { useContext } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Mycontext } from '../Context/Context'
import Footer from '../Footer/Footer'

function Hp() {
    const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const HP =
   Products.filter((hp)=>hp.Brand === "Hp")

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
            HP.map((hp)=>
            
            <div className="Home" key={hp.Id}>
              <Link to={'/Specifications'} onClick={()=>Details(hp)} style={{textDecoration:"none"}}>
               <Card style={{ width: '18rem' }} className='Mobile-card'>
               
      <Card.Img variant="top" src={hp.Images}  className='Mobile-cardimg'/>
    <h5>{hp.Name}</h5>
    <h4>₹ {hp.Price.toLocaleString('en-IN')}</h4>
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

export default Hp