import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import SpeechRecognitionButton from './components/SpeechRecognitionButton';
import SpeechReadButton from './components/SpeechReadButton';

function App() {
  const [tasks, setTasks] = useState([]);

  const onAddTask = (task: string) => {
    setTasks((prevState) => [...prevState, task]);
  }

  console.log(tasks);

  return (
    <div className="App">
      <section id='todo'>
        <ToDoList tasks={tasks} />
        <SpeechRecognitionButton onAddTask={onAddTask} onRemoveTask={() => {}} />
        <SpeechReadButton tasks={tasks} />
      </section>
    </div>
  );
}

export default App;
