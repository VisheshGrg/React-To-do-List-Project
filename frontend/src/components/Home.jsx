import React from "react";
import './Home.css'
import {Typography} from "@material-ui/core";
import {TextField, Button} from '@material-ui/core';
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const user = useSelector((state) => state.auth);

    return (
        <div className="home">
            <Typography variant="h1" className="heading">Todo List App</Typography>
            {!user._id ? (
                <>
                    <Button variant="contained" color="primary"  style={{margin: "10px", width: "200px"}}><Link style={{textDecoration: "none", color: "white"}} to="/login">Login</Link></Button>
                    <Button variant="contained" color="primary"  style={{margin: "10px", width: "200px"}}><Link style={{textDecoration: "none", color: "white"}} to="/register">Register</Link></Button>
                </>
            ) : (
                <>
                    <Button variant="contained" color="primary"  style={{margin: "10px", width: "200px"}}><Link style={{textDecoration: "none", color: "white"}} to="/todos">View Todos</Link></Button>
                </>
            )
            }
        </div>
    )
}

export default Home;