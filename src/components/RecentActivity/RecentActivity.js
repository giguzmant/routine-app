import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './RecentActivity.scss';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const RecentActivity = props => {
    return(
        <section className="recent-activity-section">
                        <div className="recent-activity-title">
                            <p>Recent Activity</p>
                        </div>
                        
        {props.walkInfo.map(info => {
            return <div key={info.date + info.distance}>
                        <div className="recent-activity-day">
                            <h4>{info.date}</h4>
                        </div>
                    
                        <div className="recent-activity">
                            <FontAwesomeIcon icon={faCheckCircle} className="recent-activity-icon"/>
                            <p>{info.steps} STEPS</p>
                        </div>
                        <div className="recent-activity">
                            <FontAwesomeIcon icon={faCheckCircle} className="recent-activity-icon"/>
                            <p>{info.training} MINUTES</p>
                        </div>
                        <div className="recent-activity">
                            <FontAwesomeIcon icon={faCheckCircle} className="recent-activity-icon"/>
                            <p>{info.distance} METERS</p>
                        </div>
                        <div>
                            {info.activity.map(act =>{
                                return <div className="recent-activity">
                                            <FontAwesomeIcon icon={faCheckCircle} className="recent-activity-icon"/>
                                            <p>{act}</p>
                                        </div>                             
                            })
                            }
                        </div>
                   </div>
        })}
        </section>
    )
}
/*
const RecentActivity = () => {
    return(
        <section className="recent-activity-section">
             <div className="recent-activity-title">
                <p>Recent Activity</p>
            </div>
            <div className="recent-activity-day">
                <h4>20, FEB</h4>
            </div>
        
            <div className="recent-activity">
                <FontAwesomeIcon icon={faCheckCircle} className="recent-activity-icon"/>
                 <p>1000 STEPS</p>
            </div>
            <div className="recent-activity">
                <FontAwesomeIcon icon={faCheckCircle} className="recent-activity-icon"/>
                <div>
                    <p>120 MINUTES</p>
                </div>
            </div>
            <div className="recent-activity">
                <FontAwesomeIcon icon={faCheckCircle} className="recent-activity-icon"/>
                <div>
                    <p>4,6 METERS</p>
                </div>
            </div>
        </section>
    )
}*/




export default RecentActivity;