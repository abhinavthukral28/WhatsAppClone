import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="sidebarChat">
      <Avatar
        src={` https://avatars.dicebear.com/api/pixel-art/:${seed}.svg `}
      ></Avatar>
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last Message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
