import React, {useEffect} from 'react';

import logo from './logo.svg';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {makeStyles} from '@material-ui/core/styles'
import {Container} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Navbar from './components/Navbar';

import Todos from './components/Todos';
import Login from './components/Login';
import Register from './components/Register';
import { loadUser } from './store/actions/authActions';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <div>
          <Navbar />
          <Container >
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register/>} />
              <Route path='/' element={<Todos/>} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
