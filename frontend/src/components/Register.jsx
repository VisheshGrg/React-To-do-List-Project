import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link } from "react-router-dom";

import { Typography, TextField, Button } from "@material-ui/core";

import { register } from "../store/actions/authActions";

const Register = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "", 
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(user));
        setUser({name: "", email: "", password: ""});
        // navigate('/login');
    }

    if(auth._id) return <Navigate to="/" />;

    return (
        <>
            <form
                noValidate
                onSubmit={handleSubmit}
                style={{
                    margin: "0px auto",
                    padding: "30px",
                    borderRadius: "9px",
                    boxShadow: "0px 0px 12px -3px #000000",
                    width: "600px",
                    textAlign: "center",
                    marginTop: "100px",
                    backgroundColor: "#ffffff", 
                }}
            >
            <Typography variant="h4" style={{ marginBottom: "40px", color: "#333" }}>Register</Typography>  
            <TextField
                id="enter-name"
                label="Name"
                variant="outlined"
                fullWidth
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                style={{margin: "10px"}}
                />  
            <TextField
                id="enter-email"
                label="Email"
                variant="outlined"
                fullWidth
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                style={{margin: "10px"}}
                />
            <TextField
                id="enter-password"
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                style={{margin: "10px", marginBottom: "40px"}}
                />
            <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                style={{margin: "10px", width: "100%", marginBottom: "30px"}}
                >
                Register
            </Button>
            <Typography variant="body2">Already have an account? <Link to='/login' style={{textDecoration: "none", color: "purple"}}>Login</Link></Typography>
            </form>
        </>
    );
};

export default Register;