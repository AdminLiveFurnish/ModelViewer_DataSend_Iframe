import "./App.css";

function App() {

  const sendMessageToParent = (data = null) => {
    const iframe = document.querySelector("#modelViewerFrame");
    if(iframe) {
      iframe.contentWindow.postMessage(data, "*");
      console.log("data sent to child: " + data);
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
        <iframe id="modelViewerFrame" src="https://mainecottage.imagine.io/product_1" allowFullScreen />
      </div>

      <div className="container">
        <div className="row">
          <p className="title">Frame</p>
          <div className="col">
            <button className="option" onClick={() => sendData({ id: 0, type: 'frame' })}>Stationary</button>
            <button className="option" onClick={() => sendData({ id: 1, type: 'frame' })}>Swivel</button>
          </div>
        </div>

        {/* <div className="row">
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
        </div> */}

        <div className="row">
          <p className="title">Upholstery</p>
          <div className="col">
            <button className="option" onClick={() => sendData({ id: 0, type: 'color' })}>Thatch: Bluebell</button>
            <button className="option" onClick={() => sendData({ id: 2, type: 'color' })}>Boomerang: Cloud</button>
            <button className="option" onClick={() => sendData({ id: 6, type: 'color' })}>Crazy Daisy: Nikko Blue</button>
            <button className="option" onClick={() => sendData({ id: 22, type: 'color' })}>Grand Mum: Sun</button>
          </div>
        </div>

        <div className="row">
          <p className="title">Leg</p>
          <div className="col">
            <button className="option" onClick={() => sendData({ id: 93, type: 'color' })}>Nordic</button>
            <button className="option" onClick={() => sendData({ id: 94, type: 'color' })}>Fruitwood</button>
            <button className="option" onClick={() => sendData({ id: 95, type: 'color' })}>Java</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
