import { useState } from "react";
import "./App.css";
import CoolInput from "./CoolInput";
import VibrateButton from "./VibrateButton";
import ReadOnlyTextArea from "./ReadOnlyTextArea";

function App() {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState('');

  function handleInputChange(id, val) {
    setInputs((prev) => ({ ...prev, [id]: val }));
  }

  async function handleSendToBackend() {
    console.log("Prepare data to be sent to the backend:", inputs);

    try {
      const res = await fetch("/api/wpscan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
      if (res.ok) {
        const data = await res.json();
        setResult(JSON.stringify(data, null, 2));
        alert("Sent successfully！");
      } else {
        alert("Failed to send!");
      }
    } catch (err) {
      alert("Network Error!");
    }
  }

  return (
    <>
      <div>
        <h2>WordPress scan</h2>
        <CoolInput
          id="url-input"
          width="300px"
          height="50px"
          color="#FF4500"
          placeholder="URL"
          onChange={handleInputChange}
        />
        <br />
        <CoolInput
          id="apikey-input"
          width="300px"
          height="50px"
          color="#0080FF"
          placeholder="API key"
          onChange={handleInputChange}
        />
        <br />
        <VibrateButton
          color="#f4a261"
          width="180px"
          height="60px"
          children="Start"
          onClick={handleSendToBackend}
        ></VibrateButton>
      </div>
      <div>
        <h3>scanning result</h3>
        <ReadOnlyTextArea value={result} height="300px" width="600px" />
      </div>
    </>
  );
}

export default App;
