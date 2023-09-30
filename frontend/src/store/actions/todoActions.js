import axios from "axios";
import {url, setHeaders} from "../../api/index.js"
import {toast} from "react-toastify";

export const getTodos = () => {
    return (dispatch) => {
        axios
            .get(`${url}/todos`, setHeaders())
            .then((todos) => {
                dispatch({
                    type: "get_todos",
                    todos,
                })
            })
            .catch((error) => {
                console.log(error.response);
                toast.error(error.response?.data, {
                    position: toast.POSITION.TOP_CENTER,
                });
            });
    };
};

export const filterTodos = (keywords) => {
    return (dispatch) => {
        axios
            .post(`${url}/todos/filter`, keywords, setHeaders())
            .then((todos) => {
                dispatch({
                    type: "filter_todos",
                    todos,
                })
            })
            .catch((error) => {
                console.log(error.response);
                toast.error(error.response?.data, {
                    position: toast.POSITION.TOP_CENTER
                });
            });
    };
};

export const addTodo = (newTodo) => {
    return (dispatch,getState) => {
        const author = getState().auth.name;
        const uid = getState().auth._id;
        axios
            .post(`${url}/todos`, {...newTodo, author, uid}, setHeaders())
            .then((todo) => {
                dispatch({
                    type: "add_todo",
                    todo,
                });
            })
            .catch((error) => {
                console.log(error.response);
                toast.error(error.response?.data, {
                    position: toast.POSITION.TOP_CENTER,
                });
            });
    };
};

export const updateTodo = (updatedTodo, id) => {
    return (dispatch) => {
        axios
            .put(`${url}/todos/${id}`, updatedTodo, setHeaders())
            .then((todo) => {
                dispatch({
                    type: "update_todo",
                    todo,
                });
            })
            .catch((error) => {
                console.log(error.response);
                toast.error(error.response?.data, {
                    position: toast.POSITION.TOP_CENTER,
                });
            });
    };
};

export const deleteTodo = (id) => {
    return (dispatch) => {
        axios
            .delete(`${url}/todos/${id}`, setHeaders())
            .then(() => {
                dispatch({
                    type: "delete_todo",
                    id,
                });
            })
            .catch((error) => {
                console.log(error.response);
                toast.error(error.response?.data, {
                    position: toast.POSITION.TOP_CENTER,
                });
            })
    };
};

export const checkTodo = (id) => {
    return (dispatch) => {
        axios
            .patch(`${url}/todos/${id}`, {}, setHeaders())
            .then((todo) => {
                dispatch({
                    type: "check_todo",
                    todo,
                });
            })
            .catch((error) => {
                console.log(error.response);
                toast.error(error.response?.data, {
                    position: toast.POSITION.TOP_CENTER,
                });
            })
    };
};