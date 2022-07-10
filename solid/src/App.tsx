import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const currentTime = new Date();
  const fullTime = currentTime.getTime() - window.performance.timing.requestStart;
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          The page rendered in <span>{fullTime}</span>
        </p>
      </header>
    </div>
  );
};

export default App;
