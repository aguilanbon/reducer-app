import React from 'react'

function TodoCard({ state }) {
    return (
        <div className='flex flex-col'>
            {state.map(userTodo => (
                <div key={userTodo.id}>
                    <p>{userTodo.name}</p>
                </div>
            ))}
        </div>
    )
}

export default TodoCard