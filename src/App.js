import { useReducer } from 'react';
import './index.css';

function App() {

  // const initial = {
  //   count: 0
  // }

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'increment':
  //       return { count: state.count + 1 }
  //     case 'decrement':
  //       return { count: state.count - 1 }
  //     case 'reset': 
  //       return { count: initial.count }

  //     default:
  //       return state
  //   }
  // }

  const initial = {
    name : '',
    password : '',
    email : ''
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'name':
        return {...state, name: action.payload.name}
      case 'password':
        return {...state, password: action.payload.password}
      case 'email':
        return {...state, email: action.payload.email}
      default:
        return { state }
    }
  }

  const handleSubmit = () => {
    alert(state.name + state.password + state.email)
  }

  const [state, dispatch] = useReducer(reducer, initial)

  return (
    <div className="w-screen">
      {/* <button onClick={() => dispatch({ type: 'decrement' }) }>decrement</button>
      <h1 className='text-red-500' >{state.count}</h1>
      <button onClick={() => dispatch({type: 'increment'})}>increment</button>
      <button onClick={() => dispatch({type: 'reset'}) } >Reset</button> */}

      <div className='flex flex-col w-full items-center justify-center'>
        <div className='w-96 flex flex-col'>
          <input className='border-b-2 border-green-400 focus:outline-none  p-1' type="text" name='name' placeholder='name' onChange={(e) => dispatch({ type: 'name', payload: {name: e.target.value} })} />
          <input className='border-b-2 border-green-400 focus:outline-none  p-1' type="email" name='email' placeholder='email' onChange={(e) => dispatch({ type: 'email', payload: {email: e.target.value} })} />
          <input className='border-b-2 border-green-400 focus:outline-none  p-1' type="password" name='password' placeholder='password' onChange={(e) => dispatch({ type: 'password', payload: {password: e.target.value} })} />
          <button onClick={() => handleSubmit() }>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
