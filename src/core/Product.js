import React, { useEffect, useState } from 'react'
import { read, listRelated} from './apiCore';
import Card from './Card';
import Layout from './Layout'

const Product = (props) => {

    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if(data.error){
                setError(data.error)
            } else {
                setProduct(data);
                //fetch related product
                listRelated(data._id).then(data => {
                    if(data.error){
                        setError(data.error)
                    } else {
                        setRelatedProducts(data);
                    }
                })
            }
        })
    }

    useEffect(() => {
        const productId = props.match.params.productId
        loadSingleProduct(productId)
    },[props])

    return (
        <Layout
            title={product && product.name}
            description={product && product.description && product.description.substring(0, 100)}
            className="container-fluid"
            >
            <h2 className="mb-4">Single Product</h2>
            <div className="row">
            <div className="col-8">

                {product && 
                product.description &&
                <Card product={product} showViewProductButton={false} />
            }
            </div>
            <div className="col-4">
                <h4>Related Products</h4>
                {relatedProducts.map((p,i)=> (
                    <div className="mb-3">
                    <Card product={p} key={i}/>
                    </div>
                ))}
            </div>
            </div>
        </Layout>
    )
}

export default Product;