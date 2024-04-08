import React from 'react'

const Todos = ({ data }) => {
    return (
        <div>
            <ul>
                {data.map((todo) => <li key={todo.id}>{todo.todo}</li>)}
            </ul>
        </div>
    )


}

export default Todos


export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/todos');
    const data = await res.json();


    return {
        props: {
            data
        }
    }
}