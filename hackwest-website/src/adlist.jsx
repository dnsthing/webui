import './App.css'
import React, { useState } from 'react'

const AdList = () => {

    const [state, setState] = useState("");
  
    function handleChange(e) {
        setState(e.target.value);
    }

    const handleOnClick = (e) => {
        alert("Added " + state + " to the list");
    }

    const handleOnClickDelete = (e) => {
        alert("Deleted " + state + " from the list");
    }

    const addAdList = () => {
        try {   
            if(state != "") {
                //add functionality to call the api
                handleOnClick();
            }
        } catch (e) {
            console.log(e.target.value);
            alert("An error has occured");
        }
    }

    const deleteAdList = () => {
        try {
            if(state != "") {
                //add functionality to call the api
                handleOnClickDelete();
            }
        } catch (e) {
            console.log(e.target.value);
            alert("An error has occured");
        }
    }

    return (
        <>
        <div class = "main-content"> 
            <h1 class = "title-page">
                Ad List
            </h1>

            <div class = "adlist-oneliner">
                <input onChange={handleChange} type = "text" placeholder= "Enter Ad"></input>
                <button type="button" onClick={addAdList}>Add</button>
                <button type="button" onClick={deleteAdList}>Delete</button>
            </div>
        </div>
        </>
    )
}

export default AdList
