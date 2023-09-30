import {toast} from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem("token"),
    name: null,
    email: null,
    _id: null,
};

const authRedc = (state = initialState,action) => {

    switch (action.type) {
        
        case "login":
        case "register":
        case "user_loaded":
            const user = jwtDecode(action.token);
            // toast(`Welcome back! ${user.name}`, {
            //     position : toast.POSITION.TOP_CENTER,
            // });
            return {
                ...initialState,
                token: action.token,
                name: user.name,
                email: user.email,
                _id: user._id,
            };
        case "signOut":
            localStorage.removeItem("token");
            toast("Come back soon!", {
                position: toast.POSITION.TOP_CENTER,
            });
            return {
                token: null,
                name: null,
                email: null,
                _id: null,
            };
        default:
            return state;
    }
}

export default authRedc;
