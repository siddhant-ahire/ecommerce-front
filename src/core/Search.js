import React, { useState, useEffect } from 'react'
import Card from './Card'
import { getCategories, list } from './apiCore';

const Search = () => {
    const [data, setData] = useState({
        categories:[],
        category:'',
        search:'',
        results:[],
        searched:false
    });

    const {categories, category, search, results, searched} = data

    const loadCategories = () => {
        getCategories().then(dataa => {
            if(dataa.error){
                console.log(dataa.error)
            } else {
                setData({ ...data,categories:dataa })
            }
        })
    }

    useEffect(() => {
        loadCategories();
    }, [])

    const searchMessage = (searched, results) => {
        if(searched && results.length > 0) {
            return `Found ${results.length} products`;
        }
        if(searched && results.length < 1){
            return `No products found`;
        }
    }

    const searchedProducts = (results = []) => (
        <div>
            <h2>
                {searchMessage(searched, results)}
            </h2>
            <div className='row'>
            {results.map((product, i)=>(
                <Card key={i} product={product} />
            ))}
        </div>
        </div>
    )

    const searchData = () => {
        console.log(search,category)
        if(search){
            list({search:search || undefined, category:category})
            .then(response => {
                if(response.error){
                    console.log(response.error)
                } else {
                    setData({...data, results:response, searched:true})
                }
            })
        }
    }

    const searchSubmit = (e) => {
        e.preventDefault();
        searchData();
    }

    const handleChange = (name) => (e) => {
        setData({...data, [name]:e.target.value, searched: false});
    }

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <span className="input-group-text">
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <select className='btn mr-2' onChange={handleChange('category')}>
                            <option value="All">Pick Category</option>
                            {categories.map((c, i) => (
                                <option key={i} value={c._id}>{c.name}</option>
                            ))}
                        </select>
                    </div>
                    <input type="search" className="form-control" onChange={handleChange('search')} placeholder="search by name" />
                </div>
                <div className="btn input-group-append" style={{border:'none'}}>
                    <button className="input-group-text">Search</button>
                </div>
            </span>


        </form>
    )

    return (
        <div className='row'>
            <div className="container mb-3">
                {searchForm()}
            </div>
            <div className="container mb-3">
                {searchedProducts(results)}
            </div>
        </div>
    )
}

export default Search
