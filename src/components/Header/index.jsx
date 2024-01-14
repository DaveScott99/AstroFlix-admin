import React from "react";
import { HeaderContainer, Name, Photo, User, Website } from "./styles";
import { BsSend } from "react-icons/bs";

export default function Header() {
    return(
        <HeaderContainer>

          <Website>
            <BsSend /> Website
          </Website>
    
          <User>
            <Photo src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Account icon" />
            <Name>
              Davi
            </Name>
          </User>
    
       </HeaderContainer>

    );
};