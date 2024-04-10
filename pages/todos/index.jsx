import React, { useEffect, useState } from 'react'


const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');

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


    return (
        <div>
            <ul>
                {todos.map((todo) => <Link href={`/api/todos/${todo.id}`} key={todo.id}><li>{todo.todo}</li></Link>)}
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
        </div>
    )


}

export default Todos


