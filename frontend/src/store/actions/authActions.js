import axios from "axios";
import {url} from '../../api/index';
import {toast} from "react-toastify"

export const register = (user) => {
    return (dispatch) => {
        axios
            .post(`${url}/register`, user)
            .then((token) => {
                localStorage.setItem("token", token.data);

                dispatch({
                    type: "register",
                    token: token.data,
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

export const login = (email, password) => {
    return (dispatch) => {
        axios
            .post(`${url}/login`, {email, password})
            .then((token) => {
                localStorage.setItem("token", token.data);

                dispatch({
                    type: "login",
                    token: token.data,
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

export const signOut = () => {
    return (dispatch) => {
      dispatch({
        type: "clear_todos",
      });
      
      dispatch({
        type: "signOut",
      });
  
    };
  };

export const loadUser = () => {
    return (dispatch,getState) => {
        const token = getState().auth.token;
        if(token) {
            dispatch({
                type: "user_loaded",
                token,
            });
        }else{
            return null;
        }
    };
};