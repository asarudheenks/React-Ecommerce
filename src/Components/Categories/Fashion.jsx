import React, { useContext } from 'react'
import { Mycontext } from '../Context/Context'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Fashion() {

  const {Products,productDetails, setproductDetails,} = useContext(Mycontext)

  const Fashion =
  Products.filter((fashion)=> fashion.Type === "Fashion")

  const handleDetails = (fashion)=>{
    if(productDetails.includes(fashion)){
  setproductDetails(productDetails.filter((item)=> item !== fashion))
    }
    else{
      setproductDetails([fashion])
    }
  }
  return (
    <div style={{marginTop:"75px"}}>
      <Header/>
      <div className="Mobile-container">
        {
            Fashion.map((fashion)=>
            
            <div className="Home" key={fashion.Id}>
              <Link to={'/Specifications'} onClick={()=>handleDetails(fashion)} style={{textDecoration:"none"}}>
               <Card style={{ width: '18rem' }} className='Mobile-card'>
               
      <Card.Img variant="top" src={fashion.Images}  className='Mobile-cardimg'/>
    <h5>{fashion.Name}</h5>
    <h4>₹ {fashion.Price.toLocaleString('en-IN')}</h4>    </Card>
    </Link>
            </div>
            )
        }
        </div>
        <Footer/>
    </div>
  )
}

export default Fashion