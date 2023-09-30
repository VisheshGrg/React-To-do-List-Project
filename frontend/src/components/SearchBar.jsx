import React, { useState } from "react"
import {useDispatch} from "react-redux";
import {TextField, Button} from '@material-ui/core';
import { filterTodos } from "../store/actions/todoActions";

const SearchBar = ({filterText, setFilterText}) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <form noValidate onSubmit={handleSubmit}
                style={{margin: "0px 30px", padding: "30px", borderRadius: "9px", display: "flex", justifyContent: "space-between", marginTop: "50px"}}>
                <TextField
                        id="enter-todo"
                        label="Enter keyword"
                        variant="outlined"
                        autoFocus
                        fullWidth
                        size="small"
                        value = {filterText}
                        onChange = {(e) => {setFilterText(e.target.value)}}
                />
                
                <Button variant="contained" size="small" type="submit">Filter</Button>
            </form>
        </div>
    )
}

export default SearchBar;