function Detail({content, active}) {
  return (
    <>
      <p>{content}</p>
      <p>状态: {active ? "显示中" : "已隐藏"}</p>
    </>
  );
}

function Article({ title, detailData }) {
  return (
    <div>
      <h2>{title}</h2>
      <Detail {...detailData}/>
    </div>
  );
}

export default function App() {
  const articleData = {
    title: '标题2',
    detailData: {
      content: '内容1',
      active: true
    }
  }
  return (
    <>
      <Article {...articleData} />
    </>
  );
}
