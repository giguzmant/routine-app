import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamation, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './Reminders.scss';

const remindersInfo=[
{
   title: "School - English test",
   date: "26 Feb 2020, Wednesday",
   icon: faExclamation,

},
{   
    title: "School - Grammar homework",
    date: "28 Feb 2020, Monday",
    icon: faEnvelope
},
{
    title: "Training - Push-ups",
    date: "2 March 2020, Thursday ",
    icon: faEnvelope
},
{
    title: "Training - Hiking",
    date: "6 March 2020, Friday ",
    icon: faEnvelope
}]

const Reminders = () => {
    return(
        <section className="reminders">
            <div className="reminders-title">
                <h3>Reminders</h3>
            </div>
            <div className="reminders-cards-container">
                {remindersInfo.map(info=>{
                    return <div className="reminder-card">
                                <div className="reminder-card-icon-container">
                                    <FontAwesomeIcon icon={info.icon}/>
                                </div>
                                <div className="reminder-card-info">
                                    <h4>{info.title}</h4>
                                    <p>{info.date}</p>
                                </div>
                          </div>
                })}
                <button>ADD MORE</button>
            </div>
        </section>
    )
}

export default Reminders;