import { useReducer } from 'react';
import './index.css';

function App() {


  // const initial = {
  //   post: []
  // }

  // // const url = 'https://random-data-api.com/api/'

  const initial = {
    count: 0
  }


  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initial)

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: 'decrement' }) }>decrement</button>
      <h1 className='text-red-500' >{state.count}</h1>
      <button onClick={() => dispatch({type: 'increment'})}>increment</button>
    </div>
  );
}

export default App;
