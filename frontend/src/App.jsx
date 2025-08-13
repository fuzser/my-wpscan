import { useState } from "react";
import "./App.css";
import CoolInput from "./CoolInput";
import VibrateButton from "./VibrateButton";
import ReadOnlyTextArea from "./ReadOnlyTextArea";
import WpscanTokenGuide from "./WpscanTokenGuide";

function App() {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  function handleInputChange(id, val) {
    setInputs((prev) => ({ ...prev, [id]: val }));
  }

  async function handleSendToBackend() {
    console.log("Prepare data to be sent to the backend:", inputs);
    console.log("JSON to send:", JSON.stringify(inputs, null, 2));
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
        <WpscanTokenGuide />
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>WordPress scan</h2>
        <CoolInput
          id="url-input"
          width="300px"
          height="50px"
          color="#FF4500"
          placeholder="URL"
          onChange={handleInputChange}
          marginTop="20px"
        />
        <br />
        <CoolInput 
          id="token-input"
          width="600px"
          height="50px"
          color="#0080FF"
          placeholder="Token"
          onChange={handleInputChange}
          marginTop="20px"
          marginBottom="20px"
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
      <div style={{ textAlign: "center" }}>
        <h3>Scanning Result</h3>
        {loading && (
          <div style={{ margin: "10px 0", color: "#f4a261" }}>
            🔄 Scanning in progress...
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ReadOnlyTextArea value={result} height="300px" width="600px" />
        </div>
      </div>
    </>
  );
}

export default App;
