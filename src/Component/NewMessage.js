import React from "react";
import { withAuth } from "../lib/AuthProvider";
import service from "../api/service";

function NewMessage(props){
    function handleSubmit(event){
        event.preventDefault();
        service.sendMessage({receiver:props.receiver, text:event.target[0].value})
        .then(response=>{
            event.target[0].value = "";
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" style={{width:"90%"}}/>
            <button>Send</button>
        </form>    
    )
}

export default withAuth(NewMessage);