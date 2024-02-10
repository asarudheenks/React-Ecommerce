import React, { useContext } from 'react'
import { Mycontext } from '../Context/Context'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Footer from '../Footer/Footer'

function Apple() {
  const {Products, productDetails, setproductDetails} = useContext(Mycontext)

  const Apple =
  Products.filter((apple)=> apple.Brand === "APPLE")

  const Details =(products)=>{
    if(productDetails.includes(products)){
      setproductDetails(productDetails.filter((item)=> item !== products))
    }
    else{
      setproductDetails([products])
    }
  }
  return (
    
      <div style={{marginTop:"75px"}}>
      <Header/>
        <div className="Mobile-container">
        {
            Apple.map((apple)=>
            
            <div className="Home" key={apple.Id}>
              <Link to={'/Specifications'} onClick={()=>Details(apple)} style={{textDecoration:"none"}}>
               <Card style={{ width: '18rem' }} className='Mobile-card'>
               
      <Card.Img variant="top" src={apple.Images}  className='Mobile-cardimg'/>
    <h5>{apple.Name}</h5>
    <h4>₹ {apple.Price.toLocaleString('en-IN')}</h4>
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

export default Apple