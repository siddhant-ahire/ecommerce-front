import React, { useEffect, useState } from 'react'
import { getProducts, getCategories, getFilteredProducts } from './apiCore';
import Checkbox from './Checkbox';
import RadioBox from './RadioBox';
import Layout from './Layout';
import Card from './Card'
import { prices } from './fixedPrices';

const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters:{category:[],price:[]}
    })
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([])

    const init = () => {
        getCategories().then(data => {
            if(data.error){
                setError(data.error)
            }else{
                setCategories(data)
            }
        })
    }

    const loadFilteredResults = (newFilters) => {
        getFilteredProducts(0, limit, newFilters).then(data => {
            if(data.error){
                setError(data.error)
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0)
            }
        })
    }


    const loadMore = () => {
        const toSkip = skip + limit;
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if(data.error){
                setError(data.error)
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip)
            }
        })
    }

    const loadMoreButton = () => {
        return (
            size > 0 && size >= limit && (
                <button className="btn btn-warning mb-5" onClick={loadMore}>
                    Load More
                </button>
                ))    
        }
    

    useEffect(()=>{
        init();
        loadFilteredResults(myFilters.filters);
    },[])

    const handleFilters = (filters,filterBy) => {
        // console.log('shop',filters,filterBy)
        const newFilters = {...myFilters}
        newFilters.filters[filterBy] = filters;

        if(filterBy === 'price'){
            let priceValues = handlePrice(filters)
            newFilters.filters[filterBy] = priceValues;            
        }
        
        loadFilteredResults(newFilters.filters);
        setMyFilters(newFilters);
    }

    const handlePrice = value => {
        const data = prices;
        let array = [];

        for (let key in data) {
            if(data[key]._id === parseInt(value)){
                array = data[key].array;
            }
        }
        return array
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
                                    handleFilters(filters,'price')
                                }
                            />
                        </ul>
                    </div>
                    <div className="col-8">
                        <h2 className="mb-4">Products</h2>
                        <div className='row'>
                            {filteredResults.map((product,i) => (
                                <div className="col-md-4 mb-3 col-12">
                                    <Card product={product} key={i}/>
                                </div>
                            ))}
                        </div>
                        <hr />
                    {loadMoreButton()}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Shop
