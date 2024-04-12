import React, { useEffect, useState } from 'react'


const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');
    const [todoId, setTodoId] = useState('')
    const [newTodo, setNewTodo] = useState('')

    const getData = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data
    }

    useEffect(() => {
        getData('/api/todos').then((data) => {
            if (data) {
                setTodos(data)
            }
        })
    }, []);


    const submitHandler = async () => {
        const res = await fetch('/api/todos', {
            method: "POST",
            body: JSON.stringify({ todo: todoInput }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data)
    }


    const deleteHandler = async () => {
        const res = await fetch('/api/todos', {
            method: "DELETE",
        });
        const data = await res.json();
        setTodos(data.data);
        console.log(data)
    }


    const putHandler = async () => {
        const res = await fetch('/api/todos', {
            method: "PUT",
            body: JSON.stringify([{ id: 5, todo: 'todo five' }, { id: 6, todo: 'todo six' },]),
            headers: { "Content-Type": "application/json" },
        })
        const data = await res.json();
        setTodos(data.data)
        console.log(data)
    }


    const patchHandler = async () => {
        const res = await fetch(`/api/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({ todo: newTodo }),
            headers: { "Content-Type": "application/json" },
        })
        const data = await res.json();
        setTodos(data)
        setNewTodo('');
        setTodoId('')
    }

    return (
        <div>
            <ul>
                {todos.map((todo) => <li key={todo.id}>{todo.todo}</li>)}
            </ul>

            <div>
                <input type="text" name="todo" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
                <button onClick={submitHandler}>create todo</button>
            </div>

            <div>
                <button onClick={deleteHandler}>Delete All</button>
            </div>

            <div>
                <button onClick={putHandler}>Replqace All</button>
            </div>

            <div>
                <input
                    type="text"
                    value={todoId}
                    placeholder='id'
                    onChange={(e) => setTodoId(e.target.value)} />

                <input
                    type="text"
                    value={newTodo}
                    placeholder='New todo'
                    onChange={(e) => setNewTodo(e.target.value)} />
            </div>

            <div>
                <button onClick={patchHandler}>Patch handler</button>
            </div>
        </div>
    )


}

export default Todos


