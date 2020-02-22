import React from 'react';
import WalkingRunning from '../../components/WalkingRunning/WalkingRunning';
import './Welcome.scss';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const walkInfo = [{
    training: "120 ",
    steps: "5,201",
    distance: "4,6 m",
    date: "20, FEB", 
    icon: faCheckCircle
},
{   
    training: "340 ",
    steps: "12,543",
    distance: "10,2 m ",
    date: "19, FEB",
    icon: faCheckCircle

},
{
    training: "130 ",
    steps: "8,756",
    distance: "7,8 m ",
    date: "18, FEB",
    icon: faCheckCircle
},
{
    training: "40 ",
    steps: "3,867",
    distance: "2,5 m ",
    date: "17, FEB",
    icon: faCheckCircle
},
{
    training: "234 ",
    steps: "6,855",
    distance: "5,3 m",
    date: "16, FEB",
    icon: faCheckCircle
}]

const Welcome = props => {
    return(
        <div className="welcome">
            <div>
                <h3>Hello, Annie</h3>
            </div>
            <div>
                <p>Recent Activity</p>
                <WalkingRunning walkInfo = {walkInfo} ></WalkingRunning>
            </div>
            
        </div>
    )
}

export default Welcome;