import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Image1 from './picture14.jpg';
export default function MainScreen() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Men,Women and Children</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </div>
    )
}
