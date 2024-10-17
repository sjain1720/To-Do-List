import React from 'react';
import Heading from './components/Heading';
import ProgressBar from './components/ProgressBar';
import ShowTasks from './components/ShowTasks';
import AddTask from './components/AddTask';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  // Correctly access isAddingTask from the Redux store
  const isAddingTask = useSelector((state) => state.isAddingTask);

  return (
    <>
      <Heading text="TO-DO Task Management" />
      {isAddingTask ? (
        <AddTask />
      ) : (
        <>
          <ProgressBar />
          <ShowTasks />
        </>
      )}
    </>
  );
}

export default App;
