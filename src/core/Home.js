import React, { useEffect, useState } from 'react'
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import Layout from './Layout'

const Home = () => {
    const [productBySell, setProductBySell] = useState([]);
    const [productByArrival, setProductByArrival] = useState([]);
    const [error,setError] = useState(false);

    const loadProductBySell = () => {
        getProducts('sold').then(data => {
            if(data.error){
                setError(data.error);
            } else {
                setProductBySell(data);
            }
        })
    }
    const loadProductByArrival = () => {
        getProducts('createdAt').then(data => {
            if(data.error){
                setError(data.error);
            } else {
                setProductByArrival(data);
            }
        })
    }

    useEffect(() => {
        loadProductByArrival();
        loadProductBySell();
    },[])

    return (
        <div>
            <Layout title="Home Page" description="Node React E-commerce App" className="container-fluid">
                <Search/>
                <h2 className="mb-4">Best Sellers</h2>
                <div className='row'>
                {productBySell.map((product,i) => (
                    <div className="col-md-4 mb-3 col-12">
                    <Card key={i} product={product}/>
                    </div>
                    ))}
                </div>
                <h2 className="mb-4">New Arrivals</h2>
                <div className="row">

                {productByArrival.map((product,i) => (
                <div className="col-md-4 mb-3 col-12">
                    <Card key={i} product={product}/>
                    </div>
                    ))}
                    </div>
            </Layout>
        </div>
    )
}

export default Home
