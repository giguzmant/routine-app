import React, { useState } from 'react';
import './ExerciseModal.scss';

const ExerciseModal = ({addRoutine}) => {
    const [day, setDay] = useState("monday");
    const [exer, setExercise] = useState();
    const [repetitions , setRepetitions] = useState();
    const [series, setSeries] = useState();

    const saveDay = e => {
        setDay(e.target.value);
    }
    
    const saveExercise = e => {
        setExercise(e.target.value);
    }
    
    const saveRepetitions = e => {
        setRepetitions(e.target.value);
    }
    
    const saveSeries = e => {
        setSeries(e.target.value)
    }
    
    const saveRoutine = () => {
        const exercise = {
            exer, 
            repetitions,
            series
        }
        
        addRoutine({
            day,
            exercise
        })
    }



    return(
        <section className="add-exercise-modal">
            <article className="add-exercise-form">
                <div className="add-form-info">
                    <div className="add-form-title">
                        <h3 className="header-title">daily routine</h3>
                        <i className="material-icons form-close">
                            close
                        </i>
                    </div>
                    <div className="header-inputs">
                        <div>
                            <label>ROUTINE:</label>
                            <input type="text" placeholder="routine" onChange={saveExercise}/>
                        </div>
                        <div>
                            <label>SERIES</label>
                            <input type="number" placeholder="ser" onChange={saveSeries}/>
                            <button>+</button>
                            <button>-</button>
                        </div>
                        <div>
                            <label>REPETITIONS</label>
                            <input type="number" placeholder="rep" onChange={saveRepetitions}/>
                            <button>+</button>
                            <button>-</button>
                        </div>
                        <div>
                            <select onChange={saveDay} name="days">
                                <option value="monday">MONDAY</option>
                                <option value="tuesday">TUESDAY</option>
                                <option value="wednesday">WEDNESDAY</option>
                                <option value="thursday">THURSDAY</option>
                                <option value="friday">FRIDAY</option>
                            </select>
                        </div>
                        <button onClick={saveRoutine}>ADD TO ROUTINE</button>
                    </div>
                </div>
            </article>
        </section>
    )
    
}

export default ExerciseModal;