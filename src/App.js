import "./App.css";
import {useEffect, useState} from 'react'

function App() {

  const [productImage, setProductImage] = useState('');
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

  function onMessageHandler(event) {
    console.log("event", event);
    if (typeof event.data === "string" && event.data !== '') {
      // messageArea.innerText = event.data;
      console.log("data sent to parent : " + event.data);
      setProductImage(event.data);
    }
  }

  useEffect(() => {
    window.addEventListener("message", onMessageHandler);
  }, [])

  return (
    <div className="App">
      <div className="container">
        {/* Add the link to the model viewer iframe here */}
        <iframe id="modelViewerFrame" src="http://localhost:3000/8" allowFullScreen />
      </div>

      <div className="container">

        <div className="row">
          <p className="title">Upholstery</p>
          <div className="col">
            {/* send information is a json format to the iframe here */}
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

        <div className="row">
          <p>Get your checkout image here - </p>
          <div className="col">
            <button onClick={() => sendData({ name: "getImage", type: 'button' })}>Get Image</button>
            {productImage && productImage !== '' && <img src={productImage} alt="prodImg"/>}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
