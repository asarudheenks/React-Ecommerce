import React, { useContext } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Mycontext } from '../Context/Context'
import Footer from '../Footer/Footer'

function Puma() {
  const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const Puma =
   Products.filter((puma)=>puma.Brand === "Puma")

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
          Puma.map((puma)=>
          
          <div className="Home" key={puma.Id}>
            <Link to={'/Specifications'} onClick={()=>Details(puma)} style={{textDecoration:"none"}}>
             <Card style={{ width: '18rem' }} className='Mobile-card'>
             
    <Card.Img variant="top" src={puma.Images}  className='Mobile-cardimg'/>
  <h5>{puma.Name}</h5>
  <h4>₹ {puma.Price.toLocaleString('en-IN')}</h4>
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

export default Puma