import '../../assets/css/Styles.css';
import {useState, useContext} from 'react'
import { Form, Input, Row, Col, Button, message } from 'antd';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';
import Aviso from '../../components/Aviso/Aviso';
import { CartContext } from '../../contexts/CartContext';



const Register = () => {
    const {cart, totalPay} = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const products = () =>{
        let items = [];
        cart.forEach((item) => items.push({id: item.id, title: item.name, price: item.price, quantity: item.quantity}));
        return items;
    };
    
    const buyer =  { 
        name: '', 
        phone: '', 
        email: '',
        items: products(),
        date: Timestamp.fromDate(new Date()),
        total: totalPay()
    };

    const email = {
        email: ''
    }
    
    let [data, setData] = useState(buyer);
    let [check, setCheck] = useState(email);
    const [identificador, setIdentificador] = useState('');

    
    const comprar = () => {
        if (data.email!==check.email){
            setLoading(false);
            message.error('El correo electrónico no coincide!')
        }else{
            generarCompra();
        }  
    };

    const generarCompra = async () => {
        const docRef = await addDoc(collection(db, "data"), {data});
        setData(buyer);
        setIdentificador(docRef.id);        
    };
    
  

    return (
        <Row style={{marginTop:80, textAlign:'center'}}>
        <Col span={12}>
            <Form 
            style={{textAlign:'right'}}
            form={form}
            onFinish={comprar}
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
                    message: 'Por favor ingresa tu nombre completo!',
                },
                ]}>
                <Input
                onChange={(e) => {
                    let name = e.target.value;
                    data = { ...data, name: name };
                }}
                />
            </Form.Item>
            <Form.Item 
                label="Número de teléfono"
                name="phone"
                rules={[{ required: true, message: 'Ingresa tu número de teléfono!' }]}>
                <Input 
                onChange={(e) => {
                    let phone = e.target.value;
                    data = { ...data, phone: phone};
                }}
                />
            </Form.Item>
            <Form.Item 
                label="Correo electrónico"
                name="email"
                rules={[{ required: true, message: 'Ingresa tu correo electrónico!' }]}>
                <Input
                onChange={(e) => {
                    let email = e.target.value;
                    data = { ...data, email: email };

                }}
                />
            </Form.Item>
            <Form.Item 
                label="Confirma tu correo electrónico"
                name="email2"
                rules={[{ required: true, message: 'Ingresa tu correo electrónico!' }]}>
                <Input
                onChange={(e) => {
                    let email2 = e.target.value;
                    check = { ...check, email: email2 };
                }}
                />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>
                 <Button className='primary' htmlType='submit' loading={loading}>
                    Continuar compra
                </Button>
            </Form.Item>
            </Form> 
            {identificador && <Aviso id={identificador} />}         
        </Col>
        </Row>
    )
}

export default Register