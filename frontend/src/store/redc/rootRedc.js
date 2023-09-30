import {combineReducers} from 'redux';
import todoRedc from './todoRedc';
import authRedc from './authRedc';

const rootRedc = combineReducers({
    todos: todoRedc,
    auth: authRedc
})

export default rootRedc;