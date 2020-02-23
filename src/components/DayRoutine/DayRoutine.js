import React from 'react';

import './DayRoutine.scss';

const DayRoutine = props => {
    return(
        <article className="day-routine-container">
            {
                props.dayRoutine.map(daysInfo =>{
                return <div  keys={daysInfo.day} className="day-routine-card">
                        <h3>{daysInfo.day}</h3>
                        {daysInfo.exercise.map(ex => {
                            return(
                                    <p>
                                        {ex.exer} - {ex.repetitions} x {ex.series}
                                    </p>
                            )
                        })}
                        <button onClick={e=>props.setShowModal(true)}>Add</button>
  
                        </div>
                })
            }
        </article>
    )
}

export default DayRoutine;