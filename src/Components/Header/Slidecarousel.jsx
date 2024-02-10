import React from 'react'
import { Carousel } from 'react-bootstrap'

function Slidecarousel() {
  return (
    <div className='carousel'> 
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/G/31/img22/Laptops/Smartchoice/Laptops/Header/Revised/sep_1500x300._CB595974029_.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/G/31/img23/BAU-Dec/Laptops_Brand-Banners/Zebronics_ELP_1500x300._CB570735087_.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/G/31/boat/nirvana/ion/28th/dec/new/1500x300-SN._CB587146966_.gif"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slidecarousel