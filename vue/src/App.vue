<script setup lang="ts">
  const currentTime = new Date();
  const fullTime = currentTime.getTime() - window.performance.timing.requestStart;
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" /><br>
  <span>The page rendered in {{fullTime}}ms</span>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
