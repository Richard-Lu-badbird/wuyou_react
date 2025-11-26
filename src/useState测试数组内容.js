import { useState } from "react";

function Test() {

  const [data, setData] = useState([
    { id: 1, name: "小路" },
    { id: 2, name: "小丽" },
    { id: 3, name: "小查" },
  ]);


  const listData = data.map(item => (
    <li key={item.id}>{item.name}</li>
  ))

  let id = 3
  function handleClick(e) {
    setData([
        ...data,
        {id: ++id, name: '小号毛'}
    ]);
  }
  return (
    <>
      <ul>{listData}</ul>
      <button onClick={handleClick}>按钮</button>
    </>
  );
}

export default Test;
