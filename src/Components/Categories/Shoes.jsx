import React, { useContext } from 'react'
import { Mycontext } from '../Context/Context'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Shoes() {

  const {Products,productDetails, setproductDetails} = useContext(Mycontext)

  const Shoes =
  Products.filter((shoes)=> shoes.Type === "Shoes")

const handleDetail =(product)=>{
  if(productDetails.includes(product)){
    setproductDetails(productDetails.filter((shoe)=> shoe !== product))
  }
  else{
    setproductDetails([product])
  }
}
  return (
    <div style={{marginTop:"75px"}}>
      <Header/>
      <div className="Mobile-container">
        {
            Shoes.map((shoes)=>
            
            <div className="Home" key={shoes.Id}>
              <Link to={'/Specifications'} onClick={()=>handleDetail(shoes)} style={{textDecoration:"none"}}>
               <Card style={{ width: '18rem' }} className='Laptop-card'>
               
      <Card.Img variant="top" src={shoes.Images}  className='Laptop-cardimg'/>
    <h5>{shoes.Name}</h5>
    <h4>₹ {shoes.Price.toLocaleString('en-IN')}</h4>
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

export default Shoes