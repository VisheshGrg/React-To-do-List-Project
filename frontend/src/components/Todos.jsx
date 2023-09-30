import React, {useState} from "react"
import {useSelector} from 'react-redux';

import AddTodo from './AddTodo';
import ListTodos from "./ListTodos";

export default function Todos(){

    const intialTodo = {
        name: "",
        isComplete: false,
        // deadline: ""
    };

    const auth = useSelector((state) => state.auth); 
    const [todos, setTodos] = useState(intialTodo);

    return (
        <>
            <div style={{textAlign: "center"}}>
                {auth._id ? (
                    <>
                        <AddTodo todo={todos} setTodo={setTodos} />
                    </>
                ) : (
                    <></>
                )}
                <ListTodos todo={todos} setTodo={setTodos} />
            </div>
        </>
    );
};