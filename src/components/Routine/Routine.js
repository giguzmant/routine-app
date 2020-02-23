import React, {useState} from 'react';
import DayRoutine from '../DayRoutine/DayRoutine';
import './Routine.scss';
import ExerciseModal from '../../sections/ExerciseModal/ExerciseModal';

const _days = [{
    id: "monday",
    day: "monday",
    exercise: []
},
{
    id: "tuesday",
    day: "tuesday",
    exercise: []
},
{
    id: "wednesday",
    day: "wednesday",
    exercise: []
},
{
    id: "thursday",
    day: "thursday",
    exercise: []
},
{
    id: "friday",
    day: "friday",
    exercise: []
},
{
    id:"saturday",
    day: "saturday",
    exercise: []
}
]


const Routine = () => {
    const [routine, setRoutine] = useState(_days);
    const [showModal, setShowModal] = useState(false);
    
    const addRoutine = (newRoutine) => {
      const clone = [...routine];
  
      const indexDay = clone.findIndex(routineDay => routineDay.day === newRoutine.day);
      if(indexDay === -1) return;
      
      clone[indexDay].exercise.push(newRoutine.exercise)
      
      setRoutine(clone);
      
      console.log(clone)
    }
    
    const deleteRoutine = (day) => {
        const clone = [...routine];

        const findIndex = clone.findIndex(idToDelete => {
            return idToDelete.day === day;
        })
        
        clone.splice(findIndex, 1);
    } 
    
    
    return(
        <div>
            <DayRoutine setShowModal={setShowModal} dayRoutine={routine} deleteRoutine = {deleteRoutine}></DayRoutine>     
            {
                showModal ?
                <ExerciseModal addRoutine={addRoutine}></ExerciseModal>
                :
                null
            }
        </div>
    )
    
}

export default Routine;