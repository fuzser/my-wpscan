import { useState } from "react";
import "./App.css";
import CoolInput from "./CoolInput";
import VibrateButton from "./VibrateButton";
import ReadOnlyTextArea from "./ReadOnlyTextArea";
import WpscanTokenGuide from "./WpscanTokenGuide";
import Spacer from "./Spacer";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  function handleInputChange(id, val) {
    setInputs((prev) => ({ ...prev, [id]: val }));
  }

  async function handleScanJson() {
    console.log("Prepare data to be sent to the backend:", inputs);
    console.log("JSON to send:", JSON.stringify(inputs, null, 2));
    setLoading(true);
    try {
      const res = await fetch("/api/wpscan", {
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

  // 新增处理函数
  async function handleSendToAI() {
    const inviteCode = inputs["Invite-Code"] || "";
    const readOnlyContent = result || "";

    const payload = { inviteCode, readOnlyContent };

    setLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        alert("Sent to AI successfully!");
        console.log("AI response:", data);

        // return the AI result to the read-only textbox
        document.getElementById("readonlyTextbox").value = data.result;
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
      <Header />
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
          onClick={handleScanJson}
          disabled={loading} // stop multiple clicks during request
        >          
          {loading ? "Scanning..." : "Go!"}
        </VibrateButton>
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
        <div>
          <p>Use an invitation code to get AI reading optimization</p>
        </div>
        <div>
          <CoolInput
            id="Invite-Code"
            width="600px"
            height="50px"
            color="#0080FF"
            placeholder="Invitation Code"
            onChange={handleInputChange}
            marginTop="20px"
            marginBottom="20px"
          />
          <VibrateButton
            color="#f4a261"
            width="90px"
            height="60px"
            onClick={handleSendToAI}
            disabled={loading}
          >
            {loading ? "Scanning..." : "Go!"}
          </VibrateButton>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
