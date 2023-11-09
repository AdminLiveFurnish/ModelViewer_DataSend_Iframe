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
        <iframe id="modelViewerFrame" src="https://mainecottage.imagine.io/3" allowFullScreen />
        {/* <iframe id="modelViewerFrame" src="http://localhost:3000/1" allowFullScreen /> */}
      </div>

      <div className="container">

        <div className="row">
          <p className="title">Upholstery</p>
          <div className="col">
            <button className="option" onClick={() => sendData({ name: "Thatch : Bluebell", type: 'Upholstery' })}>Thatch: Bluebell</button>
            <button className="option" onClick={() => sendData({ name: "Boomerang: Cloud", type: 'Upholstery' })}>Boomerang: Cloud</button>
            <button className="option" onClick={() => sendData({ name: "Crazy Daisy : Nikko Blue", type: 'Upholstery' })}>Crazy Daisy: Nikko Blue</button>
            <button className="option" onClick={() => sendData({ name: "Grand Mum : Sun", type: 'Upholstery' })}>Grand Mum: Sun</button>
          </div>
        </div>

        <div className="row">
          <p className="title">Leg</p>
          <div className="col">
            <button className="option" onClick={() => sendData({ name: "Nordic", type: 'Leg Finish' })}>Nordic</button>
            <button className="option" onClick={() => sendData({ name: "Fruitwood", type: 'Leg Finish' })}>Fruitwood</button>
            <button className="option" onClick={() => sendData({ name: "Java", type: 'Leg Finish' })}>Java</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
