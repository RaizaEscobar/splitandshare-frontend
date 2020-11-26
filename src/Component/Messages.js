import React, { useState, useEffect } from "react";
import { withAuth } from "../lib/AuthProvider";
import service from "../api/service";
import { Link } from "react-router-dom";

function Messages(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messages.length === 0) {
      service.myMessages().then((response) => {        
        setMessages(response);
      });
    }
  });

  return (
    <div>
      <h2>Your messages:</h2>
      <ul className="messageContainer">
      {messages.map((element, index) => {
        return (
          <li className="singleMessage">
            <Link to={`/chat/${element._id}`}><p>{element.username !== "" ? element.username : element.email}</p></Link>
          </li>
          )
      })}
      </ul>
    </div>
  );
}

export default withAuth(Messages);
