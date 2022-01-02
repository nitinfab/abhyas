import React from 'react';
import './App.css';
// import CreateTable from './components/CreateTable';
import Dough from './components/Dough';
import TodoList from './components/TodoList';
import { BasicTable } from './components/Table/BasicTable';
import { RowSelectionTable } from './components/Table/RowSelection';
import Appp from './components/Notes/Appp';
import Rules1 from './components/Rules/Rules1';

function App() {
  return (
    <>
    <div className="container">
      <div className='box'>
        <TodoList />
      </div>
      <div className= 'box'>
        <Dough />
        <div className='frt'>
        <h2>Fruits </h2>
        <BasicTable />
        <hr></hr>
        <h2>Vegetables</h2>
        <RowSelectionTable />
        </div>
      </div>
      <div className='box'>
        <div className='box1'>
          <Appp />
        </div>
        <div className='box1'>
          <Rules1 />
        </div>
      
      </div>
    </div>
    
    
    </>
  );
}

export default App;