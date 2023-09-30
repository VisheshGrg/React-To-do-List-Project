import React from "react"
import {useDispatch, useSelector} from "react-redux";

import {Typography, ButtonGroup, Button} from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import ListItemButton from "@mui/material/ListItemButton";
import moment from "moment";
import {useNavigate} from "react-router-dom"
import Checkbox from "@mui/material/Checkbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import { deleteTodo, checkTodo } from "../store/actions/todoActions";

const Todo = ({todo, setTodo, todos}) => {
    const labelId = `checkbox-list-label-${todo._id}`;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const handleOnUpdateClick = (id) => {
        const foundTodo = todos.find((todo) => todo._id === id);
        setTodo({...foundTodo});
        window.scrollTo({
            top: 0,
            left: 0,
            behaviour: 'smooth'
        });
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        navigate('/register');
    }

    const handleCheck = (id) => {
        dispatch(checkTodo(id));
        navigate('/register');
    }

    return (
        <>
            <div style={{margin: "20px auto", padding: "20px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "lightblue", borderRadius: "12px", width: "500px", height: "auto"}}>
                <div>
                    <ListItemButton role="undefined" style={{display: "flex"}} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={todo.isComplete}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ "aria-labelledby": labelId }}
                                onChange={() => handleCheck(todo._id)}
                            />
                        </ListItemIcon>
                    </ListItemButton>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", height: "auto", width: "300px"}}>
                    {todo.isComplete ? (
                        <Typography variant="subtitle1" style={{textDecoration: "line-through", maxWidth: "300px", height: "auto", textAlign: "left", marginBottom: "10px"}}>
                            {todo.name}
                        </Typography>
                    ) : (
                        <Typography variant="subtitle1" style={{maxWidth: "300px", height: "auto", wordBreak: "break-all", whiteSpace: "normal", textAlign: "left", marginBottom: "10px"}}>{todo.name}</Typography>
                    )}
                    <Typography variant="body2" style={{color: "grey"}}>
                        {moment(todo.date).fromNow()}
                    </Typography>
                </div>
                {auth._id && (auth._id === todo.uid) ? (
                    <div style={{display: "flex"}}>
                        {/* <Button onClick={() => handleCheck(todo._id)}>
                        {todo.isComplete ? (
                        <CheckCircle style={{color: "green"}}/>
                        ) : (
                        <CheckCircle color="action" />
                        )}
                        </Button> */}
                        <Button onClick={() => handleOnUpdateClick(todo._id)}>
                            <Create color="primary" />
                        </Button>
                        <Button onClick={() => handleDelete(todo._id)}>
                            <Delete color="secondary" />
                        </Button>
                    </div>
                ): null}
            </div>
        </>
    );
};

export default Todo;