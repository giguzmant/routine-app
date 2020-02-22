import React, { useState } from 'react';
import Header from './section/Header/Header';
import Routine from './components/Routine/Routine';
import ExerciseModal from './section/ExerciseModal/ExerciseModal';

const App = () => {


  return (
    <div style={{backgroundColor: "#f9d9eb"}}>
        <Header></Header>
        <Routine ></Routine>
    </div>
  );
}

export default App;
