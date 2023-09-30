import {toast} from "react-toastify";

const todoRedc = (todos = [], action) => {
    switch (action.type){
        case "get_todos":
            return action.todos.data;
        case "filter_todos":
            return action.todos.data;
        case "add_todos":
            // toast.success("Successfully added a new todo", {
            //     position: toast.POSITION.TOP_CENTER,
            // });
            return [action.todo.data, ...todos];
        case "update_todo":
            // toast.success("Successfully updated the todo!", {
            //     position: toast.POSITION.TOP_CENTER
            // });
            return todos.map((todo) => 
            todo.id === action.todo.data._id ? action.todo.data : todo);
        case "check_todo":
            // toast.success("Successfully changed status!", {
            //     position: toast.POSITION.TOP_CENTER,
            // });
            return todos.map((todo) => todo._id === action.todo.data._id ? action.todo.data : todo);
        case "delete_todo":
            // toast.success("Successfully deleted the todo", {
            //     position: toast.POSITION.TOP_CENTER,
            // });
            return todos.filter((todo) => todo._id != action.id);
        case "clear_todos":
            return [];
        case "print_error":
            toast.error("Something went wrong!", {
                position: toast.POSITION.TOP_CENTER,
            });
            return todos
        default:
            return todos;
    }
}

export default todoRedc;