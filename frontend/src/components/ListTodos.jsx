import React, { useEffect, useState } from "react";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "@material-ui/core";
import SearchBar from "./SearchBar";
import {TextField, Button} from '@material-ui/core';

import Todo from "./Todo";
import { getTodos } from "../store/actions/todoActions";

const ListTodos = ({todo, setTodo}) => {
    const auth = useSelector((state) => state.auth);
    const todos = useSelector((state) => state.todos);
    // const todos = temp_todos.filter((todo) => todo.uid === auth._id);
    const dispatch = useDispatch();

    const [filterText, setFilterText] = useState("");
    const [filteredTodos, setFilteredTodos] = useState([]);
 
    useEffect(() => {
        dispatch(getTodos());
    }, [todo._id, dispatch]);

    if(!auth._id){
        return(
            <Navigate to='/login' />
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(filterText.trim() === ""){
            setFilteredTodos([]);
        }
        else{
            const filtered = todos.filter((todo) => todo.name.toLowerCase().includes(filterText.toLowerCase()));
            setFilteredTodos(filtered);
        }
    }

    return (
        <>
            <div style={{margin: "20px auto", padding: "20px", textAlign: "center"}}>
                <Typography variant="h4">
                    {" "}
                    {todos.length > 0 ? "Your Todos" : "No Todos to display"}{" "}
                </Typography>

                <div>
                    <form noValidate onSubmit={handleSubmit}
                        style={{margin: "0px 30px", padding: "30px", borderRadius: "9px", marginTop: "50px"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <TextField
                                    id="enter-todo"
                                    label="Search Todo"
                                    variant="outlined"
                                    autoFocus
                                    style={{width: "600px"}}
                                    size="small"
                                    value = {filterText}
                                    onChange = {(e) => {setFilterText(e.target.value)}}
                            />
                            
                            <Button variant="contained" size="small" type="submit">Filter</Button>
                        </div>
                    </form>
                </div>

                {filteredTodos.length > 0 ? 
                    filteredTodos.map((todo) => {
                        return (
                            <Todo 
                                todo={todo}
                                key={todo._id}
                                setTodo={setTodo}
                                todos={todos}
                            />
                        )
                    })
                    :
                    todos.map((todo) => {
                        return (
                            <Todo 
                                todo={todo}
                                key={todo._id}
                                setTodo={setTodo}
                                todos={todos}
                            />
                        );
                    })
                }
                
            </div>
        </>
    );
};

export default ListTodos;



