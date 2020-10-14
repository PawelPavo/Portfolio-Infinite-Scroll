//@ts-nocheck
import React from 'react';
import { StyledMenu } from './Menu.styled';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail, FiGithub } from 'react-icons/fi';


const Menu: React.FC<IMenuProps> = (props) => {

  const handleClick = (event: any) => {
    setNavText(event.currentTarget.textContent)
  }

  return (
    <StyledMenu open={props.open}>
      <a href="#home">
        <p style={{ textDecoration: "none" }} className="">Home</p>
      </a>
      <a href="#bio">
        <p style={{ textDecoration: "none" }} className="">Bio</p>
      </a>
      <a href="#contact">
        <p style={{ textDecoration: "none" }} className="">Contact</p>
      </a>
      <div className="row justify-content-around fixed-bottom">
        <a href="mailto:pjpavo@gmail.com" target="_blank">
          <p style={{ textDecoration: "none" }} className=""> <FiMail /></p>
        </a>
        <a href="https://github.com/PawelPavo" target="_blank">
          <p style={{ textDecoration: "none" }} className=""> <FiGithub /></p>
        </a>
        <a href="https://www.linkedin.com/in/pawel-jaskolski-995323b3/" target="_blank">
          <p style={{ textDecoration: "none" }} className=""> <AiFillLinkedin /></p>
        </a>
      </div>
    </StyledMenu>
  )
}

export interface IMenuProps {
  open?: any;
  setOpen?: any;
}

export default Menu;