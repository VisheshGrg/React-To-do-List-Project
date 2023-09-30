// export const url = "http://localhost:5000/api";
export const url = "https://react-todo-app-4bj0.onrender.com/api";

export const setHeaders = () => {
    const headers = {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    };

    return headers;
};