import * as React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail, FiGithub } from 'react-icons/fi';
import styled from 'styled-components';
const Flip = require('react-reveal/Flip')


const NavBar: React.FC<INavBarProps> = (props) => {

    const [navText, setNavText] = React.useState<string>('Home')

    const handleClick = (event: any) => {
        setNavText(event.currentTarget.textContent)
    }

    return (
        <>
            <div id="navbar" className="row fixed-top">
                <Flip top>
                    <div className="display-4 col-6 text-right my-auto mobile text-navBigText">

                    </div>
                </Flip>
                <div className="col-4 border border-top-0 border-right-0 border-bottom-0 text-left border border-accent">
                    <div className="m-3">
                        <a href="#home">
                            <div onClick={handleClick} style={{ textDecoration: "none" }} className="my-auto text-navText">
                                <NavText>
                                    <svg viewBox="0 0 450 50">
                                        <text y="50">Home</text>
                                    </svg>
                                </NavText>
                            </div>
                        </a>
                        <a href="#bio">
                            <div onClick={handleClick} style={{ textDecoration: "none" }} className="my-auto text-navText">
                                <NavText>
                                    <svg viewBox="0 0 450 50">
                                        <text y="50">Bio</text>
                                    </svg>
                                </NavText>
                            </div>
                        </a>
                        <a href="#contact">
                            <div onClick={handleClick} style={{ textDecoration: "none" }} className="my-auto text-navText">
                                <NavText>
                                    <svg viewBox="0 0 450 50">
                                        <text y="50">Contact</text>
                                    </svg>
                                </NavText>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-1 text-navText my-auto">
                    <div className="m-3">
                        <a href="mailto:pjpavo@gmail.com" target="_blank">
                            <p style={{ textDecoration: "none" }} className="text-navText"> <FiMail /></p>
                        </a>
                        <a href="https://github.com/PawelPavo" target="_blank">
                            <p style={{ textDecoration: "none" }} className="text-navText"> <FiGithub /></p>
                        </a>
                        <a href="https://www.linkedin.com/in/pawel-jaskolski-995323b3/" target="_blank">
                            <p style={{ textDecoration: "none" }} className="text-navText"> <AiFillLinkedin /></p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

const NavText = styled.div`

svg{
    font   : bold 37px Century Gothic, Arial;
    width  : 100%;
    height : 50px;
  }
  
text{
    fill            : none;
    stroke          : #182F53;
    stroke-width    : 1.50px;
}

text:hover {
    stroke          : #9c3725;
}
  
@keyframes pulsate {
    50%{ stroke-width:5px }
}

`

export interface INavBarProps { }

export default NavBar;