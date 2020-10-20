import * as React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail, FiGithub } from 'react-icons/fi';
import styled from 'styled-components';
const Flip = require('react-reveal/Flip')



const NavBar: React.FC<INavBarProps> = (props) => {
    const myArray = ["Afrikaans: Hallo", "Albanian: Mirë dita","Amharic: ታዲያስ", "Arabic: مرحبا", "Azerbaijani: Салам", "Basque: Kaixo", "Bengali: নমস্কার", "Bosnian: Zdravo", "Breton: Demat", "Bulgarian: Здравейте","Catalan: Hola", "Chichewa: Moni", "Corsican: Bonghjornu", "Croatian: Bok", "Czech: Ahoj", "Danish: Hej", "Dutch: Hallo", "Espetanto: Saluton", "Estonian: Tere", "Fijian: Bula", "Filipino: Kamusta", "Finnish: Hei or Terve", "French: Bonjour", "Georgian: მიესალმები", "German: Hallo", "Greek: Χαίρε", "Hausa: Hello", "Hawaiian: Aloha", "Hebrew: שלום", "Hindi: नमस्ते", "Hungarian: Sziasztok", "Indonesian: Halo", "Irish: Dia dhuit", "Italian: Ciao", "Japanese: こんにちは", "Kannada: ನಮಸ್ಕಾರ", "Khmer: ជំរាបសួរ", "Korean: 안녕", "Lao: ສະບາຍດີ", "Latin: Salve", "Latvian: Sveiki", "Limburgish: Hallau", "Lithuanian: Sveiki", "Macedonian: Добар ден", "Malaysian: Selamat tengahari", "Maltese: Ħelow", "Chinese: 你好", "Maori: Kia ora", "Nepali: नमस्ते", "Norwegian: Hei", "Odia: ନମସ୍କାର", "Pashto: سلام", "Polish: Cześć", "Portugese: Olá", "Romanian: Buna", "Russian: Привет", "Samoan: Talofa", "Serbian: Здраво", "Shanghainese: 侬好", "Shona: Mhoro", "Slovak: Ahoj", "Slovenian: Zdravo", "Spanish: Hola", "Swabian: Grüss Gott", "Swahili: Hodi", "Swedish: Hej", "Tamil: வனக்கம்", "Vietnamese: Xin chào", "Woiworung: Womenjeka", "Yiddish: שלום", "Tamil: வணக்கம்", "Telugu: నమస్కారం", "Turkish: Merhaba", "Vietnamese: Chào bạn", "Welsh: Helo", "Zulu: Sawubona"];

    const [navText, setNavText] = React.useState<string>('English: Hello')
    const handleClick = (event: any) => {
        const newText = myArray[Math.floor(Math.random() * myArray.length)];
        setNavText(newText)
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            const newText = myArray[Math.floor(Math.random() * myArray.length)];
            setNavText(newText)
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div id="navbar" className="row fixed-top">
                <div className="display-4 col-6 text-right my-auto mobile text-navText font-weight-lighter fade-in">
                    <Flip top>
                        {navText}
                    </Flip>
                </div>
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
                        <div className="m-5">
                            <a href="mailto:pjpavo@gmail.com" target="_blank">
                                <h4 className="text-accent "> <FiMail /></h4>
                            </a>
                            <a href="https://github.com/PawelPavo" target="_blank">
                                <h4 className="text-accent my-3"> <FiGithub /></h4>
                            </a>
                            <a href="https://www.linkedin.com/in/pawel-jaskolski-995323b3/" target="_blank">
                                <h4 className="text-accent "> <AiFillLinkedin /></h4>
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
    fill            : #182F53;
}



@keyframes pulsate {
    50%{ stroke-width:5px }
}
`

export interface INavBarProps { }

export default NavBar;