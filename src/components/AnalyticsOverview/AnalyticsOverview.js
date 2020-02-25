import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStepForward, faClock, faArrowUp, faBicycle} from '@fortawesome/free-solid-svg-icons'
import './AnalyticsOverview.scss';

const analyticsInfo = [{
    num:"21.2k",
    info: "Steps",
    icon: faStepForward
},
{
    num: "5.4k",
    info: "Minutes training",
    icon: faClock
},
{
    num: "23.1%",
    info: "Engagement",
    icon: faArrowUp
},
{
    num: "Sat",
    info: "Most training day",
    icon: faBicycle
}
]



const AnalyticsOverview = () => {
    return(
        <section>
            <h4>Analytics Overview</h4>
            <div className="analytics-cards-container">
                {analyticsInfo.map(info=>{
                    return <div className="analytics-card">
                                <div className="analytics-cards-icon-container">
                                    <FontAwesomeIcon icon={info.icon}/>
                                </div>
                                <div className="analytics-cards-info-container">
                                     <h2>{info.num}</h2>
                                     <p>{info.info}</p>
                                </div>
    
                           </div>
                })}
            </div>
        </section>
    )
}

export default AnalyticsOverview;