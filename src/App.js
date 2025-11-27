import { useMemo, useState } from "react"

function DoSomeMath({value}) {

  const result = useMemo(()=>{
    console.log('DoSomeMath has done');
    let result = 0;
    for (let i = 0; i< 1000000; i++) {
      result += value * 2
    }
    return result;
  }, [value])
  
  return (
    <div>
      <p>输入内容:{value}</p>
      <p>经过复杂计算的数据:{result}</p>
    </div>
  )
}

export default function App() {

  const [inputValue, setInputValue] = useState(5)
  const [count, setCount] = useState(0)


  return (
    <div>
      <p>count的值为:{count}</p>
      <button onClick={() => setCount(count + 1)}>点击更新</button>
      <br/>
      <br/>
      <input type="number" value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value))}/>
      <DoSomeMath value={inputValue}></DoSomeMath>
    </div>

  )
}