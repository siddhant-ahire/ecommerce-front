import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import Layout from '../core/Layout';
import { createNewProduct, getCategories } from './apiAdmin';

const AddProduct = () => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping:'',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createProduct: '',
        redirectToProfile: false,
        formData: ''
    })

    const { name,
        description,
        price,
        categories,
        category,
        quantity,
        shipping,
        loading,
        error,
        createProduct,
        redirectToProfile,
        formData } = values


    //destructure user and token from localstorage

    const { user, token } = isAuthenticated();

    const init = () => {
        getCategories().then(data => {
            if(data.error){
                setValues({...values, error:data.error})
            } else {
                setValues({...values, categories:data,formData: new FormData()})
            }
        })
    }

    useEffect(()=> {
        init();
    }, [])
    
    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value)
        setValues({...values, [name]:value})
    }

    const clickSubmit = (e) => {
        e.preventDefault();
        setValues({...values, error:'', loading:true})
        createNewProduct(user._id, token, formData)
        .then(data => {
            if(data.error){
                setValues({...values, error:data.error})
            } else {
                setValues({
                    ...values, name:"", description:"", photo:"", price:"", quantity:"",error:'', loading:false, createProduct:data.name
                })
            }
            
        })
    }

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')} type="text" className="form-control" value={description}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Price</label>
                <input onChange={handleChange('price')} type="number" className="form-control" value={price}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Category</label>
                <select onChange={handleChange('category')} className="form-control" >
                    <option>Please select</option>
                    {categories&&categories.map((c,i) => (<option value={c._id} key={i}>{c.name}</option>))}
                </select>
            </div>
            <div className="form-group">
                <label className="text-muted">Shipping</label>
                <select onChange={handleChange('shipping')} className="form-control" >
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>
            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input onChange={handleChange('quantity')} type="number" className="form-control" value={quantity}/>
            </div>
            <button className="btn btn-outline-primary">Create Product</button>
        </form>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{display:error ? '' :'none'}}>
            {error}
        </div>
    )
    const showSuccess = () => (
        <div className="alert alert-info" style={{display:createProduct ? '' :'none'}}>
            <h2>{`${createProduct}`} is created!</h2>
        </div>
    )

    const showLoading = () => (
        loading && (<div className="alert alert-success">
            <h2>loading...</h2>
        </div>)
    )
    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin/dashboard" className="text-warning">
                Back to Dashboard
            </Link>
        </div>
    )


    return (
        <Layout title="Add a new product" description={`G'day ${user.name}, ready to add a new product`} className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showError()}
                    {showLoading()}
                    {showSuccess()}
                    {newPostForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    )
}

export default AddProduct
