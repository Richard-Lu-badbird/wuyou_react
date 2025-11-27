import { useState,useReducer } from "react"


function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      throw new Error('')
  }
}
export default function App() {
  //Reducer用于统一管理状态的操作方式
  //先复习useState的方式

  // const handleIncrement = () => setState(state + 1)
  // const handleDecrement = () => setState(state - 1)
  // const [state, setState] = useState(0)
  // return (
  //   <div style={{padding: 10}}>
  //     <button onClick={handleDecrement}>-</button>
  //     <span>{state}</span>
  //     <button onClick={handleIncrement}>+</button>
  //   </div>
  // )

  //使用Reducer来实现

  const [count, dispatch] = useReducer(countReducer, 0)
  const handleIncrement = () => dispatch({type: "increment"})
  const handleDecrement = () => dispatch({type: "decrement"})
  return (
    <div style={{padding: 10}}>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}