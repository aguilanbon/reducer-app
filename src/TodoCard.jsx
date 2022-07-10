import React from 'react'

function TodoCard({ todos, dispatch }) {
    return (
        <div className='flex flex-col'>
            {todos.map(userTodo => (
                <div key={userTodo.id} className="flex w-full justify-between my-2">
                    <p className={userTodo.isCompleted ? 'line-through' : '' } >{userTodo.name}</p> 
                    <div className='flex'>
                        <button className='text-xs mx-1 bg-orange-300 px-2 rounded-md text-white hover:bg-orange-500' onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: { id: userTodo.id } })}>Toggle</button>
                        <button className='text-xs mx-1 bg-red-300 px-2 rounded-md text-white hover:bg-red-500' onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id: userTodo.id } })} >Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoCard