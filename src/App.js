import "./App.css";

function App() {

  const sendMessageToParent = (data = null) => {
    const iframe = document.querySelector("#modelViewerFrame");
    if(iframe) {
      iframe.contentWindow.postMessage(data, "*");
      console.log("data sent to child : " + data);
    }
  }

  const sendData = (values) => {
    if(!values) return;
    console.log("values", values)
    sendMessageToParent(values)
  }

  return (
    <div className="App">
      <div className="container">
        <iframe id="modelViewerFrame" src="https://mainecottage.imagine.io/product_2?mode=configurator" allowFullScreen />
      </div>

      <div className="container">
        <div className="row">
          <p className="title">Frame</p>
          <div className="col">
            <button className="option" onClick={() => sendData({ id: 0, type: 'frame' })}>2 leg frame</button>
            <button className="option" onClick={() => sendData({ id: 1, type: 'frame' })}>3 leg frame</button>
          </div>
        </div>

        <div className="row">
          <p className="title">Cleg</p>
          <div className="col">
            <button className="option" onClick={() => sendData({ id: 0, type: 'leg' })}>Rectangle</button>
            <button className="option" onClick={() => sendData({ id: 1, type: 'leg' })}>Round</button>
          </div>
        </div>

        <div className="row">
          <p className="title">Column Orientation</p>
          <div className="col">
            <button className="option" onClick={() => sendData({ id: 0, type: 'orientation' })}>Standard</button>
            <button className="option" onClick={() => sendData({ id: 1, type: 'orientation' })}>Reversed</button>
          </div>
        </div>

        <div className="row">
          <p className="title">Color</p>
          <div className="col">
            <button className="option" onClick={() => sendData({ id: 0, type: 'color' })}>Silver</button>
            <button className="option" onClick={() => sendData({ id: 1, type: 'color' })}>Black</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
