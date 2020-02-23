import React from 'react';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './DayRoutine.scss';

const DayRoutine = props => {
    return(
        <article className="day-routine-container">
            {
                props.dayRoutine.map(daysInfo =>{
                return <div  keys={daysInfo.day} className="day-routine-card">
                            <h3 className="day-routine-name">{daysInfo.day}</h3>
                            <FontAwesomeIcon icon={faPlusCircle} 
                                             onClick={e=>props.setShowModal(true)}
                                             className="day-routine-icon-add"/>

                        {daysInfo.exercise.map(ex => {
                            return(
                                    <p>
                                        {ex.exer} - {ex.repetitions} x {ex.series}
                                    </p>
                            )
                        })}
                        </div>
                })

            }
        </article>
    )
}

export default DayRoutine;