import React from "react";
//import { todosData } from "../data";
import { useState } from "react";
import { Button, ListGroup, ListGroupItem, Spinner } from "reactstrap";
import { IoTrashOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { NewTodo } from "./NewTodo";
import { TodoSummary } from "./TodoSummary";
import { useEffect } from "react";
import { addTodo, deleteTodo, getTodos, setDone } from "../assets/utils";

export const Todo = () => {
  const [todos, setTodos] = useState(null);
  console.log("renderelodik a Todo",todos);

  useEffect(()=>{
    getTodos(setTodos)
  },[])

  const handleDelete=async(id)=>{
    await deleteTodo(id)//az adatbazisban megtortenik a modositas
    getTodos(setTodos)
  }
  const handleAdd=async(task)=>{ 
    await addTodo(task)//az adatbazisban megtortenik a modostias
    getTodos(setTodos)
  }
  const handleDone=async(id)=>{
    await setDone(id)
    getTodos(setTodos)
  }
  const clearTodos=()=>{}


  return (
    <div style={{maxWidth:"600px", display:"flex",alignItems:"center",flexDirection:"column",margin:"auto"}}>
      <NewTodo handleAdd={handleAdd}/>
      <Button onClick={clearTodos}><IoTrashOutline style={{color:"red",fontSize:"2rem"}}/></Button>
      <ListGroup>
        {!todos &&<Spinner>Loading...</Spinner>}
        {todos && todos.map((obj) => (
          <ListGroupItem key={obj.id} className="d-flex gap-1 jusify-content-between align-items-center">
            <FaCheck style={{color:obj.completed ? "green" : "gray", fontSize:"2rem"}} onClick={()=>handleDone(obj.id)}/>
            <div style={{textDecoration:obj.completed ? "line-through": "none"}}>
            {obj.task}
            </div>
             <IoTrashOutline style={{color:"red",fontSize:"2rem"}} onClick={()=>handleDelete(obj.id)}/>
          </ListGroupItem>
        ))}
      </ListGroup>
      {console.log(todos)
      }
      {todos&&<TodoSummary todos={todos}/>}
    </div>
  );
};
