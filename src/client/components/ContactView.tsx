import * as React from 'react';
import styled from 'styled-components';
const Slide = require('react-reveal/Slide')


const ContactView: React.FC<IContactViewProps> = (props) => {

    return (
        <>
            <div id="contact" className="hero-image row min-vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-12">
                    <div className="row d-flex justify-content-center align-items-center">
                        <Slide right>
                            <EmailButton>
                                <div className="col-md-12">
                                        <p className="animated-word">EMAIL</p>
                                </div>
                            </EmailButton>
                        </Slide>
                    </div>
                </div>
            </div>
        </>
    )
}

const EmailButton = styled.div`

.animated-word {
	font-family: Helvetica;
	letter-spacing: 0.4em;
	font-weight: 300;
	font-size: 80px;
	text-align: center;
	color: rgba(24, 47, 83, 0.7);
  cursor: pointer;
  max-width: 600px; 
  width: 100%; 
  outline: 3px solid;
  outline-color: rgba(24, 47, 83, 1);
  outline-offset: 70px;
  transition: all 600ms cubic-bezier(0.2, 0, 0, 0.8);
}

.animated-word:hover {
  color: rgba(24, 47, 83, 1);
  outline-color: rgba(71, 126, 232, 0);
  outline-offset: 300px;
}

@media only screen and (max-width: 600px) {
    .animated-word  {
        font-size: 50px;
    }
 }


`


export interface IContactViewProps { }

export default ContactView;