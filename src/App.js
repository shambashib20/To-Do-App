import React from 'react';
import './App.css';
import Form from './components/Form';
import ToDolist from './components/ToDolist';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Shambashib's To Do list:</h1>
      </header>
      <Form />
      <ToDolist />
    </div> 
    
    
  );
};

export default App;
