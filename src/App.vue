<template>
  <div id="app">
    <r-section color="secondary">
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </r-section>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { RSection } from "./components";

export default {
  name: "App",
  components: {
    HelloWorld,
    RSection,
  },
};
</script>

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
