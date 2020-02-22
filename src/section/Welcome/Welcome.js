import React from 'react';
import RecentActivity from '../../components/RecentActivity/RecentActivity';
import './Welcome.scss';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const walkInfo = [{
    training: "120 ",
    steps: "5,201",
    distance: "4,6",
    date: "20, FEB", 
    activity: ["push-ups", "cycling"],
    icon: faCheckCircle
},
{   
    training: "340 ",
    steps: "12,543",
    distance: "10,2",
    date: "19, FEB",
    activity: ["boxing", "swimming", "hiking"],
    icon: faCheckCircle

}]

const Welcome = props => {
    return(
        <div className="welcome">
            <div className="welcome-login-section">
                <div className="welcome-icon-user">
                    <p className="welcome-icon-name">A </p>
                </div>
                <p className="welcome-title">Hello, Annie</p>
                <FontAwesomeIcon className="welcome-icon-down" icon={faAngleDown}></FontAwesomeIcon>
            </div>
            <RecentActivity walkInfo={walkInfo}></RecentActivity>
        </div>
    )
}

export default Welcome;