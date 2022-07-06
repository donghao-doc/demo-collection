<template>
  <div id="app">
    <ScanBarCode />
  </div>
</template>

<script>
import VConsole from 'vconsole'
import ScanBarCode from "@/components/ScanBarCode";
export default {
  name: 'App',
  components: { ScanBarCode },
  mounted() {
    new VConsole();
  }
}
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
