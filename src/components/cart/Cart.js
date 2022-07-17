import { Form, Input, List, Modal, Row, Col, Button } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {DeleteOutlined} from '@ant-design/icons';
import { CartContext } from '../../contexts/CartContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

const initialState = {
	name: '',
	email: '',
	phone: '',
};

const Cart = () => {

  const {cart, totalPay, removeItem, clear} = useContext(CartContext);
  const [loading, setLoading] = useState(true)
  let [data, setData] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [id, setID] = useState('');



	const comprar = async () => {
    console.log(data);
    const docRef = await addDoc(collection(db, "data"), {
      data
    });
    console.log("Document written with ID: ", docRef.id);
    setID(docRef.id);
    setData(initialState);
	};



     
  useEffect(() => {
    if (cart.length >= 1){
      setLoading(false);
    }else{
      setLoading(true);
    }
  },[cart]);

  return (
    <Row>
      <Col span={12}>
        {loading ? (
            <div>Cargando...</div>
        ):(
          <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 1,
          }}
          dataSource={cart}
          footer={
            <div>
              ¿Estás listo para comprar? <h1>Total: {totalPay()}</h1> 
              <Button type="primary" size="large" 
                onClick={() => {
                  Modal.info({
                    title: 'Ingresa tus datos para terminar tu compra',
                    width: 600,
                    icon: <ShoppingCartOutlined/>,
                    content: (
                      <Form 
                        labelCol={{
                          span: 8,
                        }}
                        wrapperCol={{
                          span: 16,
                        }}>
                        <Form.Item 
                          label="Nombre Completo"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: 'Por favor ingresa tu nombre!',
                            },
                          ]}>
                          <Input
                            onChange={(e) => {
                              let nombre = e.target.value;
                              data = { ...data, name: nombre };
                            }}
                          />
                        </Form.Item>
                        <Form.Item 
                          label="Correo electrónico"
                          name="email"
                          rules={[{ required: true, message: 'Ingresa tu correo electrónico!' }]}>
                          <Input
                            onChange={(e) => {
                              let siglas = e.target.value;
                              data = { ...data, email: siglas };
                            }}
                          />
                        </Form.Item>
                        <Form.Item 
                          label="Número de teléfono"
                          name="phone"
                          rules={[{ required: true, message: 'Ingresa tu número de teléfono!' }]}>
                          <Input
                            onChange={(e) => {
                              let creditos = e.target.value;
                              data = { ...data, phone: creditos};
                            }}
                          />
                        </Form.Item>
                      </Form>
                    ),
                    okText: 'Actualizar',
                    cancelText: 'Cancelar',
                    closable: true,
                    onOk: async () => {
                      await comprar(data);
                    },
                  });
                }}
              >Comprar </Button>
              <Button type="primary" size="large" onClick={ () => clear()} style={{width:200, marginLeft:360}}>Limpiar carrito</Button>
            </div>
          }
          renderItem={item => (
            <List.Item
              key={item.id}
              extra={
                <img
                  width={150}
                  height={150}
                  alt={item.name}
                  src={item.image_link}
                />
              }
            >
              <List.Item.Meta
                title={<Link to={`/item/${item.id}`}>{item.name}</Link>}
                description={item.quantity}
              />
              {item.price}
              <br></br>
              <br></br>
              <Button type="danger" size="large"
                icon={<DeleteOutlined/>} block onClick={ () => removeItem(`${item.id}`)}>Eliminar Producto </Button>
            
            </List.Item>
          )}
        />
        )}
        {/*<Modal
        title="Ingresa tus datos para terminar tu compra"
        visible={modal2Visible}
        okText="Continuar compra"
        cancelText="Cancelar compra"
        onCancel={() => setModal2Visible(false)}
        onOk = {async () => {
          await comprar(values);
        }}
      >
         <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            form={form}
          >
            <Form.Item
              label="Nombre Completo"
              name="name"
              rules={[{ required: true, message: 'Ingresa tu nombre!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Correo electrónico"
              name="email"
              rules={[{ required: true, message: 'Ingresa tu correo electrónico!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Número de teléfono"
              name="phone"
              rules={[{ required: true, message: 'Ingresa tu número de teléfono!' }]}
            >
              <Input />
            </Form.Item>
          </Form>
      </Modal>*/}
      </Col>
    </Row>
    

  )
}

export default Cart