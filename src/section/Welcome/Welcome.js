import React from 'react';
import WalkingRunning from '../../components/WalkingRunning/WalkingRunning';
import './Welcome.scss';

const walkInfo = [{
    distance: "4,6 m",
    date: "20 Feb, 8:31"
},
{
    distance: "10,2 m ",
    date: "19 Feb, 14:23"
},
{
    distance: "7,8 m ",
    date: "18 Feb, 20:54"
},
{
    distance: "2,5 m ",
    date: "17 Feb, 7:23"
},
{
    distance: "5,3 m",
    date: "16 Feb, 23:10"
}]

const Welcome = props => {
    return(
        <div className="welcome">
            <div>
                <h4>
                    Welcome,
                </h4>
                <h1>
                    Annie!
                </h1>
            </div>
            <div>
                <p>Walking + Running Distance</p>
                <WalkingRunning walkInfo = {walkInfo} ></WalkingRunning>
            </div>
            
        </div>
    )
}

export default Welcome;