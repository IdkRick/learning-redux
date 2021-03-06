import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Components/actions";

function App() {
   const counter = useSelector(state => state.counter);
   const isLogged = useSelector(state => state.isLogged);
   const dispatch = useDispatch();

   return (
      <div className="App">
         <h1>Counter: {counter}</h1>
         <button onClick={() => dispatch(increment(5))}>+</button>
         <button onClick={() => dispatch(decrement())}>-</button>

         {isLogged ? <h3>You are logged</h3> : <h3>You are not logged</h3>}
      </div>
   );
}

export default App;
