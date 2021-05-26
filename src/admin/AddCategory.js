import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import Layout from '../core/Layout';
import { createCategory } from './apiAdmin';

const AddCategory = () => {

    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    //destructure user and token from localstorage

    const {user, token} = isAuthenticated()

    const handleChange = (e) => {
        setError('')
        setName(e.target.value)
    }

    const clickSubmit = (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)
        createCategory(user._id, token, {name})
        .then(data=> {
            if(data.error){
               return setError(data.error)
            }
            setError('');
            setSuccess(true);
        })
    }

    const newCategory = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control" onChange={handleChange} autoFocus value={name} required/>
            </div>
            <button className='btn btn-outline-primary'>Create Category</button>
        </form>
    )

    const showSuccess = () => {
        if(success){
            return <h3 className="text-success">{name} is created</h3>
        }
    }
    const showError = () => {
        if(error){
            return <h3 className="text-danger">Category is should be unique</h3>
        }
    }

    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin/dashboard" className="text-warning">
                Back to Dashboard
            </Link>
        </div>
    )


    return (
        <Layout title="Add a new category" description={`G'day ${user.name}, ready to add a new category`} className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showError()}
                    {showSuccess()}
                    {newCategory()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    )
}

export default AddCategory
