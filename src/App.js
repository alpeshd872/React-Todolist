
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/Todolist';
import React,{useState,useEffect} from 'react';
function App() {
 
  const[inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const[status,setStatus]=useState('all');
  const[filteredTodos,setFilterTodos]=useState([]);
  useEffect(()=>{
    getLocalTodos();
  },[]);
  useEffect(()=>{
    filterHandle();
    saveLocalTodos();
  },[todos,status]);
  const filterHandle=()=>{
    switch(status){
      case'completed':
      setFilterTodos(todos.filter(todo => todo.completed === true));
      break;
      case'uncompleted':
      setFilterTodos(todos.filter(todo => todo.completed === false));
      break;
      default:
        setFilterTodos(todos);
        break;

    }

  };
  const saveLocalTodos = ()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  };
  const getLocalTodos =()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todoLocal= JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>My Todo list</h1>
      </header>
      <Form inputText={inputText} 
      todos ={todos}
       setTodos={setTodos}
       setInputText={setInputText}
       setStatus={setStatus}
       
      />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
