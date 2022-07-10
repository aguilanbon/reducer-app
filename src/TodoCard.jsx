import React from 'react'

function TodoCard({ todos, dispatch }) {
    return (
        <div className='flex flex-col'>
            {todos.map(userTodo => (
                <div key={userTodo.id}>
                    {userTodo.isCompleted === true ? <p className='text-red-500'>{userTodo.name} </p> : <p>{userTodo.name} </p>}
                    <p>{userTodo.isCompleted}</p>
                    <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: { id: userTodo.id } })}>Toggle</button>
                    <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id: userTodo.id } })} >Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TodoCard