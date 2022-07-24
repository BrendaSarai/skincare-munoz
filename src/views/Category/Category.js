import React from 'react'
import { useParams } from 'react-router';
import { Carousel, Row, Col } from 'antd';
import Carusel from '../../components/Carusel/Carusel';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Category = () => {
  const { categoria } = useParams();

  return (
    <Row style={{marginTop:20}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={20} offset={2} className="gutter-row">
        <ItemListContainer categoria={categoria}/>
      </Col>
    </Row>
        
    
    
  )
}

export default Category