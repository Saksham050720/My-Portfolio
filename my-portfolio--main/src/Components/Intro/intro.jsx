import React from 'react'
import './intro.css'
import github from '../../Img/githubgif.gif';
import linkedin from '../../Img/linkedin.gif';
import instagram from '../../Img/instagram.gif';
import formaling from '../../Img/formaling.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Intro = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (

        <div className="intro" id ='About'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{color : darkMode? 'white' : ''}}>Hii ! I Am</span>
                    <span>Saksham Mishra </span>
                    <span>Experienced Research And Development Specialist with a demonstrated history
                        of working in the events services industry. Skilled in Management, Reasoning Skills, Computer
                        Security, Marketing, and Research and Development (R&D). Strong research professional with  Bachelor of Technology - B-Tech focused in Computer Science from Lovely Professional University.
                    </span>
                </div>
                <button className="Button i-button">Hire Me</button>
                <div className="i-icons">
                    <a href='Github.com'   target="blank"> <img src={github} alt="" /></a>
                    <a href='Linkedin.com'  >     <img src={linkedin} height="128rem" width="128rem" alt="" /></a>
                    {/* <a href='Instagram.com'  >    <img src={instagram} alt="" /></a> */}
                </div>

            </div>
            <div className="i-right">
            <img src={formaling} alt="" />
            </div>
        </div>

    )
}

export default Intro;