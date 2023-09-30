import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

import { Typography, TextField, Button } from "@material-ui/core";

import { login } from "../store/actions/authActions";

const Login = () => {
    const auth=useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [creds,setCreds] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(creds.email, creds.password));
        setCreds({email: "", password: ""});
        // navigate('/');
    };

    if(auth._id) return <Navigate to="/todos" />;

    return (
        <>
            <form
                noValidate
                onSubmit={handleSubmit}
                style={{margin: "0px auto", padding: "30px", borderRadius: "9px", boxShadow: "0px 0px 12px -3px #000000", width: "600px", textAlign: "center", marginTop: "100px"}}
            >
                <Typography variant="h4" style={{marginBottom: "40px"}}>Login</Typography>
                <TextField 
                    id="enter-email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={creds.email}
                    onChange={(e) => setCreds({...creds, email: e.target.value})}
                    style={{margin: "10px"}}
                />
                <TextField
                    id="enter-password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    value={creds.password}
                    onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                    style={{margin: "10px", marginBottom: "40px"}}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="small"
                    style={{margin: "10px", width: "100%", marginBottom: "30px"}}
                >
                    Login
                </Button>
                <Typography variant="body2">Don't have an account? <Link to='/register' style={{textDecoration: "none", color: "purple"}}>Register</Link></Typography>
            </form>
        </>
    );
};

export default Login;