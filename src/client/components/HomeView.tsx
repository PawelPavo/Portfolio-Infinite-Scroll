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
                                        <span className="thin myName">Pawel Jaskolski</span>
                                    </div>
                                </MainText>
                            </Slide>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Arrow>
                        <div id="arrowAnim">
                            <div className="arrowSliding">
                                <div className="arrow"></div>
                            </div>
                            <div className="arrowSliding delay1">
                                <div className="arrow"></div>
                            </div>
                            <div className="arrowSliding delay2">
                                <div className="arrow"></div>
                            </div>
                            <div className="arrowSliding delay3">
                                <div className="arrow"></div>
                            </div>
                        </div>
                    </Arrow>
                </div>
            </div>
        </>
    )
}

const MainText = styled.div` 

@font-face {
    src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/Anders.ttf');
    font-family: test;
  }


 .main-title {
    margin-top: 100px;
    padding: 0;
    text-align: center;
    top: 50%;
    left: 50%;
 }

.main-title {
    text-transform: uppercase;
    letter-spacing: 0.1em;
 }

 .back {
    background: rgba(0, 0, 0, 0.2) none;
 }

 .myName {
    position: relative;
    font-size: 4em;
    text-transform: uppercase;
    font-family: test;
    font-weight: 225;
    color: #fff;
    z-index: 10;
  }

 @media only screen and (max-width: 600px) {
    .main-title .myName {
       font-size: 2em;
       thick: 2em;
    }
 }


`

const Arrow = styled.div`
#arrowAnim {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -10;
  }
  
  .arrow {

    border: 1.5vw solid;
    border-color: black transparent transparent black;
    transform: rotate(-135deg);
  }
  
  .arrowSliding {
    position: absolute;
    -webkit-animation: slide 4s linear infinite; 
            animation: slide 4s linear infinite;
  }
  
  .delay1 {
    -webkit-animation-delay: 1s; 
      animation-delay: 1s;
  }
  .delay2 {
    -webkit-animation-delay: 2s; 
      animation-delay: 2s;
  }
  .delay3 {
    -webkit-animation-delay: 3s; 
      animation-delay: 3s;
  }
  
  @-webkit-keyframes slide {
      0% { opacity:0; transform: translateY(15vw); }  
     20% { opacity:1; transform: translateY(9vw); }   
     80% { opacity:1; transform: translateY(-9vw); }  
    100% { opacity:0; transform: translateY(-15vw); } 
  }
  @keyframes slide {
      0% { opacity:0; transform: translateY(-15vw); }  
     20% { opacity:1; transform: translateY(-9vw); }   
     80% { opacity:1; transform: translateY(5vw); }  
    100% { opacity:0; transform: translateY(5vw); } 
  }
`

export interface IHomeProps { }
export default Home;