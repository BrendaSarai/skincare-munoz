import { Carousel } from 'antd';
import React from 'react';
import fondo from '../../assets/img/fondoSkinCare.jpg';
import fondo2 from '../../assets/img/fondoSkinCare2.jpg';

const Carusel = () => {
  return (
   
        <Carousel autoplay dots={false}>
          <div>
            <img src={fondo} height='500px' width='100%'/>
          </div>
          <div>
            <img src={fondo2} height='500px' width='100%'/>
          </div>
        </Carousel>
    
  )
}

export default Carusel