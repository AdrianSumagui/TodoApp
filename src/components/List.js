import React, {useState} from "react";
import Form from './Form';

function List() {

    const [todos, setTodos] = useState([])

    // Añadir una tarea a la lista.

    const addTodo = todo => {
 

        if (!todo.text || /^\s*$/.test(todo.text)) {

            return

        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        console.log(todo, ...todos);

    }

    return (

        <div>
            <h1>¿Qué tienes pensado hacer el día de hoy?</h1>
            <Form onSubmit = {addTodo}/>
        </div>

    );

};

export default List;