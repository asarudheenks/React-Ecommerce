import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Mycontext } from '../Context/Context'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Cameras() {
  const {Products,productDetails, setproductDetails} = useContext(Mycontext)

  const Cameras =
  Products.filter((cameras)=> cameras.Type === "Camera")

  const handleDetails = (camera)=>{
  if(productDetails.includes(camera)){
setproductDetails(productDetails.filter((item)=> item !== camera))
  }
  else{
    setproductDetails([camera])
  }
}
  return (
    <div style={{marginTop:"75px"}}>
      <Header/>
         <div className="Mobile-container">
        {
            Cameras.map((camera)=>
            
            <div className="Home" key={camera.Id}>
              <Link to={'/Specifications'} onClick={()=>handleDetails(camera)} style={{textDecoration:"none"}}>
               <Card style={{ width: '18rem' }} className='Laptop-card'>
               
      <Card.Img variant="top" src={camera.Images}  className='Laptop-cardimg'/>
    <h5>{camera.Name}</h5>
    <h4>₹ {camera.Price.toLocaleString('en-IN')}</h4>    </Card>
    </Link>
            </div>
            )
        }
        </div>
        <Footer/>
    </div>
  )
}

export default Cameras