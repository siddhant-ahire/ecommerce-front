import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import { getBraintreeClientToken, processPayment } from './apiCore';
import 'braintree-web'
import DropIn from 'braintree-web-drop-in-react';
import { emptyCart } from './cartHelpers';

const Checkout = ({products,setRun,run}) => {

    const [data, setData] = useState({
        success:false,
        clientToken: null,
        error: '',
        instance: {},
        address:''
    })

    const userId = isAuthenticated() && isAuthenticated().user._id
    const token = isAuthenticated() && isAuthenticated().token

    const getToken =(userId, token) => {
        getBraintreeClientToken(userId, token).then(resData => {
            if(resData.error){
                setData({...data, error:resData.error})
            } else {
                setData({...data, clientToken: resData.clientToken})
            }
        })
    }


    const buy = () => {
        //send the nonce to your server 
        //nonce = data.instance.requestPaymentMethod()

        let nonce;
        let getNonce = data.instance.requestPaymentMethod()
        .then((data) => {
            console.log(data);
            nonce = data.nonce
            //once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
            //and also total to be charged
            console.log('send nonce and total to process:', nonce, getTotal(products))
            const paymentData = {
                paymentMethodNonce : nonce,
                amount:getTotal(products)
            }
            processPayment(userId, token, paymentData)
                .then(response => {
                    setData({...data, success:response.success});
                    //empty cart
                    emptyCart(()=> {
                        setRun(!run)
                        console.log('payment success')
                    })
                })
                .catch(error => console.log(error))
        })
        .catch(error => {
            console.log('dropin error: ',error)
            setData({...data, error:error.message})
        })
    }

    const showDropIn = () => (
        <div onBlur={(_) => setData({...data, error:''})}>
            {data.clientToken !== null && products.length > 0 ? (
                <div>
                    <DropIn options={{
                        authorization:data.clientToken,
                        paypal:{
                            flow:'vault'
                        }
                    }}
                    onInstance={instance => data.instance = instance}
                    />
                    <button className="btn btn-success btn-block" onClick={buy}>Pay</button>
                </div>
            ): null}
        </div>
    )
     
    useEffect(() => {
        getToken(userId,token)
    },[])

    const getTotal = () => {
        return products.reduce((currentValue, nextValue)=> {
            return currentValue + nextValue.count * nextValue.price;
        },0)
    }

    const showCheckOut = () => (
        isAuthenticated() ? (
                <div>{showDropIn()}</div>
        ):(
            <Link to="/signin">
                <button className="btn btn-primary">Sign/Signup</button>
            </Link>
        )
    )

    const showError = error => (
        <div className="alert alert-danger" style={{display:error ? '' : 'none'}}>
            {error}
        </div>
    )
    const showSuccess = success => (
        <div className="alert alert-info" style={{display:success ? '' : 'none'}}>
            Thanks! Your payment was successful!
        </div>
    )

    return (
        <div>
            <h2>Total: Rs {getTotal()}</h2>
            {showSuccess(data.success)}
            {showError(data.error)}
            {showCheckOut()}
        </div>
    )
}

export default Checkout