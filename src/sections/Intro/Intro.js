import React from 'react';
import IntroImg from '../../assets/pablo-good-job.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import './Intro.scss'

const Intro = () => {
    return(
    <div style={{display: "flex"}}>
        <div>
            <h1 className="intro-title">Daily Routine</h1>
            <p className="intro-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu.</p>
            <div className="intro-now-playing">
                <div>
                    <FontAwesomeIcon icon={faPlay} className="intro-now-playing-icon"></FontAwesomeIcon>
                </div>
                <div>
                    <h3 className="intro-now-playing-song">Hannah Hunt</h3>
                    <p className="intro-now-playing-band">Vampire Weekend</p>
                </div>
            </div>
        </div>
        <div>
         <img src={IntroImg} width="80%"></img>
        </div>
    </div>
    )
}

export default Intro;