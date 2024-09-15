import './App.css'
import React, { useState } from 'react'

const Domain = () => {

    const [state, setState] = useState("");
  
    function handleChange(e) {
        setState(e.target.value);
    }

    const handleOnClick = (e) => {
        alert("Added " + state + " to domains");
    }

    const handleOnClickDelete = (e) => {
        alert("Deleted " + state + " from domains");
    }
    //test

    const addDomain = () => {
        try {   
            if(state != "") {
                // const callShell = require("child_process").callShell;
                // callShell('dnsthing addlist add ' + state, (e, stdout, stderr)=> {
                //     if(e instanceof Error) {
                //         console.error(e);
                //         throw e;
                //     }
                //     console.log('stdout ', stdout);
                //     console.log('stderr', stderr);
                // })
                handleOnClick();
            }
        } catch (e) {
            console.log(e.target.value);
            alert("An error has occured");
        }
    }

    const deleteDomain = () => {
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
                Domains
            </h1>

            <div class = "adlist-oneliner">
                <input onChange={handleChange} type = "text" placeholder= "Domain"></input>
                <button type="button" onClick={addDomain}>Add</button>
                <button type="button" onClick={deleteDomain}>Delete</button>
            </div>
        </div>
        </>
    )
}

export default Domain
