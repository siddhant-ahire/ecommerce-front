import React, { useState } from 'react'
import { isAuthenticated } from '../auth';
import Layout from '../core/Layout';

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
    }

    const newCategory = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control" onChange={handleChange} value={name}/>
            </div>
            <button className='btn btn-outline-primary' onClick={clickSubmit}>Create Category</button>
        </form>
    )

    return (
        <Layout title="Add a new category" description={`G'day ${name}, ready to add a new category`} className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {newCategory()}
                </div>
            </div>
        </Layout>
    )
}

export default AddCategory
