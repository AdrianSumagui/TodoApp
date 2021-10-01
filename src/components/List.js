import React, {useState} from "react";
import Form from './Form';
import Todo from './Todo';

function List() {

    const [todos, setTodos] = useState([])

    // Añadir una tarea en la lista.

    const addTodo = todo => {
 
        if (!todo.text || /^\s*$/.test(todo.text)) {

            return

        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        //console.log(todo, ...todos);

    };

    // Editar una tarea en la lista.

    const updateTodo = (todoId, newValue) => {

        if (!newValue.text || /^\s*$/.test(newValue.text)) {

            return

        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));

    };

    // Eliminar una tarea en la lista.

    const removeTodo = id => {

        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);

    };


    // Marcar como como 'COMPLETADA' una tarea de la lista.

    const completeTodo = id => {

        let updatedTodos = todos.map(todo => {

            if (todo.id === id) {

                todo.isComplete = !todo.isComplete

            }
            
            return todo;

        });

        setTodos(updatedTodos);

    };

    return (

        <div>

            <h1>¿Qué tienes pensado hacer el día de hoy?</h1>
            <Form onSubmit = {addTodo}/>
            <Todo todos = {todos} completeTodo = {completeTodo}
            removeTodo = {removeTodo} updateTodo = {updateTodo}
            />
            
        </div>

    );

};

export default List;