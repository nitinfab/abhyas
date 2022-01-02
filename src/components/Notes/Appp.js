import React from "react";
import "../../PopUp.css"
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from "./PopUp";
import "../../Appp.css"


function Todo({ todo, index, removeTodo }) {
  const [hover, setHover] = React.useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <>
      {todo.map((v, index) => {
        return (
          <div
      className="todo out"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
          <div className="output">
          <h3>{v[0]}</h3>
          <p>{v[1]}</p>
          </div>
          <div >
          {hover ? 
          <>
            {/* <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '} */}
            <Button className="rem" variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
          </> : ""
          }
         
        </div>
        </div>
        );
      })}
      </>
      
   
  );
}

function Appp() {
  const [todos, setTodos] = React.useState([
    
  ]);
  

  const addLog = (log) => {
    const newTodos = [...todos, log];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
      <div className="containr">
        <Popup addLog={addLog} />
          
        <Todo
        todo={todos}
        // markTodo={markTodo}
        // index={index}
        removeTodo={removeTodo}
        />
      </div>
  );
}

export default Appp;