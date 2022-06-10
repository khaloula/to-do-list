import React from 'react';
import './App.css';
import Add from './Components/Add';
import ListTasks from './Components/ListTasks';
function App() {
  return (
    <div className="App">
 <h1>TODO LIST</h1>
 <Add/>
 <ListTasks/>
    </div>
  );
}

export default App;
