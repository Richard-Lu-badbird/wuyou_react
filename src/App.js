import { Fragment } from "react/jsx-runtime";
import image from "./logo.svg";
function App() {
  const imgStyleObj = {
    width: 200, //这里默认单位是px
    //width: "100vh"
    height: 200,
    backgroundColor: "grey",
  };

  const imgData = {
    className: 'hi',
    style: {
      width: 200,
      height: 200,
      backgroundColor: 'grey'
    }

  }
  return (
    <>
      <div>
        <img
          src={image}
          alt=""
          className="small"
          style={imgStyleObj}
        ></img>
      </div>

      <div>
        <img
        src={image}
        alt=""
        {...imgData}></img>
      </div>
    </>
  );
}

export default App;
