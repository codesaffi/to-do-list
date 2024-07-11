// // src/App.jsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, rest } from './counterSlice';
// import './index.css'

// function App() {
//   const count = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Counter: {count}</h1>
//         <button onClick={() => dispatch(increment())}>Increment</button>
//         <button onClick={() => dispatch(rest())}>Rest</button>
//         <button onClick={() => dispatch(decrement())}>Decrement</button>
//       </header>
//     </div>
//   );
// }

// export default App;



// src/App.jsx
import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
