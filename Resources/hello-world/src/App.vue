<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <COS30043 />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import COS30043 from "./components/COS30043.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    COS30043,
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
