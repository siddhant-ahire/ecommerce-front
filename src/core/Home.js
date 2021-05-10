import React from 'react'
import { API } from '../config'
import Layout from './Layout'

const Home = () => {
    return (
        <div>
            <Layout title="Home Page" description="Node React E-commerce App">{API}</Layout>
        </div>
    )
}

export default Home
