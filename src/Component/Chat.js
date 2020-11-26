import React, { useState, useEffect } from "react";
import { withAuth } from "../lib/AuthProvider";
import service from "../api/service";
import NewMessage from "./NewMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons, faUser } from "@fortawesome/free-solid-svg-icons";
import './Chat.css'

function Chat(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    service.getMessages(props.match.params.id).then((response) => {
      console.log(response);
      setMessages(response);
    });
  });

  return (
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-md-4">
            <div class="box box-warning direct-chat direct-chat-warning">
              <div class="box-body">
                {messages.map((element, index) => {
                  return (
                    <div
                      className={
                        element.from === props.match.params.id
                          ? "direct-chat-msg right"
                          : "direct-chat-msg"
                      }
                    >
                      <FontAwesomeIcon class="direct-chat-img" icon={faUser} />
                      <div class="direct-chat-text"> {element.text} </div>
                    </div>
                  );
                })}
                <NewMessage receiver={props.match.params.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Chat);
