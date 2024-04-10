import { useRouter } from "next/router";
import { useEffect, useState } from "react"





const Todo = () => {
    const [todo, setTodo] = useState({});
    const router = useRouter();



    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/todos/${router.query.todoId}`)
            const data = await res.json();
            setTodo(data);
        }

        fetchData();
    }, [router.query.todoId]);


    if (todo) {
        return (
            <div>
                <h3>todo</h3>
                <h2>{todo.id}</h2>
                <h1>{todo.todo}</h1>
            </div>
        )
    } else {
        return <h3> loading...</h3>
    }
}

export default Todo



