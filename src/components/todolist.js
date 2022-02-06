import React from 'react';
import Todo from './todo';

const Todolist = ({todos , setTodos}) => {
    console.log(todos);
    return (
        <div className = "todo-container">
            <ul className='todo-list'>
                {todos.map((todo) => (

                <Todo setTodos={setTodos} todos={todos} text={todo.text} key= {todo.id}/>

                ))}

            </ul>
            
        </div>
    );
}

export default Todolist;


