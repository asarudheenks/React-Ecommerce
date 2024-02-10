import React, { useContext } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Mycontext } from '../Context/Context'
import Footer from '../Footer/Footer'

function Nike() {
  const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const Nike =
   Products.filter((nike)=>nike.Brand === "Nike")

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
        Nike.map((nike)=>
        
        <div className="Home" key={nike.Id}>
          <Link to={'/Specifications'} onClick={()=>Details(nike)} style={{textDecoration:"none"}}>
           <Card style={{ width: '18rem' }} className='Mobile-card'>
           
  <Card.Img variant="top" src={nike.Images}  className='Mobile-cardimg'/>
<h5>{nike.Name}</h5>
<h4>₹ {nike.Price.toLocaleString('en-IN')}</h4>
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

export default Nike