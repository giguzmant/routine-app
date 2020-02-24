import React from 'react';
import IntroImg from '../../assets/be-patient.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import './Intro.scss'
import OtraImg from '../../assets/E-Commerce.png'
const Intro = () => {
    return(
    <div style={{display: "flex"}}>
        <div>
            <h1 className="intro-title">Easy way to complete your <span>daily tasks</span></h1>
            <p className="intro-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend quis eros quis tristique. roin dapibus orci at nibh dignissim ullamcorper.</p>
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
        <div className="intro-img-container">
            <img src={IntroImg} width="80%" className="intro-2nd-img"></img>
        </div>
    </div>
    )
}

export default Intro;