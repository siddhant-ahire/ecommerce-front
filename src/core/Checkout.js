import React from 'react'
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';

const Checkout = ({products}) => {

    const getTotal = () => {
        return products.reduce((currentValue, nextValue)=> {
            return currentValue + nextValue.count * nextValue.price;
        },0)
    }

    const showCheckOut = () => (
        isAuthenticated() ? (
            <Link to="/">
                <button className="btn btn-success">Checkout</button>
            </Link>
        ):(
            <Link to="/signin">
                <button className="btn btn-primary">Sign/Signup</button>
            </Link>
        )
    )

    return (
        <div>
            <h2>Total: Rs {getTotal()}</h2>
            {showCheckOut()}
        </div>
    )
}

export default Checkout
