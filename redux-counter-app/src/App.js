import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default App;