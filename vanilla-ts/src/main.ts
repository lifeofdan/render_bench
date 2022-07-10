import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <p>The page rendered in <span id="renderTime"></span>ms</p>
`
const currentTime = new Date();
const fullTime = currentTime.getTime() - window.performance.timing.requestStart;
document.getElementById('renderTime').innerHTML = fullTime;
