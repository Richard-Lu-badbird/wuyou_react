import { useState, forwardRef, useRef, useImperativeHandle } from "react"

const Child = forwardRef(function (props, ref) {
  useImperativeHandle(ref, ()=> ({
    myFn: () => {
      console.log('子组件myFn方法');
    }
  }))
  return (
    <div>子组件</div>
  )
})
export default function App(params) {

  //事例1:useRef记录普通变量
  // const [count, setCount] = useState(0)
  
  // const prev = useRef()
  // function handleClick() {
  //   prev.current = count
  //   setCount(count + 1)
  // }
  // return (
  //    <div>
  //       <p>最新的count:{count}</p>
  //       <button onClick={handleClick}>增大count</button>
  //       <p>旧的count:{prev.current}</p>
  //    </div>
  // )
  //事例2:useRef记录标签
  // const inputRef = useRef(null)
  // function handleClick() {
  //   inputRef.current.focus()
  // }
  // return (
  //   <div>
  //     <input type="text" ref={inputRef}/>
  //     <button onClick={handleClick}>按钮</button>
  //   </div>
  // )



  //事例3:useRef记录子组件
  const childRef = useRef()
  function handleClick() {
    childRef.current.myFn()
  }
  return (
    <div>
      <Child ref={childRef}/>
      <button onClick={handleClick}>按钮</button>
    </div>
  )
}