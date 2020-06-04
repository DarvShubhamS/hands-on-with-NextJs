import React from 'react'
import User from '../../components/User'
import classes from './auth.module.css'
const authindexPage = () => (
    <div className={classes.auth}>
        <h1>Auth Index Page</h1>
        <User name="shubham" />
    </div>
)

export default authindexPage