import { Row } from 'antd';
import { useEffect, useState } from "react"
import { useParams } from 'react-router';
//import { getProductById } from "../../data/data"
import ItemDetail from "../ItemDetail/ItemDetail"

import { collection, query, getDocs, where } from 'firebase/firestore';
import {db} from '../../firebase/firebaseConfig';

function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    let { id } = useParams();

    console.log(id);

    const getProductsById = async () =>{
        const q =query(collection(db, 'skincare'), where ('id', '==', id));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
           docs.push({...doc.data(), id: doc.id});
        })
        setItem(docs);
        setLoading(false)
    }
     
    useEffect(() => {
        getProductsById()
        /*getProductById(id)
            .then(res => {
                setItem(res)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))*/
    }, [])

    console.log("item:", item)
    return (
        <Row>
        {
           loading ? <div>Cargando...</div>
           : <ItemDetail 
                 /*   id={item.id}
                    img={item.image_link} 
                    name={item.name} 
                    description={item.description}
                    brand={item.brand}
                    category={item.category}
                    price={item.price} */ item={item} />
        }
        </Row>
    )
}

export default ItemDetailContainer