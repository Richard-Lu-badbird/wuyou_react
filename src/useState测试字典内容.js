import { useState } from "react";

function Test() {

    const [data, setData] = useState({
        title: '默认标题',
        content: '默认内容'
    })
    function handleClick(e) { 
        setData({
            ...data,
            content: '新内容'
        })
    }
    return (
        <>
            <div title={data.title}>{data.content}</div>
            <button onClick={handleClick}>点我试试？</button>
        </>
    )
}

export default Test;