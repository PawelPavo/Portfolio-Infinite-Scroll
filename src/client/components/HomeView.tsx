import * as React from 'react';
import styled from 'styled-components';
const Slide = require('react-reveal/Slide')


const Home: React.FC<IHomeProps> = (props) => {

    return (
        <>
            <div id="home" className="hero-image row min-vh-100 d-flex justify-content-center align-items-center">

                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <Slide top>
                                <MainText>
                                    <div className="main-title back shadow py-5 border border-accent border-left-0 border-right-0">
                                        <span className="thick text-accent">Software Developer</span>
                                        <br />
                                        <span className="thin">Pawel Jaskolski</span>
                                    </div>
                                </MainText>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const MainText = styled.div`  
 .main-title {
    margin: 0;
    padding: 0;
    text-align: center;
    top: 50%;
    left: 50%;
 }
 .thin {
    font-size: 4.2em;
    font-weight: 225;
    color: #fff;
 }

.main-title {
    text-transform: uppercase;
    letter-spacing: 0.1em;
 }

 .back {
    background: rgba(0, 0, 0, 0.2) none;
 }

 @media only screen and (max-width: 600px) {
    .main-title .thin {
       font-size: 3em;
       thick: 2em;
    }
 }




`

export interface IHomeProps { }
export default Home;