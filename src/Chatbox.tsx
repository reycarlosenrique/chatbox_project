import React from "react";
import "./Chatbox.css";

const Chatbox: React.FC = () => {
  return (
    <div className="chat-window">
      <div className="chat-header">Chat with Pathways Helper</div>
      <div className="chat-messages" id="chat-messages">
        {/* Aqui van los mensajes */}
      </div>
      <div className="chat-input">
        <input type="text" id="user-input" placeholder="Type your message..." />
        <button id="send-button">Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
