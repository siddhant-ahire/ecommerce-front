import React, { useEffect, useState } from 'react'
import { getProducts, getCategories } from './apiCore';
import Checkbox from './Checkbox';
import RadioBox from './RadioBox';
import Layout from './Layout'
import { prices } from './fixedPrices';

const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters:{category:[],price:[]}
    })
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);

    const init = () => {
        getCategories().then(data => {
            if(data.error){
                setError(data.error)
            }else{
                setCategories(data)
            }
        })
    }

    useEffect(()=>{
        init();
        console.log(categories);
    },[])

    const handleFilters = (filters,filterBy) => {
        // console.log('shop',filters,filterBy)
        const newFilters = {...myFilters}
        newFilters.filters[filterBy] = filters;
        setMyFilters(newFilters);
    }

    return (
        <div>
            <Layout title="Shop Page" description="Node React E-commerce App" className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <h4>Filter by categories</h4>
                        <ul>
                        <Checkbox categories={categories} handleFilters={filters => handleFilters(filters,'category')} />

                        </ul>
                        <h4>Filter by Price range</h4>
                        <ul style={{paddingLeft:0}}>
                            <RadioBox
                                prices={prices}
                                handleFilters={filters => 
                                    handleFilters(filters,'prices')
                                }
                            />
                        </ul>
                    </div>
                    <div className="col-8">
                        right
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Shop
