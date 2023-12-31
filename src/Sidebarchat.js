import React, { useEffect, useState } from "react";
import "./Sidebarchat.css"
import { Avatar } from "@mui/material";
import db from "./firebase";
import { Link } from "react-router-dom/cjs/react-router-dom";
function Sidebarchat({ id, name, addNewChat }) {

    const [woman, setWoman] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
      if (id) {
        db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
      }
    }, [id]);

    useEffect (() => {
      setWoman(Math.floor(Math.random() * 5000));
    }, []);
   
   const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
        // do some clever database stuff...
        db.collection("rooms").add({
             name: roomName,
        });
    }
   };


  return !addNewChat ? (
       <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
    <Avatar src={`https://avatars.dicebear.com/api/human/${woman}.svg`} />
    <div className="sidebarChat__info">
        <h2>{ name }</h2>
        <p>{messages[0]?.message}</p>
    </div>
</div>
       </Link>
  
  ): (
    <div onClick={createChat} className="sidebarChat">
        <h2>Add new chat</h2>
    </div>
  );
};

export default Sidebarchat;

