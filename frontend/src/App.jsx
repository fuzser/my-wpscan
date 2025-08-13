import { useState } from "react";
import "./App.css";
import CoolInput from "./CoolInput";
import VibrateButton from "./VibrateButton";
import ReadOnlyTextArea from "./ReadOnlyTextArea";

function App() {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  function handleInputChange(id, val) {
    setInputs((prev) => ({ ...prev, [id]: val }));
  }

  async function handleSendToBackend() {
    console.log("Prepare data to be sent to the backend:", inputs);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/wpscan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
      if (res.ok) {
        const data = await res.json();
        setResult(data.data.message);
        //alert("Sent successfully！");
      } else {
        const errData = await res.json();
        alert(errData.error || "Failed to send!");
      }
    } catch (err) {
      alert("Network Error!");
    }
    setLoading(false);
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
          children={loading ? "Scanning..." : "Start"}
          onClick={handleSendToBackend}
          disabled={loading} // 请求中禁用按钮，防止重复点击
        />
      </div>
      <div>
        <h3>scanning result</h3>
        {loading && (
          <div style={{ margin: "10px 0", color: "#f4a261" }}>
            🔄 Scanning in progress...
          </div>
        )}
        <ReadOnlyTextArea value={result} height="300px" width="600px" />
      </div>
    </>
  );
}

export default App;
