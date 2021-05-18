import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import Layout from '../core/Layout'
import { authenticate, isAuthenticated, signin } from '../auth'

const Signin = () => {

    const [values, setValues] = useState({
        email: 'siddhantahire55@gmail.com',
        password: 'Ahire@000',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, error, loading, redirectToReferrer } = values;
    const {user} = isAuthenticated();
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    };



    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading:true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                } else {
                    authenticate(
                        data,
                        () => {
                            setValues({
                                ...values,
                                redirectToReferrer:true
                            })
                        })
                }
            })
    }

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showLoading = () => (
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        )
    )

    const redirectUser = () => {
        if(redirectToReferrer) {
            if(user.role === 1){
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/user/dashboard" />
            }
        }
        if(isAuthenticated()) {
            return <Redirect to="/"/>
        }
    }

    const signInForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
            </div>
            <div className="form-group">
                <label className="text-muted">password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div>
            <button onClick={clickSubmit} type='submit' className="btn btn-primary">Submit</button>
        </form>
    )

    return (
        <div>
            <Layout title="Signin" description="Node React E-commerce App" className="container col-md-8 offset-md-2">
                {showError()}
                {showLoading()}
                {signInForm()}
                {redirectUser()}
            </Layout>
        </div>
    )
}

export default Signin
