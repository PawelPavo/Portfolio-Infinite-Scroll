import * as React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Resume from './Resume';
const Slide = require('react-reveal/Slide')



const BioView: React.FC<IBioViewProps> = (props) => {

    return (
        <>
            <MainText>
                <div id="bio" className="row min-vh-100 d-flex justify-content-center align-items-center bg-light shadow-lg">
                    <div className="col-md-12">
                        <div className="row text-center">
                            <Slide left>
                                <div className="col-md-4 text-right border border-accent pl-5 pt-5 pb-5 my-auto shadow-lg">
                                    <Slide left>
                                        <div className="display-4" >Bio</div>
                                    </Slide>
                                </div>
                            </Slide>
                            <Slide right>
                                <div className="col-md-8 my-auto">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h6 className="text-justify p-3 font-weight-light">Self-motivated Junior Full-Stack Developer with a demonstrated history of working in the digital marketing and advertising industry. Skilled in full-stack application development using ReactJS, JavaScript, TypeScript, NodeJS, Tailwind, CSS and more. Creative and dependable team player with a passion for new technologies and software innovation.</h6>
                                        </div>
                                    </div>
                                    <Slide bottom>
                                        <div>
                                            <a className="btn btn-outline-accent rounded-pill px-3"
                                                href="https://news-api.s3.us-east-2.amazonaws.com/Pawel+SoftDev+Resume+August+20+AWS.pdf"
                                                target="_blank">My Resume</a>
                                        </div>
                                    </Slide>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </MainText>
        </>
    )
}

const MainText = styled.div`

 .back {
    background: rgba(0, 0, 0, 0.2) none;
 }
`

export interface IBioViewProps { }

export default BioView;