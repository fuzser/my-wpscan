import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoolInput from './CoolInput'
import Hello from './test'



function App() {
  const [count, setCount] = useState(0)

  function handleInputChange(value) {
    console.log('', value);
    // 这里可以调用后端API
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
    <div style={{ padding: '40px' }}>
      <h2>酷炫可配置输入框 Demo</h2>
      <CoolInput
        width="400px"
        height="60px"
        color="#315486ff"
        onChange={handleInputChange}
        placeholder="url"
      />
    </div>
    <div style={{ padding: '40px' }}>
      <h2>酷炫可配置输入框 Demo</h2>
      <CoolInput
        width="400px"
        height="60px"
        color="#bcc5d1ff"
        onChange={handleInputChange}
        placeholder="url"
      />
    </div>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
