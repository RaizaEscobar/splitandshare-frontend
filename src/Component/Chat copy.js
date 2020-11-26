import React, { useState, useEffect } from "react";
import { withAuth } from "../lib/AuthProvider";
import service from "../api/service";
import NewMessage from "./NewMessage";

function Chat(props){
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        service.getMessages(props.match.params.id)
        .then(response=>{
            console.log(response)
            setMessages(response);
        })
    })

    return (        
        <div>
            {messages.map((element, index)=>{
                return <p className={element.from == props.match.params.id ? "from" : "to"}>{element.text}</p>
            })}
            <NewMessage receiver={props.match.params.id} />
        </div>
    )
}

export default withAuth(Chat);