import React from 'react';

const Form = ({setInputText,inputText,todos,setTodos,setStatus}) =>{
    const inputTextHandle = (e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submiTodoHandle = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText,completed:false,id: Math.random() * 1000}
        ]);
        setInputText("");
    };
    const statusHandle = (e)=>{
      setStatus(e.target.value);
    }
    return(
        <form>
        <input value={inputText} onChange={inputTextHandle} type="text" className="todo-input" />
        <button className="todo-button" type="submit" onClick={submiTodoHandle}>
        <i class="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandle} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};
export default Form;
