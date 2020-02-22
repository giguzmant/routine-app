import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './WalkingRunning.scss';

const WalkingRunning = props => {
    return(
        <section>
        {props.walkInfo.map(info => {
            return <div key={info.date + info.distance}>
                        <div>
                            <h4>{info.date}</h4>
                        </div>
                        <div className="activity">
                            <FontAwesomeIcon icon={info.icon} className="activity-icon-steps"></FontAwesomeIcon>
                            <div>
                                <p className="activity-info-steps">{info.steps} STEPS</p>
                            </div>
                        </div>
                        <div className="activity">
                            <FontAwesomeIcon icon={info.icon} className="activity-icon-steps"></FontAwesomeIcon>
                                <p className="activity-info-steps">{info.training} MINUTES</p>
                        </div>
                        <div className="activity">
                            <FontAwesomeIcon icon={info.icon} className="activity-icon-steps"></FontAwesomeIcon>
                            <div>
                                <p className="activity-info-steps">{info.distance}</p>
                            </div>
                        </div>
                   </div>
        })}
        </section>
    )
}

export default WalkingRunning;