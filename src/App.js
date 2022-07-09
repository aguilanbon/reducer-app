import { useState } from 'react';
import { useReducer } from 'react';
import './index.css';
import TodoCard from './TodoCard';

function App() {

  const [todo, setTodo] = useState('')

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload]
      default:
        return { state }
    }
  }

  const handleSubmit = () => {
    dispatch({ type: 'ADD_TODO', payload: {name: todo, id: Date.now(), isCompleted: false} })
    setTodo('')
  }

  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="w-screen">
      <div className='flex flex-col w-full items-center justify-center'>
        <div className='w-96 flex flex-col'>
          <input className='border-b-2 border-green-400 focus:outline-none  p-1' type="text" name='name' placeholder='name' value={todo}  onChange={(e) => setTodo(e.target.value)} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className='w-96 flex flex-col m-8'>
            <h1 className='font-bold'>Your Todos</h1>
            <TodoCard state={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
