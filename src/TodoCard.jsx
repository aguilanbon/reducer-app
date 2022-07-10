import React from 'react'

function TodoCard({ todos, dispatch }) {
    return (
        <div className='flex flex-col'>
            {todos.map(userTodo => (
                <div key={userTodo.id}>
                    <p>{userTodo.name} </p>
                    <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id: userTodo.id } })} >Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TodoCard