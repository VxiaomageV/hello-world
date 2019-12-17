<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <brandlist2 />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import paomadeng from "./components/paomadeng";
import jisuanqi from "./components/jisuanqi";
import fortest from "./components/fortest";
import brandlist from "./components/brandlist";
import brandlist2 from "./components/brandlist2";
import filter1 from "./components/filter1"

export default {
  name: "App",
  components: {
    HelloWorld,
    paomadeng,
    jisuanqi,
    fortest,
    brandlist2,
    filter1
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
