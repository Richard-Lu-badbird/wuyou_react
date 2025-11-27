import { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  const hanldeDecrement = () => {
    setCount(count - 1);
  };
  //只执行一次
  useEffect(() => {
    console.log("useEffect");
  }, []);
  //只要组件有状态变更，就会执行
  useEffect(() => {
    console.log("useEffect");
  });
  //只有当count发生状态变更的时候，才会执行副作用函数
  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  return (
    <div style={{ padding: 10 }}>
      <button onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button onClick={hanldeDecrement}>-</button>
    </div>
  );
}
