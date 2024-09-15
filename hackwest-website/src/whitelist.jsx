import './App.css'
import React, { useState } from 'react'

export default function Whitelist() {

    const [state, setState] = useState("");
  
    function handleChange(e) {
        setState(e.target.value);
    }

    const handleOnClick = (e) => {
        alert("Added " + state + " to the whitelist");
    }

    const handleOnClickDelete = (e) => {
        alert("Deleted " + state + " from the whitelist");
    }



    const addWhiteList = () => {
        try {   
            if(state != "") {
                const callShell = require("child_process").callShell;
                callShell('dnsthing addlist add ' + state, (e, stdout, stderr)=> {
                    if(e instanceof Error) {
                        console.error(e);
                        throw e;
                    }
                    console.log('stdout ', stdout);
                    console.log('stderr', stderr);
                })
                handleOnClick();
            }
        } catch (e) {
            console.log(e.target.value);
            alert("An error has occured");
        }
    }

    const deleteWhiteList = () => {
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
                Whitelist
            </h1>

            <div class = "adlist-oneliner">
                <input onChange={handleChange} type = "text" placeholder= "Whitelist"></input>
                <button type="button" onClick={addWhiteList}>Add</button>
                <button type="button" onClick={deleteWhiteList}>Delete</button>
            </div>
        </div>
        </>
    )
}
