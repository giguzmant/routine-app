import React from 'react';
import IntroImg from '../../assets/2648314.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
    return(
    <div style={{display: "flex"}}>
        <div>
            <h1>Daily Routine</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu.</p>
            <div>
                <div>
                <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                </div>
                <div>
                    <h3>Hannah Hunt</h3>
                    <p>Vampire Weekend</p>
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