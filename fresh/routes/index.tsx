/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p class={tw`my-6`}>
        Welcome to `fresh`. This is my janky benchmark. 
      </p>
      <p>The page rendered in <span id="renderTime"></span>ms</p>
      <script>
        const currentTime = new Date();
        const fullTime = currentTime - window.performance.timing.requestStart;
        document.getElementById('renderTime').innerHTML = fullTime;
      </script>        
    </div>
  );
}
