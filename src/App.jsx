import { useState } from 'react'
import './App.css'
import CoolInput from './CoolInput'
import VibrateButton from './VibrateButton'



function App() {
  const [count, setCount] = useState(0)

  function handleInputChange(id, val) {
    setInputs(prev => ({ ...prev, [id]: val }));
  }

  async function handleSendToBackend() {
    console.log('Prepare data to be sent to the backend:', inputs);

    // 例：调用后端 API
    try {
      const res = await fetch('/api/save-inputs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });
      if (res.ok) {
        alert('Sent successfully！');
      } else {
        alert('Failed to send!');
      }
    } catch (err) {
      alert('Network Error!');
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
        onClick={handleSendToBackend}
        >

        </VibrateButton>
      </div>
      

    </>
  )
}

export default App
