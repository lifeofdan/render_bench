import logo from './logo.svg'
import './App.css'

function App() {
  const currentTime = new Date();
  const fullTime = currentTime - window.performance.timing.requestStart;
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The page rendered in <span id="renderTime">{fullTime}</span>ms</p>
      </header>
    </div>
  )
}

export default App
