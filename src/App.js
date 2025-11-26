function List({children, title, footer=<p>这是我的默认的footer</p>}) {
  return (
    <>
        <p>{title}</p>
        <ul>
          {children}
        </ul>
        {footer}
    </>

  )
}


export default function App() {

  return (
    <>
      <List
        title="列表1"
        footer={<p>这是我的单独的footer</p>}
      >
        <li>列表项1</li>
        <li>列表项1</li>
        <li>列表项1</li>
      </List>
      <List
        title="列表2"
      >
        <li>列表项2</li>
        <li>列表项2</li>
        <li>列表项2</li>
      </List>
    </>
  );
}

//JSX作为Props来传递