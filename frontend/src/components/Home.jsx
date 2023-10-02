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
            <Typography variant="h1" className="home-head">Todo List App</Typography>
            {!user._id ? (
                <>
                    <Link style={{textDecoration: "none", color: "white", width: "150px", backgroundColor: "#3f51b5",  textAlign: "center", padding: "10px", borderRadius: "10px", margin: "10px"}} to="/login">LOGIN</Link>
                    <Link style={{textDecoration: "none", color: "white", width: "150px", backgroundColor: "#3f51b5",  textAlign: "center", padding: "10px", borderRadius: "10px"}} to="/register">REGISTER</Link>
                </>
            ) : (
                <>
                    <Link style={{textDecoration: "none", color: "white", width: "150px", backgroundColor: "#3f51b5", textAlign: "center", padding: "10px", borderRadius: "10px", margin: "10px"}} to="/todos">View Todos</Link>
                </>
            )
            }
        </div>
    )
}

export default Home;