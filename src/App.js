import { Fragment } from "react/jsx-runtime";

function App() {
  const divContent = "标签内容";
  const divTitle = "标签标题";

  const flag = false;
  let content = null;

  
  if (flag) {
    content = <span>flag是true</span>;
  } else {
    content = <p>flag是false</p>;
  }

  const list = [
    { id: 1, name: "小路" },
    { id: 2, name: "小丽" },
    { id: 3, name: "小查" },
  ];

  const listContent = list.map((item) => (
    <Fragment key={item.id}>
      <li>{item.name}</li>
      <span>cnm</span>
    </Fragment>
  ));

  function handleClick(e) {
    console.log('点击了按钮', e);
    
  }
  return (
    <>
      <div title={divTitle}>{divContent}</div>
      <div>{content}</div>
      <ul>{listContent}</ul>
      <button onClick={handleClick}>按钮:更改flag的属性</button>
    </>
  );
}

export default App;
