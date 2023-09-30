import React from "react";
import {useDispatch} from "react-redux";

import {TextField, Button} from '@material-ui/core';
import {Send} from '@material-ui/icons';

import {addTodo, updateTodo} from '../store/actions/todoActions';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers'
import {useNavigate} from 'react-router-dom';

const AddTodo = ({todo, setTodo}) => {
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo._id){
            const id = todo._id;
            const updatedTodo = {
                name: todo.name,
                isComplete: todo.isComplete,
                date: todo.date,    
                // deadline: todo.deadline,
                author: todo.author,
                uid: todo.uid
            }
            dispatch(updateTodo(updatedTodo,id));
        }
        else{
            const newTodo = {
                ...todo,
                date: new Date()
            }
            dispatch(addTodo(newTodo));
        }
        setTodo({name: '', isCompleted: false});
        navigate('/register');
    }

    return (
        <>
            <form noValidate onSubmit={handleSubmit}
                style={{margin: "0px 30px", padding: "30px", borderRadius: "9px", display: "flex", justifyContent: "space-between", marginTop: "50px"}}>
            <TextField
                    id="enter-todo"
                    label="Add Todo"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    value = {todo.name}
                    onChange = {(e) => setTodo({...todo, name: e.target.value})}
            />
            
            <Button variant="contained" size="small" type="submit"><Send /></Button>
            </form>
        </>
    )
}

export default AddTodo;