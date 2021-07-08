import React, { useEffect, useState } from 'react'
import { getProducts } from './apiCore';
import Card from './Card';
import {Link} from 'react-router-dom'
import Search from './Search';
import Layout from './Layout'
import Checkout from './Checkout';
import { getCart } from './cartHelpers';


const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false)

    useEffect(() => {
        setItems(getCart())
    },[run])

    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr/>
                {items.map((product, i)=> (<Card key={i} product={product} 
                showAddToCartButton={false} 
                cardToUpdate={true} 
                showRemoveProductButton = {true}
                setRun={setRun}
                run={run}
                />))}
            </div>
        )
    }

    const notItemsMessage = () => {
        <h2>
            Your cart is empty. <br/> <Link to="/shop">Continue Shopping</Link>
        </h2>
    }

    return (
        <Layout
            title="Shopping Cart"
            description = "Manage your cart items. Add remove checkout or continue shopping."
            className="container-fluid"
        >
            <div className="row">
                <div className="col-6">
                    {items.length > 0 ? showItems(items) : notItemsMessage()}
                </div>
                <div className="col-6">
                    <h2 className="mb-4">Your cart summary</h2>
                    <hr />
                    <Checkout setRun={setRun} run={run} products={items}/>
                </div>
            </div>
        </Layout>
    )
}

export default Cart;