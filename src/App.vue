<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <brandlist />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import paomadeng from "./components/paomadeng";
import jisuanqi from "./components/jisuanqi";
import fortest from "./components/fortest";
import brandlist from "./components/brandlist";

export default {
  name: "App",
  components: {
    HelloWorld,
    paomadeng,
    jisuanqi,
    fortest,
    brandlist,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
