import './App.css';
import Header from './MyComponents/Header';
/* header is not written in {} bcoz it is set by default but footer and todos is set in constant
and when constant here you have to write it within {} */
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import React, { useState , useEffect} from 'react';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = []
 }
 else{
  initTodo = JSON.parse(localStorage.getItem("todos"));

 }

  const onDelete = (todo)=>{
  console.log("I am ondelte of todo", todo);

  
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
 localStorage.setItem("todos",JSON.stringify(todos));
}

  
    const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title,desc)
    let sno;
    if(todos.length==0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);   
    
    localStorage.setItem("todos",JSON.stringify(todos));
    
  }
  const[todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])
    /*with this -> [] you are creating an array of todos
    and the setTodos update todos everytime the browser is reloaded*/

  return (
   /* 
   ---- TO RETURN ANYTHING IN JSX PUT IT IN <> OPENING ,AND </> CLOSING TAGS:---

    <>
    <h3>My App</h3>
    <p>My app works</p>
    </>
    */

   <>
    <Header title=" My Todos List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
   </>
  );
}

export default App;


