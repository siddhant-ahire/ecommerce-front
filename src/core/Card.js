import React from 'react'
import { Link } from 'react-router-dom'
import ShowImage from './ShowImage'
import moment from 'moment'

const Card = ({product, showViewProductButton = true}) => {

    const showStock = (quantity) => {
        return quantity > 0 ? (
            <span className="badge badge-primary badge-pill">In Stock</span>
        ):(
        <span />
        )
    }

    return (
            <div className="card">
                <div className="card-header name">
                    {product.name}
                </div>
                <div className="card-body">
                    <ShowImage item={product} url="product" />
                    <p>{product.description.substring(0,100)}..</p>
                    <p className="black-8">Rs{product.price}</p>
                    <p className="black-9">
                        Category: {product.category && product.category.name}
                    </p>
                    <p className="black-10">
                        Added on {moment(product.createdAt).fromNow()}
                    </p>

                    {showStock(product.quantity)}
                    <br />
                    {showViewProductButton &&

                        <Link to={`/product/${product._id}`}>
                            <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
                            View Product
                        </button>
                    </Link>
                    }
                    <button className="btn btn-outline-warning mt-2 mb-2">
                        Add to Cart
                    </button>
                </div>
            </div>
    )
}

export default Card
