import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch, useSelector} from "react-redux"

import { signOut } from '../store/actions/authActions'; 

import {Link, useNavigate } from "react-router-dom"

export default function Navbar() {
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth);
    const dispatch=useDispatch();

    const handleSignout = () => {
        dispatch(signOut());
        navigate("/login");
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' style={{textDecoration: "none", color: "white", fontWeight: "600"}}>My Todo</Link>
          </Typography>
          {user._id ? (
            <>
                <Typography variant="substitle2" sx={{flexGrow:1}}>
                    {user.name}
                </Typography>
                <Button color="inherit" onClick={() => handleSignout()}>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}>Signout</Link>
                </Button>
            </>
          ) : (
            <>
                <Button color="inherit">
                    <Link to='/login' style={{textDecoration: "none", color: "white"}}>Login</Link>
                </Button>
                <Button color="inherit">
                    <Link to='/register' style={{textDecoration: "none", color: 
                "white"}}>
                        Register
                    </Link>
                </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}