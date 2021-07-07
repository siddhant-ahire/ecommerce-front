import React, { useState } from 'react'
import { Link, Redirect} from 'react-router-dom'
import ShowImage from './ShowImage'
import moment from 'moment'
import { addItem , removeItem, updateItem} from './cartHelpers'

const Card = ({product, 
    showViewProductButton = true, 
    showAddToCartButton = true, 
    cardToUpdate = false,
    showRemoveProductButton = false,
    setRun = f => f,
    run = undefined
    }) => {
    const [redirect, setRedirect] = useState('');
    const [count, setCount] = useState(product.count);
    const showStock = (quantity) => {
        return quantity > 0 ? (
            <span className="badge badge-primary badge-pill">In Stock</span>
        ):(
        <span />
        )
    }

    const addToCart = () => {
        addItem(product, () => {
            setRedirect(true);
        })
    }

    const shouldRedirect = (redirect) => (
        redirect && <Redirect to="/cart"/>
    )

    const showRemoveButton = showRemoveProductButton => {
        return (
            showRemoveProductButton && (
                <button onClick={() => {
                    removeItem(product._id);
                    setRun(!run);
                }} className="btn btn-outline-danger mt-2 mb-2">Remove Product</button>
            )
        )
    }

    const handleChange = (id) => (event) => {
        setRun(!run);
        setCount(event.target.value < 1 ? 1 : event.target.value)
        if(event.target.value >=1){
            updateItem(id, event.target.value);
        }
    }

    const showCartUpdateOptions = ( cartUpdate) => {
        return cartUpdate && <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Adjust Quantity</span>
                </div>
                <input type="number" className="form-control" onChange={handleChange(product._id)} value={count} />
            </div>
        </div>
    }

    return (
            <div className="card">
                <div className="card-header name">
                    {product.name}
                </div>
                <div className="card-body">
                    {shouldRedirect(redirect)}
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
                    {showAddToCartButton &&
                        <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2">
                        Add to Cart
                    </button>
                    }
                    {showRemoveButton(showRemoveProductButton)}
                    {showCartUpdateOptions(cardToUpdate)}
                </div>
            </div>
    )
}

export default Card
