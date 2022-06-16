import { Button, message} from 'antd';
import React, { useState } from 'react';
import {ShoppingCartOutlined} from '@ant-design/icons';

const ItemCount = ({stock,initial,onAdd}) => {
    const [counter, setcounter] = useState(initial);

    const sumar = () => {
        if(counter < stock){
		setcounter(counter + 1);
        }else{
            message.error('No hay suficientes productos en stock.',3);
        }
	};

	const restar = () => {
		if(counter > initial){
        setcounter(counter - 1);
        }else{
            message.error('Este es el minimo de productos a agregar',3);
        }
	};

    return (
        <div>
        
            <Button type="primary" size="middle" onClick={restar}>-</Button>
            <Button>{counter}</Button>
            <Button type="primary" size="middle" onClick={sumar}>+</Button>
            <br></br>
            <br></br>
            <Button type="primary" size="large"
                icon={<ShoppingCartOutlined />} onClick={ () => onAdd (counter)}>Agregar </Button>
        </div>
    )
};

export default ItemCount;