import "./App.css";
import { memo, useCallback, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => setCount(count + 1), [count]);
  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={incrementCount}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <ChildComponent count={count} onClick={incrementCount}/>
    </div>
  );
}

const ChildComponent = memo(({ count, onClick }) => {
  console.log("child is rendering");
  return (
    <div>
      <h2>This is a child component.</h2>
      <h4>Count: {count}</h4>
      <button onClick={onClick}>Increment counter</button>
    </div>
  );
});

export default App;
