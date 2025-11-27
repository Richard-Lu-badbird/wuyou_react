import { memo, useCallback, useState } from "react"


//记忆组件，memo
const Button = memo(function ({onClick}) {
  console.log('Button渲染了');
  
  return (
    <button onClick={onClick}>子组件</button>
  )
})
export default function App() {

  const [count, setCount] = useState(0)
  const handleUpdate = () => setCount(count + 1)
  const handleClick = useCallback(() => console.log('点击按钮'), []);
  
  return (<div>
    <p>count:{count}</p>
    <button onClick={handleUpdate}>点击</button>
    <br/>
    <Button onClick={handleClick}></Button>
  </div>
  )
}