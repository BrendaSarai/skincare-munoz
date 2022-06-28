import { Row } from 'antd';
import { useEffect, useState } from "react"
import { useParams } from 'react-router';
import { getProductById } from "../../data/data"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    let { id } = useParams();

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setItem(res)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))
    }, [])

    console.log("item:", item)
    return (
        <Row>
        {
           loading ? <div>Cargando...</div>
           : <ItemDetail 
                    id={item.id}
                    img={item.image_link} 
                    name={item.name} 
                    description={item.description}
                    brand={item.brand}
                    category={item.category}
                    price={item.price} />
        }
        </Row>
    )
}

export default ItemDetailContainer