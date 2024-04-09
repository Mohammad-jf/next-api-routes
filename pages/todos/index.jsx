import React, { useEffect, useState } from 'react'


const Todos = () => {
    const [todos, setTodos] = useState([]);

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


    return (
        <div>
            <ul>
                {todos.map((todo) => <li key={todo.id}>{todo.todo}</li>)}
            </ul>
        </div>
    )


}

export default Todos


