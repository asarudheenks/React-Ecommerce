import React, { useContext } from 'react'
import { Mycontext } from '../Context/Context'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './Laptops.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Laptops() {
  const {Products, productDetails, setproductDetails} = useContext(Mycontext)

  const Laptop =
  Products.filter((laptop)=> laptop.Type === 'Laptops')

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
        <div className="Laptop-container">
        {
            Laptop.map((laptop)=>
            
            <div className="Home" key={laptop.Id}>
              <Link to={'/Specifications'} onClick={()=>Details(laptop)} style={{textDecoration:"none"}}>
               <Card style={{ width: '18rem' }} className='Laptop-card'>
               
      <Card.Img variant="top" src={laptop.Images}  className='Laptop-cardimg'/>
    <h5>{laptop.Name}</h5>
    <h4>₹ {laptop.Price.toLocaleString('en-IN')}</h4>    </Card>
    </Link>
            </div>
            )
        }
        </div>
        <Footer/>
    </div>
  )
}

export default Laptops