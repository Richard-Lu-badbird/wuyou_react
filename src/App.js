import { useState } from "react";
function Detail ({onActive}) {
  
  const [status, setStatus] = useState(true)
  const [text, setText] = useState('隐藏')
  function handleClick(e) {
    setStatus(!status)
    onActive(status)
    if (text == '显示') {
      setText('隐藏')
    } else {
      setText('显示')
    }
  }
  return (
    <div>
      <button onClick={handleClick}>点击按钮，使下方的文字{text}</button>
      <p style={{
        display: status ? 'block' : 'none'
      }}>Detail的内容</p>
    </div>
  )
}


export default function App() {


  function handleClick(status) {
    console.log(status);
  }
  return (
    <>
      <Detail onActive={handleClick}></Detail>
    </>
  );
}

//JSX作为Props来传递